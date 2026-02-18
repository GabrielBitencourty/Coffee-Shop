import { ShoppingBag } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import Link from "next/link";

export default function DescktopMenu() {
    return (
        <div className="mx-auto flex font-cormorant h-16 max-w-7xl items-center justify-between px-4 text-[#F5F5F5]">
            <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="gap-6">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                               href="/about" className="text-xl">
                                About
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/menu" className="text-xl">
                                Menu
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/feedback" className="text-xl">
                                Clients Experiences
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/reservations" className="text-xl">
                                Reservations
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}