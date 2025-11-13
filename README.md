# Sunwin Power Solutions

A modern, responsive website for Sunwin Power Solutions - a leading solar energy company in Chennai, Tamil Nadu.

## Features

- ⚡ Built with Next.js 15 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🔥 Firebase integration for contact form
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 SEO optimized
- 🌅 Beautiful image galleries
- 📧 Contact form with Firebase backend

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sunvinpowersolutions
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a new Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
   - Enable Firestore Database
   - Copy your Firebase configuration

4. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
sunvinpowersolutions/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── firebase.ts
├── public/
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Firebase** - Backend services
- **React Icons & Lucide React** - Icon libraries

## Features Overview

### 1. Hero Section
- Eye-catching landing page with animated elements
- Clear call-to-action buttons
- Statistics display

### 2. About Section
- Company information
- Key features and benefits
- Animated on scroll

### 3. Services Section
- 6 main service offerings
- Interactive service cards
- Why Choose Us section

### 4. Gallery
- Filterable project gallery
- Smooth hover animations
- Category-based filtering

### 5. Contact Form
- Firebase integration
- Real-time form validation
- Business information display

### 6. Footer
- Quick navigation links
- Social media integration
- Contact information

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: {
    DEFAULT: '#FF6B00',
    dark: '#E55D00',
    light: '#FF8533',
  },
}
```

### Images
Replace placeholder images in components with your own images from:
- Local `/public` folder
- External URLs (remember to add domains to `next.config.js`)

### Content
Update company information in:
- `components/Navbar.tsx` - Contact details
- `components/Footer.tsx` - Address and GST
- `components/Contact.tsx` - Contact form options

## Firebase Setup

1. Create a Firestore collection named `contacts`
2. Set up security rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow read, write: if true;
    }
  }
}
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Other Platforms
- Netlify
- AWS Amplify
- Google Cloud Platform

## License

© 2024 Sunwin Power Solutions. All rights reserved.

## Support

For support, email info@sunwinpower.com or call +91 72006 04242.

