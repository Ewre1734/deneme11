import Image from "next/image"
import { Building2, MapPin, Phone } from "lucide-react"

import { formatPrice } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Bu fonksiyon gerçek uygulamada veritabanından veri çekecek
async function getProperty(id: string) {
  // Örnek veri
  return {
    id: 1,
    title: "3+1 Ferah Daire",
    type: "apartment",
    status: "sale",
    price: 2750000,
    location: "Kadıköy, İstanbul",
    area: 145,
    description:
      "Ferah ve aydınlık bir daire. Metro ve diğer toplu taşıma araçlarına yakın konumda. Deprem yönetmeliğine uygun yapı.",
    features: ["3+1", "145m²", "2. Kat", "5 Yaşında", "Kombili", "2 Banyo", "Ebeveyn Banyosu", "Ankastre Mutfak"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  }
}

export default async function PropertyPage({
  params,
}: {
  params: { id: string }
}) {
  const property = await getProperty(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="aspect-4/3 relative overflow-hidden rounded-lg">
            <Image src={property.images[0] || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {property.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-4/3 relative overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${property.title} - ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Badge>{property.status === "sale" ? "Satılık" : "Kiralık"}</Badge>
            <Badge variant="outline">{property.type === "apartment" ? "Daire" : "Diğer"}</Badge>
          </div>
          <h1 className="mb-4 text-3xl font-bold">{property.title}</h1>
          <div className="mb-6 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{property.location}</span>
          </div>
          <div className="mb-6 text-3xl font-bold">
            {formatPrice(property.price)}
            {property.status === "rent" && <span className="text-lg">/ay</span>}
          </div>
          <Card className="mb-8">
            <CardContent className="grid grid-cols-2 gap-4 p-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span>{property.area}m²</span>
              </div>
            </CardContent>
          </Card>
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Açıklama</h2>
            <p className="text-muted-foreground">{property.description}</p>
          </div>
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Özellikler</h2>
            <div className="grid grid-cols-2 gap-2">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span>• {feature}</span>
                </div>
              ))}
            </div>
          </div>
          <Button size="lg" className="w-full">
            <Phone className="mr-2 h-4 w-4" />
            İletişime Geç
          </Button>
        </div>
      </div>
    </div>
  )
}

