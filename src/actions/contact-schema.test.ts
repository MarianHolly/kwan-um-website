import { describe, expect, it } from 'vitest';
import { contactSchema } from './contact-schema';

describe('contactSchema', () => {
  it('accepts a valid submission', () => {
    const result = contactSchema.safeParse({
      name: 'Jana',
      email: 'jana@example.com',
      city: 'Košice',
      message: 'Dobrý deň, rád by som sa prišiel pozrieť na stretnutie.',
    });

    expect(result.success).toBe(true);
  });

  it('accepts a submission without an optional message', () => {
    const result = contactSchema.safeParse({
      name: 'Jana',
      email: 'jana@example.com',
      city: 'Bratislava',
    });

    expect(result.success).toBe(true);
  });

  it('rejects a name shorter than 2 characters', () => {
    const result = contactSchema.safeParse({
      name: 'J',
      email: 'jana@example.com',
      city: 'Košice',
    });

    expect(result.success).toBe(false);
  });

  it('rejects an invalid email address', () => {
    const result = contactSchema.safeParse({
      name: 'Jana',
      email: 'not-an-email',
      city: 'Košice',
    });

    expect(result.success).toBe(false);
  });

  it('rejects a city outside the known list', () => {
    const result = contactSchema.safeParse({
      name: 'Jana',
      email: 'jana@example.com',
      city: 'Žilina',
    });

    expect(result.success).toBe(false);
  });

  it('rejects a message over 1000 characters', () => {
    const result = contactSchema.safeParse({
      name: 'Jana',
      email: 'jana@example.com',
      city: 'Košice',
      message: 'a'.repeat(1001),
    });

    expect(result.success).toBe(false);
  });
});
