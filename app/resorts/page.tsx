import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Card } from '@/components/ui/Card'
import { CTA } from '@/components/sections/CTA'
import {
  Palmtree,
  Waves,
  DollarSign,
  Star,
  CheckCircle,
  Shield,
  Users,
  Sparkles,
} from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Resort Deals | Vayo Vault',
  description: 'Access wholesale all-inclusive resort rates in the Caribbean, Mexico, Hawaii, and worldwide. Save about 50% on luxury resorts.',
}

const benefits = [
  {
    icon: DollarSign,
    title: 'All-Inclusive Savings',
    description: 'Save up to 50% on all-inclusive resorts with meals, drinks, and activities included.',
  },
  {
    icon: Users,
    title: 'Family & Couples Resorts',
    description: 'From adults-only romantic getaways to family-friendly properties with kids clubs.',
  },
  {
    icon: Shield,
    title: 'Price Match Guarantee',
    description: 'Find a lower price within 24 hours? We\'ll match it and give you a $50 credit.',
  },
  {
    icon: Sparkles,
    title: 'Luxury at Wholesale',
    description: 'Access five-star resorts and premium brands at prices below public booking sites.',
  },
]

const resortTypes = [
  {
    name: 'All-Inclusive Resorts',
    description: 'Everything included: meals, drinks, activities, and entertainment at wholesale prices.',
    features: ['All meals included', 'Premium drinks', 'Water sports', 'Entertainment'],
    image: '/images/Resort.png',
  },
  {
    name: 'Beach Resorts',
    description: 'Oceanfront properties with private beaches and water activities.',
    features: ['Private beach access', 'Water sports', 'Beachfront dining', 'Ocean views'],
    image: '/images/Background-Beach.png',
  },
  {
    name: 'Luxury Resorts',
    description: 'Five-star properties with premium amenities, spas, and fine dining.',
    features: ['Spa facilities', 'Fine dining', 'Butler service', 'Premium rooms'],
    image: '/images/Background-HotelsOnBeach.png',
  },
]

const popularDestinations = [
  { name: 'Cancun & Riviera Maya', savings: 'Save up to 55%', image: '/images/Mexico.png' },
  { name: 'Caribbean Islands', savings: 'Save up to 50%', image: '/images/Background-Beach.png' },
  { name: 'Punta Cana', savings: 'Save up to 48%', image: '/images/Resort.png' },
  { name: 'Hawaii', savings: 'Save up to 45%', image: '/images/Background-HotelsOnBeach.png' },
  { name: 'Jamaica', savings: 'Save up to 52%', image: '/images/Mexico-1.png' },
  { name: 'Florida Keys', savings: 'Save up to 40%', image: '/images/Florida.png' },
]

const stats = [
  { value: '55%', label: 'Up to savings' },
  { value: '200+', label: 'Resort properties' },
  { value: 'All-Inclusive', label: 'Options available' },
  { value: '24/7', label: 'Member support' },
]

const resortAmenities = [
  'Multiple pools and hot tubs',
  'Private beach access',
  'On-site restaurants and bars',
  'Daily activities and entertainment',
  'Kids clubs and family programs',
  'Spa and wellness facilities',
  'Water sports equipment',
  'Fitness centers',
  'Room service',
  'Nightly entertainment',
  'Tennis and sports courts',
  'Concierge services',
]

export default function ResortsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="All-inclusive resorts at wholesale prices"
          description="Save about 50% on luxury resorts in the Caribbean, Mexico, Hawaii, and worldwide. Everything included at member-only rates."
          primaryCTA={{ text: 'Start Free Trial' }}
          backgroundImage="/images/Resort.png"
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
                  Why book resorts with Vayo Vault?
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Access wholesale all-inclusive inventory at prices public sites can't offer.
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

        {/* Resort Types */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Resorts for every vacation
                </h2>
                <p className="text-body-lg text-text-secondary">
                  From romantic couples retreats to family-friendly all-inclusives.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-12">
              {resortTypes.map((type, index) => (
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

        {/* Popular Destinations */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Popular resort destinations
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Discover wholesale resort rates in top vacation destinations worldwide.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDestinations.map((destination, index) => (
                <FadeIn key={destination.name} delay={index * 0.1}>
                  <Card padding="none" hover className="overflow-hidden group cursor-pointer">
                    <div className="relative h-64">
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-[24px] leading-[32px] font-semibold mb-2">
                          {destination.name}
                        </h3>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-body-sm font-semibold">
                          {destination.savings}
                        </div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Amenities */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  What's included at member resorts
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Most all-inclusive resorts include these amenities at no extra charge.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {resortAmenities.map((amenity, index) => (
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
