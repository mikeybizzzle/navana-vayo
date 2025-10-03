import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import {
  Hotel,
  Ship,
  Car,
  Smartphone,
  BadgeCheck,
  Lock,
} from 'lucide-react'

const features = [
  {
    icon: Hotel,
    title: 'Hotels & Resorts',
    description:
      'Unsold hotel rooms purchased in bulk at wholesale prices—passed directly to you with instant confirmation.',
  },
  {
    icon: Ship,
    title: 'Cruise Deals',
    description:
      'We buy unsold cruise cabins in bulk before they sail empty—you get the deep discounts.',
  },
  {
    icon: Car,
    title: 'Car Rentals',
    description:
      'Rent vehicles at member-only rates with transparent pricing and no surprise fees.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Access',
    description:
      'Search, compare, and book on the go with our streamlined mobile experience.',
  },
  {
    icon: BadgeCheck,
    title: 'Price Match Guarantee',
    description:
      'Found a lower price elsewhere? We\'ll match it. No questions asked.',
  },
  {
    icon: Lock,
    title: 'Members-Only Pricing',
    description:
      'Behind-login access to wholesale rates and deals not advertised publicly.',
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Everything you need in one membership
            </h2>
            <p className="text-body-lg text-text-secondary">
              From booking to savings, Vayo Vault handles it all with
              transparency and ease.
            </p>
          </div>
        </FadeIn>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <Card
                hover
                padding="lg"
                className="group h-full"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-[24px] leading-[32px] font-semibold text-primary-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-body-md text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}