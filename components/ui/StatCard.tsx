interface StatCardProps {
  value: string
  label: string
  description?: string
  variant?: 'default' | 'minimal'
}

export function StatCard({
  value,
  label,
  description,
  variant = 'default',
}: StatCardProps) {
  if (variant === 'minimal') {
    return (
      <div className="text-center">
        <div className="text-[48px] leading-[56px] font-display font-bold text-primary mb-2">
          {value}
        </div>
        <div className="text-body-md font-semibold text-primary-dark">
          {label}
        </div>
      </div>
    )
  }

  return (
    <div className="text-center p-8 rounded-2xl bg-background-light">
      <div className="text-[48px] leading-[56px] font-display font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-body-md font-semibold text-primary-dark mb-3">
        {label}
      </div>
      {description && (
        <p className="text-body-sm text-text-secondary">{description}</p>
      )}
    </div>
  )
}