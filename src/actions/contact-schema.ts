import { z } from 'zod';

export const cities = ['Košice', 'Bratislava', 'Piešťany', 'Liptovský Mikuláš', 'Malacky', 'Iné'] as const;

export const contactSchema = z.object({
  name: z.string().min(2, 'Meno musí mať aspoň 2 znaky'),
  email: z.email('Neplatná emailová adresa'),
  city: z.enum(cities),
  message: z.string().max(1000).optional(),
});
