# 🖼️ Quick Image Replacement Guide

## ✅ Image Folders Created Successfully!

Your organized image folder structure is ready:

```
public/
└── images/
    ├── logo/          ← Company logos
    ├── hero/          ← Hero section (2 images)
    ├── about/         ← About section (1 image)
    ├── services/      ← Service cards (6 images)
    └── gallery/       ← Project gallery (9+ images)
```

---

## 📝 Step-by-Step Replacement Process

### STEP 1: Add Your Images to Folders

#### A. Logo Folder (`public/images/logo/`)
Add these files:
- `logo.png` - Your company logo
- `logo-white.png` - White version (for dark backgrounds)

#### B. Hero Folder (`public/images/hero/`)
Add these files:
- `hero-bg.jpg` - Main hero background (solar panel field, large installation)
- `solar-float.png` - Small solar panel image (can use same as logo)

#### C. About Folder (`public/images/about/`)
Add these files:
- `about-main.jpg` - Company photo, team, or installation

#### D. Services Folder (`public/images/services/`)
Add these 6 files:
1. `solar-installation.jpg` - Solar panel installation
2. `on-grid-system.jpg` - On-grid solar system
3. `installation-work.jpg` - Workers installing panels
4. `maintenance.jpg` - Maintenance/repair work
5. `street-lights.jpg` - Solar street lights
6. `inverter-battery.jpg` - Inverter and battery equipment

#### E. Gallery Folder (`public/images/gallery/`)
Add at least 9 project photos:
1. `ground-mount-1.jpg` - Ground mount project
2. `ground-mount-2.jpg` - Another ground mount
3. `roof-solar-1.jpg` - Roof installation
4. `roof-solar-2.jpg` - Another roof installation
5. `industrial-1.jpg` - Industrial project
6. `industrial-2.jpg` - Another industrial project
7. `street-light.jpg` - Street light installation
8. `installation-1.jpg` - Installation in progress
9. `installation-2.jpg` - Completed installation

---

### STEP 2: Update Component Files

Once you've added your images, update these files:

#### 1️⃣ Hero Component (`components/Hero.tsx`)

**Line 12 - Background Image:**
```typescript
// FIND:
src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072"

// REPLACE WITH:
src="/images/hero/hero-bg.jpg"
```

**Line 27 - Floating Panel:**
```typescript
// FIND:
src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=200"

// REPLACE WITH:
src="/images/hero/solar-float.png"
```

---

#### 2️⃣ About Component (`components/About.tsx`)

**Line 53 - Main Image:**
```typescript
// FIND:
src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000"

// REPLACE WITH:
src="/images/about/about-main.jpg"
```

---

#### 3️⃣ Services Component (`components/Services.tsx`)

Update the services array (around line 14-65):

```typescript
const services = [
  {
    icon: <FiSun className="w-12 h-12" />,
    title: 'Solar Panel Installation',
    description: '...',
    // CHANGE THIS:
    image: '/images/services/solar-installation.jpg',  // ← Update
    features: ['Ground Mount Solar', 'Industrial Roof Solar', 'RCC Roof Solar'],
  },
  {
    icon: <FiZap className="w-12 h-12" />,
    title: 'On Grid Solar Systems',
    description: '...',
    // CHANGE THIS:
    image: '/images/services/on-grid-system.jpg',  // ← Update
    features: ['Grid Connected', 'Net Metering', 'Cost Effective'],
  },
  {
    icon: <FiTool className="w-12 h-12" />,
    title: 'Installation Services',
    description: '...',
    // CHANGE THIS:
    image: '/images/services/installation-work.jpg',  // ← Update
    features: ['Quick Setup', 'Professional Team', 'Quality Assured'],
  },
  {
    icon: <FiSettings className="w-12 h-12" />,
    title: 'Maintenance & Repair',
    description: '...',
    // CHANGE THIS:
    image: '/images/services/maintenance.jpg',  // ← Update
    features: ['Regular Checkups', 'Quick Repairs', '24/7 Support'],
  },
  {
    icon: <FiWifi className="w-12 h-12" />,
    title: 'Solar Street Lights',
    description: '...',
    // CHANGE THIS:
    image: '/images/services/street-lights.jpg',  // ← Update
    features: ['Auto On/Off', 'Long Battery Life', 'Weather Resistant'],
  },
  {
    icon: <FiCheckCircle className="w-12 h-12" />,
    title: 'Inverter Battery',
    description: '...',
    // CHANGE THIS:
    image: '/images/services/inverter-battery.jpg',  // ← Update
    features: ['Long Lasting', 'High Capacity', 'Low Maintenance'],
  },
];
```

---

#### 4️⃣ Gallery Component (`components/Gallery.tsx`)

Update the galleryItems array (around line 18):

