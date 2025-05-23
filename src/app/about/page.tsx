import Image from "next/image"
// import heroImage from "../images/hero2.jpg"
// import logoFull from "../images/Resiklo-Logo3.png"
import logoROnly from "./images/Resiklo-Logo1.png"
import heroImageAbout from "./images/About/Team_Picture_2.png"


import { ChevronDown } from "lucide-react"
// import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <main className="flex-1 flex flex-col">
        <Hero />
        <div className="space-y-20 my-12">
          <About />
        </div>
      </main>
    </div>
  )
}


function About() {
  return (
    <div className="min-h-[40svh] mt-16 flex justify-center items-center">
      <div className="max-w-5xl space-y-32">
        <div>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            About <span className="text-blue-800">Us</span>
          </h2>
          <div>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              We began as college buddies—two mechanical engineers and one civil engineer—united by a shared love for building and a deep concern for the environment. Today, we've grown into a team of engineers, fabricators, and designers committed to creating high-quality recycling machines that serve both communities and the planet.
            </p>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              We build our machines with utmost commitment to quality and
              topnotch performance in the service of the community.
            </p>
          </div>
        </div>

        <div>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our{" "}
            <span className="text-blue-800">Vision and Mission</span>
          </h2>
          <div>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              A world where every recyclable material is repurposed, ensuring
              nothing goes to waste. Our vision is to achieve{" "}
              <b>Total Net Zero Waste</b>, where sustainability is not just a
              goal but a way of life, creating a cleaner and greener future for
              generations to come.
            </p>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              We design and build high-quality, cost-effective, and affordable
              machines tailored for all types of recycling needs. Our goal is to
              provide durable and efficient solutions that make recycling
              easier, more accessible, and more sustainable for businesses and
              communities alike.
            </p>
          </div>
        </div>
      </div>
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
              <span className="mr-4">About</span>
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
            <ChevronDown size={40}  />
          </div>
        </div>
      </div>
    </div>
  )
}