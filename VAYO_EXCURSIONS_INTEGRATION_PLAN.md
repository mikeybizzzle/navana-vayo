# Vayo ↔ Branson Excursions Integration Plan

## Executive Summary

**Objective**: Integrate Vayo's marketing frontend with Branson Excursions' booking platform to create a seamless white-labeled travel booking experience.

**Platform Identified**: Branson Excursions (powered by Stellino)
- Login URL: https://bransonexcursions.com/app/login/
- Platform: Stellino-based booking system
- Current brand: "Excursions" with blue/purple gradient theme

---

## Architecture Overview

### Current State
```
┌─────────────────────┐
│   Vayo Frontend     │ (Marketing site - Next.js)
│   vayo.com          │ - Homepage, features, pricing
│                     │ - Member signup
└─────────────────────┘
         ↓
    [No Connection]
         ↓
┌─────────────────────┐
│ Branson Excursions  │ (Booking platform)
│ Stellino-powered    │ - Login/Authentication
│                     │ - Booking engine
│                     │ - Payment processing
│                     │ - Inventory management
└─────────────────────┘
```

### Target State
```
┌─────────────────────────────────────────┐
│        Vayo Frontend (vayo.com)         │
│  - Homepage & marketing                 │
│  - Membership signup                    │
│  - Deal browsing                        │
└──────────────┬──────────────────────────┘
               │
               │ SSO/API Integration
               ↓
┌─────────────────────────────────────────┐
│   White-Labeled Excursions Platform     │
│   (members.vayo.com or vayo.com/app)    │
│                                         │
│  Powered by: Branson Excursions         │
│  Branded as: Vayo                       │
│                                         │
│  - Custom domain                        │
│  - Vayo branding (logo, colors)         │
│  - Seamless authentication              │
│  - Full booking functionality           │
└─────────────────────────────────────────┘
```

---

## Integration Strategy

### Option 1: Iframe Embed (Quick Start) ⚡
**Timeline**: 1-2 weeks
**Complexity**: Low
**Cost**: Low

```typescript
// /app/members/page.tsx or /app/booking/page.tsx
'use client'

export default function MembersArea() {
  return (
    <div className="h-screen w-full">
      <iframe
        src="https://bransonexcursions.com/app"
        className="w-full h-full border-0"
        title="Vayo Booking Platform"
      />
    </div>
  )
}
```

**Pros**:
- Fast implementation
- No backend changes needed
- Excursions handles all booking logic

**Cons**:
- Less seamless UX (visible iframe)
- Different domain in URL bar
- Limited customization
- SEO limitations

---

### Option 2: Subdomain White-Label (Recommended) 🎯
**Timeline**: 4-6 weeks
**Complexity**: Medium
**Cost**: Medium

**Setup**:
1. **Domain Configuration**:
   ```
   members.vayo.com → CNAME → bransonexcursions.com
   ```
   OR
   ```
   vayo.com/app/* → Proxy → bransonexcursions.com/app/*
   ```

2. **Branson Excursions Configuration**:
   - Request white-label instance
   - Custom domain setup
   - Theme customization (Vayo colors, logo)
   - Remove "Excursions" branding

3. **Single Sign-On (SSO)**:
   ```typescript
   // When user signs up on Vayo
   async function createVayoMember(email, password, membershipTier) {
     // 1. Create Vayo account in your database
     const vayoUser = await db.users.create({
       email,
       password: hash(password),
       tier: membershipTier
     })

     // 2. Create user in Excursions via API
     const excursionsUser = await fetch('https://api.bransonexcursions.com/users', {
       method: 'POST',
       headers: { 'X-API-Key': process.env.EXCURSIONS_API_KEY },
       body: JSON.stringify({
         email,
         password,
         customFields: {
           vayoTier: membershipTier,
           vayoUserId: vayoUser.id
         }
       })
     })

     // 3. Link accounts
     await db.users.update(vayoUser.id, {
       excursionsUserId: excursionsUser.id
     })
   }
   ```

