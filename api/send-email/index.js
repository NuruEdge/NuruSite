/* eslint-disable no-undef */
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Set CORS headers
  const allowedOrigins = [process.env.VITE_APP_URL, 'http://localhost:3000']
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', 'true')

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Debug environment variables
    console.log('Environment variables:', {
      emailUser: process.env.EMAIL_USER ? 'Set' : 'Not set',
      emailPassword: process.env.EMAIL_PASSWORD ? 'Set' : 'Not set',
      emailHost: process.env.EMAIL_HOST,
      emailTo: process.env.EMAIL_TO,
      viteAppUrl: process.env.VITE_APP_URL,
    })

    const { name, email, message } = req.body

    // Validate input
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    if (message.trim().length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters' })
    }

    // Check if environment variables are configured
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASSWORD ||
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_TO
    ) {
      console.error('Email environment variables are not properly configured')
      return res.status(500).json({
        error: 'Server configuration error',
        message: 'Email service is not properly configured.',
      })
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465, // Standard secure SMTP port
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true, // Enable debug output
    })

    try {
      // Format the sender name and email
      const senderEmail = email.trim()
      const senderName = name.trim()

      // Prepare email options
      const mailOptions = {
        from: {
          name: 'Nuru Edge Website',
          address: process.env.EMAIL_USER,
        },
        to: process.env.EMAIL_TO,
        replyTo: {
          address: senderEmail,
        },
        subject: `Message from ${senderName}`,
        text: `
        Name: ${senderName}
        Email: ${senderEmail}
        Message:

        ${message.trim()}
        `,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Message from Nuru Edge Website</h2>
          
          <p style="color: #555;">You have received a new message from the contact form on your website.</p>
          
          <p><strong>Name:</strong> ${senderName}</p>
          <p><strong>Email:</strong> <a href="mailto:${senderEmail}">${senderEmail}</a></p>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message.trim()}</div>
          </div>
          
          <p style="margin-top: 20px; color: #777; font-size: 12px;">This message was sent from the contact form on the Nuru Edge website.</p>
        </div>
        `,
        headers: {
          'X-Contact-Form-Email': senderEmail,
          'X-Contact-Form-Name': senderName,
        },
      }

      // Send email
      const info = await transporter.sendMail(mailOptions)

      // Preview URL (only works with some mail services like Ethereal)
      if (info.preview) {
        console.log('Preview URL: %s', info.preview)
      }

      return res.status(200).json({ success: true })
    } catch (error) {
      console.error('Email send failed:', error)
      return res.status(500).json({
        error: 'Internal server error',
        message: 'Failed to send message. Please try again later.',
      })
    }
  } catch (error) {
    console.error('Error in email handler:', error)
    return res.status(500).json({
      error: 'Internal server error',
      message: 'An unexpected error occurred. Please try again later.',
    })
  }
}
