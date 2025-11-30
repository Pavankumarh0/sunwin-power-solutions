# Email Notification Setup

This document explains how to configure email notifications to be received at **sunwinps@gmail.com**.

## Configuration

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
ADMIN_EMAIL=sunwinps@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sunwinps@gmail.com
SMTP_PASSWORD=your-app-password-here
```

### 2. Gmail App Password Setup

Since you're using Gmail (`sunwinps@gmail.com`), you need to create an App Password:

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Generate App Password**:
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Other (Custom name)" as device and enter "Sunwin Website"
   - Click "Generate"
   - Copy the 16-character password (spaces don't matter)

3. **Add App Password to .env.local**:
   - Replace `your-app-password-here` with the generated app password
   - Example: `SMTP_PASSWORD=abcd efgh ijkl mnop`

### 3. Test Email Configuration

After setting up the environment variables:

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test the email configuration by visiting:
   ```
   http://localhost:3000/api/test-email
   ```

3. You should receive a test email at `sunwinps@gmail.com` confirming the setup is working.

## How It Works

When someone submits the contact form on your website:

1. The form data is saved to Firebase Firestore
2. An email notification is automatically sent to **sunwinps@gmail.com**
3. The email includes:
   - Customer's name, email, phone number
   - Service they're interested in
   - Their message
   - Quick action buttons to reply or call

## Troubleshooting

### Email not being received?

1. **Check .env.local file exists** and has correct values
2. **Verify App Password** is correct (not your regular Gmail password)
3. **Check server logs** for any error messages
4. **Test with /api/test-email** endpoint first

### Common Issues

- **"Invalid login"**: Make sure you're using an App Password, not your regular password
- **"Authentication failed"**: Verify 2-Step Verification is enabled
- **Emails going to spam**: Check spam folder or whitelist the sender

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the same environment variables in your hosting platform's dashboard
2. Make sure `ADMIN_EMAIL=sunwinps@gmail.com` is set
3. Test after deployment using the contact form

## Support

For issues or questions, contact: sunwinps@gmail.com

