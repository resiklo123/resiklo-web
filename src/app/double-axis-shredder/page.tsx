import type { Metadata } from "next"
import ProductFamilyLandingPage, { type FaqItem } from "@/app/components/ProductFamilyLandingPage"
import { products } from "@/app/const"

export const metadata: Metadata = {
  title: "Double Axis Shredder in the Philippines | Resiklo Machine Shop",
  description:
    "Find double-axis shredders in the Philippines for heavy-duty size reduction of bulky and difficult plastics.",
}

const bulletItems = [
  "Ideal for bulky, thick, and composite plastics that need aggressive size reduction.",
  "Counter-rotating shafts with hardened cutters for improved throughput and tear resistance.",
  "Common in waste-to-energy preprocessing and heavy recycling operations.",
]

const faqs: FaqItem[] = [
  {
    question: "What materials are best for double-axis shredders?",
    answer:
      "Double-axis shredders handle bulky plastics, thin-walled containers, and composite materials more effectively than single-axis units.",
  },
  {
    question: "How do I choose the right double-axis model?",
    answer:
      "Consider feed size, desired output fragment size, and throughput when selecting a model. We can recommend configurations.",
  },
  {
    question: "Are double-axis shredders more expensive to maintain?",
    answer:
      "Maintenance depends on material abrasiveness and operating hours. Cutter replacement and lubrication are the main considerations.",
  },
  {
    question: "Can double-axis shredders process metal-contaminated streams?",
    answer:
      "Small metal contamination may be tolerated, but consistent metal presence requires pre-sorting or magnetic separation to avoid damage.",
  },
  {
    question: "Do you provide installation and support?",
    answer:
      "Yes. We offer commissioning support and operator training for double-axis machines to ensure safe and efficient operation.",
  },
]

export default function DoubleAxisShredderPage() {
  const recommended = products.filter(
    (p) => p.family === "shredder" && p.shredderType === "double-axis"
  )

  return (
    <ProductFamilyLandingPage
      family="shredder"
      heading="Double Axis Shredder in the Philippines"
      intro="Heavy-duty double-axis shredders for robust size reduction and recycling applications in the Philippines."
      bulletItems={bulletItems}
      faqs={faqs}
      recommendedProducts={recommended}
    />
  )
}
