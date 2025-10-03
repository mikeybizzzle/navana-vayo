import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BlogPost } from '@/components/blog/BlogPost'
import { readFileSync } from 'fs'
import { join } from 'path'
import { searchUnsplashImages } from '@/lib/unsplash'
import { getBlogImageConfig } from '@/lib/blog-images'

const blogMeta: Record<string, { title: string; category: string; readTime: string }> = {
  'the-350-billion-secret': {
    title: 'The $350 Billion Secret: Why 37% of Luxury Hotel Rooms Sit Empty Every Night',
    category: 'Industry Insights',
    readTime: '12 min'
  },
  'hotel-pricing-decoded': {
    title: 'Hotel Pricing Decoded: Why You\'re Probably Overpaying (And How to Stop)',
    category: 'Industry Insights',
    readTime: '15 min'
  },
  'last-minute-luxury': {
    title: 'Last-Minute Luxury: The Science Behind Hotel Distressed Inventory',
    category: 'Industry Insights',
    readTime: '14 min'
  },
  '50-luxury-resorts-under-200': {
    title: '50 Luxury Resorts Under $200/Night: The Member\'s-Only Price List',
    category: 'Destination Guides',
    readTime: '18 min'
  },
  'caribbean-all-inclusive-guide': {
    title: 'Caribbean All-Inclusive Resorts: How to Save $3,000+ on Your Next Vacation',
    category: 'Destination Guides',
    readTime: '16 min'
  },
  'european-luxury-guide': {
    title: 'European Luxury for Less: 5-Star Hotels at 3-Star Prices',
    category: 'Destination Guides',
    readTime: '17 min'
  },
  'the-90-30-7-booking-rule': {
    title: 'The 90/30/7 Rule: When to Book Hotels for Maximum Savings',
    category: 'Travel Planning',
    readTime: '13 min'
  },
  'shoulder-season-secrets': {
    title: 'Shoulder Season Secrets: Why April & October Are the Best Travel Months',
    category: 'Travel Planning',
    readTime: '14 min'
  },
  'ota-comparison-study': {
    title: 'Hotels.com vs. Expedia vs. Wholesale: We Compared 100 Properties',
    category: 'Comparisons',
    readTime: '16 min'
  },
  'all-inclusive-math': {
    title: 'All-Inclusive Math: Breaking Down the Real Cost Per Day',
    category: 'Comparisons',
    readTime: '15 min'
  }
}

