import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Card } from '@/components/ui/Card'
import { CTA } from '@/components/sections/CTA'
import {
  Car,
  MapPin,
  DollarSign,
  Shield,
  CheckCircle,
  Clock,
  Globe,
  Fuel,
} from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Car Rental Deals | Vayo Vault',
  description: 'Access wholesale car rental rates at airports and cities worldwide. Save up to 40% on rental cars with member-only pricing.',
}

const benefits = [
  {
    icon: DollarSign,
    title: 'Wholesale Rates',
    description: 'Save up to 40% on car rentals with bulk-purchased inventory from major brands.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Rent cars at airports and cities in 150+ countries with consistent pricing.',
  },
  {
    icon: Shield,
    title: 'Price Match Guarantee',
    description: 'Find a lower price? We\'ll match it and give you a $50 credit.',
  },
  {
    icon: Clock,
    title: 'Instant Confirmation',
    description: 'Book rental cars instantly with immediate confirmation and pickup details.',
  },
]

const carTypes = [
  {
    name: 'Economy Cars',
    description: 'Fuel-efficient compact cars perfect for city driving and budget travel.',
    features: ['Great fuel economy', 'Easy to park', 'Affordable daily rates', 'Airport pickup'],
    image: '/images/Car.png',
  },
  {
    name: 'SUVs & Vans',
    description: 'Spacious vehicles for families and group travel with plenty of cargo space.',
    features: ['Seats 7-8 passengers', 'Large cargo space', 'Family-friendly', 'All terrain'],
    image: '/images/Background-Car.png',
  },
  {
    name: 'Luxury Vehicles',
    description: 'Premium cars and luxury brands at wholesale rates for special occasions.',
    features: ['Premium features', 'Comfortable ride', 'Advanced technology', 'Status vehicles'],
    image: '/images/Car.png',
  },
]

const popularLocations = [
  { name: 'Los Angeles Airport', savings: 'Save 35%', image: '/images/losangeles.png' },
  { name: 'Miami Airport', savings: 'Save 38%', image: '/images/miami.png' },
  { name: 'Orlando Airport', savings: 'Save 42%', image: '/images/orlando.png' },
  { name: 'Las Vegas Airport', savings: 'Save 40%', image: '/images/Nevada.png' },
  { name: 'New York Area', savings: 'Save 32%', image: '/images/newyork.png' },
  { name: 'Dallas Airport', savings: 'Save 36%', image: '/images/dallas.png' },
]

const stats = [
  { value: '40%', label: 'Up to savings' },
  { value: '150+', label: 'Countries covered' },
  { value: 'All Brands', label: 'Major companies' },
  { value: '24/7', label: 'Support available' },
]

const rentalBrands = [
  'Enterprise',
  'Hertz',
  'Avis',
  'Budget',
  'National',
  'Alamo',
  'Dollar',
  'Thrifty',
  'Sixt',
  'Europcar',
]

const features = [
  {
    icon: MapPin,
    title: 'Airport & City Locations',
    description: 'Pick up at major airports and downtown locations worldwide.',
  },
  {
    icon: Fuel,
    title: 'Flexible Fuel Options',
    description: 'Choose full-to-full, prepaid fuel, or other convenient fuel policies.',
  },
  {
    icon: Shield,
    title: 'Insurance Options',
    description: 'Add collision damage waiver, liability, and other protection at wholesale rates.',
  },
  {
    icon: Clock,
    title: 'Flexible Duration',
    description: 'Rent by the day, week, or month with discounts on longer rentals.',
  },
]

export default function CarsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Car rentals at wholesale prices"
          description="Save up to 40% on rental cars at airports and cities worldwide. Access member-only rates from major brands."
          primaryCTA={{ text: 'Start Free Trial' }}
          backgroundImage="/images/Background-Car.png"
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
                  Why rent cars with Vayo Vault?
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Access wholesale car rental inventory from all major brands.
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

        {/* Car Types */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Cars for every journey
                </h2>
                <p className="text-body-lg text-text-secondary">
                  From compact economy cars to spacious SUVs and luxury vehicles.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-12">
              {carTypes.map((type, index) => (
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

        {/* Popular Locations */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Popular rental locations
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Find wholesale car rental rates at airports and cities nationwide.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularLocations.map((location, index) => (
                <FadeIn key={location.name} delay={index * 0.1}>
                  <Card padding="none" hover className="overflow-hidden group cursor-pointer">
                    <div className="relative h-64">
                      <Image
                        src={location.image}
                        alt={location.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-[24px] leading-[32px] font-semibold mb-2">
                          {location.name}
                        </h3>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-body-sm font-semibold">
                          {location.savings}
                        </div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Features */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Flexible rental options
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FadeIn key={feature.title} delay={index * 0.1}>
                  <Card padding="lg" className="text-center h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-[18px] leading-[26px] font-semibold text-primary-dark mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-body-sm text-text-secondary">
                      {feature.description}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Rental Brands */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  All major rental brands
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Access wholesale rates from leading car rental companies worldwide.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {rentalBrands.map((brand, index) => (
                <FadeIn key={brand} delay={index * 0.05}>
                  <Card padding="lg" className="text-center">
                    <div className="text-[18px] leading-[26px] font-semibold text-primary-dark">
                      {brand}
                    </div>
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
