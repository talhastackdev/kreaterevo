/**
 * Frontend Configuration
 * These values are available in the browser (static builds)
 */

export const frontendConfig = {
  sendgridApiKey: process.env.NEXT_PUBLIC_SENDGRID_API_KEY || '',
  contactToEmail: process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL || '',
  contactFromEmail: process.env.NEXT_PUBLIC_CONTACT_FROM_EMAIL || '',
};
