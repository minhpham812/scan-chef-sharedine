import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const cuisineTags = [
  '和食', 'フレンチ', 'イタリアン', '中華', '家庭料理', 'エスニック',
  'スイーツ', 'その他', '寿司', 'ビストロ', 'ピッツァ', '作り置き',
  'アレルギー対応', '中華料理', '四川', '広東', '懐石料理',
]

export function ProfilePage() {
  const [name, setName] = useState('AAAAA')
  const [bio, setBio] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>(['和食', '懐石料理'])
  const [notifyEnabled, setNotifyEnabled] = useState(true)

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="space-y-6 max-w-lg">
      <h1 className="text-[22px] font-heading font-semibold text-[#2c2a24]">プロフィール</h1>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#2c2a24]">シェフの表示名</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#2c2a24]">料理スタイル・得意分野</label>
          <div className="flex flex-wrap gap-2">
            {cuisineTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                className="cursor-pointer text-[12px]"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#2c2a24]">シェフとしての経歴やこだわりを紹介してください</label>
          <Textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="経歴やこだわりを入力..."
            rows={4}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-medium text-[#2c2a24]">通知</span>
          <button
            onClick={() => setNotifyEnabled(!notifyEnabled)}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${notifyEnabled ? 'bg-[#8a7d52]' : 'bg-[#e8e5dc]'}`}
          >
            <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${notifyEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
          </button>
        </div>
        <Button className="w-full">保存する</Button>
      </div>
    </div>
  )
}
