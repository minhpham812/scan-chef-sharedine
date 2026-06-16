import { MapPin } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface ServiceAreaAddressInputProps {
  value: string
  onChange: (value: string) => void
}

export function ServiceAreaAddressInput({ value, onChange }: ServiceAreaAddressInputProps) {
  return (
    <section>
      <label htmlFor="base-address" className="text-[14px] font-bold text-foreground">
        拠点住所
      </label>
      <div className="relative mt-2">
        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <Input
          id="base-address"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="住所を入力"
          className="pl-10"
        />
      </div>
    </section>
  )
}
