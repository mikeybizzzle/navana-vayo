import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, Clock, TrendingUp, MapPin, DollarSign, Calendar, Users, PieChart } from 'lucide-react'

const blogs = [
  {
    slug: 'the-350-billion-secret',
    title: 'The $350 Billion Secret: Why 37% of Luxury Hotel Rooms Sit Empty Every Night',
    description: 'Deep dive into hotel occupancy economics, revenue management, and why hotels prefer discounted bookings over empty rooms.',
    category: 'Industry Insights',
    readTime: '12 min',
    icon: TrendingUp,
    featured: true
  },
  {
    slug: 'hotel-pricing-decoded',
    title: 'Hotel Pricing Decoded: Why You\'re Probably Overpaying (And How to Stop)',
    description: 'Expose dynamic pricing strategies, peak vs. off-peak booking windows, and the hidden world of wholesale rates.',
    category: 'Industry Insights',
    readTime: '15 min',
    icon: DollarSign,
    featured: true
  },
  {
    slug: 'last-minute-luxury',
    title: 'Last-Minute Luxury: The Science Behind Hotel Distressed Inventory',
    description: 'Explain how hotels manage unsold rooms, the mathematics of revenue recovery, and timing strategies.',
    category: 'Industry Insights',
    readTime: '14 min',
    icon: Clock,
    featured: false
  },
  {
    slug: '50-luxury-resorts-under-200',
    title: '50 Luxury Resorts Under $200/Night: The Member\'s-Only Price List',
    description: 'Showcase real examples of luxury properties with wholesale vs. retail pricing comparisons across top destinations.',
    category: 'Destination Guides',
    readTime: '18 min',
    icon: MapPin,
    featured: true
  },
  {
    slug: 'caribbean-all-inclusive-guide',
    title: 'Caribbean All-Inclusive Resorts: How to Save $3,000+ on Your Next Vacation',
    description: 'Region-specific guide with pricing breakdowns, best booking windows, and hidden fees to avoid.',
    category: 'Destination Guides',
    readTime: '16 min',
    icon: MapPin,
    featured: false
  },
  {
    slug: 'european-luxury-guide',
    title: 'European Luxury for Less: 5-Star Hotels at 3-Star Prices in Paris, Rome & Barcelona',
    description: 'City-by-city guide to accessing luxury accommodations at wholesale rates across Europe\'s top destinations.',
    category: 'Destination Guides',
    readTime: '17 min',
    icon: MapPin,
    featured: false
  },
  {
    slug: 'the-90-30-7-booking-rule',
    title: 'The 90/30/7 Rule: When to Book Hotels for Maximum Savings',
    description: 'Data-driven guide on optimal booking windows for different property types and destinations.',
    category: 'Travel Planning',
    readTime: '13 min',
    icon: Calendar,
    featured: true
  },
  {
    slug: 'shoulder-season-secrets',
    title: 'Shoulder Season Secrets: Why April & October Are the Best Travel Months',
    description: 'Analysis of occupancy trends, weather patterns, and value opportunities in off-peak periods.',
    category: 'Travel Planning',
    readTime: '14 min',
    icon: Calendar,
    featured: false
  },
  {
    slug: 'ota-comparison-study',
    title: 'Hotels.com vs. Expedia vs. Wholesale: We Compared 100 Properties (The Results Shocked Us)',
    description: 'Head-to-head pricing comparison with transparency about when traditional OTAs might win.',
    category: 'Comparisons',
    readTime: '16 min',
    icon: PieChart,
    featured: true
  },
  {
    slug: 'all-inclusive-math',
    title: 'All-Inclusive Math: Breaking Down the Real Cost Per Day (With Receipts)',
    description: 'Detailed cost analysis of all-inclusive resorts vs. à la carte travel with real examples.',
    category: 'Comparisons',
    readTime: '15 min',
    icon: Users,
    featured: false
  }
]

const categories = ['All', 'Industry Insights', 'Destination Guides', 'Travel Planning', 'Comparisons']

export default function TravelGuidesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-purple-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Travel Guides & Insights
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Learn the insider secrets to booking luxury travel at wholesale prices. Our data-driven guides reveal the strategies that save members thousands on every trip.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Industry Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Real Pricing Examples</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Actionable Strategies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">Featured Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.filter(blog => blog.featured).map((blog) => {
                const Icon = blog.icon
                return (
                  <Link
                    key={blog.slug}
                    href={`/resources/travel-guides/${blog.slug}`}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <Icon className="w-4 h-4" />
                        {blog.category}
                      </span>
                      <span className="text-sm text-gray-500">{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.description}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      <span>Read guide</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">All Travel Guides</h2>

            <div className="space-y-6">
              {blogs.map((blog) => {
                const Icon = blog.icon
                return (
                  <Link
                    key={blog.slug}
                    href={`/resources/travel-guides/${blog.slug}`}
                    className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            <Icon className="w-4 h-4" />
                            {blog.category}
                          </span>
                          <span className="text-sm text-gray-500">{blog.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600">
                          {blog.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to start saving on luxury travel?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of members who use these strategies to save 60-75% on every vacation.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
