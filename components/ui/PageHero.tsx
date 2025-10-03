'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

interface PageHeroProps {
  badge?: string
  title: string
  description: string
  primaryCTA?: {
    text: string
    href?: string
    onClick?: () => void
  }
  secondaryCTA?: {
    text: string
    href?: string
    onClick?: () => void
  }
  image?: ReactNode
  background?: 'default' | 'gradient' | 'purple'
  backgroundImage?: string
}

export function PageHero({
  badge,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  background = 'gradient',
  backgroundImage,
}: PageHeroProps) {
  const backgrounds = {
    default: 'bg-white',
    gradient: 'bg-gradient-to-br from-background-light via-background-purple to-white',
    purple: 'bg-primary-dark text-white',
  }

  return (
    <section className={`relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden ${!backgroundImage ? backgrounds[background] : ''}`}>
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-primary-dark/90" />
        </>
      )}
      <Container className="relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${!image || backgroundImage ? 'max-w-4xl mx-auto text-center' : ''}`}>
          {/* Content */}
          <div className={backgroundImage ? 'col-span-2' : ''}>
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-body-sm font-semibold">
                  {badge}
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-display-xl md:text-[60px] md:leading-[72px] font-display font-semibold mb-6 ${
                background === 'purple' || backgroundImage ? 'text-white' : 'text-primary-dark'
              }`}
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-body-lg md:text-[24px] md:leading-[36px] mb-8 ${
                background === 'purple' || backgroundImage ? 'text-white/90' : 'text-text-secondary'
              }`}
            >
              {description}
            </motion.p>

            {(primaryCTA || secondaryCTA) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`flex flex-wrap gap-4 ${backgroundImage ? 'justify-center' : ''}`}
              >
                {primaryCTA && (
                  <Button
                    size="lg"
                    onClick={primaryCTA.onClick}
                    className={background === 'purple' || backgroundImage ? 'bg-white text-primary hover:bg-white/90 shadow-xl' : ''}
                  >
                    {primaryCTA.text}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={secondaryCTA.onClick}
                    className={background === 'purple' || backgroundImage ? 'border-white text-white hover:bg-white hover:text-primary shadow-xl' : ''}
                  >
                    {secondaryCTA.text}
                  </Button>
                )}
              </motion.div>
            )}
          </div>

          {/* Image */}
          {image && !backgroundImage && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {image}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  )
}