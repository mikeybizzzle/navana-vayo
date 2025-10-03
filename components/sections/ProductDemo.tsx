'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { Plane, Users, DollarSign, Briefcase } from 'lucide-react'
import Image from 'next/image'

const personas = [
  {
    id: 'couples',
    title: 'Couples & Honeymooners',
    icon: Plane,
    description: 'Book romantic resorts and cruise packages at wholesale prices. Save big on your dream getaway.',
    features: [
      'Adults-only resorts',
      'Cruise cabin upgrades',
      'Last-minute deals',
      'Price match guarantee',
    ],
    image: '/images/Resort.png',
  },
  {
    id: 'families',
    title: 'Family Travelers',
    icon: Users,
    description: 'Multi-room bookings, kid-friendly properties, and family packages at member-only rates.',
    features: [
      'Multi-room savings',
      'All-inclusive resorts',
      'Flexible dates',
      'Kid-friendly properties',
    ],
    image: '/images/Florida.png',
  },
  {
    id: 'business',
    title: 'Business Owners',
    icon: Briefcase,
    description: 'Get wholesale rates without corporate booking platforms. Perfect for self-employed travelers.',
    features: [
      'No corporate account needed',
      'Quick bookings',
      'Tax receipts',
      'Flexible cancellation',
    ],
    image: '/images/Hotel Room.png',
  },
  {
    id: 'retirees',
    title: 'Retirees',
    icon: DollarSign,
    description: 'Travel more often with savings that stretch your retirement budget. Book extended stays at reduced rates.',
    features: [
      'Extended stay discounts',
      'Off-season deals',
      'Cruise packages',
      'Global destinations',
    ],
    image: '/images/Cruiseship.png',
  },
]

export function ProductDemo() {
  const [activePersona, setActivePersona] = useState(personas[0])

  return (
    <section className="py-20 md:py-32">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Travel that fits your lifestyle
            </h2>
            <p className="text-body-lg text-text-secondary">
              See how members save on hotels, resorts, cruises, and car rentals
            </p>
          </div>
        </FadeIn>

        {/* Persona Tabs */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {personas.map((persona) => (
              <Button
                key={persona.id}
                variant={activePersona.id === persona.id ? 'primary' : 'secondary'}
                size="md"
                onClick={() => setActivePersona(persona)}
                className="gap-2"
              >
                <persona.icon className="w-5 h-5" />
                {persona.title}
              </Button>
            ))}
          </div>
        </FadeIn>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <FadeIn delay={0.3} key={activePersona.id}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <activePersona.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-[32px] leading-[40px] font-display font-semibold text-primary-dark">
                  {activePersona.title}
                </h3>
              </div>

              <p className="text-body-lg text-text-secondary mb-8">
                {activePersona.description}
              </p>

              <div className="space-y-4">
                <h4 className="text-[20px] leading-[28px] font-semibold text-primary-dark">
                  Key Features:
                </h4>
                <ul className="space-y-3">
                  {activePersona.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-body-md text-text-primary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Right: Visual */}
          <FadeIn delay={0.4} key={`image-${activePersona.id}`}>
            <div className="rounded-3xl overflow-hidden shadow-xl relative aspect-[4/3]">
              <Image
                src={activePersona.image}
                alt={activePersona.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <activePersona.icon className="w-6 h-6" />
                  </div>
                  <p className="text-[18px] leading-[26px] font-semibold">
                    {activePersona.title}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}