import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

const threads = [
  { initials: 'H', name: 'Huyng', date: '昨日', plan: '季節の懐石コース', status: 'キャンセル', lastMsg: 'hello' },
  { initials: '塚', name: '塚本', date: '6/3', plan: '季節の懐石コース', status: '承認済', lastMsg: 'test' },
  { initials: '塚', name: '塚本', date: '6/1', plan: '季節の懐石コース', status: 'キャンセル', lastMsg: 'シェフからの承諾をお待ちください...' },
  { initials: '李', name: '李信', date: '4/23', plan: '季節の懐石コース', status: '承認済', lastMsg: 'hi' },
  { initials: '李', name: '李信', date: '4/15', plan: '季節の懐石コース', status: '承認済', lastMsg: 'ぽんちゃんきたよ' },
  { initials: '李', name: '李信', date: '4/10', plan: '季節の懐石コース', status: 'キャンセル', lastMsg: 'テスト' },
  { initials: '竹', name: '竹中　飛翔', date: '4/6', plan: '季節の懐石コース', status: '承認済', lastMsg: 'おす' },
]

const statusVariant = (s: string) => s === '承認済' ? 'success' : 'destructive'

export function ChatsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-[22px] font-heading font-semibold text-[#2c2a24]">メッセージ</h2>
      <div className="space-y-2">
        {threads.map((t, i) => (
          <button
            key={i}
            className="w-full flex items-center gap-3 p-4 border border-[#e8e5dc] rounded-[16px] hover:bg-[#f5f3ee] transition-colors text-left"
          >
            <Avatar>
              <AvatarFallback className="bg-[#f5f3ee] text-[#8a7d52] font-semibold text-[13px]">{t.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-medium text-[#2c2a24]">{t.name}</span>
                <span className="text-[12px] text-[#9e9a8f]">{t.date}</span>
                <Badge variant={statusVariant(t.status)} className="text-[11px]">{t.status}</Badge>
              </div>
              <p className="text-[12px] text-[#9e9a8f] truncate mt-0.5">{t.lastMsg}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
