# Setup Guide for Sunwin Power Solutions Website

## Quick Start

Your Next.js website has been created! The development server should now be running at [http://localhost:3000](http://localhost:3000)

## Firebase Configuration (Required for Contact Form)

The contact form requires Firebase Firestore to store submissions. Follow these steps:

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name it "Sunwin Power Solutions" or similar
4. Follow the setup wizard (you can disable Google Analytics if you prefer)

### 2. Set Up Firestore Database

1. In your Firebase project, go to "Build" → "Firestore Database"
2. Click "Create database"
3. Start in **production mode** (we'll configure rules next)
4. Choose a location (preferably asia-south1 for India)
5. Click "Enable"

### 3. Configure Security Rules

In Firestore, go to "Rules" tab and replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow create: if true;
      allow read: if request.auth != null;
    }
  }
}
```

Click "Publish"

### 4. Get Your Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the web icon (</>)
4. Register your app (name it "Sunwin Power Solutions Web")
5. Copy the configuration values

### 5. Update Environment Variables

Create a `.env.local` file in the root directory with your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-ABC123XYZ
```

### 6. Restart the Development Server

If the server is already running, stop it (Ctrl+C) and restart:

```bash
npm run dev
```

## Customization Guide

### 1. Update Company Information

**Navbar** (`components/Navbar.tsx`):
- Line 36-38: Phone number and email
- Line 41: GST number

**Footer** (`components/Footer.tsx`):
- Lines 75-80: Company address
- Lines 82-91: Phone numbers and email
- Line 112: GST number and proprietor name

**Contact** (`components/Contact.tsx`):
- Lines 73-84: Contact information

### 2. Update Images

Replace the Unsplash placeholder images with your actual project photos:

**Hero Section** (`components/Hero.tsx`):
- Line 12: Main hero background image
- Line 27: Floating solar panel image

**About Section** (`components/About.tsx`):
- Line 53: About section main image

**Services Section** (`components/Services.tsx`):
- Lines 16-65: Service card images (6 images total)

**Gallery Section** (`components/Gallery.tsx`):
- Lines 18-68: Gallery images (9 images total)

To use local images:
1. Place images in `/public/images/` folder
2. Update image paths: `src="/images/your-image.jpg"`
3. Update `next.config.js` if using external URLs

### 3. Update Services

Edit `components/Services.tsx` (lines 14-65) to match your actual services.

### 4. Change Colors

Edit `tailwind.config.ts`:

```typescript
primary: {
  DEFAULT: '#FF6B00',  // Main orange color
  dark: '#E55D00',     // Darker shade
  light: '#FF8533',    // Lighter shade
},
secondary: {
  DEFAULT: '#1E3A8A',  // Main blue color
  dark: '#1E40AF',     // Darker shade
  light: '#3B82F6',    // Lighter shade
},
```

### 5. Add More Sections

You can add testimonials, FAQs, or other sections by:
1. Creating a new component in `/components/`
2. Importing and adding it to `app/page.tsx`

## Testing the Contact Form

1. Fill out the contact form on your website
2. Check Firebase Console → Firestore Database
3. You should see a new document in the "contacts" collection

## Building for Production

```bash
npm run build
npm start
```

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables from `.env.local`
5. Deploy!

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Add environment variables
5. Build command: `npm run build`
6. Publish directory: `.next`

## Troubleshooting

### Issue: Images not loading
- Check `next.config.js` domains configuration
- Ensure image paths are correct
- For local images, place them in `/public/` folder

### Issue: Firebase errors
- Verify all environment variables are set correctly
- Check Firebase project permissions
- Ensure Firestore is enabled

### Issue: Animations not working
- Clear browser cache
- Check browser console for errors
- Ensure Framer Motion is installed: `npm install framer-motion`

### Issue: Build errors
- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Run `npm run build`

## Support

For any issues or questions:
- Email: info@sunwinpower.com
- Phone: +91 72006 04242

## Next Steps

1. ✅ Configure Firebase (see above)
2. ✅ Update company information
3. ✅ Replace placeholder images with real photos
4. ✅ Test contact form
5. ✅ Deploy to production

Enjoy your new website! 🎉

