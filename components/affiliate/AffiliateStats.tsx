import { Card } from '@/components/ui/Card'
import { DollarSign, MousePointer, ShoppingBag, TrendingUp } from 'lucide-react'

interface AffiliateStatsProps {
  totalClicks?: number
  conversions?: number
  totalEarnings?: number
  pendingEarnings?: number
  conversionRate?: number
}

export function AffiliateStats({
  totalClicks = 0,
  conversions = 0,
  totalEarnings = 0,
  pendingEarnings = 0,
  conversionRate = 0,
}: AffiliateStatsProps) {
  const stats = [
    {
      label: 'Total Clicks',
      value: totalClicks.toLocaleString(),
      icon: MousePointer,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Conversions',
      value: conversions.toLocaleString(),
      icon: ShoppingBag,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      label: 'Total Earnings',
      value: `$${totalEarnings.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Pending',
      value: `$${pendingEarnings.toLocaleString()}`,
      icon: TrendingUp,
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
              {stat.label === 'Total Clicks' && (
                <p className="text-sm text-green-600 mt-1">
                  {conversionRate}% conversion
                </p>
              )}
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
