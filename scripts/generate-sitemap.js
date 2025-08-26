#!/usr/bin/env node

/**
 * Sitemap Generator for Officina Schettino
 * Generates sitemap.xml with all pages using the custom domain
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

// All pages with their routes and last modified dates
const PAGES = [
  {
    path: "/",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/servizi",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/servizi/saldatura-cerchi-in-lega",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/servizi/tornitura-molatura-cerchi",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/servizi/verniciatura-cerchi-in-lega",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/servizi/diamantatura-cerchi-in-lega",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/contatti",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/privacy-policy",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "yearly",
    priority: "0.3",
  },
  {
    path: "/cookie-policy",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "yearly",
    priority: "0.3",
  },
];

/**
 * Generate XML sitemap content
 */
function generateSitemapXML() {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = "</urlset>";

  const urls = PAGES.map((page) => {
    // Remove leading slash from path to avoid double slashes with base URL
    const cleanPath = page.path.startsWith("/")
      ? page.path.slice(1)
      : page.path;
    const fullUrl = cleanPath
      ? `${SITE_CONFIG.SITE_URL}${cleanPath}`
      : SITE_CONFIG.SITE_URL;
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
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
