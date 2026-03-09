import type { Metadata } from "next"
import ProductFamilyLandingPage, {
  type FaqItem,
} from "@/app/components/ProductFamilyLandingPage"

export const metadata: Metadata = {
  title: "Plastic Crusher Machines in the Philippines | Resiklo Machine Shop",
  description:
    "Find plastic crusher machines in the Philippines for rigid scrap, bottle rejects, and regrind preparation in recycling lines.",
}

const bulletItems = [
  "Built for size reduction of rigid rejects into consistent flakes.",
  "Supports in-house regrind workflows for manufacturing and recovery operations.",
  "Pairs well with washing and extrusion lines for material recovery.",
]

const faqs: FaqItem[] = [
  {
    question: "What is the typical price of a plastic crusher in the Philippines?",
    answer:
      "Cost depends on cutting chamber size, motor rating, and output capacity. We issue model-based quotations after confirming your use case.",
  },
  {
    question: "What crusher capacity should I target?",
    answer:
      "Capacity selection is based on your daily feed volume, material hardness, and production schedule. We can recommend suitable models per kg/hr target.",
  },
  {
    question: "Which materials can be processed in a crusher?",
    answer:
      "Typical feed includes rigid HDPE and PP scraps, bottle parts, and production offcuts. Very thin films may require a different machine setup.",
  },
  {
    question: "How long does it take to deliver within the Philippines?",
    answer:
      "Delivery timing varies with stock status, fabrication queue, and destination area. Expected lead times are included in formal quotations.",
  },
  {
    question: "Do you offer commissioning support?",
    answer:
      "Yes. We can provide operating guidance, safety orientation, and maintenance onboarding so your team can run the machine confidently.",
  },
]

export default function PlasticCrusherPage() {
  return (
    <ProductFamilyLandingPage
      family="crusher"
      heading="Plastic Crusher Machines in the Philippines"
      intro="Our plastic crusher machines are designed for Philippine operations that require efficient and dependable flake production from rigid plastics."
      bulletItems={bulletItems}
      faqs={faqs}
    />
  )
}
