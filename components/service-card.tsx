import {
  Code,
  Palette,
  LayoutDashboard,
  LineChart,
  Search,
  Wrench,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

const iconMap: Record<string, LucideIcon> = {
  Code,
  Palette,
  LayoutDashboard,
  LineChart,
  Search,
  Wrench,
  Server,
  Smartphone,
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Code

  return (
    <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] duration-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        <IconComponent className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground mt-2">{description}</p>
    </div>
  )
}
