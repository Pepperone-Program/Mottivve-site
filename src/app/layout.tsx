// app/layout.jsx
import Script from "next/script";
import "./globals.css";

/**
 * ✅ Configure no .env:
 * NEXT_PUBLIC_SITE_URL=https://www.mottivve.com.br
 * NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 *
 * (Opcional)
 * NEXT_PUBLIC_BRAND_PHONE=+55XXXXXXXXXXX
 * NEXT_PUBLIC_BRAND_EMAIL=contato@mottivve.com.br
 * NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/mottivve
 * NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/suapagina
 * NEXT_PUBLIC_X_URL=https://x.com/suaconta
 * NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/suaempresa
 * NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@seucanal
 *
 * (Opcional Search Console)
 * NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=TOKEN
 */

const siteName = "Mottivve";
const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://www.mottivve.com.br").replace(
    /\/$/,
    ""
  );

const defaultTitle = "Mottivve | Revendedor Oficial Bad Boy no Brasil";

const siteDescription =
  "Mottivve: malas, mochilas, bolsas, garrafas, kimonos, equipamentos de luta e roupas. Revendedor oficial Bad Boy. Eleve sua presença com atitude e performance.";

const ogImagePath = "/images/og-mottivve.jpg";
const ogImage = `${siteUrl}${ogImagePath}`;

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/mottivve";
const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL;
const xUrl = process.env.NEXT_PUBLIC_X_URL;
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL;

const brandPhone = process.env.NEXT_PUBLIC_BRAND_PHONE;
const brandEmail = process.env.NEXT_PUBLIC_BRAND_EMAIL;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0C",
  colorScheme: "light",
};

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  keywords: [
    "Mottivve",
    "Bad Boy",
    "revendedor oficial Bad Boy",
    "Bad Boy Brasil",
    "malas",
    "mochilas",
    "bolsas",
    "garrafas",
    "kimonos",
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

  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      pt: "/", 
    },
  },

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
    title: defaultTitle,
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
    title: defaultTitle,
    description: siteDescription,
    images: [ogImage],
    // (Opcional) se tiver @:
    // site: "@mottivve",
    // creator: "@mottivve",
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  manifest: "/site.webmanifest",

  other: {
    "format-detection": "telephone=no",
  },

  // ✅ Search Console (quando tiver)
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sameAs = [instagramUrl, facebookUrl, xUrl, linkedinUrl, youtubeUrl].filter(
    Boolean
  );


  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/icon.png`,
        description: siteDescription,
        sameAs,
        ...(brandPhone ? { telephone: brandPhone } : {}),
        ...(brandEmail ? { email: brandEmail } : {}),
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
        name: defaultTitle,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        inLanguage: "pt-BR",
        description: siteDescription,
      },

      // ✅ (Opcional) Store (sem inventar endereço)
      // Se você colocar telefone/email já melhora auditoria local.
      {
        "@type": "Store",
        "@id": `${siteUrl}/#store`,
        name: siteName,
        url: siteUrl,
        image: ogImage,
        parentOrganization: { "@id": `${siteUrl}/#organization` },
        ...(brandPhone ? { telephone: brandPhone } : {}),
        ...(brandEmail ? { email: brandEmail } : {}),
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

        {/* ✅ Ajuda auditorias a encontrarem sitemap/robots
            (o "certo" é criar app/sitemap.ts e app/robots.ts) */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index,follow,max-image-preview:large" />

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

                // Evita duplicar pageview com App Router
                gtag('config', '${gaId}', {
                  anonymize_ip: true,
                  send_page_view: false
                });

                // Pageview inicial
                gtag('event', 'page_view', {
                  page_path: window.location.pathname,
                  page_location: window.location.href,
                  page_title: document.title
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
