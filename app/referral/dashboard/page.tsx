'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { ReferralStats } from '@/components/referral/ReferralStats'
import { ShareTools } from '@/components/referral/ShareTools'
import {
  TrendingUp,
  Calendar,
  Download,
  Gift,
  ArrowRight,
} from 'lucide-react'

// Mock data - replace with real auth/data
const mockUserData = {
  firstName: 'Sarah',
  lastName: 'Johnson',
  referralCode: 'SARAH2025',
  referralLink: 'https://vayovault.com/?ref=SARAH2025',
  totalEarnings: 750,
  pendingEarnings: 250,
  totalReferrals: 15,
  conversionRate: 67,
  currentTier: 'Pro',
  nextPayout: '2025-11-15',
}

export default function ReferralDashboardPage() {
  const recentReferrals = [
    { id: 1, name: 'Sarah M.', status: 'Booked', amount: 75, date: '2025-10-28' },
    { id: 2, name: 'Mike C.', status: 'Signed Up', amount: 0, date: '2025-10-27' },
    { id: 3, name: 'Jennifer L.', status: 'Booked', amount: 100, date: '2025-10-25' },
    { id: 4, name: 'David K.', status: 'Booked', amount: 75, date: '2025-10-23' },
    { id: 5, name: 'Emily R.', status: 'Signed Up', amount: 0, date: '2025-10-22' },
  ]

  const earningsHistory = [
    { month: 'June', earnings: 125, referrals: 2 },
    { month: 'July', earnings: 200, referrals: 3 },
    { month: 'August', earnings: 175, referrals: 2 },
    { month: 'September', earnings: 250, referrals: 4 },
    { month: 'October', earnings: 0, referrals: 4, pending: true },
  ]

  const nextTierProgress = {
    current: mockUserData.totalReferrals,
    target: 25,
    currentTier: 'Pro',
    nextTier: 'Elite',
    currentReward: '$75',
    nextReward: '$100',
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 py-12 bg-background-light">
        <Container>
          {/* Welcome Section */}
          <FadeIn>
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-display-lg font-display font-semibold text-primary-dark mb-2">
                    Welcome back, {mockUserData.firstName}
                  </h1>
                  <p className="text-body-lg text-text-secondary">
                    {mockUserData.currentTier} Tier • {nextTierProgress.currentReward} per referral
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="secondary" className="gap-2">
                    <Download className="w-5 h-5" />
                    Download Report
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Stats Overview */}
          <FadeIn delay={0.1}>
            <div className="mb-8">
              <ReferralStats
                totalEarnings={mockUserData.totalEarnings}
                pendingEarnings={mockUserData.pendingEarnings}
                totalReferrals={mockUserData.totalReferrals}
                conversionRate={mockUserData.conversionRate}
              />
            </div>
          </FadeIn>

          {/* Next Payout Alert */}
          <FadeIn delay={0.2}>
            <div className="mb-8">
              <Card padding="lg" className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-dark mb-1">
                        Next Payout: ${mockUserData.pendingEarnings.toLocaleString()}
                      </h3>
                      <p className="text-text-secondary">
                        Scheduled for {new Date(mockUserData.nextPayout).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  <Button>View Payout Settings</Button>
                </div>
              </Card>
            </div>
          </FadeIn>

          {/* Progress to Next Tier */}
          <FadeIn delay={0.3}>
            <div className="mb-8">
              <Card padding="lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-1">
                      Progress to {nextTierProgress.nextTier} Tier
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {nextTierProgress.target - nextTierProgress.current} more referrals to unlock {nextTierProgress.nextReward} per referral
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">
                      {nextTierProgress.current}/{nextTierProgress.target}
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-primary to-purple-600 h-4 rounded-full transition-all flex items-center justify-end pr-2"
                    style={{ width: `${(nextTierProgress.current / nextTierProgress.target) * 100}%` }}
                  >
                    <span className="text-xs font-semibold text-white">
                      {Math.round((nextTierProgress.current / nextTierProgress.target) * 100)}%
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>

          {/* Share Tools */}
          <FadeIn delay={0.4}>
            <div className="mb-8">
              <ShareTools
                referralCode={mockUserData.referralCode}
                referralLink={mockUserData.referralLink}
              />
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Recent Referrals */}
            <FadeIn delay={0.5}>
              <Card padding="lg">
                <h3 className="text-xl font-semibold text-primary-dark mb-6">Recent Referrals</h3>
                <div className="space-y-4">
                  {recentReferrals.map((referral) => (
                    <div
                      key={referral.id}
                      className="flex items-center justify-between p-4 bg-background-light rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-primary-dark mb-1">{referral.name}</p>
                        <p className="text-sm text-text-secondary">
                          {new Date(referral.date).toLocaleDateString()}
                        </p>
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
                <Button variant="ghost" className="w-full mt-4">
                  View All Referrals
                </Button>
              </Card>
            </FadeIn>

            {/* Earnings History */}
            <FadeIn delay={0.6}>
              <Card padding="lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-primary-dark">Earnings History</h3>
                  <div className="flex items-center gap-2 text-green-600">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold text-sm">+28% vs last month</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {earningsHistory.map((month, index) => {
                    const maxEarnings = Math.max(...earningsHistory.map((m) => m.earnings || 1))
                    const percentage = ((month.earnings || 1) / maxEarnings) * 100

                    return (
                      <div key={month.month}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{month.month}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-text-secondary">{month.referrals} referrals</span>
                            <span className="text-sm font-semibold text-primary-dark">
                              {month.pending ? 'Pending' : `$${month.earnings}`}
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${month.pending ? 'bg-gray-400' : 'bg-gradient-to-r from-primary to-purple-600'} h-2 rounded-full transition-all`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </FadeIn>
          </div>

          {/* Quick Tips */}
          <FadeIn delay={0.7}>
            <Card padding="lg" className="bg-gradient-to-br from-primary to-primary-dark text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Maximize Your Earnings</h3>
                  <ul className="space-y-2 text-white/90 text-sm mb-4">
                    <li>• Share your code on social media to reach more people</li>
                    <li>• Personal recommendations convert 3x better than generic posts</li>
                    <li>• Remind friends about their $100 welcome discount</li>
                    <li>• Track which channels work best using custom tracking links</li>
                  </ul>
                  <Button variant="secondary" size="sm" className="gap-2">
                    Learn Best Practices
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </main>
      <Footer />
    </>
  )
}
