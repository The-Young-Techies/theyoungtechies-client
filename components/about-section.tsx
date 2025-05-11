import Image from "next/image"
import { Users, Award, Clock, Zap } from "lucide-react"

export default function AboutSection() {
  return (
    <div className="container">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
          <span className="mr-1 rounded-full bg-primary h-2 w-2"></span>
          Who We Are
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About The Young Techies</h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
          We're a team of passionate web developers and designers dedicated to creating exceptional digital experiences.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
          <Image src="https://img.freepik.com/premium-photo/businessman-holding-hand-drawn-lightbulb_117023-599.jpg?ga=GA1.1.788622246.1712223675&semt=ais_hybrid&w=740" alt="The Young Techies Team" fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Our Story</h3>
          <p className="text-muted-foreground">
            The Young Techies was founded with a simple mission: to help businesses and organizations establish a
            powerful online presence through high-quality, high-performance websites.
          </p>
          <p className="text-muted-foreground">
            What started as a small team of tech enthusiasts has grown into a full-service web development agency,
            delivering exceptional digital solutions to clients across various industries.
          </p>
          <p className="text-muted-foreground">
            Our first major project was developing the website for TRYST 2025, the annual cultural fest of Keshav
            Mahavidyalaya, Delhi University. The success of this project launched us into the spotlight, and we've been
            growing ever since.
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Expert Team</h3>
          <p className="mt-2 text-muted-foreground">
            Our team consists of skilled developers, designers, and digital strategists.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
            <Award className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Quality Focus</h3>
          <p className="mt-2 text-muted-foreground">
            We're committed to delivering the highest quality in every project we undertake.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
            <Clock className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Rapid Delivery</h3>
          <p className="mt-2 text-muted-foreground">
            We pride ourselves on quick turnaround times without compromising on quality.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Performance</h3>
          <p className="mt-2 text-muted-foreground">
            We build websites that are not just beautiful, but blazing fast and optimized.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex flex-col items-center text-center mb-12">
          <h3 className="text-2xl font-bold">Our Approach</h3>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            We follow a collaborative, client-centered approach to ensure that every project meets and exceeds
            expectations.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="relative p-8 rounded-lg border bg-white shadow-sm">
            <div className="absolute -top-5 -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
              1
            </div>
            <h4 className="text-xl font-bold mb-4">Discovery</h4>
            <p className="text-muted-foreground">
              We start by understanding your business, goals, and target audience to create a tailored strategy.
            </p>
          </div>
          <div className="relative p-8 rounded-lg border bg-white shadow-sm">
            <div className="absolute -top-5 -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
              2
            </div>
            <h4 className="text-xl font-bold mb-4">Design & Development</h4>
            <p className="text-muted-foreground">
              Our team creates beautiful designs and develops them into high-performance, responsive websites.
            </p>
          </div>
          <div className="relative p-8 rounded-lg border bg-white shadow-sm">
            <div className="absolute -top-5 -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
              3
            </div>
            <h4 className="text-xl font-bold mb-4">Delivery & Support</h4>
            <p className="text-muted-foreground">
              We launch your website and provide ongoing support to ensure it continues to perform at its best.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
