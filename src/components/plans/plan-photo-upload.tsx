import { useId } from 'react'
import { ImagePlus } from 'lucide-react'

interface PlanPhotoUploadProps {
  disabled?: boolean
}

export function PlanPhotoUpload({ disabled = false }: PlanPhotoUploadProps) {
  const inputId = useId()

  return (
    <section>
      <label htmlFor={inputId} className="mb-2 block text-[13px] font-medium text-muted">
        写真
      </label>
      <div className="flex gap-3 overflow-x-auto pb-2">
        <input
          id={inputId}
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          type="file"
          disabled={disabled}
        />
        <label
          htmlFor={inputId}
          className="flex h-[120px] w-[120px] shrink-0 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed text-muted transition-colors hover:border-primary hover:text-primary"
        >
          <ImagePlus className="h-6 w-6" />
          <span className="text-[11px]">写真を追加</span>
        </label>
      </div>
    </section>
  )
}
