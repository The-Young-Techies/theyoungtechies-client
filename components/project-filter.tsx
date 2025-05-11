"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ProjectFilter() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web-development", label: "Web Development" },
    { id: "e-commerce", label: "E-Commerce" },
    { id: "corporate", label: "Corporate" },
    { id: "education", label: "Education" },
  ]

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-xl font-bold">Filter Projects</h2>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            size="sm"
            className={activeFilter === filter.id ? "bg-primary hover:bg-primary/90" : ""}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
