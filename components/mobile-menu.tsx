"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
        <Menu className="h-6 w-6" />
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between">
            <div></div>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close Menu">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="container grid gap-6 py-6">
            <Link href="#services" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="#projects" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#about" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#comparison" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
              Why Us
            </Link>
            <Link href="#contact" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
              Contact
            </Link>
            <Button asChild className="mt-4">
              <Link href="#contact" onClick={toggleMenu}>
                Get a Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}
