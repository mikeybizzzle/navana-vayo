/**
 * Blog Image Preview Script
 *
 * Run this script to preview what images will be fetched for each blog post
 * Usage: npx tsx scripts/preview-blog-images.ts
 */

import { blogImageConfigs } from '../lib/blog-images'

console.log('🖼️  Blog Image Configuration Preview\n')
console.log('=' .repeat(80))
console.log('')

Object.entries(blogImageConfigs).forEach(([slug, config], index) => {
  console.log(`${index + 1}. ${slug}`)
  console.log(`   Query: "${config.heroQuery}"`)
  console.log(`   Keywords: ${config.heroKeywords?.join(', ') || 'None'}`)
  console.log(`   Fallback: ${config.fallbackImageUrl || 'None'}`)
  console.log(`   Preview URL: https://unsplash.com/s/photos/${encodeURIComponent(config.heroQuery)}`)
  console.log('')
})

console.log('=' .repeat(80))
console.log(`\nTotal blog posts configured: ${Object.keys(blogImageConfigs).length}`)
console.log('\nTo customize these queries, edit: lib/blog-images.ts')
console.log('To set up Unsplash API, run: npm run setup:unsplash')
