import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { TrendingDown, Globe, DollarSign, UserCheck } from 'lucide-react'

const stats = [
  {
    icon: TrendingDown,
    value: '50%',
    label: 'Average savings',
    description: 'Members save about 50% on average across hotels, resorts, cruises, and car rentals',
  },
  {
    icon: Globe,
    value: 'Global',
    label: 'Coverage worldwide',
    description: 'Access wholesale inventory across destinations in every region',
  },
  {
    icon: DollarSign,
    value: '$37/mo',
    label: 'Simple membership',
    description: 'Cancel anytime. No contracts. 14-day free trial with no credit card required',
  },
  {
    icon: UserCheck,
    value: 'No',
    label: 'Timeshares. No presentations.',
    description: 'Unlike clubs charging $1,000s/month, we offer the same wholesale access for just $37',
  },
]

export function ValueProposition() {
  return (
    <section className="py-20 md:py-32 bg-primary-dark text-white">
      <Container>
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold mb-4">
              Real savings on every booking
            </h2>
            <p className="text-body-lg text-text-tertiary mb-6">
              See how Vayo Vault helps travelers save money, book faster, and vacation better.
            </p>
            <p className="text-body-md text-white/80 italic">
              Perfect for budget-savvy millennials, digital nomads, families, and retirees who want amazing vacations without paying retail prices.
            </p>
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.15}>
              <Card
                variant="default"
                padding="lg"
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-[48px] leading-[56px] font-display font-bold mb-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-body-md font-semibold mb-3">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <p className="text-body-sm text-text-tertiary">
                    {stat.description}
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