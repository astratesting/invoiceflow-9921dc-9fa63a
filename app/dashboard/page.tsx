import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import DashboardClient from '@/components/dashboard/DashboardClient'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const user = await requireAuth()

  const [invoices, clients] = await Promise.all([
    prisma.invoice.findMany({
      where: { userId: user.id },
      include: { client: true },
      orderBy: { createdAt: 'desc' },
      take: 10,
    }),
    prisma.client.findMany({
      where: { userId: user.id },
    }),
  ])

  const stats = {
    totalInvoices: invoices.length,
    paidInvoices: invoices.filter((inv) => inv.status === 'PAID').length,
    pendingAmount: invoices
      .filter((inv) => inv.status === 'SENT')
      .reduce((sum, inv) => sum + inv.total, 0),
    overdueInvoices: invoices.filter((inv) => {
      return inv.status === 'SENT' && new Date(inv.dueDate) < new Date()
    }).length,
  }

  return (
    <DashboardClient
      user={user}
      invoices={invoices}
      clients={clients}
      stats={stats}
    />
  )
}
