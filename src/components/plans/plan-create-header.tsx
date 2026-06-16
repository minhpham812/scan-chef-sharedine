import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

interface PlanCreateHeaderProps {
  publishDisabled?: boolean
}

export function PlanCreateHeader({ publishDisabled = true }: PlanCreateHeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b bg-card">
      <div className="flex h-14 items-center justify-between px-4 lg:px-8">
        <Link to="/plans" className="flex items-center gap-1 text-[14px] text-muted">
          <X className="h-5 w-5" />
        </Link>
        <h1 className="text-[16px] font-bold text-foreground">プラン作成</h1>
        <button
          type="button"
          disabled={publishDisabled}
          className="rounded-full bg-primary px-4 py-1.5 text-[13px] font-medium text-primary-foreground disabled:opacity-50"
        >
          公開する
        </button>
      </div>
    </header>
  )
}
