import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ProjectFilter from "@/components/project-filter"
import GeometricBackground from "@/components/geometric-background"
import { Mail, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import { projectsData } from "@/utils/data"

export default function ProjectsPage() {


  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-navy-blue py-16 md:py-24">
          <GeometricBackground />
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm text-primary mb-4">
                <span className="mr-1 rounded-full bg-primary h-2 w-2"></span>
                Our Portfolio
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">Our Projects</h1>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl">
                Explore our complete portfolio of web development projects that showcase our expertise and creativity.
              </p>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="mt-8 bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="container">
            <ProjectFilter />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {
                projectsData.map((project, projectIndex) => {
                  return (
                    <ProjectCard key={projectIndex}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tags={project.tags}
                      link={project.link}
                    />
                  )
                })
              }
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                <span className="mr-1 rounded-full bg-primary h-2 w-2"></span>
                Start Your Project
              </div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to Build Your Next Project?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                Contact us today to discuss how we can help bring your vision to life with our expert web development
                services.
              </p>
              <Button className="mt-8 bg-primary hover:bg-primary/90" size="lg" asChild>
                <Link href="/#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="The Young Techies Logo"
                  width={150}
                  height={40}
                  className="h-auto w-auto"
                />
              </Link>
              <p className="text-sm text-muted-foreground">
                We turn ideas into high-performance digital experiences with stunning websites, seamless UX, and
                blazing-fast performance.
              </p>
              <div className="mt-4 flex space-x-3">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
                <Link href="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Website Development
                </Link>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Website Design
                </Link>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Custom Admin Dashboard
                </Link>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  SEO Optimization
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">contact@theyoungtechies.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">+91 93102 56281</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-6">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} The Young Techies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
