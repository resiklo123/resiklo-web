import React from "react"

type ContactQuickActionsProps = {
  pageName?: string
}

export default function ContactQuickActions({ pageName }: ContactQuickActionsProps) {
  const subject = encodeURIComponent(`Inquiry about ${pageName ?? "Resiklo"}`)

  return (
    <aside className="mt-4 w-full max-w-md rounded-lg bg-white p-3 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <a
          href={`mailto:resiklo.mfg@gmail.com?subject=${subject}`}
          className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
          aria-label="Email Resiklo"
        >
          ✉️ Email
        </a>

        <a
          href="tel:+639676091500"
          className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
          aria-label="Call Resiklo mobile 1"
        >
          📞 +63 967 609 1500
        </a>

        <a
          href="tel:+639750113677"
          className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
          aria-label="Call Resiklo mobile 2"
        >
          📞 +63 975 011 3677
        </a>

        <a
          href="https://www.facebook.com/resiklomachines"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
          aria-label="Resiklo Facebook page"
        >
          👍 Facebook
        </a>

        <a
          href="https://m.me/resiklomachines"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
          aria-label="Message Resiklo on Messenger"
        >
          💬 Messenger
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Salinas+1+Bacoor+Cavite+Philippines"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
          aria-label="Open Resiklo location on Google Maps"
        >
          📍 Maps
        </a>
      </div>

      <div className="mt-3 text-sm text-gray-600">Salinas 1, Bacoor, Cavite, Philippines</div>
    </aside>
  )
}
