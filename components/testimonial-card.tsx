import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  club: string
}

export function TestimonialCard({ quote, author, club }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <blockquote className="text-lg mb-4 text-pretty">"{quote}"</blockquote>
        <div className="text-sm text-muted-foreground">
          <div className="font-semibold">{author}</div>
          <div>{club}</div>
        </div>
      </CardContent>
    </Card>
  )
}
