# Project Architecture

## Overview
This project follows a component-based architecture with clear separation of concerns, making it maintainable and scalable.

## Directory Structure

```
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Home page composition
│   └── globals.css          # Global styles and utilities
├── components/              # Feature components
│   ├── ui/                  # Reusable UI components
│   │   ├── animated-container.tsx
│   │   ├── background-effects.tsx
│   │   ├── button-premium.tsx
│   │   ├── feature-card.tsx
│   │   ├── flavor-badge.tsx
│   │   ├── product-card.tsx
│   │   ├── section-header.tsx
│   │   ├── stat-card.tsx
│   │   └── index.ts         # Barrel export
│   ├── hero.tsx             # Hero section
│   ├── features.tsx         # Features section
│   ├── products.tsx         # Products section
│   ├── science.tsx          # Science section
│   ├── cta.tsx              # Call-to-action section
│   ├── header.tsx           # Navigation header
│   └── footer.tsx           # Footer
├── data/                    # Data layer
│   ├── features.ts          # Features data
│   ├── products.ts          # Products & flavors data
│   ├── stats.ts             # Statistics data
│   └── index.ts             # Barrel export
├── types/                   # TypeScript definitions
│   └── index.ts             # Shared types
└── public/                  # Static assets

```

## Component Architecture

### 1. Reusable UI Components (`components/ui/`)

These are atomic, reusable components that can be used throughout the application:

#### **SectionHeader**
- Displays consistent section headers with eyebrow text, title, and description
- Props: `eyebrow`, `title`, `description`, `className`
- Used in: Features, Products, Science sections

#### **ButtonPremium**
- Styled button with primary/secondary variants
- Props: `variant`, `size`, `onClick`, `children`
- Includes hover animations and consistent styling

#### **FeatureCard**
- Card component for displaying features
- Props: `icon`, `title`, `description`, `index`
- Includes hover effects and animations

#### **ProductCard**
- Card component for product display
- Props: `name`, `flavor`, `category`, `description`, `image`, `index`, `onShopClick`
- Handles product image, details, and CTA button

#### **StatCard**
- Displays statistics with two variants (default/compact)
- Props: `number`, `label`, `description`, `index`, `variant`
- Used in Hero and Science sections

#### **FlavorBadge**
- Small badge for flavor options
- Props: `name`, `type`, `index`

#### **BackgroundEffects**
- Animated background gradients and orbs
- Props: `variant` (default/hero/features)
- Provides consistent background styling

#### **AnimatedContainer**
- Wrapper for staggered animations
- Props: `children`, `className`, `staggerChildren`, `delayChildren`
- Exports `itemVariants` for consistent animations

### 2. Feature Components (`components/`)

These are page-specific sections that compose UI components:

- **Hero**: Landing section with product showcase
- **Features**: Grid of feature cards
- **Products**: Product catalog with cards
- **Science**: Statistics and scientific backing
- **CTA**: Call-to-action section
- **Header**: Navigation bar
- **Footer**: Site footer

## Data Layer (`data/`)

Centralized data management for easy updates:

- **features.ts**: Feature list with icons and descriptions
- **products.ts**: Product catalog and flavor variants
- **stats.ts**: Hero and science statistics
- **index.ts**: Barrel export for clean imports

## Type System (`types/`)

TypeScript interfaces for type safety:

```typescript
- Product: Product information structure
- Feature: Feature card data
- Stat: Statistics data
- Flavor: Flavor variant data
- Benefit: Benefit/feature text
```

## Styling Strategy

### Global Utilities (`app/globals.css`)
- `.section-padding`: Consistent section spacing
- `.container-custom`: Centered max-width container
- `.btn-premium`: Premium button styling
- `.text-balance`: Better text wrapping

### Design Tokens
- Colors: Gold (#D4AF37), white, muted tones
- Typography: Playfair Display (headings), Inter (body)
- Spacing: Consistent padding and margins
- Animations: Framer Motion for smooth transitions

## Best Practices

### Component Creation
1. Keep components small and focused
2. Use TypeScript for type safety
3. Extract reusable patterns into UI components
4. Separate data from presentation

### Data Management
1. Store static data in `data/` directory
2. Define types in `types/` directory
3. Use barrel exports for clean imports
4. Keep data separate from components

### Styling
1. Use Tailwind utility classes
2. Create custom utilities for repeated patterns
3. Maintain consistent spacing and sizing
4. Use CSS variables for theme colors

### Performance
1. Use Next.js Image component for optimization
2. Implement lazy loading with viewport detection
3. Minimize animation complexity
4. Use `'use client'` only when necessary

## Adding New Features

### Adding a New Section
1. Create component in `components/`
2. Use existing UI components from `components/ui/`
3. Add data to appropriate file in `data/`
4. Define types in `types/index.ts`
5. Import and use in `app/page.tsx`

### Adding a New UI Component
1. Create component in `components/ui/`
2. Export from `components/ui/index.ts`
3. Document props with TypeScript interface
4. Add to this documentation

### Adding New Data
1. Add data to appropriate file in `data/`
2. Define type in `types/index.ts`
3. Export from `data/index.ts`
4. Use in components via import

## Scalability Considerations

### Easy to Scale
- Add new products: Update `data/products.ts`
- Add new features: Update `data/features.ts`
- Add new sections: Create component using existing UI components
- Modify styling: Update global utilities or component styles

### Maintainability
- Single source of truth for data
- Reusable components reduce duplication
- Type safety prevents errors
- Clear file structure for easy navigation

## Future Enhancements

Potential additions for further scalability:
- API integration for dynamic data
- Content Management System (CMS) integration
- Internationalization (i18n) support
- State management (if needed)
- Testing suite (Jest, React Testing Library)
- Storybook for component documentation
