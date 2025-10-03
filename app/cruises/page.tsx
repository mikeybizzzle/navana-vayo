import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Card } from '@/components/ui/Card'
import { CTA } from '@/components/sections/CTA'
import {
  Anchor,
  Waves,
  DollarSign,
  Star,
  CheckCircle,
  Shield,
  Globe,
  Sparkles,
} from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Cruise Deals | Vayo Vault',
  description: 'Access wholesale cruise rates on all major cruise lines. Save 40-50% on Caribbean, Alaska, Mediterranean, and worldwide cruises.',
}

const benefits = [
  {
    icon: DollarSign,
    title: 'Wholesale Cruise Rates',
    description: 'Save 40-50% on cruise cabins with bulk-purchased inventory from all major lines.',
  },
  {
    icon: Globe,
    title: 'All Destinations',
    description: 'Caribbean, Alaska, Mediterranean, Pacific, and exotic destinations worldwide.',
  },
  {
    icon: Shield,
    title: 'Price Match Guarantee',
    description: 'Find a lower price within 24 hours? We\'ll match it and give you a $50 credit.',
  },
  {
    icon: Sparkles,
    title: 'Cabin Upgrades',
    description: 'Access discounted cabin upgrades including balconies, suites, and premium locations.',
  },
]

const cruiseTypes = [
  {
    name: 'Caribbean Cruises',
    description: 'Explore tropical islands with sun, beaches, and crystal-clear waters on 3-14 day voyages.',
    features: ['7-day sailings', 'Multiple islands', 'All-inclusive dining', 'Water activities'],
    image: '/images/Cruiseship.png',
  },
  {
    name: 'Alaska Cruises',
    description: 'Witness glaciers, wildlife, and stunning fjords on unforgettable Alaska sailings.',
    features: ['Glacier viewing', 'Wildlife encounters', 'Scenic routes', '7-14 day cruises'],
    image: '/images/Background-Cruise.png',
  },
  {
    name: 'Mediterranean Cruises',
    description: 'Visit historic European ports and experience culture, cuisine, and ancient cities.',
    features: ['Multiple countries', 'Historic ports', 'Cultural experiences', '10-14 days'],
    image: '/images/Cruiseship 2.png',
  },
]

const cruiseLines = [
  'Royal Caribbean',
  'Carnival Cruise Line',
  'Norwegian Cruise Line',
  'Princess Cruises',
  'Celebrity Cruises',
  'MSC Cruises',
  'Holland America',
  'Disney Cruise Line',
  'Viking Ocean',
  'Oceania Cruises',
]

const cabinTypes = [
  {
    name: 'Interior Cabins',
    description: 'Budget-friendly cabins with all the amenities at the lowest rates.',
  },
  {
    name: 'Ocean View',
    description: 'Cabins with windows offering views of the ocean and ports.',
  },
  {
    name: 'Balcony Cabins',
    description: 'Private balconies to enjoy ocean breezes and stunning views.',
  },
  {
    name: 'Suites',
    description: 'Premium accommodations with extra space and exclusive perks.',
  },
]

const stats = [
  { value: '50%', label: 'Up to savings' },
  { value: 'All Lines', label: 'Major cruise lines' },
  { value: 'Worldwide', label: 'Destinations' },
  { value: '3-21 Days', label: 'Cruise lengths' },
]

const includedAmenities = [
  'All meals and dining',
  'Entertainment shows',
  'Pools and hot tubs',
  'Fitness centers',
  'Kids clubs and activities',
  'Evening entertainment',
  'Most onboard activities',
  'Room service',
  'Port talks and lectures',
  'Deck parties',
]

const popularRoutes = [
  { name: 'Eastern Caribbean', duration: '7 days', image: '/images/Cruiseship.png' },
  { name: 'Western Caribbean', duration: '7 days', image: '/images/Background-Cruise.png' },
  { name: 'Alaska Inside Passage', duration: '7 days', image: '/images/Cruiseship 2.png' },
  { name: 'Mediterranean', duration: '10-14 days', image: '/images/Italy.png' },
  { name: 'Mexican Riviera', duration: '7 days', image: '/images/Mexico.png' },
  { name: 'Bahamas', duration: '3-5 days', image: '/images/Cruiseship.png' },
]

export default function CruisesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Cruise deals at wholesale prices"
          description="Save 40-50% on cruises to the Caribbean, Alaska, Mediterranean, and beyond. Access member-only cabin rates on all major cruise lines."
          primaryCTA={{ text: 'Start Free Trial' }}
          backgroundImage="/images/Cruiseship.png"
        />

        {/* Stats */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 0.1}>
                  <Card padding="lg" className="text-center">
                    <div className="text-[36px] leading-[44px] font-display font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-body-sm text-text-secondary">{stat.label}</div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Why book cruises with Vayo Vault?
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Access wholesale cruise cabin inventory at prices public sites can't offer.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <FadeIn key={benefit.title} delay={index * 0.1}>
                  <Card padding="lg" className="h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-body-md text-text-secondary">
                      {benefit.description}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Cruise Types */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Popular cruise destinations
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Explore the world's most beautiful destinations at wholesale cruise rates.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-12">
              {cruiseTypes.map((type, index) => (
                <FadeIn key={type.name} delay={index * 0.2}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <h3 className="text-[32px] leading-[40px] font-display font-semibold text-primary-dark mb-4">
                        {type.name}
                      </h3>
                      <p className="text-body-lg text-text-secondary mb-6">
                        {type.description}
                      </p>
                      <div className="space-y-3">
                        {type.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-body-md text-text-primary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="rounded-3xl overflow-hidden shadow-xl relative aspect-[4/3]">
                        <Image
                          src={type.image}
                          alt={type.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Popular Routes */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Popular cruise routes
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Save on the most popular cruise routes and destinations worldwide.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularRoutes.map((route, index) => (
                <FadeIn key={route.name} delay={index * 0.1}>
                  <Card padding="none" hover className="overflow-hidden group cursor-pointer">
                    <div className="relative h-64">
                      <Image
                        src={route.image}
                        alt={route.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-[24px] leading-[32px] font-semibold mb-2">
                          {route.name}
                        </h3>
                        <div className="flex items-center gap-2 text-body-sm">
                          <Anchor className="w-4 h-4" />
                          <span>{route.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Cabin Types */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Cabin types at wholesale rates
                </h2>
                <p className="text-body-lg text-text-secondary">
                  From budget-friendly interior cabins to luxury suites with balconies.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cabinTypes.map((cabin, index) => (
                <FadeIn key={cabin.name} delay={index * 0.1}>
                  <Card padding="lg" className="h-full">
                    <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                      {cabin.name}
                    </h3>
                    <p className="text-body-md text-text-secondary">
                      {cabin.description}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Cruise Lines */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  All major cruise lines
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Access wholesale rates from leading cruise lines worldwide.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {cruiseLines.map((line, index) => (
                <FadeIn key={line} delay={index * 0.05}>
                  <Card padding="lg" className="text-center">
                    <div className="text-[16px] leading-[24px] font-semibold text-primary-dark">
                      {line}
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* What's Included */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  What's included in your cruise
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Most cruises include these amenities in your fare.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {includedAmenities.map((amenity, index) => (
                <FadeIn key={amenity} delay={index * 0.05}>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-background-light">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-body-md text-text-primary">{amenity}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
