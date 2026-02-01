'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Hero } from '@/components/sections/hero'
import { PracticeAreas } from '@/components/sections/practice-areas'
import { Features } from '@/components/sections/features'
import { CtaBanner } from '@/components/sections/cta-banner'
import { MobileContactBar } from '@/components/sections/mobile-contact-bar'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PracticeAreas />
      <Features />
      <CtaBanner />
      <MobileContactBar />
      <Footer />
    </main>
  )
}
