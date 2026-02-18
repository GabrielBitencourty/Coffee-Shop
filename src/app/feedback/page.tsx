'use client'

import FeedbacksCards from "@/components/customComponents/FeedbacksCards"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function FeedbackPage() {
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
      </div>

      <section className="mx-auto max-w-7xl px-6 py-24 flex flex-col">
        <h1 className="text-4xl font-bold text-[#FEFEFE] text-center">
          Feedback from our clients
        </h1>
        <Separator className="my-4" />
        <FeedbacksCards />
      </section>
    </main>
  )
}