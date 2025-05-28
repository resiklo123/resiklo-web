
import type { StaticImageData } from "next/image";
// import shredderBoxMS from "../images/shredder-box-ms.png"
import shredderBoxSS from "../images/shredder-box-ss.png"
import shredderMachine from "../images/shredder.png"
import injectionMachine from "../images/plastic-injection.png"
// import extrusionMachine from "../images/extrusion.png"
// import plasticCrusher from "../images/plastic-crusher.png"

export type Product = {
  name: string
  slug: string
  // src: StaticImageData
  images: (StaticImageData | string)[]
  shortDesc: string
  specs: { label: string; value: string | string[] }[]
}

export const products: Product[] = [
  {
    name: "RSASh-150 Basic Shredder",
    slug: "basic-shredder-machine",
    images: [shredderMachine, injectionMachine, shredderBoxSS],
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
]