import { defineAction, ActionError } from 'astro:actions';
import { z } from 'zod';
import { Resend } from 'resend';

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

      // Send email via Resend (configure RESEND_API_KEY and EMAIL_TO in .env)
      const apiKey = import.meta.env.RESEND_API_KEY;
      const emailTo = import.meta.env.EMAIL_TO;

      if (apiKey && emailTo) {
        const resend = new Resend(apiKey);
        const { error } = await resend.emails.send({
          from: 'Kwan Um Zen <web@kwanumzen.sk>',
          to: emailTo,
          replyTo: email,
          subject: `Nový záujemca: ${name} — ${city}`,
          text: [
            `Meno: ${name}`,
            `Email: ${email}`,
            `Mesto: ${city}`,
            `Správa: ${message ?? '—'}`,
          ].join('\n'),
        });

        if (error) {
          console.error(`[contact] email send failed: ${error.message}`);
          throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'Odoslanie zlyhalo. Skúste to znovu.' });
        }
      } else {
        console.warn('[contact] RESEND_API_KEY or EMAIL_TO not set — email not sent');
      }

      console.log(`[contact] submission from ${city} — ${new Date().toISOString()}`);

      return { success: true, name };
    },
  }),
};
