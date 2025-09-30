import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'full'
}

export function Container({
  children,
  size = 'lg',
  className,
  ...props
}: ContainerProps) {
  const sizeStyles = {
    sm: 'max-w-4xl',
    md: 'max-w-6xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <div
      className={cn(
        'mx-auto px-6 md:px-8 lg:px-12',
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}