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

export const metadata: Metadata = {
  title: 'Resources & Insights | Navan',
  description: 'Guides, reports, and best practices for modern travel and expense management.',
}

const featuredPost = {
  title: '2024 Business Travel Trends Report',
  category: 'Research',
  readTime: '12 min read',
  date: 'January 15, 2024',
  excerpt: 'Our comprehensive analysis of business travel trends, including booking patterns, cost optimization strategies, and the future of corporate travel.',
  image: FileText,
  featured: true,
}

const blogPosts = [
  {
    title: '10 Ways to Reduce Business Travel Costs Without Sacrificing Quality',
    category: 'Best Practices',
    readTime: '8 min read',
    date: 'January 10, 2024',
    excerpt: 'Practical strategies for cutting travel expenses while maintaining employee satisfaction and productivity.',
    image: TrendingUp,
  },
  {
    title: 'The Complete Guide to Expense Policy Automation',
    category: 'Guides',
    readTime: '15 min read',
    date: 'January 5, 2024',
    excerpt: 'Everything you need to know about implementing automated expense policies that save time and reduce errors.',
    image: BookOpen,
  },
  {
    title: 'How AI is Transforming Expense Management',
    category: 'Technology',
    readTime: '6 min read',
    date: 'December 28, 2023',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way companies handle expenses, from receipt capture to fraud detection.',
    image: TrendingUp,
  },
  {
    title: 'Corporate Travel Policy Template: A Complete Framework',
    category: 'Templates',
    readTime: '10 min read',
    date: 'December 20, 2023',
    excerpt: 'Download our free, customizable travel policy template designed for modern companies.',
    image: FileText,
  },
  {
    title: 'Remote Work and Business Travel: Finding the Balance',
    category: 'Insights',
    readTime: '7 min read',
    date: 'December 15, 2023',
    excerpt: 'As hybrid work becomes the norm, discover how companies are rethinking their approach to business travel.',
    image: BookOpen,
  },
  {
    title: 'CFO Guide to Travel & Expense ROI Metrics',
    category: 'Finance',
    readTime: '9 min read',
    date: 'December 10, 2023',
    excerpt: 'Key metrics every CFO should track to measure and improve travel and expense program performance.',
    image: TrendingUp,
  },
]

const resources = [
  {
    icon: FileText,
    title: 'Travel Policy Template',
    description: 'Comprehensive template for building your company travel policy',
    type: 'Download',
    link: '#',
  },
  {
    icon: Video,
    title: 'Product Demo Videos',
    description: 'Watch quick demos of key Navan features',
    type: 'Video Library',
    link: '#',
  },
  {
    icon: BookOpen,
    title: 'Implementation Guide',
    description: 'Step-by-step guide to rolling out Navan in your organization',
    type: 'Guide',
    link: '#',
  },
  {
    icon: Download,
    title: 'ROI Calculator',
    description: 'Calculate potential savings with Navan',
    type: 'Tool',
    link: '#',
  },
]

const categories = [
  'All Posts',
  'Best Practices',
  'Guides',
  'Research',
  'Technology',
  'Finance',
  'Templates',
]

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Resources & Insights"
          description="Expert guidance, research, and tools to help you optimize your travel and expense programs."
          background="default"
        />

        {/* Featured Post */}
        <section className="py-20 bg-white">
          <Container>
            <FadeIn>
              <Card padding="none" className="overflow-hidden border-2 border-primary">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12 flex items-center justify-center bg-primary/5">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <featuredPost.image className="w-12 h-12 text-primary" />
                      </div>
                      <div className="px-4 py-2 rounded-full bg-primary text-white text-body-sm font-semibold inline-block">
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
                    <div className="p-6 bg-primary/5 flex items-center justify-center h-48">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <post.image className="w-8 h-8 text-primary" />
                      </div>
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
                  Popular Resources
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Templates, guides, and tools to help you get the most from your travel and expense program.
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
                  Stay Updated
                </h2>
                <p className="text-body-lg text-text-secondary mb-8">
                  Get the latest insights, tips, and resources delivered to your inbox monthly.
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
