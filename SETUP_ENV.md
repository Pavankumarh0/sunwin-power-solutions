# How to Create .env.local File

## Step 1: Create the File

1. Open your project folder in a text editor (VS Code, Notepad++, etc.)
2. In the **root directory** (same folder as `package.json`), create a new file
3. Name it exactly: `.env.local` (with the dot at the beginning)
4. Make sure it's in the root directory, NOT in any subfolder

## Step 2: Add This Content

Copy and paste exactly this into the `.env.local` file:

```
ADMIN_EMAIL=sunwinps@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sunwinps@gmail.com
SMTP_PASSWORD=vchtpgapdqcnkxu
```

**Important Notes:**
- No spaces around the `=` signs
- No quotes around the values
- The password is: `vchtpgapdqcnkxu` (spaces removed from "vcht pgap dqcu nkxu")
- Save the file

## Step 3: Restart Your Server

**VERY IMPORTANT:** After creating or modifying `.env.local`, you MUST restart your server:

1. Stop the server (press `Ctrl + C` in the terminal)
2. Start it again: `npm run dev`

## Step 4: Verify the File Location

The file structure should look like this:

```
sunwin-power-solutions/
├── .env.local          ← Should be HERE (root directory)
├── package.json
├── app/
├── components/
└── ...
```

## Step 5: Test

1. After restarting the server, visit: `http://localhost:3000/api/test-email`
2. You should receive a test email at `sunwinps@gmail.com`

## Troubleshooting

### If you still get the error:

1. **Check file name**: Must be exactly `.env.local` (not `env.local` or `.env.local.txt`)
2. **Check file location**: Must be in the root directory (same level as `package.json`)
3. **Restart server**: Environment variables only load when the server starts
4. **Check file format**: No extra spaces or quotes
5. **Check password**: Should be `vchtpgapdqcnkxu` (16 characters, no spaces)

### Windows Users:

- If you can't create a file starting with a dot, try:
  - Use VS Code: File → New File → Save as `.env.local`
  - Or create `env.local` first, then rename it to `.env.local`
  - Or use Command Prompt: `echo. > .env.local`

