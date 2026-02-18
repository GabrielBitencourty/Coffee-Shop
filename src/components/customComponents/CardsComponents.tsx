'use client'

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag } from "lucide-react"
import { menuItems } from "@/data/menu-items"

export default function CardsComponents() {
  return (
    <div
      className="
            grid
            gap-10
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
        "
    >
      {menuItems.map((item) => (
        <Card
          key={item.title}
          className="border-0 bg-[#6F5B40] pt-0"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded-top rounded-xl"
          />

          <CardHeader className="font-cormorant">
            <CardAction>
              <Badge variant="custom">
                {item.price}
              </Badge>
            </CardAction>

            <CardTitle className="text-xl text-white">
              {item.title}
            </CardTitle>

          </CardHeader>

          <CardFooter>
            <Button className="w-full">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
