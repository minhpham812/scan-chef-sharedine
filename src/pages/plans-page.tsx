import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus } from 'lucide-react'

const publishedPlans = [
  { id: 1, tag: '公開中', popular: '人気No.1', title: '季節の懐石コース', price: '¥15,000', reviews: '342', bookings: '45件' },
  { id: 2, tag: '公開中', popular: 'パーティー', title: 'おまかせ寿司コース', price: '¥22,000', reviews: '218', bookings: '28件' },
]

const draftPlans = [
  { id: 3, tag: '下書き', popular: '', title: '新規プラン（仮）', price: '¥10,000', reviews: '-', bookings: '-' },
]

export function PlansPage() {
  const [tab, setTab] = useState('published')

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-heading font-semibold text-[#2c2a24]">メニュー管理</h1>
        <Button><Plus className="h-4 w-4" />新規作成</Button>
      </div>
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList>
          <TabsTrigger value="published">公開中 ({publishedPlans.length})</TabsTrigger>
          <TabsTrigger value="draft">下書き ({draftPlans.length})</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid gap-4 lg:grid-cols-2">
        {(tab === 'published' ? publishedPlans : draftPlans).map((plan) => (
          <Card key={plan.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Badge variant={plan.tag === '公開中' ? 'success' : 'secondary'}>{plan.tag}</Badge>
                {plan.popular && <Badge variant="default">{plan.popular}</Badge>}
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-[16px]">{plan.title}</CardTitle>
              <p className="text-[14px] text-[#9e9a8f] mt-1">{plan.price} /人</p>
              <p className="text-[12px] text-[#9e9a8f] mt-1">{plan.reviews} {plan.bookings !== '-' ? `· ${plan.bookings}` : ''}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
