import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { StatCard } from '@/components/ui/StatCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { Card } from '@/components/ui/Card'
import { CTA } from '@/components/sections/CTA'
import {
  Building2,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  Star,
  Quote,
} from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Member Reviews | Vayo Vault',
  description: 'See how members save about 50% on hotels, resorts, cruises, and car rentals with Vayo Vault\'s wholesale pricing.',
}

const memberStories = [
  {
    member: 'Jennifer M.',
    location: 'San Diego, CA',
    memberSince: 'March 2024',
    logo: Building2,
    challenge: 'Our family of four was paying $3,200 for a week at an all-inclusive Cancun resort. The same dates on public booking sites weren\'t getting any cheaper.',
    solution: 'Found the same resort, same room category, same dates on Vayo Vault for $2,550. Saved $650 on one booking.',
    results: [
      { metric: '$650', label: 'Saved on one booking' },
      { metric: '20%', label: 'Discount vs public rates' },
      { metric: '1 booking', label: 'Paid for annual membership' },
    ],
    testimonial: {
      quote: 'We saved $650 on our Cancun resort. Same property, same dates, half the price. Vayo Vault paid for itself on day one.',
      author: 'Jennifer M.',
      role: 'Family Vacation, March 2024',
    },
  },
  {
    member: 'David K.',
    location: 'Chicago, IL',
    memberSince: 'January 2024',
    logo: Building2,
    challenge: 'I book 8-10 cruises per year for business and pleasure. Public cruise sites were charging full retail even for last-minute cabins.',
    solution: 'Booked a 7-day Caribbean cruise through Vayo Vault\'s bulk-purchased inventory at 45% off the published rate.',
    results: [
      { metric: '45%', label: 'Saved vs public price' },
      { metric: '$1,200', label: 'Discount on one cruise' },
      { metric: '8+ cruises', label: 'Booked per year' },
    ],
    testimonial: {
      quote: 'I travel constantly and Vayo Vault saves me thousands per year. The cruise inventory alone makes the membership worth it.',
      author: 'David K.',
      role: 'Cruise Enthusiast, January 2024',
    },
  },
  {
    member: 'Rachel P.',
    location: 'Austin, TX',
    memberSince: 'February 2024',
    logo: Building2,
    challenge: 'As a freelance consultant, I travel 2-3 times per month but don\'t have access to corporate travel discounts.',
    solution: 'Vayo Vault gave me wholesale hotel rates without needing a corporate account. No presentations, no contracts.',
    results: [
      { metric: '$200+', label: 'Average savings per trip' },
      { metric: '30+ trips', label: 'Booked in 12 months' },
      { metric: '$6,000', label: 'Total annual savings' },
    ],
    testimonial: {
      quote: 'I was paying retail rates as a solo business traveler. Vayo Vault gave me wholesale pricing without the corporate overhead. Game changer.',
      author: 'Rachel P.',
      role: 'Business Owner, February 2024',
    },
  },
]

const destinations = [
  { name: 'Caribbean Resorts', count: 'Hundreds of properties' },
  { name: 'Mexico All-Inclusives', count: 'Deep discounts' },
  { name: 'Hawaii Packages', count: 'Multi-island deals' },
  { name: 'European Hotels', count: 'Wholesale rates' },
  { name: 'Cruise Lines', count: 'All major lines' },
  { name: 'Domestic Resorts', count: 'US & Canada' },
]

const quickStats = [
  {
    icon: DollarSign,
    value: '50%',
    label: 'Average savings',
  },
  {
    icon: TrendingUp,
    value: 'Thousands',
    label: 'Active members',
  },
  {
    icon: Users,
    value: '4.8/5',
    label: 'Member rating',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support available',
  },
]

export default function CustomersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Real members, real savings"
          description="See how Vayo Vault members save about 50% on hotels, resorts, cruises, and car rentals."
          primaryCTA={{ text: 'Start Free Trial' }}
          background="default"
          image={
            <div className="rounded-3xl overflow-hidden shadow-xl relative aspect-[4/3]">
              <Image
                src="/images/Cruiseship.png"
                alt="Cruise ship"
                fill
                className="object-cover"
              />
            </div>
          }
        />

        {/* Quick Stats */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-4 gap-8">
              {quickStats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 0.1}>
                  <Card padding="lg" className="text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-[36px] leading-[44px] font-display font-bold text-primary-dark mb-2">
                      {stat.value}
                    </div>
                    <div className="text-body-sm text-text-secondary">{stat.label}</div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Case Studies */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Member Success Stories
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Real savings from real members using Vayo Vault to travel more.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-16">
              {memberStories.map((story, index) => (
                <FadeIn key={story.member} delay={index * 0.2}>
                  <Card padding="none" className="overflow-hidden">
                    <div className="grid lg:grid-cols-5">
                      {/* Left Column - Member Info */}
                      <div className="lg:col-span-2 p-8 lg:p-12 bg-primary/5">
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                          <story.logo className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-[28px] leading-[36px] font-display font-semibold text-primary-dark mb-2">
                          {story.member}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-6">
                          <span className="px-3 py-1 rounded-full bg-white text-body-sm text-text-secondary">
                            {story.location}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-white text-body-sm text-text-secondary">
                            Member since {story.memberSince}
                          </span>
                        </div>

                        {/* Results */}
                        <div className="space-y-4">
                          {story.results.map((result) => (
                            <div key={result.label}>
                              <div className="text-[32px] leading-[40px] font-display font-bold text-primary mb-1">
                                {result.metric}
                              </div>
                              <div className="text-body-sm text-text-secondary">
                                {result.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column - Story */}
                      <div className="lg:col-span-3 p-8 lg:p-12">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-[18px] leading-[26px] font-semibold text-primary mb-3">
                              Before Vayo Vault
                            </h4>
                            <p className="text-body-md text-text-secondary">
                              {story.challenge}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-[18px] leading-[26px] font-semibold text-primary mb-3">
                              With Vayo Vault
                            </h4>
                            <p className="text-body-md text-text-secondary">
                              {story.solution}
                            </p>
                          </div>

                          {/* Testimonial */}
                          <div className="pt-6 border-t border-gray-200">
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />
                            <p className="text-[18px] leading-[28px] text-text-primary italic mb-4">
                              "{story.testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <div className="font-semibold text-primary-dark">
                                  {story.testimonial.author}
                                </div>
                                <div className="text-body-sm text-text-secondary">
                                  {story.testimonial.role}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Industries Served */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Popular Destinations
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Access wholesale pricing on hotels, resorts, and cruises worldwide.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination, index) => (
                <FadeIn key={destination.name} delay={index * 0.1}>
                  <Card padding="lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-1">
                          {destination.name}
                        </h3>
                        <p className="text-body-sm text-text-secondary">
                          {destination.count}
                        </p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Rating/Reviews */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <Card padding="lg" className="text-center max-w-4xl mx-auto">
                <div className="flex justify-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-[48px] leading-[56px] font-display font-bold text-primary-dark mb-4">
                  4.8/5.0
                </div>
                <p className="text-body-lg text-text-secondary mb-2">
                  Average rating from 1,200+ reviews
                </p>
                <p className="text-body-md text-text-secondary">
                  on G2, Capterra, and TrustRadius
                </p>
              </Card>
            </FadeIn>
          </Container>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
