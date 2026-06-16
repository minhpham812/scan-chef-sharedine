import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ReservationItem } from "./dashboard-reservations-list";

interface DashboardReservationsTableProps {
  reservations: ReservationItem[];
}

export function DashboardReservationsTable({
  reservations,
}: DashboardReservationsTableProps) {
  if (reservations.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 hidden lg:block">
      <div className="overflow-hidden rounded-xl border border-border bg-white">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border bg-background">
              <TableHead className="px-4 py-3 text-left text-[13px] font-semibold text-muted">
                時間
              </TableHead>
              <TableHead className="px-4 py-3 text-left text-[13px] font-semibold text-muted">
                お客様
              </TableHead>
              <TableHead className="px-4 py-3 text-left text-[13px] font-semibold text-muted">
                プラン
              </TableHead>
              <TableHead className="px-4 py-3 text-left text-[13px] font-semibold text-muted">
                人数
              </TableHead>
              <TableHead className="px-4 py-3 text-left text-[13px] font-semibold text-muted">
                エリア
              </TableHead>
              <TableHead className="px-4 py-3 text-right text-[13px] font-semibold text-muted" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations.map((r, i) => (
              <TableRow key={i}>
                <TableCell>{r.time}</TableCell>
                <TableCell>{r.customer}</TableCell>
                <TableCell>{r.plan}</TableCell>
                <TableCell>{r.guests}</TableCell>
                <TableCell>{r.area}</TableCell>
                <TableCell className="text-right" />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
