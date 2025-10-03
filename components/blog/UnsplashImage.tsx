'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { UnsplashImage as UnsplashImageType, getUnsplashAttribution, trackUnsplashDownload } from '@/lib/unsplash'

interface UnsplashImageProps {
  image: UnsplashImageType
  alt?: string
  className?: string
  priority?: boolean
  width?: number
  height?: number
  showAttribution?: boolean
}

export function UnsplashImage({
  image,
  alt,
  className = '',
  priority = false,
  width,
  height,
  showAttribution = true,
}: UnsplashImageProps) {
  const attribution = getUnsplashAttribution(image)
  const imageAlt = alt || image.alt_description || image.description || 'Blog post image'

  // Track download when image is displayed (Unsplash API requirement)
  useEffect(() => {
    trackUnsplashDownload(image.links.download_location)
  }, [image.links.download_location])

  return (
    <div className="relative">
      <div className={`relative ${className}`}>
        <Image
          src={image.urls.regular}
          alt={imageAlt}
          width={width || image.width}
          height={height || image.height}
          priority={priority}
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {showAttribution && (
        <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
          <a
            href={attribution.unsplashUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Photo by{' '}
            <a
              href={attribution.photographerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-medium"
            >
              {attribution.photographerName}
            </a>
            {' '}on Unsplash
          </a>
        </div>
      )}
    </div>
  )
}
