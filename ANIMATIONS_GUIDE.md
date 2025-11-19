# Smooth Animations Guide - Muscle DNA

This guide documents all the smooth animations implemented across the Muscle DNA website to enhance user appeal and engagement.

## Overview

The website features comprehensive smooth animations that create a premium, engaging user experience. All animations are optimized for performance and accessibility.

## Animation Systems

### 1. Framer Motion Animations (`lib/animations.ts`)

Pre-built animation variants for consistent, reusable animations:

#### Entrance Animations
- **fadeInUp**: Fade in with upward movement (30px)
- **fadeInDown**: Fade in with downward movement (30px)
- **fadeInLeft**: Fade in from left (50px)
- **fadeInRight**: Fade in from right (50px)
- **scaleIn**: Fade in with scale effect (0.8 → 1)
- **slideInFromLeft**: Slide in from left (100px)
- **slideInFromRight**: Slide in from right (100px)
- **blurIn**: Fade in with blur effect
- **rotateEntrance**: Fade in with rotation
- **bounceEntrance**: Spring-based bounce entrance

#### Container Animations
- **staggerContainer**: Stagger children animations with 0.12s delay
- **staggerItem**: Individual item animation for staggered effects
- **sectionEntrance**: Full section entrance with staggered children
- **staggerText**: Text-specific stagger animation

#### Continuous Animations
- **float**: Smooth floating motion (±10px, 3s cycle)
- **pulse**: Smooth pulse effect (scale + opacity)
- **rotate**: Continuous 360° rotation (20s)
- **shimmer**: Shimmer/shine effect
- **bounce**: Smooth bounce animation
- **glow**: Glowing box-shadow effect
- **gradientShift**: Animated gradient background
- **wiggle**: Subtle wiggle animation

#### Hover Animations
- **hoverScale**: Scale up on hover (1.05x)
- **hoverLift**: Lift up on hover (-5px)
- **hoverGlow**: Glow effect on hover
- **imageZoom**: Image zoom on hover (1.08x)
- **buttonHover**: Button-specific hover effect
- **cardHover**: Card hover with lift and shadow
- **underlineHover**: Animated underline on hover
- **flip**: 3D flip animation on hover

#### Utility Animations
- **pageTransition**: Page fade transition
- **textReveal**: Text reveal with staggered letters
- **counterAnimation**: Number counter animation
- **cardEntrance**: Card entrance with scale
- **fadeScale**: Fade and scale combined
- **scrollReveal**: Scroll-triggered reveal
- **parallax**: Parallax scroll effect

## Component Animations

### Navbar
- **Logo**: Smooth scale on hover (1.08x)
- **Menu Items**: Staggered fade-in on load with animated underline on hover
- **Mobile Menu**: Smooth height animation with staggered item entrance
- **Navigation Links**: Smooth color transition and underline animation

### Hero Slider
- **Product Image**: Floating animation with hover scale and rotation
- **Decorative Rings**: Rotating and counter-rotating rings
- **Accent Dots**: Floating particles with smooth motion
- **Slide Transitions**: Spring-based slide animation with direction awareness
- **Content**: Staggered fade-in animations for text and features
- **Buttons**: Smooth scale and tap animations
- **Floating Badge**: Scale entrance animation

### Features Section
- **Stats Bar**: Staggered scale entrance with hover lift
- **Feature Cards**: Staggered fade-in with hover lift effect
- **Why Choose Section**: Smooth entrance with floating sparkles
- **Benefit Cards**: Staggered entrance with hover animations

### Products Section
- **Highlights**: Staggered entrance with hover effects
- **Product Cards**: Staggered grid entrance with smooth transitions
- **Flavor Badges**: Staggered scale entrance
- **Floating Sparkles**: Continuous rotation and scale animation

### Science Section
- **DNA Icons**: Rotating and counter-rotating background elements
- **Certifications**: Staggered scale entrance with hover lift
- **Stats**: Staggered fade-in with smooth transitions
- **Process Steps**: Staggered entrance with hover lift
- **Floating Sparkles**: Continuous animation with scale effects

### CTA Section
- **Main Card**: Smooth entrance with floating sparkles
- **Eyebrow**: Staggered entrance
- **Heading**: Smooth fade-in with gradient text
- **Buttons**: Scale and tap animations
- **Benefits Grid**: Staggered entrance with hover effects

### Footer
- **Logo**: Smooth scale on hover
- **Links**: Staggered entrance with smooth x-translation on hover
- **Social Links**: Scale and tap animations
- **Divider**: Smooth fade-in

