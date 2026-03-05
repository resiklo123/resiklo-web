import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Nav } from "./nav"
import { Footer } from "./footer"
import logo from "./images/Resiklo-Logo.png"

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Resiklo",
  description: "Resiklo Machine Shop",
}

const siteUrl = "https://resiklo.org"
const gaMeasurementId = "G-CB2KZ7L39Y"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Resiklo Machine Shop",
  url: siteUrl,
  logo: new URL(logo.src, siteUrl).toString(),
  sameAs: [
    "https://www.facebook.com/resiklomachines",
    "https://www.youtube.com/channel/UCqI-N5TRrWk3qHShL0Tyv0Q",
    "https://www.instagram.com/resiklo.mfg/",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${roboto.className} antialiased`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}', { anonymize_ip: true });
          `}
        </Script>
        <Nav />
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
