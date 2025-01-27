"use client"

import { useState } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"

export function PropertySearch() {
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [areaRange, setAreaRange] = useState([0, 500])

  return (
    <Card className="sticky top-4 z-10 mb-8 bg-white/80 p-4 backdrop-blur-lg">
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6">
        <div className="md:col-span-4 lg:col-span-2">
          <Input placeholder="Konum veya anahtar kelime..." />
        </div>
        <div>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="İlan Tipi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tümü</SelectItem>
              <SelectItem value="sale">Satılık</SelectItem>
              <SelectItem value="rent">Kiralık</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Emlak Tipi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tümü</SelectItem>
              <SelectItem value="apartment">Daire</SelectItem>
              <SelectItem value="house">Müstakil Ev</SelectItem>
              <SelectItem value="land">Arsa</SelectItem>
              <SelectItem value="commercial">İşyeri</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                Filtreler
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Gelişmiş Filtreler</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Fiyat Aralığı</label>
                  <Slider min={0} max={10000000} step={100000} value={priceRange} onValueChange={setPriceRange} />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0].toLocaleString("tr-TR")} ₺</span>
                    <span>{priceRange[1].toLocaleString("tr-TR")} ₺</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Alan (m²)</label>
                  <Slider min={0} max={500} step={10} value={areaRange} onValueChange={setAreaRange} />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{areaRange[0]} m²</span>
                    <span>{areaRange[1]} m²</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Oda Sayısı</label>
                  <div className="grid grid-cols-4 gap-2">
                    {["1+0", "1+1", "2+1", "3+1", "4+1", "5+"].map((room) => (
                      <Button key={room} variant="outline" className="w-full" size="sm">
                        {room}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div>
          <Button className="w-full">
            <Search className="mr-2 h-4 w-4" />
            Ara
          </Button>
        </div>
      </div>
    </Card>
  )
}

