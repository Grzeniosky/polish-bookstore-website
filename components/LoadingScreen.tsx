"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"

const ICONS = [
  { src: "/images/book.png", alt: "Książka" },
  { src: "/images/pen.svg", alt: "Pióro" },
  { src: "/images/coffee.svg", alt: "Kawa" },
  { src: "/images/books.svg", alt: "Książki" },
  { src: "/images/heart.svg", alt: "Serce" },
]

export function LoadingScreen({ visible = true }: { visible?: boolean }) {
  const icons = useMemo(() => ICONS, [])
  const [index, setIndex] = useState(0)
  const [fadeIn, setFadeIn] = useState(true)

  const easing = "cubic-bezier(0.22, 0.61, 0.36, 1)"
  // Szybki, ale czytelny cykl – w ~2s przewiną się wszystkie ikony
  const intervalMs = 380
  const swapDelayMs = 140

  useEffect(() => {
    if (!visible) return

    let fadeTimeout: NodeJS.Timeout | null = null
    const interval = setInterval(() => {
      // fade out
      setFadeIn(false)

      // zmiana obrazka w połowie fade
      fadeTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % icons.length)
        setFadeIn(true)
      }, swapDelayMs)
    }, intervalMs)

    return () => {
      clearInterval(interval)
      if (fadeTimeout) clearTimeout(fadeTimeout)
    }
  }, [icons.length, visible])

  const tilt = index % 2 === 0 ? 3 : -3

  return (
    <div
      className={[
        "fixed inset-0 z-50 flex items-center justify-center bg-white",
        "transition-opacity duration-700 ease-out",
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      {/* STAŁY KONTENER = brak skoków */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: "30vh",
          height: "30vh",
          maxWidth: "300px",
          maxHeight: "300px",
        }}
      >
        <div
          className={[
            "transition-opacity duration-220 ease-in-out",
            fadeIn ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{
            transition: `opacity 200ms ${easing}, transform 260ms ${easing}`,
            transform: `scale(${fadeIn ? 1.04 : 0.94}) rotate(${tilt}deg)`,
            filter: "drop-shadow(0 7px 12px rgba(0,0,0,0.08))",
          }}
        >
          <Image
            src={icons[index]?.src ?? "/placeholder.svg"}
            alt={icons[index]?.alt ?? "Ładowanie"}
            width={400}
            height={400}
            priority
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}