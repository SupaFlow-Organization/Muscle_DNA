# Quick Reference Guide

## 🎯 Common Tasks

### Add a New Product
```typescript
// data/products.ts
export const products: Product[] = [
  // ... existing products
  {
    name: 'New Product Name',
    flavor: 'Flavor Name',
    category: 'Category',
    description: 'Product description...',
    image: 'https://your-image-url.jpg',
  }
];
```

### Add a New Feature
```typescript
// data/features.ts
export const features: Feature[] = [
  // ... existing features
  {
    title: 'Feature Title',
    description: 'Feature description...',
    icon: '🎯',
  }
];
```

### Use Reusable Components
```tsx
import { 
  SectionHeader, 
  ButtonPremium, 
  ProductCard 
} from '@/components/ui';

// In your component
<SectionHeader 
  eyebrow="Label"
  title="Title"
  description="Description"
/>

<ButtonPremium variant="primary">
  Click Me
</ButtonPremium>
```

### Import Data
```typescript
import { products, features, heroStats } from '@/data';
```

## 📁 File Locations

| What | Where |
|------|-------|
| Reusable Components | `components/ui/` |
| Page Sections | `components/` |
| Data | `data/` |
| Types | `types/index.ts` |
| Styles | `app/globals.css` |
| Documentation | `*.md` files |

## 🎨 Component Cheat Sheet

```tsx
// Section Header
<SectionHeader eyebrow="Label" title="Title" description="Desc" />

// Button
<ButtonPremium variant="primary|secondary" size="default|large">Text</ButtonPremium>

// Feature Card
<FeatureCard icon="🎯" title="Title" description="Desc" />

// Product Card
<ProductCard name="Name" flavor="Flavor" category="Cat" description="Desc" image="url" />

// Stat Card
<StatCard number="98%" label="Label" description="Desc" variant="default|compact" />

// Flavor Badge
<FlavorBadge name="Name" type="Type" />

// Background Effects
<BackgroundEffects variant="default|hero|features" />

// Animated Container
<AnimatedContainer staggerChildren={0.1}>
  {/* children */}
</AnimatedContainer>
```

## 🚀 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

## 📚 Documentation

- `README.md` - Project overview
- `ARCHITECTURE.md` - Architecture details
- `components/ui/README.md` - Component docs
- `ENHANCEMENTS.md` - Design improvements
