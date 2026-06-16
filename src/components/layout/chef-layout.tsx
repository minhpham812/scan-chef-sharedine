import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ChefHat, Menu, X, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems } from './nav-data'
import { ChefSidebar } from './chef-sidebar'

function MobileHeader({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-white px-5 lg:hidden"
      style={{ height: 56 }}
    >
      <Link to="/" className="flex items-center gap-2">
        <ChefHat className="h-5 w-5 text-primary" />
        <span className="text-[15px] font-bold text-foreground">ChefLink Table</span>
      </Link>
      <button
        type="button"
        onClick={onMenuOpen}
        className="flex h-10 w-10 items-center justify-center"
        aria-label="メニューを開く"
      >
        <Menu className="h-6 w-6 text-foreground" />
      </button>
    </header>
  )
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const location = useLocation()

  return (
    <nav
      className={cn(
        'fixed right-0 top-0 z-50 flex h-full w-[300px] flex-col bg-white transition-transform duration-300 ease-in-out lg:hidden',
        open ? 'translate-x-0' : 'translate-x-full'
      )}
      aria-label="メインメニュー"
    >
      <div
        className="flex items-center justify-end border-b border-border px-5"
        style={{ height: 56 }}
      >
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center"
          aria-label="メニューを閉じる"
        >
          <X className="h-6 w-6 text-foreground" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {navItems.map(({ to, label, icon: Icon, end }) => {
          const isActive = end
            ? location.pathname === to
            : location.pathname.startsWith(to)
          return (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={cn(
                'flex items-center gap-3 px-5 py-3.5 text-[15px] transition-colors border-l-[3px]',
                isActive
                  ? 'border-primary bg-primary/10 font-semibold text-primary'
                  : 'border-transparent text-foreground'
              )}
            >
              <Icon className={cn('h-5 w-5', isActive ? 'text-primary' : 'text-muted')} />
              <span className="flex-1">{label}</span>
            </NavLink>
          )
        })}
      </div>
      <div className="border-t border-border px-5 py-4">
        <button
          type="button"
          className="flex items-center gap-3 text-[15px] text-muted"
        >
          <LogOut className="h-5 w-5" />
          <span>ログアウト</span>
        </button>
      </div>
    </nav>
  )
}

export function ChefLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const location = useLocation()
  const hideMobileHeader = location.pathname.startsWith('/chat/')

  return (
    <div className="flex h-screen bg-background">
      <ChefSidebar />
      <main className={cn('flex-1 lg:overflow-y-auto', hideMobileHeader ? 'pb-0' : 'pb-8')}>
        {!hideMobileHeader ? <MobileHeader onMenuOpen={() => setMobileNavOpen(true)} /> : null}
        <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
        {mobileNavOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/30 lg:hidden"
            onClick={() => setMobileNavOpen(false)}
            aria-hidden="true"
          />
        )}
        <Outlet />
      </main>
    </div>
  )
}
