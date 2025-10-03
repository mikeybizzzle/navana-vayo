'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { Check, X, Crown, Star, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const tiers = [
  {
    name: 'Vayo Vault Membership',
    icon: Zap,
    price: 37,
    period: 'month',
    description: 'Access wholesale pricing on all your travel',
    features: [
      { text: 'Browse member-only deals', included: true },
      { text: 'See wholesale pricing', included: true },
      { text: 'Unlimited bookings', included: true },
      { text: 'Email support', included: true },
      { text: 'Price match guarantee', included: true },
      { text: 'Mobile app access', included: true },
      { text: 'Cancel anytime', included: true },
      { text: '14-day free trial', included: true },
    ],
    cta: 'Start Free Trial',
    popular: true,
    savings: 'Save about 50% on average',
  },
]

export function MembershipComparison() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-background-light">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Choose your membership level
            </h2>
            <p className="text-body-lg text-text-secondary">
              All members get wholesale pricing. Upgrade for even more perks and savings.
            </p>
          </div>
        </FadeIn>

        <div className="flex justify-center max-w-2xl mx-auto">
          {tiers.map((tier, index) => (
            <FadeIn key={tier.name} delay={index * 0.1}>
              <div
                className={cn(
                  'relative rounded-2xl p-8 h-full flex flex-col',
                  tier.popular
                    ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-2xl scale-105'
                    : 'bg-white shadow-lg'
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-primary-dark rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <tier.icon className={cn('w-12 h-12 mb-4', tier.popular ? 'text-white' : 'text-primary')} />
                  <h3 className={cn('text-2xl font-bold mb-2', tier.popular ? 'text-white' : 'text-primary-dark')}>
                    {tier.name}
                  </h3>
                  <p className={cn('text-sm mb-4', tier.popular ? 'text-white/80' : 'text-text-secondary')}>
                    {tier.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className={cn('text-5xl font-bold', tier.popular ? 'text-white' : 'text-primary-dark')}>
                      ${tier.price}
                    </span>
                    <span className={cn('text-lg', tier.popular ? 'text-white/80' : 'text-text-secondary')}>
                      /{tier.period}
                    </span>
                  </div>
                  {tier.savings && (
                    <p className={cn('text-sm mt-2 font-medium', tier.popular ? 'text-yellow-300' : 'text-green-600')}>
                      {tier.savings}
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className={cn('w-5 h-5 flex-shrink-0 mt-0.5', tier.popular ? 'text-green-300' : 'text-green-600')} />
                      ) : (
                        <X className={cn('w-5 h-5 flex-shrink-0 mt-0.5', tier.popular ? 'text-white/40' : 'text-gray-300')} />
                      )}
                      <span className={cn(
                        'text-sm',
                        feature.included
                          ? tier.popular ? 'text-white' : 'text-gray-700'
                          : tier.popular ? 'text-white/40' : 'text-gray-400'
                      )}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="/checkout">
                  <Button
                    variant={tier.popular ? 'secondary' : 'primary'}
                    size="lg"
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-center text-sm text-text-tertiary mt-8">
            All plans include our price match guarantee and access to member-only wholesale pricing.
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}
