import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary/50 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Hayalinizdeki Eve Bir Adım Uzaktasınız</h1>
          <p className="mb-8 text-lg opacity-90">
            Size en uygun emlak seçeneklerini sunuyoruz. Kiralık, satılık daire ve işyeri ilanlarımızı inceleyin.
          </p>
          <Button size="lg" variant="secondary">
            İlanları İncele
          </Button>
        </div>
      </div>
    </div>
  )
}

