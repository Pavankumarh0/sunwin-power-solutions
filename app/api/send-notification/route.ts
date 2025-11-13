import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get email configuration from environment variables
    const adminEmail = process.env.ADMIN_EMAIL || 'info@sunwinpower.com';
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;

    // If SMTP credentials are not configured, return success but log warning
    if (!smtpUser || !smtpPassword) {
      console.warn('Email notification skipped: SMTP credentials not configured');
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully. Email notification not configured.' 
        },
        { status: 200 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Sunwin Power Solutions" <${smtpUser}>`,
      to: adminEmail,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #FF6B00 0%, #E55D00 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #FF6B00; }
              .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 3px solid #FF6B00; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
              .button { display: inline-block; padding: 10px 20px; background: #FF6B00; color: white; text-decoration: none; border-radius: 4px; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>🔔 New Contact Form Submission</h2>
                <p>You have received a new message from your website</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">📱 Phone:</div>
                  <div class="value"><a href="tel:${phone.replace(/\s/g, '')}">${phone}</a></div>
                </div>
                ${service ? `
                <div class="field">
                  <div class="label">📦 Service Interested In:</div>
                  <div class="value">${service}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">💬 Message:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
                <div style="margin-top: 20px;">
                  <a href="mailto:${email}?subject=Re: Your inquiry about ${service || 'our services'}" class="button">Reply via Email</a>
                  <a href="tel:${phone.replace(/\s/g, '')}" class="button" style="background: #28a745; margin-left: 10px;">Call Now</a>
                </div>
                <div class="footer">
                  <p>This is an automated notification from Sunwin Power Solutions website.</p>
                  <p>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
${service ? `Service: ${service}` : ''}

Message:
${message}

---
This is an automated notification from Sunwin Power Solutions website.
Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email notification sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email notification:', error);
    // Don't fail the request if email fails - form submission is more important
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email notification',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

