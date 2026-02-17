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
        gap-8
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {menuItems.map((item) => (
        <Card
          key={item.title}
          className="border-0 bg-[#6F5B40]"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded-t"
          />

          <CardHeader className="font-cormorant">
            <CardAction>
              <Badge variant="secondary">
                {item.price}
              </Badge>
            </CardAction>

            <CardTitle className="text-xl text-white">
              {item.title}
            </CardTitle>

            <CardDescription className="text-white/80">
              {item.description}
            </CardDescription>
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
