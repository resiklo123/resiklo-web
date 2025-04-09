"use client"

import Link from "next/link"
import { cn } from "./utils"
import { usePathname } from "next/navigation"

import Image from "next/image"
import logo from "./images/Resiklo-Logo.png"


const navigation: { label: string; href: string }[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PRODUCTS", href: "/products-" },
  // { label: "TEAM", href: "/team" },
  // { label: "STORY", href: "/team" },
  { label: "CONTACT US", href: "/contact-us" },
  // { label: "DONATE", href: "/donate" },
]

export function Nav() {
  const path = usePathname()
  return (
   

    <nav className="p-12 flex z-50 justify-between items-center fixed top-0 left-0 right-0 bg-gradient-to-b from-zinc-950/50 via-90% to-transparent">
      <Link href="/" className="flex items-center space-x-2">
  <Image
    src={logo}
    alt="Resiklo Logo"
    width={50}
    height={50}
    className="rounded-md"
  />
</Link>
      {/* <div>ICON</div> */}
      <ul className="flex space-x-8">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-white/90 font-bold tracking-tight pb-2 border-b-2 ",
              path === item.href ? "" : "border-transparent hover:border-white"
            )}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}
