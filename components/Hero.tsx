"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-12 md:py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto grid gap-12 md:gap-16 md:grid-cols-2 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-[#53321F]"
            style={{ fontFamily: "Instrument Serif", fontStyle: "italic", fontWeight: 400 }}
          >
            Zapraszam do mojej księgarni w Górze Kalwarii
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto md:mx-0">
            Od podręczników szkolnych po literaturę regionalną Urzecza – wszystko dobrane z myślą o lokalnych potrzebach.
          </p>

          <p
            className="text-base md:text-lg text-gray-600"
            style={{ fontFamily: "Instrument Serif", fontStyle: "italic", fontWeight: 400 }}
          >
            – Agata Zduńczyk, właścicielka
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-[#53321F] px-5" onClick={() => window.open("tel:607688410")}>
              <Phone className="mr-2 h-5 w-5" />
              Zadzwoń i zapytaj
            </Button>

            <Button size="lg" variant="outline" className="px-5" onClick={scrollToContact}>
              <MapPin className="mr-2 h-5 w-5" />
              Odwiedź księgarnię
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/hero-illustration.png"
            alt="Księgarnia Regionalna w Górze Kalwarii"
            width={460}
            height={560}
            className="w-72 md:w-[22rem] lg:w-[26rem] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}