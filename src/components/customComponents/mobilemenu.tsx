'use client'

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileMenu() {
  return (
      <div className=" md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="custom"
              className="md:hidden"
            >
              <Menu className="size-7"/>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="bg-[#6F5B40] font-cormorant text-[#FEFEFE] flex items-center justify-center w-64">
            <nav className="flex flex-col gap-4 mt-6">
              <Link href="/about" className="text-lg font-medium">
                About
              </Link>
              <Link href="/menu" className="text-lg font-medium">
                Menu
              </Link>
              <Link href="/feedback" className="text-lg font-medium">
                Clients Experiences
              </Link>
              <Link href="/reservations" className="text-lg font-medium">
                Reservations
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
  )
}
