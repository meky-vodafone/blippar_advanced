# 🚀 Advanced Surface Tracking Integration - Setup Guide

> **Complete setup instructions for implementing advanced surface tracking with the Blippar WebAR SDK**

This guide walks you through setting up the **Advanced Surface Tracking Integration** - a professional surface tracking implementation that demonstrates sophisticated SDK features, minimal UI approach, and extensive customization capabilities.

## 📋 Prerequisites

Before getting started, ensure you have:

- ✅ **Valid Blippar License Key** - Get one from [Blippar Hub](https://blippar.com) after Sign up
- ✅ **WebAR SDK File** - Download the latest SDK from your developer account
- ✅ **HTTPS Server** - Required for camera access (see server options below)
- ✅ **Modern Browser** - Chrome, Safari, Edge, or Firefox
- ✅ **Mobile Device** - For full AR experience (desktop works for testing)

## 🚀 Quick Setup (5 minutes)

### Step 1: Download & Extract
```bash
# Download the sandbox files
git clone <repository-url>
cd webar-sdk-sandbox

# Or download and extract the ZIP file
unzip webar-sdk-sandbox.zip
cd webar-sdk-sandbox
```

### Step 2: Configure Your SDK
```html
<!-- In index.html, line 46-58 -->
<!-- Replace the placeholder with your actual SDK path -->
<script src="path/to/your/webar-sdk.js"
    on-load=""
    on-progress="customProgressCallback"
    on-error="customErrorCallback"
    webar-mode="surface-tracking"
    auto-init="true"
    auto-start-tracking="true"
    minimal-ui="true"
    render-scene-on-desktop="false"
    external-camera-stream="true"
    debug-mode="true">
</script>
```

### Step 3: Add Your License Key
```html
<!-- In index.html, line 82 -->
<a-scene webar-scene="key: YOUR_LICENSE_KEY_HERE">
```

### Step 4: Start HTTPS Server
Choose one of these methods:

#### Option A: Python (if you have Python installed)
```bash
# Python 3
python -m http.server 8000 --bind 0.0.0.0

# Python 2
python -m SimpleHTTPServer 8000

# Then visit: https://localhost:8000
```

#### Option B: Node.js (if you have Node.js installed)
```bash
# Install http-server globally
npm install -g http-server

# Start server with SSL
http-server -S -p 8000

# Then visit: https://localhost:8000
```

#### Option C: Visual Studio Code (recommended for development)
```bash
# Install Live Server extension
# Right-click index.html → "Open with Live Server"
# VS Code will handle HTTPS automatically
```

#### Option D: Online hosting (for mobile testing)
```bash
# Deploy to Netlify, Vercel, or GitHub Pages
# These services provide HTTPS by default
```

### Step 5: Test on Mobile
1. **Open the HTTPS URL** on your mobile device
2. **Grant camera permissions** when prompted
3. **Grant motion sensor permissions** (iOS only)
4. **Point camera at a flat surface** with good lighting
5. **See AR objects appear** on the surface

## 📁 File Structure

```
webar-sdk-sandbox/
├── index.html              # Main HTML file
├── styles.css              # Modern UI styling
├── custom-handlers.js      # Progress & error handlers
├── loader.js              # Camera & permission handling
├── README.md              # Main documentation
├── SETUP_GUIDE.md         # This setup guide
└── path/to/webar-sdk.js   # Your WebAR SDK file
```

## ⚙️ Configuration Options

### SDK Parameters
```html
<script src="webar-sdk.js"
    webar-mode="surface-tracking"          <!-- AR mode: surface-tracking, marker-tracking -->
    auto-init="true"                       <!-- Auto-initialize: true, false -->
    auto-start-tracking="true"             <!-- Auto-start: true, false -->
    minimal-ui="true"                      <!-- Minimal UI: true, false -->
    external-camera-stream="true"          <!-- External camera: true, false -->
    render-scene-on-desktop="false"       <!-- Desktop preview: true, false -->
    debug-mode="true">                     <!-- Debug logging: true, false -->
</script>
```

### Scene Configuration
```html
<a-scene 
    webar-scene="key: YOUR_LICENSE_KEY"    <!-- Your license key -->
    xr-mode-ui="enabled: false"           <!-- Disable WebXR UI -->
    device-orientation-permission-ui="enabled: false"  <!-- Disable A-Frame permission UI -->
    loading-screen="enabled: false">       <!-- Disable A-Frame loading screen -->
```

## 🎨 Customization

### Change Splash Screen Branding
```javascript
// In custom-handlers.js, modify CONFIG object
const CONFIG = {
    SPLASH: {
        LOGO_URL: 'https://yoursite.com/logo.png',
        APP_NAME: 'Your App Name',
        SUBTITLE: 'Your Subtitle',
        FADE_DURATION: 500
    }
    // ... rest of config
};
```

### Add Your 3D Models
```html
<!-- In index.html, replace demo objects -->
<a-entity webar-stage>
    <a-entity webar-ux-control="stageCursorUX: true; userGestureRotation: true; userGestureScale: true">
        <!-- Add your models here -->
        <a-gltf-model src="models/your-model.glb" position="0 0 0" scale="1 1 1"></a-gltf-model>
    </a-entity>
</a-entity>
```

### Modify Permission Messages
```html
<!-- In index.html, update permission dialogs -->
<div id="camperms" class="permholder hide">
    <div>📷 Your Custom Camera Title</div>
    <div>Your custom camera permission message.</div>
    <div class="permsbutton">Your Button Text</div>
</div>
```

## 🐛 Troubleshooting

### Camera Issues
**Problem**: Camera not starting
**Solutions**:
- ✅ Ensure you're using HTTPS (not HTTP)
- ✅ Check browser permissions (camera allowed)
- ✅ Try refreshing the page
- ✅ Check console for error messages
- ✅ Test in different browser

### AR Tracking Issues
**Problem**: AR objects not appearing
**Solutions**:
- ✅ Ensure good lighting conditions
- ✅ Point at textured surfaces (not plain white walls)
- ✅ Keep device steady during initialization
- ✅ Check license key is correct
- ✅ Verify SDK file path is accessible

### iOS Permission Issues
**Problem**: Permissions not working on iOS
**Solutions**:
- ✅ Must use HTTPS (iOS requires secure context)
- ✅ Ensure user interaction before requesting permissions
- ✅ Check iOS version (13+ requires explicit motion permission)
- ✅ Try in Safari (recommended for iOS)

### SDK Loading Issues
**Problem**: SDK not loading or initializing
**Solutions**:
- ✅ Check SDK file path is correct
- ✅ Verify license key is valid and active
- ✅ Check console for specific error messages
- ✅ Ensure all dependencies are loaded
- ✅ Try with debug-mode="true" for more logs

## 🔍 Testing Checklist

### Desktop Testing
- [ ] Page loads without console errors
- [ ] Custom splash screen appears
- [ ] Progress bar works (even with simulation)
- [ ] Error handling works (test invalid license key)
- [ ] Custom UI styling looks correct

### Mobile Testing
- [ ] HTTPS URL accessible on mobile
- [ ] Camera permission dialog appears
- [ ] Camera stream starts successfully
- [ ] Motion permission dialog appears (iOS)
- [ ] AR tracking starts on flat surface
- [ ] AR objects appear and are interactive
- [ ] Loading screen disappears smoothly

## 📞 Support

### Common Resources
- 📖 **SDK Documentation**: https://docs.blippar.com/webar-sdk/
- 💬 **Developer Community**: Join our Discord/Slack
- 📧 **Technical Support**: support@blippar.com
- 🐛 **Bug Reports**: GitHub Issues

### Debugging Tips
1. **Enable debug mode** (`debug-mode="true"`)
2. **Check browser console** for detailed logs
3. **Test on multiple devices** and browsers
4. **Use minimal test scenes** first
5. **Verify all file paths** are accessible

## 📝 Next Steps

Once you have the sandbox working:

1. **Customize the UI** with your branding
2. **Add your 3D models** and assets
3. **Implement your app logic** 
4. **Test on target devices** thoroughly
5. **Deploy to production** with proper SSL certificate

---

**Happy AR Development!** 🚀

*Need help? Check the main README.md or contact support.* 