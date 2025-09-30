import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IconProps {
  icon: LucideIcon
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Icon({ icon: IconComponent, size = 'md', className }: IconProps) {
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  }

  return (
    <IconComponent
      className={cn(sizeStyles[size], className)}
      strokeWidth={1.5}
    />
  )
}