import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Podręczniki szkolne",
    text: "Pomagamy w kompletowaniu wyprawki szkolnej zgodnie z aktualnymi wykazami MEN.",
  },
  {
    title: "Literatura regionalna",
    text: "Bogaty wybór książek o regionie Urzecza i okolicach.",
  },
  {
    title: "Książki i artykuły papiernicze",
    text: "Literatura dla dzieci, młodzieży i dorosłych oraz artykuły papiernicze.",
  },
]

export function Features() {
  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#53321F] mb-4">
            Co znajdziesz w mojej księgarni?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nie jesteśmy sieciówką. Doradzam osobiście i zamawiam pod konkretne potrzeby.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title}>
              <CardContent className="p-6">
                <h3 className="font-bold text-[#53321F] mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}