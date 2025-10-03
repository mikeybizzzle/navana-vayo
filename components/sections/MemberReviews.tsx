'use client'

import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const reviews = [
  {
    name: 'Sarah Johnson',
    location: 'Miami, FL',
    rating: 5,
    savings: 1250,
    review: 'Saved over $1,250 on our Hawaii vacation! The member rates were incredible and the booking process was seamless.',
    destination: 'Maui, Hawaii',
    avatar: '/images/Background-Beach.png',
  },
  {
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    rating: 5,
    savings: 890,
    review: 'Been a member for 2 years. The savings are real and consistent. Best investment I\'ve made for our family vacations.',
    destination: 'Cancun, Mexico',
    avatar: '/images/Background-Beach.png',
  },
  {
    name: 'Jennifer Martinez',
    location: 'Austin, TX',
    rating: 5,
    savings: 2100,
    review: 'The VIP concierge service is worth every penny. They handled everything for our European trip. Saved us $2,100!',
    destination: 'Paris & Rome',
    avatar: '/images/Background-Beach.png',
  },
]

export function MemberReviews() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Loved by 15,000+ members
            </h2>
            <p className="text-body-lg text-text-secondary">
              Real reviews from members who are saving big on their dream vacations.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <FadeIn key={review.name} delay={index * 0.1}>
              <Card padding="lg" className="h-full flex flex-col">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 flex-1">"{review.review}"</p>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-primary-dark">{review.name}</div>
                      <div className="text-sm text-text-secondary">{review.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Booked: {review.destination}</span>
                    <span className="font-bold text-green-600">Saved ${review.savings}</span>
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
