import Image from "next/image";
import Link from "next/link";
// import heroImage from "../images/hero2.jpg";
import heroProducts1 from "../images/Hero_Products1.png";
import shredderCrusher from "../images/Crusher-Machines.png";
import extrInj from "../images/Extru-Inj.png";
import balersPic from "../images/Balers.png";
import servicesMolds from "../images/Molds1.jpg";
import logoROnly from "../images/Resiklo-Logo1.png"

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <Hero/>
      <GridMachines />
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
          className="object-cover brightness-35 scale-[1]"
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

      </section>
  )
}


      
 function GridMachines(){
  return(
      <section className="py-20 bg-gray-100">
        <div className="w-full px-8 sm:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">

            {/* Category 1 */}
            <Link href="../under-dev" className="block">
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
