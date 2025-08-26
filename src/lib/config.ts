import { ENV_CONFIG } from './env';

// Site Configuration
// Uses environment variables when available, falls back to hardcoded values
export const SITE_CONFIG = {
  // Site URL - Update this when changing domains
  SITE_URL: ENV_CONFIG.SITE_URL,
  
  // Site Information
  SITE_NAME: ENV_CONFIG.SITE_NAME,
  SITE_DESCRIPTION: ENV_CONFIG.SITE_DESCRIPTION,
  
  // Contact Information
  PHONE: ENV_CONFIG.PHONE,
  EMAIL: ENV_CONFIG.EMAIL,
  ADDRESS: {
    STREET: ENV_CONFIG.ADDRESS_STREET,
    CITY: ENV_CONFIG.ADDRESS_CITY,
    POSTAL_CODE: ENV_CONFIG.ADDRESS_POSTAL_CODE,
    REGION: ENV_CONFIG.ADDRESS_REGION,
    COUNTRY: ENV_CONFIG.ADDRESS_COUNTRY
  },
  
  // Coordinates
  COORDINATES: {
    LATITUDE: parseFloat(ENV_CONFIG.LATITUDE),
    LONGITUDE: parseFloat(ENV_CONFIG.LONGITUDE)
  },
  
  // Business Hours
  BUSINESS_HOURS: ENV_CONFIG.BUSINESS_HOURS,
  
  // Google Site Verification
  GOOGLE_SITE_VERIFICATION: ENV_CONFIG.GOOGLE_SITE_VERIFICATION,
  
  // Social Media (if any)
  SOCIAL: {
    // Add social media URLs when available
  }
} as const;

// Helper function to get full URL for a path
export const getFullUrl = (path: string = ""): string => {
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // If path is empty, return base URL; otherwise append path
  return cleanPath ? `${SITE_CONFIG.SITE_URL}${cleanPath}` : SITE_CONFIG.SITE_URL;
};

// Helper function to get canonical URL for a page
export const getCanonicalUrl = (path: string = ""): string => {
  return getFullUrl(path);
};

// Helper function to get Open Graph URL for a page
export const getOgUrl = (path: string = ""): string => {
  return getFullUrl(path);
};

// Export environment config for use in other parts of the app
export { ENV_CONFIG }; 