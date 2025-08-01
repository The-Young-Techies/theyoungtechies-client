import { createFileRoute } from '@tanstack/react-router'
import { Users, Target, Award, Lightbulb } from 'lucide-react'

export const Route = createFileRoute('/about/')({
  component: AboutPage,
})

// Hero/Intro Section
function AboutHero() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h2 className="text-h6 md:text-h5 xl:text-h3 font-bold leading-tight">
        About <span className="text-[#3468E9]">Us</span>
      </h2>
      <p className="text-gray-600 mt-4 text-lg">
        Driven by innovation and a passion for helping businesses grow, our diverse team crafts digital solutions that empower organizations to lead in their industries.
      </p>
    </div>
  )
}

// Core Values Section
function CoreValues() {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      desc: "We hold ourselves to the highest standards in every project.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Collaboration",
      desc: "We partner closely with our clients for shared success.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      desc: "We embrace new technologies and creative thinking.",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Focus",
      desc: "Your business goals drive every strategy and solution.",
    },
  ]
  return (
    <section className="w-full max-w-5xl mx-auto mt-12">
      <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, i) => (
          <div key={i} className="bg-white border rounded-2xl shadow-sm px-6 py-8 flex flex-col items-center text-center hover:shadow-lg transition">
            <div className="mb-4">{value.icon}</div>
            <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
            <p className="text-gray-500 text-sm">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// Team Spotlight Section
function TeamSpotlight() {
  // Example; replace with your real team data
  const team = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Priya Singh",
      role: "UX Designer",
      img: "https://randomuser.me/api/portraits/women/43.jpg",
    },
    {
      name: "David Kim",
      role: "Project Manager",
      img: "https://randomuser.me/api/portraits/men/54.jpg",
    },
  ]
  return (
    <section className="w-full max-w-5xl mx-auto mt-16">
      <h3 className="text-2xl font-bold text-center mb-8">Meet the Team</h3>
      <div className="flex flex-wrap gap-8 justify-center">
        {team.map((m, i) => (
          <div key={i} className="bg-white border rounded-xl shadow px-6 py-6 flex flex-col items-center hover:shadow-lg transition w-60">
            <img src={m.img} alt={m.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100" />
            <div className="font-semibold text-lg">{m.name}</div>
            <div className="text-blue-700 text-sm mb-1">{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Key Numbers / Why Choose Us Section
function KeyNumbers() {
  const stats = [
    {
      value: "50+",
      label: "Successful Projects",
    },
    {
      value: "20+",
      label: "Industries Served",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "10+",
      label: "Skilled Professionals",
    },
  ]
  return (
    <section className="w-full max-w-4xl mx-auto mt-16">
      <h3 className="text-2xl font-bold text-center mb-6">Why Choose Us?</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-extrabold text-[#3468E9]">{s.value}</div>
            <div className="text-gray-600 font-medium text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Main About Page
function AboutPage() {
  return (
    <section
      id="about"
      className="bg-white text-black my-20 mt-10 px-6 sm:px-10 md:px-14 lg:px-16 flex flex-col items-center"
    >
      <div className="container mx-auto flex flex-col items-center">
        <AboutHero />
        <CoreValues />
        <TeamSpotlight />
        <KeyNumbers />
      </div>
    </section>
  )
}
