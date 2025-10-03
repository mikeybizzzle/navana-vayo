# Vayo Affiliate & Referral Program Plan

## Overview
Two-tier growth strategy:
1. **Referral Program** - For existing members (consumer-to-consumer)
2. **Affiliate Program** - For content creators, influencers, travel bloggers (business partnership)

---

## 1. Member Referral Program

### Structure
- **Target:** Current Vayo members
- **Incentive:** Cash rewards + bonus perks
- **Mechanism:** Unique referral codes/links

### Reward Tiers
| Referrals | Reward | Bonus |
|-----------|--------|-------|
| 1-3 | $50/referral | - |
| 4-10 | $75/referral | Free Premium upgrade (1 year) |
| 11-25 | $100/referral | Free VIP upgrade (1 year) |
| 26+ | $150/referral | Lifetime VIP + travel credit |

### Friend Benefits
- **New Member Gets:** $100 travel credit on first booking
- **Requirements:** Must book within 30 days
- **Minimum:** First booking must be $500+

### Dashboard Features
- Unique referral code
- Shareable link generator
- Social media share buttons
- Email invite tool
- Tracking dashboard (pending, converted, earned)
- Earnings history
- Payout options (bank transfer, travel credit, PayPal)

---

## 2. Affiliate Program

### Structure
- **Target:** Travel bloggers, influencers, content creators, deal sites
- **Commission:** 10-20% of first booking + recurring
- **Cookie Duration:** 90 days
- **Payment:** Monthly, $100 minimum threshold

### Affiliate Tiers
| Tier | Monthly Bookings | Commission | Bonuses |
|------|------------------|------------|---------|
| Starter | 1-10 | 10% | - |
| Pro | 11-50 | 15% | Dedicated manager |
| Elite | 51-200 | 18% | Custom landing pages |
| Partner | 201+ | 20% | Co-marketing budget |

### Application Requirements
- Active website/social media
- Travel-related content
- Minimum 5,000 followers OR 10,000 monthly visitors
- Professional portfolio/media kit

### Affiliate Tools
- Custom tracking links
- Promotional banners (multiple sizes)
- Email templates
- Social media graphics
- Deep linking capability (link to specific deals)
- Real-time analytics dashboard
- API access (for advanced affiliates)

---

## Pages Needed

### 1. `/referral` - Member Referral Page
**Sections:**
- Hero: "Share Vayo, Earn Rewards"
- How It Works (3 steps)
- Reward Calculator
- Referral Dashboard (logged in members)
- Success Stories
- FAQ
- CTA

### 2. `/affiliate` - Affiliate Program Overview
**Sections:**
- Hero: "Partner with Vayo"
- Why Partner With Us
- Commission Structure
- Ideal Partners
- Tools & Resources Preview
- Application CTA
- Testimonials from affiliates

### 3. `/affiliate/apply` - Affiliate Application
**Form Fields:**
- Personal Info
- Business Info
- Traffic Sources
- Content Examples
- Social Media Links
- Why You Want to Partner

### 4. `/affiliate/dashboard` - Affiliate Portal (Protected)
**Features:**
- Performance Overview
- Tracking Links Generator
- Marketing Materials
- Earnings & Payouts
- Referral Details
- Reports

### 5. `/member/referrals` - Member Referral Dashboard (Protected)
**Features:**
- Referral Code Display
- Share Tools
- Pending Referrals
- Completed Referrals
- Earnings Balance
- Payout Options

---

## Technical Implementation

### Tracking System
```typescript
interface Referral {
  code: string
  referrerId: string
  refereeId?: string
  status: 'pending' | 'signed_up' | 'booked' | 'paid'
  clickedAt: Date
  signedUpAt?: Date
  bookedAt?: Date
  bookingAmount?: number
  commission?: number
  paidAt?: Date
}

interface Affiliate {
  id: string
  name: string
  email: string
  tier: 'starter' | 'pro' | 'elite' | 'partner'
  commissionRate: number
  totalBookings: number
  totalEarnings: number
  status: 'pending' | 'active' | 'suspended'
}
```

### URL Structure
- Referral: `vayovault.com/?ref=JOHN123`
- Affiliate: `vayovault.com/?aff=BLOGGER456`

### Cookie/LocalStorage
- Store referral code for 90 days
- Track source attribution
- Multi-touch attribution (optional)

---

## Marketing Copy

### Referral Hero Headlines
- "Share the savings, earn the rewards"
- "Get paid to help friends travel for less"
- "Turn your network into income"

### Affiliate Hero Headlines
- "Monetize your travel content"
- "Earn up to 20% on every booking"
- "Partner with wholesale travel experts"

### Value Props
**Referral:**
- Earn up to $150 per referral
- Friends get $100 credit
- Unlimited earning potential
- Quick payouts

**Affiliate:**
- Industry-leading 10-20% commission
- 90-day cookie window
- Dedicated support
- Professional marketing materials
- Real-time tracking

---

## Success Metrics

### Referral Program KPIs
- Referral conversion rate (clicks → signups)
- Average referrals per member
- Cost per acquisition via referrals
- Lifetime value of referred customers

### Affiliate Program KPIs
- Number of active affiliates
- Average bookings per affiliate
- Commission payout amount
- Return on affiliate spend (ROAS)
- Top performing affiliates

---

## Compliance & Legal

### Required Disclosures
- FTC compliance for affiliate links
- Terms & conditions for both programs
- Payout terms and conditions
- Fraud prevention policy
- Tax form collection (1099 for US)

### Prohibited Activities
- Spam/unsolicited emails
- Trademark bidding on search engines
- False advertising
- Cookie stuffing
- Self-referrals (referral program)

---

## Phase 1 Build Plan (This Session)

1. ✅ Planning document (this file)
2. 🔨 Referral program landing page (`/referral`)
3. 🔨 Affiliate program overview (`/affiliate`)
4. 🔨 Affiliate application form (`/affiliate/apply`)
5. 🔨 Member referral dashboard component
6. 🔨 Referral tracking utilities
7. 🔨 Shared components (stats cards, share tools)

## Phase 2 (Future)
- Backend API integration
- Payment processing
- Admin dashboard for managing affiliates
- Fraud detection system
- Automated payout system
- Email notifications

---

**Status:** Ready to build
**Priority:** High (growth multiplier)
**Estimated Build Time:** 2-3 hours for frontend MVP
