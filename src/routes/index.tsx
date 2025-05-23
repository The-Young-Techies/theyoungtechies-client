import AboutUs from '@/components/About'
import ContactUs from '@/components/ContactUs'
import GetStarted from '@/components/GetStarted'
import Header from '@/components/Header'
import OurApproach from '@/components/OurApproach'
import Project from '@/components/Project'
import Services from '@/components/Services'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main>
      <Header />
      <AboutUs />
      <OurApproach />
      <Project />
      <Services />
      <ContactUs />
      <GetStarted />
    </main>
  )
}
