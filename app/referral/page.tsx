'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { ReferralStats } from '@/components/referral/ReferralStats'
import { ShareTools } from '@/components/referral/ShareTools'
import { DollarSign, Users, Gift, ArrowRight, Check } from 'lucide-react'

// Mock data - replace with real auth/data
const isLoggedIn = false
const mockUserData = {
  referralCode: 'JOHN2025',
  referralLink: 'https://vayovault.com/?ref=JOHN2025',
  totalEarnings: 750,
  pendingEarnings: 250,
  totalReferrals: 15,
  conversionRate: 67,
}

const rewardTiers = [
  {
    referrals: '1-3',
    reward: '$50',
    bonus: 'None',
  },
  {
    referrals: '4-10',
    reward: '$75',
    bonus: 'Free Premium (1 year)',
    popular: true,
  },
  {
    referrals: '11-25',
    reward: '$100',
    bonus: 'Free VIP (1 year)',
  },
  {
    referrals: '26+',
    reward: '$150',
    bonus: 'Lifetime VIP + Credit',
  },
]

const howItWorks = [
  {
    step: '1',
    title: 'Share your code',
    description: 'Send your unique referral code to friends via email, social media, or text.',
    icon: Users,
  },
  {
    step: '2',
    title: 'They save $100',
    description: 'Your friend gets $100 off their first booking of $500 or more.',
    icon: Gift,
  },
  {
    step: '3',
    title: 'You earn rewards',
    description: 'Earn $50-$150 per referral, plus unlock exclusive bonuses.',
    icon: DollarSign,
  },
]

