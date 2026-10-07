import { defineAction } from 'astro:actions';
import { contactSchema } from './contact-schema';

export const server = {
  contact: defineAction({
    accept: 'form',
    input: contactSchema,
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