4. **Authentication Flow**:
   ```typescript
   // /app/api/auth/sso/route.ts
   export async function POST(request: Request) {
     const { email } = await request.json()

     // Generate SSO token
     const ssoToken = await generateExcursionsSSO(email)

     // Redirect to Excursions with auto-login
     return Response.redirect(
       `https://members.vayo.com/app/sso?token=${ssoToken}`
     )
   }
   ```

**Pros**:
- Seamless user experience
- Consistent branding
- Full control over member journey
- Professional appearance

**Cons**:
- Requires Excursions API access
- More complex setup
- Ongoing maintenance

---

### Option 3: Deep API Integration (Future) 🚀
**Timeline**: 12-16 weeks
**Complexity**: High
**Cost**: High

Build custom booking UI on Vayo, use Excursions as backend API only.

**Architecture**:
```typescript
// Vayo handles UI
// Excursions provides:
- Inventory API
- Pricing API
- Booking API
- Payment processing
```

**Pros**:
- Complete control
- Fully custom UX
- Best performance

**Cons**:
- Expensive to build
- Requires extensive API docs
- Complex to maintain

---

## Recommended Implementation Plan

### Phase 1: Quick Launch (Week 1-2) ⚡

**Goal**: Get members booking ASAP

**Steps**:
1. **Create Member Login Page**
   ```typescript
   // /app/members/login/page.tsx
   - Collect credentials
   - Validate against Vayo DB
   - Redirect to Excursions platform
   ```

2. **Add Direct Link Integration**
   ```typescript
   // Header component
   <Button onClick={() => window.open('https://bransonexcursions.com/app', '_blank')}>
     Access Booking Platform
   </Button>
   ```

3. **Member Onboarding Flow**
   - User signs up on Vayo → Gets credentials
   - Email sent: "Welcome! Access your booking portal here"
   - Manual account creation in Excursions (temporary)

**Deliverables**:
- ✅ Working member signup
- ✅ Link to Excursions platform
- ✅ Basic email notifications

---

### Phase 2: White-Label Setup (Week 3-6) 🎯

**Goal**: Seamless branded experience

**Steps**:
1. **Contact Branson Excursions**
   - Request white-label partnership
   - Discuss API access
   - Get custom domain setup

2. **Domain Configuration**
   ```
   members.vayo.com → Excursions instance
   ```

3. **Branding Customization**
   - Upload Vayo logo
   - Apply Vayo color scheme (#7C3AED purple)
   - Custom email templates
   - Remove "Excursions" references

4. **SSO Implementation**
   ```typescript
   // Automatic account sync
   Vayo signup → Auto-create Excursions account
   Vayo login → Auto-login to Excursions
   ```

**Deliverables**:
- ✅ members.vayo.com subdomain
- ✅ Vayo-branded booking platform
- ✅ Single sign-on working
- ✅ Automatic account provisioning

---

### Phase 3: Enhanced Integration (Week 7-10) 🔗

**Goal**: Data synchronization and personalization

**Steps**:
1. **Membership Tier Mapping**
   ```typescript
   Vayo Free Trial → Excursions Basic access
   Vayo Premium → Excursions Member rates + 2% cashback
   Vayo VIP Elite → Excursions VIP rates + 5% cashback + priority support
   ```

2. **Booking Data Sync**
   ```typescript
   // Webhook from Excursions
   POST /api/webhooks/excursions
   - New booking → Update Vayo dashboard
   - Payment complete → Issue cashback
   - Booking cancelled → Update stats
   ```

3. **Member Dashboard on Vayo**
   ```typescript
   // /app/dashboard/page.tsx
   - Show upcoming bookings (from Excursions API)
   - Display cashback balance
   - Booking history
   - Saved searches/wishlist
   ```

**Deliverables**:
- ✅ Real-time booking sync
- ✅ Cashback tracking
- ✅ Unified member dashboard
- ✅ Personalized recommendations

---

## Technical Requirements

### Vayo Side (Next.js)

**New Pages**:
```
/app/members/
  ├── login/page.tsx          # Member login
  ├── signup/page.tsx         # New member registration
  ├── dashboard/page.tsx      # Member dashboard
  └── booking/page.tsx        # Iframe or redirect to Excursions

/app/api/
  ├── auth/
  │   ├── sso/route.ts        # SSO token generation
  │   └── sync/route.ts       # Account sync
  └── webhooks/
      └── excursions/route.ts # Receive booking updates
```

**Database Schema**:
```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  password_hash VARCHAR NOT NULL,
  membership_tier VARCHAR, -- 'free', 'premium', 'vip'
  excursions_user_id VARCHAR, -- Link to Excursions
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Bookings table (synced from Excursions)
CREATE TABLE bookings (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  excursions_booking_id VARCHAR,
  destination VARCHAR,
  check_in DATE,
  check_out DATE,
  total_price DECIMAL,
  cashback_earned DECIMAL,
  status VARCHAR, -- 'pending', 'confirmed', 'cancelled'
  created_at TIMESTAMP
);

-- Cashback tracking
CREATE TABLE cashback (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  booking_id UUID REFERENCES bookings(id),
  amount DECIMAL,
  status VARCHAR, -- 'pending', 'approved', 'paid'
  created_at TIMESTAMP
);
```

**Environment Variables**:
```env
# Excursions Integration
EXCURSIONS_API_KEY=your_api_key
EXCURSIONS_API_URL=https://api.bransonexcursions.com
EXCURSIONS_SSO_SECRET=your_sso_secret
EXCURSIONS_WEBHOOK_SECRET=your_webhook_secret

# Vayo Domain
NEXT_PUBLIC_MEMBERS_URL=https://members.vayo.com
```

---

### Excursions Side (Required)

**From Branson Excursions Team**:
1. **API Access**
   - User creation API
   - SSO token validation
   - Booking data API
   - Inventory/pricing API

2. **White-Label Configuration**
   - Custom domain support
   - Theme editor access
   - Logo upload
   - Email template customization

3. **Webhooks**
   - New booking notification
   - Payment confirmation
   - Cancellation notification
   - User activity events

4. **Documentation**
   - API reference
   - SSO implementation guide
   - Webhook payload examples
   - Rate limits and quotas

---

## User Journey (Post-Integration)

### New Member Flow
```
1. User lands on vayo.com
   ↓
