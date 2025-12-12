"use client"

import { useEffect, useState } from "react"
import { LoadingScreen } from "@/components/LoadingScreen"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Features } from "@/components/Features"
import { RegionalBooks } from "@/components/RegionalBooks"
import { Contact } from "@/components/Contact"
import { Certificates } from "@/components/Certificates"
import { ImageModal } from "@/components/ImageModal"

export default function BookstoreLanding() {
    // Loader widoczny na starcie
    const [isLoading, setIsLoading] = useState(true)
  
    // Content wchodzi płynnie po tym, jak loader zacznie znikać
    const [showContent, setShowContent] = useState(false)
  
    // Jeden modal na wszystkie obrazki
    const [modal, setModal] = useState<null | { src: string; alt: string }>(null)
  
    useEffect(() => {
      // Jak długo ma być widoczne intro (ms)
      const INTRO_MS = 900
  
      // Ile dać czasu na fade-out intro zanim pokażemy treść
      const INTRO_FADE_OUT_BUFFER_MS = 250
  
      const timer = setTimeout(() => {
        // zaczynamy wygaszanie intro (LoadingScreen zrobi fade-out)
        setIsLoading(false)
  
        // dopiero po chwili pokazujemy treść, żeby uniknąć „mrugnięcia”
        const contentTimer = setTimeout(() => setShowContent(true), INTRO_FADE_OUT_BUFFER_MS)
  
        return () => clearTimeout(contentTimer)
      }, INTRO_MS)
  
      return () => clearTimeout(timer)
    }, [])
  
    return (
      <>
        {/* Intro/loader zawsze jest w DOM, tylko zmienia opacity */}
        <LoadingScreen visible={isLoading} />
  
        {/* Content wchodzi płynnie */}
        <div className={`min-h-screen bg-white transition-opacity duration-700 ${showContent ? "opacity-100" : "opacity-0"}`}>
          <Navbar />
  
          <main>
            <Hero />
            <About />
            <Features />
            <RegionalBooks />
            <Contact />
            <Certificates onOpenImage={(src, alt) => setModal({ src, alt })} />
          </main>
  
          <footer className="bg-[#53321F] text-white py-6 md:py-8 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="mb-3 md:mb-4">
                <h3 className="text-base md:text-lg font-bold">Księgarnia Regionalna w Górze Kalwarii</h3>
                <p className="text-xs md:text-sm opacity-90">Agata Zduńczyk</p>
              </div>
              <p className="text-xs opacity-75">© 2024 Księgarnia Regionalna w Górze Kalwarii. Wszystkie prawa zastrzeżone.</p>
            </div>
          </footer>
  
          <ImageModal
            open={!!modal}
            onClose={() => setModal(null)}
            src={modal?.src ?? ""}
            alt={modal?.alt ?? ""}
          />
        </div>
      </>
    )
  }