import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Hakkımızda</h3>
            <p className="mb-4 text-muted-foreground">
              20 yılı aşkın tecrübemizle gayrimenkul sektöründe güvenilir çözümler sunuyoruz.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Hızlı Bağlantılar</h3>
            <div className="flex flex-col gap-2">
              <Link href="/properties" className="text-muted-foreground hover:text-foreground">
                Satılık
              </Link>
              <Link href="/properties" className="text-muted-foreground hover:text-foreground">
                Kiralık
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                İletişim
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">İletişim</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Örnek Mahallesi, Örnek Sokak No:123</p>
              <p>Kadıköy/İstanbul</p>
              <p>0212 123 45 67</p>
              <p>info@emlakofisi.com</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Bülten</h3>
            <p className="mb-4 text-muted-foreground">
              Yeni ilanlar ve fırsatlardan haberdar olmak için bültenimize kayıt olun.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 rounded-md border bg-background px-3 py-2"
              />
              <Button type="submit">Kayıt Ol</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
          <p>© 2024 EmlakOfisi. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

