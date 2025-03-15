import { CopyrightIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-32 bg-black text-white/90 py-32 text-center flex item-center justify-center space-x-1">
      <span>Copyright</span> <CopyrightIcon size={18} />
      <span>2021 Resiklo Machine Shop. All Rights Reserved.</span>
    </footer>
  )
}
