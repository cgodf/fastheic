export default function StructuredData() {
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FastHEIC",
    "url": "https://fastheictojpg.com",
    "description": "Convert HEIC files to JPG instantly in your browser. No uploads, completely private, bulk conversion supported.",
    "applicationCategory": "PhotographyApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript. Works on Chrome, Firefox, Safari, Edge.",
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "FastHEIC"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "HEIC to JPG conversion",
      "Bulk file processing", 
      "Private browser-based conversion",
      "No file uploads required",
      "Fast processing",
      "Cross-platform compatibility"
    ],
    "screenshot": "https://fastheictojpg.com/app-screenshot.jpg"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FastHEIC",
    "url": "https://fastheictojpg.com",
    "description": "Fast and free HEIC to JPG converter tool",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/fastheic"
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FastHEIC - HEIC to JPG Converter",
    "applicationCategory": "PhotographyApplication",
    "operatingSystem": "Web Browser",
    "url": "https://fastheictojpg.com",
    "description": "Convert HEIC files to JPG instantly in your browser. No uploads, completely private, bulk conversion supported.",
    "softwareVersion": "1.0",
    "datePublished": "2024-01-01",
    "author": {
      "@type": "Organization", 
      "name": "FastHEIC"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fastheictojpg.com"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
}