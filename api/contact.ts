/// <reference types="node" />

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

/*
 * Contact API
 * Receives recruiter messages from the Vue contact form
 * and forwards them to the portfolio owner's inbox using Resend.
 */

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Only POST requests are allowed.
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed.',
    })
  }

  try {
    const {
      name,
      email,
      company,
      message,
      website,
    } = req.body ?? {}

    /*
     * Honeypot protection.
     * Real users never fill this hidden field.
     */
    if (website) {
      return res.status(200).json({
        message: 'Message sent successfully.',
      })
    }

    // Basic validation.
    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'Name, email and message are required.',
      })
    }

    const { error } = await resend.emails.send({
      from: 'Recruiter Magnet <onboarding@resend.dev>',
      to: ['keketsoleu25@gmail.com'],
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

      return res.status(500).json({
        message: 'Unable to send message.',
      })
    }

    return res.status(200).json({
      message: 'Message sent successfully.',
    })
  } catch (error) {
    console.error('Contact API error:', error)

    return res.status(500).json({
      message: 'Something went wrong.',
    })
  }
}