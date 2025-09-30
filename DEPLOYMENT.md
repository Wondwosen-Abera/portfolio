# GitHub Pages Deployment Guide

This guide will help you deploy your Vite + React portfolio to GitHub Pages.

## Prerequisites

- A GitHub repository
- Node.js and npm installed locally
- Git configured with your GitHub credentials

## Setup Steps

### 1. Repository Configuration

1. **Update the base path in `vite.config.js`**:
   - Replace `portfolio-project` with your actual repository name
   - The base path should match your repository name

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 3. Deploy Your Site

#### Option A: Automatic Deployment (Recommended)

The GitHub Actions workflow will automatically deploy your site when you push to the `main` branch:

1. Commit and push your changes:

   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

2. Go to the **Actions** tab in your repository
3. Wait for the deployment workflow to complete
4. Your site will be available at: `https://yourusername.github.io/your-repository-name`

#### Option B: Manual Deployment

If you prefer manual deployment:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Deploy using the npm script:
   ```bash
   npm run deploy
   ```

## Important Notes

### Base Path Configuration

- The `base` property in `vite.config.js` must match your repository name
- If your repository is named `my-portfolio`, change the base to `/my-portfolio/`
- This ensures all assets load correctly on GitHub Pages

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable the custom domain in GitHub Pages settings

### Troubleshooting

#### Assets Not Loading

- Verify the `base` path in `vite.config.js` matches your repository name
- Check that all image paths in your code use relative paths

#### Build Failures

- Ensure all dependencies are properly installed
- Check the Actions tab for detailed error logs
- Run `npm run build` locally to test the build process

#### 404 Errors

- Make sure you're using React Router's `HashRouter` instead of `BrowserRouter` for GitHub Pages
- Or configure your server to redirect all routes to `index.html`

## File Structure

```
.github/
  workflows/
    deploy.yml          # GitHub Actions deployment workflow
vite.config.js          # Vite configuration with base path
package.json            # Dependencies and scripts
DEPLOYMENT.md           # This guide
```

## Deployment Workflow

The GitHub Actions workflow:

1. Checks out your code
2. Sets up Node.js environment
3. Installs dependencies
4. Builds the project
5. Deploys to GitHub Pages

## Updating Your Site

To update your deployed site:

1. Make your changes
2. Commit and push to the `main` branch
3. The GitHub Actions workflow will automatically redeploy your site

## Support

If you encounter issues:

1. Check the GitHub Actions logs in the **Actions** tab
2. Verify your `vite.config.js` base path
3. Ensure all dependencies are correctly listed in `package.json`
4. Test the build locally with `npm run build`
