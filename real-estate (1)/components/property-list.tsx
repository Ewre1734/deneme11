import Image from "next/image"
import Link from "next/link"
import { Building2, MapPin } from "lucide-react"

import { formatPrice } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const DUMMY_PROPERTIES = [
  {
    id: 1,
    title: "3+1 Ferah Daire",
    type: "apartment",
    status: "sale",
    price: 2750000,
    location: "Kadıköy, İstanbul",
    area: 145,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "2+1 Kiralık Daire",
    type: "apartment",
    status: "rent",
    price: 8500,
    location: "Beşiktaş, İstanbul",
    area: 90,
    image: "/placeholder.svg?height=400&width=600",
  },
  // Daha fazla örnek ilan eklenebilir
]

export function PropertyList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {DUMMY_PROPERTIES.map((property) => (
        <Card key={property.id} className="overflow-hidden">
          <CardHeader className="p-0">
            <div className="aspect-video relative">
              <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
              <Badge className="absolute left-2 top-2">{property.status === "sale" ? "Satılık" : "Kiralık"}</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="mb-2 text-xl font-semibold">{property.title}</h3>
            <div className="mb-4 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{property.location}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span>{property.area}m²</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between p-4">
            <div className="text-lg font-semibold">
              {formatPrice(property.price)}
              {property.status === "rent" && <span className="text-sm">/ay</span>}
            </div>
            <Button asChild>
              <Link href={`/properties/${property.id}`}>İncele</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

