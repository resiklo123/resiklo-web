import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { Nav } from "./nav"
import { Footer } from "./footer"

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Resiklo",
  description: "Resiklo Machine Shop",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
