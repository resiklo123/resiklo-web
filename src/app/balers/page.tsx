import type { Metadata } from "next"
import ProductFamilyLandingPage, {
  type FaqItem,
} from "@/app/components/ProductFamilyLandingPage"

export const metadata: Metadata = {
  title: "Baler Machines in the Philippines | Resiklo",
  description:
    "Find baler machines in the Philippines for plastic bottles, plastic film, and cardboard baling with industrial support and local assistance from Resiklo.",
}

const bulletItems = [
  "Suitable for baling plastic bottles, soft plastic film, and cardboard for cleaner storage areas.",
  "Reduces waste volume so materials are easier to stack, transport, and sell to downstream buyers.",
  "Useful for warehouses, junk shops, recovery facilities, and businesses handling recurring recyclable loads.",
]

const faqs: FaqItem[] = [
  {
    question: "What affects baler machine pricing in the Philippines?",
    answer:
      "Pricing depends on compaction force, chamber size, hydraulic configuration, and the types of materials you plan to bale. We quote based on your expected volume and bale handling needs.",
  },
  {
    question: "What materials can be baled with your machines?",
    answer:
      "Typical applications include plastic bottles, soft plastic film, and cardboard. Material cleanliness, thickness, and rebound characteristics affect final bale density.",
  },
  {
    question: "Do you offer different bale size or bale weight options?",
    answer:
      "Yes. Bale size and weight vary with machine size, chamber dimensions, and the material being compacted. We can recommend a model based on your storage and hauling setup.",
  },
  {
    question: "What power requirements should I prepare for a baler?",
    answer:
      "Power requirements depend on the hydraulic system and motor rating of the selected model. We confirm electrical requirements during quotation so your site can prepare properly.",
  },
  {
    question: "What is the lead time and do you provide after-sales support?",
    answer:
      "Lead time depends on the build queue, machine configuration, and delivery location in the Philippines. We also provide local coordination, operating guidance, and after-sales support for installed units.",
  },
]

export default function BalersPage() {
  return (
    <ProductFamilyLandingPage
      family="baler"
      heading="Baler Machines in the Philippines"
      intro="Resiklo supplies baler machines in the Philippines for companies and recovery operations that need dependable compaction of plastic and cardboard before storage, hauling, or resale."
      bulletItems={bulletItems}
      faqs={faqs}
      quoteHref="/contact-us?machine=balers"
    />
  )
}