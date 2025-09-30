'use client'

import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Navan has completely transformed how we manage travel and expenses. The time savings alone are incredible.',
    author: 'Sarah Johnson',
    role: 'VP of Finance',
    company: 'Tech Corp',
  },
  {
    quote:
      'Our employees love the mobile app. Booking travel and submitting expenses has never been easier.',
    author: 'Michael Chen',
    role: 'CFO',
    company: 'Global Industries',
  },
  {
    quote:
      "The analytics and reporting give us unprecedented visibility into our spending. It's a game changer.",
    author: 'Emily Rodriguez',
    role: 'Travel Manager',
    company: 'Innovation Labs',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background-purple">
      <Container>
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Loved by teams everywhere
            </h2>
            <p className="text-body-lg text-text-secondary">
              See what our customers have to say about their experience with
              Navan.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card
                variant="default"
                padding="lg"
                hover
                className="group h-full"
              >
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Quote className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Quote */}
                  <blockquote className="text-body-md text-text-primary mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-primary-dark">
                      {testimonial.author}
                    </div>
                    <div className="text-body-sm text-text-secondary">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}