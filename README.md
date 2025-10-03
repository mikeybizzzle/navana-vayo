# Vayo - Members-Only Travel Deals Platform

Welcome to **Vayo**, the premier platform for exclusive travel deals and wholesale pricing on hotels, resorts, cruises, and vacation packages.

## 🌟 Overview

Vayo provides members with access to wholesale pricing and exclusive travel deals, helping them save an average of $627 per booking. Our platform combines the best travel inventory with personalized service and guaranteed savings.

## ✨ Key Features

- **Members-Only Pricing** - Access wholesale rates not available to the public
- **Average Savings** - Members save $627 per booking on average
- **No Booking Fees** - Keep more of your savings
- **Price Match Guarantee** - Find it cheaper? We'll match it
- **24/7 Member Support** - Always here when you need us
- **Curated Collections** - Hand-picked destinations and experiences
- **Affiliate Program** - Earn up to 10% commission sharing Vayo
- **Referral Rewards** - Get travel credits for referring friends

## 🚀 Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React
- **Testing**: Playwright

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd Navana-Vayo

# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🧪 Testing

```bash
# Run all tests
npm test

# Run visual regression tests
npm run test:visual

# Run tests with UI
npm run test:ui

# Run tests in headed mode
npm run test:headed
```

## 📁 Project Structure

```
/app                    # Next.js app directory
  /affiliate           # Affiliate program pages
  /cars                # Car rental pages
  /checkout            # Checkout flow
  /company             # Company pages (about, etc.)
  /contact             # Contact page
  /cruises             # Cruise deals
  /customers           # Customer testimonials
  /hotels              # Hotel booking pages
  /how-it-works        # Platform explanation
  /legal               # Terms, privacy, refund policies
  /price-match         # Price match guarantee
  /pricing             # Membership pricing
  /referral            # Referral program
  /resorts             # Resort packages
  /resources           # Travel guides and resources
  /solutions           # Business travel & expense management

/components            # React components
  /affiliate          # Affiliate-specific components
  /blog               # Blog components
  /layout             # Header, Footer, etc.
  /referral           # Referral program components
  /sections           # Homepage sections
  /ui                 # Reusable UI components

/lib                  # Utility functions
/public               # Static assets
/tests                # Test files
/archive              # Archived Navan documentation
```

## 🎨 Design System

Vayo uses a cohesive design system with:
- **Primary Color**: Purple (#7C3AED and variants)
- **Typography**: Modern sans-serif font stack
- **Spacing**: Consistent 4px/8px grid system
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first approach with breakpoints at 640px, 768px, 1024px, 1280px

## 🌐 Key Pages

- **Homepage** (`/`) - Hero section with search, hot deals, membership comparison
- **How It Works** (`/how-it-works`) - Platform explanation and member benefits
- **Pricing** (`/pricing`) - Membership tiers and pricing
- **Hotels** (`/hotels`) - Hotel search and booking
- **Cruises** (`/cruises`) - Cruise packages and deals
- **Resorts** (`/resorts`) - All-inclusive resort packages
- **Affiliate Program** (`/affiliate`) - Join our affiliate program
- **Referral Program** (`/referral`) - Refer friends and earn rewards

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## 🚢 Deployment

This project is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

Or deploy to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Docker container

## 📝 License

Copyright © 2025 Vayo. All rights reserved.

## 🤝 Contributing

For questions or support, please contact our development team.

## 📚 Additional Documentation

- **Affiliate Program Details**: See `/AFFILIATE_REFERRAL_PLAN.md`
- **Implementation Summary**: See `/IMPLEMENTATION_SUMMARY.md`
- **Archived Navan Docs**: See `/archive/navan-clone-docs/`

---

**Built with ❤️ for travelers who want the best deals**
