-- Vayo Database Schema
-- For PostgreSQL, MySQL, or SQLite compatibility

-- Users / Members Table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),

  -- Membership details
  membership_tier VARCHAR(20) DEFAULT 'free_trial', -- 'free_trial', 'premium', 'vip_elite'
  membership_status VARCHAR(20) DEFAULT 'active', -- 'active', 'cancelled', 'expired'
  membership_start_date TIMESTAMP,
  membership_end_date TIMESTAMP,

  -- Excursions integration
  excursions_user_id VARCHAR(100),
  excursions_sync_status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'synced', 'failed'
  excursions_last_sync TIMESTAMP,

  -- Cashback and rewards
  cashback_balance DECIMAL(10, 2) DEFAULT 0.00,
  total_savings DECIMAL(10, 2) DEFAULT 0.00,
  lifetime_bookings INTEGER DEFAULT 0,

  -- Metadata
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP,

  -- Preferences
  email_verified BOOLEAN DEFAULT FALSE,
  marketing_emails BOOLEAN DEFAULT TRUE,
  sms_notifications BOOLEAN DEFAULT FALSE
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_excursions_id ON users(excursions_user_id);

-- Bookings Table (synced from Excursions)
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Excursions reference
  excursions_booking_id VARCHAR(100) UNIQUE,
  excursions_sync_status VARCHAR(20) DEFAULT 'synced',

  -- Booking details
  booking_type VARCHAR(20), -- 'hotel', 'cruise', 'resort', 'package', 'car'
  destination VARCHAR(255),
  property_name VARCHAR(255),

  -- Dates
  check_in DATE,
  check_out DATE,
  nights INTEGER,

  -- Guests
  adults INTEGER DEFAULT 1,
  children INTEGER DEFAULT 0,
  rooms INTEGER DEFAULT 1,

  -- Pricing
  original_price DECIMAL(10, 2),
  member_price DECIMAL(10, 2),
  total_price DECIMAL(10, 2) NOT NULL,
  savings_amount DECIMAL(10, 2),
  savings_percentage DECIMAL(5, 2),

  -- Cashback
  cashback_rate DECIMAL(5, 2), -- e.g., 2.00 for 2%
  cashback_amount DECIMAL(10, 2) DEFAULT 0.00,
  cashback_status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'approved', 'paid'
  cashback_approved_at TIMESTAMP,

  -- Status
  booking_status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'confirmed', 'cancelled', 'completed'
  payment_status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'paid', 'refunded'

  -- Metadata
  booked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  confirmed_at TIMESTAMP,
  cancelled_at TIMESTAMP,
  completed_at TIMESTAMP,

  -- Additional info
  confirmation_number VARCHAR(100),
  special_requests TEXT,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_bookings_user_id ON bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_excursions_id ON bookings(excursions_booking_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(booking_status);
CREATE INDEX IF NOT EXISTS idx_bookings_check_in ON bookings(check_in);

-- Cashback Transactions
CREATE TABLE IF NOT EXISTS cashback_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  booking_id UUID REFERENCES bookings(id) ON DELETE SET NULL,

  -- Transaction details
  transaction_type VARCHAR(20), -- 'earned', 'redeemed', 'expired', 'adjusted'
  amount DECIMAL(10, 2) NOT NULL,
  balance_after DECIMAL(10, 2),

  -- Status
  status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'approved', 'paid', 'cancelled'

  -- Metadata
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  approved_at TIMESTAMP,
  paid_at TIMESTAMP,
  expires_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_cashback_user_id ON cashback_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_cashback_booking_id ON cashback_transactions(booking_id);

-- Membership Subscriptions (for tracking billing)
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Subscription details
  tier VARCHAR(20) NOT NULL, -- 'free_trial', 'premium', 'vip_elite'
  status VARCHAR(20) DEFAULT 'active', -- 'active', 'cancelled', 'past_due', 'expired'

  -- Billing
  billing_cycle VARCHAR(20), -- 'monthly', 'annual'
  amount DECIMAL(10, 2),
  currency VARCHAR(3) DEFAULT 'USD',

  -- Payment method
  payment_method VARCHAR(50), -- 'stripe', 'paypal', etc.
  payment_method_id VARCHAR(100),

  -- Dates
  trial_ends_at TIMESTAMP,
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  cancelled_at TIMESTAMP,

  -- Metadata
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);

