'use client'



import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import DownloadCTA from '@/components/DownloadCTA'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Features />
        <Benefits />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  )
}