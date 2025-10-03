'use client'

import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import Image from 'next/image'

const features = [
  {
    title: 'Start your free trial',
    description: 'No credit card required. Set your travel preferences in under 10 minutes',
  },
  {
    title: 'Search members-only inventory',
    description: 'Access wholesale rates and bulk-purchased deals not available to the public',
  },
  {
    title: 'Book with instant confirmation',
    description: 'Reserve hotels, resorts, cruises, and car rentals directly through the platform',
  },
  {
    title: 'Claim your price match',
    description: 'Found a lower price? We\'ll match it. Guaranteed',
  },
]

export function PlatformOverview() {
  return (
    <section className="py-20 md:py-32 bg-background-light">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              How Vayo Vault works
            </h2>
            <p className="text-body-lg text-text-secondary">
              From signup to savings, the whole process takes minutes.
            </p>
          </div>
        </FadeIn>

        {/* Main Feature Showcase */}
        <FadeIn delay={0.2}>
          <div className="rounded-3xl overflow-hidden shadow-xl mb-12 relative">
            <div className="aspect-[16/9] relative">
              <Image
                src="/images/Background-Car.png"
                alt="Travel booking platform"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 text-white">
                  <div className="w-24 h-24 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-4xl font-bold text-primary">VV</div>
                  </div>
                  <p className="text-[20px] leading-[28px] font-semibold">
                    Member Dashboard Preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={0.3 + index * 0.1}>
              <div className="text-center">
                <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-body-md text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}