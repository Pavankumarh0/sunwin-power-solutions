# 📸 Images Folder Guide

## Folder Structure

```
public/images/
├── logo/           # Company logo files
├── hero/           # Hero section background images
├── about/          # About section images
├── services/       # Service card images (6 images)
└── gallery/        # Project gallery images (9+ images)
```

## 📁 What to Place in Each Folder

### `/logo/` - Company Logo
Place your company logo files here:
- `logo.png` - Main logo (transparent background recommended)
- `logo-white.png` - White version for dark backgrounds
- `logo-icon.png` - Just the sun icon if you have one

**Recommended size:** 200x200px or 500x500px (will auto-resize)

---

### `/hero/` - Hero Section
Place large, high-quality images for the hero section:
- `hero-bg.jpg` - Main hero background (solar panels, installations)
- `solar-panel-float.png` - Floating solar panel image (transparent background)

**Recommended size:** 
- Background: 1920x1080px or larger
- Floating element: 400x400px

**Current usage:** `components/Hero.tsx` (lines 12, 27)

---

### `/about/` - About Section
Place images showing your company, team, or projects:
- `about-main.jpg` - Main about section image
- `team.jpg` - Team photo (optional)
- `office.jpg` - Office/facility photo (optional)

**Recommended size:** 800x1000px

**Current usage:** `components/About.tsx` (line 53)

---

### `/services/` - Service Cards
Place 6 images for your service offerings:
1. `solar-panel-installation.jpg` - Solar panel installation
2. `on-grid-systems.jpg` - On-grid solar systems
3. `installation-service.jpg` - Installation service
4. `maintenance-repair.jpg` - Maintenance and repair
5. `solar-street-lights.jpg` - Solar street lights
6. `inverter-battery.jpg` - Inverter and battery

**Recommended size:** 600x400px (landscape)

**Current usage:** `components/Services.tsx` (lines 16-65)

---

### `/gallery/` - Project Gallery
Place your completed project photos here (at least 9 images):

**Categories to cover:**
- `ground-mount-1.jpg`, `ground-mount-2.jpg` - Ground mount solar
- `roof-solar-1.jpg`, `roof-solar-2.jpg` - RCC roof solar
- `industrial-1.jpg`, `industrial-2.jpg` - Industrial installations
- `street-light-1.jpg` - Solar street lights
- `installation-1.jpg`, `installation-2.jpg` - Installation process

**Recommended size:** 800x600px or 1200x800px

**Current usage:** `components/Gallery.tsx` (lines 18-68)

**Naming Convention:**
```
gallery/
├── ground-mount-1.jpg
├── ground-mount-2.jpg
├── roof-solar-1.jpg
├── roof-solar-2.jpg
├── industrial-1.jpg
├── industrial-2.jpg
├── street-light-1.jpg
├── installation-1.jpg
└── installation-2.jpg
```

---

## 🔄 How to Replace Placeholder Images

### Method 1: Replace in Component Files

**Example - Hero Section:**

```typescript
// Current (Unsplash):
src="https://images.unsplash.com/photo-509391366360-2e959784a276"

// Replace with local:
src="/images/hero/hero-bg.jpg"
```

**Example - Service Cards:**

```typescript
// Current:
image: 'https://images.unsplash.com/photo-...'

// Replace with:
image: '/images/services/solar-panel-installation.jpg'
```

### Method 2: Find and Replace

1. Open each component file
2. Find: `https://images.unsplash.com/`
3. Replace with your local image path: `/images/[folder]/[filename].jpg`

---

## 📋 Image Replacement Checklist

### Hero Section (`components/Hero.tsx`)
- [ ] Line 12: Replace hero background image
- [ ] Line 27: Replace floating solar panel image

### About Section (`components/About.tsx`)
- [ ] Line 53: Replace main about image

### Services Section (`components/Services.tsx`)
- [ ] Line 16: Solar Panel Installation image
- [ ] Line 25: On Grid Solar Systems image
- [ ] Line 34: Installation Services image
- [ ] Line 43: Maintenance & Repair image
- [ ] Line 52: Solar Street Light image
- [ ] Line 61: Inverter Battery image

### Gallery Section (`components/Gallery.tsx`)
- [ ] Lines 18-68: Replace all 9 gallery images

---

## 🎨 Image Optimization Tips

### File Formats
- **JPEG (.jpg)** - For photos (hero, about, services, gallery)
- **PNG (.png)** - For logos and images needing transparency
- **WebP (.webp)** - Modern format, smaller file size (optional)

### File Sizes
- Keep individual images under 500KB
- Compress images before uploading
- Use tools like TinyPNG or Squoosh

### Dimensions
| Section | Recommended Size | Aspect Ratio |
|---------|-----------------|--------------|
| Hero BG | 1920x1080px | 16:9 |
| Logo | 500x500px | 1:1 |
| About | 800x1000px | 4:5 |
| Services | 600x400px | 3:2 |
| Gallery | 1200x800px | 3:2 |

---

## 🔧 Update Code Example

**Step 1:** Place your images in the folders

**Step 2:** Update `components/Hero.tsx`

```typescript
// OLD:
<Image
  src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
  alt="Solar Panels"
  fill
  className="object-cover"
  priority
/>

// NEW:
<Image
  src="/images/hero/hero-bg.jpg"
  alt="Solar Panels"
  fill
  className="object-cover"
  priority
/>
```

**Step 3:** Update `components/Gallery.tsx`

```typescript
// OLD:
const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
    title: 'Ground Mount Solar',
    category: 'Ground Mount',
  },
  // ... more items
];

// NEW:
const galleryItems = [
  {
    image: '/images/gallery/ground-mount-1.jpg',
    title: 'Ground Mount Solar',
    category: 'Ground Mount',
  },
  // ... more items
];
```

**Step 4:** Remove Unsplash domains from `next.config.js` (optional)

```javascript
// You can remove this after replacing all images:
images: {
  domains: ['images.unsplash.com', 'plus.unsplash.com'],
},
```

---

## 📱 Quick Start

1. **Gather Your Images**
   - Collect 20-25 high-quality photos of your work
   - Include: installations, team, office, equipment

2. **Organize by Category**
   - Sort into the 5 folders
   - Rename with descriptive names

3. **Optimize Images**
   - Compress to reduce file size
   - Resize to recommended dimensions
   - Convert to JPEG/PNG

4. **Update Component Files**
   - Replace Unsplash URLs with local paths
   - Test each section after updating

5. **Test Your Site**
   - Check all images load correctly
   - Verify mobile responsiveness
   - Ensure fast loading times

---

## 🚀 Alternative: Use External Image Hosting

If you prefer to host images externally:

### Option 1: Cloudinary (Recommended)
- Free tier: 25GB storage
- Automatic optimization
- CDN delivery
- Update `next.config.js` with Cloudinary domain

### Option 2: Firebase Storage
- Integrated with your Firebase project
- Good for dynamic images
- Requires setup

### Option 3: AWS S3
- Scalable storage
- Pay-as-you-go pricing
- Requires AWS account

---

## ✅ Final Checklist

Before going live:
- [ ] All placeholder images replaced
- [ ] Images optimized and compressed
- [ ] Mobile view checked
- [ ] Loading speeds tested
- [ ] Alt tags updated for SEO
- [ ] Copyright/licensing confirmed
- [ ] Backup images saved

---

**Need help?** Check PROJECT_SUMMARY.md for more details on where each image is used!

