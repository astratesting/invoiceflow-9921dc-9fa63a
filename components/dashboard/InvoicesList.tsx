import { Invoice } from '@prisma/client'
import { Client } from '@prisma/client'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'

interface InvoicesListProps {
  invoices: (Invoice & { client: Client })[]
}

export default function InvoicesList({ invoices }: InvoicesListProps) {
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

  const getStatusLabel = (invoice: Invoice & { client: Client }) => {
    if (invoice.status === 'SENT' && new Date(invoice.dueDate) < new Date()) {
      return 'OVERDUE'
    }
    return invoice.status
  }

  return (
    <div className="space-y-4">
      {invoices.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-gray-400 mb-4">No invoices yet</p>
          <p className="text-sm text-gray-500">Create your first invoice to get started</p>
        </div>
      ) : (
        invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="card hover:border-flame-orange/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <h3 className="text-lg font-bold text-white">
                    #{invoice.number}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      getStatusLabel(invoice)
                    )}`}
                  >
                    {getStatusLabel(invoice)}
                  </span>
                </div>
                <p className="text-gray-400">{invoice.client.name}</p>
                <p className="text-sm text-gray-500">
                  Issued: {format(new Date(invoice.issueDate), 'MMM d, yyyy')} •
                  Due: {format(new Date(invoice.dueDate), 'MMM d, yyyy')}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-archivo font-black text-white">
                  ${invoice.total.toFixed(2)}
                </p>
                <div className="flex space-x-2 mt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-flame-orange hover:text-flame-orange/80"
                  >
                    View
                  </Button>
                  {invoice.status === 'DRAFT' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-acid-green hover:text-acid-green/80"
                    >
                      Send
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
