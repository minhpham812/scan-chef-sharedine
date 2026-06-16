import { cn } from '@/lib/utils'

interface PlanServiceTypeSelectorProps {
  options: string[]
  value: string
  onChange: (value: string) => void
}

export function PlanServiceTypeSelector({
  options,
  value,
  onChange,
}: PlanServiceTypeSelectorProps) {
  return (
    <section>
      <label className="mb-2 block text-[13px] font-medium text-muted">サービスタイプ</label>
      <div className="flex gap-3">
        {options.map((option) => {
          const isActive = value === option
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={cn(
                'flex-1 rounded-lg border-2 px-4 py-3 text-center text-[14px] font-medium transition-colors',
                isActive
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-border text-foreground'
              )}
            >
              {option}
            </button>
          )
        })}
      </div>
    </section>
  )
}
