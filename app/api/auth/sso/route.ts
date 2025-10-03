import { NextRequest, NextResponse } from 'next/server'

// SSO endpoint to generate token for Excursions platform

export async function POST(request: NextRequest) {
  try {
    // TODO: Verify JWT token from Authorization header
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // TODO: Extract and verify JWT
    // const token = authHeader.replace('Bearer ', '')
    // const decoded = await verifyJWT(token)

    // TODO: Get user from database
    // const user = await db.query('SELECT * FROM users WHERE id = $1', [decoded.userId])

    // TODO: Generate SSO token for Excursions
    // const ssoToken = await createSSOToken({
    //   user_id: user.id,
    //   expires_in: 600 // 10 minutes
    // })

    // TODO: Call Excursions SSO endpoint
    // const excursionsResponse = await fetch('https://api.bransonexcursions.com/auth/sso', {
    //   method: 'POST',
    //   headers: {
    //     'X-API-Key': process.env.EXCURSIONS_API_KEY!,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     excursions_user_id: user.excursions_user_id,
    //     sso_token: ssoToken,
    //     return_url: 'https://members.vayo.com/dashboard'
    //   })
    // })

    // Mock response for now
    const sso_url = 'https://bransonexcursions.com/app/login/'

    return NextResponse.json({
      sso_url,
      expires_in: 600
    }, { status: 200 })

  } catch (error) {
    console.error('SSO error:', error)
    return NextResponse.json(
      { error: 'Failed to generate SSO token' },
      { status: 500 }
    )
  }
}
