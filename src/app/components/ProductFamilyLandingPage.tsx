import Image from "next/image"
import Link from "next/link"
import { getProductHref, products, type ProductFamily } from "@/app/const"
import fallbackLogo from "@/app/images/Resiklo-Logo.png"
import ContactQuickActions from "@/app/components/ContactQuickActions"

export type FaqItem = {
  question: string
  answer: string
}

type ProductFamilyLandingPageProps = {
  family: ProductFamily
  heading: string
  intro: string
  bulletItems: string[]
  faqs: FaqItem[]
}

function getFamilyLabel(family: ProductFamily): string {
  const labels: Record<ProductFamily, string> = {
    shredder: "shredder",
    crusher: "crusher",
    extrusion: "extrusion",
    other: "machine",
  }

  return labels[family]
}

export default function ProductFamilyLandingPage({
  family,
  heading,
  intro,
  bulletItems,
  faqs,
}: ProductFamilyLandingPageProps) {
  const familyProducts = products.filter((product) => product.family === family)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <main className="bg-gray-100 pt-32 pb-20">
      <section className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{heading}</h1>
        <p className="mt-6 max-w-4xl text-lg text-gray-600">{intro}</p>

        <ul className="mt-6 list-disc space-y-2 pl-6 text-gray-700">
          {bulletItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-900">Recommended Machines</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {familyProducts.map((product) => {
              const primaryImage = product.images?.[0] ?? fallbackLogo

              return (
                <Link key={product.slug} href={getProductHref(product)} className="block">
                  <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition flex flex-col justify-between items-center h-full text-center">
                    <div className="flex h-44 w-full items-center justify-center">
                      <Image
                        src={primaryImage}
                        alt={product.name}
                        width={220}
                        height={220}
                        className="h-auto max-h-40 w-auto object-contain"
                      />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">{product.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{product.shortDesc}</p>
                  </article>
                </Link>
              )
            })}

            {familyProducts.length === 0 && (
              <div className="rounded-lg bg-white p-6 text-gray-600 shadow-md">
                Additional {getFamilyLabel(family)} products are being prepared. Contact us for current availability.
              </div>
            )}
          </div>
        </div>

        <div className="mt-10">
          <Link
            href={`/contact-us?machine=${family}`}
            className="inline-flex rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Request a Quote
          </Link>
        </div>

        <div>
          <ContactQuickActions pageName={heading} />
        </div>

        <section className="mt-14">
          <h2 className="text-3xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>
    </main>
  )
}