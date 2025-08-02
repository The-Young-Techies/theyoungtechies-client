import AboutFaqs from '@/components/about/AboutFaqs'
import AboutHeader from '@/components/about/AboutHeader'
import Belief from '@/components/about/Belief'
import AboutValues from '@/components/about/values'
import WhyChooseUs from '@/components/about/WhyChoose'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/')({
  component: AboutPage,
})

// Main About Page
function AboutPage() {
  return (
    <section
      id="about"
      className="bg-white text-black flex flex-col items-center"
    >
      <div className="container mx-auto flex flex-col items-center">
        <AboutHeader />
        <AboutValues/>
        <Belief />
        <WhyChooseUs/>
        <AboutFaqs/>
      </div>
    </section>
  )
}
