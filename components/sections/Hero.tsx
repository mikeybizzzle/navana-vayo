'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-background-light via-background-purple to-white overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-display-xl md:text-[60px] md:leading-[72px] lg:text-[72px] lg:leading-[86px] font-display font-semibold text-primary-dark mb-6"
          >
            Business travel & expense management. Solved.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-body-lg md:text-[24px] md:leading-[36px] text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            Experience the all-in-one travel and expense platform that saves
            time, reduces costs, and delights employees.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" className="gap-2">
              Get a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" className="gap-2">
              <Play className="w-5 h-5" />
              Watch Video
            </Button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body-sm text-text-tertiary"
          >
            Trusted by 10,000+ companies worldwide
          </motion.p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 relative">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 shadow-2xl overflow-hidden">
            {/* Placeholder for hero image/video */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <Play className="w-10 h-10 text-primary" />
                </div>
                <p className="text-body-md text-text-secondary">
                  Product Demo Video
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        </div>
      </Container>
    </section>
  )
}