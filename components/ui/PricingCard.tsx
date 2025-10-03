'use client'

import { ReactNode } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from 'lucide-react'

interface PricingCardProps {
  name: string
  price?: string
  billingPeriod?: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText: string
  ctaVariant?: 'primary' | 'secondary'
  badge?: string
}

export function PricingCard({
  name,
  price,
  billingPeriod,
  description,
  features,
  highlighted = false,
  ctaText,
  ctaVariant = 'primary',
  badge,
}: PricingCardProps) {
  return (
    <Card
      padding="lg"
      className={`relative h-full flex flex-col ${
        highlighted ? 'border-2 border-primary shadow-xl' : ''
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="px-4 py-1 rounded-full bg-primary text-white text-body-sm font-semibold">
            {badge}
          </div>
        </div>
      )}

      <div className="flex-grow">
        <h3 className="text-[28px] leading-[36px] font-display font-semibold text-primary-dark mb-2">
          {name}
        </h3>
        <p className="text-body-md text-text-secondary mb-6">{description}</p>

        {price && (
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-[48px] leading-[56px] font-display font-bold text-primary-dark">
                {price}
              </span>
              {billingPeriod && (
                <span className="text-body-md text-text-secondary">
                  {billingPeriod}
                </span>
              )}
            </div>
          </div>
        )}

        <div className="space-y-4 mb-8">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-body-md text-text-primary">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="/checkout">
        <Button
          variant={ctaVariant}
          size="lg"
          className="w-full"
        >
          {ctaText}
        </Button>
      </a>
    </Card>
  )
}