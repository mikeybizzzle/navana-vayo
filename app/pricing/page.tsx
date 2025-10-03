import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { PricingCard } from '@/components/ui/PricingCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { Card } from '@/components/ui/Card'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Pricing | Vayo Vault',
  description: 'Simple, transparent pricing. One membership. Unlimited access. Start with a 14-day free trial.',
}

const pricingTiers = [
  {
    name: 'Vayo Vault Membership',
    price: '$37',
    billingPeriod: 'per month',
    description: 'Everything you need to access members-only travel deals and save about 50% on average.',
    features: [
      'Unlimited searches and bookings',
      'Hotels, resorts, cruises, car rentals',
      'Members-only wholesale pricing',
      'Price match guarantee',
      'Global coverage',
      'Instant booking confirmations',
      'Mobile app access',
      'Cancel anytime — no contracts',
    ],
    highlighted: true,
    badge: '14-Day Free Trial',
    ctaText: 'Start Free Trial',
    ctaVariant: 'primary' as const,
  },
]


const faqs = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes. We offer a 14-day free trial with no credit card required. You\'ll get full access to all members-only inventory.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. Cancel your membership at any time. No cancellation fees or long-term contracts.',
  },
  {
    question: 'What\'s the price match guarantee?',
    answer: 'If you find a lower price for the same booking (same dates, property, terms), we\'ll match it. Submit your request before booking or within our stated window.',
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees. Your $37 monthly membership includes unlimited access. Taxes and property-specific fees are shown clearly before you book.',
  },
  {
    question: 'How much can I save?',
    answer: 'Members save about 50% on average across hotels, resorts, cruises, and car rentals. Individual savings vary based on booking type and destination.',
  },
  {
    question: 'Do you offer annual pricing?',
    answer: 'Yes. Pay annually and save 20% compared to monthly pricing. Contact our team for details.',
  },
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Simple, transparent pricing"
          description="One membership. Unlimited access. Start with a 14-day free trial. No credit card required."
          background="default"
          image={
            <div className="rounded-3xl overflow-hidden shadow-xl relative aspect-[4/3]">
              <Image
                src="/images/Resort.png"
                alt="Luxury resort"
                fill
                className="object-cover"
              />
            </div>
          }
        />

        {/* Pricing Cards */}
        <section className="py-20 bg-background-light">
          <Container>
            <div className="flex justify-center mb-16">
              {pricingTiers.map((tier, index) => (
                <FadeIn key={tier.name} delay={index * 0.1}>
                  <div className="max-w-lg">
                    <PricingCard {...tier} />
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <div className="text-center">
                <p className="text-body-md text-text-secondary mb-2">
                  All memberships include a 14-day free trial
                </p>
                <p className="text-body-sm text-text-tertiary">
                  Questions? <a href="/contact" className="text-primary hover:underline">Contact our support team</a>
                </p>
              </div>
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
                  Ready to see member-only rates?
                </h2>
                <p className="text-body-lg text-text-secondary mb-8">
                  Try it free for 14 days. See the member-only rates for yourself.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="/checkout"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-gray-300 text-primary-dark font-semibold hover:border-primary transition-colors"
                  >
                    Contact Support
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