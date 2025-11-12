// components/ProjectDetailsPage.tsx
import ContactForm from "@/components/Shared/MiniContactForm";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

// MagicBento component (copied and integrated)
import React, { useRef, useEffect as useEffectInternal, useState as useStateInternal, useCallback } from 'react';
import { gsap } from 'gsap';

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '0, 0, 0';
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 0.8);
    box-shadow: 0 0 8px rgba(${color}, 0.6), 0 0 16px rgba(${color}, 0.4);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  imageSrc?: string;
}> = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
  imageSrc
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement[]>([]);
    const timeoutsRef = useRef<number[]>([]);
    const isHoveredRef = useRef(false);
    const memoizedParticles = useRef<HTMLDivElement[]>([]);
    const particlesInitialized = useRef(false);
    const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

    const initializeParticles = useCallback(() => {
      if (particlesInitialized.current || !cardRef.current) return;

      const { width, height } = cardRef.current.getBoundingClientRect();
      memoizedParticles.current = Array.from({ length: particleCount }, () =>
        createParticleElement(Math.random() * width, Math.random() * height, glowColor)
      );
      particlesInitialized.current = true;
    }, [particleCount, glowColor]);

    const clearAllParticles = useCallback(() => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
      magnetismAnimationRef.current?.kill();

      particlesRef.current.forEach(particle => {
        gsap.to(particle, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'back.in(1.7)',
          onComplete: () => {
            particle.parentNode?.removeChild(particle);
          }
        });
      });
      particlesRef.current = [];
    }, []);

    const animateParticles = useCallback(() => {
      if (!cardRef.current || !isHoveredRef.current) return;

      if (!particlesInitialized.current) {
        initializeParticles();
      }

      memoizedParticles.current.forEach((particle, index) => {
        const timeoutId = setTimeout(() => {
          if (!isHoveredRef.current || !cardRef.current) return;

          const clone = particle.cloneNode(true) as HTMLDivElement;
          cardRef.current.appendChild(clone);
          particlesRef.current.push(clone);

          gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

          gsap.to(clone, {
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100,
            rotation: Math.random() * 360,
            duration: 2 + Math.random() * 2,
            ease: 'none',
            repeat: -1,
            yoyo: true
          });

          gsap.to(clone, {
            opacity: 0.3,
            duration: 1.5,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true
          });
        }, index * 100);

        timeoutsRef.current.push(timeoutId);
      });
    }, [initializeParticles]);

    useEffectInternal(() => {
      if (disableAnimations || !cardRef.current) return;

      const element = cardRef.current;

      const handleMouseEnter = () => {
        isHoveredRef.current = true;
        animateParticles();

        if (enableTilt) {
          gsap.to(element, {
            rotateX: 5,
            rotateY: 5,
            duration: 0.3,
            ease: 'power2.out',
            transformPerspective: 1000
          });
        }
      };

      const handleMouseLeave = () => {
        isHoveredRef.current = false;
        clearAllParticles();

        if (enableTilt) {
          gsap.to(element, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        }

        if (enableMagnetism) {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!enableTilt && !enableMagnetism) return;

        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        if (enableTilt) {
          const rotateX = ((y - centerY) / centerY) * -10;
          const rotateY = ((x - centerX) / centerX) * 10;

          gsap.to(element, {
            rotateX,
            rotateY,
            duration: 0.1,
            ease: 'power2.out',
            transformPerspective: 1000
          });
        }

        if (enableMagnetism) {
          const magnetX = (x - centerX) * 0.05;
          const magnetY = (y - centerY) * 0.05;

          magnetismAnimationRef.current = gsap.to(element, {
            x: magnetX,
            y: magnetY,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      };

      const handleClick = (e: MouseEvent) => {
        if (!clickEffect) return;

        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const maxDistance = Math.max(
          Math.hypot(x, y),
          Math.hypot(x - rect.width, y),
          Math.hypot(x, y - rect.height),
          Math.hypot(x - rect.width, y - rect.height)
        );

        const ripple = document.createElement('div');
        ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

        element.appendChild(ripple);

        gsap.fromTo(
          ripple,
          {
            scale: 0,
            opacity: 1
          },
          {
            scale: 1,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            onComplete: () => ripple.remove()
          }
        );
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('click', handleClick);

      return () => {
        isHoveredRef.current = false;
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('click', handleClick);
        clearAllParticles();
      };
    }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

    return (
      <div
        ref={cardRef}
        className={`${className} relative overflow-hidden`}
        style={{
          ...style,
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 h-full">
          {children}
        </div>
      </div>
    );
  };

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR
}) => {
    const spotlightRef = useRef<HTMLDivElement | null>(null);
    const isInsideSection = useRef(false);

    useEffectInternal(() => {
      if (disableAnimations || !gridRef?.current || !enabled) return;

      const spotlight = document.createElement('div');
      spotlight.className = 'global-spotlight';
      spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.25) 0%,
        rgba(${glowColor}, 0.15) 15%,
        rgba(${glowColor}, 0.08) 25%,
        rgba(${glowColor}, 0.04) 40%,
        rgba(${glowColor}, 0.02) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: multiply;
    `;
      document.body.appendChild(spotlight);
      spotlightRef.current = spotlight;

      const handleMouseMove = (e: MouseEvent) => {
        if (!spotlightRef.current || !gridRef.current) return;

        const section = gridRef.current.closest('.bento-section');
        const rect = section?.getBoundingClientRect();
        const mouseInside =
          rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

        isInsideSection.current = mouseInside || false;
        const cards = gridRef.current.querySelectorAll('.card');

        if (!mouseInside) {
          gsap.to(spotlightRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
          cards.forEach(card => {
            (card as HTMLElement).style.setProperty('--glow-intensity', '0');
          });
          return;
        }

        const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
        let minDistance = Infinity;

        cards.forEach(card => {
          const cardElement = card as HTMLElement;
          const cardRect = cardElement.getBoundingClientRect();
          const centerX = cardRect.left + cardRect.width / 2;
          const centerY = cardRect.top + cardRect.height / 2;
          const distance =
            Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
          const effectiveDistance = Math.max(0, distance);

          minDistance = Math.min(minDistance, effectiveDistance);

          let glowIntensity = 0;
          if (effectiveDistance <= proximity) {
            glowIntensity = 1;
          } else if (effectiveDistance <= fadeDistance) {
            glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
          }

          updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
        });

        gsap.to(spotlightRef.current, {
          left: e.clientX,
          top: e.clientY,
          duration: 0.1,
          ease: 'power2.out'
        });

        const targetOpacity =
          minDistance <= proximity
            ? 0.9
            : minDistance <= fadeDistance
              ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.9
              : 0;

        gsap.to(spotlightRef.current, {
          opacity: targetOpacity,
          duration: targetOpacity > 0 ? 0.2 : 0.5,
          ease: 'power2.out'
        });
      };

      const handleMouseLeave = () => {
        isInsideSection.current = false;
        gridRef.current?.querySelectorAll('.card').forEach(card => {
          (card as HTMLElement).style.setProperty('--glow-intensity', '0');
        });
        if (spotlightRef.current) {
          gsap.to(spotlightRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
        spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
      };
    }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

    return null;
  };

const BentoCardGrid: React.FC<{
  children: React.ReactNode;
  gridRef?: React.RefObject<HTMLDivElement | null>;
}> = ({ children, gridRef }) => (
  <div
    className="bento-section w-full select-none relative"
    ref={gridRef}
  >
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useStateInternal(false);

  useEffectInternal(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

interface MagicBentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  // New props for customization
  bentoTitle?: string;
  bentoData?: Array<{
    imageSrc: string;
    title: string;
    description: string;
    label: string;
  }>;
}

const MagicBento: React.FC<MagicBentoProps> = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
  // New customization props
  bentoTitle = "Project Highlights",
  bentoData = [] // Default to empty array
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  // Default card data if none provided
  const defaultCardData = [
    {
      imageSrc: "/default1.jpg",
      title: "Premium Features",
      description: "Experience luxury and comfort in our premium units",
      label: "Premium"
    },
    {
      imageSrc: "/default2.jpg",
      title: "Modern Design",
      description: "Contemporary architecture with state-of-the-art amenities",
      label: "Modern"
    },
    {
      imageSrc: "/default3.jpg",
      title: "Strategic Location",
      description: "Prime location with excellent connectivity and views",
      label: "Location"
    },
    {
      imageSrc: "/default4.jpg",
      title: "Smart Living",
      description: "Intelligent home features for modern lifestyle",
      label: "Smart"
    }
  ];

  const cardData = bentoData.length > 0 ? bentoData : defaultCardData;

  return (
    <>
      <style>
        {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: #000000;
            --background-dark: #000000;
            --white: hsl(0, 0%, 100%);
            --black-primary: rgba(0, 0, 0, 1);
            --black-glow: rgba(0, 0, 0, 0.5);
            --black-border: rgba(0, 0, 0, 0.9);
          }
          
          .card-responsive {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1rem;
            width: 100%;
            padding: 1rem;
          }
          
          @media (min-width: 640px) {
            .card-responsive {
              grid-template-columns: repeat(2, 1fr);
              gap: 1.5rem;
              padding: 1.5rem;
            }
          }
          
          @media (min-width: 1024px) {
            .card-responsive {
              grid-template-columns: repeat(3, 1fr);
              gap: 2rem;
              padding: 2rem;
            }
          }
          
          @media (min-width: 1280px) {
            .card-responsive {
              grid-template-columns: repeat(4, 1fr);
              gap: 2rem;
              padding: 2rem;
            }
            
            .card-responsive .card:nth-child(3) {
              grid-column: span 2;
              grid-row: span 2;
            }
            
            .card-responsive .card:nth-child(4) {
              grid-column: 1 / span 2;
              grid-row: 2 / span 2;
            }
            
            .card-responsive .card:nth-child(6) {
              grid-column: 4;
              grid-row: 3;
            }
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.9)) 0%,
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.6)) 30%,
                transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.8), 
              0 0 0px rgba(${glowColor}, 0.4),
              0 0 0px rgba(${glowColor}, 0.2);
            transform: translateY(-4px) scale(1.02);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${glowColor}, 0.4);
            border-radius: 50%;
            z-index: -1;
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          @media (max-width: 639px) {
            .card-responsive {
              grid-template-columns: 1fr;
              gap: 1rem;
              padding: 1rem;
            }
            
            .card-responsive .card {
              width: 100%;
              min-height: 200px;
            }
          }

          .card {
            position: relative;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .card > *:not(.absolute) {
            position: relative;
            z-index: 10;
          }

          .global-spotlight {
            filter: brightness(0.8) contrast(1.2);
          }
        `}
      </style>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        <div className='bg-white p-3 my-3 rounded-4xl m-2'>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-10 mb-10 tracking-tight text-center">
            {bentoTitle}
          </h1>
          <div className="card-responsive">
            {cardData.map((card, index) => {
              const baseClassName = `card flex flex-col justify-between relative aspect-[4/3] min-h-[250px] w-full p-6 rounded-2xl border-2 border-black/30 font-light overflow-hidden transition-all duration-400 ease-out hover:-translate-y-2 ${enableBorderGlow ? 'card--border-glow' : ''
                }`;

              const cardStyle = {
                backgroundColor: 'transparent',
                borderColor: 'var(--border-color)',
                color: 'var(--white)',
                '--glow-x': '50%',
                '--glow-y': '50%',
                '--glow-intensity': '0',
                '--glow-radius': '250px'
              } as React.CSSProperties;

              if (enableStars) {
                return (
                  <ParticleCard
                    key={index}
                    className={baseClassName}
                    style={cardStyle}
                    disableAnimations={shouldDisableAnimations}
                    particleCount={particleCount}
                    glowColor={glowColor}
                    enableTilt={enableTilt}
                    clickEffect={clickEffect}
                    enableMagnetism={enableMagnetism}
                    imageSrc={card.imageSrc}
                  >
                    <div className="card__header flex justify-between gap-3 relative text-white">
                      <span className="card__label text-base font-bold drop-shadow-2xl bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        {card.label}
                      </span>
                    </div>
                    <div className="card__content flex flex-col relative text-white">
                      <h3 className={`card__title font-bold text-xl m-0 mb-2 drop-shadow-2xl ${textAutoHide ? 'text-clamp-1' : ''}`}>
                        {card.title}
                      </h3>
                      <p
                        className={`card__description text-sm leading-6 opacity-95 drop-shadow-2xl ${textAutoHide ? 'text-clamp-2' : ''}`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </ParticleCard>
                );
              }

              return (
                <div
                  key={index}
                  className={baseClassName}
                  style={{
                    ...cardStyle,
                    backgroundImage: card.imageSrc ? `url(${card.imageSrc})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 z-0"></div>
                  <div className="card__header flex justify-between gap-3 relative text-white z-10">
                    <span className="card__label text-base font-bold drop-shadow-2xl bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      {card.label}
                    </span>
                  </div>
                  <div className="card__content flex flex-col relative text-white z-10">
                    <h3 className={`card__title font-bold text-xl m-0 mb-2 drop-shadow-2xl ${textAutoHide ? 'text-clamp-1' : ''}`}>
                      {card.title}
                    </h3>
                    <p className={`card__description text-sm leading-6 opacity-95 drop-shadow-2xl ${textAutoHide ? 'text-clamp-2' : ''}`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BentoCardGrid>
    </>
  );
};

// Main ProjectDetailsPage component
interface ProjectDetailsProps {
  // Hero Section
  projectName: string;
  location: string;
  tagline: string;
  investmentInfo: string;
  backgroundImage: string;
  backgroundImage2: string;
  backgroundImage3: string;

  // About Section
  aboutTitle: string;
  features: Array<{
    title: string;
    description: string;
  }>;

  // Connectivity
  connectivityTitle: string;
  connectivityFeatures: string[];

  // Gallery
  galleryTitle: string;
  galleryItems: Array<{
    image: string;
    name: string;
    location: string;
    type: string;
  }>;

  // CTA Section
  ctaTitle: string;

  // Map
  mapEmbedUrl: string;

  // Magic Bento Section (new)
  bentoTitle?: string;
  bentoData?: Array<{
    imageSrc: string;
    title: string;
    description: string;
    label: string;
  }>;
  bentoProps?: MagicBentoProps;
}

const ProjectDetailsPage = ({
  projectName,
  location,
  tagline,
  investmentInfo,
  backgroundImage,
  backgroundImage2,
  backgroundImage3,
  aboutTitle,
  features,
  connectivityTitle,
  connectivityFeatures,
  galleryTitle,
  galleryItems,
  ctaTitle,
  mapEmbedUrl,
  // New Magic Bento props
  bentoTitle = "Project Highlights",
  bentoData = [],
  bentoProps = {}
}: ProjectDetailsProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-[calc(90vh-5rem)] mx-2 my-4 md:pt-12 lg:pt-17 sm:m-2 rounded-3xl sm:rounded-4xl relative">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-3xl sm:rounded-4xl bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-50% to-black/100 rounded-3xl sm:rounded-4xl"></div>
        </div>

        <div className="relative z-10 min-h-[calc(90vh-5rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between w-full max-w-7xl gap-6 lg:gap-8 xl:gap-16">
            <div className="text-center lg:text-left text-white space-y-4 lg:space-y-6 mt-10 lg:mt-4">
              <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                {projectName}
              </h1>
              <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                {location}
              </h2>
              <p className="text-base text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {tagline}
                <br />
                {investmentInfo}
              </p>

              {isMobile && (
                <div className="pt-4">
                  <button
                    onClick={() => document.getElementById('contact-form-mobile')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 bg-white/20 backdrop-blur-lg text-white text-lg font-medium rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg border border-white/30 flex items-center justify-center gap-2 mx-auto"
                  >
                    Get Details
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </button>
                </div>
              )}
            </div>

            <div className="flex justify-center lg:justify-end h-auto lg:h-[calc(90vh-5rem)] mt-6 lg:mt-0">
              <div
                id="contact-form-mobile"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl bg-black/35 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl"
              >
                <ContactForm compact={true} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-auto mx-2 my-4">
        <div className="relative z-10 min-h-auto py-8 lg:py-12 flex items-stretch p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch w-full max-w-8xl gap-8 lg:gap-12 xl:gap-16">
            <div className="hidden md:flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-xl h-full min-h-[400px] lg:min-h-[500px]">
                <img
                  src={backgroundImage2}
                  alt={aboutTitle}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:text-left space-y-4 lg:space-y-6 pt-4 lg:pt-0 order-1 lg:order-2 flex flex-col justify-between">
              <div>
                <div className="space-y-3 lg:space-y-4">
                  <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-900">
                    {aboutTitle}
                  </h1>
                </div>

                <div className="space-y-4 lg:space-y-5 mt-6">
                  {features.map((feature, index) => (
                    <div key={index}>
                      {isMobile ? (
                        <div
                          className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl"
                          onClick={() => toggleAccordion(index)}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900 leading-tight pr-4">
                              {feature.title}
                            </h3>
                            <svg
                              className={`w-5 h-5 transform transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </div>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
                          >
                            <p className="text-gray-700 leading-relaxed text-base">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-50/70 via-white to-gray-50/30 border border-gray-100/80 transition-all duration-500 ease-out hover:bg-gradient-to-br hover:from-white hover:via-gray-50 hover:to-gray-100/50 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-200/30">
                          <div className="flex items-start gap-4">
                            {/* Gray accent dot */}
                            <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-gray-500 group-hover:bg-gray-600 transition-all duration-500 ease-out transform group-hover:scale-110" />

                            <div className="flex-1 space-y-2">
                              <h3 className="text-lg lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-500 ease-out leading-tight">
                                {feature.title}
                              </h3>

                              <p className="text-gray-600 leading-relaxed text-sm lg:text-base group-hover:text-gray-700 transition-colors duration-500 ease-out">
                                {feature.description}
                              </p>
                            </div>
                          </div>

                          {/* Animated gray underline */}
                          <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gray-400 group-hover:w-full group-hover:left-0 transition-all duration-700 ease-out rounded-full" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <a href="/contact" className="cursor-pointer">
                  <button className="w-full sm:w-auto px-5 py-3 lg:px-6 lg:py-3 bg-white text-gray-800 text-base lg:text-lg font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center justify-center gap-2 lg:gap-3 group">
                    Contact Us
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </a>
                <a href="tel:+911234567890" className="cursor-pointer">
                  <button className="w-full sm:w-auto px-5 py-3 lg:px-6 lg:py-3 bg-white text-gray-800 text-base lg:text-lg font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center justify-center gap-2 lg:gap-3 group">
                    Call Now
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Magic Bento Section - Now fully customizable */}
      <MagicBento
        bentoTitle={bentoTitle}
        bentoData={bentoData}
        {...bentoProps}
      />

      {/* CTA Section */}
      <div className="h-auto lg:h-[calc(70vh-5rem)] mx-2 my-4 sm:m-2 rounded-3xl sm:rounded-4xl bg-gray-400 relative">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-3xl sm:rounded-4xl bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage3})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-10% via-transparent via-30% to-black/100 rounded-3xl sm:rounded-4xl"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 lg:gap-8 xl:gap-12 py-8 lg:py-0 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-6xl leading-tight lg:leading-relaxed px-4">
              {ctaTitle}
            </h1>
          </div>

          <div className="text-center">
            <button className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-gray-800 text-base lg:text-lg font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center gap-2 lg:gap-3 group">
              <a href="/contact">Contact Us</a>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-8 lg:py-12 mx-2 my-4 sm:m-2 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100">
        <section className="max-w-7xl mx-auto px-4 mb-8 lg:mb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">
              {galleryTitle}
            </h2>
            {isMobile && (
              <p className="text-gray-600 text-sm mb-4">Swipe to explore more →</p>
            )}
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: isMobile,
            }}
            autoPlay={true}
            autoPlayInterval={3000}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryItems.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full group active:scale-95">
                      <CardContent className="flex aspect-[1/1.3] items-center justify-center p-0 overflow-hidden relative">
                        <div className="w-full h-full relative">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h3 className="font-bold text-lg mb-1">{project.name}</h3>
                            <p className="text-sm opacity-90">{project.location}</p>
                            <p className="text-xs opacity-75">{project.type}</p>
                          </div>

                          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="bg-white/90 hover:bg-white text-slate-900 p-1 sm:p-2 rounded-full shadow-md transition-colors">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </div>

      {/* Locations Section */}
      <div className="min-h-auto lg:min-h-[calc(90vh-5rem)] mx-2 my-4 sm:m-2 rounded-3xl sm:rounded-4xl relative bg-white p-4 sm:p-2 mb-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-6 lg:mt-10 mb-6 lg:mb-10 tracking-tight text-center">Our Locations</h1>

        <div className="relative z-10 min-h-auto py-4 lg:py-0 lg:min-h-[calc(90vh-5rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-8xl gap-6 lg:gap-8">
            <div className="text-center lg:text-left space-y-4 lg:space-y-6 pt-4 lg:pt-0 order-2 lg:order-1">
              <div className="space-y-3 lg:space-y-4">
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-900">
                  {connectivityTitle}
                </h1>
              </div>

              {isMobile ? (
                <div className="pb-1 -mx-4 px-4">
                  <div className="space-y-3">
                    {connectivityFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 shadow-lg border border-blue-200"
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500 text-white p-2 rounded-lg">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <h4 className="text-base text-start font-semibold text-gray-900 flex-1">
                            {feature}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <ul className="space-y-3 lg:space-y-4 text-left">
                  {connectivityFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 group hover:bg-gray-50 p-3 rounded-2xl transition-all duration-300">
                      <div className="bg-blue-500 text-white p-1 rounded-lg mt-1 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg lg:text-xl font-semibold text-gray-900">
                          {feature}
                        </h4>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <a href="/contact" className="cursor-pointer">
                  <button className="w-full sm:w-auto px-5 py-3 lg:px-6 lg:py-3 bg-white text-gray-800 text-base lg:text-lg font-medium rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:border-black flex items-center justify-center gap-2 lg:gap-3 group">
                    Contact Us
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-full max-w-xs sm:max-w-md lg:max-w-4xl h-[300px] sm:h-[350px] lg:h-[450px] xl:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-xl bg-gray-100">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    borderRadius: '1rem',
                    filter: 'contrast(1.05) brightness(0.95)'
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${projectName} Location Map`}
                  className="rounded-2xl sm:rounded-3xl"
                />
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/10 backdrop-blur-md text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg border border-white/20 text-base">
                  🗺️ Interactive Map
                </div>

                {isMobile && (
                  <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm">
                    👆 Tap & Drag to Explore
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;