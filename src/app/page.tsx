import Image from "next/image"
import heroImage from "./images/hero2.jpg"
import shredderMachine from "./images/shredder.png"
import plasticCrusher from "./images/plastic-crusher.png"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

//This is the home function
export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 flex flex-col">
        <Hero />
        <div className="space-y-120 my-120">
          <Mission />
          <Services />
          <Products />
          <KeyMilestones />
        </div>
      </main>
    </div>
  )
}

function Hero() {
  return (
    <div className="border min-h-screen relative flex-1">
      <Image
        src={heroImage}
        alt="Next.js logo"
        priority
        fill
        className="object-cover h-full z-0 "
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center bg-black/40">
        <div className="flex-1 flex flex-col justify-between">
          <div className="text-center flex-1 flex flex-col justify-center tracking-tight font-bold">
            <h1 className="text-8xl text-white">Building Machines to</h1>
            <h1 className="text-8xl text-[#8af562]">Sustain our planet</h1>
          </div>
          <div className="text-white flex justify-center py-10">
            <div className="flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-120">
              <p className="text-2xl">Mission statement</p>
              <ChevronDown size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Mission() {
  return (
    <div className="">
      <div className="max-w-6xl m-auto">
        <h2 className="mb-32 font-bold text-4xl text-center">
          Innovate solutions for recycling and restoring the environment
        </h2>
        <p className="text-xl text-gray-700 text-justify font-medium mb-12">
          Humans are meant to create—it’s both our gift and our responsibility.
          We find joy in building things that help one another. But what if we
          took it a step further? Imagine creating something valuable from what
          others see as waste. We need a better one quote. Kevs and Rey thank you so much.
        </p>
        <p className="text-xl font-medium text-justify text-gray-700">
          Here at <b>Resiklo Machine Shop</b>, that is exactly what we strive
          for. We design and build innovative solutions that help people
          transform waste into valuable, usable products. Our mission goes
          beyond recycling—we aim to spark a global revolution in how we manage
          waste and care for our shared home, the Earth. By empowering
          individuals and businesses with sustainable technology, we take a step
          toward a cleaner, greener future for all.
        </p>
      </div>
    </div>
  )
}

function Services() {
  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-6xl m-auto">
        <h2 className="mb-2 font-bold text-4xl text-center">
          Elevating Success
        </h2>
        <p className="mb-32 text-2xl text-center">
          Unlocking the Power of Our Services
        </p>
        <div className="grid grid-cols-3 gap-48">
          <div className="">
            <Image
              src={heroImage}
              alt="Next.js logo"
              priority
              className="object-cover rounded-full h-56 w-56"
            />
            <h2 className="text-2xl py-8">Design and Engineering Services</h2>
            <p className="text-gray-700">
              We provide expert design and engineering solutions to bring your
              ideas to life. From custom machinery to innovative product
              designs, our team ensures efficiency and sustainability in every
              project.
            </p>
          </div>
          <div className="">
            <Image
              src={heroImage}
              alt="Next.js logo"
              priority
              className="object-cover rounded-full h-56 w-56"
            />
            <h2 className="text-2xl py-8">Shredding Services</h2>
            <p className="text-gray-700">
              Our shredding services are designed to help you efficiently and
              securely process waste materials. Whether it’s plastic, paper, or
              other recyclables, we provide reliable solutions to reduce waste
              and support sustainability.
            </p>
          </div>
          <div className="">
            <Image
              src={heroImage}
              alt="Next.js logo"
              priority
              className="object-cover rounded-full h-56 w-56"
            />
            <h2 className="text-2xl py-8">Extruding Services</h2>
            <p className="text-gray-700">
              Our extruding services turn raw materials into custom shapes and
              profiles with precision and efficiency. We specialize in creating
              high-quality extrusions for a variety of applications, ensuring
              durability and sustainability in every product.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Products() {
  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-6xl m-auto">
        {/* <h2 className="mt-20 mb-12 font-bold text-4xl text-center">
          Signature Products
        </h2> */}
        <div className="grid grid-cols-2 gap-y-56">
          <div className="flex justify-center">
            <Image
              src={shredderMachine}
              alt="Next.js logo"
              priority
              height={500}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl">Shredder Machine</h2>
            <p className="mb-8 text-gray-700">
              Efficiently breaks down materials like plastic, paper, and metal
              into smaller pieces for easy recycling and disposal. Designed for
              durability and performance, it helps reduce waste and supports
              sustainable practices.
            </p>

            <h2 className="mb-8 text-2xl">Sample Materials</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Chicken Bones</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Mussel Shells</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Nylon Bag</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Tree branch</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Leaves</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Plastic toys</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Dry corn cob</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Flower Pot</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={plasticCrusher}
              alt="Next.js logo"
              priority
              height={500}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl">Plastic Crusher</h2>
            <p className="mb-8 text-gray-700">
              Powerful machine designed to break down plastic waste into
              smaller, manageable pieces. It enhances recycling efficiency by
              reducing volume, making plastic easier to process and repurpose
              for sustainable use.
            </p>

            <h2 className="mb-8 text-2xl">Sample Materials</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Coconut husk</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>PET bottles</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Abaca strands</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Surgical mask</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Wheel tires</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>LDPE bags</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Leather baseball gloves</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={heroImage}
                  alt="Next.js logo"
                  priority
                  className="object-cover rounded-full w-20 h-20"
                />
                <p>Electric wire</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-20">
          <Link href="/products" className="text-xl">
            View all products
          </Link>
        </div>
      </div>
    </div>
  )
}

function KeyMilestones() {
  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-6xl m-auto">
        <h2 className="mb-32 font-bold text-4xl text-center">Our Journey</h2>
        <p className="mb-32 text-xl text-center text-gray-700">
          From humble beginnings to becoming a leader in sustainable innovation,
          our journey at Resiklo Machine Shop has been driven by a passion for
          creating solutions that make a difference. Every step we’ve taken has
          been focused on transforming waste into valuable products, empowering
          communities, and contributing to a cleaner, greener future. Join us as
          we continue to push the boundaries of what’s possible and build a
          better world together.
        </p>
        <div className="grid grid-cols-2 mb-40">
          <div>
            <Image
              src={heroImage}
              alt="Next.js logo"
              priority
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl mb-8">
              First client -{" "}
              <a
                href="https://www.grainpro.com/"
                target="_blank"
                className="text-green-500 hover:text-green-700"
              >
                GrainPro (2021)
              </a>
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <Image
              src={heroImage}
              alt="Next.js logo"
              priority
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl mb-8">Eastwest Seed Company (2022)</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
