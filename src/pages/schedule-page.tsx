import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const days = Array.from({ length: 30 }, (_, i) => i + 1)

export function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1))

  const monthLabel = currentDate.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long' })

  return (
    <div className="space-y-4">
      <h1 className="text-[22px] font-heading font-semibold text-[#2c2a24]">スケジュール管理</h1>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>
          <ChevronLeft className="h-4 w-4" />前月
        </Button>
        <h2 className="text-[18px] font-heading font-medium text-[#2c2a24]">{monthLabel}</h2>
        <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>
          次月<ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <Button key={day} variant="outline" className="h-12 text-[14px]">
            {day}
          </Button>
        ))}
      </div>
    </div>
  )
}
