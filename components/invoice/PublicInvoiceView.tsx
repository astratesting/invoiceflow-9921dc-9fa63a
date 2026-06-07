'use client'

import { useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Invoice, Client } from '@prisma/client'
import { format } from 'date-fns'
import PaymentForm from './PaymentForm'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

interface InvoiceWithRelations extends Invoice {
  client: Client
  user: { name?: string | null; email?: string | null }
  items: { description: string; quantity: number; rate: number; amount: number }[]
}

interface PublicInvoiceViewProps {
  invoice: InvoiceWithRelations
}

export default function PublicInvoiceView({
  invoice,
}: PublicInvoiceViewProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handlePayNow = async () => {
    setLoading(true)

    try {
      const response = await fetch('/api/stripe/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ invoiceId: invoice.id }),
      })

      const data = await response.json()

      if (data.clientSecret) {
        setClientSecret(data.clientSecret)
      }
    } catch (error) {
      console.error('Payment initialization error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (invoice.status === 'PAID') {
    return (
      <div className="bg-white rounded-xl p-12 shadow-lg text-center">
        <div className="text-6xl mb-4">✓</div>
        <h2 className="text-3xl font-archivo font-black text-acid-green mb-4">
          Payment Received
        </h2>
        <p className="text-gray-600 mb-8">
          Invoice #{invoice.number} has been paid. Thank you!
        </p>
        <div className="border-t pt-8">
          <p className="text-gray-500 text-sm">
            Powered by{' '}
            <span className="font-bold text-flame-orange">Invoice</span>
            <span className="font-bold text-near-black">Flow</span>
          </p>
        </div>
      </div>
    )
  }

  if (clientSecret) {
    return (
      <div className="bg-white rounded-xl p-12 shadow-lg">
        <Elements
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <PaymentForm invoice={invoice} clientSecret={clientSecret} />
        </Elements>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-12 shadow-lg">
      {/* Invoice Header */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h2 className="text-3xl font-archivo font-black text-near-black mb-2">
            INVOICE
          </h2>
          <p className="text-gray-600">#{invoice.number}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Status</p>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-flame-orange bg-flame-orange/10">
            {invoice.status}
          </span>
        </div>
      </div>

      {/* From/To */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">FROM</h3>
          <p className="font-bold text-near-black">{invoice.user.name || 'Freelancer'}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">BILL TO</h3>
          <p className="font-bold text-near-black">{invoice.client.name}</p>
          <p className="text-gray-600">{invoice.client.email}</p>
        </div>
      </div>

      {/* Amount */}
      <div className="bg-gray-50 rounded-lg p-8 mb-8 text-center">
        <p className="text-gray-600 mb-2">AMOUNT DUE</p>
        <p className="text-5xl font-archivo font-black text-flame-orange">
          ${invoice.total.toFixed(2)}
        </p>
        <p className="text-gray-500 mt-2">
          Due: {format(new Date(invoice.dueDate), 'MMMM d, yyyy')}
        </p>
      </div>

      {/* Pay Button */}
      <button
        onClick={handlePayNow}
        disabled={loading}
        className="w-full bg-flame-orange hover:bg-flame-orange/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors glow-orange"
      >
        {loading ? 'Processing...' : `Pay $${invoice.total.toFixed(2)}`}
      </button>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          Secured by Stripe • Powered by{' '}
          <span className="font-bold text-flame-orange">Invoice</span>
          <span className="font-bold text-near-black">Flow</span>
        </p>
      </div>
    </div>
  )
}
