import type { Metadata } from "next"
import ProductFamilyLandingPage, { type FaqItem } from "@/app/components/ProductFamilyLandingPage"
import { products } from "@/app/const"

export const metadata: Metadata = {
  title: "Recycling Machines in the Philippines | Resiklo Machine Shop",
  description:
    "Find recycling machines in the Philippines — shredders, crushers, and extrusion equipment for material recovery and processing.",
}

const bulletItems = [
  "Comprehensive solutions for size reduction, cleaning, and reprocessing of plastic waste.",
  "Suitable for community recycling hubs, small manufacturers, and recovery operations.",
  "Pair shredding with washing and extrusion for consistent recycled feedstock.",
]

const faqs: FaqItem[] = [
  {
    question: "Which machines are essential for a small recycling line?",
    answer:
      "A basic line includes a shredder for size reduction, a crusher for rigid parts, and an extrusion unit to convert regrind into usable product.",
  },
  {
    question: "Can I start small and scale my recycling setup?",
    answer:
      "Yes. Start with a compact shredder and scale with a crusher and extrusion unit as your feedstock and throughput grow.",
  },
  {
    question: "Do you offer combined solutions for washing and extrusion?",
    answer:
      "We can advise on pairing washing systems with shredders and extruders to improve material quality for higher-value products.",
  },
  {
    question: "What materials can be processed in a small recycling line?",
    answer:
      "Commonly HDPE, PP, and other rigid plastics. Films and contaminated streams require different handling.",
  },
  {
    question: "How do I request a quotation for an integrated line?",
    answer:
      "Use our Request a Quote button or contact us directly via the Quick Actions on the page with details about your target throughput and material.",
  },
]

export default function RecyclingMachinesPage() {
  const recommended = products.filter((p) =>
    ["shredder", "crusher", "extrusion"].includes(p.family)
  )

  return (
    <ProductFamilyLandingPage
      family="shredder"
      heading="Recycling Machines in the Philippines"
      intro="Solutions and machines for recycling operations in the Philippines — from shredding to extrusion."
      bulletItems={bulletItems}
      faqs={faqs}
      recommendedProducts={recommended.slice(0, 6)}
    />
  )
}
