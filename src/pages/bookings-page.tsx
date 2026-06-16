import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { PageHeader, PageContent } from '@/components/layout/page-header'

const allBookings = [
  { customer: 'Huyng 様', plan: '季節の懐石コース', date: '6/27 10:30', guests: '2名', amount: '¥30,000', status: 'キャンセル' },
  { customer: '塚本 様', plan: '季節の懐石コース', date: '6/25 11:30', guests: '2名', amount: '¥30,000', status: 'キャンセル' },
  { customer: '塚本 様', plan: '季節の懐石コース', date: '6/19 11:30', guests: '2名', amount: '¥30,000', status: '承認済' },
  { customer: '李信 様', plan: '季節の懐石コース', date: '4/29 09:30', guests: '2名', amount: '¥30,000', status: '承認済' },
  { customer: '李信 様', plan: '季節の懐石コース', date: '4/23 10:00', guests: '4名', amount: '¥60,000', status: '承認済' },
  { customer: '竹中　飛翔 様', plan: '季節の懐石コース', date: '4/8 07:15', guests: '2名', amount: '¥30,000', status: '承認済' },
  { customer: '李信 様', plan: '季節の懐石コース', date: '4/2 07:00', guests: '2名', amount: '¥30,000', status: 'キャンセル' },
]

const statusVariant = (status: string) =>
  status === '承認済' ? 'success' : status === 'キャンセル' ? 'destructive' : 'secondary'

const TABS = [
  { key: 'all', label: 'すべて', count: allBookings.length },
  { key: 'request', label: 'リクエスト', count: allBookings.filter(b => b.status === 'リクエスト').length },
  { key: 'upcoming', label: '今後の予定', count: allBookings.filter(b => b.status === '承認済').length },
  { key: 'done', label: '完了', count: allBookings.filter(b => ['完了', 'キャンセル'].includes(b.status)).length },
]

export function BookingsPage() {
  const [filter, setFilter] = useState('all')

  const filteredBookings = allBookings.filter(b => {
    if (filter === 'all') return true
    if (filter === 'request') return b.status === 'リクエスト'
    if (filter === 'upcoming') return b.status === '承認済'
    if (filter === 'done') return ['完了', 'キャンセル'].includes(b.status)
    return true
  })

  return (
    <div className="space-y-4">
      <PageHeader title="受注管理" />

      <PageContent>
        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`shrink-0 rounded-full px-4 py-2 text-[12px] font-medium transition-colors ${
                filter === tab.key
                  ? 'bg-[#8a7d52] text-white font-semibold'
                  : 'text-[#9e9a8f] hover:text-[#2c2a24]'
              }`}
            >
              {tab.label}
              <span className="ml-1">({tab.count})</span>
            </button>
          ))}
        </div>

        {/* Mobile: card list */}
        <div className="mt-4 space-y-3 lg:hidden">
          {filteredBookings.length === 0 ? (
            <div className="rounded-xl border border-[#e8e5dc] bg-white py-12 text-center">
              <p className="text-[14px] text-[#9e9a8f]">該当する予約はありません</p>
            </div>
          ) : (
            filteredBookings.map((b, i) => (
              <div key={i} className="rounded-xl border border-[#e8e5dc] bg-white p-4">
                <div className="flex items-start justify-between">
                  <p className="text-[16px] font-bold text-[#2c2a24]">
                    {b.customer.replace(' 様', '')}
                    <span className="font-normal text-[#9e9a8f]"> 様</span>
                  </p>
                  <Badge variant={statusVariant(b.status)}>{b.status}</Badge>
                </div>
                <p className="mt-1.5 text-[14px] text-[#2c2a24]">
                  {b.plan}
                  <span className="ml-1.5 text-[#9e9a8f]">· {b.guests}</span>
                </p>
                <div className="mt-1 flex items-center gap-1 text-[13px] text-[#9e9a8f]">
                  <span>{b.date}</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-[#e8e5dc] pt-3">
                  <span className="text-[16px] font-bold text-[#8a7d52]">{b.amount}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Desktop: table */}
        <div className="mt-4 hidden lg:block">
          <div className="overflow-hidden rounded-xl border border-[#e8e5dc] bg-white">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-[#e8e5dc] bg-[#fafaf7]">
                  <TableHead className="px-4 py-3 text-left text-[13px] font-semibold text-[#9e9a8f]">お客様</TableHead>
                  <TableHead className="px-4 py-3 text-left text-[13px] font-semibold text-[#9e9a8f]">プラン</TableHead>
                  <TableHead className="px-4 py-3 text-left text-[13px] font-semibold text-[#9e9a8f]">日時</TableHead>
                  <TableHead className="px-4 py-3 text-left text-[13px] font-semibold text-[#9e9a8f]">人数</TableHead>
                  <TableHead className="px-4 py-3 text-left text-[13px] font-semibold text-[#9e9a8f]">金額</TableHead>
                  <TableHead className="px-4 py-3 text-left text-[13px] font-semibold text-[#9e9a8f]">ステータス</TableHead>
                  <TableHead className="px-4 py-3 text-right text-[13px] font-semibold text-[#9e9a8f]">アクション</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBookings.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="py-12 text-center text-[14px] text-[#9e9a8f]">
                      該当する予約はありません
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredBookings.map((b, i) => (
                    <TableRow key={i} className="border-b border-[#e8e5dc] last:border-b-0 transition-colors hover:bg-[#fafaf7]">
                      <TableCell className="px-4 py-3 text-[14px] font-medium text-[#2c2a24]">{b.customer}</TableCell>
                      <TableCell className="px-4 py-3 text-[14px] text-[#2c2a24]">{b.plan}</TableCell>
                      <TableCell className="px-4 py-3 text-[14px] text-[#9e9a8f]">{b.date}</TableCell>
                      <TableCell className="px-4 py-3 text-[14px] text-[#9e9a8f]">{b.guests}</TableCell>
                      <TableCell className="px-4 py-3 text-[14px] font-medium text-[#2c2a24]">{b.amount}</TableCell>
                      <TableCell className="px-4 py-3"><Badge variant={statusVariant(b.status)}>{b.status}</Badge></TableCell>
                      <TableCell className="px-4 py-3 text-right" />
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </PageContent>
    </div>
  )
}
