import { NextRequest, NextResponse } from 'next/server'
import type { LoginRequest } from '@/lib/db/types'

// TODO: Replace with actual database and auth implementation

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json()

    // Validate required fields
    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // TODO: Find user in database
    // const user = await db.query('SELECT * FROM users WHERE email = $1', [body.email])

    // TODO: Verify password
    // const isValid = await verifyPassword(body.password, user.password_hash)
    // if (!isValid) {
    //   return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    // }

    // TODO: Update last_login
    // await db.query('UPDATE users SET last_login = NOW() WHERE id = $1', [user.id])

    // Mock user for now
    const mockUser = {
      id: 'mock-user-id',
      email: body.email,
      first_name: 'John',
      last_name: 'Doe',
      membership_tier: 'premium' as const,
      cashback_balance: 125.50,
      total_savings: 1250.75,
      lifetime_bookings: 5
    }

    // TODO: Generate JWT token
    const token = 'mock-jwt-token'

    // TODO: Generate Excursions SSO token
    // const ssoToken = await generateExcursionsSSO(user.excursions_user_id)
    // const excursions_sso_url = `https://members.vayo.com/sso?token=${ssoToken}`

    return NextResponse.json({
      user: mockUser,
      token,
      // excursions_sso_url, // Uncomment when SSO is implemented
      message: 'Login successful'
    }, { status: 200 })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}
