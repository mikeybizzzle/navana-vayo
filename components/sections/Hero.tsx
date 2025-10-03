'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Star } from 'lucide-react'
import { SearchWidget } from './SearchWidget'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-background-light via-background-purple to-white overflow-hidden">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              4.9/5 from 15,000+ members
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-display-xl md:text-[60px] md:leading-[72px] lg:text-[72px] lg:leading-[86px] font-display font-semibold text-primary-dark mb-6 text-center"
          >
            Hidden deals unlocked for members
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-body-lg md:text-[24px] md:leading-[36px] text-text-secondary mb-12 max-w-3xl mx-auto text-center"
          >
            We purchase unsold hotel rooms, cruise cabins, and resort inventory in bulk—before they go empty. You get wholesale pricing for just <span className="font-semibold text-primary">$37/month</span>. No timeshare presentations. No contracts. Members save an average of <span className="font-semibold text-primary">50%</span>.
          </motion.p>

          {/* Search Widget */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <SearchWidget />
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-text-tertiary"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">No timeshare pitches</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No booking fees</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Price match guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>24/7 member support</span>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        </div>
      </Container>
    </section>
  )
}