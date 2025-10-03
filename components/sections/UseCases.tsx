import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { Users, Palmtree, Ship, Briefcase } from 'lucide-react'

const useCases = [
  {
    icon: Users,
    title: 'Family Vacation Planners',
    description: 'Save big on multi-room reservations and family-friendly resorts during school breaks.',
    benefits: ['Multi-room savings', 'Kid-friendly properties', 'Flexible dates'],
  },
  {
    icon: Palmtree,
    title: 'Weekend Warriors',
    description: 'Book last-minute resort deals with member-only rates for quick getaways.',
    benefits: ['Last-minute deals', 'Fast booking', 'Instant confirmation'],
  },
  {
    icon: Ship,
    title: 'Cruise Enthusiasts',
    description: 'Access bulk-purchased cabin inventory at wholesale pricing across major cruise lines.',
    benefits: ['Wholesale pricing', 'Multiple cruise lines', 'Cabin upgrades'],
  },
  {
    icon: Briefcase,
    title: 'Business Owners',
    description: 'Get wholesale rates without corporate booking platforms for self-employed travel.',
    benefits: ['No corporate account needed', 'Quick bookings', 'Tax receipts'],
  },
]

export function UseCases() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Built for every kind of traveler
            </h2>
            <p className="text-body-lg text-text-secondary">
              From families to frequent travelers, Vayo Vault delivers savings that work for your travel style.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <FadeIn key={useCase.title} delay={index * 0.1}>
              <Card hover padding="lg" className="h-full">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[24px] leading-[32px] font-semibold text-primary-dark mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-body-md text-text-secondary mb-6 flex-grow">
                    {useCase.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    {useCase.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-body-sm text-text-primary">
                          {benefit}
                        </span>
                      </div>
                    ))}
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