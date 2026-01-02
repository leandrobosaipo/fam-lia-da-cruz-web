import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { MessagesSection } from "@/components/sections/MessagesSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { SEOHead } from "@/components/SEO/SEOHead";
import { siteConfig } from "@/lib/site-config";

const Index = () => {
  // Schema.org Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.nomeCompleto,
    "alternateName": siteConfig.nome,
    "url": siteConfig.url.base,
    "logo": `${siteConfig.url.base}${siteConfig.media.logoUrl}`,
    "description": siteConfig.slogan,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.endereco.rua,
      "addressLocality": siteConfig.endereco.cidade,
      "addressRegion": siteConfig.endereco.uf,
      "postalCode": siteConfig.endereco.cep,
      "addressCountry": "BR",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contato.whatsapp,
      "contactType": "customer service",
      "email": siteConfig.contato.email,
    },
    "sameAs": [
      siteConfig.social.instagram,
      siteConfig.social.youtube,
      siteConfig.social.linktree,
    ],
    "foundingDate": `${siteConfig.fundacao.ano}-01-19`,
  };

  // Schema.org LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "PlaceOfWorship",
    "@id": `${siteConfig.url.base}#organization`,
    "name": siteConfig.nomeCompleto,
    "description": siteConfig.slogan,
    "url": siteConfig.url.base,
    "image": `${siteConfig.url.base}${siteConfig.media.logoUrl}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.endereco.rua,
      "addressLocality": siteConfig.endereco.cidade,
      "addressRegion": siteConfig.endereco.uf,
      "postalCode": siteConfig.endereco.cep,
      "addressCountry": "BR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      // Coordenadas podem ser adicionadas quando disponíveis
      // "latitude": "",
      // "longitude": "",
    },
    "telephone": siteConfig.contato.whatsapp,
    "email": siteConfig.contato.email,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "18:00",
        "closes": "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "19:30",
        "closes": "21:30",
      },
    ],
  };

  // Schema.org Event - Culto da Família (Domingo)
  const eventoDomingoSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Culto da Família",
    "description": "Culto de celebração e adoração da Igreja Família da Cruz. Uma oportunidade para toda a família adorar a Deus juntos.",
    "startDate": "2026-01-05T18:00:00-04:00", // Próximo domingo (ajustar conforme necessário)
    "endDate": "2026-01-05T20:00:00-04:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": siteConfig.nomeCompleto,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.endereco.rua,
        "addressLocality": siteConfig.endereco.cidade,
        "addressRegion": siteConfig.endereco.uf,
        "postalCode": siteConfig.endereco.cep,
        "addressCountry": "BR",
      },
    },
    "organizer": {
      "@type": "Organization",
      "name": siteConfig.nomeCompleto,
      "url": siteConfig.url.base,
    },
    "recurringEvent": "R1/W", // Recorre toda semana
  };

  // Schema.org Event - Culto da Conquista (Quinta)
  const eventoQuintaSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Culto da Conquista",
    "description": "Culto de oração e palavra da Igreja Família da Cruz. Momento de busca e edificação na Palavra de Deus.",
    "startDate": "2026-01-09T19:30:00-04:00", // Próxima quinta (ajustar conforme necessário)
    "endDate": "2026-01-09T21:30:00-04:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": siteConfig.nomeCompleto,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.endereco.rua,
        "addressLocality": siteConfig.endereco.cidade,
        "addressRegion": siteConfig.endereco.uf,
        "postalCode": siteConfig.endereco.cep,
        "addressCountry": "BR",
      },
    },
    "organizer": {
      "@type": "Organization",
      "name": siteConfig.nomeCompleto,
      "url": siteConfig.url.base,
    },
    "recurringEvent": "R1/W", // Recorre toda semana
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={siteConfig.seo.home.title}
        description={siteConfig.seo.home.description}
        keywords={siteConfig.seo.home.keywords}
        canonical={siteConfig.url.home}
      />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventoDomingoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventoQuintaSchema) }}
      />
      
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <MessagesSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
