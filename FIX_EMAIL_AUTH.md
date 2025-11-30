# Fix Email Authentication Error

The error "Invalid login: 535-5.7.8 Username and Password not accepted" means Gmail is rejecting your credentials.

## Common Causes & Solutions:

### 1. **Check the App Password Format**

The password you provided was: `vcht pgap dqcu nkxu`

When removing spaces, it should be: `vchtpgapdqcnkxu` (16 characters)

**Verify your `.env.local` file has the password WITHOUT spaces:**
```
SMTP_PASSWORD=vchtpgapdqcnkxu
```

### 2. **Regenerate the App Password**

The current password might be invalid. Generate a NEW one:

1. Go to: https://myaccount.google.com/apppasswords
2. Sign in with `sunwinps@gmail.com`
3. **Delete the old app password** (if you see one for "Sunwin Website" or similar)
4. **Generate a NEW one:**
   - Select "Mail" as the app
   - Select "Other (Custom name)" as device
   - Enter: "Sunwin Website"
   - Click "Generate"
5. **Copy the new 16-character password** (it will look like: `abcd efgh ijkl mnop`)
6. **Update `.env.local`** with the new password (remove spaces)

### 3. **Ensure 2-Step Verification is Enabled**

App Passwords only work if 2-Step Verification is ON:

1. Go to: https://myaccount.google.com/security
2. Check if "2-Step Verification" shows as "On"
3. If OFF, enable it first, then create an App Password

### 4. **Update .env.local File**

Edit your `.env.local` file and make sure it looks EXACTLY like this:

```
ADMIN_EMAIL=sunwinps@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sunwinps@gmail.com
SMTP_PASSWORD=your-new-password-here
```

**Important:**
- Replace `your-new-password-here` with the NEW app password (no spaces)
- No quotes, no extra spaces
- Make sure `SMTP_USER` matches your Gmail address exactly

### 5. **Restart Server**

After updating the password:
1. Stop server: `Ctrl + C`
2. Start again: `npm run dev`
3. Test: Visit `http://localhost:3000/api/test-email`

## Quick Fix Commands

If you want to update the password in `.env.local`, edit the file manually and change the `SMTP_PASSWORD` line.

## Still Not Working?

1. **Double-check**: Make sure you're using an **App Password**, not your regular Gmail password
2. **Account Security**: Go to https://myaccount.google.com/security and check if there are any security alerts
3. **Try a different App Password**: Generate a fresh one and test again

