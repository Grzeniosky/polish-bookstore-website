"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Mail, Clock, ChevronDown, ChevronUp, Facebook } from "lucide-react"
import { site } from "@/app/content/siteContent"

const orderSteps = [
  {
    title: "Zadzwoń lub napisz",
    text: "Powiedz, czego szukasz – od ręki sprawdzę, czy mam egzemplarz.",
    icon: Phone,
  },
  {
    title: "Rezerwacja",
    text: "Jeśli książka jest, odkładam ją na Twoje nazwisko; jeśli nie, zamawiam.",
    icon: Mail,
  },
  {
    title: "Odbiór w księgarni",
    text: "Podejdź na Pijarską 38 – książka będzie czekać przy kasie.",
    icon: MapPin,
  },
  {
    title: "Szybko przez Facebooka",
    text: "Napisz na Messengerze – odpowiadam szybko i potwierdzam szczegóły.",
    icon: Facebook,
  },
]

export function Contact() {
  const [showMap, setShowMap] = useState(false)

  return (
    <section id="contact" className="py-8 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-2">
        {/* LEFT: Contact details */}
        <Card className="shadow-sm border border-gray-100">
          <CardContent className="p-6 space-y-5">
            <h3 className="font-bold text-[#53321F]">Kontakt</h3>

            {/* Address + map toggle */}
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-[2px] text-[#53321F]" />
                <div className="flex-1">
                  <div className="font-medium text-[#53321F]">Księgarnia Regionalna w Górze Kalwarii</div>
                  <div className="text-gray-700 text-sm">{site.addressLines.join(", ")}</div>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowMap((v) => !v)}
                    className="mt-2 inline-flex items-center gap-2 rounded-full border-[#53321F]/30 text-[#53321F] hover:bg-[#53321F] hover:text-white"
                    aria-expanded={showMap}
                    aria-controls="map-panel"
                  >
                    {showMap ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {showMap ? "Ukryj mapę" : "Pokaż mapę"}
                  </Button>
                </div>
              </div>

              {showMap && (
                <div id="map-panel" className="rounded-xl overflow-hidden border border-gray-100 bg-white">
                  <iframe
                    title="Księgarnia Regionalna w Górze Kalwarii – mapa"
                    src="https://www.google.com/maps?q=Ksi%C4%99garnia%20Regionalna%20w%20G%C3%B3rze%20Kalwarii&z=17&output=embed"
                    width="100%"
                    height="220"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                  <div className="px-4 py-3">
                    <div className="font-medium text-[#53321F]">Księgarnia Regionalna w Górze Kalwarii</div>
                    <div className="text-sm text-gray-600">{site.addressLines.join(", ")}</div>
                    <a
                      href="https://maps.app.goo.gl/CNjkNZWSBfgcgVqYA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-sm text-[#53321F] hover:underline"
                    >
                      Otwórz w Google Maps
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Opening hours */}
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-[2px] text-[#53321F]" />
              <div className="space-y-0.5 text-gray-700 text-sm">
                <div>{site.hours.weekdayLong}</div>
                <div>{site.hours.saturdayLong}</div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#53321F]" />
              <a href={`tel:${site.phone}`} className="text-[#53321F] hover:underline">
                {site.phoneDisplay}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#53321F]" />
              <a href={`mailto:${site.email}`} className="text-[#53321F] hover:underline break-all">
                {site.email}
              </a>
            </div>

            {/* Facebook */}
            <div className="flex items-center gap-2">
              <Facebook className="h-4 w-4 text-[#53321F]" />
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#53321F] hover:underline"
              >
                Facebook
              </a>
            </div>
          </CardContent>
        </Card>

        {/* RIGHT: How to order */}
        <Card className="shadow-sm border border-gray-100">
          <CardContent className="p-6 space-y-5">
            <div>
              <h3 className="font-bold text-[#53321F]">Jak zamówić książkę?</h3>
              <p className="text-gray-600 text-sm mt-1">
                Telefon, mail lub Facebook – szybko potwierdzamy i odkładamy egzemplarz.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {orderSteps.map((step) => (
                <div key={step.title} className="rounded-xl border border-gray-100 p-4 bg-white">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#53321F]/12 text-[#53321F]">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="font-semibold text-[#53321F] mb-1">{step.title}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{step.text}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-[#53321F] rounded-full px-5" onClick={() => window.open(`tel:${site.phone}`)}>
                <Phone className="mr-2 h-4 w-4" />
                Zadzwoń
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-5"
                onClick={() => (window.location.href = `mailto:${site.email}`)}
              >
                <Mail className="mr-2 h-4 w-4" />
                Napisz maila
              </Button>

              <Button variant="outline" className="rounded-full px-5" onClick={() => window.open(site.facebookUrl, "_blank")}>
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}