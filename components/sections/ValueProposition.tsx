import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { TrendingDown, Clock, Users } from 'lucide-react'

const stats = [
  {
    icon: TrendingDown,
    value: '30%',
    label: 'Average cost savings',
    description: 'Companies save an average of 30% on travel and expense costs',
  },
  {
    icon: Clock,
    value: '5 hrs',
    label: 'Time saved per employee per month',
    description: 'Automate manual tasks and streamline workflows',
  },
  {
    icon: Users,
    value: '10K+',
    label: 'Companies worldwide',
    description: 'Join thousands of organizations that trust Navan',
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
              Real impact on your bottom line
            </h2>
            <p className="text-body-lg text-text-tertiary">
              See how Navan helps companies reduce costs, save time, and improve
              employee satisfaction.
            </p>
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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