/**
 * Unsplash API Integration
 *
 * This utility provides functions to fetch images from Unsplash based on search queries.
 * Used primarily for blog post hero images and related content.
 */

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || ''
const UNSPLASH_API_URL = 'https://api.unsplash.com'

export interface UnsplashImage {
  id: string
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
  }
  alt_description: string | null
  description: string | null
  user: {
    name: string
    username: string
    links: {
      html: string
    }
  }
  links: {
    html: string
    download_location: string
  }
  width: number
  height: number
}

export interface UnsplashSearchResponse {
  results: UnsplashImage[]
  total: number
  total_pages: number
}

/**
 * Search for images on Unsplash
 * @param query - Search query (e.g., "luxury hotel", "beach resort")
 * @param options - Additional search options
 */
export async function searchUnsplashImages(
  query: string,
  options: {
    perPage?: number
    page?: number
    orientation?: 'landscape' | 'portrait' | 'squarish'
    orderBy?: 'relevant' | 'latest'
  } = {}
): Promise<UnsplashSearchResponse> {
  const {
    perPage = 10,
    page = 1,
    orientation = 'landscape',
    orderBy = 'relevant'
  } = options

  if (!UNSPLASH_ACCESS_KEY) {
    console.warn('Unsplash Access Key not configured')
    return { results: [], total: 0, total_pages: 0 }
  }

  const params = new URLSearchParams({
    query,
    per_page: perPage.toString(),
    page: page.toString(),
    orientation,
    order_by: orderBy,
  })

  try {
    const response = await fetch(`${UNSPLASH_API_URL}/search/photos?${params}`, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
      next: { revalidate: 86400 } // Cache for 24 hours
    })

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching Unsplash images:', error)
    return { results: [], total: 0, total_pages: 0 }
  }
}

/**
 * Get a random photo from Unsplash
 * @param query - Search query to filter random photos
 * @param options - Additional options
 */
export async function getRandomUnsplashImage(
  query?: string,
  options: {
    orientation?: 'landscape' | 'portrait' | 'squarish'
    count?: number
  } = {}
): Promise<UnsplashImage | UnsplashImage[]> {
  const { orientation = 'landscape', count = 1 } = options

  if (!UNSPLASH_ACCESS_KEY) {
    console.warn('Unsplash Access Key not configured')
    throw new Error('Unsplash API not configured')
  }

  const params = new URLSearchParams({
    orientation,
    count: count.toString(),
  })

  if (query) {
    params.append('query', query)
  }

  try {
    const response = await fetch(`${UNSPLASH_API_URL}/photos/random?${params}`, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching random Unsplash image:', error)
    throw error
  }
}

/**
 * Trigger download tracking for Unsplash (required by API guidelines)
 * Call this when an image is displayed to the user
 */
export async function trackUnsplashDownload(downloadLocation: string): Promise<void> {
  if (!UNSPLASH_ACCESS_KEY) return

  try {
    await fetch(downloadLocation, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    })
  } catch (error) {
    console.error('Error tracking Unsplash download:', error)
  }
}

/**
 * Get optimized image URL with specific dimensions
 */
export function getOptimizedUnsplashUrl(
  image: UnsplashImage,
  options: {
    width?: number
    height?: number
    quality?: number
    fit?: 'crop' | 'fill' | 'max' | 'min'
  } = {}
): string {
  const { width, height, quality = 80, fit = 'crop' } = options

  const params = new URLSearchParams()
  if (width) params.append('w', width.toString())
  if (height) params.append('h', height.toString())
  params.append('q', quality.toString())
  params.append('fit', fit)
  params.append('fm', 'jpg')

  return `${image.urls.raw}?${params.toString()}`
}

/**
 * Get attribution text for Unsplash image (required by API guidelines)
 */
export function getUnsplashAttribution(image: UnsplashImage): {
  photographerName: string
  photographerUrl: string
  unsplashUrl: string
  attributionText: string
} {
  return {
    photographerName: image.user.name,
    photographerUrl: image.user.links.html,
    unsplashUrl: image.links.html,
    attributionText: `Photo by ${image.user.name} on Unsplash`,
  }
}
