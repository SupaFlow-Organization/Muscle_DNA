# Project Structure Overview

## 📂 Complete File Tree

```
muscle-dna/
│
├── 📁 app/                          # Next.js App Directory
│   ├── layout.tsx                   # Root layout with fonts
│   ├── page.tsx                     # Home page (composes all sections)
│   └── globals.css                  # Global styles & utilities
│
├── 📁 components/                   # React Components
│   │
│   ├── 📁 ui/                       # ⭐ Reusable UI Components
│   │   ├── animated-container.tsx   # Animation wrapper
│   │   ├── background-effects.tsx   # Animated backgrounds
│   │   ├── button-premium.tsx       # Styled buttons
│   │   ├── feature-card.tsx         # Feature display cards
│   │   ├── flavor-badge.tsx         # Flavor badges
│   │   ├── product-card.tsx         # Product cards
│   │   ├── section-header.tsx       # Section headers
│   │   ├── stat-card.tsx            # Statistics cards
│   │   ├── index.ts                 # Barrel export
│   │   └── README.md                # Component documentation
│   │
│   ├── hero.tsx                     # Hero section
│   ├── features.tsx                 # Features section
│   ├── products.tsx                 # Products section
│   ├── science.tsx                  # Science section
│   ├── cta.tsx                      # Call-to-action section
│   ├── header.tsx                   # Navigation header
│   └── footer.tsx                   # Footer
│
├── 📁 data/                         # ⭐ Data Layer
│   ├── features.ts                  # Features data
│   ├── products.ts                  # Products & flavors data
│   ├── stats.ts                     # Statistics data
│   └── index.ts                     # Barrel export
│
├── 📁 types/                        # ⭐ TypeScript Definitions
│   └── index.ts                     # Shared type interfaces
│
├── 📁 public/                       # Static Assets
│   ├── images/
│   └── icons/
│
├── 📄 README.md                     # Project overview
├── 📄 ARCHITECTURE.md               # Architecture guide
├── 📄 ENHANCEMENTS.md               # Design improvements
├── 📄 REFACTORING_SUMMARY.md        # Refactoring summary
├── 📄 QUICK_REFERENCE.md            # Quick reference
└── 📄 package.json                  # Dependencies

```

## 🎯 Key Directories

### `/components/ui/` - Reusable Components
**8 custom components** for consistent UI across the app:
- SectionHeader
- ButtonPremium  
- FeatureCard
- ProductCard
- StatCard
- FlavorBadge
- BackgroundEffects
- AnimatedContainer

### `/data/` - Centralized Data
All content in one place for easy updates:
- Products catalog
- Features list
- Statistics
- Flavor variants

### `/types/` - Type Definitions
TypeScript interfaces for:
- Product
- Feature
- Stat
- Flavor
- Benefit

## 🔄 Data Flow

```
data/products.ts
      ↓
   Import
      ↓
components/products.tsx
      ↓
   Uses
      ↓
components/ui/product-card.tsx
      ↓
   Renders
      ↓
   Browser
```

## 🎨 Component Hierarchy

```
app/page.tsx
├── Header
├── Hero
│   ├── ButtonPremium (×2)
│   ├── StatCard (×3, compact)
│   └── BackgroundEffects
├── Science
│   ├── SectionHeader
│   └── StatCard (×3, default)
├── Features
│   ├── SectionHeader
│   ├── BackgroundEffects
│   ├── AnimatedContainer
│   └── FeatureCard (×6)
├── Products
│   ├── SectionHeader
│   ├── ProductCard (×3)
│   └── FlavorBadge (×4)
├── CTA
│   └── ButtonPremium (×2)
└── Footer
```

## 📊 Component Usage Matrix

| Component | Used In | Count |
|-----------|---------|-------|
| SectionHeader | Features, Products, Science | 3 |
| ButtonPremium | Hero, CTA | 4 |
| FeatureCard | Features | 6 |
| ProductCard | Products | 3 |
| StatCard | Hero, Science | 6 |
| FlavorBadge | Products | 4 |
| BackgroundEffects | Hero, Features | 2 |
| AnimatedContainer | Features | 1 |

## 🚀 Benefits of This Structure

✅ **Maintainable**: Clear separation of concerns
✅ **Scalable**: Easy to add new features/products
✅ **Type-Safe**: Full TypeScript coverage
✅ **Reusable**: DRY principle throughout
✅ **Documented**: Comprehensive documentation
✅ **Performant**: Optimized components
