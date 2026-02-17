'use client'

import Link from "next/link"
import DescktopMenu from "./customComponents/descktopmenu"
import { MobileMenu } from "./customComponents/mobilemenu"

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-background shadow shadow-[#6F5B40] text-[#FEFEFE] p-2">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-dancing-script">Coffee Shop</Link>
                <DescktopMenu />
                <MobileMenu />
            </div>
        </nav>
    )
}