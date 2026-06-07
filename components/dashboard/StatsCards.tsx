interface StatsCardsProps {
  stats: {
    totalInvoices: number
    paidInvoices: number
    pendingAmount: number
    overdueInvoices: number
  }
}

export default function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      label: 'Total Invoices',
      value: stats.totalInvoices,
      color: 'text-flame-orange',
    },
    {
      label: 'Paid Invoices',
      value: stats.paidInvoices,
      color: 'text-acid-green',
    },
    {
      label: 'Pending Amount',
      value: `$${stats.pendingAmount.toFixed(2)}`,
      color: 'text-vivid-magenta',
    },
    {
      label: 'Overdue',
      value: stats.overdueInvoices,
      color: 'text-red-500',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div key={card.label} className="card">
          <p className="text-gray-400 text-sm mb-2">{card.label}</p>
          <p className={`text-3xl font-archivo font-black ${card.color}`}>
            {card.value}
          </p>
        </div>
      ))}
    </div>
  )
}
