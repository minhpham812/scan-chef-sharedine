import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Eye, CalendarCheck, Star, UtensilsCrossed } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageHeader, PageContent } from '@/components/layout/page-header'
import { cn } from '@/lib/utils'

interface Plan {
  id: string
  title: string
  price: string
  category: string
  status: 'published' | 'draft'
  badges?: string[]
  views: number
  bookings: number
  rating: string
}

const publishedPlans: Plan[] = [
  {
    id: 'b1000000-0000-0000-0000-000000000001',
    title: '季節の懐石コース',
    price: '¥15,000',
    category: 'パーティー',
    status: 'published',
    badges: ['公開中', '人気No.1'],
    views: 342,
    bookings: 45,
    rating: '-',
  },
  {
    id: 'b1000000-0000-0000-0000-000000000002',
    title: 'おまかせ寿司コース',
    price: '¥22,000',
    category: 'パーティー',
    status: 'published',
    badges: ['公開中'],
    views: 218,
    bookings: 28,
    rating: '-',
  },
]

const draftPlans: Plan[] = [
  {
    id: 'draft-1',
    title: '新規プラン（仮）',
    price: '¥10,000',
    category: '',
    status: 'draft',
    badges: ['下書き'],
    views: 0,
    bookings: 0,
    rating: '-',
  },
]

interface TabFilterProps {
  publishedCount: number
  draftCount: number
  activeTab: 'published' | 'draft'
  onTabChange: (tab: 'published' | 'draft') => void
}

function TabFilter({ publishedCount, draftCount, activeTab, onTabChange }: TabFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto">
      <button
        onClick={() => onTabChange('published')}
        className={cn(
          'shrink-0 rounded-full px-4 py-2 text-[12px] font-medium transition-colors',
          activeTab === 'published'
            ? 'bg-primary text-white font-semibold'
            : 'text-muted hover:text-foreground'
        )}
      >
        公開中 ({publishedCount})
      </button>
      <button
        onClick={() => onTabChange('draft')}
        className={cn(
          'shrink-0 rounded-full px-4 py-2 text-[12px] font-medium transition-colors',
          activeTab === 'draft'
            ? 'bg-primary text-white font-semibold'
            : 'text-muted hover:text-foreground'
        )}
      >
        下書き ({draftCount})
      </button>
    </div>
  )
}

interface PlanCardProps {
  plan: Plan
}

function PlanCard({ plan }: PlanCardProps) {
  return (
    <Link to={`/plans/${plan.id}`} className="block">
      <div className="group overflow-hidden rounded-xl border border-[#e8e5dc] bg-white shadow-sm transition-shadow hover:shadow-md">
        {/* Image area */}
        <div className="relative h-[180px] w-full overflow-hidden bg-[#E8E5DC]">
          <div className="flex h-full w-full items-center justify-center">
            <UtensilsCrossed className="h-10 w-10 text-muted/40" />
          </div>

          {/* Badges */}
          <div className="absolute left-3 top-3 flex gap-2">
            {plan.badges?.map((badge) => (
              <span
                key={badge}
                className={cn(
                  'rounded-full px-2.5 py-0.5 text-[11px] font-medium text-white',
                  badge === '公開中' && 'bg-[#16a34a]/90',
                  badge === '人気No.1' && 'bg-primary/90',
                  badge === '下書き' && 'bg-[#9e9a8f]/90'
                )}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Category */}
          {plan.category && (
            <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-0.5 text-[11px] font-medium text-white">
              {plan.category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-[16px] font-bold text-[#2c2a24]">{plan.title}</h3>
          <p className="mt-1 text-[15px] font-semibold text-primary">
            {plan.price}
            <span className="text-[12px] font-normal text-muted"> /人</span>
          </p>

          {/* Stats */}
          <div className="mt-3 flex items-center gap-4 border-t border-[#e8e5dc] pt-3">
            <div className="flex items-center gap-1 text-[12px] text-muted">
              <Eye className="h-3.5 w-3.5" />
              <span>{plan.views}</span>
            </div>
            <div className="flex items-center gap-1 text-[12px] text-muted">
              <CalendarCheck className="h-3.5 w-3.5" />
              <span>{plan.bookings}件</span>
            </div>
            <div className="flex items-center gap-1 text-[12px] text-muted">
              <Star className="h-3.5 w-3.5" />
              <span>{plan.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function PlansPage() {
  const [tab, setTab] = useState<'published' | 'draft'>('published')

  const plans = tab === 'published' ? publishedPlans : draftPlans

  return (
    <>
      <PageHeader
        title="メニュー管理"
        action={
          <Link to="/plans/new">
            <Button className='rounded-full'>
              <Plus className="h-4 w-4" />
              新規作成
            </Button>
          </Link>
        }
      />
      <PageContent>
        <div className="mt-4">
          <TabFilter
            publishedCount={publishedPlans.length}
            draftCount={draftPlans.length}
            activeTab={tab}
            onTabChange={setTab}
          />

          <div className="mt-4">
            {plans.length === 0 ? (
              <p className="text-[14px] text-muted">プランがありません</p>
            ) : (
              <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
                {plans.map((plan) => (
                  <PlanCard key={plan.id} plan={plan} />
                ))}
              </div>
            )}
          </div>
        </div>
      </PageContent>
    </>
  )
}
