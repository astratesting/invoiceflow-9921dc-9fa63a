import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      )
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as any

      await prisma.invoice.updateMany({
        where: { stripePaymentIntentId: paymentIntent.id },
        data: {
          status: 'PAID',
          paidAt: new Date(),
        },
      })
    }

    if (event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object as any

      await prisma.invoice.updateMany({
        where: { stripePaymentIntentId: paymentIntent.id },
        data: {
          status: 'SENT',
        },
      })
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    )
  }
}
