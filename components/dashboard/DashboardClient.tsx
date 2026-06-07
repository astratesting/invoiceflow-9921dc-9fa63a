'use client'

import { useState } from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Invoice } from '@prisma/client'
import { Client } from '@prisma/client'
import CreateInvoiceModal from './CreateInvoiceModal'
import InvoicesList from './InvoicesList'
import StatsCards from './StatsCards'

interface DashboardClientProps {
  user: { id: string; name?: string | null; email?: string | null; role: string }
  invoices: (Invoice & { client: Client })[]
  clients: Client[]
  stats: {
    totalInvoices: number
    paidInvoices: number
    pendingAmount: number
    overdueInvoices: number
  }
}

export default function DashboardClient({
  user,
  invoices,
  clients,
  stats,
}: DashboardClientProps) {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'invoices' | 'clients'>('overview')

  return (
    <div className="min-h-screen bg-near-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-archivo font-black text-flame-orange">Invoice</span>
            <span className="text-xl font-archivo font-black text-acid-green">Flow</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">{user.email}</span>
            <Button
              variant="ghost"
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="text-gray-400 hover:text-white"
            >
              Log out
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-4 flex space-x-8">
          {(['overview', 'invoices', 'clients'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-2 border-b-2 font-medium text-sm capitalize ${
                activeTab === tab
                  ? 'border-flame-orange text-flame-orange'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-archivo font-black text-white">
                Overview
              </h1>
              <Button
                onClick={() => setShowCreateModal(true)}
                className="bg-flame-orange hover:bg-flame-orange/90 text-white"
              >
                + New Invoice
              </Button>
            </div>
            <StatsCards stats={stats} />
            <div className="mt-8">
              <h2 className="text-2xl font-archivo font-black text-white mb-4">Recent Invoices</h2>
              <InvoicesList invoices={invoices.slice(0, 5)} />
            </div>
          </div>
        )}

        {activeTab === 'invoices' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-archivo font-black text-white">Invoices</h1>
              <Button
                onClick={() => setShowCreateModal(true)}
                className="bg-flame-orange hover:bg-flame-orange/90 text-white"
              >
                + New Invoice
              </Button>
            </div>
            <InvoicesList invoices={invoices} />
          </div>
        )}

        {activeTab === 'clients' && (
          <div>
            <h1 className="text-4xl font-archivo font-black text-white mb-8">Clients</h1>
            <div className="grid gap-4">
              {clients.map((client) => (
                <div key={client.id} className="card">
                  <h3 className="text-lg font-bold text-white">{client.name}</h3>
                  <p className="text-gray-400">{client.email}</p>
                  {client.company && (
                    <p className="text-gray-500 text-sm">{client.company}</p>
                  )}
                </div>
              ))}
              {clients.length === 0 && (
                <p className="text-gray-400 text-center py-8">
                  No clients yet. They'll appear here when you create your first invoice.
                </p>
              )}
            </div>
          </div>
        )}
      </main>

      {showCreateModal && (
        <CreateInvoiceModal
          clients={clients}
          onClose={() => setShowCreateModal(false)}
        />
      )}
    </div>
  )
}
