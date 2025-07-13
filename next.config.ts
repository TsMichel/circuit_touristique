import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['fr', 'en'],       // langues disponibles
    defaultLocale: 'fr',         // langue par défaut
    localeDetection: true        // détecte automatiquement la langue du navigateur
  },
};

export default nextConfig;
