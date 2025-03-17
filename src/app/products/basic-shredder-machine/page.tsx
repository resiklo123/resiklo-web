import { products } from "@/app/const"
import Image from "next/image"

export default function Page() {
  const product = products.find((p) => p.slug === "basic-shredder-machine") as {
    name: string
    src: string
    slug: string
  }
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold">{product?.name}</h1>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-gray-900">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Model</dt>
              <dd className="mt-2 text-sm text-gray-500">
                Precious Plastic Shredder Basic
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Material</dt>
              <dd className="mt-2 text-sm text-gray-500">Mild Steel and GI</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Blades</dt>
              <dd className="mt-2 text-sm text-gray-500">Mild Steel</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Hexagonal Shaft</dt>
              <dd className="mt-2 text-sm text-gray-500">Cold Rolled Steel</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Axle Type</dt>
              <dd className="mt-2 text-sm text-gray-500">Single axle</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Power Input</dt>
              <dd className="mt-2 text-sm text-gray-500">
                1.5 kW – 35 rpm output
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Output Shaft</dt>
              <dd className="mt-2 text-sm text-gray-500">25mm</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Sieve Size</dt>
              <dd className="mt-2 text-sm text-gray-500">4.7 mm</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Dimension</dt>
              <dd className="mt-2 text-sm text-gray-500">49 x 35 x 113 cm</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Weight</dt>
              <dd className="mt-2 text-sm text-gray-500">55 kg</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Capacity</dt>
              <dd className="mt-2 text-sm text-gray-500">
                5 - 10 kg / hr (Depending on Plastic Material Characteristics)
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Features</dt>
              <dd className="mt-2 text-sm text-gray-500">
                <ul>
                  <li>1.5 kW Motor</li>
                  <li>Jam Detection</li>
                  <li>Forward/Reverse Direction</li>
                  <li>Inverter Control</li>
                  <li>Emergency Stop</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <Image
            src={product.src}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}
