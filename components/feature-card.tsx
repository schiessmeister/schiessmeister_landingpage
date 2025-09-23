import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 text-primary">{icon}</div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-balance">{title}</h3>
            <p className="text-muted-foreground text-pretty">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
