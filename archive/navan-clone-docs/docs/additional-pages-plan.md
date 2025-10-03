# Additional Pages Development Plan

## Overview
Based on the Navan website navigation structure, the following pages need to be built to create a complete website replica.

---

## Priority 1: Core Product Pages

### 1. Business Travel Page (`/solutions/business-travel`)

**Purpose:** Showcase the business travel booking platform

**Key Sections:**
1. **Hero Section**
   - Headline: "Book business travel in seconds"
   - Subheadline highlighting speed and ease
   - Demo CTA + "See How It Works" video button
   - Hero image: Travel booking interface mockup

2. **Key Features Grid** (4-6 cards)
   - Flight, hotel, car rental booking
   - Real-time price comparison
   - Policy compliance built-in
   - 24/7 travel support
   - Mobile app integration
   - Rewards program

3. **Booking Flow Demo**
   - Step-by-step visual walkthrough
   - Screenshots of booking process
   - Highlight speed: "Book in 3 clicks"

4. **Integration Section**
   - Calendar sync (Google, Outlook)
   - Expense system integration
   - Corporate card integration

5. **Travel Support**
   - 24/7 support availability
   - Multi-language support
   - Duty of care features

6. **Stats Section**
   - Average booking time
   - Cost savings percentage
   - User satisfaction score

7. **Customer Stories**
   - 2-3 testimonials specific to travel
   - Logo cloud of travel-focused companies

8. **CTA Section**
   - "Start booking smarter" CTA
   - Demo request form

**Components Needed:**
- BookingFlowDemo component
- IntegrationShowcase component
- SupportFeatures component
- TravelStats component

---

### 2. Expense Management Page (`/solutions/expense-management`)

**Purpose:** Showcase expense tracking and reporting features

**Key Sections:**
1. **Hero Section**
   - Headline: "Expense reports that write themselves"
   - Subheadline about automation
   - Product demo image

2. **Expense Features** (6 cards)
   - Receipt capture (photo/email)
   - Automatic categorization
   - Policy enforcement
   - Approval workflows
   - ERP integration
   - Real-time reporting

3. **Process Automation**
   - Before/After comparison
   - Time saved calculator
   - Manual vs automated workflow

4. **Receipt Capture Demo**
   - Mobile app screenshots
   - Email forwarding feature
   - OCR technology highlight

5. **Policy Compliance**
   - Out-of-policy detection
   - Approval routing
   - Exception handling

6. **Integration Partners**
   - QuickBooks, Xero, SAP, NetSuite logos
   - API capabilities

7. **ROI Calculator**
   - Interactive calculator
   - Input: employees, avg expenses
   - Output: time/money saved

8. **Testimonials + CTA**

**Components Needed:**
- ExpenseFeatureGrid component
- BeforeAfterComparison component
- ReceiptCaptureDemo component
- ROICalculator component

---

### 3. Pricing Page (`/pricing`)

**Purpose:** Display pricing tiers and feature comparison

**Key Sections:**
1. **Hero Section**
   - Headline: "Simple, transparent pricing"
   - Subheadline: "No hidden fees"

2. **Pricing Toggle**
   - Monthly/Annual toggle
   - Savings badge for annual

3. **Pricing Tiers** (3 columns)
   - **Starter**
     - Price point
     - Core features list
     - User limit
     - "Get Started" CTA

   - **Professional** (Most Popular)
     - Price point
     - All Starter features +
     - Advanced features
     - "Start Free Trial" CTA

   - **Enterprise**
     - "Contact Sales"
     - Custom pricing
     - All Professional features +
     - Enterprise features
     - "Contact Us" CTA

4. **Feature Comparison Table**
   - Detailed feature-by-feature comparison
   - Expandable sections
   - Checkmarks/X marks for availability

5. **FAQ Section**
   - Common pricing questions
   - Contract terms
   - Payment methods
   - Cancellation policy

6. **Add-Ons Section** (if applicable)
   - Additional services
   - Premium support
   - Training packages

