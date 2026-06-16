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
          <h1 className="text-[22px] font-bold text-foreground">{title}</h1>
          {subtitle && <p className="mt-1 text-[14px] text-muted">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
    </header>
  )
}

export function PageContent({ children }: { children: React.ReactNode }) {
  return <div className="px-5 lg:px-8">{children}</div>
}
