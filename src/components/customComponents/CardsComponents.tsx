'use client'

import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag } from "lucide-react"

export default function CardsComponents() {
  return (
        <div className="flex gap-4 items-center justify-between flex-wrap">
          <Card className="border-0 w-full max-w-sm pt-0 bg-[#6F5B40]">
              <img
                  src="/assets/menu/menu_coffee_item_1.jpg"
                  alt="Event cover"
                  className="rounded w-full object-cover"
              />
              <CardHeader className="font-cormorant ">
                  <CardAction>
                      <Badge variant="secondary" className="text-1xl">$12.99</Badge>
                  </CardAction>
                  <CardTitle className="text-xl">Espresso Coffee</CardTitle>
                  <CardDescription className="text-white">
                      A rich and bold coffee made by forcing hot water through finely-ground coffee beans, resulting in a concentrated and flavorful shot of coffee.
                  </CardDescription>
              </CardHeader>
              <CardFooter>
                  <Button className="w-full">
                      <ShoppingBag className="mr-2" />
                      Add to Cart</Button>
              </CardFooter>
          </Card>

          <Card className="border-0 w-full max-w-sm pt-0 bg-[#6F5B40]">
              <img
                  src="/assets/menu/menu_coffee_item_2.jpg"
                  alt="Event cover"
                  className="rounded w-full object-cover"
              />
              <CardHeader className="font-cormorant ">
                  <CardAction>
                      <Badge variant="secondary" className="text-1xl">$10.99</Badge>
                  </CardAction>
                  <CardTitle className="text-xl">Frappé Coffee</CardTitle>
                  <CardDescription className="text-white">
                      A refreshing coffee beverage made by steeping coarsely ground coffee beans in cold water for an extended period of time.
                  </CardDescription>
              </CardHeader>
              <CardFooter>
                  <Button className="w-full">
                      <ShoppingBag className="mr-2" />
                      Add to Cart</Button>
              </CardFooter>
          </Card>

          <Card className="border-0 w-full max-w-sm pt-0 bg-[#6F5B40]">
              <img
                  src="/assets/menu/menu_coffee_item_3.jpg"
                  alt="Event cover"
                  className="rounded w-full object-cover"
              />
              <CardHeader className="font-cormorant ">
                  <CardAction>
                      <Badge variant="secondary" className="text-1xl">$11.99</Badge>
                  </CardAction>
                  <CardTitle className="text-xl">Latte Coffee</CardTitle>
                  <CardDescription className="text-white">
                      A rich and bold coffee made by combining espresso with steamed milk and a small amount of foam.
                  </CardDescription>
              </CardHeader>
              <CardFooter>
                  <Button className="w-full">
                      <ShoppingBag className="mr-2" />
                      Add to Cart</Button>
              </CardFooter>
          </Card>

          <Card className="border-0 w-full max-w-sm pt-0 bg-[#6F5B40]">
              <img
                  src="/assets/menu/menu_coffee_item_4.jpg"
                  alt="Event cover"
                  className="rounded w-full object-cover"
              />
              <CardHeader className="font-cormorant ">
                  <CardAction>
                      <Badge variant="secondary" className="text-1xl">$12.99</Badge>
                  </CardAction>
                  <CardTitle className="text-xl">Mocha Coffee</CardTitle>
                  <CardDescription className="text-white">
                      A rich and bold coffee made by combining espresso with steamed milk and chocolate syrup. It is often topped with whipped cream.
                  </CardDescription>
              </CardHeader>
              <CardFooter>
                  <Button className="w-full">
                      <ShoppingBag className="mr-2" />
                      Add to Cart</Button>
              </CardFooter>
          </Card>

          <Card className="border-0 w-full max-w-sm pt-0 bg-[#6F5B40]">
              <img
                  src="/assets/menu/menu_coffee_item_5.jpg"
                  alt="Event cover"
                  className="rounded w-full object-cover"
              />
              <CardHeader className="font-cormorant ">
                  <CardAction>
                      <Badge variant="secondary" className="text-1xl">$14.99</Badge>
                  </CardAction>
                  <CardTitle className="text-xl">Macchiato Coffee</CardTitle>
                  <CardDescription className="text-white">
                      A delicious coffee beverage made by adding a small amount of steamed milk to a shot of espresso.
                  </CardDescription>
              </CardHeader>
              <CardFooter>
                  <Button className="w-full">
                      <ShoppingBag className="mr-2" />
                      Add to Cart</Button>
              </CardFooter>
          </Card>

          <Card className="border-0 w-full max-w-sm pt-0 bg-[#6F5B40]">
              <img
                  src="/assets/menu/menu_coffee_item_6.jpg"
                  alt="Event cover"
                  className="rounded w-full object-cover"
              />
              <CardHeader className="font-cormorant ">
                  <CardAction>
                      <Badge variant="secondary" className="text-1xl">$14.99</Badge>
                  </CardAction>
                  <CardTitle className="text-xl">Cold Brew Coffee</CardTitle>
                  <CardDescription className="text-white">
                        A refreshing coffee beverage made by steeping coarsely ground coffee beans in cold water for an extended period of time.
                  </CardDescription>
              </CardHeader>
              <CardFooter>
                  <Button className="w-full">
                      <ShoppingBag className="mr-2" />
                      Add to Cart</Button>
              </CardFooter>
          </Card>

          <Card className="border-0 w-full max-w-sm pt-0 bg-[#6F5B40]">
              <img
                  src="/assets/menu/menu_coffee_item_7.jpg"
                  alt="Event cover"
                  className="rounded w-full object-cover"
              />
              <CardHeader className="font-cormorant ">
                  <CardAction>
                      <Badge variant="secondary" className="text-1xl">$16.99</Badge>
                  </CardAction>
                  <CardTitle className="text-xl">Espresso Especiale</CardTitle>
                  <CardDescription className="text-white">
                         A rich and bold coffee made by forcing hot water through finely-ground coffee beans, resulting in a concentrated and flavorful shot of coffee.
                  </CardDescription>
              </CardHeader>
              <CardFooter>
                  <Button className="w-full">
                      <ShoppingBag className="mr-2" />
                      Add to Cart</Button>
              </CardFooter>
          </Card>

          <Card className="border-0 w-full max-w-sm pt-0 bg-[#6F5B40]">
              <img
                  src="/assets/menu/menu_coffee_item_8.jpg"
                  alt="Event cover"
                  className="rounded w-full object-cover"
              />
              <CardHeader className="font-cormorant ">
                  <CardAction>
                      <Badge variant="secondary" className="text-1xl">$16.99</Badge>
                  </CardAction>
                  <CardTitle className="text-xl">Espresso Choco Especiale</CardTitle>
                  <CardDescription className="text-white">
                         A rich and bold coffee made by forcing hot water through finely-ground coffee beans, resulting in a concentrated and flavorful shot of coffee.
                  </CardDescription>
              </CardHeader>
              <CardFooter>
                  <Button className="w-full">
                      <ShoppingBag className="mr-2" />
                      Add to Cart</Button>
              </CardFooter>
          </Card>
        </div>
  )
}