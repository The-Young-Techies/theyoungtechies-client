import AboutUs from '@/components/About'
import ContactUs from '@/components/ContactUs'
import GetStarted from '@/components/GetStarted'
import Header from '@/components/Header'
import OurApproach from '@/components/OurApproach'
import Project from '@/components/Project'
import Services from '@/components/Services'
import ServiceCarousel from '@/components/Carousel'
import TeamMember from '@/components/Team'
import FaqSection from '@/components/Faqs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main>
      <Header />
      <ServiceCarousel />
      <AboutUs />
      <OurApproach />
      <Project />
      <Services />
      <GetStarted />
      <TeamMember />
      <FaqSection />
      <ContactUs />
    </main>
  )
}
