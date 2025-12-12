"use client"

import { Phone, Mail, Facebook, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    title: "Zadzwoń lub napisz",
    text: "Podaj tytuł, autora lub po prostu opisz, czego szukasz – pomogę znaleźć właściwą książkę.",
    icon: Phone,
  },
  {
    title: "Potwierdzenie dostępności",
    text: "Sprawdzę od ręki, czy mamy egzemplarz, a jeśli nie – zamówię go specjalnie dla Ciebie.",
    icon: Mail,
  },
  {
    title: "Odbiór w księgarni",
    text: "Wpadnij do nas na Pijarską 38. Jeśli wolisz, zarezerwuję książkę, by na Ciebie czekała.",
    icon: MapPin,
  },
  {
    title: "Przez Facebooka",
    text: "Napisz wiadomość na Facebooku – szybko odpowiadam i potwierdzam szczegóły zamówienia.",
    icon: Facebook,
  },
]

export function HowToOrder() {
  return (
    <section className="py-10 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#53321F] mb-4">Jak zamawiać książki?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Możesz zamówić książkę telefonicznie, mailowo albo przez Facebooka. Szybko potwierdzam dostępność i odkładam
            egzemplarz do odbioru na miejscu.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="rounded-xl bg-white shadow-sm p-6 border border-gray-100">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#53321F]/10 text-[#53321F]">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-[#53321F] mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" className="bg-[#53321F]" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Skontaktuj się teraz
          </Button>
        </div>
      </div>
    </section>
  )
}

