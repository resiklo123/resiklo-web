import type { Metadata } from "next"
import ProductFamilyLandingPage, {
  type FaqItem,
} from "@/app/components/ProductFamilyLandingPage"

export const metadata: Metadata = {
  title: "Plastic Shredder Machines in the Philippines | Resiklo Machine Shop",
  description:
    "Explore plastic shredder machines in the Philippines for HDPE, PP, and rigid post-consumer plastics used in recycling workflows.",
}

const bulletItems = [
  "Designed for reducing rigid plastics into manageable flakes for downstream processing.",
  "Suitable for recycling facilities, community hubs, schools, and fabrication workshops.",
  "Works well as pre-processing before washing, sorting, extrusion, and pelletizing.",
]

const faqs: FaqItem[] = [
  {
    question: "How much does a plastic shredder machine cost in the Philippines?",
    answer:
      "Pricing depends on motor power, cutting chamber size, and target throughput. We provide quotations based on your material and capacity requirements.",
  },
  {
    question: "What capacity should I choose for my operation?",
    answer:
      "Capacity should match your daily incoming plastic volume and processing schedule. Typical recommendations are based on expected kg/hr and operating hours.",
  },
  {
    question: "What materials can your shredders process?",
    answer:
      "Most units are configured for rigid plastics such as HDPE and PP. Material thickness and contamination levels can affect output and blade wear.",
  },
  {
    question: "How long is lead time for delivery in the Philippines?",
    answer:
      "Lead time varies based on model availability, build queue, and destination. We provide a realistic delivery schedule with each official quote.",
  },
  {
    question: "Do you provide setup guidance and operator training?",
    answer:
      "Yes. We can support commissioning guidance, safe operation orientation, and maintenance best practices for your team.",
  },
]

export default function PlasticShredderMachinesPage() {
  return (
    <ProductFamilyLandingPage
      family="shredder"
      heading="Plastic Shredder Machines in the Philippines"
      intro="Resiklo provides plastic shredder machines in the Philippines for organizations that need reliable size reduction before washing and conversion."
      bulletItems={bulletItems}
      faqs={faqs}
    />
  )
}
