# Quick Start: Smooth Animations

## What's New

Your Muscle DNA website now features comprehensive smooth animations that make it more engaging and user-appealing:

### ✨ Key Animation Features

1. **Navbar**: Smooth logo scaling, staggered menu items, animated underlines
2. **Hero Slider**: Floating products, rotating decorative rings, smooth slide transitions
3. **Features Section**: Staggered card entrance, floating sparkles, hover lift effects
4. **Products Section**: Smooth grid animations, flavor badge entrance, continuous sparkles
5. **Science Section**: Rotating DNA icons, staggered certifications, process step animations
6. **CTA Section**: Floating sparkles, smooth button animations, staggered benefits
7. **Footer**: Smooth link animations, social media hover effects
8. **WhatsApp Button**: Floating animation with pulse effect

## Using Animations in Your Code

### Option 1: Framer Motion Variants (Recommended)

```typescript
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function MyComponent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={fadeInUp}>Content</motion.div>
    </motion.div>
  );
}
```

### Option 2: CSS Classes

```html
<div class="animate-fade-in-up">
  Smooth fade-in with upward movement
</div>

<div class="hover-scale hover-glow">
  Smooth hover effects
</div>
```

### Option 3: Inline Framer Motion

```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.3 }}
>
  Click me
</motion.button>
```

## Available Animation Variants

### Entrance Animations
- `fadeInUp` - Fade in with upward movement
- `fadeInDown` - Fade in with downward movement
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Fade in with scale
- `slideInFromLeft` - Slide from left
- `slideInFromRight` - Slide from right
- `blurIn` - Fade in with blur
- `rotateEntrance` - Fade in with rotation
- `bounceEntrance` - Spring-based bounce

### Container Animations
- `staggerContainer` - Stagger children animations
- `staggerItem` - Individual item animation
- `sectionEntrance` - Full section entrance
- `staggerText` - Text stagger animation

### Continuous Animations
- `float` - Floating motion (3s)
- `pulse` - Pulse effect (2s)
- `rotate` - 360° rotation (20s)
- `shimmer` - Shimmer effect (2s)
- `bounce` - Bounce animation (1s)
- `glow` - Glow effect (2s)
- `wiggle` - Wiggle animation

### Hover Animations
- `hoverScale` - Scale on hover
- `hoverLift` - Lift on hover
- `hoverGlow` - Glow on hover
- `imageZoom` - Image zoom
- `buttonHover` - Button hover
- `cardHover` - Card hover
- `flip` - 3D flip

## CSS Animation Classes

### Entrance Classes
- `animate-fade-in` - Simple fade in
- `animate-fade-in-up` - Fade in up
- `animate-fade-in-down` - Fade in down
- `animate-fade-in-left` - Fade in left
- `animate-fade-in-right` - Fade in right
- `animate-scale-in` - Scale entrance
- `animate-slide-in-left` - Slide from left
- `animate-slide-in-right` - Slide from right

### Continuous Classes
- `animate-bounce-smooth` - Soft bounce
- `animate-float` - Floating motion
- `animate-pulse-smooth` - Soft pulse
- `animate-glow` - Glow effect

### Transition Classes
- `transition-smooth` - 300ms ease-out
- `transition-smooth-lg` - 500ms ease-out
- `hover-lift` - Hover lift effect
- `hover-scale` - Hover scale effect
- `hover-glow` - Hover glow effect

## Custom Hooks

### useScrollAnimation
Trigger animations on scroll:
```typescript
import { useScrollAnimation } from '@/lib/use-scroll-animation';

const { ref, isVisible } = useScrollAnimation();
```

### useParallax
Create parallax effects:
```typescript
import { useParallax } from '@/lib/use-scroll-animation';

const { ref, offset } = useParallax(0.5);
```

### useCounter
Animate numbers:
```typescript
import { useCounter } from '@/lib/use-scroll-animation';

const { ref, count } = useCounter(1000, 2000);
```

## Animation Timing

- **Quick interactions**: 0.2s - 0.3s
- **Entrance animations**: 0.5s - 0.8s
- **Stagger delay**: 0.1s - 0.15s
- **Continuous animations**: 2s - 8s

## Best Practices

1. ✅ Use `whileInView` for scroll animations
2. ✅ Set `viewport={{ once: true }}` to trigger once
3. ✅ Stagger animations for visual hierarchy
4. ✅ Keep animations under 1 second for interactions
5. ✅ Use `transform` and `opacity` for performance
6. ✅ Test on mobile devices
7. ✅ Respect `prefers-reduced-motion`

## Common Patterns

### Staggered List
```typescript
<motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

### Hover Card
```typescript
<motion.div
  variants={cardHover}
  className="bg-white rounded-lg p-6"
>
  Card content
</motion.div>
```

### Floating Button
```typescript
<motion.button
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
>
  Click me
</motion.button>
```

### Scroll Reveal
```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## Performance Tips

1. Use `will-change` sparingly
2. Limit simultaneous animations
3. Profile with Chrome DevTools
4. Use `transform` instead of `left`/`top`
5. Reduce animation complexity on mobile
6. Test on real devices

## Troubleshooting

**Animations not playing?**
- Check `initial` and `animate` props
- Verify `whileInView` viewport config
- Ensure Framer Motion is imported

**Performance issues?**
- Reduce simultaneous animations
- Use Chrome DevTools Performance tab
- Reduce animation duration on mobile

**Mobile issues?**
- Test on actual devices
- Reduce animation complexity
- Use `prefers-reduced-motion`

## Next Steps

1. Review `ANIMATIONS_GUIDE.md` for detailed documentation
2. Check component files for implementation examples
3. Customize animations to match your brand
4. Test on different devices and browsers
5. Monitor performance with DevTools

## Files Modified

- `lib/animations.ts` - Enhanced with 20+ new animation variants
- `lib/use-scroll-animation.ts` - New custom hooks for scroll animations
- `app/globals.css` - Added CSS animation utilities and keyframes
- `components/navbar.tsx` - Smooth logo and menu animations
- `components/footer.tsx` - Smooth link and social animations
- `components/hero-slider.tsx` - Already had great animations
- `components/features.tsx` - Already had great animations
- `components/products.tsx` - Already had great animations
- `components/science.tsx` - Already had great animations
- `components/cta.tsx` - Already had great animations

## Support

For more information, see:
- `ANIMATIONS_GUIDE.md` - Complete animation documentation
- Framer Motion docs: https://www.framer.com/motion/
- CSS Animations: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations
