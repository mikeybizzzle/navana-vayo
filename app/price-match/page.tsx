import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { CheckCircle, Shield, Clock, FileText } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Price Match Guarantee | Vayo Vault',
  description: 'Found a lower price? We\'ll match it. Our price match guarantee ensures you always get the best deal on travel bookings.',
}

const howItWorks = [
  {
    step: '1',
    title: 'Find a Lower Price',
    description: 'Discover the same booking (same dates, property, and terms) at a lower total price on another platform.',
    icon: FileText,
  },
  {
    step: '2',
    title: 'Submit Your Request',
    description: 'Send us proof of the lower price before booking or within 24 hours of your Vayo Vault booking.',
    icon: Clock,
  },
  {
    step: '3',
    title: 'We Verify & Match',
    description: 'Our team reviews your submission and matches the price if it meets our guarantee criteria.',
    icon: Shield,
  },
  {
    step: '4',
    title: 'Get Your Refund',
    description: 'Receive a refund for the difference within 5-7 business days, credited back to your payment method.',
    icon: CheckCircle,
  },
]

const requirements = [
  'The competing price must be publicly available online',
  'Must be for the exact same property, dates, room type, and terms',
  'Competing price must include all taxes and fees',
  'Request must be submitted before booking or within 24 hours after booking',
  'Competing offer must be bookable at the time of your request',
  'Price match excludes package deals, group rates, and promotional codes',
  'Limited to 3 price match requests per membership year',
]

const faqs = [
  {
    question: 'How quickly will my price match be processed?',
    answer: 'We aim to review all price match requests within 24-48 hours. Once approved, refunds are processed within 5-7 business days.',
  },
  {
    question: 'What if the lower price is on a membership site?',
    answer: 'We\'ll match prices from other membership-based travel sites as long as the membership fee is comparable to or higher than Vayo Vault\'s $37/month fee.',
  },
  {
    question: 'Can I submit a price match after I\'ve checked out?',
    answer: 'Yes, you have 24 hours after booking to submit a price match request. After that window, we cannot honor the guarantee.',
  },
  {
    question: 'What counts as "the same booking"?',
    answer: 'The booking must match exactly: same property, same dates, same room type or vehicle class, same cancellation policy, and same amenities.',
  },
  {
    question: 'Are package deals eligible?',
    answer: 'No. Package deals that bundle multiple services (like flight + hotel) are excluded. We only match individual bookings for hotels, resorts, cruises, or car rentals.',
  },
  {
    question: 'How do I submit proof?',
    answer: 'Take a screenshot showing the property name, dates, total price (including taxes and fees), and URL. Submit it through our contact form or email support@vayovault.com.',
  },
]

export default function PriceMatchPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Price Match Guarantee"
          description="Found a lower price? We'll match it. Your savings are guaranteed."
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

        {/* Promise Section */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Our promise to you
                </h2>
                <p className="text-body-lg text-text-secondary">
                  We're confident our member pricing is the best available. But if you find a lower price elsewhere for the exact same booking, we'll match it — no questions asked.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card variant="purple" padding="lg" className="max-w-2xl mx-auto text-center">
                <h3 className="text-[24px] leading-[32px] font-semibold text-primary-dark mb-4">
                  100% Price Match Guarantee
                </h3>
                <p className="text-body-lg text-text-secondary">
                  If you find a qualifying lower price, we'll refund the difference. That's our commitment to delivering the best travel deals every time.
                </p>
              </Card>
            </FadeIn>
          </Container>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  How the price match works
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-display-sm font-bold text-primary mb-3">
                      {item.step}
                    </div>
                    <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-body-md text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Requirements */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Price match requirements
                </h2>
                <p className="text-body-lg text-text-secondary">
                  To qualify for our price match guarantee, the following criteria must be met:
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card padding="lg" className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-body-md text-text-secondary">
                        {requirement}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </Container>
        </section>

        {/* Example Section */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Real example
                </h2>
              </div>
            </FadeIn>

            <div className="max-w-4xl mx-auto">
              <FadeIn delay={0.2}>
                <Card padding="lg">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                        Scenario
                      </h3>
                      <p className="text-body-md text-text-secondary">
                        Sarah books a 3-night stay at the Oceanview Resort in Miami for $597 total through Vayo Vault (member pricing: $199/night). She later finds the exact same booking on another site for $567.
                      </p>
                    </div>

                    <div className="bg-background-light rounded-lg p-6">
                      <h4 className="text-body-md font-semibold text-primary-dark mb-4">
                        Timeline
                      </h4>
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-body-sm font-semibold text-primary">1</span>
                          </div>
                          <div>
                            <p className="text-body-sm font-semibold text-primary-dark">Sarah submits her request</p>
                            <p className="text-body-sm text-text-secondary">Within 24 hours of booking, she sends a screenshot of the competing price to support@vayovault.com</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-body-sm font-semibold text-primary">2</span>
                          </div>
                          <div>
                            <p className="text-body-sm font-semibold text-primary-dark">We verify the price</p>
                            <p className="text-body-sm text-text-secondary">Our team confirms the lower price is legitimate and meets all criteria</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-body-sm font-semibold text-primary">3</span>
                          </div>
                          <div>
                            <p className="text-body-sm font-semibold text-primary-dark">Sarah gets her refund</p>
                            <p className="text-body-sm text-text-secondary">$30 difference refunded to her original payment method within 5-7 business days</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <div className="flex items-center gap-2 text-green-800 mb-2">
                        <CheckCircle className="w-5 h-5" />
                        <p className="text-body-md font-semibold">Result</p>
                      </div>
                      <p className="text-body-md text-green-700">
                        Sarah saved an additional $30, bringing her total savings to over 60% compared to the original retail price.
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32">
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
                  Have more questions about our price match guarantee?
                </p>
                <a
                  href="/contact"
                  className="text-primary font-semibold hover:underline"
                >
                  Contact our support team
                </a>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <Card variant="purple" padding="lg" className="text-center">
                <h2 className="text-display-md font-display font-semibold text-primary-dark mb-4">
                  Shop with confidence
                </h2>
                <p className="text-body-lg text-text-secondary mb-8">
                  Our price match guarantee means you'll always get the best deal. Start your 14-day free trial today.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="/checkout"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="/how-it-works"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-gray-300 text-primary-dark font-semibold hover:border-primary transition-colors"
                  >
                    Learn How It Works
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
