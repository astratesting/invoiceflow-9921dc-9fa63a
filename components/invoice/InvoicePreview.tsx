import { Invoice, Client } from '@prisma/client'
import { format } from 'date-fns'

interface InvoiceWithRelations extends Invoice {
  client: Client
  user: { name?: string | null; email?: string | null }
  items: { description: string; quantity: number; rate: number; amount: number }[]
}

interface InvoicePreviewProps {
  invoice: InvoiceWithRelations
}

export default function InvoicePreview({ invoice }: InvoicePreviewProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PAID':
        return 'text-acid-green bg-acid-green/10'
      case 'SENT':
        return 'text-flame-orange bg-flame-orange/10'
      case 'OVERDUE':
        return 'text-red-500 bg-red-500/10'
      default:
        return 'text-gray-400 bg-gray-400/10'
    }
  }

  return (
    <div className="bg-white text-near-black rounded-xl p-12 shadow-2xl print:shadow-none">
      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-5xl font-archivo font-black mb-2">
            <span className="text-flame-orange">Invoice</span>
            <span className="text-near-black">Flow</span>
          </h1>
          <p className="text-gray-600">Professional Invoicing</p>
        </div>
        <div className="text-right">
          <h2 className="text-3xl font-archivo font-black text-near-black mb-2">
            INVOICE
          </h2>
          <p className="text-gray-600">#{invoice.number}</p>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(
              invoice.status
            )}`}
          >
            {invoice.status}
          </span>
        </div>
      </div>

      {/* From/To */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">FROM</h3>
          <p className="font-bold text-near-black">{invoice.user.name || 'Your Name'}</p>
          <p className="text-gray-600">{invoice.user.email}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">BILL TO</h3>
          <p className="font-bold text-near-black">{invoice.client.name}</p>
          <p className="text-gray-600">{invoice.client.email}</p>
          {invoice.client.company && (
            <p className="text-gray-600">{invoice.client.company}</p>
          )}
          {invoice.client.address && (
            <p className="text-gray-600">{invoice.client.address}</p>
          )}
        </div>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">ISSUE DATE</h3>
          <p className="font-medium text-near-black">
            {format(new Date(invoice.issueDate), 'MMMM d, yyyy')}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">DUE DATE</h3>
          <p className="font-medium text-near-black">
            {format(new Date(invoice.dueDate), 'MMMM d, yyyy')}
          </p>
        </div>
      </div>

      {/* Items Table */}
      <div className="mb-12">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-near-black">
              <th className="text-left py-3 text-sm font-medium text-gray-500">DESCRIPTION</th>
              <th className="text-right py-3 text-sm font-medium text-gray-500">QTY</th>
              <th className="text-right py-3 text-sm font-medium text-gray-500">RATE</th>
              <th className="text-right py-3 text-sm font-medium text-gray-500">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-4 text-near-black">{item.description}</td>
                <td className="py-4 text-right text-near-black">{item.quantity}</td>
                <td className="py-4 text-right text-near-black">${item.rate.toFixed(2)}</td>
                <td className="py-4 text-right font-medium text-near-black">
                  ${item.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="flex justify-end mb-12">
        <div className="w-64">
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-near-black">${invoice.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Tax</span>
            <span className="text-near-black">${invoice.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-3 border-t-2 border-near-black font-bold text-xl">
            <span className="text-near-black">TOTAL</span>
            <span className="text-flame-orange">${invoice.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Notes */}
      {invoice.notes && (
        <div className="mb-12">
          <h3 className="text-sm font-medium text-gray-500 mb-2">NOTES</h3>
          <p className="text-gray-600">{invoice.notes}</p>
        </div>
      )}

      {/* Footer */}
      <div className="text-center pt-8 border-t border-gray-200">
        <p className="text-gray-500 text-sm">
          Powered by <span className="font-bold text-flame-orange">Invoice</span>
          <span className="font-bold text-near-black">Flow</span>
        </p>
      </div>
    </div>
  )
}
