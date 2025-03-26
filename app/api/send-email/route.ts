import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    if (req.method !== 'POST') {
      return NextResponse.json(
        { message: 'Method Not Allowed' },
        { status: 405 },
      );
    }

    const { firstName, email, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Define the email options
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER, // Your Gmail address
      subject: `New Contact Form Submission from ${firstName}`,
      text: message,
      html: `<p><strong>Name:</strong> ${firstName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
