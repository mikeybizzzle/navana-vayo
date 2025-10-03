'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { AffiliateStats } from '@/components/affiliate/AffiliateStats'
import { TrackingLinks } from '@/components/affiliate/TrackingLinks'
import { MarketingAssets } from '@/components/affiliate/MarketingAssets'
import {
  BarChart3,
  Calendar,
  Download,
  TrendingUp,
  Award,
} from 'lucide-react'

// Mock data - replace with real auth/data
const mockAffiliateData = {
  name: 'Sarah Johnson',
  affiliateCode: 'SARAH2025',
  tier: 'Pro',
  commission: 15,
  totalClicks: 4532,
  conversions: 68,
  totalEarnings: 5100,
  pendingEarnings: 975,
  conversionRate: 1.5,
  nextPayout: '2025-11-15',
  accountManager: {
    name: 'Mike Chen',
    email: 'mike.chen@vayovault.com',
  },
}

export default function AffiliateDashboardPage() {
  const earningsHistory = [
    { month: 'January', earnings: 850, conversions: 12 },
    { month: 'February', earnings: 1200, conversions: 18 },
    { month: 'March', earnings: 975, conversions: 15 },
    { month: 'April', earnings: 1125, conversions: 16 },
    { month: 'May', earnings: 950, conversions: 14 },
  ]

  const recentConversions = [
    { id: 1, customer: 'Customer #4532', date: '2025-10-28', amount: 1250, commission: 187.5 },
    { id: 2, customer: 'Customer #4531', date: '2025-10-27', amount: 890, commission: 133.5 },
    { id: 3, customer: 'Customer #4530', date: '2025-10-25', amount: 2100, commission: 315 },
    { id: 4, customer: 'Customer #4529', date: '2025-10-24', amount: 750, commission: 112.5 },
    { id: 5, customer: 'Customer #4528', date: '2025-10-22', amount: 1680, commission: 252 },
  ]

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
                    Welcome back, {mockAffiliateData.name}
                  </h1>
                  <p className="text-body-lg text-text-secondary">
                    {mockAffiliateData.tier} Tier • {mockAffiliateData.commission}% Commission
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="secondary" className="gap-2">
                    <Download className="w-5 h-5" />
                    Download Report
                  </Button>
                  <Button className="gap-2">
                    <Award className="w-5 h-5" />
                    Upgrade Tier
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Stats Overview */}
          <FadeIn delay={0.1}>
            <div className="mb-8">
              <AffiliateStats
                totalClicks={mockAffiliateData.totalClicks}
                conversions={mockAffiliateData.conversions}
                totalEarnings={mockAffiliateData.totalEarnings}
                pendingEarnings={mockAffiliateData.pendingEarnings}
                conversionRate={mockAffiliateData.conversionRate}
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
                        Next Payout: ${mockAffiliateData.pendingEarnings.toLocaleString()}
                      </h3>
                      <p className="text-text-secondary">
                        Scheduled for {new Date(mockAffiliateData.nextPayout).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  <Button>View Payout Settings</Button>
                </div>
              </Card>
            </div>
          </FadeIn>

          {/* Tracking Links */}
          <FadeIn delay={0.3}>
            <div className="mb-8">
              <TrackingLinks affiliateCode={mockAffiliateData.affiliateCode} />
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Recent Conversions */}
            <FadeIn delay={0.4}>
              <Card padding="lg">
                <h3 className="text-xl font-semibold text-primary-dark mb-6">Recent Conversions</h3>
                <div className="space-y-4">
                  {recentConversions.map((conversion) => (
                    <div
                      key={conversion.id}
                      className="flex items-center justify-between p-4 bg-background-light rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-primary-dark mb-1">{conversion.customer}</p>
                        <p className="text-sm text-text-secondary">
                          {new Date(conversion.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">+${conversion.commission}</p>
                        <p className="text-sm text-text-secondary">${conversion.amount} booking</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4">
                  View All Conversions
                </Button>
              </Card>
            </FadeIn>

            {/* Earnings Trend */}
            <FadeIn delay={0.5}>
              <Card padding="lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-primary-dark">Earnings Trend</h3>
                  <div className="flex items-center gap-2 text-green-600">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">+18% this month</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {earningsHistory.map((month, index) => {
                    const maxEarnings = Math.max(...earningsHistory.map((m) => m.earnings))
                    const percentage = (month.earnings / maxEarnings) * 100

                    return (
                      <div key={month.month}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{month.month}</span>
                          <span className="text-sm font-semibold text-primary-dark">
                            ${month.earnings}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-primary to-purple-600 h-3 rounded-full transition-all"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <p className="text-xs text-text-secondary mt-1">
                          {month.conversions} conversions
                        </p>
                      </div>
                    )
                  })}
                </div>
                <Button variant="ghost" className="w-full mt-4 gap-2">
                  <BarChart3 className="w-5 h-5" />
                  View Detailed Analytics
                </Button>
              </Card>
            </FadeIn>
          </div>

          {/* Marketing Assets */}
          <FadeIn delay={0.6}>
            <div className="mb-8">
              <MarketingAssets />
            </div>
          </FadeIn>

          {/* Support Section */}
          <FadeIn delay={0.7}>
            <Card padding="lg" className="bg-gradient-to-br from-primary to-primary-dark text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
                  <p className="text-white/90 mb-4">
                    Your dedicated account manager is here to help you succeed
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold">{mockAffiliateData.accountManager.name}</span>
                    <span className="opacity-75">•</span>
                    <a
                      href={`mailto:${mockAffiliateData.accountManager.email}`}
                      className="hover:underline"
                    >
                      {mockAffiliateData.accountManager.email}
                    </a>
                  </div>
                </div>
                <Button variant="secondary" size="lg">
                  Contact Support
                </Button>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </main>
      <Footer />
    </>
  )
}
