# Vayo-Excursions Integration - Implementation Guide

## 🎉 What's Been Built

### ✅ Complete Features (Phase 1)

**1. Database Schema** (`/lib/db/schema.sql`)
- Users table with membership tiers
- Bookings table with Excursions sync
- Cashback transactions tracking
- SSO tokens management
- Webhooks events logging
- Referrals and notifications
- Full audit trail

**2. Member Signup Flow** (`/app/members/signup/page.tsx`)
- 3-step registration process
- Account information collection
- Membership tier selection (Free Trial, Premium, VIP Elite)
- Payment placeholder (ready for Stripe integration)
- Form validation and error handling

**3. Member Login** (`/app/members/login/page.tsx`)
- Email/password authentication
- "Remember me" functionality
- Forgot password link
- Auto-redirect to dashboard/Excursions

**4. Member Dashboard** (`/app/members/dashboard/page.tsx`)
- Overview of savings and cashback
- Upcoming and past bookings display
- Quick access to booking platform
- Membership card display
- Referral program integration

**5. Booking Platform Access** (`/app/members/booking/page.tsx`)
- Auto-redirect to Excursions
- SSO integration (ready for implementation)
- Loading states and manual redirect option

**6. API Routes**
- `/api/auth/signup` - User registration
- `/api/auth/login` - Authentication
- `/api/auth/sso` - Excursions SSO token generation
- `/api/members/dashboard` - Dashboard data
- `/api/webhooks/excursions` - Booking updates from Excursions

**7. Type Definitions** (`/lib/db/types.ts`)
- TypeScript interfaces for all data models
- Membership tier configurations
- API request/response types
- Webhook payload types

---

## 🚀 Next Steps to Go Live

### Step 1: Database Setup (2-4 hours)

**Choose Your Database:**
- **Option A**: PostgreSQL (Recommended)
  - Use Supabase (free tier available)
  - Or AWS RDS, DigitalOcean, Railway

- **Option B**: MySQL
  - Use PlanetScale (free tier available)

- **Option C**: SQLite (Development only)

**Setup Instructions:**

1. **Create Database Instance**
   ```bash
   # Example with Supabase
   # 1. Sign up at supabase.com
   # 2. Create new project
   # 3. Copy connection string
   ```

2. **Run Schema**
   ```bash
   # Execute the SQL schema file
   psql DATABASE_URL < lib/db/schema.sql
   ```

3. **Add Environment Variables**
   ```env
   # .env.local
   DATABASE_URL=postgresql://user:pass@host:5432/vayo
   DATABASE_POOL_MIN=2
   DATABASE_POOL_MAX=10
   ```

4. **Install Database Driver**
   ```bash
   npm install pg  # PostgreSQL
   # or
   npm install mysql2  # MySQL
   ```

---

### Step 2: Authentication Implementation (4-6 hours)

**Install Required Packages:**
```bash
npm install bcryptjs jsonwebtoken
npm install --save-dev @types/bcryptjs @types/jsonwebtoken
```

**Update API Routes:**

**`/lib/auth/password.ts`** (Create this)
```typescript
import bcrypt from 'bcryptjs'

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}
```

**`/lib/auth/jwt.ts`** (Create this)
```typescript
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET!

export function generateToken(userId: string): string {
  return jwt.sign(
    { userId },
    JWT_SECRET,
    { expiresIn: '7d' }
  )
}

export function verifyToken(token: string): { userId: string } {
  return jwt.verify(token, JWT_SECRET) as { userId: string }
}
```

**Environment Variables:**
```env
JWT_SECRET=your-super-secret-key-change-this
```

---

### Step 3: Database Connection (2-3 hours)

**`/lib/db/client.ts`** (Create this)
```typescript
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? {
    rejectUnauthorized: false
  } : false
})

export async function query(text: string, params?: any[]) {
  const start = Date.now()
  const res = await pool.query(text, params)
  const duration = Date.now() - start
  console.log('Executed query', { text, duration, rows: res.rowCount })
  return res
}

export default pool
```

**Update API Routes to Use Real Database:**

Replace all `// TODO` comments in:
- `/app/api/auth/signup/route.ts`
- `/app/api/auth/login/route.ts`
- `/app/api/members/dashboard/route.ts`

Example for signup:
```typescript
import { query } from '@/lib/db/client'
import { hashPassword } from '@/lib/auth/password'
import { generateToken } from '@/lib/auth/jwt'

// In signup route:
const password_hash = await hashPassword(body.password)

const result = await query(`
  INSERT INTO users (email, password_hash, first_name, last_name, phone, membership_tier)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING id, email, first_name, last_name, membership_tier
`, [body.email, password_hash, body.first_name, body.last_name, body.phone, body.membership_tier])

const user = result.rows[0]
const token = generateToken(user.id)
```

---

### Step 4: Excursions Integration (Depends on Their API)

**Contact Branson Excursions:**
1. Email their partnerships team
2. Request:
   - API documentation
   - White-label pricing
   - SSO implementation guide
   - Webhook endpoint documentation

**Once you have API access:**

**`/lib/integrations/excursions.ts`** (Create this)
```typescript
const EXCURSIONS_API_KEY = process.env.EXCURSIONS_API_KEY!
const EXCURSIONS_API_URL = process.env.EXCURSIONS_API_URL!

export async function createExcursionsUser(data: {
  email: string
  password: string
  firstName?: string
  lastName?: string
  vayoUserId: string
  vayoTier: string
}) {
  const response = await fetch(`${EXCURSIONS_API_URL}/users`, {
    method: 'POST',
    headers: {
      'X-API-Key': EXCURSIONS_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      customFields: {
        vayoUserId: data.vayoUserId,
        vayoTier: data.vayoTier
      }
    })
  })

  return response.json()
}

export async function generateExcursionsSSO(excursionsUserId: string) {
  const response = await fetch(`${EXCURSIONS_API_URL}/auth/sso`, {
    method: 'POST',
    headers: {
      'X-API-Key': EXCURSIONS_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: excursionsUserId,
      expiresIn: 600 // 10 minutes
    })
  })

  const data = await response.json()
  return data.ssoUrl
}
```

**Environment Variables:**
```env
EXCURSIONS_API_KEY=your-api-key-from-excursions
EXCURSIONS_API_URL=https://api.bransonexcursions.com
EXCURSIONS_SSO_SECRET=your-sso-secret
EXCURSIONS_WEBHOOK_SECRET=your-webhook-secret
```

---

### Step 5: Payment Integration (4-6 hours)

**Install Stripe:**
```bash
npm install stripe @stripe/stripe-js
```

**Setup Stripe:**
1. Create account at stripe.com
2. Get API keys (test mode first)
3. Create products/prices for each membership tier

**Environment Variables:**
```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

**Update Signup Flow:**
Add payment step to `/app/members/signup/page.tsx`:
```typescript
// In step 3, replace the placeholder with:
const { clientSecret } = await fetch('/api/create-payment-intent', {
  method: 'POST',
  body: JSON.stringify({ membershipTier: selectedTier })
})

// Render Stripe payment element
<Elements stripe={stripePromise} options={{ clientSecret }}>
  <CheckoutForm />
</Elements>
```

---

### Step 6: Update Header Links (5 minutes)

**Edit `/components/layout/Header.tsx`:**
```typescript
// Replace "Member Login" link with:
<a
  href="/members/login"
  className="text-text-secondary hover:text-primary transition-colors"
>
  Member Login
</a>

// Add signup CTA:
<a
  href="/members/signup"
  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
>
  Start Free Trial
</a>
```

---

## 📋 Environment Variables Checklist

Create `.env.local` file:
```env
# Database
DATABASE_URL=postgresql://...

# Authentication
JWT_SECRET=your-secret-key-min-32-chars

