import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import InvoicePreview from '@/components/invoice/InvoicePreview'

export const dynamic = 'force-dynamic'

export default async function InvoicePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    notFound()
  }

  const invoice = await prisma.invoice.findFirst({
    where: {
      id,
      userId: session.user.id,
    },
    include: {
      client: true,
      user: true,
      items: true,
    },
  })

  if (!invoice) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-near-black py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 flex justify-between items-center">
          <a
            href="/dashboard"
            className="text-flame-orange hover:text-flame-orange/80"
          >
            ← Back to Dashboard
          </a>
          <div className="flex space-x-4">
            <button
              onClick={() => window.print()}
              className="btn-secondary"
            >
              Download PDF
            </button>
            {invoice.status !== 'PAID' && (
              <button
                onClick={async () => {
                  await fetch('/api/email/send', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ invoiceId: invoice.id }),
                  })
                  window.location.reload()
                }}
                className="btn-primary"
              >
                Send to Client
              </button>
            )}
          </div>
        </div>

        <InvoicePreview invoice={invoice} />
      </div>
    </div>
  )
}