```typescript
const galleryItems = [
  {
    image: '/images/gallery/ground-mount-1.jpg',  // ← Update
    title: 'Ground Mount Solar',
    category: 'Ground Mount',
  },
  {
    image: '/images/gallery/industrial-1.jpg',  // ← Update
    title: 'Industrial Roof Solar',
    category: 'Industrial',
  },
  {
    image: '/images/gallery/roof-solar-1.jpg',  // ← Update
    title: 'RCC Roof Solar',
    category: 'Roof Solar',
  },
  {
    image: '/images/gallery/installation-1.jpg',  // ← Update
    title: 'Solar Panel Installation',
    category: 'Installations',
  },
  {
    image: '/images/gallery/street-light.jpg',  // ← Update
    title: 'Solar Street Light',
    category: 'Street Lights',
  },
  {
    image: '/images/gallery/roof-solar-2.jpg',  // ← Update
    title: 'Rooftop Installation',
    category: 'Roof Solar',
  },
  {
    image: '/images/gallery/industrial-2.jpg',  // ← Update
    title: 'Industrial Solar System',
    category: 'Industrial',
  },
  {
    image: '/images/gallery/ground-mount-2.jpg',  // ← Update
    title: 'Ground Solar Farm',
    category: 'Ground Mount',
  },
  {
    image: '/images/gallery/installation-2.jpg',  // ← Update
    title: 'Residential Installation',
    category: 'Installations',
  },
];
```

---

## 🎨 Image Requirements Summary

| Location | Count | Size | Format |
|----------|-------|------|--------|
| Logo | 2 | 500x500px | PNG |
| Hero | 2 | 1920x1080px | JPG |
| About | 1 | 800x1000px | JPG |
| Services | 6 | 600x400px | JPG |
| Gallery | 9+ | 1200x800px | JPG |
| **Total** | **20+** | - | - |

---

## 🔍 Where to Find Good Images

### From Your Own Projects
- ✅ Installation photos
- ✅ Completed projects
- ✅ Team at work
- ✅ Before/after shots

### Professional Photography
- Hire a photographer for 1 day
- Get 50-100 professional shots
- Cost: ₹5,000-₹15,000

### Stock Photos (If Needed)
- Pexels.com (free)
- Unsplash.com (free)
- Pixabay.com (free)
- Shutterstock.com (paid)

**⚠️ Note:** Use your own project photos whenever possible for authenticity!

---

## ⚡ Quick Test

After adding images, test each section:

```bash
# Make sure dev server is running
npm run dev

# Open in browser
http://localhost:3000
```

Check:
- [ ] Hero section loads with your background
- [ ] About section shows your image
- [ ] All 6 service cards have images
- [ ] Gallery shows your 9 project photos
- [ ] Images load quickly
- [ ] Images look good on mobile

---

## 🐛 Troubleshooting

### Images not showing?
1. Check file names match exactly (case-sensitive!)
2. Verify images are in correct folders
3. Restart dev server: `npm run dev`
4. Check browser console for errors (F12)

### Images loading slowly?
1. Compress images (use TinyPNG.com)
2. Keep files under 500KB each
3. Use JPG for photos, PNG for logos

### Wrong size/stretched?
1. Use recommended dimensions
2. Maintain aspect ratios
3. Crop before uploading

---

## 📋 Complete Checklist

### Preparation
- [ ] Gather 20+ quality images
- [ ] Organize by category
- [ ] Rename with clear names
- [ ] Compress/optimize all images
- [ ] Place in correct folders

### Code Updates
- [ ] Hero.tsx - 2 images updated
- [ ] About.tsx - 1 image updated
- [ ] Services.tsx - 6 images updated
- [ ] Gallery.tsx - 9 images updated

### Testing
- [ ] All images load correctly
- [ ] No broken image icons
- [ ] Mobile view looks good
- [ ] Fast loading speed
- [ ] Alt tags are descriptive

### Optional
- [ ] Remove Unsplash domains from next.config.js
- [ ] Add more gallery images
- [ ] Optimize for SEO
- [ ] Add image captions

---

## 💡 Pro Tips

1. **Use Real Photos**: Customers trust real project photos more than stock images
2. **Show Your Team**: Include photos of your team at work
3. **Before/After**: Great for gallery section
4. **Different Angles**: Show projects from multiple perspectives
5. **Include People**: Photos with people are more engaging
6. **Good Lighting**: Take photos in daylight for best quality
7. **Branding**: Add your logo watermark (subtle) to protect images

---

## 🎯 Next Steps After Images

Once images are updated:

1. **Update Contact Information**
   - Phone numbers
   - Email addresses
   - Physical address

2. **Configure Firebase**
   - Follow SETUP.md
   - Test contact form

3. **Deploy Website**
   - Push to GitHub
   - Deploy on Vercel/Netlify

---

**Need more help?**
- See `public/images/README.md` for detailed guide
- See `SETUP.md` for Firebase setup
- See `PROJECT_SUMMARY.md` for complete features

**Ready to add your images!** 📸

