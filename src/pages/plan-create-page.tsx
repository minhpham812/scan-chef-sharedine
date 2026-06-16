import { useState } from 'react'
import { PlanCreateHeader } from '@/components/plans/plan-create-header'
import { PlanPhotoUpload } from '@/components/plans/plan-photo-upload'
import { PlanServiceTypeSelector } from '@/components/plans/plan-service-type-selector'
import { PlanMenuItemsField } from '@/components/plans/plan-menu-items-field'

const serviceTypes = ['パーティー', '作り置き', 'ケータリング'] as const

const cuisineOptions = [
  { value: 'japanese', label: '和食' },
  { value: 'french', label: 'フレンチ' },
  { value: 'italian', label: 'イタリアン' },
  { value: 'chinese', label: '中華' },
  { value: 'korean', label: '韓国料理' },
  { value: 'other', label: 'その他' },
]

export function PlanCreatePage() {
  const [serviceType, setServiceType] = useState<string>(serviceTypes[0])
  const [title, setTitle] = useState('')
  const [cuisineType, setCuisineType] = useState(cuisineOptions[0].value)
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [minPeople, setMinPeople] = useState('2')
  const [maxPeople, setMaxPeople] = useState('8')
  const [menuItems, setMenuItems] = useState([''])

  const handleMenuItemChange = (index: number, value: string) => {
    setMenuItems((currentItems) =>
      currentItems.map((item, itemIndex) => (itemIndex === index ? value : item))
    )
  }

  const handleAddMenuItem = () => {
    setMenuItems((currentItems) => [...currentItems, ''])
  }

  const handleRemoveMenuItem = (index: number) => {
    setMenuItems((currentItems) => {
      if (currentItems.length <= 1) {
        return currentItems
      }

      return currentItems.filter((_, itemIndex) => itemIndex !== index)
    })
  }

  return (
    <div className="flex flex-1 flex-col lg:overflow-y-auto">
      <PlanCreateHeader />

      <main className="flex-1 px-4 py-6 lg:px-8">
        <div className="space-y-6 lg:mx-auto lg:max-w-[640px]">
          <PlanPhotoUpload />

          <PlanServiceTypeSelector
            options={[...serviceTypes]}
            value={serviceType}
            onChange={setServiceType}
          />

          <section>
            <label htmlFor="title" className="mb-2 block text-[13px] font-medium text-muted">
              プラン名 <span className="text-warning">*</span>
            </label>
            <input
              id="title"
              placeholder="例: 季節のフレンチコース"
              className="w-full rounded-lg border bg-card px-4 py-3 text-[15px] text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </section>

          <section>
            <label
              htmlFor="cuisineType"
              className="mb-2 block text-[13px] font-medium text-muted"
            >
              ジャンル
            </label>
            <select
              id="cuisineType"
              className="w-full rounded-lg border bg-card px-4 py-3 text-[15px] text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={cuisineType}
              onChange={(event) => setCuisineType(event.target.value)}
            >
              {cuisineOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </section>

          <section>
            <label
              htmlFor="description"
              className="mb-2 block text-[13px] font-medium text-muted"
            >
              プラン説明
            </label>
            <textarea
              id="description"
              placeholder="プランの魅力を伝えましょう。食材へのこだわりや調理スタイルなど..."
              rows={4}
              className="w-full resize-none rounded-lg border bg-card px-4 py-3 text-[15px] text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </section>

          <section>
            <label htmlFor="price" className="mb-2 block text-[13px] font-medium text-muted">
              価格（税込）<span className="text-warning">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[15px] text-muted">
                ¥
              </span>
              <input
                id="price"
                placeholder="15000"
                className="w-full rounded-lg border bg-card py-3 pl-8 pr-16 text-[15px] text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                type="number"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[13px] text-muted">
                /人
              </span>
            </div>
          </section>

          <section>
            <label className="mb-2 block text-[13px] font-medium text-muted">対応人数</label>
            <div className="flex items-center gap-3">
              <input
                placeholder="2"
                min="1"
                className="w-24 rounded-lg border bg-card px-4 py-3 text-center text-[15px] text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                type="number"
                value={minPeople}
                onChange={(event) => setMinPeople(event.target.value)}
              />
              <span className="text-[14px] text-muted">〜</span>
              <input
                placeholder="8"
                min="1"
                className="w-24 rounded-lg border bg-card px-4 py-3 text-center text-[15px] text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                type="number"
                value={maxPeople}
                onChange={(event) => setMaxPeople(event.target.value)}
              />
              <span className="text-[14px] text-muted">名</span>
            </div>
          </section>

          <PlanMenuItemsField
            items={menuItems}
            onChangeItem={handleMenuItemChange}
            onAddItem={handleAddMenuItem}
            onRemoveItem={handleRemoveMenuItem}
          />
        </div>
      </main>
    </div>
  )
}
