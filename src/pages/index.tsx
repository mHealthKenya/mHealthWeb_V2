import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import OurSolution from '@/components/Solutions/OurSolution'
import Footer from '@/components/Footer/Footer'
import Services from '@/components/Servicess/Services'
import Partners from '@/components/Parterns/Partners'
import Values from '@/components/Values/Values'
import Dedicated from '@/components/Dedicate/Dedicate'
import News from '@/components/News/News'
import Contact from '@/components/Contact/Contact'
// import IndexNavbar from '../components/Navbars/IndexNavbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* <IndexNavbar /> */}
    <Navbar />
    <Hero />
    <OurSolution />
    {/* <Services /> */}
    <Values />
    <Dedicated />
    <Partners />
    {/* <News /> */}
    <Contact />
    <Footer />
    </>
  )
}
