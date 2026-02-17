'use client'

import CardsComponents from "@/components/customComponents/CardsComponents"
import { Separator } from "@/components/ui/separator"

export default function MenuPage() {
    return (
    <div className="flex flex-col items-center mt-50 mb-35 justify-center p-6 font-dancing-script w-full h-screen">
        <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col justify-center items-center w-full">
                 <h1 className="text-4xl font-bold text-[#6F5B40]">Our Menu</h1>
                <Separator className="my-4 w-lg"/>
            </div>
            <CardsComponents />
        </div>
    </div>
    )
}