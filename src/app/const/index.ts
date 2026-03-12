
import type { StaticImageData } from "next/image";
import shredderBoxMS from "../images/shredder-box-ms.png"
import shredderBoxSS from "../images/shredder-box-ss.png"
import shredderMachine from "../images/shredder.png"
import extrusionMachine from "../images/extrusion.png"
import plasticCrusher from "../images/plastic-crusher.png"

export type ProductFamily = "shredder" | "crusher" | "extrusion" | "other"

export type Product = {
  name: string
  slug: string
  family: ProductFamily
  // src: StaticImageData
  images: (StaticImageData | string)[]
  shortDesc: string
  specs: { label: string; value: string | string[] }[]
}

export function getProductHref(product: Pick<Product, "slug">): string {
  return `/products1/group-shredder/${product.slug}`
}

export const products: Product[] = [
  {
    name: "RSASh-150 Basic Shredder",
    slug: "basic-shredder-machine",
    family: "shredder",
    images: [shredderMachine, shredderBoxSS,shredderBoxMS],
    // src: shredderMachine,
    shortDesc: `A compact single-axis shredder with a 150mm mouth, perfect for DIYers, researchers, and low-volume shredding.`,
    specs: [
      { label: "Model", value: "Precious Plastic Shredder Basic" },
      { label: "Material", value: "Mild Steel and GI" },
      { label: "Blades", value: "Mild Steel" },
      { label: "Hexagonal Shaft", value: "Cold Rolled Steel" },
      { label: "Axle Type", value: "Single axle" },
      { label: "Power Input", value: "1.5 kW – 35 rpm output" },
      { label: "Output Shaft", value: "25mm" },
      { label: "Sieve Size", value: "4.7 mm" },
      { label: "Dimension", value: "49 x 35 x 113 cm" },
      { label: "Weight", value: "55 kg" },
      { label: "Capacity", value: "5 - 10 kg/hr (depending on plastic)" },
      {
        label: "Features",
        value: [
          "1.5 kW Motor",
          "Jam Detection",
          "Forward/Reverse Direction",
          "Inverter Control",
          "Emergency Stop",
        ],
      },
    ],
  },
  // ...more products
  {
    name: "Plastic Crusher",
    slug: "plastic-crusher",
    family: "crusher",
    images: [plasticCrusher],
    shortDesc: `A reliable plastic crusher suitable for reducing bulky plastic waste into smaller fragments for downstream processing.`,
    specs: [
      { label: "Motor", value: "5.5 kW (typical)" },
      { label: "Capacity", value: "100 - 300 kg/hr (material dependent)" },
      { label: "Output Size", value: "10 - 50 mm (adjustable)" },
      { label: "Construction", value: "Mild steel frame, hardened knives" },
    ],
  },
  {
    name: "Plastic Extrusion Machine",
    slug: "basic-extrusion",
    family: "extrusion",
    images: [extrusionMachine],
    shortDesc: `A straightforward single-screw extrusion line for producing filament or profiles from recycled plastic.`,
    specs: [
      { label: "Heater Zones", value: "4 zones" },
      { label: "Output Type", value: "Filament / Profile (die dependent)" },
      { label: "Capacity", value: "20 - 80 kg/hr (dependent on material & die)" },
      { label: "Screw", value: "Single-screw, hardened alloy" },
    ],
  },
]