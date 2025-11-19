# Muscle DNA - Genetic Performance Optimization

A modern, scalable Next.js application for Muscle DNA's premium supplement products. Built with TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, premium aesthetic with gold and white theme
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion powered interactions
- **Type Safe**: Full TypeScript implementation
- **Reusable Components**: Modular architecture for easy maintenance
- **Performance Optimized**: Next.js 16 with Image optimization
- **Scalable Architecture**: Clear separation of concerns

## 📁 Project Structure

```
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   ├── hero.tsx             # Hero section
│   ├── features.tsx         # Features section
│   ├── products.tsx         # Products section
│   ├── science.tsx          # Science section
│   ├── cta.tsx              # Call-to-action
│   ├── header.tsx           # Navigation
│   └── footer.tsx           # Footer
├── data/                    # Data layer
│   ├── features.ts          # Features data
│   ├── products.ts          # Products data
│   ├── stats.ts             # Statistics data
│   └── index.ts             # Barrel export
├── types/                   # TypeScript definitions
│   └── index.ts             # Shared types
└── public/                  # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Playfair Display, Inter
- **UI Components**: Radix UI
- **Icons**: Lucide React

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Reusable Components

The project includes a comprehensive set of reusable UI components:

- **SectionHeader**: Consistent section headers
- **ButtonPremium**: Styled buttons with variants
- **FeatureCard**: Feature display cards
- **ProductCard**: Product showcase cards
- **StatCard**: Statistics display (default/compact)
- **FlavorBadge**: Flavor option badges
- **BackgroundEffects**: Animated backgrounds
- **AnimatedContainer**: Staggered animations wrapper

See [components/ui/README.md](components/ui/README.md) for detailed documentation.

## 📊 Data Management

All content is centralized in the `data/` directory:

```typescript
// Import data
import { products, features, heroStats } from '@/data';

// Use in components
{products.map((product, index) => (
  <ProductCard key={index} {...product} />
))}
```

## 🎯 Key Features

### Maintainability
- Reusable component library
- Centralized data management
- Type-safe with TypeScript
- Clear file structure

### Scalability
- Easy to add new products/features
- Modular component architecture
- Consistent design system
- Performance optimized

### Developer Experience
- Hot reload development
- TypeScript IntelliSense
- Comprehensive documentation
- Clean code organization

## 📝 Adding New Content

### Add a New Product

```typescript
// data/products.ts
export const products: Product[] = [
  // ... existing products
  {
    name: 'New Product',
    flavor: 'Flavor Name',
    category: 'Category',
    description: 'Description...',
    image: '/path/to/image.jpg',
  }
];
```

### Add a New Feature

```typescript
// data/features.ts
export const features: Feature[] = [
  // ... existing features
  {
    title: 'New Feature',
    description: 'Description...',
    icon: '🎯',
  }
];
```

### Create a New Section

```tsx
// components/my-section.tsx
import { SectionHeader, FeatureCard } from './ui';
import { myData } from '@/data';

export default function MySection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader 
          eyebrow="Section Label"
          title="Section Title"
          description="Section description"
        />
        {/* Your content */}
      </div>
    </section>
  );
}
```

## 🎨 Customization

### Colors
Edit color variables in `app/globals.css`:
```css
:root {
  --gold: #D4AF37;
  --gold-dark: #B8960F;
  --gold-light: #F4E4C1;
}
```

### Typography
Fonts are configured in `app/layout.tsx`:
```typescript
const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
```

### Spacing
Use utility classes defined in `app/globals.css`:
```css
.section-padding { @apply py-24 lg:py-32 px-6 lg:px-8; }
.container-custom { @apply max-w-7xl mx-auto; }
```

## 📚 Documentation

- [Architecture Guide](ARCHITECTURE.md) - Detailed architecture documentation
- [Component Library](components/ui/README.md) - UI components documentation
- [Design Enhancements](ENHANCEMENTS.md) - Recent design improvements

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
```bash
# Build
npm run build

# The output will be in .next/
# Deploy the .next/ directory to your hosting platform
```

## 🤝 Contributing

1. Follow the existing code structure
2. Use TypeScript for type safety
3. Add new data to `data/` directory
4. Create reusable components in `components/ui/`
5. Document new components
6. Test responsiveness

## 📄 License

Copyright © 2025 Muscle DNA. All rights reserved.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)
