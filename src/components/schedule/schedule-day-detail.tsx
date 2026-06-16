import { Clock, Trash2, Plus } from 'lucide-react'

export interface TimeSlot {
  id: string
  startTime: string
  endTime: string
}

interface ScheduleDayDetailProps {
  date: string
  slots: TimeSlot[]
  onDeleteSlot: (id: string) => void
  onAddPresetSlot: (start: string, end: string) => void
  onAddCustomSlot: (start: string, end: string) => void
}

const PRESET_SLOTS = [
  { label: '午前 10:00-14:00', start: '10:00', end: '14:00' },
  { label: '夕方 17:00-21:00', start: '17:00', end: '21:00' },
]

export function ScheduleDayDetail({
  date,
  slots,
  onDeleteSlot,
  onAddPresetSlot,
  onAddCustomSlot,
}: ScheduleDayDetailProps) {
  const formatTime = (t: string) => t

  return (
    <section className="mt-6">
      <h3 className="text-[14px] font-bold text-foreground">{date} の予定</h3>

      <div className="mt-3 divide-y divide-border overflow-hidden rounded-xl border border-border bg-white">
        {slots.length === 0 ? (
          <div className="px-4 py-6 text-center">
            <p className="text-[14px] text-muted">この日の予定はありません</p>
          </div>
        ) : (
          slots.map((slot) => (
            <div key={slot.id} className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-muted" />
                <span className="text-[14px] text-foreground">
                  {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => onDeleteSlot(slot.id)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50"
                aria-label="削除"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="mt-4">
        <p className="mb-2 text-[13px] font-medium text-muted">時間帯を追加</p>
        <div className="flex flex-wrap gap-2">
          {PRESET_SLOTS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => onAddPresetSlot(preset.start, preset.end)}
              className="flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-2 text-[13px] text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-50"
            >
              <Plus className="h-3.5 w-3.5" />
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-border bg-white p-4">
        <p className="mb-3 text-[13px] font-medium text-foreground">カスタム時間帯</p>
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.currentTarget
            const start = (form.elements.namedItem('start') as HTMLInputElement).value
            const end = (form.elements.namedItem('end') as HTMLInputElement).value
            if (start && end) onAddCustomSlot(start, end)
          }}
        >
          <input
            className="rounded-lg border border-border px-3 py-2 text-[14px] text-foreground outline-none focus:border-primary"
            type="time"
            name="start"
            defaultValue="10:00"
          />
          <span className="text-[13px] text-muted">~</span>
          <input
            className="rounded-lg border border-border px-3 py-2 text-[14px] text-foreground outline-none focus:border-primary"
            type="time"
            name="end"
            defaultValue="14:00"
          />
          <button
            type="submit"
            className="flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-[13px] font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            <Plus className="h-4 w-4" />
            追加
          </button>
        </form>
      </div>
    </section>
  )
}
