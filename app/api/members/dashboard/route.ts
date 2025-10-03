import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // TODO: Verify JWT token
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // TODO: Get user from database
    // const user = await db.query('SELECT * FROM users WHERE id = $1', [decoded.userId])

    // TODO: Get user's bookings
    // const bookings = await db.query(`
    //   SELECT * FROM bookings
    //   WHERE user_id = $1
    //   ORDER BY check_in DESC
    //   LIMIT 10
    // `, [user.id])

    // Mock data
    const mockUser = {
      id: 'mock-user-id',
      email: 'john@example.com',
      first_name: 'John',
      last_name: 'Doe',
      membership_tier: 'premium' as const,
      membership_status: 'active' as const,
      cashback_balance: 125.50,
      total_savings: 1250.75,
      lifetime_bookings: 5,
      created_at: new Date(),
      updated_at: new Date(),
      email_verified: true,
      marketing_emails: true,
      sms_notifications: false
    }

    const mockBookings = [
      {
        id: '1',
        user_id: mockUser.id,
        booking_type: 'hotel' as const,
        destination: 'Cancun, Mexico',
        property_name: 'Moon Palace Resort',
        check_in: new Date('2025-11-15'),
        check_out: new Date('2025-11-20'),
        nights: 5,
        adults: 2,
        children: 0,
        rooms: 1,
        total_price: 1250.00,
        original_price: 2100.00,
        savings_amount: 850.00,
        cashback_amount: 25.00,
        cashback_status: 'pending' as const,
        booking_status: 'confirmed' as const,
        payment_status: 'paid' as const,
        booked_at: new Date()
      },
      {
        id: '2',
        user_id: mockUser.id,
        booking_type: 'cruise' as const,
        destination: 'Caribbean',
        property_name: 'Royal Caribbean - Harmony of the Seas',
        check_in: new Date('2025-12-10'),
        check_out: new Date('2025-12-17'),
        nights: 7,
        adults: 2,
        children: 1,
        rooms: 1,
        total_price: 2850.00,
        original_price: 4200.00,
        savings_amount: 1350.00,
        cashback_amount: 57.00,
        cashback_status: 'pending' as const,
        booking_status: 'confirmed' as const,
        payment_status: 'paid' as const,
        booked_at: new Date()
      }
    ]

    return NextResponse.json({
      user: mockUser,
      bookings: mockBookings
    }, { status: 200 })

  } catch (error) {
    console.error('Dashboard error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    )
  }
}
