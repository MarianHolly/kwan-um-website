import { defineAction } from 'astro:actions';
import { z } from 'zod';

const cities = ['Košice', 'Bratislava', 'Piešťany', 'Liptovský Mikuláš', 'Malacky', 'Iné'] as const;

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2, 'Meno musí mať aspoň 2 znaky'),
      email: z.email('Neplatná emailová adresa'),
      city: z.enum(cities),
      message: z.string().max(1000).optional(),
    }),
    handler: async ({ name, email, city, message }) => {
      // TODO: connect your email service here (e.g. Resend, SendGrid, Nodemailer)
      // Example with Resend:
      // await resend.emails.send({
      //   from: 'web@kwanumzen.sk',
      //   to: 'info@kwanumzen.sk',
      //   subject: `Nový záujemca: ${name} — ${city}`,
      //   text: `Meno: ${name}\nEmail: ${email}\nMesto: ${city}\nSpráva: ${message ?? '—'}`,
      // });

      console.log(`[contact form] ${name} <${email}> — ${city}: ${message ?? '—'}`);

      return { success: true, name };
    },
  }),
};