function MarkdownContent({ content }: { content: string }) {
  // Simple markdown to JSX conversion
  const lines = content.split('\n')
  const elements: JSX.Element[] = []
  let currentElement: string[] = []
  let elementType = 'p'
  let inTable = false
  let tableHeaders: string[] = []
  let tableRows: string[][] = []

  // Helper function to parse inline markdown (bold, italic, links)
  const parseInlineMarkdown = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = []
    let remaining = text
    let key = 0

    while (remaining.length > 0) {
      // Bold text **text**
      const boldMatch = remaining.match(/^\*\*(.+?)\*\*/)
      if (boldMatch) {
        parts.push(<strong key={key++} className="font-bold text-gray-900">{boldMatch[1]}</strong>)
        remaining = remaining.slice(boldMatch[0].length)
        continue
      }

      // Italic text *text*
      const italicMatch = remaining.match(/^\*(.+?)\*/)
      if (italicMatch) {
        parts.push(<em key={key++} className="italic">{italicMatch[1]}</em>)
        remaining = remaining.slice(italicMatch[0].length)
        continue
      }

      // Links [text](url)
      const linkMatch = remaining.match(/^\[(.+?)\]\((.+?)\)/)
      if (linkMatch) {
        parts.push(<a key={key++} href={linkMatch[2]} className="text-primary hover:underline">{linkMatch[1]}</a>)
        remaining = remaining.slice(linkMatch[0].length)
        continue
      }

      // Regular text - consume until next special character
      const nextSpecial = remaining.search(/[\*\[]/)
      if (nextSpecial === -1) {
        parts.push(<span key={key++}>{remaining}</span>)
        break
      } else if (nextSpecial > 0) {
        parts.push(<span key={key++}>{remaining.slice(0, nextSpecial)}</span>)
        remaining = remaining.slice(nextSpecial)
      } else {
        // Special character doesn't match a pattern, treat as literal
        parts.push(<span key={key++}>{remaining[0]}</span>)
        remaining = remaining.slice(1)
      }
    }

    return parts
  }

  const flushElement = (index: number) => {
    if (currentElement.length === 0) return

    const text = currentElement.join('\n')

    if (elementType === 'h1') {
      elements.push(<h1 key={`h1-${index}`} className="text-4xl font-bold mt-8 mb-4">{parseInlineMarkdown(text)}</h1>)
    } else if (elementType === 'h2') {
      elements.push(<h2 key={`h2-${index}`} className="text-3xl font-bold mt-8 mb-4">{parseInlineMarkdown(text)}</h2>)
    } else if (elementType === 'h3') {
      elements.push(<h3 key={`h3-${index}`} className="text-2xl font-bold mt-6 mb-3">{parseInlineMarkdown(text)}</h3>)
    } else if (elementType === 'h4') {
      elements.push(<h4 key={`h4-${index}`} className="text-xl font-bold mt-4 mb-2">{parseInlineMarkdown(text)}</h4>)
    } else if (elementType === 'ul') {
      const items = text.split('\n').filter(l => l.trim())
      elements.push(
        <ul key={`ul-${index}`} className="list-disc list-inside space-y-2 my-4">
          {items.map((item, i) => (
            <li key={i} className="text-gray-700">{parseInlineMarkdown(item.replace(/^[-*]\s+/, ''))}</li>
          ))}
        </ul>
      )
    } else if (elementType === 'blockquote') {
      elements.push(
        <blockquote key={`bq-${index}`} className="border-l-4 border-primary pl-4 italic my-4 text-gray-700">
          {parseInlineMarkdown(text)}
        </blockquote>
      )
    } else if (text.trim()) {
      elements.push(
        <p key={`p-${index}`} className="text-gray-700 leading-relaxed my-4">
          {parseInlineMarkdown(text)}
        </p>
      )
    }

    currentElement = []
  }

  lines.forEach((line, index) => {
    // Handle tables
    if (line.trim().startsWith('|')) {
      if (!inTable) {
        inTable = true
        tableHeaders = line.split('|').map(h => h.trim()).filter(Boolean)
      } else if (line.includes('---')) {
        // Skip separator line
      } else {
        const row = line.split('|').map(c => c.trim()).filter(Boolean)
        if (row.length > 0) tableRows.push(row)
      }
      return
    } else if (inTable) {
      // End of table
      elements.push(
        <div key={`table-${index}`} className="overflow-x-auto my-8">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                {tableHeaders.map((header, i) => (
                  <th key={i} className="border border-gray-300 px-4 py-2 text-left font-bold">{parseInlineMarkdown(header)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-gray-300 px-4 py-2">{parseInlineMarkdown(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      inTable = false
      tableHeaders = []
      tableRows = []
    }

    if (line.startsWith('# ')) {
      flushElement(index)
      elementType = 'h1'
      currentElement.push(line.substring(2))
      flushElement(index + 0.1)
    } else if (line.startsWith('## ')) {
      flushElement(index)
      elementType = 'h2'
      currentElement.push(line.substring(3))
      flushElement(index + 0.1)
    } else if (line.startsWith('### ')) {
      flushElement(index)
      elementType = 'h3'
      currentElement.push(line.substring(4))
      flushElement(index + 0.1)
    } else if (line.startsWith('#### ')) {
      flushElement(index)
      elementType = 'h4'
      currentElement.push(line.substring(5))
      flushElement(index + 0.1)
    } else if (line.match(/^[-*]\s+/)) {
      if (elementType !== 'ul') {
        flushElement(index)
        elementType = 'ul'
      }
      currentElement.push(line)
    } else if (line.startsWith('>')) {
      if (elementType !== 'blockquote') {
        flushElement(index)
        elementType = 'blockquote'
      }
      currentElement.push(line.substring(1).trim())
    } else if (line.trim() === '') {
      flushElement(index)
      elementType = 'p'
    } else if (line.trim() === '---') {
      flushElement(index)
      elements.push(<hr key={`hr-${index}`} className="my-8 border-gray-300" />)
    } else {
      if (elementType === 'ul' || elementType === 'blockquote') {
        flushElement(index)
        elementType = 'p'
      }
      currentElement.push(line)
    }
  })

  flushElement(lines.length)

  return <div>{elements}</div>
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const meta = blogMeta[params.slug]

  if (!meta) {
    return <div>Blog not found</div>
  }

  // Get image configuration for this blog post
  const imageConfig = getBlogImageConfig(params.slug)

  // Fetch hero image from Unsplash
  let heroImage = null
  if (imageConfig) {
    try {
      const searchResults = await searchUnsplashImages(imageConfig.heroQuery, {
        perPage: 1,
        orientation: 'landscape',
      })
      if (searchResults.results.length > 0) {
        heroImage = searchResults.results[0]
      }
    } catch (error) {
      console.error('Error fetching Unsplash image:', error)
    }
  }

  // Read markdown file
  const filePath = join(process.cwd(), 'blog-content', `${params.slug.split('-').map((w, i) => i === 0 ? (params.slug.match(/^\d/) ? w : w) : w).join('-')}.md`)

  let content = ''
  try {
    // Map slug to correct file number
    const fileMap: Record<string, string> = {
      'the-350-billion-secret': '01-the-350-billion-secret.md',
      'hotel-pricing-decoded': '02-hotel-pricing-decoded.md',
      'last-minute-luxury': '03-last-minute-luxury.md',
      '50-luxury-resorts-under-200': '04-50-luxury-resorts-under-200.md',
      'caribbean-all-inclusive-guide': '05-caribbean-all-inclusive-guide.md',
      'european-luxury-guide': '06-european-luxury-guide.md',
      'the-90-30-7-booking-rule': '07-the-90-30-7-booking-rule.md',
      'shoulder-season-secrets': '08-shoulder-season-secrets.md',
      'ota-comparison-study': '09-ota-comparison-study.md',
      'all-inclusive-math': '10-all-inclusive-math.md',
    }

    const fileName = fileMap[params.slug]
    const fullPath = join(process.cwd(), 'blog-content', fileName)
    content = readFileSync(fullPath, 'utf-8')
  } catch (error) {
    console.error('Error reading blog file:', error)
    content = '# Content not found\n\nThe blog content could not be loaded.'
  }

  return (
    <>
      <Header />
      <BlogPost
        title={meta.title}
        category={meta.category}
        readTime={meta.readTime}
        content={<MarkdownContent content={content} />}
        heroImage={heroImage || undefined}
        fallbackImageUrl={imageConfig?.fallbackImageUrl}
      />
      <Footer />
    </>
  )
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogMeta).map((slug) => ({
    slug,
  }))
}