export default function ReferralPage() {
  const [calculatorReferrals, setCalculatorReferrals] = useState(5)

  const calculateEarnings = (referrals: number) => {
    if (referrals <= 3) return referrals * 50
    if (referrals <= 10) return referrals * 75
    if (referrals <= 25) return referrals * 100
    return referrals * 150
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-white to-purple-50">
          <Container>
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                  <DollarSign className="w-4 h-4" />
                  Earn up to $150 per referral
                </div>

                <h1 className="text-display-xl md:text-[60px] md:leading-[72px] font-display font-semibold text-primary-dark mb-6">
                  Share Vayo, earn rewards
                </h1>

                <p className="text-body-lg md:text-[24px] md:leading-[36px] text-text-secondary mb-8">
                  Help your friends save on travel and earn cash for every booking they make. It's a win-win.
                </p>

                {!isLoggedIn ? (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/referral/signup">
                      <Button size="lg" className="gap-2">
                        Start Referring
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                    <Button variant="secondary" size="lg">
                      Learn More
                    </Button>
                  </div>
                ) : (
                  <p className="text-text-secondary">
                    Scroll down to access your referral dashboard
                  </p>
                )}
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Dashboard (Logged In Users Only) */}
        {isLoggedIn && (
          <section className="py-20 bg-background-light">
            <Container>
              <FadeIn>
                <h2 className="text-display-lg font-display font-semibold text-primary-dark mb-8">
                  Your Referral Dashboard
                </h2>

                <div className="mb-8">
                  <ReferralStats {...mockUserData} />
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <ShareTools
                    referralCode={mockUserData.referralCode}
                    referralLink={mockUserData.referralLink}
                  />

                  {/* Recent Referrals */}
                  <Card padding="lg">
                    <h3 className="text-xl font-semibold text-primary-dark mb-4">
                      Recent Referrals
                    </h3>
                    <div className="space-y-4">
                      {[
                        { name: 'Sarah M.', status: 'Booked', amount: 75, date: '2 days ago' },
                        { name: 'Mike C.', status: 'Signed Up', amount: 0, date: '5 days ago' },
                        { name: 'Jennifer L.', status: 'Booked', amount: 100, date: '1 week ago' },
                      ].map((referral, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 bg-background-light rounded-lg"
                        >
                          <div>
                            <p className="font-medium text-primary-dark">{referral.name}</p>
                            <p className="text-sm text-text-secondary">{referral.date}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-semibold ${referral.amount > 0 ? 'text-green-600' : 'text-gray-500'}`}>
                              {referral.amount > 0 ? `+$${referral.amount}` : 'Pending'}
                            </p>
                            <p className="text-sm text-text-secondary">{referral.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </FadeIn>
            </Container>
          </section>
        )}

        {/* How It Works */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  How it works
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Three simple steps to start earning
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((item, index) => (
                <FadeIn key={item.step} delay={index * 0.1}>
                  <Card padding="lg" className="text-center h-full">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Reward Calculator */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary-dark text-white">
          <Container>
            <FadeIn>
              <div className="max-w-2xl mx-auto">
                <h2 className="text-display-lg font-display font-semibold mb-4 text-center">
                  Calculate your earnings
                </h2>
                <p className="text-lg text-white/80 mb-12 text-center">
                  See how much you could earn by referring friends
                </p>

                <Card padding="lg" className="bg-white text-gray-900">
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Number of referrals: <span className="text-2xl font-bold text-primary">{calculatorReferrals}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={calculatorReferrals}
                      onChange={(e) => setCalculatorReferrals(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>1</span>
                      <span>50</span>
                    </div>
                  </div>

                  <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                    <p className="text-lg text-gray-700 mb-2">You could earn</p>
                    <p className="text-5xl font-bold text-green-600 mb-4">
                      ${calculateEarnings(calculatorReferrals).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Plus unlock bonus perks based on your tier
                    </p>
                  </div>
                </Card>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Reward Tiers */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Reward tiers
                </h2>
                <p className="text-body-lg text-text-secondary">
                  The more you refer, the more you earn
                </p>
              </div>
            </FadeIn>

            <div className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Referrals
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Reward Per Referral
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Bonus Perks
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rewardTiers.map((tier, index) => (
                      <FadeIn key={index} delay={index * 0.1}>
                        <tr
                          className={`border-b border-gray-200 ${
                            tier.popular ? 'bg-primary/5' : ''
                          }`}
                        >
                          <td className="px-6 py-4">
                            <span className="text-lg font-semibold text-primary-dark">
                              {tier.referrals}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-2xl font-bold text-green-600">
                              {tier.reward}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-text-secondary">
                            {tier.bonus}
                            {tier.popular && (
                              <span className="ml-2 px-2 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                                Popular
                              </span>
                            )}
                          </td>
                        </tr>
                      </FadeIn>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg font-display font-semibold text-primary-dark mb-4">
                  Frequently asked questions
                </h2>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'When do I get paid?',
                  a: 'You earn rewards immediately when your referral completes their first booking. Payouts are processed within 30 days of the booking completion.',
                },
                {
                  q: 'Is there a limit to how many people I can refer?',
                  a: 'No! You can refer as many friends as you want. The more you refer, the higher your reward per referral.',
                },
                {
                  q: 'What does my friend get?',
                  a: 'Your friend receives $100 off their first booking of $500 or more, plus access to all member-only wholesale pricing.',
                },
                {
                  q: 'How do I receive my earnings?',
                  a: 'You can choose to receive payouts via bank transfer, PayPal, or as Vayo travel credits with a 10% bonus.',
                },
              ].map((faq, index) => (
                <FadeIn key={index} delay={index * 0.05}>
                  <Card padding="lg">
                    <h3 className="text-lg font-semibold text-primary-dark mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-text-secondary">{faq.a}</p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary-dark text-white">
          <Container>
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold mb-6">
                  Ready to start earning?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join thousands of members earning rewards by sharing Vayo
                </p>
                <Link href={isLoggedIn ? '/referral/dashboard' : '/referral/signup'}>
                  <Button size="lg" variant="secondary" className="gap-2">
                    {isLoggedIn ? 'Go to Dashboard' : 'Sign Up Free'}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
