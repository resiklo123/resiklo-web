"use client";
import { products } from "@/app/const";
import { notFound } from "next/navigation";
import ProductCarousel from "@/app/components/ProductCarousel";

export default function ProductDetails({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-24">
        {/* ✅ Carousel Section */}
        <div>
          <ProductCarousel images={product.images} altText={product.name} />
        </div>

        {/* ✅ Details Section */}
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
      </div>
    </div>
  );
}