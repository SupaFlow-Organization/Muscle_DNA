// Reusable animation variants for consistent smooth animations across the project

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Floating animation
export const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Pulse animation
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Rotate animation
export const rotate = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Shimmer animation
export const shimmer = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 0%"],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Bounce animation
export const bounce = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Glow animation
export const glow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(212, 175, 55, 0.3)",
      "0 0 40px rgba(212, 175, 55, 0.6)",
      "0 0 20px rgba(212, 175, 55, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Slide in animations
export const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

export const hoverLift = {
  whileHover: { y: -5 },
  transition: { duration: 0.3 }
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)"
  }
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

// Text reveal animation
export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5
    }
  })
};

// Number counter animation
export const counterAnimation = {
  from: 0,
  to: 100,
  transition: {
    duration: 2,
    ease: "easeOut"
  }
};

// Smooth scroll reveal
export const scrollReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Stagger text animation
export const staggerText = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Smooth card entrance
export const cardEntrance = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Smooth card hover
export const cardHover = {
  whileHover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(212, 175, 55, 0.15)",
    transition: { duration: 0.3 }
  }
};

// Smooth button hover
export const buttonHover = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(212, 175, 55, 0.3)"
  },
  whileTap: { scale: 0.98 }
};

// Smooth section entrance
export const sectionEntrance = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Smooth image zoom on hover
export const imageZoom = {
  whileHover: {
    scale: 1.08,
    transition: { duration: 0.4 }
  }
};

// Smooth parallax effect
export const parallax = (offset: number) => ({
  y: offset * 0.5,
  transition: { type: "spring", stiffness: 100, damping: 30 }
});

// Smooth number counter
export const numberCounter = (value: number) => ({
  from: 0,
  to: value,
  transition: {
    duration: 2.5,
    ease: "easeOut"
  }
});

// Smooth fade and scale
export const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Smooth underline animation
export const underlineHover = {
  whileHover: {
    backgroundSize: "100% 2px",
    transition: { duration: 0.3 }
  }
};

// Smooth gradient animation
export const gradientShift = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Smooth blur in
export const blurIn = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Smooth rotate entrance
export const rotateEntrance = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Smooth flip animation
export const flip = {
  whileHover: {
    rotateY: 180,
    transition: { duration: 0.6 }
  }
};

// Smooth wiggle animation
export const wiggle = {
  animate: {
    rotate: [-2, 2, -2],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// Smooth bounce entrance
export const bounceEntrance = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};
