import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'purple' | 'warm' | 'gray'
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({
  children,
  variant = 'default',
  hover = false,
  padding = 'md',
  className,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-300'

  const variantStyles = {
    default: 'bg-white',
    purple: 'bg-background-purple',
    warm: 'bg-background-warm',
    gray: 'bg-background-gray',
  }

  const hoverStyles = hover
    ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer'
    : ''

  const paddingStyles = {
    none: '',
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-12',
  }

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        hoverStyles,
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}