import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { Heart, Users, Gem, TrendingUp, Calendar, Palmtree } from 'lucide-react'
import Image from 'next/image'

const collections = [
  {
    id: 'member-favorites',
    title: 'Member Favorites',
    description: 'Most booked destinations by our community',
    icon: Heart,
    image: '/images/Background-Beach.png',
    count: 128,
    color: 'from-red-500 to-pink-600',
  },
  {
    id: 'family-friendly',
    title: 'Family Adventures',
    description: 'Kid-approved resorts and activities',
    icon: Users,
    image: '/images/Background-Beach.png',
    count: 94,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'premium-for-less',
    title: 'Premium for Less',
    description: 'Upscale resorts at wholesale prices',
    icon: Gem,
    image: '/images/Background-Beach.png',
    count: 76,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'trending-now',
    title: 'Trending Now',
    description: 'Hot destinations everyone is booking',
    icon: TrendingUp,
    image: '/images/Background-Beach.png',
    count: 112,
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'last-minute',
    title: 'Last-Minute Deals',
    description: 'Leave soon, save more',
    icon: Calendar,
    image: '/images/Background-Beach.png',
    count: 43,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'beach-paradise',
    title: 'Beach Paradise',
    description: 'Sun, sand, and crystal waters',
    icon: Palmtree,
    image: '/images/Background-Beach.png',
    count: 156,
    color: 'from-teal-500 to-blue-600',
  },
]

export function CuratedCollections() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background-light to-white">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Curated collections
            </h2>
            <p className="text-body-lg text-text-secondary">
              Handpicked deals organized by what matters most to you.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <FadeIn key={collection.id} delay={index * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-60 group-hover:opacity-70 transition-opacity`} />

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <collection.icon className="w-10 h-10 text-white" />
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      {collection.count} deals
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-4">
                      {collection.description}
                    </p>
                    <Button variant="secondary" size="sm">
                      Explore Collection
                    </Button>
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
