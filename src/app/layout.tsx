// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

/**
 * ✅ Recomendação:
 * - Defina no .env: NEXT_PUBLIC_SITE_URL e NEXT_PUBLIC_GA_ID
 * - Ex:
 *   NEXT_PUBLIC_SITE_URL=https://www.mottivve.com.br
 *   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 */

const siteName = "Mottivve";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.mottivve.com.br";

const siteDescription =
  "Mottivve: malas, mochilas, bolsas, garrafas, kimonos, equipamentos de luta e roupas. Revendedor oficial Bad Boy. Eleve sua presença com atitude e performance.";

const ogImagePath = "/images/og-mottivve.jpg";
const ogImage = `${siteUrl}${ogImagePath}`;

const gaId = process.env.NEXT_PUBLIC_GA_ID; // ex: G-XXXXXXXXXX

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0C",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteName} | Revendedor Oficial Bad Boy`,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  keywords: [
    "Mottivve",
    "Bad Boy",
    "revendedor oficial Bad Boy",
    "mala",
    "mochila",
    "bolsa",
    "garrafa",
    "kimono",
    "jiu-jitsu",
    "MMA",
    "fightwear",
    "equipamentos de luta",
    "camisetas",
    "blusas",
    "calças",
    "lifestyle",
    "performance",
    "moda masculina",
    "acessórios esportivos",
    "loja online",
  ],

  alternates: { canonical: "/" },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  creator: siteName,
  publisher: siteName,
  category: "ecommerce",

  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} | Revendedor Oficial Bad Boy`,
    description: siteDescription,
    siteName,
    locale: "pt_BR",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteName} - Revendedor Oficial Bad Boy`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Revendedor Oficial Bad Boy`,
    description: siteDescription,
    images: [ogImage],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  manifest: "/site.webmanifest",

  // Previne auto-link de telefone em iOS
  other: { "format-detection": "telephone=no" },

  // (Opcional) Quando você tiver:
  // verification: { google: "TOKEN_SEARCH_CONSOLE" },
};

type JsonLdGraph = {
  "@context": "https://schema.org";
  "@graph": Array<Record<string, unknown>>;
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd: JsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/icon.png`,
        description: siteDescription,
        sameAs: [
          // "https://www.instagram.com/sua_conta",
          // "https://www.tiktok.com/@sua_conta",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "pt-BR",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/buscar?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#homepage`,
        url: siteUrl,
        name: `${siteName} | Revendedor Oficial Bad Boy`,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        inLanguage: "pt-BR",
        description: siteDescription,
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        {/* ✅ JSON-LD */}
        <Script
          id="mottivve-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ✅ Google Analytics (GA4) */}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  anonymize_ip: true,
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        ) : null}
      </head>

      <body className="font-body bg-body text-body antialiased">{children}</body>
    </html>
  );
}
