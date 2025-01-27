import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PropertyTable } from "@/components/property-table"

export default function AdminPropertiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">İlan Yönetimi</h1>
        <Button asChild>
          <Link href="/admin/properties/new">
            <Plus className="mr-2 h-4 w-4" />
            Yeni İlan
          </Link>
        </Button>
      </div>
      <PropertyTable />
    </div>
  )
}

