import Image from "next/image"
import { useEffect, useState } from "react"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const books = [
  "ze-spiewem-tancem.jpeg",
  "z-biegiem-wisly.jpeg",
  "na-drodze-niepodleglosci.jpeg",
  "nadwislanskie-urzecze.jpeg",
  "slownik-historyczny.jpeg",
  "kuchnia-urzecza.png",
]

export function RegionalBooks() {
  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!api) return

    const id = setInterval(() => {
      api.scrollNext()
    }, 1500)

    return () => clearInterval(id)
  }, [api])

  return (
    <section className="py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#53321F] mb-8 text-center">
          Literatura regionalna
        </h2>

        <Carousel
          opts={{ align: "center", loop: true }}
          setApi={setApi}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <CarouselContent className="items-center">
            {books.map((b) => (
              <CarouselItem key={b} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex justify-center">
                  <Image
                    src={`/images/${b}`}
                    alt=""
                    width={220}
                    height={300}
                    className="h-56 w-40 md:h-64 md:w-48 lg:h-72 lg:w-52 object-cover rounded-lg shadow-md"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

{/* <p className="text-gray-700 text-center mt-6">Zamówienia przyjmuję mailowo lub przez Facebooka</p>  */}
      </div>
    </section>
  )
}