'use client'

import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import Image from 'next/image'

const savings = [
  {
    number: '1',
    title: 'Access wholesale pricing',
    description: 'We purchase unsold inventory in bulk and pass the savings to you. Get the private rates public booking sites can\'t show.',
    stat: 'About 50% savings',
    image: '/images/Background-HotelsOnBeach.png',
  },
  {
    number: '2',
    title: 'No timeshare presentations',
    description: 'Other discount travel clubs force you to sit through high-pressure sales pitches. We don\'t. Just search, book, and save.',
    stat: 'Zero presentations',
    image: '/images/Background-Cruise.png',
  },
  {
    number: '3',
    title: 'Price match guarantee',
    description: 'Find a lower price within 24 hours of booking? We\'ll refund the difference plus give you a $50 credit.',
    stat: 'Protected pricing',
    image: '/images/Background-Condo.png',
  },
]

export function SavingsStats() {
  return (
    <section className="py-20 md:py-32 bg-background-light">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              How members save
            </h2>
            <p className="text-body-lg text-text-secondary">
              See how Vayo Vault delivers wholesale pricing without the pressure of timeshare presentations.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {savings.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.15}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-start gap-6">
                    {/* Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-[28px] font-display font-bold text-white">
                        {item.number}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-[32px] leading-[40px] font-display font-semibold text-primary-dark mb-3">
                        {item.title}
                      </h3>
                      <p className="text-body-lg text-text-secondary mb-4">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                        <span className="text-body-md font-semibold text-primary">
                          {item.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-3xl overflow-hidden shadow-xl relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-primary-dark/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <span className="text-[20px] font-display font-bold">
                            {item.number}
                          </span>
                        </div>
                        <p className="text-[18px] leading-[26px] font-semibold">
                          {item.stat}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}