import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { LogoCloud } from '@/components/sections/LogoCloud'
import { PlatformOverview } from '@/components/sections/PlatformOverview'
import { Features } from '@/components/sections/Features'
import { ProductDemo } from '@/components/sections/ProductDemo'
import { ValueProposition } from '@/components/sections/ValueProposition'
import { SavingsStats } from '@/components/sections/SavingsStats'
import { UseCases } from '@/components/sections/UseCases'
import { VideoShowcase } from '@/components/sections/VideoShowcase'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <LogoCloud />
        <PlatformOverview />
        <Features />
        <ProductDemo />
        <ValueProposition />
        <SavingsStats />
        <UseCases />
        <VideoShowcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}