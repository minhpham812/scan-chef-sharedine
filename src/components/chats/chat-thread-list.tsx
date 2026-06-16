import { ChatThreadItem } from './chat-thread-item'
import type { ChatThread } from './chat-types'

interface ChatThreadListProps {
  threads: ChatThread[]
  title?: string
  className?: string
  selectedThreadId?: string
  onSelectThread?: (threadId: string) => void
  getThreadHref?: (thread: ChatThread) => string
}

export function ChatThreadList({
  threads,
  title,
  className,
  selectedThreadId,
  onSelectThread,
  getThreadHref,
}: ChatThreadListProps) {
  return (
    <section className={className}>
      {title ? (
        <div className="flex h-14 items-center border-b border-[#e8e5dc] px-5">
          <h2 className="text-[16px] font-bold text-[#2c2a24]">{title}</h2>
        </div>
      ) : null}

      <div>
        {threads.map((thread, index) => (
          <ChatThreadItem
            key={`${thread.id}-${index}`}
            thread={thread}
            isSelected={thread.id === selectedThreadId}
            onSelect={onSelectThread}
            href={getThreadHref?.(thread)}
          />
        ))}
      </div>
    </section>
  )
}