7. **CTA Banner**
   - "Not sure which plan is right?"
   - "Talk to Sales" CTA

**Components Needed:**
- PricingToggle component
- PricingCard component
- FeatureComparisonTable component
- PricingFAQ component

---

## Priority 2: Role-Based Pages

### 4. For Travel Managers Page (`/solutions/travel-managers`)

**Key Sections:**
1. Hero tailored to travel managers
2. Pain points this role faces
3. Features that solve those problems
4. Analytics/reporting dashboards
5. Policy management tools
6. Testimonials from travel managers
7. CTA

**Components:** RoleFocusedHero, PainPointsGrid, SolutionsShowcase

---

### 5. For Finance Teams Page (`/solutions/finance-teams`)

**Key Sections:**
1. Finance-focused hero
2. CFO pain points
3. Financial controls features
4. Reconciliation automation
5. Audit trail capabilities
6. Integration with accounting systems
7. Finance team testimonials
8. CTA

---

## Priority 3: Content Pages

### 6. About Us Page (`/company/about`)

**Key Sections:**
1. **Hero Section**
   - Company mission/vision
   - Founded year, location
   - Brief company story

2. **Company Stats**
   - Employees count
   - Customers served
   - Countries available
   - Total bookings/transactions

3. **Our Story**
   - Timeline of company growth
   - Key milestones
   - Founder story (if applicable)

4. **Leadership Team**
   - Executive team photos/bios
   - 4-8 key executives
   - LinkedIn links

5. **Values Section**
   - Company values (4-6 cards)
   - What drives the company

6. **Careers CTA**
   - "Join our team"
   - Link to careers page

**Components:** CompanyStats, Timeline, LeadershipGrid, ValuesCards

---

### 7. Customers/Case Studies Page (`/customers`)

**Key Sections:**
1. **Hero**
   - "See how companies succeed with Navan"

2. **Featured Case Study**
   - Large format case study
   - Company logo, industry
   - Challenge, solution, results
   - Video testimonial

3. **Case Study Grid** (6-9 cards)
   - Company logo
   - Industry
   - Key metric/result
   - "Read Story" link

4. **Filter Options**
   - By industry
   - By company size
   - By use case

5. **Stats Banner**
   - Overall customer satisfaction
   - Average ROI
   - NPS score

6. **CTA**
   - "Become a customer"

**Components:** FeaturedCaseStudy, CaseStudyCard, FilterBar

---

### 8. Resources/Blog Page (`/resources`)

**Key Sections:**
1. **Hero**
   - "Resources to help you succeed"

2. **Resource Categories** (Tabs or Cards)
   - Blog posts
   - Guides/eBooks
   - Webinars
   - Case studies
   - Calculators/Tools

3. **Featured Resources** (3-4 cards)
   - Large image
   - Title, description
   - "Read More" or "Download" CTA

4. **Recent Blog Posts Grid**
   - 6-9 blog post cards
   - Thumbnail image
   - Title, excerpt
   - Date, author
   - Category tag

5. **Newsletter Signup**
   - Email capture form
   - "Get the latest insights"

6. **Search & Filter**
   - Search bar
   - Filter by category
   - Filter by topic

**Components:** ResourceCard, BlogPostCard, NewsletterForm, SearchFilter

---

## Priority 4: Support Pages

### 9. Contact Us Page (`/contact`)

**Key Sections:**
1. **Hero**
   - "We're here to help"
   - Subheadline with response time

2. **Contact Methods** (3 columns)
   - **Sales Inquiries**
     - "Request a Demo" form
     - Or "Call Sales" number

   - **Customer Support**
     - Help center link
     - Support email
     - Live chat button

   - **General Inquiries**
     - General contact form
     - Company email
     - Office addresses

3. **Contact Form**
   - Name, email, company
   - Subject dropdown
   - Message textarea
   - Submit button

4. **Office Locations** (if applicable)
   - Map with pins
   - Office addresses
   - Photos of offices

