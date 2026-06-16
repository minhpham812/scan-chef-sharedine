interface ServiceAreaRadiusSliderProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export function ServiceAreaRadiusSlider({
  value,
  onChange,
  min = 5,
  max = 30,
}: ServiceAreaRadiusSliderProps) {
  return (
    <section>
      <div className="flex items-center justify-between">
        <label htmlFor="radius-slider" className="text-[14px] font-bold text-foreground">
          提供半径
        </label>
        <span className="text-[16px] font-bold text-primary">{value} km</span>
      </div>
      <div className="mt-3">
        <input
          id="radius-slider"
          type="range"
          min={min}
          max={max}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="mt-1 flex justify-between text-[12px] text-muted">
          <span>{min}km</span>
          <span>{max}km</span>
        </div>
      </div>
    </section>
  )
}
