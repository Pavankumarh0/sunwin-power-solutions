# How to Add Your Solar Plant Video Background

## Option 1: Use Your Own Video File (Recommended)

1. **Prepare your video:**
   - Format: MP4 (H.264 codec) or WebM
   - Resolution: 1920x1080 (Full HD) or higher
   - Duration: 10-30 seconds (will loop automatically)
   - File Size: Keep under 5MB for optimal loading
   - Frame Rate: 30fps recommended

2. **Add the video file:**
   - Place your video file in this directory: `/public/videos/`
   - Name it: `solar-plant-background.mp4`
   - (Optional) Also add a WebM version: `solar-plant-background.webm`

3. **The component will automatically use your local video file!**

## Option 2: Use External Video URL

If you want to use a video from an external source (CDN, video hosting service), you can modify the `Hero.tsx` component and replace the external video URL in the `<source>` tag.

## Current Setup

The Hero component is configured to:
1. First try to load `/videos/solar-plant-background.mp4` (your local file)
2. If that fails, try `/videos/solar-plant-background.webm` (WebM version)
3. If both fail, it will use a fallback external video URL
4. If video fails completely, it will fall back to a GIF image

## Testing

After adding your video file:
1. Restart your Next.js development server
2. Navigate to the home page
3. The video should automatically play in the background

## Tips

- Compress your video to reduce file size while maintaining quality
- Use tools like HandBrake or FFmpeg to optimize your video
- Test on different devices and browsers
- Ensure the video loops seamlessly for a smooth experience

