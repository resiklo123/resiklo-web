"use client"
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
// import heroImage from "../images/hero2.jpg";
import heroProducts1 from "../images/Hero_Products2.png";
import shredderCrusher from "../images/Crusher-Machines.png";
import extrInj from "../images/Extru-Inj.png";
import balersPic from "../images/Balers.png";
import servicesMolds from "../images/Molds1.jpg";
import logoROnly from "../images/Resiklo-Logo1.png"

//Shredders Photos
import basicShredder from "../images/Products_Page/Shredders_Part/Basic_Shredder.png"
import basicShredderBoxKit from "../images/Products_Page/Shredders_Part/Shredder_Box.png"
import VHD_200 from "../images/Products_Page/Shredders_Part/VHD_200.png"
import VHD_300 from "../images/Products_Page/Shredders_Part/VHD_300.png"
import VHD_600 from "../images/Products_Page/Shredders_Part/VHD_600.png"
import LD_150 from "../images/Products_Page/Shredders_Part/LD150_Mini.png"
import RPC_300 from "../images/Products_Page/Shredders_Part/RPC_300.png"
import RPC_400 from "../images/Products_Page/Shredders_Part/RPC_400.png"
import RPC_600 from "../images/Products_Page/Shredders_Part/RPC_600.png"

//Extrusion Photos
import RMPI_28 from "../images/Products_Page/Extrusion_Part/RMPI_28.png"
import APIS from "../images/Products_Page/Extrusion_Part/APIS.png"
import RPE_28 from "../images/Products_Page/Extrusion_Part/RPE_28.png"
import RPE_30 from "../images/Products_Page/Extrusion_Part/RPE_30_v2.png"
import RPE_45 from "../images/Products_Page/Extrusion_Part/RPE_45_v2.png"
import RPE_60 from "../images/Products_Page/Extrusion_Part/RPE_60.png"

//Baler Photos
import RHB_5T from "../images/Products_Page/Baler_Part/RHB_5T.png"
import RHB_10T from "../images/Products_Page/Baler_Part/RHB_10T.png"
import RHB_20T from "../images/Products_Page/Baler_Part/RHB_20T_v2_1.png"
import RHB_30T from "../images/Products_Page/Baler_Part/RHB_30T.png"

//Coaster Photos
import Coaster_Mold from "../images/Products_Page/Mold_Part/Coaster_Mold.png"
import Shape_Mold from "../images/Products_Page/Mold_Part/Shape_Mold.png"
import Trophy_Mold from "../images/Products_Page/Mold_Part/Trophy_Mold_1.png"
import Pot_Mold from "../images/Products_Page/Mold_Part/Pot_Mold.png"

import Rectangular_Beams from "../images/Products_Page/Mold_Part/Rectangular_Beams.png"
import Circular_Beams from "../images/Products_Page/Mold_Part/Circular_Beams_1.png"
import Chairs from "../images/Products_Page/Mold_Part/Chairs.png"
import Tables from "../images/Products_Page/Mold_Part/Tables.png"




export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <Hero/>
      <BrowseByCategory />
      <GridMachines />
      <Shredders/>
      <Extrusion/>
      <Baler/>
      <Mold/>
      <ScrollToTop />
    </div>

  );
}

function BrowseByCategory() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-8 sm:px-16 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-gray-900">Browse by Category</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Link href="/plastic-shredder-machines" className="rounded-lg border border-gray-200 bg-gray-50 px-6 py-5 text-center text-lg font-semibold text-gray-900 hover:bg-gray-100 transition">
            Plastic Shredder Machines
          </Link>
          <Link href="/plastic-crusher" className="rounded-lg border border-gray-200 bg-gray-50 px-6 py-5 text-center text-lg font-semibold text-gray-900 hover:bg-gray-100 transition">
            Plastic Crusher Machines
          </Link>
          <Link href="/plastic-extrusion-machines" className="rounded-lg border border-gray-200 bg-gray-50 px-6 py-5 text-center text-lg font-semibold text-gray-900 hover:bg-gray-100 transition">
            Plastic Extrusion Machines
          </Link>
          <Link href="/recycling-machines" className="rounded-lg border border-gray-200 bg-gray-50 px-6 py-5 text-center text-lg font-semibold text-gray-900 hover:bg-gray-100 transition">
            Recycling Machines
          </Link>
          <Link href="/double-axis-shredder" className="rounded-lg border border-gray-200 bg-gray-50 px-6 py-5 text-center text-lg font-semibold text-gray-900 hover:bg-gray-100 transition">
            Double Axis Shredder
          </Link>
        </div>
      </div>
    </section>
  )
}

