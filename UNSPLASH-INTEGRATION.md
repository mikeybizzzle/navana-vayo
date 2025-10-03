# Unsplash Integration for Blog Images

This project uses the Unsplash API to automatically fetch and display high-quality images for blog posts.

## Setup

### 1. Get an Unsplash API Key

1. Go to [https://unsplash.com/developers](https://unsplash.com/developers)
2. Create a free account or log in
3. Create a new application
4. Copy your **Access Key**

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_access_key_here
```

**Note:** The free tier provides 50 requests per hour, which is sufficient for most blogs.

## How It Works

### Automatic Image Fetching

Each blog post automatically fetches a relevant hero image from Unsplash based on predefined search queries:

```typescript
// Example from lib/blog-images.ts
'the-350-billion-secret': {
  heroQuery: 'luxury hotel night aerial view empty rooms',
  heroKeywords: ['luxury hotel', 'hotel at night', 'aerial hotel view'],
  fallbackImageUrl: '/images/blog/default-hotel.jpg',
}
```

### Image Caching

- Images are cached for **24 hours** using Next.js ISR (Incremental Static Regeneration)
- This reduces API calls and improves performance
- Cache settings can be adjusted in `lib/unsplash.ts`

### Attribution

All images automatically include photographer attribution as required by Unsplash's API guidelines:

```
Photo by [Photographer Name] on Unsplash
```

## Customization

### Changing Search Queries

Edit `lib/blog-images.ts` to customize search queries for each blog post:

```typescript
export const blogImageConfigs: Record<string, BlogImageConfig> = {
  'your-blog-slug': {
    slug: 'your-blog-slug',
    heroQuery: 'your custom search query',
    heroKeywords: ['keyword1', 'keyword2'],
    fallbackImageUrl: '/images/blog/default.jpg',
  },
}
```

### Image Optimization

Images are automatically optimized using Next.js Image component with:
- Responsive sizing
- Lazy loading (except hero images which use `priority`)
- WebP format conversion
- Blur placeholder

### API Usage

The integration includes several utility functions:

#### Search Images
```typescript
import { searchUnsplashImages } from '@/lib/unsplash'

const results = await searchUnsplashImages('luxury hotel', {
  perPage: 10,
  orientation: 'landscape',
  orderBy: 'relevant'
})
```

#### Get Random Image
```typescript
import { getRandomUnsplashImage } from '@/lib/unsplash'

const image = await getRandomUnsplashImage('beach resort', {
  orientation: 'landscape'
})
```

#### Optimized URLs
```typescript
import { getOptimizedUnsplashUrl } from '@/lib/unsplash'

const url = getOptimizedUnsplashUrl(image, {
  width: 1200,
  height: 600,
  quality: 80,
  fit: 'crop'
})
```

## Components

### UnsplashImage Component

Used to display Unsplash images with proper attribution:

```tsx
import { UnsplashImage } from '@/components/blog/UnsplashImage'

<UnsplashImage
  image={unsplashImageObject}
  alt="Image description"
  className="w-full h-96"
  priority={true}
  showAttribution={true}
/>
```

### BlogPost Component

Automatically displays hero images when available:

```tsx
<BlogPost
  title="Blog Title"
  category="Category"
  readTime="10 min"
  content={<MarkdownContent content={content} />}
  heroImage={unsplashImage}
  fallbackImageUrl="/images/default.jpg"
/>
```

## Fallback Images

If the Unsplash API is unavailable or rate-limited, the system falls back to local images:

1. Place fallback images in `/public/images/blog/`
2. Configure fallback URLs in `lib/blog-images.ts`

Example:
```typescript
fallbackImageUrl: '/images/blog/default-hotel.jpg'
```

## API Guidelines Compliance

This integration follows Unsplash's API guidelines:

✅ **Attribution** - All images display photographer credit
✅ **Download Tracking** - Views are tracked via the API
✅ **Hotlinking** - Uses Unsplash's CDN URLs (no hotlinking violations)
✅ **Rate Limiting** - Implements caching to respect rate limits

## Troubleshooting

### No Images Displaying

1. **Check API Key**: Verify `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY` is set correctly
2. **Check Console**: Look for error messages in browser/server console
3. **Rate Limit**: Free tier allows 50 requests/hour - check if limit is reached
4. **Network**: Ensure server can access `api.unsplash.com`

### Images Load Slowly

1. **Enable Caching**: Ensure ISR is working (check `next.config.js`)
2. **Optimize Queries**: Use more specific search terms
3. **Reduce Image Size**: Adjust optimization parameters in `getOptimizedUnsplashUrl`

### Attribution Not Showing

1. **Check Component**: Ensure `showAttribution={true}` on UnsplashImage
2. **CSS**: Verify attribution div isn't hidden by CSS

## Performance Tips

1. **Use Specific Queries**: More specific = faster results
2. **Cache Aggressively**: 24-hour cache for blog images is recommended
3. **Lazy Load**: Only hero images should use `priority={true}`
4. **Limit Results**: Request only what you need (perPage: 1 for hero images)

## License & Usage

- Unsplash images are free to use
- No attribution required for commercial use (but we include it anyway)
- Follow Unsplash's guidelines: [https://unsplash.com/license](https://unsplash.com/license)

## Support

For issues with the Unsplash API:
- Documentation: [https://unsplash.com/documentation](https://unsplash.com/documentation)
- Support: [https://unsplash.com/help](https://unsplash.com/help)
