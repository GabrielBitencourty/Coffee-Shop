'use client'

import Image from "next/image"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full font-cormorant overflow-hidden">

      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/background.png"
          alt="Coffee background"
          fill
          className="object-cover"
          priority
        />
      </div>

      
      <section className="mx-auto flex h-screen max-w-7xl items-center justify-between px-6">

        <div className="max-w-2xl text-[#FEFEFE] flex flex-col gap-8">

          <header>
            <p className="text-[#6F5B40]">#Coffee for hot days</p>
            <h1 className="font-dancing-script font-bold text-[#6D3B24] text-6xl md:text-8xl">
              Cold Brew
            </h1>
          </header>

          <p className="leading-relaxed text-base md:text-lg">
            Boosts your productivity and builds your energy levels with a glass
            of cold brew coffee in the morning. Coffee has a stimulating effect.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded bg-[#6F5B40] px-5 py-2 text-sm text-white transition-colors hover:bg-[#5A4732]">
              Order Now
            </button>

            <span className="text-2xl font-bold">$14.99</span>
            <span className="text-[#6F5B40] text-sm">Regular Price</span>
          </div>

        </div>

        <div className="hidden left-0 md:flex">
          <Image
            src="/assets/home.png"
            alt="Cold brew coffee"
            width={670}
            height={520}
            className="object-contain"
            priority
          />
        </div>

      </section>
    </main>
  )
}
