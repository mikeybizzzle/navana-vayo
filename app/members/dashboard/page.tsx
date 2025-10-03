'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import {
  CalendarDays,
  DollarSign,
  MapPin,
  TrendingUp,
  ExternalLink,
  Heart,
  Bell,
  Settings,
  LogOut,
  Plane,
  Ship,
  Hotel,
  Car
} from 'lucide-react'
import type { User, Booking } from '@/lib/db/types'

export default function MemberDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('vayo_token')
      if (!token) {
        window.location.href = '/members/login'
        return
      }

      const response = await fetch('/api/members/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data')
      }

      const data = await response.json()
      setUser(data.user)
      setBookings(data.bookings || [])
    } catch (error) {
      console.error('Dashboard error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAccessBookingPlatform = async () => {
    try {
      const token = localStorage.getItem('vayo_token')
      const response = await fetch('/api/auth/sso', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()
      if (data.sso_url) {
        window.open(data.sso_url, '_blank')
      }
    } catch (error) {
      console.error('SSO error:', error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('vayo_token')
    window.location.href = '/'
  }

  const getBookingIcon = (type: string) => {
    switch (type) {
      case 'hotel': return <Hotel className="w-5 h-5" />
      case 'cruise': return <Ship className="w-5 h-5" />
      case 'car': return <Car className="w-5 h-5" />
      default: return <Plane className="w-5 h-5" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  const upcomingBookings = bookings.filter(b =>
    b.booking_status === 'confirmed' && new Date(b.check_in) > new Date()
  )

  const pastBookings = bookings.filter(b =>
    b.booking_status === 'completed' || new Date(b.check_out) < new Date()
  )

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <Container>
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Welcome back, {user.first_name}!
                </h1>
                <p className="text-gray-600 mt-1">
                  {user.membership_tier === 'vip_elite' ? 'VIP Elite' :
                   user.membership_tier === 'premium' ? 'Premium' : 'Free Trial'} Member
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden md:inline">Logout</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={handleAccessBookingPlatform}
                    className="bg-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Access Booking Platform
                  </button>
                  <a
                    href="/pricing"
                    className="border-2 border-primary text-primary px-6 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <TrendingUp className="w-5 h-5" />
                    Upgrade Membership
                  </a>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600">Total Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${user.total_savings.toFixed(2)}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-600">Cashback Balance</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${user.cashback_balance.toFixed(2)}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <CalendarDays className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-sm text-gray-600">Total Bookings</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {user.lifetime_bookings}
                  </div>
                </div>
              </div>

              {/* Upcoming Bookings */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Trips</h2>
                {upcomingBookings.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingBookings.map((booking) => (
                      <div key={booking.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              {getBookingIcon(booking.booking_type)}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{booking.property_name}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                <MapPin className="w-4 h-4" />
                                {booking.destination}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                                <span>Check-in: {new Date(booking.check_in).toLocaleDateString()}</span>
                                <span>•</span>
                                <span>{booking.nights} nights</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900">
                              ${booking.total_price.toFixed(2)}
                            </div>
                            {booking.savings_amount && (
                              <div className="text-sm text-green-600">
                                Saved ${booking.savings_amount.toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Plane className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600">No upcoming trips</p>
                    <button
                      onClick={handleAccessBookingPlatform}
                      className="mt-4 text-primary font-semibold hover:underline"
                    >
                      Start planning your next adventure
                    </button>
                  </div>
                )}
              </div>

              {/* Past Bookings */}
              {pastBookings.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Past Trips</h2>
                  <div className="space-y-3">
                    {pastBookings.slice(0, 3).map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                        <div className="flex items-center gap-3">
                          {getBookingIcon(booking.booking_type)}
                          <div>
                            <div className="font-medium text-gray-900">{booking.destination}</div>
                            <div className="text-sm text-gray-600">{new Date(booking.check_in).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <div className="text-sm text-green-600">
                          Saved ${booking.savings_amount?.toFixed(2) || '0.00'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Membership Card */}
              <div className="bg-gradient-to-br from-primary to-purple-600 rounded-xl shadow-lg p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium opacity-90">Membership</span>
                  <Settings className="w-5 h-5 opacity-80" />
                </div>
                <h3 className="text-2xl font-bold mb-1">
                  {user.membership_tier === 'vip_elite' ? 'VIP Elite' :
                   user.membership_tier === 'premium' ? 'Premium' : 'Free Trial'}
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  {user.membership_tier === 'vip_elite' ? '5% cashback on all bookings' :
                   user.membership_tier === 'premium' ? '2% cashback on all bookings' : 'Limited access'}
                </p>
                {user.membership_end_date && (
                  <div className="text-sm opacity-90">
                    Renews: {new Date(user.membership_end_date).toLocaleDateString()}
                  </div>
                )}
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/members/wishlist" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>Saved Deals</span>
                  </a>
                  <a href="/members/notifications" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors">
                    <Bell className="w-5 h-5" />
                    <span>Notifications</span>
                  </a>
                  <a href="/members/settings" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors">
                    <Settings className="w-5 h-5" />
                    <span>Account Settings</span>
                  </a>
                </div>
              </div>

              {/* Referral */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Refer Friends</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Earn $50 credit for each friend who joins!
                </p>
                <a
                  href="/referral"
                  className="block text-center bg-white text-primary px-4 py-2 rounded-lg font-medium hover:shadow-md transition-shadow"
                >
                  Get Referral Link
                </a>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
