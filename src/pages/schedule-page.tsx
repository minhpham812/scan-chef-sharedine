import { useState } from 'react'
import { PageHeader, PageContent } from '@/components/layout/page-header'
import { ScheduleCalendar, ScheduleDayDetail, type TimeSlot } from '@/components/schedule'

const mockScheduledDays = new Set([2, 3, 4, 6, 15, 16, 22, 27, 29, 30])

export function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1))
  const [selectedDay, setSelectedDay] = useState(16)
  const [slotsByDate, setSlotsByDate] = useState<Map<string, TimeSlot[]>>(new Map([
    ['2026-06-16', [
      { id: '1', startTime: '10:00', endTime: '14:00' },
      { id: '2', startTime: '17:00', endTime: '21:00' },
    ]],
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
      <PageHeader title="スケジュール管理" />
      <PageContent>
        <div className="lg:mx-auto lg:max-w-[640px]">
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
