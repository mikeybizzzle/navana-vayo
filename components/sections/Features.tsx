import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import {
  Plane,
  CreditCard,
  Receipt,
  Smartphone,
  BarChart3,
  Shield,
} from 'lucide-react'

const features = [
  {
    icon: Plane,
    title: 'Corporate Travel',
    description:
      'Book flights, hotels, and rental cars with ease. Get real-time updates and 24/7 support.',
  },
  {
    icon: CreditCard,
    title: 'Corporate Cards',
    description:
      'Issue smart cards with built-in controls. Automate expense tracking and reconciliation.',
  },
  {
    icon: Receipt,
    title: 'Expense Management',
    description:
      'Capture receipts instantly, automate expense reports, and streamline approvals.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description:
      'Manage everything on the go with our award-winning mobile app.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description:
      'Get real-time insights into spending patterns and optimize your travel program.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-level security with SOC 2 Type II certification and GDPR compliance.',
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
              Everything you need in one platform
            </h2>
            <p className="text-body-lg text-text-secondary">
              From booking to reconciliation, Navan handles it all with
              intelligence and ease.
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