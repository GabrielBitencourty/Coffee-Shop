'use client'

import Link from "next/link"
import DescktopMenu from "./customComponents/descktopmenu"
import { MobileMenu } from "./customComponents/mobilemenu"

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background shadow-md shadow-[#6F5B40]">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3 text-[#FEFEFE]">

        <Link
          href="/"
          className="text-2xl font-bold font-dancing-script"
        >
          Coffee Shop
        </Link>

        <DescktopMenu />
        <MobileMenu />

      </div>
    </nav>
  )
}