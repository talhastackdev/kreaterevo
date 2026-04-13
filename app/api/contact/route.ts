import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { backendConfig } from '@/config/backend';

sgMail.setApiKey(backendConfig.sendgridApiKey);

export async function POST(request: NextRequest) {
  const { name, email, company, message, source } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const msg = {
    to: backendConfig.contactToEmail,
    from: backendConfig.contactFromEmail,
    replyTo: email,
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nSource: ${source || 'unknown'}\n\nMessage:\n${message}`,
    html: `
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Source:</strong> ${source || 'unknown'}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('SendGrid error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
