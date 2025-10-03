'use client'

import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { Clock, MapPin, Users, Sparkles } from 'lucide-react'
import Image from 'next/image'

interface Deal {
  id: string
  title: string
  location: string
  image: string
  publicPrice: number
  memberPrice: number
  savings: number
  savingsPercent: number
  includes: string[]
  expiresIn: string
  badge?: string
  spotsLeft?: number
}

const hotDeals: Deal[] = [
  {
    id: '1',
    title: 'All-Inclusive Cancun Resort',
    location: 'Cancun, Mexico',
    image: '/images/Background-Beach.png',
    publicPrice: 1899,
    memberPrice: 949,
    savings: 950,
    savingsPercent: 50,
    includes: ['7 Nights', 'All Meals & Drinks', 'Beachfront Resort', 'Airport Transfer'],
    expiresIn: '2 days',
    badge: 'Member Favorite',
    spotsLeft: 3,
  },
  {
    id: '2',
    title: 'Luxury Maui Oceanfront',
    location: 'Maui, Hawaii',
    image: '/images/Background-Beach.png',
    publicPrice: 2499,
    memberPrice: 1249,
    savings: 1250,
    savingsPercent: 50,
    includes: ['5 Nights', 'Ocean View Suite', '$200 Resort Credit', 'Daily Breakfast'],
    expiresIn: '5 days',
    badge: 'Hot Deal',
  },
  {
    id: '3',
    title: 'Caribbean Cruise Adventure',
    location: 'Miami Departure',
    image: '/images/Background-Beach.png',
    publicPrice: 1599,
    memberPrice: 799,
    savings: 800,
    savingsPercent: 50,
    includes: ['7 Day Cruise', 'All Meals', '3 Ports of Call', 'Onboard Credit'],
    expiresIn: '3 days',
    badge: 'Limited Time',
    spotsLeft: 8,
  },
  {
    id: '4',
    title: 'Paris & London Package',
    location: 'Europe',
    image: '/images/Background-Beach.png',
    publicPrice: 3299,
    memberPrice: 1649,
    savings: 1650,
    savingsPercent: 50,
    includes: ['10 Nights', 'Roundtrip Flights', '4-Star Hotels', 'City Tours'],
    expiresIn: '7 days',
  },
]

export function HotDeals() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-background-light">
      <Container>
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Hot Deals - Limited Time
            </div>
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Today's exclusive member deals
            </h2>
            <p className="text-body-lg text-text-secondary">
              Hand-picked deals with the deepest discounts. These prices won't last long.
            </p>
          </div>
        </FadeIn>

        {/* Deals Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {hotDeals.map((deal, index) => (
            <FadeIn key={deal.id} delay={index * 0.1}>
              <Card className="group overflow-hidden h-full flex flex-col" padding="none" hover>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {deal.badge && (
                      <div className="px-3 py-1 bg-primary text-white rounded-full text-sm font-semibold shadow-lg">
                        {deal.badge}
                      </div>
                    )}
                    <div className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-semibold shadow-lg">
                      Save {deal.savingsPercent}%
                    </div>
                  </div>

                  {/* Expiration Timer */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {deal.expiresIn}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-primary-dark mb-1">
                          {deal.title}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-text-secondary">
                          <MapPin className="w-4 h-4" />
                          {deal.location}
                        </div>
                      </div>
                    </div>

                    {/* Includes */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {deal.includes.map((item) => (
                        <div
                          key={item}
                          className="px-3 py-1 bg-background-light rounded-full text-xs font-medium text-gray-700"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <div className="text-sm text-text-tertiary mb-1">
                          <span className="line-through">${deal.publicPrice.toLocaleString()}</span>
                          <span className="ml-2 text-green-600 font-semibold">
                            Save ${deal.savings.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-3xl font-bold text-primary-dark">
                          ${deal.memberPrice.toLocaleString()}
                        </div>
                        <div className="text-sm text-text-tertiary">Member Price</div>
                      </div>
                      <div className="text-right">
                        {deal.spotsLeft && (
                          <div className="text-sm text-red-600 font-medium mb-2">
                            <Users className="w-4 h-4 inline mr-1" />
                            {deal.spotsLeft} spots left
                          </div>
                        )}
                      </div>
                    </div>

                    <Button className="w-full" size="lg">
                      View Deal
                    </Button>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* View All CTA */}
        <FadeIn delay={0.5}>
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              View All Hot Deals
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