function Hero(){
  return(
      <section className="relative h-screen flex flex-col items-start justify-center text-white text-left px-20">
                        {/* "relative h-screen flex items-center justify-center text-center text-white px-20" */}
        <Image
          src={heroProducts1}
          alt="Hero Image"
          fill
          className="object-cover brightness-15 scale-[1]"
        />
        <div className="z-10 flex items-center text-[100px] font-bold font-[Franklin Gothic]" >
          <Image
              src={logoROnly}
              alt="Resiklo Logo"
              width={500}
              height={500}
              className="inline-block"
            />
          <span className="ml-10 mt-5 text-[90px]"> Machines</span>
        </div>
        <div className="z-10">
          <p className="text-2xl ml-10">Innovative Solutions for Recycling and Manufacturing</p> 
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white">
            <ChevronDown size={40} />
        </div>

      </section>
  )
}


      
 function GridMachines(){
  return(
      <section id="categories" className="py-20 bg-gray-100">
        <div className="w-full px-8 sm:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">

            {/* Category 1 */}
            <Link href="#shredders" className="block">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <Image
                  src={shredderCrusher}
                  alt="Shredders and Crushers"
                  width={200}
                  height={200}
                  className="object-contain rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold">Shredders & Crushers</h3>
              </div>
            </Link>

            {/* Category 2 */}
            <Link href="#extrusion" className="block">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <Image
                  src={extrInj}
                  alt="Extruders and Injectors"
                  width={300}
                  height={200}
                  className="object-contain rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold">Extruders & Injectors</h3>
              </div>
            </Link>

            {/* Category 3 */}
            <Link href="#baler" className="block">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <Image
                  src={balersPic}
                  alt="Balers"
                  width={300}
                  height={200}
                  className="object-contain rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold">Balers</h3>
              </div>
            </Link>

            {/* Category 4 */}
            <Link href="#mold" className="block">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <Image
                  src={servicesMolds}
                  alt="Services and Molds"
                  width={200}
                  height={200}
                  className="object-contain rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold">Molds</h3>
              </div>
            </Link>

          </div>
        </div>
      </section>
  )
      }



type MachineCardProps = {
  name: string;
  img: StaticImageData;
  w?: number;
  h?: number;
  imgClassName?: string;
  href?: string;
  dimImage?: boolean;
  tags?: string[]; // Example: ["A", "B"]
  tagline?: string;
};

const TAG_MAP: Record<string, { label: string; color: string }> = {
  A: { label: "Best Seller", color: "bg-blue-500 text-white" },
  B: { label: "Industrial", color: "bg-gray-400 text-white" },
  C: { label: "Coming Soon", color: "bg-green-200 text-black" },
  D: { label: "DIYers", color: "bg-blue-100 text-black" },
};
      


function MachineCard({
  name,
  img,
  w = 200,
  h = 200,
  imgClassName = "",
  href = "../under-dev",
  dimImage = false,
  tags = [],
  tagline,
}: MachineCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition flex flex-col justify-between items-center h-full relative">
        
        {/* 🏷️ Tags Row */}
        {tags.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-wrap gap-2 z-10">
            {tags.map((tagKey, index) => {
              const tag = TAG_MAP[tagKey];
              if (!tag) return null;
              return (
                <span
                  key={index}
                  className={`text-xs font-semibold px-2 py-1 rounded ${tag.color}`}
                >
                  {tag.label}
                </span>
              );
            })}
          </div>
        )}

        {/* 🖼️ Image with dim option */}
        <div className="relative w-full flex justify-center">
          <Image
            src={img}
            alt={name}
            width={w}
            height={h}
            className={`object-contain rounded-lg mb-4 ${imgClassName}`}
          />
          {dimImage && (
            <div className="absolute inset-0 bg-white opacity-80 rounded-lg pointer-events-none" />
          )}
        </div>

        {/* 💬 Title */}
        <h4 className="text-lg font-semibold text-center">{name}</h4>
      
        {/* 💬 Tagline */}
        {tagline && (
          <p className="text-sm text-gray-500 text-center mt-1">{tagline}</p>
        )}
      
      </div>
    </Link>
  );
}

function Shredders() {
  return (
    <section id="shredders" className="py-20 bg-gray-100">
      <div className="w-full px-8 sm:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Shredders and Crushers</h2>

        {/* Section 1 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Single Axis Shredders</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
            {/* Example Item */}
            <MachineCard name="RSASh-150" img={basicShredder} 
            href = "./products1/group-shredder/basic-shredder-machine"
            tags={["D"]}
            tagline="Best for HDPE and PP"/>
            <MachineCard name="RSASh Box Kit" img={basicShredderBoxKit} w={140} h={140} imgClassName="mt-10"
            tags={["A", "D"]}
            tagline="Best for HDPE and Small Hard Plastics"/>
            {/* Add more as needed */}
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Double Axis Shredders</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <MachineCard name="VHD-200" img={VHD_200} 
            tags={["B"]}/>
            <MachineCard name="VHD-300" img={VHD_300} imgClassName="mt-5"
             tags={["A", "B"]}
             tagline="Best for Big Bulky Material Inlcuding Sheet Metals"/>
            <MachineCard name="VHD-600 (Coming Soon)" img={VHD_600} imgClassName="mt-10" dimImage={true}
            tags={["B"]}/>
            <MachineCard name="RDAS Box Kit" img={LD_150} 
            tags={["D"]}/>
          
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">High Speed Shredders / Crushers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <MachineCard name="RPC-300" img={RPC_300} imgClassName="mt-10"
            tags={["A", "B"]}
            tagline="Best for Sachets, LDPEs and Small Hard Plastics" />
            <MachineCard name="RPC-400 (Coming Soon)" img={RPC_400} w={170} h={170} imgClassName="mt-5" dimImage={true}/>
            <MachineCard name="RPC-600 (Coming Soon)" img={RPC_600} w={190} h={190} imgClassName="mt-1" dimImage={true} />
          </div>
        </div>
      </div>
      <BackToCategoriesBar />
    </section>
  )
}


