# AI Keyboard Website

This folder contains the landing page for AI Keyboard, deployed automatically to GitHub Pages.

## 📁 Structure

```
website/
├── index.html      # Main landing page
├── styles.css      # Stylesheet
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🚀 How GitHub Pages Deployment Works

### Automatic Deployment

The website is automatically deployed to GitHub Pages when:

1. **Push to main branch**: Any changes to files in the `/website` folder trigger a deployment
2. **Manual trigger**: You can manually trigger deployment from the GitHub Actions tab

### Deployment Process

1. GitHub Actions workflow (`.github/workflows/website-deploy.yml`) runs
2. Files from `/website` folder are copied to a build directory
3. The built site is uploaded as a Pages artifact
4. GitHub Pages automatically deploys the artifact (no manual branch management needed)

### Branch Structure

- **`main` branch**: Contains the source files in `/website` folder
  - This is where you edit and commit changes
- **GitHub Pages deployment**: Managed automatically by GitHub Actions
  - Uses the modern GitHub Actions Pages deployment (no `gh-pages` branch needed)
  - Deployment happens automatically when workflow completes

### Viewing Your Site

After deployment, your site will be available at:
- `https://[YOUR-USERNAME].github.io/[YOUR-REPO]/`
- Or your custom domain if configured in repository settings

### Enabling GitHub Pages

**First-time setup:**

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: `GitHub Actions` (not "Deploy from a branch")
4. The workflow will automatically deploy to GitHub Pages
5. Your site will be live at `https://[username].github.io/[repository-name]/`

**Note**: If your repository is private, you need GitHub Pro/Team/Enterprise to use GitHub Pages. Public repositories have free GitHub Pages.

## ✏️ How to Edit the Website

### Making Changes

1. **Edit files in `/website` folder**:
   - `index.html` - Main HTML content
   - `styles.css` - Styling
   - `script.js` - JavaScript functionality

2. **Commit and push to main branch**:
   ```bash
   git add website/
   git commit -m "Update website: [description]"
   git push origin main
   ```

3. **Deploy automatically**:
   - The GitHub Actions workflow will automatically run
   - Check the Actions tab to monitor deployment progress
   - Site will be live in 1-2 minutes after successful deployment

### Manual Deployment

If you need to manually trigger a deployment:

1. Go to **Actions** tab in GitHub
2. Select **"Deploy Website to GitHub Pages"** workflow
3. Click **"Run workflow"** button
4. Select branch (usually `main`) and click **"Run workflow"**

## 🧪 Local Testing

Before pushing changes, test the website locally:

### Option 1: Simple HTTP Server (Python)

```bash
cd website
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### Option 2: Simple HTTP Server (Node.js)

```bash
cd website
npx http-server -p 8000
```

### Option 3: VS Code Live Server

If using VS Code, install the "Live Server" extension and right-click `index.html` → "Open with Live Server"

### Testing Checklist

- [ ] All links work correctly
- [ ] Images load properly
- [ ] Mobile responsiveness (test on different screen sizes)
- [ ] JavaScript functionality works
- [ ] No console errors
- [ ] Favicon displays correctly
- [ ] Meta tags are properly set

## 📝 Adding Assets

### Images

Place images in the `website/` folder and reference them relatively:

```html
<img src="image.png" alt="Description">
```

### Favicon Setup

A favicon is the small icon that appears in browser tabs and bookmarks.

**Steps:**

1. **Create favicon file**:
   - Recommended size: 32x32 or 16x16 pixels
   - Format: `.ico` (best compatibility) or `.png`
   - You can use online tools like [Favicon Generator](https://realfavicongenerator.net/) or [Favicon.io](https://favicon.io/)

2. **Place file in website folder**:
   ```
   website/
   └── favicon.ico
   ```

3. **Add to index.html**:
   - Open `website/index.html`
   - Find the favicon comment section in the `<head>`
   - Uncomment the favicon link:
     ```html
     <link rel="icon" type="image/x-icon" href="favicon.ico">
     ```

4. **Optional: Multiple sizes** (for better browser support):
   ```html
   <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
   <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
   <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
   ```

### Open Graph (OG) Meta Tags Setup

Open Graph tags control how your site appears when shared on social media (Facebook, Twitter, LinkedIn, etc.).

**Steps:**

1. **Create OG image**:
   - Recommended size: **1200x630 pixels**
   - Format: PNG or JPG
   - Should represent your site/app visually
   - Include text/logo that's readable at this size
   - Save as `og-image.png` in `website/` folder

2. **Update meta tags in index.html**:
   - Open `website/index.html`
   - Once the site is deployed, add these to the Open Graph section in the `<head>`, replacing `[YOUR-USERNAME]` and `[YOUR-REPO]`:
     ```html
     <meta property="og:url" content="https://[YOUR-USERNAME].github.io/[YOUR-REPO]/">
     <meta property="og:image" content="https://[YOUR-USERNAME].github.io/[YOUR-REPO]/og-image.png">
     ```

3. **Customize content** (optional):
   - Update `og:title` if you want a different title for social shares
   - Update `og:description` for a custom share description
   - Add Twitter handle if you have one:
     ```html
     <meta name="twitter:site" content="@YourTwitterHandle">
     ```

4. **Test your OG tags**:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

**Example OG Image Content:**
- App logo/icon
- App name: "AI Keyboard"
- Tagline: "Offline Voice Typing Powered by AI"
- Visual elements that represent the app (keyboard, microphone, etc.)

## 🔧 Troubleshooting

### Deployment Fails

1. Check GitHub Actions logs for errors
2. Verify all files in `/website` folder are valid
3. Ensure `index.html` exists in `/website` folder
4. Check for syntax errors in HTML/CSS/JS

### Changes Not Appearing

1. Wait 1-2 minutes for deployment to complete
2. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
3. Clear browser cache
4. Check GitHub Actions to ensure deployment succeeded

### Site Not Loading

1. Verify GitHub Pages is enabled in repository settings
2. Check repository visibility (must be public, or Pages must be enabled for private repos)
3. Verify the deployment workflow completed successfully

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 🎨 Customization

### Updating Content

Edit `index.html` to update:
- Hero section text
- Feature descriptions
- Pricing information
- FAQ items
- Footer links

### Styling

Edit `styles.css` to customize:
- Colors
- Fonts
- Colors and themes
- Layout and spacing
- Responsive breakpoints

### Functionality

Edit `script.js` to add:
- Interactive features
- Animations
- Form handling
- Analytics

---

**Note**: Always test changes locally before pushing to ensure everything works correctly!

