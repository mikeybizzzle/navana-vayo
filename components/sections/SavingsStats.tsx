'use client'

import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'

const savings = [
  {
    number: '1',
    title: 'Negotiate better rates',
    description: 'Access exclusive corporate rates and save up to 30% on travel bookings through our global supplier network.',
    stat: '30% average savings',
  },
  {
    number: '2',
    title: 'Eliminate manual work',
    description: 'Automate expense reports, receipt matching, and approval workflows to save 5+ hours per employee per month.',
    stat: '5 hours saved/employee',
  },
  {
    number: '3',
    title: 'Increase policy compliance',
    description: 'Built-in policy controls and real-time spend visibility drive 95%+ policy compliance across your organization.',
    stat: '95%+ compliance rate',
  },
]

export function SavingsStats() {
  return (
    <section className="py-20 md:py-32 bg-background-light">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Sky-high company savings
            </h2>
            <p className="text-body-lg text-text-secondary">
              See how Navan helps companies reduce costs and improve efficiency
              across travel and expense management.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {savings.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.15}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-start gap-6">
                    {/* Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-[28px] font-display font-bold text-white">
                        {item.number}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-[32px] leading-[40px] font-display font-semibold text-primary-dark mb-3">
                        {item.title}
                      </h3>
                      <p className="text-body-lg text-text-secondary mb-4">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                        <span className="text-body-md font-semibold text-primary">
                          {item.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-3xl bg-white border border-gray-200 shadow-xl aspect-[4/3] flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-[32px] font-display font-bold text-primary">
                          {item.number}
                        </span>
                      </div>
                      <p className="text-body-md text-text-secondary">
                        Savings Dashboard
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}