import { defineAction, ActionError } from 'astro:actions';
import { z } from 'zod';

const cities = ['Košice', 'Bratislava', 'Piešťany', 'Liptovský Mikuláš', 'Malacky', 'Iné'] as const;

// In-memory rate limiter: max 5 submissions per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }

  if (entry.count >= 5) return false;

  entry.count++;
  return true;
}

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2, 'Meno musí mať aspoň 2 znaky').max(100).trim(),
      email: z.email('Neplatná emailová adresa').max(254).trim(),
      city: z.enum(cities),
      message: z.string().max(1000).trim().optional(),
      // Honeypot: bots fill this, humans don't
      website: z.string().max(0, 'Spam detected').optional(),
    }),
    handler: async ({ name, email, city, message, website }, ctx) => {
      // Honeypot check — bots typically fill hidden fields
      if (website) {
        throw new ActionError({ code: 'FORBIDDEN', message: 'Odoslanie zlyhalo.' });
      }

      // Rate limiting by IP
      const ip = ctx.request.headers.get('x-forwarded-for')
        ?? ctx.request.headers.get('cf-connecting-ip')
        ?? 'unknown';

      if (!checkRateLimit(ip)) {
        throw new ActionError({
          code: 'TOO_MANY_REQUESTS',
          message: 'Príliš veľa pokusov. Skúste to znovu za hodinu.',
        });
      }

      // TODO: connect your email service here (e.g. Resend, SendGrid, Nodemailer)
      // Example with Resend:
      // const resend = new Resend(import.meta.env.RESEND_API_KEY);
      // await resend.emails.send({
      //   from: 'web@kwanumzen.sk',
      //   to: import.meta.env.EMAIL_TO,
      //   subject: `Nový záujemca: ${name} — ${city}`,
      //   text: `Meno: ${name}\nEmail: ${email}\nMesto: ${city}\nSpráva: ${message ?? '—'}`,
      // });

      // Log submission without PII
      console.log(`[contact] submission from ${city} — ${new Date().toISOString()}`);

      return { success: true, name };
    },
  }),
};
