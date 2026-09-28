import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;
let tickerCallback: ((time: number) => void) | null = null;

export function initSmoothScroll(): Lenis | null {
  if (typeof window === 'undefined') {
    return null;
  }

  // Mobile / touch devices do not need Lenis - native touch momentum is 0% CPU and optimal
  const isTouchOrMobile = window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches;
  if (isTouchOrMobile) {
    return null;
  }

  if (lenisInstance) {
    return lenisInstance;
  }

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.5,
  });

  // Connect Lenis to GSAP ScrollTrigger
  lenisInstance.on('scroll', ScrollTrigger.update);

  tickerCallback = (time: number) => {
    lenisInstance?.raf(time * 1000);
  };
  gsap.ticker.add(tickerCallback);

  return lenisInstance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function stopLenis(): void {
  lenisInstance?.stop();
}

export function startLenis(): void {
  lenisInstance?.start();
}

export function destroyLenis(): void {
  if (tickerCallback) {
    gsap.ticker.remove(tickerCallback);
    tickerCallback = null;
  }
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
