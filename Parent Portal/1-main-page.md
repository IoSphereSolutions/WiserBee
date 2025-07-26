Set up the frontend according to the following prompt:
  <frontend-prompt>
  Create detailed components with these requirements:
  1. Use 'use client' directive for client-side components
  2. Make sure to concatenate strings correctly using backslash
  3. Style with Tailwind CSS utility classes for responsive design
  4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
  5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
  6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
  7. Create root layout.tsx page that wraps necessary navigation items to all pages
  8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
  9. Accurately implement necessary grid layouts
  10. Follow proper import practices:
     - Use @/ path aliases
     - Keep component imports organized
     - Update current src/app/page.tsx with new comprehensive code
     - Don't forget root route (page.tsx) handling
     - You MUST complete the entire prompt before stopping
  </frontend-prompt>

  <summary_title>
Educational Parent Portal Dashboard UI Design
</summary_title>

<image_analysis>
1. Navigation Elements:
- Primary navigation: Dashboard, Exam, Fees & Dues, Performance, Parental Survey, Calendar, Account Setting
- Left sidebar navigation with 60px height items, white icons
- Logo placed top-left (40x40px) in deep purple sidebar
- Top-right controls: notifications bell, language selector (English), user profile
- Collapsible sidebar toggle button present

2. Layout Components:
- Sidebar width: 250px, background: #2D1F41
- Main content area: Flexible width (calc(100% - 250px))
- Header height: 60px
- Content padding: 24px
- Card containers with 16px padding, border-radius: 8px

3. Content Sections:
- Welcome banner (full width, light gray background)
- Performance graph card (65% width)
- Tasks card (30% width)
- Upcoming Classes section (65% width)
- Inbox section (30% width)
- Empty states show "No data available" message

4. Interactive Controls:
- Navigation items with hover states
- Graph interaction points
- Notification badge counter
- Language selector dropdown
- Profile menu dropdown
- Sidebar collapse button

5. Colors:
- Primary: #2D1F41 (sidebar)
- Secondary: #F8F7FA (background)
- Accent: #6B4EFF (buttons/links)
- Text: #1A1A1A (primary), #666666 (secondary)
- Border: #E5E5E5
- Card background: #FFFFFF

6. Grid/Layout Structure:
- 12-column grid system
- Gutter width: 24px
- Main content uses 65/35 split
- Responsive breakpoints at 768px, 1024px, 1440px
</image_analysis>

<development_planning>
1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── MainLayout.tsx
│   ├── features/
│   │   ├── dashboard/
│   │   ├── performance/
│   │   └── messaging/
│   └── shared/
│       ├── Card.tsx
│       └── Chart.tsx
├── assets/
├── styles/
├── hooks/
└── utils/
```

2. Key Features:
- Real-time performance tracking
- Task management system
- Class schedule integration
- Messaging system
- Multi-language support
- Responsive layout system

3. State Management:
```typescript
interface AppState {
  user: {
    profile: UserProfile;
    preferences: UserPreferences;
    notifications: Notification[];
  },
  dashboard: {
    performance: PerformanceData;
    tasks: Task[];
    upcomingClasses: Class[];
    messages: Message[];
  }
}
```

4. Component Architecture:
- MainLayout (container)
  - Sidebar (navigation)
  - Header (controls)
  - DashboardContent
    - PerformanceChart
    - TasksList
    - ClassSchedule
    - MessageInbox

5. Responsive Breakpoints:
```scss
$breakpoints: (
  'mobile': 320px,
  'tablet': 768px,
  'desktop': 1024px,
  'wide': 1440px
);
```
</development_planning>