# WiserBee
EdTech Solution

**Login Interface**

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
