/**
 * Backend Configuration
 * These values are only available on the server (API routes)
 */

export const backendConfig = {
  sendgridApiKey: process.env.SENDGRID_API_KEY || '',
  contactToEmail: process.env.CONTACT_TO_EMAIL || '',
  contactFromEmail: process.env.CONTACT_FROM_EMAIL || '',
};
