'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Clock,
  Users,
  Zap,
  Award,
  ArrowRight,
  Check
} from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    icon: DollarSign,
    title: '10-20% Commission',
    description: 'Industry-leading commission rates that scale with performance',
  },
  {
    icon: Clock,
    title: '90-Day Cookie',
    description: 'Long cookie window means more conversions credited to you',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track clicks, conversions, and earnings with advanced dashboard',
  },
  {
    icon: Zap,
    title: 'Quick Payouts',
    description: 'Monthly payments with low $100 minimum threshold',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Personal affiliate manager for Pro tier and above',
  },
  {
    icon: Award,
    title: 'Marketing Materials',
    description: 'Professional banners, emails, and social media assets',
  },
]

const tiers = [
  {
    name: 'Starter',
    bookings: '1-10',
    commission: '10%',
    features: [
      'Standard tracking links',
      'Basic marketing materials',
      'Email support',
      'Monthly payouts',
    ],
  },
  {
    name: 'Pro',
    bookings: '11-50',
    commission: '15%',
    features: [
      'Everything in Starter',
      'Dedicated account manager',
      'Priority support',
      'Custom promo codes',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    bookings: '51-200',
    commission: '18%',
    features: [
      'Everything in Pro',
      'Custom landing pages',
      'API access',
      'Co-marketing opportunities',
    ],
  },
  {
    name: 'Partner',
    bookings: '201+',
    commission: '20%',
    features: [
      'Everything in Elite',
      'Revenue share options',
      'Joint marketing budget',
      'White-label solutions',
    ],
  },
]

const idealPartners = [
  {
    title: 'Travel Bloggers',
    description: 'Share exclusive deals with your readers',
    icon: '✈️',
  },
  {
    title: 'Influencers',
    description: 'Monetize your travel content',
    icon: '📸',
  },
  {
    title: 'Deal Sites',
    description: 'Feature wholesale travel pricing',
    icon: '💰',
  },
  {
    title: 'Content Creators',
    description: 'YouTube, TikTok, Instagram creators',
    icon: '🎥',
  },
]

export default function AffiliatePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-white to-purple-50">
          <Container>
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4" />
                  Partner Program
                </div>

                <h1 className="text-display-xl md:text-[60px] md:leading-[72px] font-display font-semibold text-primary-dark mb-6">
                  Monetize your travel content
                </h1>

                <p className="text-body-lg md:text-[24px] md:leading-[36px] text-text-secondary mb-8">
                  Earn up to 20% commission on every booking. Join 500+ content creators earning with Vayo's affiliate program.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/affiliate/apply">
                    <Button size="lg" className="gap-2">
                      Apply Now
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Button variant="secondary" size="lg">
                    View Requirements
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-6 mt-16">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl font-bold text-primary mb-2">20%</div>
                    <div className="text-sm text-text-secondary">Commission Rate</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl font-bold text-primary mb-2">90</div>
                    <div className="text-sm text-text-secondary">Day Cookie Window</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl font-bold text-primary mb-2">$627</div>
                    <div className="text-sm text-text-secondary">Average Order Value</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Why Partner */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Why partner with Vayo?
                </h2>
                <p className="text-body-lg text-text-secondary">
                  We provide everything you need to succeed as an affiliate
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <FadeIn key={benefit.title} delay={index * 0.1}>
                  <Card padding="lg" className="h-full">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary">{benefit.description}</p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Commission Tiers */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background-light to-white">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Commission tiers
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Your commission grows as your performance increases
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tiers.map((tier, index) => (
                <FadeIn key={tier.name} delay={index * 0.1}>
                  <Card
                    padding="lg"
                    className={`h-full ${tier.popular ? 'ring-2 ring-primary shadow-xl' : ''}`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                        Most Popular
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-primary-dark mb-2">{tier.name}</h3>
                      <div className="text-sm text-text-secondary mb-4">
                        {tier.bookings} bookings/month
                      </div>
                      <div className="text-4xl font-bold text-primary">{tier.commission}</div>
                      <div className="text-sm text-text-secondary">commission</div>
                    </div>

                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Ideal Partners */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Ideal partners
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Perfect for content creators in the travel space
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {idealPartners.map((partner, index) => (
                <FadeIn key={partner.title} delay={index * 0.1}>
                  <Card padding="lg" className="text-center h-full">
                    <div className="text-5xl mb-4">{partner.icon}</div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">
                      {partner.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{partner.description}</p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Tools Preview */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary-dark text-white">
          <Container>
            <FadeIn>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-display-lg font-display font-semibold mb-4">
                    Powerful affiliate tools
                  </h2>
                  <p className="text-xl text-white/90">
                    Everything you need to maximize your earnings
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card padding="lg">
                    <h3 className="text-xl font-semibold text-primary-dark mb-4">
                      Marketing Materials
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        Banner ads (all sizes)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        Email templates
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        Social media graphics
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        Product images
                      </li>
                    </ul>
                  </Card>

                  <Card padding="lg">
                    <h3 className="text-xl font-semibold text-primary-dark mb-4">
                      Tracking & Analytics
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        Real-time click tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        Conversion analytics
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        Earnings reports
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        Deep linking capability
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg font-display font-semibold text-primary-dark mb-4">
                  What affiliates say
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Best converting travel offer I've promoted. The wholesale pricing angle really resonates with my audience.",
                  author: 'Sarah Johnson',
                  role: 'Travel Blogger',
                  earnings: '$12K/month',
                },
                {
                  quote: "The support team is incredible. My account manager helped me optimize my campaigns and double my conversions.",
                  author: 'Mike Chen',
                  role: 'YouTube Creator',
                  earnings: '$8K/month',
                },
                {
                  quote: "90-day cookie window is a game changer. I'm earning commissions on bookings weeks after the initial click.",
                  author: 'Emily Rodriguez',
                  role: 'Instagram Influencer',
                  earnings: '$15K/month',
                },
              ].map((testimonial, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card padding="lg" className="h-full">
                    <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-semibold text-primary-dark">{testimonial.author}</div>
                        <div className="text-sm text-text-secondary">{testimonial.role}</div>
                        <div className="text-sm font-semibold text-green-600 mt-1">
                          {testimonial.earnings}
                        </div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-6">
                  Ready to become an affiliate?
                </h2>
                <p className="text-xl text-text-secondary mb-8">
                  Join our partner program and start earning today
                </p>
                <Link href="/affiliate/apply">
                  <Button size="lg" className="gap-2">
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <p className="text-sm text-text-tertiary mt-4">
                  Application review typically takes 2-3 business days
                </p>
              </div>
            </FadeIn>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
