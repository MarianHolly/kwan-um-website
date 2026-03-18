import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((_ctx, next) => {
  const response = next();

  return response.then((res) => {
    const headers = res.headers;

    // Prevent clickjacking
    headers.set('X-Frame-Options', 'DENY');

    // Prevent MIME type sniffing
    headers.set('X-Content-Type-Options', 'nosniff');

    // Control referrer information sent to third parties
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Restrict browser features
    headers.set(
      'Permissions-Policy',
      'geolocation=(), microphone=(), camera=(), payment=()'
    );

    // Force HTTPS for 1 year (only active in production over HTTPS)
    headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains'
    );

    // Content Security Policy
    // - Scripts: only same origin
    // - Styles: same origin + Google Fonts
    // - Fonts: same origin + Google Fonts CDN
    // - Images: same origin + data URIs
    // - Connections: same origin
    // - Frames: blocked entirely
    headers.set(
      'Content-Security-Policy',
      [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",  // unsafe-inline needed for Astro's inline scripts
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data:",
        "connect-src 'self'",
        "frame-src 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ].join('; ')
    );

    return res;
  });
});
