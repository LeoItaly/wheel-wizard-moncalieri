import { Helmet } from 'react-helmet-async';

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
  const baseUrl = "https://cerchiinlegatorino.com";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  // Default LocalBusiness structured data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Officina Schettino",
    "description": "Riparazione cerchi in lega a Moncalieri e Torino. Saldatura, tornitura, verniciatura e diamantatura cerchi professionali.",
    "url": baseUrl,
    "telephone": "+393406914883",
    "email": "schettino.f97@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Torino 2",
      "addressLocality": "Moncalieri",
      "postalCode": "10024",
      "addressRegion": "TO",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.9998,
      "longitude": 7.6833
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-12:00"
    ],
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
      "item": `${baseUrl}${item.url}`
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
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Officina Schettino - Riparazioni Cerchi in Lega Moncalieri" />
      <meta property="og:site_name" content="Officina Schettino" />
      <meta property="og:locale" content="it_IT" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content="Officina Schettino - Riparazioni Cerchi in Lega Moncalieri" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Officina Schettino" />
      
      {/* Local SEO Meta Tags */}
      <meta name="geo.region" content="IT-TO" />
      <meta name="geo.placename" content="Moncalieri" />
      <meta name="geo.position" content="44.9998;7.6833" />
      <meta name="ICBM" content="44.9998, 7.6833" />
      
      {/* Google-specific Meta Tags */}
      <meta name="google-site-verification" content="google2cd420a52d7d0dbe" />
      <meta name="DC.title" content="Riparazione Cerchi in Lega Moncalieri - Officina Schettino" />
      <meta name="DC.description" content="Specialisti riparazione cerchi in lega a Moncalieri e Torino. Saldatura, tornitura, verniciatura e diamantatura cerchi professionali." />
      <meta name="DC.subject" content="Riparazione Cerchi in Lega, Moncalieri, Torino" />
      <meta name="DC.creator" content="Officina Schettino" />
      <meta name="DC.publisher" content="Officina Schettino" />
      <meta name="DC.coverage" content="Moncalieri, Torino, Piemonte, Italia" />
      <meta name="DC.language" content="it" />
      
      {/* Business-specific Meta Tags */}
      <meta name="business:contact_data:street_address" content="Via Torino 2" />
      <meta name="business:contact_data:locality" content="Moncalieri" />
      <meta name="business:contact_data:postal_code" content="10024" />
      <meta name="business:contact_data:country_name" content="Italia" />
      <meta name="business:contact_data:phone_number" content="+393406914883" />
      <meta name="business:contact_data:email" content="schettino.f97@gmail.com" />
      
      <meta name="keywords" content="cerchi in lega, riparazione cerchi in lega, Moncalieri, Torino, Nichelino, saldatura cerchi, tornitura cerchi, verniciatura cerchi, diamantatura cerchi, officina cerchi in lega, riparazione cerchi Moncalieri, riparazione cerchi Torino, riparazione cerchi Nichelino, fabbro Moncalieri, fabbro Torino, fabbro Nichelino, cerchi in lega Moncalieri, cerchi in lega Torino, cerchi in lega Nichelino, riparazione ruote, officina ruote, riparazione cerchi auto, riparazione cerchi danneggiati, riparazione cerchi graffiati, riparazione cerchi piegati, riparazione cerchi crepati, riparazione cerchi rotti, riparazione cerchi auto Moncalieri, riparazione cerchi auto Torino, riparazione cerchi auto Nichelino, riparazione cerchi in lega Piemonte, cerchi in lega Piemonte, saldatura cerchi Moncalieri, saldatura cerchi Torino, saldatura cerchi Nichelino, tornitura cerchi Moncalieri, tornitura cerchi Torino, tornitura cerchi Nichelino, verniciatura cerchi Moncalieri, verniciatura cerchi Torino, verniciatura cerchi Nichelino, diamantatura cerchi Moncalieri, diamantatura cerchi Torino, diamantatura cerchi Nichelino, riparazione cerchi vicino a me, cerchi in lega vicino a me, riparazione cerchi professionale, riparazione cerchi rapida, riparazione cerchi economica, riparazione cerchi affidabile, riparazione cerchi esperti, riparazione cerchi specializzati, riparazione cerchi auto professionale, riparazione cerchi auto rapida, riparazione cerchi auto economica, riparazione cerchi auto affidabile, riparazione cerchi auto esperti, riparazione cerchi auto specializzati, riparazione cerchi auto vicino a me, riparazione cerchi in lega vicino a me, cerchi in lega riparazione, cerchi in lega saldatura, cerchi in lega tornitura, cerchi in lega verniciatura, cerchi in lega diamantatura, cerchi in lega riparazione Moncalieri, cerchi in lega riparazione Torino, cerchi in lega riparazione Nichelino, cerchi in lega saldatura Moncalieri, cerchi in lega saldatura Torino, cerchi in lega saldatura Nichelino, cerchi in lega tornitura Moncalieri, cerchi in lega tornitura Torino, cerchi in lega tornitura Nichelino, cerchi in lega verniciatura Moncalieri, cerchi in lega verniciatura Torino, cerchi in lega verniciatura Nichelino, cerchi in lega diamantatura Moncalieri, cerchi in lega diamantatura Torino, cerchi in lega diamantatura Nichelino" />
      
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