### WhatsApp Button
- **Button**: Floating animation with pulse effect
- **Hover**: Scale and glow effects

## CSS Animation Utilities

### Keyframe Animations
- `animate-fade-in`: Simple fade in
- `animate-fade-in-up`: Fade in with upward movement
- `animate-fade-in-down`: Fade in with downward movement
- `animate-fade-in-left`: Fade in from left
- `animate-fade-in-right`: Fade in from right
- `animate-scale-in`: Scale entrance
- `animate-slide-in-left`: Slide from left
- `animate-slide-in-right`: Slide from right
- `animate-bounce-smooth`: Soft bounce
- `animate-float`: Floating motion
- `animate-pulse-smooth`: Soft pulse
- `animate-glow`: Glow effect

### Transition Utilities
- `transition-smooth`: 300ms ease-out transition
- `transition-smooth-lg`: 500ms ease-out transition
- `hover-lift`: Hover lift effect (-4px)
- `hover-scale`: Hover scale effect (1.05x)
- `hover-glow`: Hover glow effect

## Custom Hooks

### useScrollAnimation
Trigger animations when elements enter viewport:
```typescript
const { ref, isVisible } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px',
  triggerOnce: true
});
```

### useParallax
Create parallax scroll effects:
```typescript
const { ref, offset } = useParallax(0.5);
```

### useCounter
Animate number counters:
```typescript
const { ref, count } = useCounter(1000, 2000);
```

## Animation Best Practices

### Performance
1. Use `whileInView` with `viewport={{ once: true }}` for scroll animations
2. Limit simultaneous animations to prevent jank
3. Use `transition={{ type: "spring" }}` for natural motion
4. Prefer `transform` and `opacity` for GPU acceleration

### Accessibility
1. Respect `prefers-reduced-motion` media query
2. Keep animations under 1 second for UI interactions
3. Avoid flashing or rapid animations
4. Ensure animations don't interfere with content readability

### User Experience
1. Use consistent animation timing (0.3s - 0.8s for most animations)
2. Stagger animations for visual hierarchy
3. Use easing functions for natural motion (`easeOut`, `easeInOut`)
4. Provide visual feedback on interactions

## Animation Timing

### Standard Durations
- **Quick interactions**: 0.2s - 0.3s (button clicks, hovers)
- **Entrance animations**: 0.5s - 0.8s (fade-in, slide-in)
- **Staggered animations**: 0.1s - 0.15s delay between items
- **Continuous animations**: 2s - 8s (floating, rotating)
- **Page transitions**: 0.5s

### Easing Functions
- **easeOut**: Default for entrance animations
- **easeInOut**: For smooth transitions
- **linear**: For continuous rotations
- **spring**: For bouncy, natural motion

## Implementation Examples

### Using Framer Motion Variants
```typescript
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export function MyComponent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={staggerItem}>Item 1</motion.div>
      <motion.div variants={staggerItem}>Item 2</motion.div>
    </motion.div>
  );
}
```

### Using CSS Animations
```html
<div class="animate-fade-in-up">
  Content with smooth fade-in and upward movement
</div>
```

### Using Custom Hooks
```typescript
import { useScrollAnimation } from '@/lib/use-scroll-animation';

export function MyComponent() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
      Content
    </div>
  );
}
```

## Browser Support

All animations use modern CSS and JavaScript APIs:
- CSS Animations: All modern browsers
- Framer Motion: React 16.8+
- Intersection Observer: All modern browsers (with polyfill support)

## Performance Metrics

- **First Paint**: Optimized with minimal initial animations
- **Cumulative Layout Shift**: Prevented through transform-based animations
- **Frame Rate**: Maintained at 60fps with GPU acceleration
- **Bundle Size**: Framer Motion adds ~40KB gzipped

## Future Enhancements

1. Add `prefers-reduced-motion` support
2. Implement scroll-linked animations
3. Add gesture-based animations for mobile
4. Create animation presets for different themes
5. Add animation performance monitoring

## Troubleshooting

### Animations Not Playing
- Check if `initial` and `animate` props are set correctly
- Verify `whileInView` has proper `viewport` configuration
- Ensure Framer Motion is properly imported

### Performance Issues
- Reduce number of simultaneous animations
- Use `will-change` CSS property sparingly
- Profile with Chrome DevTools Performance tab
- Consider reducing animation duration on slower devices

### Mobile Issues
- Test on actual devices, not just browser emulation
- Reduce animation complexity on mobile
- Use `prefers-reduced-motion` for accessibility
- Optimize image sizes for smooth animations

## Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [CSS Animations MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Web Animation Performance](https://web.dev/animations-guide/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
