import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG, getFullUrl, getCanonicalUrl, getOgUrl } from '../../lib/config';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

const SEOHead = ({ 
  title, 
  description, 
  canonical, 
  ogImage = "/assets/Logo.webp",
  structuredData,
  breadcrumbs 
}: SEOHeadProps) => {
  const fullCanonical = getCanonicalUrl(canonical);
  const fullOgImage = ogImage.startsWith('http') ? ogImage : getFullUrl(ogImage);
  const fullOgUrl = getOgUrl(canonical);

  // Default LocalBusiness structured data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": SITE_CONFIG.SITE_NAME,
    "description": SITE_CONFIG.SITE_DESCRIPTION,
    "url": SITE_CONFIG.SITE_URL,
    "telephone": SITE_CONFIG.PHONE,
    "email": SITE_CONFIG.EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.ADDRESS.STREET,
      "addressLocality": SITE_CONFIG.ADDRESS.CITY,
      "postalCode": SITE_CONFIG.ADDRESS.POSTAL_CODE,
      "addressRegion": SITE_CONFIG.ADDRESS.REGION,
      "addressCountry": SITE_CONFIG.ADDRESS.COUNTRY
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE_CONFIG.COORDINATES.LATITUDE,
      "longitude": SITE_CONFIG.COORDINATES.LONGITUDE
    },
    "openingHours": SITE_CONFIG.BUSINESS_HOURS,
    "priceRange": "€€",
    "areaServed": ["Moncalieri", "Torino", "Piemonte"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Riparazione Cerchi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Saldatura Cerchi in Lega"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tornitura e Molatura Cerchi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Verniciatura Cerchi in Lega"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diamantatura Cerchi in Lega"
          }
        }
      ]
    }
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": getFullUrl(item.url)
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_CONFIG.SITE_NAME} - Riparazioni Cerchi in Lega Moncalieri`} />
      <meta property="og:site_name" content={SITE_CONFIG.SITE_NAME} />
      <meta property="og:locale" content="it_IT" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={`${SITE_CONFIG.SITE_NAME} - Riparazioni Cerchi in Lega Moncalieri`} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={SITE_CONFIG.SITE_NAME} />
      
      {/* Local SEO Meta Tags */}
      <meta name="geo.region" content="IT-TO" />
      <meta name="geo.placename" content="Moncalieri" />
      <meta name="geo.position" content={`${SITE_CONFIG.COORDINATES.LATITUDE};${SITE_CONFIG.COORDINATES.LONGITUDE}`} />
      <meta name="ICBM" content={`${SITE_CONFIG.COORDINATES.LATITUDE},${SITE_CONFIG.COORDINATES.LONGITUDE}`} />
      
      {/* Google-specific Meta Tags */}
      <meta name="google-site-verification" content={SITE_CONFIG.GOOGLE_SITE_VERIFICATION} />
      <meta name="DC.title" content={`Riparazione Cerchi in Lega Moncalieri - ${SITE_CONFIG.SITE_NAME}`} />
      <meta name="DC.description" content="Specialisti riparazione cerchi in lega a Moncalieri e Torino. Saldatura, tornitura, verniciatura e diamantatura cerchi professionali." />
      <meta name="DC.subject" content="Riparazione Cerchi in Lega, Moncalieri, Torino" />
      <meta name="DC.creator" content={SITE_CONFIG.SITE_NAME} />
      <meta name="DC.publisher" content={SITE_CONFIG.SITE_NAME} />
      <meta name="DC.coverage" content="Moncalieri, Torino, Piemonte, Italia" />
      <meta name="DC.language" content="it" />
      
      {/* Business-specific Meta Tags */}
      <meta name="business:contact_data:street_address" content={SITE_CONFIG.ADDRESS.STREET} />
      <meta name="business:contact_data:locality" content={SITE_CONFIG.ADDRESS.CITY} />
      <meta name="business:contact_data:postal_code" content={SITE_CONFIG.ADDRESS.POSTAL_CODE} />
      <meta name="business:contact_data:country_name" content="Italia" />
      <meta name="business:contact_data:phone_number" content={SITE_CONFIG.PHONE} />
      <meta name="business:contact_data:email" content={SITE_CONFIG.EMAIL} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>
      
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {breadcrumbStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead; 