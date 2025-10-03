import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { CheckCircle, Lock, DollarSign, Search, CreditCard } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'How It Works | Vayo Vault',
  description: 'Discover how Vayo Vault delivers members-only wholesale pricing and saves you about 50% on travel bookings.',
}

const steps = [
  {
    number: '1',
    title: 'Join Vayo Vault',
    description: 'Start your 14-day free trial. No credit card required. Access members-only inventory immediately.',
    icon: Lock,
  },
  {
    number: '2',
    title: 'Search & Compare',
    description: 'Browse hotels, resorts, cruises, and car rentals. See wholesale pricing side-by-side with retail rates.',
    icon: Search,
  },
  {
    number: '3',
    title: 'Book & Save',
    description: 'Book directly through our platform. Receive instant confirmation. Save about 50% on average.',
    icon: DollarSign,
  },
  {
    number: '4',
    title: 'Travel Smarter',
    description: 'Enjoy your vacation knowing you got the best deal. Cancel your membership anytime.',
    icon: CreditCard,
  },
]

const benefits = [
  {
    title: 'Direct Wholesale Access',
    description: 'We partner directly with hotels, resorts, cruise lines, and rental agencies to secure wholesale rates typically reserved for travel agents and industry insiders.',
  },
  {
    title: 'Transparent Pricing',
    description: 'See the retail price and member price side-by-side. Know exactly how much you\'re saving on every booking.',
  },
  {
    title: 'No Hidden Fees',
    description: 'Your $37 monthly membership is all you pay for access. Booking prices are final — no surprise fees at checkout.',
  },
  {
    title: 'Instant Confirmations',
    description: 'Book with confidence. Receive instant confirmation emails and access to your itinerary through our mobile app.',
  },
  {
    title: 'Price Match Guarantee',
    description: 'Find a lower price elsewhere? We\'ll match it. Our guarantee ensures you always get the best deal available.',
  },
  {
    title: 'Cancel Anytime',
    description: 'No contracts. No cancellation fees. Keep your membership as long as it saves you money.',
  },
]

const faqs = [
  {
    question: 'How do you get wholesale pricing?',
    answer: 'We partner directly with travel suppliers who offer wholesale rates to industry professionals. By combining our volume purchasing power with your membership fees, we can pass these savings directly to you.',
  },
  {
    question: 'Is there a catch?',
    answer: 'No catch. You pay a simple monthly membership fee of $37 for unlimited access to wholesale pricing. That\'s it. No booking fees, no hidden charges.',
  },
  {
    question: 'Can I really save 50% on every booking?',
    answer: 'Members save about 50% on average. Individual savings vary based on destination, travel dates, and property type. Some bookings save more, some less — but you\'ll always see member pricing before you book.',
  },
  {
    question: 'What if I don\'t travel often?',
    answer: 'Even one booking per year can pay for your entire annual membership. Plus, you can cancel anytime. Many members keep their membership active for the flexibility and peace of mind.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="The Vault Access Model"
          description="Unlock wholesale travel pricing previously available only to industry insiders. Here's how we make it simple."
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

        {/* How It Works Steps */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Four simple steps to better travel deals
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <FadeIn key={step.title} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-display-sm font-bold text-primary mb-3">
                      {step.number}
                    </div>
                    <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-body-md text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Why members love Vayo Vault
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <FadeIn key={benefit.title} delay={index * 0.1}>
                  <Card padding="lg" hover>
                    <CheckCircle className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-body-md text-text-secondary">
                      {benefit.description}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Visual Comparison */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  See the difference for yourself
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Member pricing vs. retail pricing — side by side
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card padding="lg" className="border-2 border-gray-200">
                  <div className="text-center mb-6">
                    <p className="text-body-sm text-text-secondary mb-2">Retail Pricing</p>
                    <p className="text-display-lg font-bold text-gray-500">$399</p>
                    <p className="text-body-sm text-text-tertiary">per night</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-body-md text-text-secondary">• Standard booking fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-body-md text-text-secondary">• Retail markup included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-body-md text-text-secondary">• Limited availability</span>
                    </li>
                  </ul>
                </Card>

                <Card padding="lg" className="border-2 border-primary bg-purple-50">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-primary text-white text-body-xs font-semibold px-3 py-1 rounded-full mb-3">
                      MEMBER PRICING
                    </div>
                    <p className="text-display-lg font-bold text-primary">$199</p>
                    <p className="text-body-sm text-text-tertiary">per night</p>
                    <p className="text-body-sm font-semibold text-green-600 mt-2">
                      Save $200 per night
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-body-md text-text-secondary">Wholesale pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-body-md text-text-secondary">No booking fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-body-md text-text-secondary">Priority access</span>
                    </li>
                  </ul>
                </Card>
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
                  Common questions
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
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <Card variant="purple" padding="lg" className="text-center">
                <h2 className="text-display-md font-display font-semibold text-primary-dark mb-4">
                  Ready to experience wholesale pricing?
                </h2>
                <p className="text-body-lg text-text-secondary mb-8">
                  Start your 14-day free trial. No credit card required.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="/checkout"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-gray-300 text-primary-dark font-semibold hover:border-primary transition-colors"
                  >
                    View Pricing
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
