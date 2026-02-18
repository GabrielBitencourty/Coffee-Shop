'use client'

import CardsComponents from "@/components/customComponents/CardsComponents"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function MenuPage() {
  return (
    <main className="w-full py-20 px-6 font-dancing-script">
      <div className="fixed inset-0 -z-10">
              <Image
                src="/assets/background.png"
                alt="Coffee background"
                fill
                className="object-cover"
                priority
              />
            </div>
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        
        <div className="flex flex-col items-center pt-4">
          <h1 className="text-4xl font-bold text-[#6F5B40]">
            Our Menu
          </h1>
          <Separator className="my-4" />
        </div>

        <CardsComponents />

      </div>
    </main>
  )
}
