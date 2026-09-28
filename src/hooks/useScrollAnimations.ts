import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    let ctx: ReturnType<typeof gsap.context> | null = null;
    let idleId: number | null = null;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    const setupAnimations = () => {
      // Avoid running heavy scrubs on constrained mobile CPU during critical load
      const isMobile = window.innerWidth < 768;

      ctx = gsap.context(() => {
        // ========================================================
        // 1. HERO 3D SCROLL SCRUB & DECONSTRUCTION
        // ========================================================
        const heroSection = document.getElementById('hero-section');
        const heroPhoneMockup = document.getElementById('hero-phone-mockup');
        const heroCardLeft = document.getElementById('hero-float-card-left');
        const heroCardRight = document.getElementById('hero-float-card-right');
        const heroTitle = document.getElementById('hero-headline');
        const heroStats = document.querySelectorAll('.hero-quick-stat');

        if (heroSection) {
          const heroTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroSection,
              start: 'top top',
              end: 'bottom top',
              scrub: isMobile ? false : 1.2,
            },
          });

          if (heroTitle) {
            heroTl.to(
              heroTitle,
              {
                y: isMobile ? -30 : -60,
                opacity: 0.35,
                scale: 0.94,
                ease: 'none',
              },
              0
            );
          }

          if (heroPhoneMockup && !isMobile) {
            heroTl.to(
              heroPhoneMockup,
              {
                y: 110,
                rotateY: -14,
                rotateX: 10,
                scale: 0.92,
                filter: 'blur(1px)',
                ease: 'none',
              },
              0
            );
          }

          if (heroCardLeft && !isMobile) {
            heroTl.to(
              heroCardLeft,
              {
                x: -70,
                y: 40,
                rotateZ: -8,
                opacity: 0.2,
                ease: 'none',
              },
              0
            );
          }

          if (heroCardRight && !isMobile) {
            heroTl.to(
              heroCardRight,
              {
                x: 70,
                y: -30,
                rotateZ: 8,
                opacity: 0.2,
                ease: 'none',
              },
              0
            );
          }

          if (heroStats.length > 0 && !isMobile) {
            heroTl.to(
              heroStats,
              {
                y: -25,
                stagger: 0.05,
                ease: 'none',
              },
              0
            );
          }
        }

        // ========================================================
        // 2. ABOUT SECTION 3D FAN-OUT
        // ========================================================
        const aboutCards = document.querySelectorAll('.about-capability-card');
        if (aboutCards.length > 0) {
          gsap.fromTo(
            aboutCards,
            {
              y: 70,
              opacity: 0.4,
              scale: 0.95,
              rotateX: 12,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotateX: 0,
              stagger: 0.12,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '#about',
                start: 'top 75%',
                end: 'top 35%',
                scrub: 1,
              },
            }
          );
        }

        // ========================================================
        // 3. 9-STEP APPROACH PIPELINE SCRUB
        // ========================================================
        const approachSteps = document.querySelectorAll('.pipeline-step-card');
        if (approachSteps.length > 0) {
          approachSteps.forEach((step, idx) => {
            gsap.fromTo(
              step,
              {
                scale: 0.92,
                opacity: 0.5,
                y: 35,
              },
              {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: step,
                  start: 'top 85%',
                  end: 'top 50%',
                  scrub: 0.8,
                },
              }
            );
          });
        }

        // ========================================================
        // 4. EXPERIENCE STATS MULTI-LAYER PARALLAX
        // ========================================================
        const statCards = document.querySelectorAll('.experience-stat-card');
        if (statCards.length > 0) {
          statCards.forEach((card, idx) => {
            const speed = idx % 2 === 0 ? -30 : 30;
            gsap.to(card, {
              y: speed,
              ease: 'none',
              scrollTrigger: {
                trigger: '#experience',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            });
          });
        }

        // ========================================================
        // 5. CASE STUDY 2-PAGE SPREAD 3D FOLD REVEAL
        // ========================================================
        const spreadContainer = document.getElementById('case-study-spread-container');
        if (spreadContainer) {
          gsap.fromTo(
            spreadContainer,
            {
              perspective: 1200,
              rotateX: 10,
              scale: 0.94,
              y: 60,
              opacity: 0.7,
            },
            {
              rotateX: 0,
              scale: 1,
              y: 0,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '#case-studies',
                start: 'top 70%',
                end: 'top 25%',
                scrub: 1.2,
              },
            }
          );
        }

        // ========================================================
        // 6. UGC WATERFALL PARALLAX COLUMNS
        // ========================================================
        const ugcCol1 = document.querySelectorAll('.ugc-parallax-odd');
        const ugcCol2 = document.querySelectorAll('.ugc-parallax-even');

        if (ugcCol1.length > 0) {
          gsap.to(ugcCol1, {
            y: -40,
            ease: 'none',
            scrollTrigger: {
              trigger: '#ugc',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        }

        if (ugcCol2.length > 0) {
          gsap.to(ugcCol2, {
            y: 40,
            ease: 'none',
            scrollTrigger: {
              trigger: '#ugc',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        }

        // ========================================================
        // 7. WHY US MATCH FORMULA MAGNETIC SNAP
        // ========================================================
        const formulaPillCards = document.querySelectorAll('.formula-pill-step');
        if (formulaPillCards.length > 0) {
          gsap.fromTo(
            formulaPillCards,
            {
              scale: 0.85,
              opacity: 0.3,
              y: 45,
              rotateZ: (i) => (i % 2 === 0 ? -4 : 4),
            },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              rotateZ: 0,
              stagger: 0.1,
              ease: 'back.out(1.4)',
              scrollTrigger: {
                trigger: '#why-us',
                start: 'top 65%',
                end: 'top 25%',
                scrub: 1,
              },
            }
          );
        }

        // ========================================================
        // 8. LOCAL ACTIVATIONS 3D TILT & CRITERIA REVEAL
        // ========================================================
        const localCards = document.querySelectorAll('.local-activation-card');
        if (localCards.length > 0) {
          gsap.fromTo(
            localCards,
            {
              y: 60,
              opacity: 0.4,
              scale: 0.95,
              rotateY: (i) => (i % 2 === 0 ? -6 : 6),
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotateY: 0,
              stagger: 0.12,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '#local',
                start: 'top 70%',
                end: 'top 30%',
                scrub: 1,
              },
            }
          );
        }

        const criteriaPillars = document.querySelectorAll('.local-criteria-pillar');
        if (criteriaPillars.length > 0) {
          gsap.fromTo(
            criteriaPillars,
            {
              y: 35,
              opacity: 0.3,
            },
            {
              y: 0,
              opacity: 1,
              stagger: 0.08,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '#local',
                start: 'center 75%',
                end: 'bottom 85%',
                scrub: 0.8,
              },
            }
          );
        }

        // ========================================================
        // 9. MORE CAMPAIGN EXPERIENCE 3D LIFT
        // ========================================================
        const categoryCards = document.querySelectorAll('.category-experience-card');
        if (categoryCards.length > 0) {
          gsap.fromTo(
            categoryCards,
            {
              y: 70,
              opacity: 0.4,
              rotateX: 12,
              scale: 0.94,
            },
            {
              y: 0,
              opacity: 1,
              rotateX: 0,
              scale: 1,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: categoryCards[0],
                start: 'top 80%',
                end: 'top 40%',
                scrub: 1,
              },
            }
          );
        }

        // ========================================================
        // 10. INTERACTIVE CONTACT STUDIO 3D REVEAL
        // ========================================================
        const contactStudio = document.getElementById('contact-interactive-studio');
        if (contactStudio) {
          gsap.fromTo(
            contactStudio,
            {
              perspective: 1000,
              rotateY: -6,
              y: 50,
              scale: 0.95,
              opacity: 0.6,
            },
            {
              rotateY: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '#contact',
                start: 'top 70%',
                end: 'top 30%',
                scrub: 1,
              },
            }
          );
        }
      });
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleId = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
        () => {
          setupAnimations();
        },
        { timeout: 1500 }
      );
    } else {
      timerId = setTimeout(() => {
        setupAnimations();
      }, 500);
    }

    return () => {
      if (idleId !== null && 'cancelIdleCallback' in window) {
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId);
      }
      if (timerId !== null) {
        clearTimeout(timerId);
      }
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);
}
