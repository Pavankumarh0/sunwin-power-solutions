import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    // Get email configuration from environment variables
    const adminEmail = process.env.ADMIN_EMAIL || 'support@sunwinpowersolutions.com';
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;

    // Check if SMTP credentials are configured
    if (!smtpUser || !smtpPassword) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'SMTP credentials not configured',
          message: 'Please add SMTP_USER and SMTP_PASSWORD to .env.local file',
          debug: {
            smtpUserExists: !!smtpUser,
            smtpPasswordExists: !!smtpPassword,
            adminEmail: adminEmail,
            smtpHost: smtpHost,
            smtpPort: smtpPort
          },
          instructions: [
            '1. Create .env.local file in the root directory (same folder as package.json)',
            '2. Add: SMTP_USER=support@sunwinpowersolutions.com',
            '3. Add: SMTP_PASSWORD=your_app_password',
            '4. Restart your development server (npm run dev)'
          ]
        },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Test email content
    const mailOptions = {
      from: `"Sunwin Power Solutions" <${smtpUser}>`,
      to: adminEmail,
      subject: '✅ Test Email - Email Notifications Working!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #5bb450 0%, #52a447 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .success { background: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 15px; border-radius: 4px; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>🎉 Email Notifications Are Working!</h2>
              </div>
              <div class="content">
                <div class="success">
                  <strong>✅ Success!</strong> Your email notification system is properly configured and working.
                </div>
                <p>This is a test email to confirm that your email notification system is set up correctly.</p>
                <p><strong>Admin Email:</strong> ${adminEmail}</p>
                <p><strong>Test Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                <p>You will now receive email notifications whenever someone submits the contact form on your website.</p>
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                <p style="font-size: 12px; color: #666;">
                  This is an automated test email from Sunwin Power Solutions website.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Email Notifications Are Working!

Success! Your email notification system is properly configured and working.

Admin Email: ${adminEmail}
Test Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

You will now receive email notifications whenever someone submits the contact form on your website.

---
This is an automated test email from Sunwin Power Solutions website.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: `Test email sent successfully to ${adminEmail}`,
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending test email:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send test email',
        details: error.message,
        hint: 'Check your SMTP credentials in .env.local file'
      },
      { status: 500 }
    );
  }
}

