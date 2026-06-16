import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChefLayout } from '@/components/layout/chef-layout'
import { DashboardPage } from '@/pages/dashboard-page'
import { BookingsPage } from '@/pages/bookings-page'
import { ChatsPage } from '@/pages/chats-page'
import { PlansPage } from '@/pages/plans-page'
import { PlanCreatePage } from '@/pages/plan-create-page'
import { SchedulePage } from '@/pages/schedule-page'
import { ServiceAreaPage } from '@/pages/service-area-page'
import { ProfilePage } from '@/pages/profile-page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ChefLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/plans/new" element={<PlanCreatePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/service-area" element={<ServiceAreaPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
