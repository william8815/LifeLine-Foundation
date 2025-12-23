<script setup>
import { RouterView } from "vue-router";
import { useSeoMeta, useHead } from "@unhead/vue";

// 預設 SEO Meta 資訊
useSeoMeta({
  title: "InvesTexas - Texas Investment & Business Setup Services | USMCA Trade Zone",
  description:
    "Establish your business in Texas with InvesTexas. We offer comprehensive services including office spaces, manufacturing facilities, showrooms, and business setup support. Access USMCA benefits, Foreign Trade Zone, and Pan-American Highway logistics.",
  keywords:
    "InvesTexas, Texas investment, business setup Texas, USMCA, Foreign Trade Zone, Texas manufacturing, office space Texas, showroom Texas, Pan-American Highway, Houston business, Mexico manufacturing, international trade",

  // Open Graph
  ogTitle: "InvesTexas - Your Gateway to Texas Business Investment",
  ogDescription:
    "Comprehensive investment and business setup services in Texas. From office spaces to manufacturing facilities, we support your business growth with 38 years of experience.",
  ogImage:
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
  ogType: "website",
  ogSiteName: "InvesTexas",
  ogLocale: "en_US",

  // Twitter Card
  twitterCard: "summary_large_image",
  twitterTitle: "InvesTexas - Texas Investment & Business Setup Services",
  twitterDescription:
    "Establish your business in Texas with comprehensive support. Office spaces, manufacturing facilities, and business setup services.",
  twitterImage:
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",

  // Additional SEO
  robots: "index, follow",
  author: "InvesTexas",
  viewport: "width=device-width, initial-scale=1.0",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "InvesTexas - Sinopac International Group",
        description:
          "Providing comprehensive investment and business setup services in Texas and Mexico with 38 years of international business experience.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-713-783-3122",
          email: "Contact@InvesTexas.com",
          contactType: "customer service",
          areaServed: ["US", "MX"],
          availableLanguage: ["English", "Chinese", "Spanish"],
        },
        founder: {
          "@type": "Person",
          name: "Dr. Frank Lin",
          jobTitle: "Founder & CEO",
        },
        areaServed: [
          {
            "@type": "Place",
            name: "Texas, United States",
          },
          {
            "@type": "Place",
            name: "Mexico",
          },
          {
            "@type": "Place",
            name: "Latin America",
          },
        ],
        knowsAbout: [
          "Business Setup",
          "Investment Services",
          "USMCA Trade",
          "Foreign Trade Zone",
          "Manufacturing",
          "Real Estate",
          "International Trade",
        ],
      }),
    },
  ],
});
</script>

<template>
  <RouterView />
</template>

<style>
/* html, */
body {
  scroll-behavior: smooth;
}
</style>
