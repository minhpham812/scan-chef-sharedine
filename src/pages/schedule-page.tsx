import { useState } from 'react'
import { PageContent } from '@/components/layout/page-header'
import { ScheduleCalendar, ScheduleDayDetail, type TimeSlot } from '@/components/schedule'

const mockScheduledDays = new Set([2, 3, 4, 6, 15, 16, 22, 27, 29, 30])

export function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1))
  const [selectedDay, setSelectedDay] = useState(16)
  const [slotsByDate, setSlotsByDate] = useState<Map<string, TimeSlot[]>>(new Map([
    ['2026-06-02', [{ id: 'd2-1', startTime: '10:00', endTime: '14:00' }]],
    ['2026-06-03', [{ id: 'd3-1', startTime: '17:00', endTime: '21:00' }]],
    ['2026-06-04', [{ id: 'd4-1', startTime: '10:00', endTime: '14:00' }]],
    ['2026-06-06', [{ id: 'd6-1', startTime: '10:00', endTime: '14:00' }]],
    ['2026-06-15', [{ id: 'd15-1', startTime: '17:00', endTime: '21:00' }]],
    ['2026-06-16', [
      { id: '1', startTime: '10:00', endTime: '14:00' },
      { id: '2', startTime: '17:00', endTime: '21:00' },
    ]],
    ['2026-06-22', [{ id: 'd22-1', startTime: '10:00', endTime: '14:00' }]],
    ['2026-06-27', [{ id: 'd27-1', startTime: '17:00', endTime: '21:00' }]],
    ['2026-06-29', [{ id: 'd29-1', startTime: '10:00', endTime: '14:00' }]],
    ['2026-06-30', [{ id: 'd30-1', startTime: '17:00', endTime: '21:00' }]],
  ]))

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const dateLabel = `${year}-${String(month).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`
  const slots = slotsByDate.get(dateLabel) ?? []

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))

  const addSlot = (start: string, end: string) => {
    const id = Date.now().toString()
    setSlotsByDate(prev => {
      const next = new Map(prev)
      next.set(dateLabel, [...(next.get(dateLabel) ?? []), { id, startTime: start, endTime: end }])
      return next
    })
  }

  const deleteSlot = (id: string) => {
    setSlotsByDate(prev => {
      const next = new Map(prev)
      next.set(dateLabel, (next.get(dateLabel) ?? []).filter(s => s.id !== id))
      return next
    })
  }

  return (
    <div>
      <header className="sticky top-0 z-10 border-b border-border bg-white lg:relative">
        <div className="flex h-14 items-center gap-3 px-4 lg:px-8">
          <h1 className="text-[16px] font-bold text-foreground">スケジュール管理</h1>
        </div>
      </header>
      <PageContent>
        <div className="lg:mx-auto pt-4 lg:max-w-[640px]">
          <ScheduleCalendar
            currentDate={currentDate}
            onPrevMonth={prevMonth}
            onNextMonth={nextMonth}
            onSelectDay={setSelectedDay}
            selectedDay={selectedDay}
            scheduledDays={mockScheduledDays}
          />

          <ScheduleDayDetail
            date={dateLabel}
            slots={slots}
            onDeleteSlot={deleteSlot}
            onAddPresetSlot={addSlot}
            onAddCustomSlot={addSlot}
          />
        </div>
      </PageContent>
    </div>
  )
}
