'use client'

import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Play } from 'lucide-react'
import Image from 'next/image'

export function VideoShowcase() {
  return (
    <section className="py-20 md:py-32 bg-primary-dark text-white">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold mb-4">
              Real members, real savings
            </h2>
            <p className="text-body-lg text-white/90">
              See how Vayo Vault members are saving about 50% on hotels, resorts, and cruises.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Video Thumbnail */}
            <div className="aspect-video relative group cursor-pointer">
              <Image
                src="/images/Family on Vacation.png"
                alt="Family enjoying vacation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
                  <div className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Member Badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-[20px] font-bold text-primary-dark">
                  Jennifer M.
                </span>
              </div>

              {/* Quote Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </FadeIn>

        {/* Testimonial Quote */}
        <FadeIn delay={0.3}>
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <blockquote className="text-[24px] leading-[36px] text-white/90 mb-6">
              "We saved $650 on our Cancun resort. Same property, same dates, half the price.
              Vayo Vault paid for itself on day one."
            </blockquote>
            <div>
              <div className="font-semibold text-white">Jennifer M.</div>
              <div className="text-body-sm text-white/70">
                Family Vacation, March 2024
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}