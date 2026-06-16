import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function ServiceAreaPage() {
  const [address, setAddress] = useState('京都市山下区名胜藤西浦町172-1188')
  const [radius, setRadius] = useState(12)

  return (
    <div className="space-y-6 max-w-lg">
      <h1 className="text-[22px] font-heading font-semibold text-[#2c2a24]">提供エリア設定</h1>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#2c2a24]">拠点住所</label>
          <Input value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#2c2a24]">提供半径: {radius}km</label>
          <input
            type="range"
            min={1}
            max={50}
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
            className="w-full accent-[#8a7d52]"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-[16px] font-heading font-medium text-[#2c2a24]">対応エリア</h2>
          <p className="text-[14px] text-[#9e9a8f]">
            {address}为中心 {radius}km 范围内的区域
          </p>
        </div>
        <Button className="w-full">エリア設定を保存</Button>
      </div>
    </div>
  )
}
