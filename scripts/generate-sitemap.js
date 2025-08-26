#!/usr/bin/env node

/**
 * Sitemap Generator for Officina Schettino
 * Generates sitemap.xml with all pages using the custom domain
 * Enhanced with image support for better SEO
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Site configuration - matches src/lib/config.ts
const SITE_CONFIG = {
  SITE_URL: "https://cerchiinlegatorino.com/",
  SITE_NAME: "Officina Schettino",
};

// All pages with their routes, last modified dates, and associated images
const PAGES = [
  {
    path: "/",
    lastmod: "2025-01-27", // Set to actual content update date
    changefreq: "weekly",
    priority: "1.0",
    images: [
      {
        loc: "/assets/homepage/cerchione.webp",
        title: "Riparazione cerchi in lega - Officina Schettino Moncalieri",
        caption: "Specialisti riparazione cerchi in lega a Moncalieri e Torino",
      },
    ],
  },
  {
    path: "/servizi",
    lastmod: "2025-01-27",
    changefreq: "monthly",
    priority: "0.9",
    images: [
      {
        loc: "/assets/servizi/saldatura.webp",
        title: "Servizi riparazione cerchi in lega",
        caption: "Saldatura, tornitura, verniciatura e diamantatura cerchi",
      },
    ],
  },
  {
    path: "/servizi/saldatura-cerchi-in-lega",
    lastmod: "2025-01-27",
    changefreq: "monthly",
    priority: "0.8",
    images: [
      {
        loc: "/assets/servizi/saldatura.webp",
        title: "Saldatura cerchi in lega - Prima e dopo",
        caption: "Riparazione professionale cerchi danneggiati",
      },
    ],
  },
  {
    path: "/servizi/tornitura-molatura-cerchi",
    lastmod: "2025-01-27",
    changefreq: "monthly",
    priority: "0.8",
    images: [
      {
        loc: "/assets/servizi/tornitura.webp",
        title: "Tornitura e molatura cerchi in lega",
        caption: "Ripristino perfetto della forma dei cerchi",
      },
    ],
  },
  {
    path: "/servizi/verniciatura-cerchi-in-lega",
    lastmod: "2025-01-27",
    changefreq: "monthly",
    priority: "0.8",
    images: [
      {
        loc: "/assets/servizi/verniciatura.webp",
        title: "Verniciatura cerchi in lega - Finitura professionale",
        caption: "Verniciatura e finitura cerchi come nuovi",
      },
    ],
  },
  {
    path: "/servizi/diamantatura-cerchi-in-lega",
    lastmod: "2025-01-27",
    changefreq: "monthly",
    priority: "0.8",
    images: [
      {
        loc: "/assets/servizi/diamantatura.webp",
        title: "Diamantatura cerchi in lega",
        caption: "Trattamento diamantatura per cerchi perfetti",
      },
    ],
  },
  {
    path: "/contatti",
    lastmod: "2025-01-27",
    changefreq: "monthly",
    priority: "0.7",
    images: [],
  },
  {
    path: "/privacy-policy",
    lastmod: "2025-01-27",
    changefreq: "yearly",
    priority: "0.3",
    images: [],
  },
  {
    path: "/cookie-policy",
    lastmod: "2025-01-27",
    changefreq: "yearly",
    priority: "0.3",
    images: [],
  },
];

/**
 * Generate XML sitemap content with image support
 */
function generateSitemapXML() {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  const urlsetClose = "</urlset>";

  const urls = PAGES.map((page) => {
    // Remove leading slash from path to avoid double slashes with base URL
    const cleanPath = page.path.startsWith("/")
      ? page.path.slice(1)
      : page.path;
    const fullUrl = cleanPath
      ? `${SITE_CONFIG.SITE_URL}${cleanPath}`
      : SITE_CONFIG.SITE_URL;

    let urlEntry = `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>`;

    // Add image entries if present
    if (page.images && page.images.length > 0) {
      page.images.forEach((image) => {
        const fullImageUrl = image.loc.startsWith("http")
          ? image.loc
          : `${SITE_CONFIG.SITE_URL}${
              image.loc.startsWith("/") ? image.loc.slice(1) : image.loc
            }`;

        urlEntry += `
    <image:image>
      <image:loc>${fullImageUrl}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>`;
      });
    }

    urlEntry += `
  </url>`;
    return urlEntry;
  }).join("\n");

  return xmlHeader + urlsetOpen + urls + "\n" + urlsetClose;
}

/**
 * Generate robots.txt content
 */
function generateRobotsTxt() {
  return `# Robots.txt for ${SITE_CONFIG.SITE_NAME}
# Generated on ${new Date().toISOString()}

User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_CONFIG.SITE_URL}sitemap.xml

# Disallow admin or private areas (if any)
# Disallow: /admin/
# Disallow: /private/
`;
}

/**
 * Main function to generate sitemap and robots.txt
 */
function main() {
  try {
    const publicDir = path.join(__dirname, "..", "public");

    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Generate sitemap.xml
    const sitemapPath = path.join(publicDir, "sitemap.xml");
    const sitemapContent = generateSitemapXML();
    fs.writeFileSync(sitemapPath, sitemapContent, "utf8");
    console.log(`✅ Sitemap generated: ${sitemapPath}`);

    // Generate robots.txt
    const robotsPath = path.join(publicDir, "robots.txt");
    const robotsContent = generateRobotsTxt();
    fs.writeFileSync(robotsPath, robotsContent, "utf8");
    console.log(`✅ Robots.txt generated: ${robotsPath}`);

    // Log summary
    console.log(`\n📊 Sitemap Summary:`);
    console.log(`   - Total pages: ${PAGES.length}`);
    console.log(`   - Base URL: ${SITE_CONFIG.SITE_URL}`);
    console.log(`   - Generated: ${new Date().toISOString()}`);

    // List all pages
    console.log(`\n📄 Pages included:`);
    PAGES.forEach((page) => {
      console.log(`   - ${page.path} (Priority: ${page.priority})`);
    });
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    process.exit(1);
  }
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

export { generateSitemapXML, generateRobotsTxt, SITE_CONFIG, PAGES };
