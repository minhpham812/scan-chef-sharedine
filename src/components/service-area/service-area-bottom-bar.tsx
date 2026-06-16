import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ServiceAreaBottomBarProps {
  onSave: () => void
  disabled?: boolean
}

export function ServiceAreaBottomBar({ onSave, disabled }: ServiceAreaBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-white px-5 py-4 lg:static lg:border-t-0 lg:px-8 lg:py-6">
      <div className="lg:mx-auto lg:max-w-[640px]">
        <Button size="action" onClick={onSave} disabled={disabled} className="w-full">
          <Check className="h-5 w-5" />
          エリア設定を保存
        </Button>
      </div>
    </div>
  )
}
