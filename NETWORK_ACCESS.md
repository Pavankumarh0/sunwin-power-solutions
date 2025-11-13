# 🌐 Network Access Guide

## Your Local IP Address
```
10.238.214.112
```

## 🚀 How to Access from Other Devices

### Step 1: Stop Current Server
If your server is running, stop it with `Ctrl + C`

### Step 2: Start Server with Network Access
Run this command:
```bash
npm run dev:network
```

Or manually:
```bash
next dev -H 0.0.0.0
```

### Step 3: Access from Other Devices

#### From Your Phone/Tablet (Same WiFi):
```
http://10.238.214.112:3000
```

#### Admin Panel:
```
http://10.238.214.112:3000/sunvinadmin
```

## 📱 Access URLs

### Main Website:
- **Local:** http://localhost:3000
- **Network:** http://10.238.214.112:3000

### Admin Panel:
- **Local:** http://localhost:3000/sunvinadmin
- **Network:** http://10.238.214.112:3000/sunvinadmin
- **Password:** Sunvin@2025

## ⚠️ Important Requirements

### 1. Same WiFi Network
All devices must be connected to the **same WiFi network**

### 2. Firewall Settings
If you can't access from other devices:
- Allow Node.js through Windows Firewall
- Allow port 3000 through firewall

### 3. Router Settings
Some routers block device-to-device communication. If it doesn't work:
- Check router settings for "AP Isolation" (disable it)
- Check if "Client Isolation" is enabled (disable it)

## 🔧 Troubleshooting

### Can't Access from Phone?

**Solution 1: Check Firewall**
```bash
# Allow Node.js through Windows Firewall
# Go to: Control Panel > Windows Defender Firewall > Allow an app
# Find Node.js and enable it
```

**Solution 2: Create Firewall Rule**
Run as Administrator:
```bash
netsh advfirewall firewall add rule name="Node.js Server" dir=in action=allow protocol=TCP localport=3000
```

**Solution 3: Temporarily Disable Firewall (Testing Only)**
```bash
# For testing only - NOT recommended for production
netsh advfirewall set allprofiles state off

# Re-enable after testing:
netsh advfirewall set allprofiles state on
```

### Wrong IP Address?
Your IP might change. Check current IP:
```bash
ipconfig | findstr /i "IPv4"
```

### Connection Refused?
Make sure:
1. Server is running with `npm run dev:network`
2. You're using the correct IP address
3. Port 3000 is not blocked by firewall
4. Both devices are on same WiFi

## 🎯 Quick Start

```bash
# 1. Stop current server (Ctrl+C)

# 2. Start with network access
npm run dev:network

# 3. On your phone/tablet (same WiFi):
# Open browser and go to:
# http://10.238.214.112:3000
```

## 📊 Use Cases

### Test Mobile View:
- Open on your phone to test mobile responsiveness
- Test touch interactions
- Test call/email links

### Show to Client:
- Client on same network can view site
- Demo admin panel features
- Test on different devices

### Team Development:
- Team members on same WiFi can access
- Test on various devices
- Collaborative debugging

## 🔒 Security Notes

### Local Network Only:
- Only accessible on your local network
- Not accessible from internet
- Safe for development

### Production:
- For production, deploy to Vercel/Netlify
- Use proper domain and HTTPS
- Don't expose development server to internet

## 📱 Testing Checklist

On your phone/tablet:
- [ ] Connect to same WiFi
- [ ] Open browser
- [ ] Go to: http://10.238.214.112:3000
- [ ] Test homepage
- [ ] Test admin panel login
- [ ] Test mobile responsiveness
- [ ] Test call/email links
- [ ] Test contact form

## 🌐 Alternative Methods

### Method 1: Use ngrok (Tunnel)
For internet access (not just local network):
```bash
# Install ngrok
npm install -g ngrok

# Run your server normally
npm run dev

# In another terminal:
ngrok http 3000

# Use the ngrok URL on any device
```

### Method 2: Use Vercel Dev
```bash
npm install -g vercel
vercel dev
```

## ℹ️ Network Script Details

The `dev:network` script runs:
```bash
next dev -H 0.0.0.0
```

This binds the server to all network interfaces, making it accessible from:
- localhost (127.0.0.1)
- Your local IP (10.238.214.112)
- Any device on the same network

## 🎉 Summary

**Your Local IP:** 10.238.214.112  
**Command:** `npm run dev:network`  
**URL on Phone:** http://10.238.214.112:3000  
**Admin Panel:** http://10.238.214.112:3000/sunvinadmin

Now you can test your website on any device connected to the same WiFi! 📱💻🖥️

