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
  Plane,
  Hotel,
  Car,
  DollarSign,
  Clock,
  Shield,
  Smartphone,
  Globe,
  CheckCircle,
  Calendar,
  CreditCard,
  HeadphonesIcon,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Travel Management | Navan',
  description: 'Book flights, hotels, and rental cars in seconds. Save up to 30% with built-in policy compliance and 24/7 support.',
}

const features = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Search and book from hundreds of airlines with real-time pricing and availability.',
  },
  {
    icon: Hotel,
    title: 'Hotel Reservations',
    description: 'Access exclusive corporate rates at over 1 million properties worldwide.',
  },
  {
    icon: Car,
    title: 'Rental Cars',
    description: 'Compare rates from all major providers and book instantly.',
  },
  {
    icon: DollarSign,
    title: 'Best Price Guarantee',
    description: 'Get the lowest available rates with price freeze technology.',
  },
  {
    icon: Clock,
    title: '3-Click Booking',
    description: 'Book entire trips in under 60 seconds with our streamlined interface.',
  },
  {
    icon: Shield,
    title: 'Policy Compliance',
    description: 'Automatic policy enforcement ensures all bookings are compliant.',
  },
]

const bookingSteps = [
  {
    number: '1',
    title: 'Search',
    description: 'Enter your travel details and preferences',
  },
  {
    number: '2',
    title: 'Compare',
    description: 'View all options with real-time pricing',
  },
  {
    number: '3',
    title: 'Book',
    description: 'Confirm and get instant confirmation',
  },
]

const integrations = [
  { icon: Calendar, name: 'Calendar Sync', description: 'Google, Outlook, iCal' },
  { icon: CreditCard, name: 'Expense Integration', description: 'Automatic expense reports' },
  { icon: Smartphone, name: 'Mobile App', description: 'iOS & Android apps' },
  { icon: HeadphonesIcon, name: '24/7 Support', description: 'Multi-language support' },
]

export default function BusinessTravelPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Business Travel"
          title="Book business travel in seconds"
          description="The fastest, easiest way to book flights, hotels, and rental cars. Save up to 30% with built-in policy compliance and exclusive corporate rates."
          primaryCTA={{ text: 'Get a Demo' }}
          secondaryCTA={{ text: 'See How It Works' }}
          image={
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 shadow-2xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <Plane className="w-20 h-20 text-primary mx-auto mb-4" />
                <p className="text-body-md text-text-secondary">
                  Travel Booking Interface
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
                <StatCard value="60s" label="Average booking time" variant="minimal" />
              </FadeIn>
              <FadeIn delay={0.1}>
                <StatCard value="30%" label="Average cost savings" variant="minimal" />
              </FadeIn>
              <FadeIn delay={0.2}>
                <StatCard value="24/7" label="Travel support" variant="minimal" />
              </FadeIn>
              <FadeIn delay={0.3}>
                <StatCard value="95%" label="Policy compliance" variant="minimal" />
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
                  Everything you need to manage business travel
                </h2>
                <p className="text-body-lg text-text-secondary">
                  From booking to expense reporting, we've got you covered.
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

        {/* Booking Flow */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Book in 3 simple steps
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Our streamlined booking process gets you on your way in under a minute.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {bookingSteps.map((step, index) => (
                <FadeIn key={step.number} delay={index * 0.15}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                      <span className="text-[28px] font-display font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-[24px] leading-[32px] font-semibold text-primary-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-body-md text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Visual Demo */}
            <FadeIn delay={0.5}>
              <div className="rounded-3xl bg-white border border-gray-200 shadow-xl aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-body-md text-text-secondary">
                    Interactive Booking Demo
                  </p>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Integrations */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Seamlessly integrated with your tools
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Connect with the tools you already use every day.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrations.map((integration, index) => (
                <FadeIn key={integration.name} delay={index * 0.1}>
                  <Card padding="lg" className="text-center">
                    <integration.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-[18px] leading-[26px] font-semibold text-primary-dark mb-2">
                      {integration.name}
                    </h3>
                    <p className="text-body-sm text-text-secondary">
                      {integration.description}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonial */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <Card variant="purple" padding="lg" className="max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-[32px] leading-[40px] font-display mb-6 text-primary-dark">
                    "Navan reduced our booking time by 80% and saved us over $500K in the first year."
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div>
                      <div className="font-semibold text-primary-dark">James Wilson</div>
                      <div className="text-body-sm text-text-secondary">
                        VP of Operations, TechCorp
                      </div>
                    </div>
                  </div>
                </div>
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