import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import ComparisonSection from "@/components/comparison-section"
import ProjectCard from "@/components/project-card"
import TestimonialCard from "@/components/testimonial-card"
import AboutSection from "@/components/about-section"
import GeometricBackground from "@/components/geometric-background"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-navy-blue py-20 md:py-32">
          <GeometricBackground />
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-border/40 bg-background/95 px-3 py-1 text-sm">
                  <span className="mr-1 rounded-full bg-accent h-2 w-2"></span>
                  Web Development Agency
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                  Need a Website That Works For You?
                </h1>
                <p className="text-xl text-gray-300">
                  We turn ideas into high-performance digital experiences with stunning websites, seamless UX, and
                  blazing-fast performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white">
                    <Link href="#contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Link href="#services">
                      Our Services <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] w-full rounded-lg bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-1 shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <Image src="/header-right.jpg" alt="Web Development" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
          <AboutSection />
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                <span className="mr-1 rounded-full bg-primary h-2 w-2"></span>
                What We Offer
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
                We provide end-to-end web development solutions to help your business thrive in the digital world.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Website Development"
                description="Custom-built websites that are tailored to your specific business needs and goals."
                icon="Code"
              />
              <ServiceCard
                title="Website Design"
                description="Beautiful, intuitive designs that enhance user experience and reflect your brand identity."
                icon="Palette"
              />
              <ServiceCard
                title="Custom Admin Dashboard"
                description="Powerful admin interfaces that make managing your website content simple and efficient."
                icon="LayoutDashboard"
              />
              <ServiceCard
                title="Performance Auditing"
                description="Comprehensive analysis to identify and fix performance bottlenecks in your website."
                icon="LineChart"
              />
              <ServiceCard
                title="SEO Optimization"
                description="Strategic optimization to improve your website's visibility in search engine results."
                icon="Search"
              />
              <ServiceCard
                title="Website Maintenance"
                description="Regular updates and maintenance to keep your website secure, fast, and up-to-date."
                icon="Wrench"
              />
              <ServiceCard
                title="Web Hosting"
                description="Reliable, high-performance hosting solutions to ensure your website is always available."
                icon="Server"
              />
              <ServiceCard
                title="Mobile Responsiveness"
                description="Websites that look and function perfectly on all devices, from desktops to smartphones."
                icon="Smartphone"
              />
              <div className="flex flex-col items-center justify-center p-8 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Need a Custom Service?</h3>
                <p className="text-center text-muted-foreground mt-2">
                  Contact us to discuss your specific requirements
                </p>
                <Button className="mt-6 bg-accent hover:bg-accent/90" asChild>
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-20 bg-navy-blue text-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm text-primary mb-4">
                <span className="mr-1 rounded-full bg-primary h-2 w-2"></span>
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">The Difference We Make</h2>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl">
                See the clear difference between working with us and settling for less.
              </p>
            </div>
            <ComparisonSection />
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                <span className="mr-1 rounded-full bg-primary h-2 w-2"></span>
                Our Work
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
                Check out some of our recent work that showcases our expertise and creativity.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="TRYST 2025 - Cultural Fest Website"
                description="Modern event platform with smooth user flow, real-time updates, and seamless registrations for Delhi University's annual fest."
                image="/images/tryst-fest-website.png"
                tags={["Event Tech", "University Fest", "UI/UX"]}
                link="https://tryst-website.vercel.app/"
              />
              <ProjectCard
                title="SkillsYard - Learning Platform"
                description="Comprehensive learning platform supporting skill-based courses, integrated payments, and mobile-friendly design."
                image="/images/skillsyard-website.png"
                tags={["EdTech", "Online Learning", "Payments"]}
                link="https://skillsyard.com/"
              />
              <ProjectCard
                title="Cancer Heal - Medical Website"
                description="Clean and trustworthy website presenting medical services, expert team, and company milestones with clear CTAs."
                image="/images/cancerheal-website.png"
                tags={["Healthcare", "Company Profile", "Professional"]}
                link="https://cancerheal.co.in/"
              />
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild className="group">
                <Link href="/projects">
                  View All Projects{" "}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-muted/30">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                <span className="mr-1 rounded-full bg-primary h-2 w-2"></span>
                Client Feedback
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
                Don't just take our word for it - hear from some of our satisfied clients.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              <TestimonialCard
                quote="The Young Techies delivered our event website with great UI, flawless registration flow, and real-time updates. It truly elevated our fest."
                author="Keshav Mahavidyalaya"
                role="University Organizing Committee"
              />

              <TestimonialCard
                quote="They crafted a professional and reliable online presence for us, highlighting our services and trust. Our patients love it!"
                author="Cancer Heal"
                role="Healthcare Brand"
              />

              <TestimonialCard
                quote="Our listings look sharp, search is lightning-fast, and users are finding hotels more easily than ever. Exceptional delivery!"
                author="Hotelswale.com"
                role="Travel Platform"
              />

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-blue text-white">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm text-primary mb-4">
                <span className="mr-1 rounded-full bg-primary h-2 w-2"></span>
                Get Started
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                Let's turn your ideas into high-performance digital experiences that stand out from the competition.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="default" asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="#contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  <Link href="#services">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  <span className="mr-1 rounded-full bg-primary h-2 w-2"></span>
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Have a project in mind? Fill out the form and we'll get back to you as soon as possible.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email us at</p>
                      <p className="text-muted-foreground">contact@theyoungtechies.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Call us at</p>
                      <p className="text-muted-foreground">+91 93102 56281</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">Why choose us?</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Stunning websites with seamless user experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>High-speed performance and optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Responsive designs that work on all devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Quick turnaround times and reliable support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="website-development">Website Development</option>
                      <option value="website-design">Website Design</option>
                      <option value="custom-admin-dashboard">Custom Admin Dashboard</option>
                      <option value="performance-auditing">Performance Auditing</option>
                      <option value="seo-optimization">SEO Optimization</option>
                      <option value="website-maintenance">Website Maintenance</option>
                      <option value="web-hosting">Web Hosting</option>
                      <option value="mobile-responsiveness">Mobile Responsiveness</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
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
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
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
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
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
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
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
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
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
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Services
                </Link>
                <Link href="/#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Projects
                </Link>
                <Link href="/#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Website Development
                </Link>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Website Design
                </Link>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Custom Admin Dashboard
                </Link>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  SEO Optimization
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">contact@theyoungtechies.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
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
