import { LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/Card'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  variant?: 'default' | 'compact'
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = 'default',
}: FeatureCardProps) {
  if (variant === 'compact') {
    return (
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-[18px] leading-[26px] font-semibold text-primary-dark mb-2">
            {title}
          </h3>
          <p className="text-body-md text-text-secondary">{description}</p>
        </div>
      </div>
    )
  }

  return (
    <Card hover padding="lg">
      <div className="flex flex-col h-full">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-[24px] leading-[32px] font-semibold text-primary-dark mb-3">
          {title}
        </h3>
        <p className="text-body-md text-text-secondary">{description}</p>
      </div>
    </Card>
  )
}