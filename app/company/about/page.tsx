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
  Target,
  Users,
  Globe,
  Award,
  Heart,
  Zap,
  Shield,
  Sparkles,
} from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us | Vayo Vault',
  description: 'Learn about Vayo Vault\'s mission to provide travelers access to wholesale pricing and hidden resort deals without timeshare presentations.',
}

const stats = [
  { value: '50%', label: 'Average savings' },
  { value: 'Global', label: 'Coverage worldwide' },
  { value: 'Thousands', label: 'Members trust us' },
  { value: '$37/mo', label: 'Simple pricing' },
]

const values = [
  {
    icon: Target,
    title: 'Transparency First',
    description: 'We show you exactly how we get our deals and guarantee our pricing is legitimate.',
  },
  {
    icon: Users,
    title: 'Member-Focused',
    description: 'Every decision we make starts with understanding what travelers need and value.',
  },
  {
    icon: Zap,
    title: 'No Pressure',
    description: 'We\'ll never make you sit through a timeshare presentation or sign a long-term contract.',
  },
  {
    icon: Shield,
    title: 'Trust & Protection',
    description: 'Our price match guarantee and clear terms build confidence in every booking.',
  },
  {
    icon: Heart,
    title: 'Care Deeply',
    description: 'We genuinely care about helping members save money and vacation better.',
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    description: 'We pursue excellence in sourcing inventory, platform experience, and member support.',
  },
]

const timeline = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Started with a vision to democratize access to wholesale travel pricing.',
  },
  {
    year: '2021',
    title: 'First 1,000 Members',
    description: 'Reached our first major milestone with growing member base.',
  },
  {
    year: '2022',
    title: 'Cruise Inventory Launch',
    description: 'Expanded beyond resorts to offer deeply discounted cruise cabins.',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded coverage to destinations in 150+ countries.',
  },
  {
    year: '2024',
    title: 'Price Match Guarantee',
    description: 'Launched industry-leading price protection for all members.',
  },
]

const leadership = [
  {
    name: 'Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Former VP at leading travel tech company. Stanford MBA.',
  },
  {
    name: 'Michael Torres',
    role: 'Chief Technology Officer',
    bio: 'Built scalable systems at Fortune 500 companies. MIT Computer Science.',
  },
  {
    name: 'Jessica Williams',
    role: 'Chief Financial Officer',
    bio: '20+ years in fintech and SaaS. Former CFO at enterprise software company.',
  },
  {
    name: 'David Park',
    role: 'Chief Product Officer',
    bio: 'Led product teams at major tech companies. Passionate about user experience.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Vacation deals without the pressure"
          description="We're on a mission to help travelers access wholesale pricing and hidden resort deals without timeshare presentations or contracts."
          background="gradient"
          image={
            <div className="rounded-3xl overflow-hidden shadow-xl relative aspect-[4/3]">
              <Image
                src="/images/Family on Vacation.png"
                alt="Family on vacation"
                fill
                className="object-cover"
              />
            </div>
          }
        />

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 0.1}>
                  <StatCard value={stat.value} label={stat.label} variant="minimal" />
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Our Story */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-6">
                  Our Story
                </h2>
                <p className="text-body-lg text-text-secondary mb-6">
                  Vayo Vault was born from a simple observation: travelers were overpaying for hotels, resorts, and cruises because public booking sites couldn't show wholesale rates. Rate-parity rules and contracts prevent public platforms from displaying the private inventory that gets sold in bulk at deep discounts.
                </p>
                <p className="text-body-lg text-text-secondary">
                  We knew there had to be a better way. So we built it. By creating a members-only platform and purchasing unsold inventory in bulk, we unlock prices the public can't access. Today, Vayo Vault serves thousands of travelers worldwide, delivering about 50% savings on average—all without timeshare pitches or hidden fees.
                </p>
              </div>
            </FadeIn>

            {/* Timeline */}
            <FadeIn delay={0.2}>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={item.year} className="flex gap-6">
                      <div className="flex-shrink-0 w-24">
                        <div className="text-[24px] leading-[32px] font-display font-bold text-primary">
                          {item.year}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <Card padding="lg">
                          <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-2">
                            {item.title}
                          </h3>
                          <p className="text-body-md text-text-secondary">
                            {item.description}
                          </p>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Values */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Our Values
                </h2>
                <p className="text-body-lg text-text-secondary">
                  These principles guide everything we do, from building products to supporting customers.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <FadeIn key={value.title} delay={index * 0.1}>
                  <Card padding="lg" className="h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                      {value.title}
                    </h3>
                    <p className="text-body-md text-text-secondary">
                      {value.description}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Leadership */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Leadership Team
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Meet the team leading Vayo Vault's mission to deliver wholesale travel pricing to members.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <FadeIn key={leader.name} delay={index * 0.1}>
                  <Card padding="lg" className="text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-[18px] leading-[26px] font-semibold text-primary-dark mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-body-sm text-primary mb-3">{leader.role}</p>
                    <p className="text-body-sm text-text-secondary">{leader.bio}</p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Careers CTA */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <Card variant="purple" padding="lg" className="text-center">
                <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-display-md font-display font-semibold text-primary-dark mb-4">
                  Ready to See Member Rates?
                </h2>
                <p className="text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                  Join thousands of travelers saving about 50% on hotels, resorts, cruises, and car rentals.
                </p>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start Free Trial
                </a>
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
