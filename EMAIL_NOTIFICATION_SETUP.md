# 📧 Email Notification Setup Guide

## Overview

Your contact form now sends email notifications to the admin whenever a user submits a message, **even if the website is closed**!

## 🚀 Quick Setup

### Step 1: Install Dependencies

```bash
npm install nodemailer @types/nodemailer
```

### Step 2: Configure Environment Variables

Create a `.env.local` file in your project root (if it doesn't exist) and add:

```env
# Admin Email (where notifications will be sent)
ADMIN_EMAIL=your-admin-email@example.com

# SMTP Configuration (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### Step 3: Gmail Setup (Recommended)

If using Gmail, you need to:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Sunwin Power Solutions"
   - Copy the generated 16-character password
   - Use this as your `SMTP_PASSWORD`

### Step 4: Restart Development Server

```bash
npm run dev
```

## 📧 Email Service Options

### Option 1: Gmail (Free, Easy Setup)
- **SMTP_HOST**: `smtp.gmail.com`
- **SMTP_PORT**: `587` (TLS) or `465` (SSL)
- **SMTP_USER**: Your Gmail address
- **SMTP_PASSWORD**: App Password (not regular password)

### Option 2: Outlook/Hotmail
- **SMTP_HOST**: `smtp-mail.outlook.com`
- **SMTP_PORT**: `587`
- **SMTP_USER**: Your Outlook email
- **SMTP_PASSWORD**: Your Outlook password

### Option 3: Custom SMTP Server
- Use your hosting provider's SMTP settings
- Contact your hosting support for SMTP details

### Option 4: Email Services (Recommended for Production)

#### Resend (Free tier: 3,000 emails/month)
```env
SMTP_HOST=smtp.resend.com
SMTP_PORT=587
SMTP_USER=resend
SMTP_PASSWORD=your-resend-api-key
```

#### SendGrid (Free tier: 100 emails/day)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

#### Mailgun (Free tier: 5,000 emails/month)
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASSWORD=your-mailgun-password
```

## 🔒 Security Notes

1. **Never commit `.env.local` to Git** - It's already in `.gitignore`
2. **Use App Passwords** for Gmail (not your regular password)
3. **Rotate passwords** regularly
4. **Use environment variables** in production (Vercel, Netlify, etc.)

## 📬 What Gets Sent

The admin receives a beautifully formatted email with:

- ✅ **Name** of the person
- ✅ **Email** address (clickable)
- ✅ **Phone** number (clickable)
- ✅ **Service** interested in (if selected)
- ✅ **Full message** content
- ✅ **Quick action buttons** (Reply, Call)
- ✅ **Timestamp** of submission

## 🧪 Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your admin email inbox
4. You should receive the notification within seconds!

## ⚠️ Troubleshooting

### Email Not Sending?

1. **Check Environment Variables**:
   ```bash
   # Make sure .env.local exists and has correct values
   cat .env.local
   ```

2. **Check Server Logs**:
   - Look for error messages in terminal
   - Check browser console for warnings

3. **Gmail Issues**:
   - Make sure 2FA is enabled
   - Use App Password, not regular password
   - Check if "Less secure app access" is needed (older accounts)

4. **Port Issues**:
   - Try port `465` with `secure: true` for SSL
   - Try port `587` with `secure: false` for TLS

5. **Firewall/Network**:
   - Some networks block SMTP ports
   - Try from different network

### Form Still Works Without Email

✅ **Good news**: If email fails, the form submission still works!
- Contact is saved to Firestore
- User sees success message
- Email failure is logged but doesn't break the form

## 🎯 Production Deployment

### Vercel
1. Go to Project Settings → Environment Variables
2. Add all SMTP variables
3. Redeploy

### Netlify
1. Go to Site Settings → Environment Variables
2. Add all SMTP variables
3. Redeploy

### Other Platforms
- Add environment variables in your hosting dashboard
- Restart/redeploy after adding variables

## 📝 Example .env.local

```env
# Admin Email Configuration
ADMIN_EMAIL=admin@sunwinpower.com

# Gmail SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=notifications@sunwinpower.com
SMTP_PASSWORD=abcd efgh ijkl mnop
```

## ✅ Verification Checklist

- [ ] Dependencies installed (`nodemailer`)
- [ ] `.env.local` file created
- [ ] Environment variables set
- [ ] Gmail App Password generated (if using Gmail)
- [ ] Server restarted
- [ ] Test form submission
- [ ] Email received in inbox

## 🎉 Success!

Once configured, you'll receive instant email notifications whenever someone submits the contact form, **even when the website is closed**!

---

**Need Help?** Check the error logs or contact support.

