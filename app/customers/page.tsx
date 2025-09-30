import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { StatCard } from '@/components/ui/StatCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { Card } from '@/components/ui/Card'
import { CTA } from '@/components/sections/CTA'
import {
  Building2,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  Star,
  Quote,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Stories | Navan',
  description: 'See how companies around the world save time and money with Navan\'s travel and expense management platform.',
}

const caseStudies = [
  {
    company: 'TechCorp Global',
    industry: 'Technology',
    size: '2,500 employees',
    logo: Building2,
    challenge: 'Manual expense reporting was taking 5+ hours per employee per month, leading to delayed reimbursements and frustrated teams.',
    solution: 'Implemented Navan\'s automated expense management with receipt capture and real-time policy enforcement.',
    results: [
      { metric: '85%', label: 'Time savings on expense reports' },
      { metric: '$750K', label: 'Annual cost savings' },
      { metric: '2 days', label: 'Faster reimbursements' },
    ],
    testimonial: {
      quote: 'Navan has completely transformed how we manage expenses. What used to take hours now takes minutes, and our employees are much happier.',
      author: 'Sarah Johnson',
      role: 'CFO, TechCorp Global',
    },
  },
  {
    company: 'Global Consulting Partners',
    industry: 'Consulting',
    size: '5,000 employees',
    logo: Building2,
    challenge: 'Consultants were wasting hours booking travel and struggled with out-of-policy bookings that required manual approval.',
    solution: 'Deployed Navan\'s travel booking platform with custom policy controls and 24/7 support for global teams.',
    results: [
      { metric: '30%', label: 'Reduction in travel costs' },
      { metric: '95%', label: 'Policy compliance rate' },
      { metric: '60 sec', label: 'Average booking time' },
    ],
    testimonial: {
      quote: 'Our consultants can now book travel in seconds, and we have complete visibility into spending. The ROI was immediate.',
      author: 'Michael Chen',
      role: 'VP Operations, Global Consulting Partners',
    },
  },
  {
    company: 'InnovateLabs',
    industry: 'Biotech',
    size: '800 employees',
    logo: Building2,
    challenge: 'Rapid growth meant scaling their travel and expense processes, but existing tools couldn\'t keep up.',
    solution: 'Switched to Navan for unified travel booking, expense management, and corporate card program.',
    results: [
      { metric: '50%', label: 'Faster month-end close' },
      { metric: '99%', label: 'Receipt capture rate' },
      { metric: '40 hrs', label: 'Saved per month for finance team' },
    ],
    testimonial: {
      quote: 'As we scaled from 200 to 800 employees, Navan scaled with us effortlessly. It\'s the best investment we\'ve made in our finance stack.',
      author: 'Emily Rodriguez',
      role: 'Controller, InnovateLabs',
    },
  },
]

const industries = [
  { name: 'Technology', count: '2,000+' },
  { name: 'Professional Services', count: '1,500+' },
  { name: 'Financial Services', count: '800+' },
  { name: 'Healthcare', count: '600+' },
  { name: 'Manufacturing', count: '500+' },
  { name: 'Retail', count: '400+' },
]

const quickStats = [
  {
    icon: Clock,
    value: '5+ hours',
    label: 'Saved per employee/month',
  },
  {
    icon: DollarSign,
    value: '30%',
    label: 'Average cost savings',
  },
  {
    icon: Users,
    value: '98%',
    label: 'Customer satisfaction',
  },
  {
    icon: TrendingUp,
    value: '10M+',
    label: 'Trips booked annually',
  },
]

export default function CustomersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Trusted by thousands of companies worldwide"
          description="See how organizations of all sizes use Navan to save time, reduce costs, and empower their teams."
          primaryCTA={{ text: 'Get a Demo' }}
          background="default"
        />

        {/* Quick Stats */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-4 gap-8">
              {quickStats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 0.1}>
                  <Card padding="lg" className="text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-[36px] leading-[44px] font-display font-bold text-primary-dark mb-2">
                      {stat.value}
                    </div>
                    <div className="text-body-sm text-text-secondary">{stat.label}</div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Case Studies */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Customer Success Stories
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Real results from real companies using Navan every day.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <FadeIn key={study.company} delay={index * 0.2}>
                  <Card padding="none" className="overflow-hidden">
                    <div className="grid lg:grid-cols-5">
                      {/* Left Column - Company Info */}
                      <div className="lg:col-span-2 p-8 lg:p-12 bg-primary/5">
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                          <study.logo className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-[28px] leading-[36px] font-display font-semibold text-primary-dark mb-2">
                          {study.company}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-6">
                          <span className="px-3 py-1 rounded-full bg-white text-body-sm text-text-secondary">
                            {study.industry}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-white text-body-sm text-text-secondary">
                            {study.size}
                          </span>
                        </div>

                        {/* Results */}
                        <div className="space-y-4">
                          {study.results.map((result) => (
                            <div key={result.label}>
                              <div className="text-[32px] leading-[40px] font-display font-bold text-primary mb-1">
                                {result.metric}
                              </div>
                              <div className="text-body-sm text-text-secondary">
                                {result.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column - Story */}
                      <div className="lg:col-span-3 p-8 lg:p-12">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-[18px] leading-[26px] font-semibold text-primary mb-3">
                              The Challenge
                            </h4>
                            <p className="text-body-md text-text-secondary">
                              {study.challenge}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-[18px] leading-[26px] font-semibold text-primary mb-3">
                              The Solution
                            </h4>
                            <p className="text-body-md text-text-secondary">
                              {study.solution}
                            </p>
                          </div>

                          {/* Testimonial */}
                          <div className="pt-6 border-t border-gray-200">
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />
                            <p className="text-[18px] leading-[28px] text-text-primary italic mb-4">
                              "{study.testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <div className="font-semibold text-primary-dark">
                                  {study.testimonial.author}
                                </div>
                                <div className="text-body-sm text-text-secondary">
                                  {study.testimonial.role}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Industries Served */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Serving Every Industry
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Companies across all sectors trust Navan for their travel and expense needs.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <FadeIn key={industry.name} delay={index * 0.1}>
                  <Card padding="lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-1">
                          {industry.name}
                        </h3>
                        <p className="text-body-sm text-text-secondary">
                          {industry.count} companies
                        </p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Rating/Reviews */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <Card padding="lg" className="text-center max-w-4xl mx-auto">
                <div className="flex justify-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-[48px] leading-[56px] font-display font-bold text-primary-dark mb-4">
                  4.8/5.0
                </div>
                <p className="text-body-lg text-text-secondary mb-2">
                  Average rating from 1,200+ reviews
                </p>
                <p className="text-body-md text-text-secondary">
                  on G2, Capterra, and TrustRadius
                </p>
              </Card>
            </FadeIn>
          </Container>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
