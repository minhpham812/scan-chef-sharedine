import { useState } from 'react'
import {
  ServiceAreaMapHero,
  ServiceAreaAddressInput,
  ServiceAreaRadiusSlider,
  ServiceAreaList,
  ServiceAreaBottomBar,
  type ServiceAreaItem,
} from '@/components/service-area'

const mockAreas: ServiceAreaItem[] = [
  { id: '1', address: '京都市山下区名胜藤西浦町172-1188', travelFee: null },
  { id: '2', address: '東京都港区', travelFee: 2000 },
  { id: '3', address: '東京都渋谷区', travelFee: 2000 },
  { id: '4', address: '大阪府大阪市', travelFee: 2000 },
  { id: '5', address: '神奈川県横浜市', travelFee: 2000 },
  { id: '6', address: '愛知県名古屋市', travelFee: 2000 },
  { id: '7', address: '福岡県福岡市', travelFee: 2000 },
]

export function ServiceAreaPage() {
  const [address, setAddress] = useState('京都市山下区名胜藤西浦町172-1188')
  const [radius, setRadius] = useState(12)

  const handleSave = () => {
    console.log('Saving service area:', { address, radius })
  }

  return (
    <div className="flex flex-col lg:flex-1 lg:overflow-y-auto">
      <header className="sticky top-0 z-10 border-b border-border bg-white lg:relative">
        <div className="flex h-14 items-center gap-3 px-4 lg:px-8">
          <h1 className="text-[16px] font-bold text-foreground">提供エリア設定</h1>
        </div>
      </header>

      <main className="px-5 pt-4 lg:px-8">
        <div className="lg:mx-auto lg:max-w-[640px]">
          <ServiceAreaMapHero radius={radius} />

          <div className="mt-6 space-y-6">
            <ServiceAreaAddressInput value={address} onChange={setAddress} />
            <ServiceAreaRadiusSlider value={radius} onChange={setRadius} />
            <ServiceAreaList items={mockAreas} />
          </div>
        </div>
      </main>

      <ServiceAreaBottomBar onSave={handleSave} />
    </div>
  )
}