2. Browses hot deals, reads about membership
   ↓
3. Clicks "Start Free Trial" or "Join Premium"
   ↓
4. Fills out signup form on vayo.com/signup
   ↓
5. Account created in:
   - Vayo database (profile, tier)
   - Excursions platform (booking credentials)
   ↓
6. Welcome email sent with:
   - Vayo membership details
   - "Access Booking Platform" button → members.vayo.com
   ↓
7. User clicks button → Auto-logged into white-labeled Excursions
   ↓
8. Books trip on members.vayo.com
   ↓
9. Booking syncs back to Vayo dashboard
   ↓
10. Cashback credited based on tier
```

### Returning Member Flow
```
1. User visits vayo.com and clicks "Member Login"
   ↓
2. Enters credentials on vayo.com/members/login
   ↓
3. Validated against Vayo database
   ↓
4. SSO token generated
   ↓
5. Redirected to members.vayo.com with auto-login
   ↓
6. Seamlessly browsing and booking
```

---

## Key Questions for Excursions Team

1. **White-Label Availability**
   - Do you offer white-label instances for partners?
   - What's the setup process and timeline?
   - Cost structure (monthly fee, revenue share, etc.)?

2. **API Access**
   - Is there a REST API for user management?
   - Can we create users programmatically?
   - Webhook support for booking events?
   - API documentation available?

3. **SSO/Authentication**
   - Do you support SAML, OAuth, or custom SSO?
   - Can we implement single sign-on?
   - Session management approach?

4. **Customization**
   - How much branding customization is allowed?
   - Can we use custom domain (members.vayo.com)?
   - Email template customization?
   - UI theme flexibility?

5. **Data Access**
   - Can we query booking data via API?
   - Real-time or batch sync?
   - User activity tracking?
   - Analytics and reporting access?

6. **Pricing & Commission**
   - Revenue share model?
   - Partner margin structure?
   - How are different membership tiers supported?
   - Cashback/rewards implementation?

---

## Next Steps

### Immediate Actions (This Week)
1. ✅ **Contact Branson Excursions**
   - Email: partnerships@bransonexcursions.com (or support)
   - Subject: "White-Label Partnership - Vayo Travel Platform"
   - Request: Discovery call to discuss integration

2. ✅ **Prepare Vayo Requirements Doc**
   - Share this integration plan
   - Outline desired features
   - Discuss timeline

3. ✅ **Set Up Test Environment**
   - Create test account on Excursions
   - Explore platform capabilities
   - Document user flows

### Short-Term (Week 1-2)
4. ✅ **Build Member Signup Flow**
   - Even if temporary/manual
   - Collect member data in Vayo DB
   - Email automation (welcome, booking portal access)

5. ✅ **Create Members Portal Page**
   - Simple landing page
   - "Access Booking Platform" button
   - Educational content about how to use

### Medium-Term (Week 3-6)
6. ✅ **Implement Agreed Integration Method**
   - Based on Excursions capabilities
   - Could be iframe, white-label, or API

7. ✅ **Build Member Dashboard**
   - Show booking history
   - Display cashback balance
   - Account management

---

## Success Metrics

**Phase 1 Success**:
- ✅ 100% of signups can access booking platform
- ✅ <5 minute time from signup to first search
- ✅ No support tickets about "how to book"

**Phase 2 Success**:
- ✅ Seamless branding (users don't notice two platforms)
- ✅ Single sign-on working (one login for everything)
- ✅ <2% drop-off between Vayo → Excursions

**Phase 3 Success**:
- ✅ Real-time booking data in Vayo dashboard
- ✅ Automatic cashback crediting
- ✅ Personalized recommendations based on history

---

## Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Excursions doesn't offer white-label | High | Fall back to iframe embed or find alternative platform |
| No API access | High | Manual account creation initially, seek API later |
| SSO not supported | Medium | Users manage separate passwords temporarily |
| High integration cost | Medium | Negotiate revenue share vs. flat fee |
| Long setup timeline | Medium | Launch with basic iframe first, enhance later |

---

## Budget Estimate

**Setup Costs**:
- White-label configuration: $2,000 - $5,000 (one-time)
- Custom domain/SSL: $100 - $500 (one-time)
- Development (80-120 hours): $8,000 - $15,000

**Monthly Costs**:
- White-label hosting: $200 - $500/month
- API access: $100 - $300/month
- Transaction fees: 1-3% per booking OR
- Revenue share: 10-20% to Excursions

**Total Year 1**: $15,000 - $25,000 setup + $3,600 - $9,600 monthly = **$18,600 - $34,600**

---

## Conclusion

**Recommended Path**:
1. Start with **simple iframe embed** (Week 1-2) to get users booking immediately
2. Negotiate **white-label partnership** with Excursions (Week 3-6)
3. Implement **SSO and data sync** for seamless experience (Week 7-10)

This phased approach minimizes risk, gets revenue flowing quickly, and allows time to build the ideal integration.

**Next Action**: Contact Branson Excursions to discuss partnership options.
