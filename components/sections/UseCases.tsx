import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { Building2, TrendingUp, Globe, Shield } from 'lucide-react'

const useCases = [
  {
    icon: Building2,
    title: 'Enterprise Teams',
    description: 'Scale your travel program across global offices with centralized control and local flexibility.',
    benefits: ['Global policy enforcement', 'Multi-entity support', 'Duty of care'],
  },
  {
    icon: TrendingUp,
    title: 'Growing Companies',
    description: 'Build a scalable travel and expense program that grows with your business.',
    benefits: ['Fast implementation', 'Flexible policies', 'Easy onboarding'],
  },
  {
    icon: Globe,
    title: 'International Travel',
    description: 'Book and manage travel across 90+ countries with 24/7 multilingual support.',
    benefits: ['Global inventory', 'Local payment options', 'Duty of care'],
  },
  {
    icon: Shield,
    title: 'Compliance & Security',
    description: 'Meet regulatory requirements with enterprise-grade security and compliance.',
    benefits: ['SOC 2 Type II', 'GDPR compliant', 'Audit trails'],
  },
]

export function UseCases() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Built for every use case
            </h2>
            <p className="text-body-lg text-text-secondary">
              From startups to enterprises, Navan adapts to your unique travel
              and expense needs.
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