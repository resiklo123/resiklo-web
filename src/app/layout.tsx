import type { Metadata } from "next"
import { Roboto } from "next/font/google"
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
        <Nav />
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
