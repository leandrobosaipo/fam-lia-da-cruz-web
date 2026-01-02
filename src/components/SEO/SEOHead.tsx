import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/lib/site-config";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export function SEOHead({
  title = siteConfig.seo.home.title,
  description = siteConfig.seo.home.description,
  keywords = siteConfig.seo.home.keywords,
  canonical,
  ogImage = siteConfig.og.image,
  ogType = siteConfig.og.type,
  noindex = false,
}: SEOHeadProps) {
  const canonicalUrl = canonical || siteConfig.url.base;
  const fullOgImage = ogImage.startsWith("http") 
    ? ogImage 
    : `${siteConfig.url.base}${ogImage}`;

  return (
    <Helmet>
      {/* Meta básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteConfig.nomeCompleto} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={siteConfig.og.locale} />
      <meta property="og:site_name" content={siteConfig.nomeCompleto} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.social.instagramHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Schema.org será adicionado via JSON-LD nos componentes */}
    </Helmet>
  );
}

