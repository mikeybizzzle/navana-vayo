import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { StatCard } from '@/components/ui/StatCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { Card } from '@/components/ui/Card'
import { CTA } from '@/components/sections/CTA'
import {
  Camera,
  Mail,
  Zap,
  CheckCircle,
  BarChart3,
  Database,
  Workflow,
  Clock,
  DollarSign,
  Shield,
  ArrowRight,
  X,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Expense Management Software | Navan',
  description: 'Automate expense reports, receipt capture, and approval workflows. Save 5+ hours per employee per month.',
}

const features = [
  {
    icon: Camera,
    title: 'Receipt Capture',
    description: 'Snap a photo or forward receipts via email for instant capture and categorization.',
  },
  {
    icon: Zap,
    title: 'Auto-Categorization',
    description: 'AI-powered categorization learns from your patterns and applies policies automatically.',
  },
  {
    icon: Workflow,
    title: 'Approval Workflows',
    description: 'Customizable approval chains with automatic routing based on amount and category.',
  },
  {
    icon: CheckCircle,
    title: 'Policy Enforcement',
    description: 'Real-time policy checks prevent out-of-policy expenses before they happen.',
  },
  {
    icon: Database,
    title: 'ERP Integration',
    description: 'Direct sync with QuickBooks, Xero, SAP, NetSuite, and 50+ accounting systems.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Reporting',
    description: 'Get instant visibility into company-wide spending with customizable dashboards.',
  },
]

const beforeAfter = {
  before: [
    'Paper receipts get lost',
    'Manual data entry errors',
    '2-3 weeks approval time',
    'Late expense submissions',
    'No policy enforcement',
    'Difficult reconciliation',
  ],
  after: [
    'Digital receipt storage',
    'Automatic data capture',
    'Same-day approvals',
    'Real-time submissions',
    'Automatic policy checks',
    'One-click reconciliation',
  ],
}

const integrations = [
  'QuickBooks Online',
  'Xero',
  'SAP',
  'NetSuite',
  'Sage Intacct',
  'Oracle',
  'Microsoft Dynamics',
  'Workday',
]

export default function ExpenseManagementPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Expense Management"
          title="Expense reports that write themselves"
          description="Automate the entire expense process from receipt capture to reimbursement. Save time, reduce errors, and get real-time visibility into company spending."
          primaryCTA={{ text: 'Get a Demo' }}
          secondaryCTA={{ text: 'Calculate Your Savings' }}
          image={
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 shadow-2xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <Camera className="w-20 h-20 text-primary mx-auto mb-4" />
                <p className="text-body-md text-text-secondary">
                  Expense Dashboard
                </p>
              </div>
            </div>
          }
        />

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-4 gap-8">
              <FadeIn>
                <StatCard value="5hrs" label="Saved per employee/month" variant="minimal" />
              </FadeIn>
              <FadeIn delay={0.1}>
                <StatCard value="85%" label="Faster approvals" variant="minimal" />
              </FadeIn>
              <FadeIn delay={0.2}>
                <StatCard value="99%" label="Accuracy rate" variant="minimal" />
              </FadeIn>
              <FadeIn delay={0.3}>
                <StatCard value="50+" label="ERP integrations" variant="minimal" />
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Key Features */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Automate every step of expense management
                </h2>
                <p className="text-body-lg text-text-secondary">
                  From receipt capture to reimbursement, eliminate manual work.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FadeIn key={feature.title} delay={index * 0.1}>
                  <FeatureCard {...feature} />
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Before & After */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Transform your expense process
                </h2>
                <p className="text-body-lg text-text-secondary">
                  See the difference automation makes.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Before */}
              <FadeIn>
                <Card padding="lg" className="h-full">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-body-sm font-semibold mb-4">
                      <X className="w-4 h-4" />
                      Before Navan
                    </div>
                    <h3 className="text-[28px] leading-[36px] font-display font-semibold text-primary-dark">
                      Manual & Time-Consuming
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {beforeAfter.before.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-text-secondary">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>

              {/* After */}
              <FadeIn delay={0.2}>
                <Card padding="lg" className="h-full border-2 border-primary">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 text-body-sm font-semibold mb-4">
                      <CheckCircle className="w-4 h-4" />
                      With Navan
                    </div>
                    <h3 className="text-[28px] leading-[36px] font-display font-semibold text-primary-dark">
                      Automated & Efficient
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {beforeAfter.after.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-text-primary font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Receipt Capture */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-6">
                    Capture receipts instantly
                  </h2>
                  <p className="text-body-lg text-text-secondary mb-8">
                    No more lost receipts or manual data entry. Capture expenses
                    in seconds with your phone or email.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Camera className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-[18px] leading-[26px] font-semibold text-primary-dark mb-2">
                          Photo Capture
                        </h3>
                        <p className="text-body-md text-text-secondary">
                          Snap a photo and our AI extracts all the details automatically
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-[18px] leading-[26px] font-semibold text-primary-dark mb-2">
                          Email Forwarding
                        </h3>
                        <p className="text-body-md text-text-secondary">
                          Forward receipts to your personal email address for instant processing
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-[18px] leading-[26px] font-semibold text-primary-dark mb-2">
                          Auto-Match
                        </h3>
                        <p className="text-body-md text-text-secondary">
                          Receipts automatically match to card transactions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-2xl bg-white border border-gray-200 shadow-xl aspect-[3/4] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Camera className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-body-md text-text-secondary">
                      Mobile Receipt Capture
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Integrations */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Seamless ERP integration
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Connect directly to your accounting system for one-click reconciliation.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {integrations.map((integration) => (
                  <div
                    key={integration}
                    className="flex items-center justify-center p-6 rounded-xl bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
                  >
                    <span className="text-[18px] font-semibold text-primary-dark text-center">
                      {integration}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="text-center mt-12">
                <p className="text-body-md text-text-secondary mb-4">
                  Plus 40+ more integrations
                </p>
                <button className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  View all integrations
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Testimonial */}
        <section className="py-20 md:py-32 bg-primary-dark text-white">
          <Container>
            <FadeIn>
              <div className="text-center max-w-4xl mx-auto">
                <div className="text-[32px] leading-[40px] font-display mb-6">
                  "We went from 3-week expense cycles to same-day approvals. Our finance team saves 20 hours per week."
                </div>
                <div>
                  <div className="font-semibold">Michelle Rodriguez</div>
                  <div className="text-body-sm text-white/70">
                    CFO, Global Industries
                  </div>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}