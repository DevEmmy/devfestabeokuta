'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DoodleRain = () => {
  const containerRef = useRef(null);

  const doodles = Array.from({ length: 12 }, (_, i) => `/doodle${i + 1}.png`);

  useEffect(() => {
    const doodleEls = gsap.utils.toArray('.doodle-item');

    doodleEls.forEach((el : any, i) => {
      const delay = gsap.utils.random(0, 2);
      const duration = gsap.utils.random(4, 8);
      const xDrift = gsap.utils.random(-50, 50);
      
      // Create a timeline for each doodle
      const tl = gsap.timeline({ repeat: -1, delay });
      
      // Random pattern selection for variety
      const pattern = i % 4;
      
      if (pattern === 0) {
        // Sine wave pattern
        tl.fromTo(
          el,
          {
            y: -150,
            x: gsap.utils.random(0, window.innerWidth - 100),
            opacity: 0,
            rotate: 0,
            scale: gsap.utils.random(0.8, 1.2),
          },
          {
            y: window.innerHeight + 150,
            opacity: 1,
            duration,
            ease: 'none',
            onUpdate: function() {
              const progress = this.progress();
              const sineWave = Math.sin(progress * Math.PI * 4) * 100;
              gsap.set(el, { x: `+=${sineWave * 0.01}` });
            }
          }
        ).to(el, {
          rotate: 360,
          duration,
          ease: 'none',
        }, 0);
      } else if (pattern === 1) {
        // Zigzag pattern
        tl.fromTo(
          el,
          {
            y: -150,
            x: gsap.utils.random(0, window.innerWidth - 100),
            opacity: 0,
            rotate: gsap.utils.random(-30, 30),
            scale: gsap.utils.random(0.8, 1.2),
          },
          {
            y: window.innerHeight + 150,
            x: `+=${xDrift * 3}`,
            opacity: 1,
            duration,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: 3,
          }
        ).to(el, {
          rotate: gsap.utils.random(-180, 180),
          duration,
          ease: 'power1.inOut',
        }, 0);
      } else if (pattern === 2) {
        // Spiral/swirl pattern
        const startX = gsap.utils.random(0, window.innerWidth - 100);
        tl.fromTo(
          el,
          {
            y: -150,
            x: startX,
            opacity: 0,
            rotate: 0,
            scale: gsap.utils.random(0.8, 1.2),
          },
          {
            y: window.innerHeight + 150,
            opacity: 1,
            duration,
            ease: 'power1.in',
            onUpdate: function() {
              const progress = this.progress();
              const spiral = Math.cos(progress * Math.PI * 6) * 80 * (1 - progress);
              gsap.set(el, { x: startX + spiral });
            }
          }
        ).to(el, {
          rotate: 720,
          duration,
          ease: 'power1.in',
        }, 0);
      } else {
        // Gentle sway pattern (like a falling leaf)
        const startX = gsap.utils.random(0, window.innerWidth - 100);
        tl.fromTo(
          el,
          {
            y: -150,
            x: startX,
            opacity: 0,
            rotate: gsap.utils.random(-45, 45),
            scale: gsap.utils.random(0.8, 1.2),
          },
          {
            y: window.innerHeight + 150,
            opacity: 1,
            duration,
            ease: 'sine.inOut',
          }
        ).to(el, {
          x: `+=${gsap.utils.random(-100, 100)}`,
          duration: duration / 2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: 1,
        }, 0).to(el, {
          rotate: `+=${gsap.utils.random(-90, 90)}`,
          duration: duration / 3,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: 2,
        }, 0);
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {doodles.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`doodle-${index + 1}`}
          width={80}
          height={80}
          className="doodle-item absolute"
        />
      ))}
    </div>
  );
};

export default DoodleRain;