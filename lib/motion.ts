export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

// Motion utilities for smooth animations and performance optimization
export const reducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

// Smooth scroll utility
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Optimized animation variants that respect user motion preferences
export const fadeInUp = {
  hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: reducedMotion ? 0.1 : 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reducedMotion ? 0.01 : 0.1,
      delayChildren: reducedMotion ? 0.01 : 0.2,
    },
  },
};

// Performance-optimized scroll listener with throttling
export const createScrollListener = (callback: () => void, delay: number = 16) => {
  let timeoutId: NodeJS.Timeout;
  let lastScrollTime = 0;

  return () => {
    const now = Date.now();
    
    if (now - lastScrollTime > delay) {
      callback();
      lastScrollTime = now;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback();
        lastScrollTime = Date.now();
      }, delay);
    }
  };
};
