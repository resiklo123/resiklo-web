import Image from "next/image";
import Link from "next/link";
// import heroImage from "../images/hero2.jpg"
// import logoFull from "../images/Resiklo-Logo3.png"
import logoROnly from "./images/Resiklo-Logo1.png"
import heroImageAbout from "./images/about/Team_Picture_2.png"


import { ChevronDown } from "lucide-react"
// import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <main className="flex-1 flex flex-col">
        <Hero />
        <div className="space-y-20 my-12">
          <Contact />
        </div>
      </main>
    </div>
  )
}


function Contact() {
    return (
        <div className="min-h-screen bg-white px-6 py-20 text-gray-800">
          {/* 1. Headline and Intro */}
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              We'd love to hear from you! Whether you're interested in our machines, partnerships, or general inquiries, feel free to reach out.
            </p>
          </section>
    
          {/* 2. Contact Information */}
          <section className="max-w-6xl pl-110 grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
              <p>Salinas 1, Bacoor, Cavite, Philippines</p>
            </div>
    
            <div>
              <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
              <p>+63 9676091500 / +63 9750113677</p>
            </div>
    
            <div>
              <h2 className="text-xl font-semibold mb-2">✉️ Email</h2>
              <p>resiklo.mfg@gmail.com</p>
            </div>
    
            <div>
              <h2 className="text-xl font-semibold mb-2">🕒 Hours</h2>
              <p>Monday–Friday: 9AM–5PM</p>
            </div>
          </section>
    
          {/* 3. Optional Map */}
          <section className="max-w-4xl mx-auto mb-16">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7727.525043410262!2d120.93059560567228!3d14.440844918927203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d288b330348f%3A0x3e98254dc8a49215!2sSalinas%20I%2C%20Bacoor%2C%20Cavite!5e0!3m2!1sen!2sph!4v1748276997676!5m2!1sen!2sph"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </section>
    
          {/* 4. Social Media */}
          <section className="text-center">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center gap-8 text-2xl">
              <Link href="https://facebook.com/resiklomachines" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                🌐 Facebook
              </Link>
              <Link href="https://www.instagram.com/resiklo.mfg/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                📷 Instagram
              </Link>
              <Link href="mailto:resiklo.mfg@gmail.com" className="hover:text-green-600">
                ✉️ Email
              </Link>
            </div>
          </section>
        </div>
      )
}


function Hero() {
  return (
    <div className="border min-h-screen relative flex-1">
      <Image
        src={heroImageAbout}
        alt="Next.js logo"
        priority
        fill
        className="object-cover h-full z-0 "
      />
      <div className="absolute inset-0 bg-white/25 z-10" />
      <div className="absolute inset-0 z-10 flex flex-col justify-start items-start bg-black/80 px-40 pt30">
        <div className="flex-1 flex flex-col justify-between">
          <div className="text-center flex-1 flex flex-col justify-center tracking-tight font-bold mt-20">
            <div className="flex flex-row items-start justify-start text-white text-[100px] font-normal tracking-tight font-bold font-[Franklin Gothic]">
              <span className="mr-7">Contact</span>
                <Image
                  src={logoROnly}
                  alt="Resiklo Logo"
                  width={500}
                  height={500}
                  className="inline-block"
                />
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white">
            <ChevronDown size={40} />
          </div>
        </div>
      </div>
    </div>
  )
}