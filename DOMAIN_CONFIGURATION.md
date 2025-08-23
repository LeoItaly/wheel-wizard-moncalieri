# Domain Configuration Guide

This document explains how to configure and change the domain settings for the Officina Schettino website.

## 🏠 Current Configuration

The website is currently configured to use the custom domain:
**`https://cerchiinlegatorino.com`**

## 📁 Configuration Files

### 1. **Central Configuration** (`src/lib/config.ts`)

This is the main configuration file that contains all site settings including the domain URL.

### 2. **Environment Configuration** (`src/lib/env.ts`)

Allows overriding configuration values via environment variables.

### 3. **Sitemap Generator** (`scripts/generate-sitemap.js`)

Automatically generates sitemap.xml and robots.txt with the correct domain.

## 🔧 How to Change the Domain

### Option 1: Update Central Configuration (Recommended)

1. Open `src/lib/config.ts`
2. Find the `SITE_CONFIG` object
3. Update the `SITE_URL` value:

```typescript
export const SITE_CONFIG = {
  SITE_URL: "https://your-new-domain.com", // ← Change this
  // ... other settings
} as const;
```

### Option 2: Use Environment Variables

1. Create a `.env` file in the root directory
2. Add the new domain:

```bash
VITE_SITE_URL=https://your-new-domain.com
```

## 🚀 What Gets Updated Automatically

When you change the domain, the following will automatically use the new URL:

### ✅ **SEO & Meta Tags**

- Canonical URLs (`<link rel="canonical">`)
- Open Graph URLs (`og:url`)
- Twitter Card URLs (`twitter:url`)
- JSON-LD structured data URLs

### ✅ **Sitemap & Robots**

- `sitemap.xml` - All page URLs
- `robots.txt` - Sitemap reference

### ✅ **Build Process**

- Sitemap generation during build
- All meta tags in HTML output

## 📋 Files That Need Manual Updates

### 1. **Redirects** (`public/_redirects`)

Update any hardcoded redirects:

```bash
# Old
https://old-domain.com/*  https://cerchiinlegatorino.com/:splat  301!

# New
https://old-domain.com/*  https://your-new-domain.com/:splat  301!
```

### 2. **External References**

Check for any hardcoded URLs in:

- Documentation files
- README files
- External service configurations

## 🛠️ Build Commands

### Generate Sitemap Only

```bash
npm run generate-sitemap
```

### Build with Sitemap Generation

```bash
npm run build
```

### Development Build with Sitemap

```bash
npm run build:dev
```

## 🔍 Verification Checklist

After changing the domain, verify:

- [ ] All canonical URLs use the new domain
- [ ] Open Graph URLs are correct
- [ ] Twitter Card URLs are correct
- [ ] Sitemap.xml contains new domain URLs
- [ ] Robots.txt references new sitemap URL
- [ ] All JSON-LD structured data uses new domain
- [ ] No hardcoded old domain references remain

## 📱 Testing

### Local Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## 🚨 Important Notes

1. **Search Engines**: After changing domains, update Google Search Console and other search engines
2. **Analytics**: Update Google Analytics, Google Tag Manager, and other tracking services
3. **Social Media**: Update any social media profile links
4. **Backlinks**: Notify websites linking to your old domain
5. **SSL Certificate**: Ensure the new domain has a valid SSL certificate

## 🆘 Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all import paths are correct
2. **Missing Sitemap**: Run `npm run generate-sitemap` manually
3. **Cached URLs**: Clear browser cache and CDN cache
4. **Environment Variables**: Check `.env` file syntax

### Getting Help

If you encounter issues:

1. Check the console for error messages
2. Verify all configuration files are saved
3. Ensure the build process completes successfully
4. Check that the sitemap was generated correctly

---

**Last Updated**: $(date)
**Domain**: https://cerchiinlegatorino.com
**Status**: ✅ Active
