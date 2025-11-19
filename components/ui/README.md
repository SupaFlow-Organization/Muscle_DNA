# Reusable UI Components

This directory contains all reusable UI components for the Muscle DNA project. These components are designed to be composable, type-safe, and consistent across the application.

## Components

### SectionHeader
Displays consistent section headers with eyebrow text, title, and optional description.

```tsx
import { SectionHeader } from '@/components/ui';

<SectionHeader 
  eyebrow="Product Line"
  title="Premium Formulations"
  description="Each product is meticulously engineered..."
  className="mb-20"
/>
```

**Props:**
- `eyebrow` (string): Small text above the title
- `title` (string): Main heading text
- `description?` (string): Optional description below title
- `className?` (string): Additional CSS classes

---

### ButtonPremium
Styled button component with primary and secondary variants.

```tsx
import { ButtonPremium } from '@/components/ui';

<ButtonPremium 
  variant="primary"
  size="large"
  onClick={() => console.log('Clicked')}
>
  Shop Now
</ButtonPremium>
```

**Props:**
- `children` (ReactNode): Button content
- `variant?` ('primary' | 'secondary'): Button style variant (default: 'primary')
- `size?` ('default' | 'large'): Button size (default: 'default')
- `className?` (string): Additional CSS classes
- `onClick?` (function): Click handler

**Variants:**
- `primary`: Gold background with white text
- `secondary`: Gold border with gold text

---

### FeatureCard
Card component for displaying features with icon, title, and description.

```tsx
import { FeatureCard } from '@/components/ui';

<FeatureCard
  icon="🧬"
  title="Genetic Optimization"
  description="Formulated based on genetic markers..."
  index={0}
/>
```

**Props:**
- `icon` (ReactNode): Icon or emoji to display
- `title` (string): Feature title
- `description` (string): Feature description
- `index?` (number): Index for staggered animations

**Features:**
- Hover animations (lift and scale)
- Gradient background on hover
- Bottom accent line animation

---

### ProductCard
Card component for product display with image, details, and CTA button.

```tsx
import { ProductCard } from '@/components/ui';

<ProductCard
  name="Bio Whey Protein"
  flavor="Mango Pistachio"
  category="Premium Whey"
  description="25g protein per serving..."
  image="/path/to/image.jpg"
  index={0}
  onShopClick={() => console.log('Shop clicked')}
/>
```

**Props:**
- `name` (string): Product name
- `flavor` (string): Product flavor
- `category` (string): Product category
- `description` (string): Product description
- `image` (string): Product image URL
- `index?` (number): Index for staggered animations
- `onShopClick?` (function): Shop button click handler

---

### StatCard
Displays statistics with two variants: default (full card) and compact (inline).

```tsx
import { StatCard } from '@/components/ui';

// Default variant
<StatCard
  number="98%"
  label="Bioavailability Rate"
  description="Optimized absorption for maximum effect"
  index={0}
/>

// Compact variant
<StatCard
  number="50K+"
  label="Active Users"
  variant="compact"
/>
```

**Props:**
- `number` (string): Statistic number
- `label` (string): Statistic label
- `description?` (string): Optional description (default variant only)
- `index?` (number): Index for staggered animations
- `variant?` ('default' | 'compact'): Display variant (default: 'default')

---

### FlavorBadge
Small badge component for displaying flavor options.

```tsx
import { FlavorBadge } from '@/components/ui';

<FlavorBadge
  name="Chocolate Almond"
  type="Bio Whey"
  index={0}
/>
```

**Props:**
- `name` (string): Flavor name
- `type` (string): Product type
- `index?` (number): Index for staggered animations

---

### BackgroundEffects
Animated background gradients and decorative elements.

```tsx
import { BackgroundEffects } from '@/components/ui';

<BackgroundEffects variant="hero" />
```

**Props:**
- `variant?` ('default' | 'hero' | 'features'): Background style variant

**Variants:**
- `default`: Standard gradient orbs
- `hero`: Hero section with animated line
- `features`: Features section with dual orbs

---

### AnimatedContainer
Wrapper component for staggered animations using Framer Motion.

```tsx
import { AnimatedContainer, itemVariants } from '@/components/ui';
import { motion } from 'framer-motion';

<AnimatedContainer 
  className="grid grid-cols-3 gap-8"
  staggerChildren={0.1}
  delayChildren={0.2}
>
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
  <motion.div variants={itemVariants}>Item 3</motion.div>
</AnimatedContainer>
```

**Props:**
- `children` (ReactNode): Child components to animate
- `className?` (string): Additional CSS classes
- `staggerChildren?` (number): Delay between child animations (default: 0.1)
- `delayChildren?` (number): Initial delay before animations start (default: 0)

**Exports:**
- `AnimatedContainer`: Container component
- `itemVariants`: Predefined animation variants for children

---

## Usage Examples

### Creating a New Section

```tsx
'use client';

import { SectionHeader, FeatureCard, AnimatedContainer } from '@/components/ui';

export default function MySection() {
  const items = [
    { icon: '🎯', title: 'Focus', description: 'Stay focused...' },
    { icon: '⚡', title: 'Energy', description: 'Boost energy...' },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader 
          eyebrow="Benefits"
          title="Why Choose Us"
          description="Discover the advantages"
          className="mb-20"
        />

        <AnimatedContainer className="grid grid-cols-2 gap-8">
          {items.map((item, index) => (
            <FeatureCard key={index} {...item} index={index} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
```

### Composing Multiple Components

```tsx
import { 
  SectionHeader, 
  ProductCard, 
  ButtonPremium,
  BackgroundEffects 
} from '@/components/ui';

export default function Shop() {
  return (
    <section className="section-padding relative">
      <BackgroundEffects variant="default" />
      
      <div className="container-custom">
        <SectionHeader 
          eyebrow="Shop"
          title="Our Products"
          className="mb-16"
        />

        <div className="grid grid-cols-3 gap-8">
          {/* Product cards */}
        </div>

        <div className="text-center mt-12">
          <ButtonPremium variant="primary" size="large">
            View All Products
          </ButtonPremium>
        </div>
      </div>
    </section>
  );
}
```

## Design Principles

1. **Composability**: Components can be easily combined
2. **Type Safety**: Full TypeScript support with interfaces
3. **Consistency**: Shared styling and animation patterns
4. **Flexibility**: Props for customization without breaking design
5. **Performance**: Optimized animations and rendering

## Styling Guidelines

All components use:
- Tailwind CSS utility classes
- Consistent spacing (section-padding, container-custom)
- Gold theme colors (#D4AF37)
- Framer Motion for animations
- Responsive design patterns

## Adding New Components

1. Create component file in `components/ui/`
2. Define TypeScript interface for props
3. Implement component with consistent styling
4. Export from `components/ui/index.ts`
5. Document in this README
6. Add to ARCHITECTURE.md
