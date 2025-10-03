'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft, Clock, Share2 } from 'lucide-react'
import { UnsplashImage as UnsplashImageType } from '@/lib/unsplash'
import { UnsplashImage } from './UnsplashImage'
import Image from 'next/image'

interface BlogPostProps {
  title: string
  category: string
  readTime: string
  content: ReactNode
  heroImage?: UnsplashImageType
  fallbackImageUrl?: string
}

export function BlogPost({ title, category, readTime, content, heroImage, fallbackImageUrl }: BlogPostProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image */}
      {(heroImage || fallbackImageUrl) && (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          {heroImage ? (
            <UnsplashImage
              image={heroImage}
              alt={title}
              className="h-full w-full"
              priority
            />
          ) : fallbackImageUrl ? (
            <Image
              src={fallbackImageUrl}
              alt={title}
              fill
              priority
              className="object-cover"
            />
          ) : null}
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-br from-primary/5 via-purple-50 to-white py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources/travel-guides"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Travel Guides</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {category}
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            {title}
          </h1>

          <button className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="font-medium">Share this guide</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg prose-primary max-w-none">
          {content}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to unlock wholesale pricing?</h3>
          <p className="text-white/90 mb-6">
            Join thousands of members saving 60-75% on luxury travel worldwide.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </article>
  )
}
