'use client'

import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="w-full py-24 px-6 font-cormorant">
       <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/background.png"
          alt="Coffee background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 items-center">

        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold font-dancing-script text-[#6D3B24]">
            A little about us
          </h1>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#6F5B40]">
              Our Story
            </h2>
            <p className="text-[#FEFEFE] leading-relaxed">
              Founded in 2020, our coffee shop was born out of a love for great coffee
              and a desire to create a space where people can connect and unwind.
              What started as a small local café has grown into a beloved community hub.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#6F5B40]">
              Our Mission
            </h2>
            <p className="text-[#FEFEFE] leading-relaxed">
              Our mission is to offer high-quality coffees, prepared with care,
              creating a welcoming environment where people can slow down
              and enjoy the moment.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#6F5B40]">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-[#FEFEFE] space-y-2">
              <li><strong>Quality:</strong> We source the best beans and craft exceptional coffee.</li>
              <li><strong>Community:</strong> A warm and inclusive space for everyone.</li>
              <li><strong>Sustainability:</strong> Ethical sourcing and eco-friendly practices.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#6F5B40]">
              What makes our coffee special?
            </h2>
            <ul className="list-disc list-inside text-[#FEFEFE] space-y-2">
              <li>Beans sourced from sustainable farms worldwide.</li>
              <li>Baristas trained to extract the best from every cup.</li>
              <li>Multiple brewing methods for unique experiences.</li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  )
}
