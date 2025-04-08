import Image from "next/image"
import heroImage from "./images/hero2.jpg"
import jimenez from "./images/Jimenez.jpg"
import vizconde from "./images/Vizconde.jpeg"
import junio from "./images/Junio.jpg"
// import shredderMachine from "./images/shredder.png"
// import plasticCrusher from "./images/plastic-crusher.png"
import logoFull from "./images/Resiklo-Logo3.png"
import extrusionComb from "./images/Extrusion1.png"
import shredderCrusher from "./images/Crusher-Machines.png"
import extrInj from "./images/Extru-Inj.png"
import balersPic from "./images/Balers.png"


import { ChevronDown } from "lucide-react"
import Link from "next/link"

//This is the home function
export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 flex flex-col">
        <Hero />
        <div className="space-y-20 my-12">
          <Mission />
          <Team />
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
      <div className="absolute inset-0 bg-white/25 z-10" />
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center bg-black/40">
        <div className="flex-1 flex flex-col justify-between">
          <div className="text-center flex-1 flex flex-col justify-center tracking-tight font-bold mt-20">
          <Image
                src={logoFull}
                alt="Resiklo Logo"
                width={1000}
                height={500}
                className="mr-0 mu-0"
              />
            <h1
              className="text-white ml-20 text-[23px] font-normal font-[Franklin Gothic] tracking-widest mt-[-0px]"
              style={{ fontFamily: '"Franklin Gothic", sans-serif' }}
            >
              <span className="mx-7">Innovative.</span>
              <span className="mx-7">Impactful.</span>
              <span className="mx-7">Sustainable.</span>
            </h1>
          </div>
          <div className="text-white flex justify-center py-10">
            <div className="flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-120">
              <p className="text-2xl">Who We Are</p>
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
        <h2 className="mb-10 font-bold text-4xl text-center">
        Designing Quality. Building Community.
        </h2>
        <p className="text-[18px] text-gray-700 text-justify font-medium mb-6">
        <b>Resiklo Machine Shop</b> was founded by passionate engineers with a deep commitment to the environment and a shared love for manufacturing. Our journey began with a clear purpose: <b>to build high-quality, affordable, and locally made machines</b> that empower communities to recycle effectively and sustainably.
        </p>
        <p className="text-[18px]  font-medium text-justify text-gray-700 mb-6">
        We saw how access to recycling technology was limited—either <b>too expensive, too complex, or not designed for local needs.</b> So we set out to change that. By combining engineering expertise, hands-on fabrication, and a vision for environmental impact, we created machines that are reliable, scalable, and easy to use—machines that transform waste into opportunity.
        </p>
        <p className="text-[18px]  font-medium text-justify text-gray-700 mb-6">
        Our team combines years of experience in mechanical design 
        and local fabrication to produce machines that are <b>reliable, efficient, and proudly made in the Philippines</b>. 
        Whether it’s transforming plastic waste into beams, sheets, or molded products, our machines are designed to make a real impact—economically, environmentally, and socially.
        </p>
        <p className="text-[18px] font-medium text-justify text-gray-700">
        We’re not just building machines. We’re building a movement—one that democratizes access to technology, supports sustainability, and creates opportunities for communities across the country.
        </p>
      </div>
    </div>
  )
}

function Team() {
  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-6xl m-auto">
        <h2 className="mb-2 font-bold text-4xl text-center">
          Team Leaders
        </h2>
        <p className="mb-10 text-[22px] text-center">
          Leading the Change
        </p>
        <div className="grid grid-cols-3 gap-48">
          <div className="">
            <Image
              src={jimenez}
              alt="Next.js logo"
              priority
              className="object-cover rounded-full h-56 w-56"
            />
            <h2 className="text-2xl py-4">Engr. Koshneir Jimenez</h2>
            <p className="text-gray-700">
            Lead Engineer focused on designing efficient, user-friendly recycling machines for local communities.
            </p>
          </div>
          <div className="">
            <Image
              src={vizconde}
              alt="Next.js logo"
              priority
              className="object-cover rounded-full h-56 w-56"
            />
            <h2 className="text-2xl py-4">Engr. Michael Vizconde</h2>
            <p className="text-gray-700">
            Co-founder and systems innovator, leading automation and fabrication for affordable recycling solutions.
            </p>
          </div>
          <div className="">
            <Image
              src={junio}
              alt="Next.js logo"
              priority
              className="object-cover rounded-full h-56 w-56"
            />
            <h2 className="text-2xl py-4">Engr. Jessica Junio</h2>
            <p className="text-gray-700">
            Operations and community lead, connecting Resiklo’s technology with the people and places that need it most.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Services() {
  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-6xl m-auto">
        <h2 className="mb-2 font-bold text-4xl text-center">
          What We Offer
        </h2>
        <p className="mb-12 text-2xl text-center">
          Helping Build Sustainability
        </p>
        <div className="grid grid-cols-3 gap-48">
          <div className="">
            <Image
              src={extrusionComb}
              alt="Next.js logo"
              priority
              className="object-cover rounded-full h-80 w-56"
            />
            <h2 className="text-2xl py-0">Machines</h2>
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
            <h2 className="text-2xl py-8">Molds & Design</h2>
            <p className="text-gray-700">
              Our extruding services turn raw materials into custom shapes and
              profiles with precision and efficiency. We specialize in creating
              high-quality extrusions for a variety of applications, ensuring
              durability and sustainability in every product.
            </p>
          </div>
          <div className="">
            <Image
              src={heroImage}
              alt="Next.js logo"
              priority
              className="object-cover rounded-full h-56 w-56"
            />
            <h2 className="text-2xl py-8">Services</h2>
            <p className="text-gray-700">
              Our shredding services are designed to help you efficiently and
              securely process waste materials. Whether it’s plastic, paper, or
              other recyclables, we provide reliable solutions to reduce waste
              and support sustainability.
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
        <div className="grid grid-cols-2 gap-y-50">
  {/* This is for the Crusher/Shredder Part. */}   
          <div className="flex justify-center">
            <Image
              src={shredderCrusher}
              alt="Next.js logo"
              priority
              height={600}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl">Shredders & Crushers</h2>
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
  {/* This is end for the Crusher/Shredder Part. */} 
  {/* This is for the Extrusion Part. */}          
          <div className="flex justify-center">
            <Image
              src={extrInj}
              alt="Next.js logo"
              priority
              height={800}
              className="object-cover mt-[-190px]"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl">Extruders & Injectors</h2>
            <p className="mb-8 text-gray-700">
              Powerful machine designed to break down plastic waste into
              smaller, manageable pieces. It enhances recycling efficiency by
              reducing volume, making plastic easier to process and repurpose
              for sustainable use.
            </p>

            <h2 className="mb-8 text-2xl">Sample Molds & Products</h2>
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
  {/* This is the End for the Extrusion Part. */}          
  {/* This is for the Baler Section. */}
          <div className="flex justify-center">
            <Image
              src={balersPic}
              alt="Next.js logo"
              priority
              height={500}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl">Balers</h2>
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
  {/* This is the end for the Baler Section. */}
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
