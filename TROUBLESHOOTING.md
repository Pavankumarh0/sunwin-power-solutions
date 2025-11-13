# 🔧 Troubleshooting Guide

## ✅ Issue Fixed: Missing autoprefixer

**Error:** "Cannot find module 'autoprefixer'"

**Solution Applied:**
```bash
npm install -D autoprefixer postcss
```

This has been installed and your server should now be running at:
**http://localhost:3000**

---

## 🚨 Common Issues & Solutions

### 1. "Cannot find module 'autoprefixer'"
**Status:** ✅ FIXED

**What was missing:** PostCSS and Autoprefixer packages
**Solution:** Installed via `npm install -D autoprefixer postcss`

---

### 2. "next is not recognized as internal or external command"

**Cause:** Dependencies not fully installed

**Solution:**
```bash
# Delete node_modules and reinstall
rmdir /s /q node_modules
npm install
npm run dev
```

---

### 3. Firebase: "Missing or insufficient permissions"

**Cause:** Firestore security rules not set up

**Solution:**
1. Go to https://console.firebase.google.com/project/sunvin-power-solutions/firestore
2. Click "Rules" tab
3. Paste the rules from `firestore.rules.simple`
4. Click "Publish"

See `FIRESTORE_RULES_GUIDE.md` for details.

---

### 4. Images not loading

**Cause:** Images using external URLs or missing files

**Solution:**
- For external images (Unsplash): Make sure `next.config.js` has the domain in `images.domains`
- For local images: Make sure files exist in `public/images/` folder
- See `IMAGE_REPLACEMENT_GUIDE.md`

---

### 5. Contact form not submitting

**Possible causes:**

**A. Firestore rules not configured**
- Go to Firebase Console
- Set up security rules (see above)

**B. Firebase not initialized properly**
- Check `lib/firebase.ts` has correct credentials
- Verify project ID matches in Firebase Console

**C. Network/CORS issues**
- Check browser console (F12) for errors
- Verify Firebase project is active

---

### 6. Animations not working

**Possible causes:**

**A. Framer Motion not installed**
```bash
npm install framer-motion
```

**B. Browser cache**
- Clear cache: Ctrl+Shift+Delete
- Hard refresh: Ctrl+Shift+R

---

### 7. Build errors

**Solution 1: Clean rebuild**
```bash
# Delete build cache
rmdir /s /q .next
npm run dev
```

**Solution 2: Reinstall dependencies**
```bash
rmdir /s /q node_modules
npm install
npm run dev
```

**Solution 3: Check for TypeScript errors**
```bash
npm run build
# Review any errors shown
```

---

### 8. "Module not found" errors

**General solution:**
```bash
npm install [package-name]
```

**Common missing packages:**
```bash
npm install react react-dom next
npm install -D typescript @types/react @types/node
npm install -D tailwindcss postcss autoprefixer
npm install firebase framer-motion react-icons lucide-react
```

---

### 9. Port 3000 already in use

**Solution:**
```bash
# Find and kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Or use a different port
set PORT=3001 && npm run dev
```

---

### 10. Slow performance / High memory usage

**Solutions:**

**A. Optimize images**
- Compress images to < 500KB
- Use appropriate sizes
- Convert to WebP format

**B. Disable source maps in development**
Edit `next.config.js`:
```javascript
module.exports = {
  productionBrowserSourceMaps: false,
  // ... rest of config
}
```

**C. Clear cache**
```bash
rmdir /s /q .next
npm run dev
```

---

### 11. TypeScript errors

**Common fixes:**

**A. Update tsconfig.json**
```bash
# Let Next.js reconfigure
npm run dev
```

**B. Install type definitions**
```bash
npm install -D @types/react @types/node @types/react-dom
```

**C. Ignore specific errors (temporary)**
Add `// @ts-ignore` above the line with error

---

### 12. Tailwind CSS not working

**Solution:**

**A. Verify files exist:**
- `tailwind.config.ts`
- `postcss.config.mjs`
- `app/globals.css` has `@tailwind` directives

**B. Restart dev server:**
```bash
npm run dev
```

**C. Reinstall Tailwind:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

---

### 13. WhatsApp button not working

**Check:**
1. Phone number format: `917200604242` (no + or spaces)
2. Message is URL encoded
3. Opens in new tab

**Update in:** `components/WhatsAppButton.tsx`

---

### 14. Gallery filters not working

**Check:**
1. JavaScript enabled in browser
2. No console errors (F12)
3. Category names match in `galleryItems`

---

### 15. Mobile menu not opening

**Check:**
1. Hamburger icon visible on mobile
2. No JavaScript errors
3. State management working

**File to check:** `components/Navbar.tsx`

---

## 🧪 Testing Checklist

Before reporting an issue, test:

- [ ] Clear browser cache
- [ ] Hard refresh (Ctrl+Shift+R)
- [ ] Check browser console (F12) for errors
- [ ] Test in incognito/private mode
- [ ] Test in different browser
- [ ] Restart dev server
- [ ] Check internet connection
- [ ] Verify Firebase project is active

---

## 🆘 Still Having Issues?

### Check These Files:

1. **package.json** - Dependencies installed?
2. **next.config.js** - Configuration correct?
3. **lib/firebase.ts** - Credentials correct?
4. **Browser Console (F12)** - What errors show?
5. **Terminal** - What errors during build?

### Get Help:

1. **Next.js Docs:** https://nextjs.org/docs
2. **Firebase Docs:** https://firebase.google.com/docs
3. **Tailwind Docs:** https://tailwindcss.com/docs
4. **Stack Overflow:** Search for specific error messages

---

## 📋 Fresh Start (Nuclear Option)

If nothing works, start fresh:

```bash
# 1. Backup important files
copy lib\firebase.ts lib\firebase.ts.backup
copy .env.local .env.local.backup

# 2. Delete everything except source code
rmdir /s /q node_modules
rmdir /s /q .next
del package-lock.json

# 3. Reinstall
npm install

# 4. Restore backups if needed
copy lib\firebase.ts.backup lib\firebase.ts
copy .env.local.backup .env.local

# 5. Start fresh
npm run dev
```

---

## ✅ Verification Commands

Test if everything is installed correctly:

```bash
# Check Node version (should be 18+)
node --version

# Check npm version
npm --version

# Check if Next.js is installed
npm list next

# Check if all dependencies are installed
npm list

# Check for outdated packages
npm outdated

# Run type checking
npx tsc --noEmit
```

---

## 🎯 Current Status

- ✅ autoprefixer installed
- ✅ postcss installed
- ✅ Development server should be running
- ✅ Firebase configured
- ⚠️ Need to set Firestore rules (see FIRESTORE_RULES_GUIDE.md)
- 📸 Need to add images (see IMAGE_REPLACEMENT_GUIDE.md)

---

**Your website should now be accessible at:** http://localhost:3000

If you still see errors, check the terminal output or browser console for specific error messages.

