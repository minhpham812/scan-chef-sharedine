import { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageHeader, PageContent } from '@/components/layout/page-header'

const cuisineTags = [
  '和食', 'フレンチ', 'イタリアン', '中華', '家庭料理', 'エスニック',
  'スイーツ', 'その他', '寿司', 'ビストロ', 'ピッツァ', '作り置き',
  'アレルギー対応', '中華料理', '四川', '広東', '懐石料理',
]

export function ProfilePage() {
  const [name, setName] = useState('AAAAA')
  const [bio, setBio] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([
    '和食', 'フレンチ', 'イタリアン', 'ピッツァ', '作り置き', 'アレルギー対応',
  ])
  const [acceptingOrders, setAcceptingOrders] = useState(true)

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  return (
    <>
      <PageHeader
        title="プロフィール"
        subtitle="お客様に表示されるプロフィール情報を管理します"
      />
      <PageContent>
        <div className="flex flex-col items-center gap-3">
          <div className="relative h-20 w-20 overflow-hidden rounded-full bg-border">
            <img
              alt={name}
              className="h-full w-full object-cover"
              src="https://clt-cbt-images.s3.ap-northeast-1.amazonaws.com/seed/avatars/chef-001.jpg"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-[14px] font-medium text-foreground">4.9</span>
            <span className="text-[13px] text-muted">(128件)</span>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-lg space-y-6">
          <div>
            <label className="mb-1.5 block text-[14px] font-medium text-foreground">
              表示名
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="シェフの表示名"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-[14px] font-medium text-foreground">
              得意ジャンル
            </label>
            <div className="flex flex-wrap gap-2">
              {cuisineTags.map(tag => {
                const selected = selectedTags.includes(tag)
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                      selected
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-white text-muted hover:border-primary/50 hover:text-foreground'
                    }`}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-[14px] font-medium text-foreground">
              自己紹介
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="シェフとしての経歴やこだわりを紹介してください"
              rows={5}
              className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-[15px] text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-white p-4">
            <div>
              <p className="text-[14px] font-medium text-foreground">受注を受け付ける</p>
              <p className="mt-0.5 text-[13px] text-muted">
                オフにすると新規予約を一時停止します
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={acceptingOrders}
              onClick={() => setAcceptingOrders(prev => !prev)}
              className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                acceptingOrders ? 'bg-primary' : 'bg-border'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 rounded-full bg-white shadow-sm ring-0 transition-transform ${
                  acceptingOrders ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <Button size="action" className="text-white">
            保存する
          </Button>
        </div>
      </PageContent>
    </>
  )
}
