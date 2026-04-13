/**
 * Contact Form Service
 *
 * This service provides methods to submit contact form data.
 * Currently using frontend (mailto) method for static site deployment.
 * Backend API method is available for when server-side functionality is enabled.
 */

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  source?: string;
}

export interface ContactSubmitResult {
  success: boolean;
  message?: string;
}

import { frontendConfig } from '@/config/frontend';

// Configuration flag to switch between frontend and backend methods
// Set to 'frontend' for static site, 'backend' for API-based submission
export const CONTACT_SUBMISSION_MODE: 'frontend' | 'backend' = 'frontend';

/**
 * Frontend submission method - Calls SendGrid API directly from browser
 * Used for static site deployment where API routes are not available
 */
export const submitContactFormFrontend = async (data: ContactFormData): Promise<ContactSubmitResult> => {
  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${frontendConfig.sendgridApiKey}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: frontendConfig.contactToEmail }],
          },
        ],
        from: { email: frontendConfig.contactFromEmail },
        reply_to: { email: data.email },
        subject: `Contact Form Submission from ${data.name}`,
        content: [
          {
            type: 'text/plain',
            value: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || 'N/A'}\nSource: ${data.source || 'unknown'}\n\nMessage:\n${data.message}`,
          },
          {
            type: 'text/html',
            value: `
              <h2>Contact Form Submission</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
              <p><strong>Source:</strong> ${data.source || 'unknown'}</p>
              <hr />
              <p><strong>Message:</strong></p>
              <p>${data.message.replace(/\n/g, '<br />')}</p>
            `,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return { success: true };
  } catch (error) {
    console.error('Frontend contact submission error:', error);
    return { success: false, message: 'Failed to send message' };
  }
};

/**
 * Backend submission method - Sends data to API endpoint
 * Used when server-side API routes are available (non-static deployment)
 */
export const submitContactFormBackend = async (data: ContactFormData): Promise<ContactSubmitResult> => {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error('Failed to send');
    }

    return { success: true };
  } catch (error) {
    console.error('Backend contact submission error:', error);
    return { success: false, message: 'Failed to send message' };
  }
};

/**
 * Main submission function - Routes to appropriate method based on configuration
 */
export const submitContactForm = async (data: ContactFormData): Promise<ContactSubmitResult> => {
  if (CONTACT_SUBMISSION_MODE === 'frontend') {
    return submitContactFormFrontend(data);
  } else {
    return submitContactFormBackend(data);
  }
};
