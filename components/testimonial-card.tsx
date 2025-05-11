import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] duration-300">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        <Quote className="h-5 w-5" />
      </div>
      <p className="mb-4 text-muted-foreground">{quote}</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}
