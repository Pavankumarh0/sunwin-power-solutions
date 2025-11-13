# 🚀 Quick Email Setup - Testing Mode

## ✅ Admin Email Configured

**Notification Email**: `pavankumarhox56@gmail.com`

All contact form submissions will send email notifications to this address.

## 📝 Step-by-Step Setup

### Step 1: Create `.env.local` File

Create a file named `.env.local` in your project root with this content:

```env
ADMIN_EMAIL=pavankumarhox56@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail-account@gmail.com
SMTP_PASSWORD=your-app-password-here
```

### Step 2: Gmail App Password Setup

Since you're using Gmail, you need to generate an App Password:

1. **Go to your Google Account**: https://myaccount.google.com/
2. **Enable 2-Step Verification** (if not already enabled):
   - Go to Security → 2-Step Verification
   - Follow the setup process
3. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Other (Custom name)" as device
   - Enter: "Sunwin Power Solutions"
   - Click "Generate"
   - **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)
   - Remove spaces when adding to `.env.local`

### Step 3: Update `.env.local`

Replace `your-gmail-account@gmail.com` with the Gmail account you want to send FROM.
Replace `your-app-password-here` with the App Password you generated.

**Example:**
```env
ADMIN_EMAIL=pavankumarhox56@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=pavankumarhox56@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
```

### Step 4: Install Dependencies

```bash
npm install nodemailer @types/nodemailer
```

### Step 5: Restart Server

```bash
npm run dev
```

## 🧪 Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check `pavankumarhox56@gmail.com` inbox
4. You should receive a notification email within seconds!

## 📧 What You'll Receive

The email will include:
- ✅ Name of the person
- ✅ Email address (clickable)
- ✅ Phone number (clickable)
- ✅ Service interested in
- ✅ Full message
- ✅ Quick action buttons (Reply, Call)
- ✅ Timestamp

## ⚠️ Important Notes

1. **Use App Password, NOT your regular Gmail password**
2. **The sending email (SMTP_USER) can be different from admin email**
3. **Make sure `.env.local` is in `.gitignore`** (it already is)
4. **Restart server after changing `.env.local`**

## 🔄 Changing Admin Email Later

To change the notification email later, just update `ADMIN_EMAIL` in `.env.local`:

```env
ADMIN_EMAIL=new-email@example.com
```

Then restart the server.

## ✅ Checklist

- [ ] `.env.local` file created
- [ ] `ADMIN_EMAIL` set to `pavankumarhox56@gmail.com`
- [ ] Gmail 2-Step Verification enabled
- [ ] App Password generated
- [ ] `SMTP_USER` and `SMTP_PASSWORD` added to `.env.local`
- [ ] Dependencies installed (`nodemailer`)
- [ ] Server restarted
- [ ] Test form submission
- [ ] Email received in inbox

## 🎉 Ready to Test!

Once all steps are complete, submit a test message through your contact form and check the inbox at `pavankumarhox56@gmail.com`!

