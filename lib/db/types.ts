// Database Types for Vayo

export type MembershipTier = 'free_trial' | 'premium' | 'vip_elite'
export type MembershipStatus = 'active' | 'cancelled' | 'expired'
export type BookingType = 'hotel' | 'cruise' | 'resort' | 'package' | 'car'
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed'
export type PaymentStatus = 'pending' | 'paid' | 'refunded'
export type CashbackStatus = 'pending' | 'approved' | 'paid'

export interface User {
  id: string
  email: string
  password_hash: string
  first_name?: string
  last_name?: string
  phone?: string

  // Membership
  membership_tier: MembershipTier
  membership_status: MembershipStatus
  membership_start_date?: Date
  membership_end_date?: Date

  // Excursions integration
  excursions_user_id?: string
  excursions_sync_status: 'pending' | 'synced' | 'failed'
  excursions_last_sync?: Date

  // Rewards
  cashback_balance: number
  total_savings: number
  lifetime_bookings: number

  // Metadata
  created_at: Date
  updated_at: Date
  last_login?: Date

  // Preferences
  email_verified: boolean
  marketing_emails: boolean
  sms_notifications: boolean
}

export interface Booking {
  id: string
  user_id: string

  // Excursions reference
  excursions_booking_id?: string
  excursions_sync_status: 'synced' | 'pending' | 'failed'

  // Booking details
  booking_type: BookingType
  destination: string
  property_name: string

  // Dates
  check_in: Date
  check_out: Date
  nights: number

  // Guests
  adults: number
  children: number
  rooms: number

  // Pricing
  original_price?: number
  member_price?: number
  total_price: number
  savings_amount?: number
  savings_percentage?: number

  // Cashback
  cashback_rate?: number
  cashback_amount: number
  cashback_status: CashbackStatus
  cashback_approved_at?: Date

  // Status
  booking_status: BookingStatus
  payment_status: PaymentStatus

  // Metadata
  booked_at: Date
  confirmed_at?: Date
  cancelled_at?: Date
  completed_at?: Date

  confirmation_number?: string
  special_requests?: string
  notes?: string
}

export interface CashbackTransaction {
  id: string
  user_id: string
  booking_id?: string

  transaction_type: 'earned' | 'redeemed' | 'expired' | 'adjusted'
  amount: number
  balance_after: number

  status: 'pending' | 'approved' | 'paid' | 'cancelled'

  description?: string
  created_at: Date
  approved_at?: Date
  paid_at?: Date
  expires_at?: Date
}

export interface Subscription {
  id: string
  user_id: string

  tier: MembershipTier
  status: 'active' | 'cancelled' | 'past_due' | 'expired'

  billing_cycle: 'monthly' | 'annual'
  amount: number
  currency: string

  payment_method?: string
  payment_method_id?: string

  trial_ends_at?: Date
  current_period_start: Date
  current_period_end: Date
  cancelled_at?: Date

  created_at: Date
  updated_at: Date
}

export interface WishlistItem {
  id: string
  user_id: string

  item_type: 'destination' | 'property' | 'search'
  destination?: string
  property_id?: string

  search_params?: Record<string, any>

  original_price?: number
  price_drop_alert: boolean
  target_price?: number

  created_at: Date
  last_checked?: Date
}

export interface SSOToken {
  id: string
  user_id: string

  token: string
  token_type: 'sso' | 'password_reset' | 'email_verify'

  expires_at: Date
  used: boolean
  used_at?: Date

  created_at: Date
  ip_address?: string
  user_agent?: string
}

export interface WebhookEvent {
  id: string

  event_type: string
  source: string

  payload: Record<string, any>

  processed: boolean
  processed_at?: Date
  error_message?: string
  retry_count: number

  received_at: Date
  signature?: string
}

export interface Referral {
  id: string
  referrer_user_id: string
  referred_user_id?: string

  referral_code: string
  email?: string

  status: 'pending' | 'signed_up' | 'converted' | 'expired'

  referrer_reward: number
  referred_reward: number
  reward_status: 'pending' | 'approved' | 'paid'

  created_at: Date
  signed_up_at?: Date
  converted_at?: Date
  expires_at?: Date
}

export interface Notification {
  id: string
  user_id: string

  type: string
  title: string
  message: string

  action_url?: string
  action_label?: string

  read: boolean
  read_at?: Date

  created_at: Date
  priority: 'low' | 'normal' | 'high'
}

// API Response types
export interface CreateUserRequest {
  email: string
  password: string
  first_name?: string
  last_name?: string
  phone?: string
  membership_tier?: MembershipTier
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  user: Omit<User, 'password_hash'>
  token: string
  excursions_sso_url?: string
}

export interface ExcursionsUserCreateRequest {
  email: string
  password: string
  firstName?: string
  lastName?: string
  phone?: string
  customFields?: {
    vayoUserId: string
    vayoTier: MembershipTier
  }
}

export interface ExcursionsBookingWebhook {
  event: 'booking.created' | 'booking.confirmed' | 'booking.cancelled' | 'payment.completed'
  booking: {
    id: string
    userId: string
    type: BookingType
    destination: string
    propertyName: string
    checkIn: string
    checkOut: string
    guests: {
      adults: number
      children: number
      rooms: number
    }
    pricing: {
      total: number
      original?: number
      memberRate?: number
    }
    status: string
    confirmationNumber?: string
  }
}

// Membership tier pricing
export const MEMBERSHIP_TIERS = {
  free_trial: {
    name: 'Free Trial',
    price: 0,
    duration_days: 14,
    cashback_rate: 0,
    features: [
      'Browse member-only deals',
      'Limited booking access',
      'Basic support'
    ]
  },
  premium: {
    name: 'Premium',
    monthly_price: 37,
    annual_price: 444, // 12 months for price of 11
    cashback_rate: 2,
    features: [
      'Full access to all deals',
      'Wholesale pricing',
      '2% cashback on bookings',
      'Priority support',
      'Price match guarantee'
    ]
  },
  vip_elite: {
    name: 'VIP Elite',
    monthly_price: 97,
    annual_price: 1164,
    cashback_rate: 5,
    features: [
      'Everything in Premium',
      '5% cashback on bookings',
      'Exclusive VIP-only deals',
      'Concierge service',
      'Upgrade priority',
      'Early access to new inventory'
    ]
  }
} as const
