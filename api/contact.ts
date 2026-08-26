/// <reference types="node" />
import { Resend } from 'resend'

/*
 * Contact API
 * Receives recruiter messages from the Vue contact form
 * and forwards them to the portfolio owner's inbox using Resend.
 */

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(request: Request): Promise<Response> {
  // This endpoint only accepts POST requests.
  if (request.method !== 'POST') {
    return Response.json(
      { message: 'Method not allowed.' },
      { status: 405 },
    )
  }

  try {
    const body = await request.json()

    const {
      name,
      email,
      company,
      message,
      website,
    } = body

    /*
     * Honeypot protection.
     * Normal users never fill this hidden field.
     */
    if (website) {
      return Response.json(
        { message: 'Message sent successfully.' },
        { status: 200 },
      )
    }

    // Basic server-side validation.
    if (!name || !email || !message) {
      return Response.json(
        {
          message: 'Name, email and message are required.',
        },
        { status: 400 },
      )
    }

    const { error } = await resend.emails.send({
      from: 'Recruiter Magnet <onboarding@resend.dev>',
      to: ['keketsoleu25@gmail.com'],

      /*
       * When you reply from Gmail, the reply will go
       * directly to the recruiter who submitted the form.
       */
      replyTo: email,

      subject: `Recruiter Magnet message from ${name}`,

      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}
      `.trim(),
    })

    if (error) {
      console.error('Resend error:', error)

      return Response.json(
        { message: 'Unable to send message.' },
        { status: 500 },
      )
    }

    return Response.json(
      { message: 'Message sent successfully.' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Contact API error:', error)

    return Response.json(
      { message: 'Something went wrong.' },
      { status: 500 },
    )
  }
}