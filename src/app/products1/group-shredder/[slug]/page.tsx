import { products } from "@/app/const"
import Image from "next/image"
import { notFound } from "next/navigation"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug )
  if (!product) return notFound()

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="mt-4 text-gray-500">{product.shortDesc}</p>

          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 text-sm text-gray-600">
            {product.specs.map(({ label, value }) => (
              <div key={label} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{label}</dt>
                <dd className="mt-2">
                  {Array.isArray(value) ? (
                    <ul className="list-disc list-inside space-y-1">
                      {value.map((v, i) => (
                        <li key={i}>{v}</li>
                      ))}
                    </ul>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <Image
            src={product.src}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}