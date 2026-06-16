import { DashboardReservationsList } from './dashboard-reservations-list'
import { DashboardReservationsTable } from './dashboard-reservations-table'
import type { ReservationItem } from './dashboard-reservations-list'

interface DashboardReservationsSectionProps {
  reservations: ReservationItem[]
}

export function DashboardReservationsSection({ reservations }: DashboardReservationsSectionProps) {
  return (
    <section className="mt-8 px-5 lg:px-8">
      <h2 className="text-[18px] font-bold text-[#2c2a24]">本日の予約</h2>

      <DashboardReservationsList reservations={reservations} />
      <DashboardReservationsTable reservations={reservations} />
    </section>
  )
}
