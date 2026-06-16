import { Plus, Trash2 } from 'lucide-react'

interface PlanMenuItemsFieldProps {
  items: string[]
  onChangeItem: (index: number, value: string) => void
  onAddItem: () => void
  onRemoveItem: (index: number) => void
}

export function PlanMenuItemsField({
  items,
  onChangeItem,
  onAddItem,
  onRemoveItem,
}: PlanMenuItemsFieldProps) {
  const canRemoveItems = items.length >= 2

  return (
    <section>
      <label className="mb-2 block text-[13px] font-medium text-muted">
        メニュー構成 <span className="text-warning">*</span>
      </label>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={`menu-item-${index + 1}`} className="flex items-center gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[12px] font-bold text-primary">
              {index + 1}
            </span>
            <input
              placeholder="品目名を入力"
              className="flex-1 rounded-lg border bg-card px-4 py-2.5 text-[15px] text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              type="text"
              value={item}
              onChange={(event) => onChangeItem(index, event.target.value)}
            />
            {canRemoveItems && (
              <button
                type="button"
                onClick={() => onRemoveItem(index)}
                className="shrink-0 p-1.5 text-muted transition-colors hover:text-warning"
                aria-label={`${index + 1}番目の品目を削除`}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onAddItem}
        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg border-2 border-dashed py-2.5 text-[13px] font-medium text-muted transition-colors hover:border-primary hover:text-primary"
      >
        <Plus className="h-4 w-4" />
        品目を追加
      </button>
    </section>
  )
}
