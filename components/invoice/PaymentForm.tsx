'use client'

import { useState } from 'react'
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { Invoice } from '@prisma/client'

interface PaymentFormProps {
  invoice: Invoice & { client: any; user: any; items: any[] }
  clientSecret: string
}

export default function PaymentForm({ invoice }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setLoading(true)
    setError(null)

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/i/${invoice.id}?success=true`,
      },
      redirect: 'if_required',
    })

    if (result.error) {
      setError(result.error.message || 'Payment failed')
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
      window.location.reload()
    }
  }

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">✓</div>
        <h2 className="text-3xl font-archivo font-black text-acid-green mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-600">
          Thank you for your payment. Invoice #{invoice.number} has been marked as paid.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />

      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-flame-orange hover:bg-flame-orange/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors disabled:opacity-50"
      >
        {loading ? 'Processing...' : `Pay $${invoice.total.toFixed(2)}`}
      </button>
    </form>
  )
}
