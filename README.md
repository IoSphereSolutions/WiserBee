# WiserBee
EdTech Solution

**Signup Page**

**<image_analysis>**

**Navigation Elements:**
Logo in top left corner
No traditional navigation menu
Single-page focused interface

**Layout Components:**
Main container: 800px x 600px white card
Logo: 80px x 80px
Role selection buttons: 60px height, full width
Continue button: 56px height, full width
Padding: 32px around main container
Margin: 16px between role options

**Content Sections:**
Header with "Login As" title
Subtitle text explaining role selection
Four role selection options
Primary action button at bottom
Each role option contains icon and label

**Interactive Controls:**
Four radio-style role selection buttons
Selected state indicated by filled circle
Continue button with hover/active states
Role buttons with hover feedback
Disabled state for Continue when no selection

**Colors:**
Background: #4A3B7B (deep purple)
Card background: #FFFFFF
Primary button: #4A3B7B
Text: #333333 (dark gray)
Secondary text: #666666 (medium gray)
Icons: #4A3B7B (deep purple)

**Grid/Layout Structure:**
Single column layout
Vertical spacing: 24px between sections
Content max-width: 720px
Responsive breakpoint at 768px
Mobile-first approach with fluid widths
**</image_analysis>**

**<development_planning>**
  
**Project Structure:**
src/
├── components/
│   ├── layout/
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── features/
│   │   ├── RoleSelection/
│   │   └── LoginFlow/
│   └── shared/
│       ├── Button.tsx
│       └── Icons.tsx
├── assets/
│   └── logo.svg
├── styles/
│   └── theme.scss
├── hooks/
│   └── useRoleSelection.ts
└── utils/
└── validation.ts


**State Management:**
interface AppState {
├── auth: {
│   ├── selectedRole: string | null
│   ├── isAuthenticated: boolean
│   └── userInfo: UserInfo | null
├── }
├── ui: {
│   ├── isLoading: boolean
│   └── error: string | null
├── }
}


**Routes:**
const routes = [
├── '/login',
├── '/dashboard/*',
├── '/auth/*',
└── '/error/*'
]


**Component Architecture:**
RoleSelectionCard (Parent) ├── RoleOption (Child) ├── ContinueButton (Child) ├── Logo (Shared) └── Icons (Shared)


**Responsive Breakpoints:**
$breakpoints: (
├── 'mobile': 320px,
├── 'tablet': 768px,
├── 'desktop': 1024px,
└── 'wide': 1440px
);

**</development_planning>**




**Student Portal**

**</summary_title>**

**<image_analysis>**

**Navigation Elements:**
Left sidebar with: Dashboard, My Classes, Courses, Class Schedule, Grade Book, Exams, Community, Library
Top bar with: Notifications (5), Language selector (English), User profile
All navigation items feature icons and labels
Active state indicated for Dashboard section

**Layout Components:**
Left sidebar: 280px width, fixed position
Main content area: Fluid width with padding
Top bar: 64px height
Card components: ~320px width for stat cards
Welcome banner: Full width with rounded corners

**Content Sections:**
Welcome header with user avatar and greeting
Statistics cards (My Courses: 4, My Classes: 4, My Task: 0)
Course listing section with course cards
Tasks sidebar (empty state shown)
Chat widget in bottom right

**Interactive Controls:**
Continue button on course cards
Language selector dropdown
Profile menu dropdown
Navigation menu items with hover states
Chat widget toggle

**Colors:**
Primary: #2A1B6D (Deep purple)
Secondary: #FFFFFF (White)
Background: #F5F5F8 (Light gray)
Accent: #FF4B4B (Notification red)
Text: #333333 (Dark gray)

**Grid/Layout Structure:**
12-column grid system
24px grid gap
Responsive breakpoints at 768px, 1024px, 1440px
Card grid: 3 columns on desktop, 2 on tablet, 1 on mobile </image_analysis>

**<development_planning>**

**Project Structure:**

src/
├── components/
│   ├── layout/
│   │   ├── Sidebar
│   │   ├── TopBar
│   │   └── DashboardLayout
│   ├── features/
│   │   ├── CourseCard
│   │   ├── StatisticsCard
│   │   └── WelcomeBanner
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/

**Key Features:**
Course progress tracking
Task management
Real-time notifications
Multi-language support
Chat support system
Course content delivery

**State Management:**

interface AppState {
├── user: {
│   ├── profile: UserProfile
│   ├── preferences: UserPreferences
│   └── notifications: Notification[]
├── courses: {
│   ├── enrolled: Course[]
│   ├── progress: CourseProgress[]
│   └── currentLesson: Lesson
├── tasks: {
│   ├── pending: Task[]
│   └── completed: Task[]
└── }
}

**Routes:**

const routes = [
├── '/dashboard',
├── '/courses/*',
├── '/schedule/*',
├── '/grades/*',
├── '/exams/*',
└── '/library/*'
]

**Component Architecture:**
DashboardLayout (parent)
Navigation components
Content components
Widget components
Shared UI components

**Responsive Breakpoints:**

$breakpoints: (
├── 'mobile': 320px,
├── 'tablet': 768px,
├── 'desktop': 1024px,
└── 'wide': 1440px
);

**</development_planning>**
