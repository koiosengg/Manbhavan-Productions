import { useEffect } from "react";

/**
 * JsonLdScript — injects JSON-LD schema into <head> (not the render tree).
 * Uses a serialized string in the dep array to prevent redundant mounts
 * when parent components pass inline object literals.
 */
export const JsonLdScript = ({ data }) => {
  const json = JSON.stringify(data);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = json;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [json]);

  return null;
};

// ─── Schema constants ───────────────────────────────────────────────────────
const BASE_URL = "https://www.manbhavanproductions.com";
const COMPANY_NAME = "Manbhavan Productions";
const LOGO_URL = `${BASE_URL}/Navbar%20Logo.png`;

// ─── Organization Schema ────────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": COMPANY_NAME,
  "url": BASE_URL,
  "logo": LOGO_URL,
  "description": "Manbhavan Productions — creative content, brand films, and digital campaigns.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "info@manbhavanproductions.com"
  },
  "sameAs": [
    "https://www.instagram.com/manbhavanproductions"
  ]
};

// ─── WebSite Schema ──────────────────────────────────────────────────────────
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": COMPANY_NAME,
  "url": BASE_URL,
  "publisher": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "logo": { "@type": "ImageObject", "url": LOGO_URL }
  }
};

// ─── Service Schema ──────────────────────────────────────────────────────────
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Brand Film & Content Production",
  "provider": { "@type": "Organization", "name": COMPANY_NAME },
  "description": "Brand films, digital campaigns, and creative content for leading brands.",
  "url": BASE_URL,
  "areaServed": { "@type": "Country", "name": "India" },
  "serviceType": "Video Production"
};

// ─── Breadcrumb helper ───────────────────────────────────────────────────────
export const getBreadcrumbSchema = (pageName, pagePath) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
    { "@type": "ListItem", "position": 2, "name": pageName, "item": `${BASE_URL}${pagePath}` }
  ]
});

// ─── Page-level bundles ──────────────────────────────────────────────────────
export const HomePageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={webSiteSchema} />
    <JsonLdScript data={serviceSchema} />
  </>
);
