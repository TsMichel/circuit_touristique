'use client';

import { useEffect } from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialiser Feather Icons
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/feather-icons';
    script.async = true;
    script.onload = () => {
      if (window.feather) {
        window.feather.replace();
      }
    };
    document.body.appendChild(script);

    // Nettoyage
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="fr" className="light">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Circuit Touristique</title>
      </head>
      <body className="font-jakarta">{children}</body>
    </html>
  );
}