5. **FAQ Section**
   - Quick answers to common questions
   - Link to full help center

**Components:** ContactForm, ContactMethodCard, OfficeLocation

---

### 10. Help Center/FAQ Page (`/help`)

**Key Sections:**
1. **Search Bar**
   - Prominent search
   - "What can we help you with?"

2. **Popular Topics** (6-8 cards)
   - Getting Started
   - Booking Travel
   - Expense Reports
   - Account Settings
   - Billing & Payments
   - Mobile App

3. **FAQ Categories**
   - Expandable accordion
   - Organized by topic
   - Search functionality

4. **Still Need Help?**
   - Contact support options
   - Live chat
   - Submit ticket

**Components:** SearchBar, TopicCard, FAQAccordion

---

## Priority 5: Legal Pages

### 11. Privacy Policy (`/privacy`)
- Standard legal page layout
- Table of contents
- Dated sections
- Contact information

### 12. Terms of Service (`/terms`)
- Standard legal page layout
- Numbered sections
- Effective date
- Contact information

**Components:** LegalPageLayout, TableOfContents

---

## Implementation Strategy

### Phase 1: Core Product Pages (Week 1)
1. Business Travel page
2. Expense Management page
3. Pricing page

### Phase 2: Role-Based Pages (Week 2)
4. Travel Managers page
5. Finance Teams page

### Phase 3: Content & Support (Week 3)
6. About Us page
7. Customers page
8. Resources/Blog page
9. Contact page
10. Help Center page

### Phase 4: Legal & Polish (Week 4)
11. Privacy Policy page
12. Terms of Service page
13. Final QA and optimization

---

## Reusable Components to Build

### Layout Components
- `PageHero` - Flexible hero for different pages
- `SectionWrapper` - Consistent section spacing
- `ContentGrid` - Reusable grid layouts

### Feature Components
- `FeatureCard` - For feature showcases
- `StatCard` - For displaying metrics
- `TestimonialCard` - For customer quotes
- `ComparisonTable` - For feature comparisons
- `ContactForm` - Form component
- `SearchBar` - Search functionality
- `FilterBar` - Filter controls
- `Accordion` - FAQ/expandable content

### Interactive Components
- `TabNavigation` - For switching content
- `PricingToggle` - Monthly/annual switch
- `Calculator` - ROI/savings calculators
- `VideoPlayer` - Embedded video player

---

## Design System Consistency

**Maintain across all pages:**
- Same color palette (primary purple, backgrounds)
- Same typography system (Sanomat, Neue Hass Grotesk)
- Same spacing system (80-120px sections)
- Same animation patterns (fade-in on scroll)
- Same component variants (button styles, card styles)
- Same responsive breakpoints

---

## Content Strategy

**For each page, ensure:**
1. Clear value proposition in hero
2. Benefit-focused copy (not just features)
3. Social proof (logos, testimonials, stats)
4. Multiple CTAs throughout
5. Mobile-optimized content
6. SEO-friendly structure
7. Fast load times

---

## Testing Requirements

**For each new page:**
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Accessibility (WCAG AA)
- [ ] Load time < 3 seconds
- [ ] All links functional
- [ ] Forms validate properly
- [ ] Images optimized
- [ ] SEO meta tags
- [ ] Analytics tracking

---

## Estimated Effort

| Priority | Pages | Time Estimate |
|----------|-------|---------------|
| Priority 1 | 3 pages | 15-20 hours |
| Priority 2 | 2 pages | 8-10 hours |
| Priority 3 | 5 pages | 20-25 hours |
| Priority 4 | 2 pages | 6-8 hours |
| Priority 5 | 2 pages | 4-6 hours |
| **Total** | **14 pages** | **53-69 hours** |

---

## Next Steps

1. Review this plan with stakeholder
2. Prioritize which pages to build first
3. Create detailed wireframes for Priority 1 pages
4. Build reusable components library
5. Start implementation phase by phase
