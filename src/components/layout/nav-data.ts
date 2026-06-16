import {
  House,
  ClipboardList,
  MessageCircle,
  UtensilsCrossed,
  CalendarDays,
  MapPin,
  User,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  to: string
  label: string
  icon: LucideIcon
  end?: boolean
}

export const navItems: NavItem[] = [
  { to: '/', label: 'ダッシュボード', icon: House, end: true },
  { to: '/bookings', label: '受注管理', icon: ClipboardList },
  { to: '/chats', label: 'チャット', icon: MessageCircle },
  { to: '/plans', label: 'メニュー管理', icon: UtensilsCrossed },
  { to: '/schedule', label: 'スケジュール', icon: CalendarDays },
  { to: '/service-area', label: 'エリア設定', icon: MapPin },
  { to: '/profile', label: 'プロフィール', icon: User },
]
