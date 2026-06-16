import { TrendingUp, CalendarCheck } from 'lucide-react'

export function DashboardStats() {
  return (
    <div className="px-5 pt-4 lg:px-8">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        <div className="rounded-xl border border-[#e8e5dc] bg-white p-4">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="h-4 w-4 text-[#9e9a8f]" />
            <p className="text-[13px] text-[#9e9a8f]">6月の売上</p>
          </div>
          <p className="mt-2 text-[24px] font-bold text-[#2c2a24]">¥0</p>
        </div>
        <div className="rounded-xl border border-[#e8e5dc] bg-white p-4">
          <div className="flex items-center gap-1.5">
            <CalendarCheck className="h-4 w-4 text-[#9e9a8f]" />
            <p className="text-[13px] text-[#9e9a8f]">本日の予約</p>
          </div>
          <p className="mt-2 text-[24px] font-bold text-[#2c2a24]">0件</p>
        </div>
      </div>
    </div>
  )
}
