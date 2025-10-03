import { NextRequest, NextResponse } from 'next/server'
import type { CreateUserRequest } from '@/lib/db/types'

// TODO: Replace with actual database implementation
// For now, this is a mock implementation

export async function POST(request: NextRequest) {
  try {
    const body: CreateUserRequest = await request.json()

    // Validate required fields
    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // TODO: Hash password
    // const password_hash = await hash(body.password)

    // TODO: Check if user already exists
    // const existingUser = await db.query('SELECT * FROM users WHERE email = $1', [body.email])

    // TODO: Create user in database
    // const user = await db.query(`
    //   INSERT INTO users (email, password_hash, first_name, last_name, phone, membership_tier)
    //   VALUES ($1, $2, $3, $4, $5, $6)
    //   RETURNING id, email, first_name, last_name, membership_tier
    // `, [body.email, password_hash, body.first_name, body.last_name, body.phone, body.membership_tier || 'free_trial'])

    // TODO: Create user in Excursions platform via API
    // const excursionsUser = await createExcursionsUser({
    //   email: body.email,
    //   password: body.password,
    //   firstName: body.first_name,
    //   lastName: body.last_name,
    //   customFields: {
    //     vayoUserId: user.id,
    //     vayoTier: body.membership_tier
    //   }
    // })

    // TODO: Update user with Excursions ID
    // await db.query('UPDATE users SET excursions_user_id = $1 WHERE id = $2', [excursionsUser.id, user.id])

    // Mock response for now
    const mockUser = {
      id: 'mock-user-id',
      email: body.email,
      first_name: body.first_name,
      last_name: body.last_name,
      membership_tier: body.membership_tier || 'free_trial',
      cashback_balance: 0,
      total_savings: 0,
      lifetime_bookings: 0
    }

    // TODO: Generate JWT token
    const token = 'mock-jwt-token'

    return NextResponse.json({
      user: mockUser,
      token,
      message: 'Account created successfully'
    }, { status: 201 })

  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    )
  }
}
