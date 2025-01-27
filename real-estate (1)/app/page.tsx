import { PropertyCard } from "@/components/property-card"
import { PropertySearch } from "@/components/property-search"
import { HeroSlider } from "@/components/hero-slider"
import { Button } from "@/components/ui/button"

const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Boğaz Manzaralı Lüks Daire",
    type: "apartment",
    status: "sale",
    price: 12500000,
    location: "Beşiktaş, İstanbul",
    area: 185,
    bedrooms: 4,
    bathrooms: 2,
    image: "/placeholder.svg?height=400&width=600",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Bahçeli Müstakil Ev",
    type: "house",
    status: "sale",
    price: 8750000,
    location: "Çeşme, İzmir",
    area: 220,
    bedrooms: 5,
    bathrooms: 3,
    image: "/placeholder.svg?height=400&width=600",
    isNew: true,
  },
  // Daha fazla örnek ilan...
]

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <div className="container mx-auto px-4 py-12">
        <PropertySearch />
        <div className="mb-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Öne Çıkan İlanlar</h2>
              <p className="mt-1 text-muted-foreground">Size özel seçilmiş gayrimenkul fırsatları</p>
            </div>
            <Button variant="outline">Tüm İlanları Gör</Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-muted p-8 text-center">
          <h2 className="mb-4 text-3xl font-bold">Gayrimenkulünüzü Değerlendirelim</h2>
          <p className="mb-6 text-muted-foreground">
            Uzman ekibimiz ile gayrimenkulünüzün gerçek değerini belirleyelim
          </p>
          <Button size="lg">Ücretsiz Değerleme</Button>
        </div>
      </div>
    </main>
  )
}

