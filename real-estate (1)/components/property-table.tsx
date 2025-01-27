"use client"

import { useState } from "react"
import Link from "next/link"
import { Edit, MoreHorizontal, Trash } from "lucide-react"

import { formatPrice } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const DUMMY_PROPERTIES = [
  {
    id: 1,
    title: "3+1 Ferah Daire",
    type: "apartment",
    status: "sale",
    price: 2750000,
    location: "Kadıköy, İstanbul",
  },
  {
    id: 2,
    title: "2+1 Kiralık Daire",
    type: "apartment",
    status: "rent",
    price: 8500,
    location: "Beşiktaş, İstanbul",
  },
]

export function PropertyTable() {
  const [properties, setProperties] = useState(DUMMY_PROPERTIES)

  const deleteProperty = (id: number) => {
    // Burada silme işlemi yapılacak
    setProperties(properties.filter((property) => property.id !== id))
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Başlık</TableHead>
          <TableHead>Tür</TableHead>
          <TableHead>Durum</TableHead>
          <TableHead>Fiyat</TableHead>
          <TableHead>Konum</TableHead>
          <TableHead className="w-[100px]">İşlemler</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {properties.map((property) => (
          <TableRow key={property.id}>
            <TableCell>{property.title}</TableCell>
            <TableCell>{property.type === "apartment" ? "Daire" : "Diğer"}</TableCell>
            <TableCell>{property.status === "sale" ? "Satılık" : "Kiralık"}</TableCell>
            <TableCell>
              {formatPrice(property.price)}
              {property.status === "rent" && "/ay"}
            </TableCell>
            <TableCell>{property.location}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">İşlemler</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/properties/${property.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Düzenle
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive" onClick={() => deleteProperty(property.id)}>
                    <Trash className="mr-2 h-4 w-4" />
                    Sil
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

