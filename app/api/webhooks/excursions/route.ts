import { NextRequest, NextResponse } from 'next/server'
import type { ExcursionsBookingWebhook } from '@/lib/db/types'

// Webhook endpoint to receive booking updates from Excursions platform

export async function POST(request: NextRequest) {
  try {
    // TODO: Verify webhook signature
    const signature = request.headers.get('x-excursions-signature')
    // const isValid = await verifyWebhookSignature(signature, request.body)
    // if (!isValid) {
    //   return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    // }

    const webhook: ExcursionsBookingWebhook = await request.json()

    // Store webhook event for processing
    // await db.query(`
    //   INSERT INTO webhook_events (event_type, source, payload, signature)
    //   VALUES ($1, $2, $3, $4)
    // `, [webhook.event, 'excursions', JSON.stringify(webhook), signature])

    // Process webhook based on event type
    switch (webhook.event) {
      case 'booking.created':
        await handleBookingCreated(webhook)
        break

      case 'booking.confirmed':
        await handleBookingConfirmed(webhook)
        break

      case 'booking.cancelled':
        await handleBookingCancelled(webhook)
        break

      case 'payment.completed':
        await handlePaymentCompleted(webhook)
        break

      default:
        console.log('Unknown webhook event:', webhook.event)
    }

    return NextResponse.json({ received: true }, { status: 200 })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handleBookingCreated(webhook: ExcursionsBookingWebhook) {
  // TODO: Create booking record in Vayo database
  // await db.query(`
  //   INSERT INTO bookings (
  //     user_id, excursions_booking_id, booking_type, destination,
  //     property_name, check_in, check_out, nights, adults, children,
  //     rooms, total_price, booking_status, payment_status
  //   ) VALUES (...)
  // `, [...])

  // TODO: Send confirmation email to user
  console.log('Booking created:', webhook.booking.id)
}

async function handleBookingConfirmed(webhook: ExcursionsBookingWebhook) {
  // TODO: Update booking status
  // await db.query(`
  //   UPDATE bookings
  //   SET booking_status = 'confirmed', confirmed_at = NOW()
  //   WHERE excursions_booking_id = $1
  // `, [webhook.booking.id])

  // TODO: Send confirmation notification
  console.log('Booking confirmed:', webhook.booking.id)
}

async function handleBookingCancelled(webhook: ExcursionsBookingWebhook) {
  // TODO: Update booking status
  // await db.query(`
  //   UPDATE bookings
  //   SET booking_status = 'cancelled', cancelled_at = NOW()
  //   WHERE excursions_booking_id = $1
  // `, [webhook.booking.id])

  // TODO: Process refund if applicable
  console.log('Booking cancelled:', webhook.booking.id)
}

async function handlePaymentCompleted(webhook: ExcursionsBookingWebhook) {
  // TODO: Update payment status and award cashback
  // const booking = await db.query(`
  //   UPDATE bookings
  //   SET payment_status = 'paid'
  //   WHERE excursions_booking_id = $1
  //   RETURNING *
  // `, [webhook.booking.id])

  // TODO: Calculate and award cashback
  // const user = await db.query('SELECT * FROM users WHERE id = $1', [booking.user_id])
  // const cashbackRate = getCashbackRate(user.membership_tier)
  // const cashbackAmount = booking.total_price * (cashbackRate / 100)

  // await db.query(`
  //   INSERT INTO cashback_transactions (user_id, booking_id, transaction_type, amount, status)
  //   VALUES ($1, $2, 'earned', $3, 'pending')
  // `, [user.id, booking.id, cashbackAmount])

  // await db.query(`
  //   UPDATE users
  //   SET cashback_balance = cashback_balance + $1
  //   WHERE id = $2
  // `, [cashbackAmount, user.id])

  console.log('Payment completed:', webhook.booking.id)
}
