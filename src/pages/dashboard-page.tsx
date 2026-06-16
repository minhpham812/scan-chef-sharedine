import {
  DashboardHeader,
  DashboardStats,
  DashboardReservationsSection,
  type ReservationItem,
} from '@/components/dashboard'

const reservations: ReservationItem[] = [
  { time: '10:30', customer: 'Huyng 様', plan: '季節の懐石コース', guests: '2名', area: '山上区' },
  { time: '11:30', customer: '塚本 様', plan: '季節の懐石コース', guests: '2名', area: '山上区' },
]

export function DashboardPage() {
  return (
    <div>
      <DashboardHeader chefName="AAAAA シェフ" />
      <DashboardStats />
      <DashboardReservationsSection reservations={reservations} />
    </div>
  )
}
