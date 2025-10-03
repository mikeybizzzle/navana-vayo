import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { HotDeals } from '@/components/sections/HotDeals'
import { SavingsExamples } from '@/components/sections/SavingsExamples'
import { LuxuryComparison } from '@/components/sections/LuxuryComparison'
import { MembershipComparison } from '@/components/sections/MembershipComparison'
import { CuratedCollections } from '@/components/sections/CuratedCollections'
import { MemberReviews } from '@/components/sections/MemberReviews'
import { LogoCloud } from '@/components/sections/LogoCloud'
import { Features } from '@/components/sections/Features'
import { FeaturedDestinations } from '@/components/sections/FeaturedDestinations'
import { ValueProposition } from '@/components/sections/ValueProposition'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <LogoCloud />
        <HowItWorks />
        <HotDeals />
        <SavingsExamples />
        <LuxuryComparison />
        <Features />
        <CuratedCollections />
        <MembershipComparison />
        <FeaturedDestinations />
        <MemberReviews />
        <ValueProposition />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}