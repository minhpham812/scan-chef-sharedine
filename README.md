# Scan Chef Sharedine

Chef-facing prototype built with React, TypeScript, Vite, Tailwind CSS v4, and `react-router-dom`.

## Run

```bash
npm install
npm run dev
```

Default routes are defined in `src/App.tsx` and rendered inside the shared `ChefLayout`.

## App Structure

### Shared Layout Components

- `ChefLayout`: app shell, mobile header, mobile drawer, desktop layout, route outlet
- `ChefSidebar`: desktop navigation sidebar
- `PageHeader`: reusable page title, subtitle, and optional action area
- `PageContent`: shared horizontal page padding wrapper

### Pages And Main Components

| Route | Page | Main components |
| --- | --- | --- |
| `/` | `DashboardPage` | `DashboardHeader`, `DashboardStats`, `DashboardReservationsSection` |
| `/bookings` | `BookingsPage` | `PageHeader`, `PageContent`, `Table`, `Badge` |
| `/chats` | `ChatsPage` | `ChatThreadList`, `ChatConversationPane` |
| `/chat/:threadId` | `ChatDetailPage` | `ChatConversationPane` |
| `/plans` | `PlansPage` | `PageHeader`, `PageContent`, `Button`, internal `TabFilter`, internal `PlanCard` |
| `/plans/new` | `PlanCreatePage` | `PlanCreateHeader`, `PlanPhotoUpload`, `PlanServiceTypeSelector`, `PlanMenuItemsField` |
| `/schedule` | `SchedulePage` | `ScheduleCalendar`, `ScheduleDayDetail`, `PageContent` |
| `/service-area` | `ServiceAreaPage` | `ServiceAreaMapHero`, `ServiceAreaAddressInput`, `ServiceAreaRadiusSlider`, `ServiceAreaList`, `ServiceAreaBottomBar` |
| `/profile` | `ProfilePage` | `PageHeader`, `PageContent`, `Button` |

## Desktop Screenshots

### Dashboard

Route: `/`

Components: `DashboardHeader`, `DashboardStats`, `DashboardReservationsSection`

![Dashboard](screenshots/dashboard.png)

### Bookings

Route: `/bookings`

Components: `PageHeader`, `PageContent`, `Table`, `Badge`

![Bookings](screenshots/bookings.png)

### Chats

Route: `/chats`

Components: `ChatThreadList`, `ChatConversationPane`

![Chats](screenshots/chats.png)

### Chat Detail

Route: `/chat/:threadId`

Components: `ChatConversationPane`

![Chat Detail](screenshots/chat-detail.png)

### Plans

Route: `/plans`

Components: `PageHeader`, `PageContent`, internal `TabFilter`, internal `PlanCard`, `Button`

![Plans](screenshots/plans.png)

### Plan Create

Route: `/plans/new`

Components: `PlanCreateHeader`, `PlanPhotoUpload`, `PlanServiceTypeSelector`, `PlanMenuItemsField`

![Plan Create](screenshots/plan-create.png)

### Schedule

Route: `/schedule`

Components: `ScheduleCalendar`, `ScheduleDayDetail`, `PageContent`

![Schedule](screenshots/schedule.png)

### Service Area

Route: `/service-area`

Components: `ServiceAreaMapHero`, `ServiceAreaAddressInput`, `ServiceAreaRadiusSlider`, `ServiceAreaList`, `ServiceAreaBottomBar`

![Service Area](screenshots/service-area.png)

### Profile

Route: `/profile`

Components: `PageHeader`, `PageContent`, `Button`

![Profile](screenshots/profile.png)

## Notes

- Screenshot assets live in `screenshots/`.
- Chat detail screenshot was captured using `/chat/huyng-yesterday`.
- The repo currently looks like a UI prototype with local mock data stored directly in page/component files.
