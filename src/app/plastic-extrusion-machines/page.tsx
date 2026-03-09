import type { Metadata } from "next"
import ProductFamilyLandingPage, {
  type FaqItem,
} from "@/app/components/ProductFamilyLandingPage"

export const metadata: Metadata = {
  title: "Plastic Extrusion Machines in the Philippines | Resiklo Machine Shop",
  description:
    "Discover plastic extrusion machines in the Philippines for converting recycled plastics into useful filament, profiles, and product feedstock.",
}

const bulletItems = [
  "Converts processed plastic feed into usable manufacturing output.",
  "Suitable for recycled material applications such as filament and profile production.",
  "Best results come from pairing extrusion with proper shredding and cleaning.",
]

const faqs: FaqItem[] = [
  {
    question: "How much do plastic extrusion machines cost in the Philippines?",
    answer:
      "Pricing varies by screw size, heating configuration, and output targets. We provide detailed quotations based on your intended production requirements.",
  },
  {
    question: "What output can I expect from an extrusion unit?",
    answer:
      "Output depends on material type, screw design, and process settings. We help align machine capacity with your required kg/hr range.",
  },
  {
    question: "What plastics are suitable for extrusion?",
    answer:
      "Common materials include HDPE, PP, and LDPE after proper preparation. Moisture control and consistent feed improve output quality.",
  },
  {
    question: "What is the lead time for extrusion machine delivery?",
    answer:
      "Lead time depends on machine configuration, parts availability, and destination. A projected timeline is provided in your quotation.",
  },
  {
    question: "Do you provide process support and training?",
    answer:
      "Yes. We can support setup, initial parameter tuning, and operator training for safer and more stable production.",
  },
]

export default function PlasticExtrusionMachinesPage() {
  return (
    <ProductFamilyLandingPage
      family="extrusion"
      heading="Plastic Extrusion Machines in the Philippines"
      intro="Resiklo offers plastic extrusion machines in the Philippines for organizations turning recovered plastics into higher-value end products."
      bulletItems={bulletItems}
      faqs={faqs}
    />
  )
}
