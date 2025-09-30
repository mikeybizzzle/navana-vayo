import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { PricingCard } from '@/components/ui/PricingCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { Card } from '@/components/ui/Card'
import { CheckCircle, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing | Navan',
  description: 'Simple, transparent pricing for teams of all sizes. No hidden fees. Start with a free trial.',
}

const pricingTiers = [
  {
    name: 'Starter',
    price: '$9',
    billingPeriod: 'per user/month',
    description: 'Perfect for small teams getting started with travel and expense management.',
    features: [
      'Up to 50 users',
      'Business travel booking',
      'Basic expense management',
      'Mobile app access',
      'Email support',
      'Standard reporting',
    ],
    ctaText: 'Start Free Trial',
    ctaVariant: 'secondary' as const,
  },
  {
    name: 'Professional',
    price: '$19',
    billingPeriod: 'per user/month',
    description: 'Advanced features for growing companies that need more control and insights.',
    features: [
      'Unlimited users',
      'Everything in Starter, plus:',
      'Corporate card program',
      'Advanced policy controls',
      'Custom approval workflows',
      'ERP integrations',
      'Priority support',
      'Advanced analytics',
      'API access',
    ],
    highlighted: true,
    badge: 'Most Popular',
    ctaText: 'Start Free Trial',
    ctaVariant: 'primary' as const,
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations with complex requirements.',
    features: [
      'Everything in Professional, plus:',
      'Dedicated account manager',
      'Custom integrations',
      'SSO & advanced security',
      'SLA guarantees',
      'Unlimited support',
      'Custom reporting',
      'Multi-entity support',
      'On-site training',
    ],
    ctaText: 'Contact Sales',
    ctaVariant: 'secondary' as const,
  },
]

const comparisonFeatures = [
  {
    category: 'Core Features',
    features: [
      { name: 'Business travel booking', starter: true, pro: true, enterprise: true },
      { name: 'Expense management', starter: true, pro: true, enterprise: true },
      { name: 'Mobile app', starter: true, pro: true, enterprise: true },
      { name: 'Corporate cards', starter: false, pro: true, enterprise: true },
      { name: 'Policy controls', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
    ],
  },
  {
    category: 'Integrations',
    features: [
      { name: 'Calendar sync', starter: true, pro: true, enterprise: true },
      { name: 'ERP integrations', starter: false, pro: true, enterprise: true },
      { name: 'SSO', starter: false, pro: false, enterprise: true },
      { name: 'API access', starter: false, pro: true, enterprise: true },
      { name: 'Custom integrations', starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email support', starter: true, pro: true, enterprise: true },
      { name: 'Priority support', starter: false, pro: true, enterprise: true },
      { name: 'Dedicated account manager', starter: false, pro: false, enterprise: true },
      { name: 'SLA guarantees', starter: false, pro: false, enterprise: true },
      { name: 'On-site training', starter: false, pro: false, enterprise: true },
    ],
  },
]

const faqs = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 14-day free trial with no credit card required. You\'ll get full access to all features in your chosen plan.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and can accommodate wire transfers for annual Enterprise contracts.',
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees. The prices shown are per user per month. There are no setup fees, cancellation fees, or surprise charges.',
  },
  {
    question: 'What happens if I exceed my user limit?',
    answer: 'On the Starter plan with a 50-user limit, you\'ll be prompted to upgrade to Professional. Professional and Enterprise plans have unlimited users.',
  },
  {
    question: 'Do you offer annual discounts?',
    answer: 'Yes! Save 20% when you pay annually instead of monthly. Contact our sales team for volume discounts on Enterprise plans.',
  },
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Simple, transparent pricing"
          description="Choose the plan that's right for your team. Start with a 14-day free trial. No credit card required."
          background="default"
        />

        {/* Pricing Cards */}
        <section className="py-20 bg-background-light">
          <Container>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {pricingTiers.map((tier, index) => (
                <FadeIn key={tier.name} delay={index * 0.1}>
                  <PricingCard {...tier} />
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <div className="text-center">
                <p className="text-body-md text-text-secondary mb-2">
                  All plans include a 14-day free trial
                </p>
                <p className="text-body-sm text-text-tertiary">
                  Questions? <a href="/contact" className="text-primary hover:underline">Contact our sales team</a>
                </p>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Compare features across plans
                </h2>
                <p className="text-body-lg text-text-secondary">
                  See what's included in each plan at a glance.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card padding="none" className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 bg-background-light">
                        <th className="px-6 py-4 text-left text-body-md font-semibold text-primary-dark">
                          Features
                        </th>
                        <th className="px-6 py-4 text-center text-body-md font-semibold text-primary-dark">
                          Starter
                        </th>
                        <th className="px-6 py-4 text-center text-body-md font-semibold text-primary-dark bg-primary/5">
                          Professional
                        </th>
                        <th className="px-6 py-4 text-center text-body-md font-semibold text-primary-dark">
                          Enterprise
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((section) => (
                        <>
                          <tr key={section.category} className="bg-background-light">
                            <td colSpan={4} className="px-6 py-3 text-body-sm font-semibold text-primary-dark uppercase tracking-wider">
                              {section.category}
                            </td>
                          </tr>
                          {section.features.map((feature) => (
                            <tr key={feature.name} className="border-b border-gray-100">
                              <td className="px-6 py-4 text-body-md text-text-primary">
                                {feature.name}
                              </td>
                              <td className="px-6 py-4 text-center">
                                {typeof feature.starter === 'boolean' ? (
                                  feature.starter ? (
                                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-gray-300 mx-auto" />
                                  )
                                ) : (
                                  <span className="text-body-sm text-text-secondary">
                                    {feature.starter}
                                  </span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-center bg-primary/5">
                                {typeof feature.pro === 'boolean' ? (
                                  feature.pro ? (
                                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-gray-300 mx-auto" />
                                  )
                                ) : (
                                  <span className="text-body-sm text-text-secondary">
                                    {feature.pro}
                                  </span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-center">
                                {typeof feature.enterprise === 'boolean' ? (
                                  feature.enterprise ? (
                                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-gray-300 mx-auto" />
                                  )
                                ) : (
                                  <span className="text-body-sm text-text-secondary">
                                    {feature.enterprise}
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </FadeIn>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Frequently asked questions
                </h2>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <FadeIn key={faq.question} delay={index * 0.1}>
                  <Card padding="lg">
                    <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-body-md text-text-secondary">
                      {faq.answer}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.8}>
              <div className="text-center mt-12">
                <p className="text-body-md text-text-secondary mb-4">
                  Still have questions?
                </p>
                <a
                  href="/contact"
                  className="text-primary font-semibold hover:underline"
                >
                  Contact our sales team
                </a>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* CTA Banner */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <Card variant="purple" padding="lg" className="text-center">
                <h2 className="text-display-md font-display font-semibold text-primary-dark mb-4">
                  Not sure which plan is right for you?
                </h2>
                <p className="text-body-lg text-text-secondary mb-8">
                  Talk to our sales team to find the perfect plan for your organization.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Talk to Sales
                  </a>
                  <a
                    href="/solutions/business-travel"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-gray-300 text-primary-dark font-semibold hover:border-primary transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </Card>
            </FadeIn>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}