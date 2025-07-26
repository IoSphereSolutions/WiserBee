<summary_title>
Parent Portal Student Performance Survey Form
</summary_title>

<image_analysis>
1. Content Structure:
- Main Content Elements: Survey form with performance criteria evaluation
- Content Grouping: Seven assessment criteria with rating options and comment fields
- Visual Hierarchy: Criteria labels > Rating options > Comment fields > Submit button
- Content Types: Text labels, radio buttons, text input fields, buttons, tabs
- Text Elements: 
  * Welcome message
  * Survey/Feedback tabs
  * Performance criteria labels
  * Rating option labels
  * Comment field placeholders
  * Submit button

2. Layout Structure:
- Content Distribution: Single column layout with consistent spacing
- Spacing Patterns: Uniform gaps between criteria sections
- Container Structure: Light gray background container with white form elements
- Grid/Alignment: Left-aligned labels, horizontally aligned rating options
- Responsive Behavior: Form should stack vertically on smaller screens

3. UI Components (Page-Specific):
- Content Cards/Containers: Main form container
- Interactive Elements:
  * Radio button groups
  * Text input fields
  * Submit button
  * Survey/Feedback tabs
- Data Display Elements: Rating scale (Excellent to Poor)
- Status Indicators: Selected radio buttons
- Media Components: User avatar placeholder

4. Interactive Patterns:
- Content Interactions: Radio button selection, text input, form submission
- State Changes: Radio button selection states, input field focus states
- Dynamic Content: Form validation and submission feedback
- Mobile Interactions: Touch-friendly radio buttons and input fields
</image_analysis>

<development_planning>
1. Component Structure:
- Components needed:
  * SurveyForm
  * RatingGroup
  * CommentField
  * TabSelector
- Props interface for rating criteria and options
- Form state management for selections and comments
- Validation handling

2. Content Layout:
- Flexbox/Grid for consistent spacing
- Mobile-first responsive design
- Uniform padding and margins
- Dynamic height comment fields

3. Integration Points:
- Global styles integration
- Theme variables for colors
- Reusable form components
- API integration for form submission

4. Performance Considerations:
- Lazy loading of form sections
- Debounced form validation
- Optimized form state updates
- Efficient form submission handling
</development_planning>