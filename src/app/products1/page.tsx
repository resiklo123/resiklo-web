"use client"
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

import Image from "next/image";
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


export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <Hero/>
      <GridMachines />
      <Shredders/>
      <ScrollToTop />
    </div>

  );
}

function Hero(){
  return(
      <section className="relative h-screen flex flex-col items-start justify-center text-white text-left px-20">
                        {/* "relative h-screen flex items-center justify-center text-center text-white px-20" */}
        <Image
          src={heroProducts1}
          alt="Hero Image"
          fill
          className="object-cover brightness-20 scale-[1]"
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
            <Link href="../under-dev" className="block">
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
            <Link href="../under-dev" className="block">
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
            <Link href="../under-dev" className="block">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <Image
                  src={servicesMolds}
                  alt="Services and Molds"
                  width={200}
                  height={200}
                  className="object-contain rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold">Services & Molds</h3>
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
  };

  
  function MachineCard({ name, img, w = 200, h = 200, imgClassName = "", href = "../under-dev", dimImage = false }) {
    return (
      <Link href={href} className="block">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition flex flex-col justify-between items-center h-full relative">
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
          <h4 className="text-lg font-semibold text-center">{name}</h4>
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
            <MachineCard name="RSASh-150" img={basicShredder} />
            <MachineCard name="RSASh Box Kit" img={basicShredderBoxKit} w={140} h={140} imgClassName="mt-10"/>
            {/* Add more as needed */}
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Double Axis Shredders</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <MachineCard name="VHD-200" img={VHD_200} />
            <MachineCard name="VHD-300" img={VHD_300} imgClassName="mt-5" />
            <MachineCard name="VHD-600 (Coming Soon)" img={VHD_600} imgClassName="mt-10" dimImage={true} />
            <MachineCard name="RDAS Box Kit" img={LD_150} />
          
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">High Speed Shredders / Crushers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <MachineCard name="RPC-300" img={RPC_300} imgClassName="mt-10" />
            <MachineCard name="RPC-400 (Coming Soon)" img={RPC_400} w={170} h={170} imgClassName="mt-5" dimImage={true}/>
            <MachineCard name="RPC-600 (Coming Soon)" img={RPC_600} w={190} h={190} imgClassName="mt-1" dimImage={true} />
          </div>
        </div>
      </div>
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