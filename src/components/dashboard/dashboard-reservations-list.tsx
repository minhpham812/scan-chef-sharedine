import { Clock } from "lucide-react";

export interface ReservationItem {
  time: string;
  customer: string;
  plan: string;
  guests: string;
  area: string;
}

interface DashboardReservationsListProps {
  reservations: ReservationItem[];
}

export function DashboardReservationsList({
  reservations,
}: DashboardReservationsListProps) {
  if (reservations.length === 0) {
    return <p className="text-[14px] text-[#9e9a8f]">本日の予約はありません</p>;
  }

  return (
    <div className="mt-4 space-y-3 lg:hidden">
      {reservations.map((r, i) => (
        <div key={i} className="rounded-xl border border-border bg-white p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-[#9e9a8f]" />
            <span className="text-[14px] font-semibold text-[#2c2a24]">
              {r.time}
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-[14px] font-semibold text-[#2c2a24]">
              {r.customer}
            </p>
            <p className="text-[13px] text-[#9e9a8f]">
              {r.plan} · {r.guests} · {r.area}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
