// Environment Configuration
// This file allows overriding configuration values via environment variables
// For production, these values are hardcoded in config.ts for better performance

export const ENV_CONFIG = {
  // Site URL - can be overridden by VITE_SITE_URL
  SITE_URL: import.meta.env.VITE_SITE_URL || "https://cerchiinlegatorino.com/",
  
  // Site Information
  SITE_NAME: import.meta.env.VITE_SITE_NAME || "Officina Schettino",
  SITE_DESCRIPTION: import.meta.env.VITE_SITE_DESCRIPTION || "Riparazione cerchi in lega a Moncalieri e Torino. Saldatura, tornitura, verniciatura e diamantatura cerchi professionali.",
  
  // Contact Information
  PHONE: import.meta.env.VITE_PHONE || "+393406914883",
  EMAIL: import.meta.env.VITE_EMAIL || "schettino.f97@gmail.com",
  
  // Address
  ADDRESS_STREET: import.meta.env.VITE_ADDRESS_STREET || "Via Torino 2",
  ADDRESS_CITY: import.meta.env.VITE_ADDRESS_CITY || "Moncalieri",
  ADDRESS_POSTAL_CODE: import.meta.env.VITE_ADDRESS_POSTAL_CODE || "10024",
  ADDRESS_REGION: import.meta.env.VITE_ADDRESS_REGION || "TO",
  ADDRESS_COUNTRY: import.meta.env.VITE_ADDRESS_COUNTRY || "IT",
  
  // Coordinates
  LATITUDE: import.meta.env.VITE_LATITUDE || "44.9998",
  LONGITUDE: import.meta.env.VITE_LONGITUDE || "7.6833",
  
  // Business Hours
  BUSINESS_HOURS: import.meta.env.VITE_BUSINESS_HOURS 
    ? import.meta.env.VITE_BUSINESS_HOURS.split(',') 
    : ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
  
  // Google Site Verification
  GOOGLE_SITE_VERIFICATION: import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || "google2cd420a52d7d0dbe"
} as const;

// Helper function to check if we're in development mode
export const isDevelopment = import.meta.env.DEV;

// Helper function to check if we're in production mode
export const isProduction = import.meta.env.PROD; 