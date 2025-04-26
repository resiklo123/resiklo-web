import Image from "next/image";
import heroImage from "../images/hero2.jpg";
import shredderCrusher from "../images/Crusher-Machines.png";
import extrInj from "../images/Extru-Inj.png";
import balersPic from "../images/Balers.png";
import servicesMolds from "../images/Molds1.jpg";

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <Image
          src={heroImage}
          alt="Hero Image"
          fill
          className="object-cover brightness-50"
        />
        <div className="z-10">
          <h1 className="text-6xl font-bold mb-4">Our Machines!</h1>
          <p className="text-2xl">Innovative Solutions for Recycling and Manufacturing</p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Major Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Category 1 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <Image
                src={shredderCrusher}
                alt="Shredders and Crushers"
                width={300}
                height={200}
                className="object-contain rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold">Shredders & Crushers</h3>
            </div>

            {/* Category 2 */}
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

            {/* Category 3 */}
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

            {/* Category 4 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <Image
                src={servicesMolds}
                alt="Services and Molds"
                width={300}
                height={200}
                className="object-contain rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold">Services & Molds</h3>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
