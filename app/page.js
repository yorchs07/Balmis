import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Values from '../components/Values'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Values />

      <Services />

      <Team />

      <Contact />

      <Footer />
    </main>
  )
}
