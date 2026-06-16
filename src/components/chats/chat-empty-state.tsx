import { MessageCircle } from 'lucide-react'

export function ChatEmptyState() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center gap-2 text-center">
        <MessageCircle className="h-16 w-16 text-[#e8e5dc]" />
        <p className="text-[14px] text-[#9e9a8f]">メッセージを選択してください</p>
      </div>
    </div>
  )
}
