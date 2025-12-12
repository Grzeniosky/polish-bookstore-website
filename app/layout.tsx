import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Księgarnia w Górze Kalwarii – Agata Zduńczyk",
  description:
    "Lokalna księgarnia prowadzona przez Agatę Zduńczyk w Górze Kalwarii. Podręczniki szkolne, literatura regionalna z Urzecza, książki na każdą okazję oraz artykuły papiernicze i biurowe.",
  keywords:
    "księgarnia Góra Kalwaria, podręczniki szkolne, literatura Urzecze, artykuły papiernicze, Agata Zduńczyk, lokalna księgarnia, książki regionalne, mała księgarnia, książki dla dzieci, książki dla dorosłych",
  generator: "v0.dev",
  openGraph: {
    title: "Księgarnia w Górze Kalwarii – Agata Zduńczyk",
    description:
      "Lokalna księgarnia prowadzona przez Agatę Zduńczyk w Górze Kalwarii. Podręczniki szkolne, literatura regionalna z Urzecza.",
    type: "website",
    locale: "pl_PL",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
      </head>
      <body>{children}</body>
    </html>
  )
}
