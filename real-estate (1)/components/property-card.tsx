import Image from "next/image"
import Link from "next/link"
import { Bath, Bed, Building2, Heart, MapPin, Maximize } from "lucide-react"

import { formatPrice } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface PropertyCardProps {
  property: {
    id: number
    title: string
    type: string
    status: string
    price: number
    location: string
    area: number
    bedrooms?: number
    bathrooms?: number
    image: string
    isNew?: boolean
    isFeatured?: boolean
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="group overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative">
          <Image
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute left-2 right-2 top-2 flex justify-between">
            <div className="flex gap-2">
              <Badge variant={property.status === "sale" ? "default" : "secondary"}>
                {property.status === "sale" ? "Satılık" : "Kiralık"}
              </Badge>
              {property.isNew && <Badge variant="destructive">Yeni</Badge>}
              {property.isFeatured && <Badge variant="secondary">Öne Çıkan</Badge>}
            </div>
            <Button variant="secondary" size="icon" className="h-6 w-6">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="line-clamp-1 text-xl font-semibold">{property.title}</h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="line-clamp-1 flex-1">{property.location}</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{property.bedrooms} Yatak Odası</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms} Banyo</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Building2 className="h-4 w-4" />
            <span>{property.area}m²</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div className="text-lg font-semibold">
          {formatPrice(property.price)}
          {property.status === "rent" && <span className="text-sm">/ay</span>}
        </div>
        <Button asChild>
          <Link href={`/properties/${property.id}`}>
            <Maximize className="mr-2 h-4 w-4" />
            İncele
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

