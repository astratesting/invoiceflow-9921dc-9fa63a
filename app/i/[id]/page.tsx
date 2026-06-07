import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import PublicInvoiceView from '@/components/invoice/PublicInvoiceView'

export const dynamic = 'force-dynamic'

export default async function PublicInvoicePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const invoice = await prisma.invoice.findUnique({
    where: { id },
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
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-archivo font-black">
            <span className="text-flame-orange">Invoice</span>
            <span className="text-near-black">Flow</span>
          </h1>
        </div>

        <PublicInvoiceView invoice={invoice} />
      </div>
    </div>
  )
}
