import { ArrowLeft, Plus, Send } from 'lucide-react'
import { useState } from 'react'
import type { ChatThread } from './chat-types'

interface ChatConversationPaneProps {
  thread: ChatThread
  title?: string
  onBack?: () => void
}

export function ChatConversationPane({
  thread,
  title = thread.customerName,
  onBack,
}: ChatConversationPaneProps) {
  const [message, setMessage] = useState('')

  return (
    <div className="flex h-full flex-col">
      <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-[#e8e5dc] bg-white px-4 py-3">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-background"
            aria-label="戻る"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
        ) : null}

        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-semibold text-[#2c2a24]">{title}</p>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {thread.messages.map((messageItem, index) => (
          <div key={messageItem.id}>
            {messageItem.dateLabel ? (
              <div className="my-4 flex items-center justify-center">
                <span className="rounded-full bg-[#fafaf7] px-3 py-1 text-[11px] text-[#9e9a8f]">
                  {messageItem.dateLabel}
                </span>
              </div>
            ) : null}

            {messageItem.type === 'system' ? (
              <div className="my-3 flex justify-center">
                <p className="max-w-[85%] text-center text-[12px] text-[#9e9a8f]">
                  {messageItem.text}
                </p>
              </div>
            ) : (
              <div className="mb-3 flex flex-col items-end">
                <div className="max-w-[75%] rounded-2xl bg-[#8a7d52] px-4 py-3 text-white">
                  <p className="whitespace-pre-wrap text-[14px] leading-relaxed">{messageItem.text}</p>
                </div>
                <div className="mt-1 flex flex-row-reverse items-center gap-1">
                  <span className="text-[11px] text-[#9e9a8f]">{messageItem.time}</span>
                </div>
              </div>
            )}

            {index === thread.messages.length - 1 ? <div /> : null}
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 border-t border-[#e8e5dc] bg-[#f5f3ee] px-4 py-3 pb-[env(safe-area-inset-bottom,12px)] lg:pb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e8e5dc] text-[#9e9a8f] transition-colors hover:bg-white"
            aria-label="添付"
          >
            <Plus className="h-[18px] w-[18px]" />
          </button>

          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="メッセージを入力..."
            className="h-11 flex-1 rounded-full border border-[#e8e5dc] bg-white px-4 text-[14px] text-[#2c2a24] outline-none transition-colors placeholder:text-[#9e9a8f] focus:border-[#8a7d52]"
          />

          <button
            type="button"
            disabled={!message.trim()}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8a7d52] text-white transition-opacity disabled:opacity-40"
            aria-label="送信"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
