"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          EmlakOfisi
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6">
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
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" className="gap-2">
            <Phone className="h-4 w-4" />
            <span>0212 123 45 67</span>
          </Button>
          <Button asChild>
            <Link href="/contact">İlan Ver</Link>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="/properties" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
                Satılık
              </Link>
              <Link href="/properties" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
                Kiralık
              </Link>
              <Link href="/about" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
                İletişim
              </Link>
              <Button className="mt-4" asChild onClick={() => setIsOpen(false)}>
                <Link href="/contact">İlan Ver</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

