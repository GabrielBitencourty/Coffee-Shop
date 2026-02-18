'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ReservationsPage() {
  return (
    <main className="relative min-h-screen font-cormorant">

      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/background.png"
          alt="Coffee background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <section className="mx-auto max-w-3xl px-6 py-28">

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-dancing-script text-[#6D3B24]">
            Reserve your table
          </h1>
          <p className="mt-4 text-[#FEFEFE]/90">
            Book your table and enjoy a special coffee experience with us.
          </p>
        </header>

        <form className="bg-[#6F5B40]/90 backdrop-blur rounded-xl p-8 flex flex-col gap-6">

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label className="text-white">Name</Label>
              <Input placeholder="Your name" className="text-[#E6C36A]" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Email</Label>
              <Input type="email" placeholder="you@email.com" className="text-[#E6C36A]"/>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label className="text-white">Date</Label>
              <Input type="date" className="text-[#E6C36A]"/>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Time</Label>
              <Input type="time" className="text-[#E6C36A]"/>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-white">Number of people</Label>
            <Input type="number" min={1} max={10} placeholder="2"className="text-[#E6C36A]" />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-white">Message (optional)</Label>
            <Textarea placeholder="Any special request?" className="text-[#E6C36A]"/>
          </div>

          <Button className="mt-4 bg-[#6D3B24] hover:bg-[#5A2F1D] text-white">
            Confirm Reservation
          </Button>

        </form>
      </section>

    </main>
  )
}