function Extrusion() {
  return (
    <section id="extrusion" className="py-20 bg-gray-100">
      <div className="w-full px-8 sm:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Extrusion and Injectors</h2>

        {/* Section 1 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Injector Machines</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
            {/* Example Item */}
            <MachineCard name="Manual Plastic Injection (RMI-28)" img={RMPI_28} imgClassName="mt-5"
            tags={["D"]}
            tagline="Great for Small Mods"/>
            <MachineCard name="Automatic Plastic Injection Series (Coming Soon)" img={APIS} w={190} h={190} imgClassName="mt-0" dimImage={true}/>
            {/* Add more as needed */}
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Extrusion Machines</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <MachineCard name="RPE-28" img={RPE_28} 
            tags={["B"]}/>
            <MachineCard name="RPE-30" img={RPE_30} imgClassName="mt-0" 
            tags={["A","B"]}
            tagline="Great for All Molds and Beam Molds"/>
            <MachineCard name="RPE-45" img={RPE_45} w={250} h={250} imgClassName="mt-15" 
            tags={["B"]} />
            <MachineCard name="RPE-60 (Coming Soon)" img={RPE_60} w={300} h={300} imgClassName="mt-3" dimImage={true}
            tags={["B"]} />
          
          </div>
        </div>

        
      </div>
      <BackToCategoriesBar />
    </section>
  )
}


function Baler() {
  return (
    <section id="baler" className="py-20 bg-gray-100">
      <div className="w-full px-8 sm:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Balers</h2>

        {/* Section 1 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Hydraulic Balers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-stretch">
            {/* Example Item */}
            <MachineCard name="RHB-5Ton" img={RHB_5T} w={170} h={170} imgClassName="mt-5" 
              tags={["B"]}
            />
            <MachineCard name="RHB-10Ton" img={RHB_10T} w={190} h={190} imgClassName="mt-0" 
              tags={["A","B"]}
            />
            <MachineCard name="RHB-20Ton" img={RHB_20T} w={280} h={280} imgClassName="mt-5  " 
              tags={["B"]}
            />
            <MachineCard name="RHB-30Ton (Coming Soon)" img={RHB_30T} w={230} h={230} imgClassName="mt-5" dimImage={true}/>
            {/* Add more as needed */}
          </div>
        </div>

        
      </div>
      <BackToCategoriesBar />
    </section>
  )
}

function Mold() {
  return (
    <section id="mold" className="py-20 bg-gray-100">
      <div className="w-full px-8 sm:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Molds</h2>

        {/* Section 1 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Extrusion Molds</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-stretch">
            {/* Example Item */}
            <MachineCard name="Coaster Molds" img={Coaster_Mold} w={210} h={210} imgClassName="mt-10"
            tags={["A"]} />
            <MachineCard name="Shape Molds" img={Shape_Mold} w={190} h={190} imgClassName="mt-10" />
            <MachineCard name="Trophy Molds" img={Trophy_Mold} w={150} h={150} imgClassName="mt-0  " />
            <MachineCard name="Pot Molds" img={Pot_Mold} w={230} h={230} imgClassName="mt-15"/>
            {/* Add more as needed */}
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Beam Molds</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-stretch">
            {/* Example Item */}
            <MachineCard name="Rectangular Molds" img={Rectangular_Beams} w={220} h={220} imgClassName="mt-15" 
            tags={["A"]} />
            <MachineCard name="Circular Molds" img={Circular_Beams} w={220} h={220} imgClassName="mt-10" />
            <MachineCard name="Chairs" img={Chairs} w={200} h={200} imgClassName="-mt-20  " />
            <MachineCard name="Tables" img={Tables} w={250} h={250} imgClassName="mt-5"/>
            {/* Add more as needed */}
          </div>
        </div>

        

        
      </div>
      <BackToCategoriesBar />
    </section>
  )
}



function ScrollToTop() {
  const handleClick = () => {
    const section = document.getElementById("categories");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        aria-label="Scroll to Categories"
      >
        <ChevronUp size={24} />
      </button>
      <span className="absolute bottom-16 right-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded">
        Back to Categories
      </span>
    </div>
  );
}

function BackToCategoriesBar() {
  const handleClick = () => {
    const section = document.getElementById("categories");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-blue-100 text-black-700 font-semibold text-center py-4 mt-8 mb-16 rounded hover:bg-blue-300 transition-all"
    >
      Back to Categories
    </div>
  );
}