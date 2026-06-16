import { MapPin } from 'lucide-react'

interface ServiceAreaMapHeroProps {
  radius: number
}

export function ServiceAreaMapHero({ radius }: ServiceAreaMapHeroProps) {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-xl bg-[#2C2A24]">
      <div className="flex flex-col items-center gap-2">
        <MapPin className="h-8 w-8 text-primary" />
        <span className="rounded-full bg-white/20 px-3 py-1 text-[13px] font-medium text-white">
          拠点から半径{radius}km
        </span>
      </div>
    </div>
  )
}
