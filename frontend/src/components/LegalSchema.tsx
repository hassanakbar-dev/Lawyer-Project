export default function LegalSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Apex Legal & Associates",
    description:
      "Premier law firm providing expert legal services in Corporate Law, Criminal Defense, Family Law, Civil Litigation, and Legal Advisory.",
    url: "https://example-lawfirm.com",
    telephone: "+1-800-555-0199",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "100 Constitution Avenue, Suite 400",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.7128",
      longitude: "-74.0060",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "Nationwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate & Business Law",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Criminal Defense Litigation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Family Law & Divorce",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Civil Litigation & Dispute Resolution",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
