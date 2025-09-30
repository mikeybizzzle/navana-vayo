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

export const metadata: Metadata = {
  title: 'About Us | Navan',
  description: 'Learn about Navan\'s mission to simplify business travel and expense management for companies worldwide.',
}

const stats = [
  { value: '10M+', label: 'Trips booked annually' },
  { value: '150+', label: 'Countries served' },
  { value: '5000+', label: 'Companies trust us' },
  { value: '98%', label: 'Customer satisfaction' },
]

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We exist to make business travel and expense management effortless for every company.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Every decision we make starts with understanding our customers\' needs and challenges.',
  },
  {
    icon: Zap,
    title: 'Move Fast',
    description: 'We ship quickly, iterate constantly, and aren\'t afraid to fail forward.',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'We build products and relationships based on honesty and reliability.',
  },
  {
    icon: Heart,
    title: 'Care Deeply',
    description: 'We genuinely care about our customers, teammates, and the impact we make.',
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    description: 'We pursue excellence in everything we do, from product to support.',
  },
]

const timeline = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Started with a vision to revolutionize business travel management.',
  },
  {
    year: '2017',
    title: '1M Trips Booked',
    description: 'Reached our first major milestone with expanding customer base.',
  },
  {
    year: '2019',
    title: 'Expense Management Launch',
    description: 'Expanded beyond travel to offer comprehensive expense solutions.',
  },
  {
    year: '2021',
    title: 'Global Expansion',
    description: 'Expanded operations to 150+ countries worldwide.',
  },
  {
    year: '2023',
    title: '5000+ Companies',
    description: 'Now trusted by thousands of companies around the globe.',
  },
  {
    year: '2024',
    title: 'AI-Powered Features',
    description: 'Launched advanced AI features for smarter booking and expense automation.',
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
          title="Making business travel and expenses effortless"
          description="We're on a mission to help companies of all sizes manage travel and expenses with ease, saving time and money while empowering employees."
          background="gradient"
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
                  Navan was born from a simple observation: business travel and expense
                  management were stuck in the past. Companies were using multiple tools,
                  employees were frustrated with slow reimbursements, and finance teams
                  spent countless hours on manual processes.
                </p>
                <p className="text-body-lg text-text-secondary">
                  We knew there had to be a better way. So we built it. Today, Navan serves
                  thousands of companies worldwide, processing millions of trips and expenses
                  every year, all while making the experience delightful for everyone involved.
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
                  Meet the team leading Navan's mission to transform business travel and expenses.
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
                  Join Our Team
                </h2>
                <p className="text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                  We're always looking for talented people who share our passion for building
                  great products and delivering exceptional customer experiences.
                </p>
                <a
                  href="/careers"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                >
                  View Open Positions
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
