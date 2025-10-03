'use client'

import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { ShoppingCart, Package, DollarSign, Plane } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: ShoppingCart,
    title: 'Hotels have empty rooms',
    description: 'Resorts, hotels, and cruise lines have inventory that would otherwise go unsold.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    number: '2',
    icon: Package,
    title: 'We buy in bulk',
    description: 'We purchase this unsold inventory in bulk at deep wholesale discounts.',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    number: '3',
    icon: DollarSign,
    title: 'You save big',
    description: 'We pass those savings directly to you for just $37/month. No hidden fees.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    number: '4',
    icon: Plane,
    title: 'Book and travel',
    description: 'Book directly through our platform—no timeshare presentations, no pressure.',
    color: 'from-orange-500 to-red-600',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              How Vayo Vault unlocks hidden deals
            </h2>
            <p className="text-body-lg text-text-secondary">
              Bulk purchasing power = wholesale pricing for members. It's that simple.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1}>
              <div className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -translate-x-1/2 z-0" />
                )}

                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Number Badge */}
                  <div className={`absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-lg flex items-center justify-center shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-4 mb-4`}>
                    <step.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-body-md text-text-secondary">
              No timeshare presentations. No annual commitments. Just straightforward wholesale deals for $37/month.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
