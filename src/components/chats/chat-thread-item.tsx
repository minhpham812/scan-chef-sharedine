import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { ChatThread } from './chat-types'

function statusVariant(status: string) {
  return status === '承認済' ? 'success' : 'secondary'
}

interface ChatThreadItemProps {
  thread: ChatThread
  isSelected?: boolean
  onSelect?: (threadId: string) => void
  href?: string
}

export function ChatThreadItem({ thread, isSelected = false, onSelect, href }: ChatThreadItemProps) {
  const className = cn(
    'flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-[#fafaf7]',
    isSelected && 'border-l-[3px] border-[#8a7d52] bg-[#8a7d520d]'
  )

  const content = (
    <>
      <Avatar className="h-12 w-12">
        <AvatarFallback className="bg-[#e8e5dc] text-[16px] font-bold text-[#8a7d52]">
          {thread.initials}
        </AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-[14px] font-semibold text-foreground">{thread.name}</p>
          <span className="shrink-0 text-[11px] text-muted">{thread.date}</span>
        </div>

        <div className="mt-0.5 flex items-center gap-1.5">
          <span className="truncate text-[12px] text-muted">{thread.plan}</span>
          <Badge
            variant={statusVariant(thread.status)}
            className="shrink-0 border-transparent bg-[#f5f3ee] px-2 py-0.5 text-[10px] font-medium text-muted"
          >
            {thread.status}
          </Badge>
        </div>

        <div className="mt-0.5 flex items-center justify-between gap-2">
          <p className="truncate text-[13px] text-muted">{thread.lastMsg}</p>
        </div>
      </div>
    </>
  )

  if (href) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" onClick={() => onSelect?.(thread.id)} className={className}>
      {content}
    </button>
  )
}
