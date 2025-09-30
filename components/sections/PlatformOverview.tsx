'use client'

import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import Image from 'next/image'

const features = [
  {
    title: 'Intuitive Booking',
    description: 'Book flights, hotels, and cars in one place with real-time pricing',
  },
  {
    title: 'Smart Expense Tracking',
    description: 'Automatic receipt capture and expense categorization',
  },
  {
    title: 'Corporate Cards',
    description: 'Issue virtual and physical cards with built-in spend controls',
  },
  {
    title: 'Real-Time Reporting',
    description: 'Get instant insights into company-wide spending patterns',
  },
]

export function PlatformOverview() {
  return (
    <section className="py-20 md:py-32 bg-background-light">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Experience the all-in-one travel and expense platform
            </h2>
            <p className="text-body-lg text-text-secondary">
              Everything your team needs to book, manage, and track business
              travel and expenses—all in one powerful platform.
            </p>
          </div>
        </FadeIn>

        {/* Main Feature Showcase */}
        <FadeIn delay={0.2}>
          <div className="rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden mb-12">
            <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              {/* Placeholder for product screenshot */}
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-4xl font-bold text-primary">N</div>
                </div>
                <p className="text-body-md text-text-secondary">
                  Product Dashboard Preview
                </p>
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