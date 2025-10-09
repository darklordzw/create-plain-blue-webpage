
### Requirements
- Simple webpage with color theme switcher capability
- Clean, minimal design with semantic design system
- User can request different color schemes (blue, green, orange, etc.)
- Navigation between different colored pages

### Designs
- Centered layout with title, description, and color swatches
- Semantic design tokens using CSS custom properties (HSL values)
- Responsive design with proper spacing and typography
- Route-based navigation for different color themes

### Tasks
- [x] Convert page to blue theme (50 LOC × 10 = 500 tokens)
  - Updated all color tokens from green (hue 120) to blue (hue 220)
  - Changed page title and description
  - Files modified: src/index.css, src/pages/Index.tsx
- [x] Add new green page (50 LOC × 10 = 500 tokens)
  - Updated design system to green theme (hue 120)
  - Changed page title and description to reflect green theme
  - Files modified: src/index.css, src/pages/Index.tsx
- [x] Add orange page with routing (80 LOC × 10 = 800 tokens)
  - Created OrangePage component with orange theme (hue 30)
  - Updated design system to orange color scheme
  - Added route /orange in App.tsx
  - Files created: src/pages/OrangePage.tsx
  - Files modified: src/index.css, src/App.tsx