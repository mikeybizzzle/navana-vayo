import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Card } from '@/components/ui/Card'
import { CTA } from '@/components/sections/CTA'
import {
  BookOpen,
  Video,
  FileText,
  Download,
  TrendingUp,
  Clock,
  ArrowRight,
  Tag,
} from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Travel Guides | Vayo Vault',
  description: 'Expert travel tips, destination guides, and money-saving strategies for savvy travelers.',
}

const featuredPost = {
  title: '2024 Vacation Savings Report: How Members Save 50%',
  category: 'Member Insights',
  readTime: '10 min read',
  date: 'January 15, 2024',
  excerpt: 'Our comprehensive analysis of member savings patterns, popular destinations, and strategies to maximize vacation value with wholesale pricing.',
  imageSrc: '/images/Background-Beach.png',
  featured: true,
}

const blogPosts = [
  {
    title: '10 Caribbean Resorts with the Best Member-Only Rates',
    category: 'Destinations',
    readTime: '8 min read',
    date: 'January 10, 2024',
    excerpt: 'Discover which all-inclusive Caribbean properties offer the deepest discounts through Vayo Vault\'s wholesale inventory.',
    imageSrc: '/images/Mexico.png',
  },
  {
    title: 'The Complete Guide to Booking Cruises at Wholesale Prices',
    category: 'Guides',
    readTime: '12 min read',
    date: 'January 5, 2024',
    excerpt: 'Everything you need to know about cruise inventory, cabin categories, and how to save 40-50% on your next voyage.',
    imageSrc: '/images/Cruiseship.png',
  },
  {
    title: 'Hawaii on a Budget: Multi-Island Packages That Save',
    category: 'Destinations',
    readTime: '9 min read',
    date: 'December 28, 2023',
    excerpt: 'Plan the perfect Hawaiian vacation with insider tips on inter-island travel and hotel packages at member rates.',
    imageSrc: '/images/Background-HotelsOnBeach.png',
  },
  {
    title: 'Off-Season Travel: When to Book for Maximum Savings',
    category: 'Money-Saving Tips',
    readTime: '7 min read',
    date: 'December 20, 2023',
    excerpt: 'Learn which destinations offer the best deals during shoulder season and how to avoid crowds while saving money.',
    imageSrc: '/images/Florida.png',
  },
  {
    title: 'All-Inclusive vs A La Carte: Which Saves More?',
    category: 'Travel Tips',
    readTime: '6 min read',
    date: 'December 15, 2023',
    excerpt: 'Break down the math on all-inclusive resorts versus a la carte pricing to determine the best value for your family.',
    imageSrc: '/images/Resort.png',
  },
  {
    title: 'European Hotel Chains with the Best Wholesale Rates',
    category: 'Destinations',
    readTime: '10 min read',
    date: 'December 10, 2023',
    excerpt: 'Which European hotel brands offer the deepest discounts, and where to find them in major cities.',
    imageSrc: '/images/France.png',
  },
]

const resources = [
  {
    icon: FileText,
    title: 'Vacation Planning Checklist',
    description: 'Complete checklist for booking and planning your trip',
    type: 'Download',
    link: '#',
  },
  {
    icon: Video,
    title: 'Platform Walkthrough Videos',
    description: 'Watch quick demos of how to search and book deals',
    type: 'Video Library',
    link: '#',
  },
  {
    icon: BookOpen,
    title: 'Destination Guides',
    description: 'In-depth guides for popular vacation destinations',
    type: 'Guide Library',
    link: '#',
  },
  {
    icon: Download,
    title: 'Savings Calculator',
    description: 'See how much you could save on your next trip',
    type: 'Tool',
    link: '#',
  },
]

const categories = [
  'All Guides',
  'Destinations',
  'Money-Saving Tips',
  'Travel Tips',
  'Member Insights',
  'Cruise Guides',
  'Resort Reviews',
]

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Travel Guides & Tips"
          description="Expert destination guides, money-saving strategies, and insider tips to help you travel more for less."
          background="default"
        />

        {/* Featured Post */}
        <section className="py-20 bg-white">
          <Container>
            <FadeIn>
              <Card padding="none" className="overflow-hidden border-2 border-primary">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-80 lg:h-auto">
                    <Image
                      src={featuredPost.imageSrc}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-4 py-2 rounded-full bg-white text-primary text-body-sm font-semibold">
                        Featured Report
                      </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-body-sm font-semibold">
                        {featuredPost.category}
                      </span>
                      <span className="text-body-sm text-text-secondary flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-[32px] leading-[40px] font-display font-semibold text-primary-dark mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-body-lg text-text-secondary mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm text-text-tertiary">
                        {featuredPost.date}
                      </span>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                      >
                        Read Report
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </Container>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-background-light border-y border-gray-200">
          <Container>
            <FadeIn>
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full bg-white border-2 border-gray-200 text-body-sm font-medium text-text-primary hover:border-primary hover:text-primary transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <FadeIn key={post.title} delay={index * 0.1}>
                  <Card padding="none" className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={post.imageSrc}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-body-sm font-semibold">
                          {post.category}
                        </span>
                        <span className="text-body-sm text-text-tertiary flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                        {post.title}
                      </h3>
                      <p className="text-body-md text-text-secondary mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-body-sm text-text-tertiary">
                          {post.date}
                        </span>
                        <a
                          href="#"
                          className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Resource Downloads */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Helpful Resources
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Checklists, guides, and tools to help you plan and book the perfect vacation.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <FadeIn key={resource.title} delay={index * 0.1}>
                  <Card padding="lg" className="text-center h-full hover:border-primary transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-body-sm text-primary font-semibold mb-2">
                      {resource.type}
                    </div>
                    <h3 className="text-[18px] leading-[26px] font-semibold text-primary-dark mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-body-sm text-text-secondary mb-4">
                      {resource.description}
                    </p>
                    <a
                      href={resource.link}
                      className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Access
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <FadeIn>
              <Card variant="purple" padding="lg" className="text-center max-w-3xl mx-auto">
                <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-display-md font-display font-semibold text-primary-dark mb-4">
                  Get Travel Tips & Deals
                </h2>
                <p className="text-body-lg text-text-secondary mb-8">
                  Get exclusive deals, destination guides, and money-saving tips delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none"
                  />
                  <button className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </Card>
            </FadeIn>
          </Container>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
