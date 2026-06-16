import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ScheduleCalendarProps {
  currentDate: Date
  onPrevMonth: () => void
  onNextMonth: () => void
  onSelectDay: (day: number) => void
  selectedDay: number
  scheduledDays?: Set<number>
}

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'] as const

export function ScheduleCalendar({
  currentDate,
  onPrevMonth,
  onNextMonth,
  onSelectDay,
  selectedDay,
  scheduledDays = new Set(),
}: ScheduleCalendarProps) {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const monthLabel = currentDate.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long' })

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  return (
    <div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onPrevMonth}
          className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-primary/5 transition-colors"
          aria-label="前月"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <h2 className="text-[18px] font-bold text-foreground">{monthLabel}</h2>
        <button
          type="button"
          onClick={onNextMonth}
          className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-primary/5 transition-colors"
          aria-label="次月"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-white">
        <div className="grid grid-cols-7 border-b border-border">
          {WEEKDAYS.map((d, i) => (
            <div
              key={d}
              className={cn(
                'py-2 text-center text-[12px] font-medium',
                i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : 'text-muted'
              )}
            >
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {cells.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} className="h-12 border-b border-r border-border" />
            }

            const isSelected = selectedDay === day
            const isScheduled = scheduledDays.has(day)
            const isToday = day === 16 // simplified: compare to actual today if needed
            const weekDay = new Date(year, month, day).getDay()

            return (
              <button
                key={day}
                type="button"
                onClick={() => onSelectDay(day)}
                className={cn(
                  'relative flex h-12 flex-col items-center justify-center border-b border-r border-border text-[14px] transition-colors hover:bg-primary/5',
                  isSelected && 'bg-primary/10 font-bold text-primary hover:bg-primary/5',
                  !isSelected && weekDay === 0 && 'text-red-500',
                  !isSelected && weekDay === 6 && 'text-blue-500',
                  !isSelected && weekDay !== 0 && weekDay !== 6 && 'text-foreground'
                )}
              >
                <span>{day}</span>
                {isScheduled && (
                  <span className="absolute bottom-1 h-1.5 w-1.5 rounded-full bg-primary" />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
