import { MapPin } from 'lucide-react'

export interface ServiceAreaItem {
  id: string
  address: string
  travelFee: number | null
}

interface ServiceAreaListProps {
  items: ServiceAreaItem[]
}

export function ServiceAreaList({ items }: ServiceAreaListProps) {
  return (
    <section>
      <h2 className="text-[14px] font-bold text-foreground">対応エリア</h2>
      <div className="mt-3 divide-y divide-border overflow-hidden rounded-xl border border-border bg-white">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-muted" />
              <span className="text-[14px] text-foreground">{item.address}</span>
            </div>
            {item.travelFee === null ? (
              <span className="text-[13px] font-medium text-success">出張費なし</span>
            ) : (
              <span className="text-[13px] font-medium text-foreground">
                ¥{item.travelFee.toLocaleString()}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
