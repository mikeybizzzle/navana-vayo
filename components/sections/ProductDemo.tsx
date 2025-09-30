'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { Plane, Users, DollarSign, Briefcase } from 'lucide-react'

const personas = [
  {
    id: 'road-warriors',
    title: 'Road Warriors',
    icon: Plane,
    description: 'Book travel quickly, track expenses on the go, and stay connected with 24/7 support.',
    features: [
      'One-tap booking',
      'Mobile expense capture',
      'Real-time itinerary updates',
      'Offline access',
    ],
  },
  {
    id: 'travel-managers',
    title: 'Travel Managers',
    icon: Users,
    description: 'Gain visibility into company travel, enforce policies, and optimize spend.',
    features: [
      'Policy compliance tracking',
      'Approval workflows',
      'Travel analytics',
      'Supplier negotiations',
    ],
  },
  {
    id: 'finance',
    title: 'Finance & Accounting',
    icon: DollarSign,
    description: 'Automate expense reports, streamline reconciliation, and get real-time insights.',
    features: [
      'Automated reporting',
      'ERP integrations',
      'Spend analytics',
      'Audit trail',
    ],
  },
  {
    id: 'assistants',
    title: 'Executive Assistants',
    icon: Briefcase,
    description: 'Book for others, manage complex itineraries, and handle last-minute changes.',
    features: [
      'Book on behalf of others',
      'Multi-city itineraries',
      'VIP preferences',
      'Priority support',
    ],
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
              See Navan in action
            </h2>
            <p className="text-body-lg text-text-secondary">
              Explore how different teams use Navan to streamline their workflows
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
          <FadeIn delay={0.4}>
            <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 aspect-[4/3] flex items-center justify-center shadow-xl">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                  <activePersona.icon className="w-10 h-10 text-primary" />
                </div>
                <p className="text-body-md text-text-secondary">
                  {activePersona.title} Dashboard
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}