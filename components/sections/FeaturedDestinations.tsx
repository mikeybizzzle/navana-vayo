'use client'

import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Card } from '@/components/ui/Card'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const destinations = [
  {
    name: 'Mexico',
    description: 'All-inclusive resorts at wholesale prices',
    image: '/images/Mexico.png',
    tag: 'Popular',
  },
  {
    name: 'Florida',
    description: 'Beach resorts and theme park packages',
    image: '/images/Florida.png',
    tag: 'Family Favorite',
  },
  {
    name: 'Italy',
    description: 'European charm with member-only rates',
    image: '/images/Italy.png',
    tag: 'Trending',
  },
  {
    name: 'Caribbean Cruises',
    description: 'Cruise cabin inventory at deep discounts',
    image: '/images/Cruiseship.png',
    tag: 'Best Value',
  },
  {
    name: 'Nevada',
    description: 'Las Vegas resorts and entertainment',
    image: '/images/Nevada.png',
    tag: 'Weekend Getaway',
  },
  {
    name: 'France',
    description: 'Paris hotels and French Riviera',
    image: '/images/France.png',
    tag: 'Popular',
  },
]

export function FeaturedDestinations() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Featured Destinations
            </h2>
            <p className="text-body-lg text-text-secondary">
              Explore member-only rates at top destinations worldwide
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <FadeIn key={destination.name} delay={index * 0.1}>
              <Card padding="none" hover className="h-full overflow-hidden group cursor-pointer">
                <div className="relative h-64">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-white text-body-sm font-semibold">
                      {destination.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-[24px] leading-[32px] font-semibold mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-body-sm text-white/90 mb-4">
                      {destination.description}
                    </p>
                    <div className="flex items-center gap-2 text-body-sm font-semibold group-hover:gap-3 transition-all">
                      Explore Deals
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
