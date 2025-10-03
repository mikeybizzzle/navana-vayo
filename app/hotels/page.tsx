import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Card } from '@/components/ui/Card'
import { CTA } from '@/components/sections/CTA'
import {
  Building2,
  MapPin,
  DollarSign,
  Star,
  CheckCircle,
  Shield,
  Clock,
  Globe,
} from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Hotel Deals | Vayo Vault',
  description: 'Access wholesale hotel rates in major cities worldwide. Save about 50% on business and leisure hotels with member-only pricing.',
}

const benefits = [
  {
    icon: DollarSign,
    title: 'Wholesale Pricing',
    description: 'Access bulk-purchased hotel inventory at rates up to 50% below public booking sites.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Book hotels in 150+ countries with consistent wholesale pricing worldwide.',
  },
  {
    icon: Shield,
    title: 'Price Match Guarantee',
    description: 'Find a lower price within 24 hours? We\'ll match it and give you a $50 credit.',
  },
  {
    icon: Clock,
    title: 'Instant Confirmation',
    description: 'Book hotels instantly with immediate confirmation and no waiting.',
  },
]

const hotelTypes = [
  {
    name: 'Business Hotels',
    description: 'Downtown locations, meeting rooms, and business amenities at wholesale rates.',
    features: ['Free WiFi', 'Meeting rooms', 'Airport shuttle', 'Business centers'],
    image: '/images/Hotel Room.png',
  },
  {
    name: 'Boutique Hotels',
    description: 'Unique properties with character and charm at member-only prices.',
    features: ['Unique design', 'Local experience', 'Personalized service', 'Prime locations'],
    image: '/images/Background-HotelsOnBeach.png',
  },
  {
    name: 'Luxury Hotels',
    description: 'Five-star properties and luxury brands at significant discounts.',
    features: ['Premium amenities', 'Concierge service', 'Fine dining', 'Spa facilities'],
    image: '/images/Background-Condo.png',
  },
]

const popularDestinations = [
  { city: 'New York', savings: 'Save 45%', image: '/images/newyork.png' },
  { city: 'Los Angeles', savings: 'Save 40%', image: '/images/losangeles.png' },
  { city: 'Miami', savings: 'Save 50%', image: '/images/miami.png' },
  { city: 'Orlando', savings: 'Save 48%', image: '/images/orlando.png' },
  { city: 'Paris', savings: 'Save 42%', image: '/images/paris.png' },
  { city: 'Dallas', savings: 'Save 38%', image: '/images/dallas.png' },
]

const stats = [
  { value: '50%', label: 'Average hotel savings' },
  { value: '150+', label: 'Countries covered' },
  { value: '24/7', label: 'Booking available' },
  { value: 'Instant', label: 'Confirmation' },
]

export default function HotelsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Hotel deals at wholesale prices"
          description="Access members-only hotel rates in major cities worldwide. Save about 50% on business and leisure hotels."
          primaryCTA={{ text: 'Start Free Trial' }}
          backgroundImage="/images/Hotel Room.png"
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
                  Why book hotels with Vayo Vault?
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Access wholesale hotel inventory that public booking sites can't show.
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

        {/* Hotel Types */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Hotels for every trip
                </h2>
                <p className="text-body-lg text-text-secondary">
                  From business travel to luxury getaways, access wholesale rates on all hotel types.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-12">
              {hotelTypes.map((type, index) => (
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
                  Popular hotel destinations
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Discover wholesale hotel rates in cities around the world.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDestinations.map((destination, index) => (
                <FadeIn key={destination.city} delay={index * 0.1}>
                  <Card padding="none" hover className="overflow-hidden group cursor-pointer">
                    <div className="relative h-64">
                      <Image
                        src={destination.image}
                        alt={destination.city}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-5 h-5" />
                          <h3 className="text-[24px] leading-[32px] font-semibold">
                            {destination.city}
                          </h3>
                        </div>
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

        {/* How It Works */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  How hotel booking works
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Search member-only inventory',
                  description: 'Enter your destination and dates to see wholesale hotel rates not available to the public.',
                },
                {
                  step: '2',
                  title: 'Compare and select',
                  description: 'View detailed hotel information, amenities, and instant pricing. Compare wholesale rates to public sites.',
                },
                {
                  step: '3',
                  title: 'Book with instant confirmation',
                  description: 'Complete your booking and receive immediate confirmation. Check-in details sent within minutes.',
                },
              ].map((step, index) => (
                <FadeIn key={step.step} delay={index * 0.1}>
                  <Card padding="lg" className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <span className="text-[28px] font-display font-bold text-primary">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-body-md text-text-secondary">
                      {step.description}
                    </p>
                  </Card>
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
