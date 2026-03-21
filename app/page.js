import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Services />

      <Team />

      <Contact />

      <Footer />
    </main>
  )
}
