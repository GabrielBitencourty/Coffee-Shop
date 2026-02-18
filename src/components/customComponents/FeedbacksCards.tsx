'use client'

import { clientsFeedback } from "@/data/clientsFeedback"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Star } from "lucide-react"

export default function FeedbacksCards() {
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
      {clientsFeedback.map((item) => (
        <Card
          key={item.userName}
          className="border-0 bg-[#6F5B40]"
        >

          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar>
              <AvatarImage
                src={item.avatar}
                alt={item.userName}
                className="object-cover"
              />
              <AvatarFallback>
                {item.userName.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="font-bold text-[#C8A26A]">
                {item.userName}
              </p>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(item.userRate)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              {item.comment}
            </p>
          </CardContent>

        </Card>
      ))}
    </div>
  )
}
