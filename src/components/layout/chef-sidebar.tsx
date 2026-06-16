import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { navItems } from './nav-data'

export function ChefSidebar() {
  return (
    <aside className="hidden lg:flex lg:w-[220px] lg:shrink-0 bg-[#2C2A24] p-4 flex-col">
      <h1 className="text-[15px] font-bold text-white mb-6">ChefLink Table</h1>
      <nav className="space-y-1">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-colors',
                isActive
                  ? 'bg-[#8A7D52] font-semibold text-white'
                  : 'text-[#9E9A8F] hover:text-white'
              )
            }
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
