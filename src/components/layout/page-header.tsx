interface PageHeaderProps {
  title: string
  subtitle?: string
  action?: React.ReactNode
}

export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <header className="px-5 pt-4 pb-2 lg:pt-8 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          {subtitle && <p className="text-[14px] text-[#9e9a8f]">{subtitle}</p>}
          <h1 className="text-[22px] font-bold text-[#2c2a24] lg:text-[24px] lg:font-bold">{title}</h1>
        </div>
        {action && <div>{action}</div>}
      </div>
    </header>
  )
}

export function PageContent({ children }: { children: React.ReactNode }) {
  return <div className="px-5 lg:px-8">{children}</div>
}
