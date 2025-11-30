# ⚠️ Password Issue Found!

## Problem:
Your password in `.env.local` is **15 characters**, but Gmail App Passwords must be **exactly 16 characters**.

## Solution:

### Step 1: Verify Your App Password

The password you provided was: `vcht pgap dqcu nkxu`

When you remove the spaces, it should be: `vchtpgapdqcnkxu` (16 characters)

But currently your `.env.local` has: `vchtpgapdqcnkxu` (15 characters) ❌

### Step 2: Generate a NEW App Password

Since there might be an issue with the current password, **generate a fresh one**:

1. **Go to**: https://myaccount.google.com/apppasswords
2. **Sign in** with `sunwinps@gmail.com`
3. **Delete the old password** (if it exists)
4. **Generate NEW password**:
   - Select "Mail"
   - Select "Other (Custom name)"
   - Name: "Sunwin Website"
   - Click "Generate"
5. **Copy the NEW 16-character password**

### Step 3: Update .env.local

1. Open `.env.local` file
2. Find: `SMTP_PASSWORD=vchtpgapdqcnkxu`
3. Replace with your NEW password (remove all spaces):
   ```
   SMTP_PASSWORD=yournew16characterpassword
   ```
4. **Verify it's exactly 16 characters with NO spaces**
5. Save the file

### Step 4: Restart Server

**CRITICAL**: Restart your server after changing the password!

1. Stop: `Ctrl + C`
2. Start: `npm run dev`

### Step 5: Test Again

Visit: `http://localhost:3000/api/test-email`

---

## Quick Fix Commands:

If you want to manually update the password, edit `.env.local` and change the `SMTP_PASSWORD` line to your new 16-character password.

**Important**: Make sure:
- ✅ Password is exactly 16 characters
- ✅ No spaces in the password
- ✅ 2-Step Verification is enabled on your Google account
- ✅ Server is restarted after updating

