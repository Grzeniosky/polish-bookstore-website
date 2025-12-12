import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function Certificates({
  onOpenImage,
}: {
  onOpenImage: (src: string, alt: string) => void
}) {
  return (
    <section className="py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#53321F] text-center mb-8">
          Program „Mała Księgarnia”
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Card onClick={() => onOpenImage("/images/certyfikat-dyplom.jpeg", "Dyplom")}>
            <CardContent className="p-4 text-center cursor-pointer">
              <Image src="/images/certyfikat-dyplom.jpeg" alt="" width={300} height={200} />
              <p className="text-xs text-gray-500 mt-2">Kliknij aby powiększyć</p>
            </CardContent>
          </Card>

          <Card onClick={() => onOpenImage("/images/certyfikat-ministerstwo.svg", "Certyfikat")}>
            <CardContent className="p-4 text-center cursor-pointer">
              <Image src="/images/certyfikat-ministerstwo.svg" alt="" width={300} height={200} />
              <p className="text-xs text-gray-500 mt-2">Kliknij aby powiększyć</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}