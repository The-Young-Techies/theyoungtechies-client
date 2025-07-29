import AboutUs from '@/components/home/About/About'
import ContactUs from '@/components/home/Contact/ContactUs'
import GetStarted from '@/components/common/GetStarted'
import Header from '@/components/home/Header/Header'
import Services from '@/components/home/Services/Services'
import ServiceCarousel from '@/components/common/Carousel'
import FaqSection from '@/components/home/Faq/Faqs'
import { createFileRoute } from '@tanstack/react-router'
import Counter from '@/components/home/Counter/Counter'
import OurApproach from '@/components/home/Approach/OurApproach'
import ProjectsSection from '@/components/home/Projects/Project'

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
      <Counter/>
      <ProjectsSection />
      <Services />
      <GetStarted />
      {/* <TeamMember /> */}
      
      <FaqSection />
      <ContactUs />
    </main>
  )
}
