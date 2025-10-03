import { Card } from '@/components/ui/Card'
import { DollarSign, Users, TrendingUp, Gift } from 'lucide-react'

interface StatsProps {
  totalEarnings?: number
  pendingEarnings?: number
  totalReferrals?: number
  conversionRate?: number
}

export function ReferralStats({
  totalEarnings = 0,
  pendingEarnings = 0,
  totalReferrals = 0,
  conversionRate = 0,
}: StatsProps) {
  const stats = [
    {
      label: 'Total Earnings',
      value: `$${totalEarnings.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Pending Earnings',
      value: `$${pendingEarnings.toLocaleString()}`,
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Total Referrals',
      value: totalReferrals.toString(),
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      label: 'Conversion Rate',
      value: `${conversionRate}%`,
      icon: Gift,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.label} padding="lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-primary-dark">{stat.value}</p>
            </div>
            <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