-- Wishlist / Saved Searches
CREATE TABLE IF NOT EXISTS wishlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Item details
  item_type VARCHAR(20), -- 'destination', 'property', 'search'
  destination VARCHAR(255),
  property_id VARCHAR(100),

  -- Search parameters (JSON for flexibility)
  search_params JSONB,

  -- Price tracking
  original_price DECIMAL(10, 2),
  price_drop_alert BOOLEAN DEFAULT FALSE,
  target_price DECIMAL(10, 2),

  -- Metadata
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_checked TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_wishlist_user_id ON wishlist(user_id);

-- SSO Tokens (for Excursions integration)
CREATE TABLE IF NOT EXISTS sso_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Token details
  token VARCHAR(255) UNIQUE NOT NULL,
  token_type VARCHAR(20) DEFAULT 'sso', -- 'sso', 'password_reset', 'email_verify'

  -- Security
  expires_at TIMESTAMP NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  used_at TIMESTAMP,

  -- Metadata
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45),
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_sso_tokens_token ON sso_tokens(token);
CREATE INDEX IF NOT EXISTS idx_sso_tokens_user_id ON sso_tokens(user_id);

-- Webhook Events (from Excursions)
CREATE TABLE IF NOT EXISTS webhook_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Event details
  event_type VARCHAR(50) NOT NULL, -- 'booking.created', 'booking.confirmed', 'payment.completed', etc.
  source VARCHAR(50) DEFAULT 'excursions',

  -- Payload
  payload JSONB NOT NULL,

  -- Processing
  processed BOOLEAN DEFAULT FALSE,
  processed_at TIMESTAMP,
  error_message TEXT,
  retry_count INTEGER DEFAULT 0,

  -- Metadata
  received_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  signature VARCHAR(255)
);

CREATE INDEX IF NOT EXISTS idx_webhook_events_processed ON webhook_events(processed);
CREATE INDEX IF NOT EXISTS idx_webhook_events_type ON webhook_events(event_type);

-- Referrals
CREATE TABLE IF NOT EXISTS referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  referred_user_id UUID REFERENCES users(id) ON DELETE SET NULL,

  -- Referral details
  referral_code VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255),

  -- Status
  status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'signed_up', 'converted', 'expired'

  -- Rewards
  referrer_reward DECIMAL(10, 2) DEFAULT 0.00,
  referred_reward DECIMAL(10, 2) DEFAULT 0.00,
  reward_status VARCHAR(20) DEFAULT 'pending',

  -- Dates
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  signed_up_at TIMESTAMP,
  converted_at TIMESTAMP,
  expires_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_referrals_referrer ON referrals(referrer_user_id);
CREATE INDEX IF NOT EXISTS idx_referrals_code ON referrals(referral_code);

-- Notifications
CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Notification details
  type VARCHAR(50) NOT NULL, -- 'booking_confirmed', 'price_drop', 'cashback_approved', etc.
  title VARCHAR(255),
  message TEXT,

  -- Action
  action_url VARCHAR(500),
  action_label VARCHAR(100),

  -- Status
  read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMP,

  -- Metadata
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  priority VARCHAR(20) DEFAULT 'normal' -- 'low', 'normal', 'high'
);

CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_read ON notifications(read);

-- Admin / Audit Log
CREATE TABLE IF NOT EXISTS audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,

  -- Event details
  event_type VARCHAR(50) NOT NULL,
  table_name VARCHAR(50),
  record_id VARCHAR(100),

  -- Changes
  old_values JSONB,
  new_values JSONB,

  -- Context
  ip_address VARCHAR(45),
  user_agent TEXT,

  -- Metadata
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_audit_log_user_id ON audit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_event_type ON audit_log(event_type);
CREATE INDEX IF NOT EXISTS idx_audit_log_created_at ON audit_log(created_at);

-- Update triggers for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
