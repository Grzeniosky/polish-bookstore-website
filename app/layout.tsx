import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const SITE_NAME = "Księgarnia Regionalna w Górze Kalwarii"
const SITE_TITLE = "Księgarnia Regionalna w Górze Kalwarii | Podręczniki • Urzecze • Papiernicze"
const SITE_DESC =
  "Księgarnia Regionalna w Górze Kalwarii (Pijarska 38). Podręczniki szkolne, literatura regionalna Urzecza, książki i artykuły papiernicze. Zamówienia: telefon, e-mail lub Facebook."

// Ustaw to na domenę docelową po podpięciu (np. https://ksiegarnia-gk.pl)
// Na etapie testów możesz zostawić vercelową domenę lub tymczasowo pominąć metadataBase.
const SITE_URL = "https://polish-bookstore-website.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,

  // Google i tak ignoruje "keywords" w rankingach, ale niech będzie krótko i lokalnie:
  keywords: [
    "księgarnia Góra Kalwaria",
    "podręczniki szkolne Góra Kalwaria",
    "książki Urzecze",
    "literatura regionalna",
    "artykuły papiernicze",
    "Księgarnia Regionalna",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/og.jpg", // wrzuć plik do public/og.jpg
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/og.jpg"],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BookStore",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: "+48607688410",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pijarska 38",
      addressLocality: "Góra Kalwaria",
      postalCode: "05-530",
      addressCountry: "PL",
    },
    openingHours: ["Mo-Fr 10:00-18:00", "Sa 10:00-13:30"],
    sameAs: ["https://www.facebook.com/KsiegarniaRegionalna"],
  }

  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Local SEO structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}