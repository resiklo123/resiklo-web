
import type { StaticImageData } from "next/image";
import shredderBoxMS from "../images/shredder-box-ms.png"
import shredderBoxSS from "../images/shredder-box-ss.png"
import shredderMachine from "../images/shredder.png"
import extrusionMachine from "../images/extrusion.png"
import plasticCrusher from "../images/plastic-crusher.png"
import VHD_200 from "../images/Products_Page/Shredders_Part/VHD_200.png"
import VHD_300 from "../images/Products_Page/Shredders_Part/VHD_300.png"
import VHD_600 from "../images/Products_Page/Shredders_Part/VHD_600.png"
import LD150_Mini from "../images/Products_Page/Shredders_Part/LD150_Mini.png"

export type ProductFamily = "shredder" | "crusher" | "extrusion" | "other"

export type Product = {
  name: string
  slug: string
  family: ProductFamily
  // src: StaticImageData
  images: (StaticImageData | string)[]
  shortDesc: string
  shredderType?: "single-axis" | "double-axis"
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
    shredderType: "single-axis",
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
    name: "Double Axis Shredder DAS-500",
    slug: "double-axis-shredder",
    family: "shredder",
    shredderType: "double-axis",
    images: [VHD_200],
    shortDesc: `A heavy-duty double-axis shredder for bulky and difficult-to-process plastics and composites.`,
    specs: [
      { label: "Motor", value: "7.5 - 22 kW options" },
      { label: "Capacity", value: "200 - 1000 kg/hr (depending on configuration)" },
      { label: "Shafts", value: "Dual counter-rotating shafts with hardened cutters" },
      { label: "Applications", value: "Bulky plastics, composite waste, film and sheet" },
    ],
  },
  {
    name: "VHD-200",
    slug: "vhd-200",
    family: "shredder",
    shredderType: "double-axis",
    images: [VHD_200],
    shortDesc: `Compact double-axis shredder for medium-duty recycling and volume reduction.`,
    specs: [
      { label: "Motor", value: "11 kW" },
      { label: "Capacity", value: "150 - 300 kg/hr" },
      { label: "Shafts", value: "Dual counter-rotating shafts" },
    ],
  },
  {
    name: "VHD-300",
    slug: "vhd-300",
    family: "shredder",
    shredderType: "double-axis",
    images: [VHD_300],
    shortDesc: `Robust double-axis shredder for larger bulky plastics and boards.`,
    specs: [
      { label: "Motor", value: "15 kW" },
      { label: "Capacity", value: "300 - 600 kg/hr" },
      { label: "Shafts", value: "Dual counter-rotating shafts" },
    ],
  },
  {
    name: "VHD-600",
    slug: "vhd-600",
    family: "shredder",
    shredderType: "double-axis",
    images: [VHD_600],
    shortDesc: `High-capacity double-axis shredder ideal for industrial recycling applications.`,
    specs: [
      { label: "Motor", value: "22 kW" },
      { label: "Capacity", value: "600 - 1200 kg/hr" },
      { label: "Shafts", value: "Dual counter-rotating shafts with heavy-duty cutters" },
    ],
  },
  {
    name: "RDAS Box Kit",
    slug: "rdas-box-kit",
    family: "shredder",
    shredderType: "double-axis",
    images: [LD150_Mini],
    shortDesc: `Compact double-axis box kit for modular shredding setups and educational builds.`,
    specs: [
      { label: "Motor", value: "1.5 - 5.5 kW options" },
      { label: "Capacity", value: "10 - 100 kg/hr" },
      { label: "Shafts", value: "Dual shafts" },
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