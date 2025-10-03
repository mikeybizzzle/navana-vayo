/**
 * Blog Image Configuration
 *
 * Maps blog post slugs to Unsplash search queries for automatic image fetching
 */

export interface BlogImageConfig {
  slug: string
  heroQuery: string
  heroKeywords?: string[]
  fallbackImageUrl?: string
}

export const blogImageConfigs: Record<string, BlogImageConfig> = {
  'the-350-billion-secret': {
    slug: 'the-350-billion-secret',
    heroQuery: 'luxury hotel night aerial view empty rooms',
    heroKeywords: ['luxury hotel', 'hotel at night', 'aerial hotel view', 'beachfront resort'],
    fallbackImageUrl: '/images/blog/default-hotel.jpg',
  },
  'hotel-pricing-decoded': {
    slug: 'hotel-pricing-decoded',
    heroQuery: 'hotel pricing algorithm technology',
    heroKeywords: ['hotel technology', 'price tags', 'hotel booking', 'digital pricing'],
    fallbackImageUrl: '/images/blog/default-pricing.jpg',
  },
  'last-minute-luxury': {
    slug: 'last-minute-luxury',
    heroQuery: 'luxury hotel lobby elegant',
    heroKeywords: ['luxury hotel', 'five star hotel', 'hotel reception', 'elegant hotel'],
    fallbackImageUrl: '/images/blog/default-luxury.jpg',
  },
  '50-luxury-resorts-under-200': {
    slug: '50-luxury-resorts-under-200',
    heroQuery: 'tropical luxury resort pool',
    heroKeywords: ['luxury resort', 'tropical resort', 'resort pool', 'beachfront resort'],
    fallbackImageUrl: '/images/blog/default-resort.jpg',
  },
  'caribbean-all-inclusive-guide': {
    slug: 'caribbean-all-inclusive-guide',
    heroQuery: 'caribbean all inclusive resort beach',
    heroKeywords: ['caribbean beach', 'all inclusive resort', 'tropical beach', 'turquoise water'],
    fallbackImageUrl: '/images/blog/default-caribbean.jpg',
  },
  'european-luxury-guide': {
    slug: 'european-luxury-guide',
    heroQuery: 'european luxury hotel paris london',
    heroKeywords: ['european hotel', 'luxury hotel europe', 'paris hotel', 'london hotel'],
    fallbackImageUrl: '/images/blog/default-europe.jpg',
  },
  'the-90-30-7-booking-rule': {
    slug: 'the-90-30-7-booking-rule',
    heroQuery: 'calendar booking planning travel',
    heroKeywords: ['calendar', 'travel planning', 'booking', 'schedule'],
    fallbackImageUrl: '/images/blog/default-planning.jpg',
  },
  'shoulder-season-secrets': {
    slug: 'shoulder-season-secrets',
    heroQuery: 'spring autumn travel destination',
    heroKeywords: ['spring travel', 'autumn travel', 'seasonal destination', 'off season'],
    fallbackImageUrl: '/images/blog/default-season.jpg',
  },
  'ota-comparison-study': {
    slug: 'ota-comparison-study',
    heroQuery: 'hotel comparison laptop booking',
    heroKeywords: ['laptop hotel booking', 'online travel', 'hotel comparison', 'booking website'],
    fallbackImageUrl: '/images/blog/default-comparison.jpg',
  },
  'all-inclusive-math': {
    slug: 'all-inclusive-math',
    heroQuery: 'all inclusive resort dining buffet',
    heroKeywords: ['resort dining', 'all inclusive buffet', 'resort food', 'vacation dining'],
    fallbackImageUrl: '/images/blog/default-dining.jpg',
  },
}

/**
 * Get image configuration for a blog post
 */
export function getBlogImageConfig(slug: string): BlogImageConfig | null {
  return blogImageConfigs[slug] || null
}

/**
 * Get all blog slugs that have image configurations
 */
export function getAllBlogSlugs(): string[] {
  return Object.keys(blogImageConfigs)
}
