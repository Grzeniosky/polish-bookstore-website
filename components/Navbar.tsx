"use client"

import Image from "next/image"
import { site } from "@/app/content/siteContent"

type OpeningConfig =
  | {
      open: string
      close: string
    }
  | null

function getStatusLabel(now: Date, openingHours: typeof site.openingHours) {
  // override per day YYYY-MM-DD
  const isoDate = now.toISOString().slice(0, 10)
  if (openingHours.override?.[isoDate]) {
    return { status: "closed", label: openingHours.override[isoDate] }
  }

  const day = now.getDay() // 0 niedziela, 6 sobota
  const config: OpeningConfig =
    day === 0 ? openingHours.sunday : day === 6 ? openingHours.saturday : openingHours.weekday

  if (!config) return { status: "closed", label: "Dziś nieczynne" }

  const [openH, openM] = config.open.split(":").map(Number)
  const [closeH, closeM] = config.close.split(":").map(Number)

  const open = new Date(now)
  open.setHours(openH, openM, 0, 0)
  const close = new Date(now)
  close.setHours(closeH, closeM, 0, 0)

  if (now < open) {
    return { status: "preopen", label: `Dziś otwarte od ${config.open}` }
  }

  if (now >= open && now <= close) {
    return { status: "open", label: `Dziś otwarte do ${config.close}` }
  }

  return { status: "closed", label: "Dziś nieczynne" }
}

export function Navbar() {
  const now = new Date()
  const status = getStatusLabel(now, site.openingHours)
  const dotColor =
    status.status === "open" ? "bg-emerald-500" : status.status === "preopen" ? "bg-amber-400" : "bg-gray-400"

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-[#53321F] text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Image
            src="/logo-updated.svg"
            alt="Logo Księgarni"
            width={60}
            height={40}
            className="h-8 md:h-12 w-auto"
            priority
          />
        </div>
      </div>

      <div className="bg-[#f7f2ec]/90 backdrop-blur-sm border-b border-[#53321F]/10 text-[#53321F] px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <span className={`inline-block h-2.5 w-2.5 rounded-full ${dotColor}`} aria-hidden />
          <span className="font-medium">{status.label}</span>
        </div>
      </div>
    </header>
  )
}