# Excursions Integration
EXCURSIONS_API_KEY=
EXCURSIONS_API_URL=
EXCURSIONS_SSO_SECRET=
EXCURSIONS_WEBHOOK_SECRET=

# Stripe (when ready)
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Email (optional - for notifications)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
```

---

## 🧪 Testing Guide

### Manual Testing Checklist

**Signup Flow:**
- [ ] Visit `/members/signup`
- [ ] Fill out form with test data
- [ ] Select membership tier
- [ ] Complete signup (should create mock account for now)
- [ ] Verify redirect to dashboard

**Login Flow:**
- [ ] Visit `/members/login`
- [ ] Enter test credentials
- [ ] Verify redirect to dashboard
- [ ] Check dashboard loads with mock data

**Dashboard:**
- [ ] View stats (savings, cashback, bookings)
- [ ] Click "Access Booking Platform"
- [ ] Verify redirect to Excursions

**Booking Platform:**
- [ ] Visit `/members/booking`
- [ ] Should redirect to Excursions

---

## 🚀 Deployment Steps

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add Vayo-Excursions integration"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to vercel.com
   - Import your GitHub repository
   - Add environment variables
   - Deploy

3. **Configure Custom Domain**
   - Add `vayo.com` in Vercel settings
   - Update DNS records

### Option 2: Self-Hosted

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📊 Monitoring & Analytics

**Recommended Tools:**
- **Sentry** - Error tracking
- **PostHog** - Product analytics
- **LogRocket** - Session replay
- **Mixpanel** - User behavior

**Key Metrics to Track:**
- Signup conversion rate
- Login success rate
- Dashboard engagement
- Booking platform clicks
- Cashback earned
- Member retention

---

## 🔒 Security Checklist

- [ ] Use HTTPS in production
- [ ] Hash all passwords (bcrypt)
- [ ] Validate all user inputs
- [ ] Use CSRF tokens for forms
- [ ] Implement rate limiting
- [ ] Sanitize SQL queries (use parameterized queries)
- [ ] Verify webhook signatures
- [ ] Rotate API keys regularly
- [ ] Use environment variables for secrets
- [ ] Add security headers (helmet.js)

---

## 📞 Support & Maintenance

**Weekly Tasks:**
- Monitor error logs
- Check webhook delivery success rate
- Review cashback pending approvals
- Analyze user signup trends

**Monthly Tasks:**
- Database backups
- Security updates
- Performance optimization
- User feedback review

---

## 🎯 Success Criteria

**Phase 1 Complete When:**
- ✅ Database schema created
- ✅ User signup working
- ✅ Login authentication working
- ✅ Dashboard displaying data
- ✅ Booking platform accessible

**Phase 2 Complete When:**
- [ ] Real database connected
- [ ] Excursions API integrated
- [ ] SSO working seamlessly
- [ ] Payment processing live
- [ ] Webhooks processing bookings

**Phase 3 Complete When:**
- [ ] 100+ active members
- [ ] 50+ bookings processed
- [ ] Cashback system working
- [ ] Positive user feedback
- [ ] <5% support ticket rate

---

## 🆘 Troubleshooting

**"Cannot connect to database"**
- Check DATABASE_URL is correct
- Verify database is running
- Test connection: `psql DATABASE_URL`

**"JWT token invalid"**
- Ensure JWT_SECRET is set
- Check token expiration
- Verify token format in localStorage

**"Excursions SSO not working"**
- Confirm API key is valid
- Check network requests in browser
- Verify user has excursions_user_id

**"Webhooks not processing"**
- Check webhook signature verification
- Review webhook_events table for errors
- Test with Excursions' test mode

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [PostgreSQL Guide](https://www.postgresql.org/docs/)
- [Stripe Documentation](https://stripe.com/docs)
- [JWT Best Practices](https://jwt.io/introduction)

---

**Ready to Launch? Contact Excursions and Let's Go Live!** 🚀
