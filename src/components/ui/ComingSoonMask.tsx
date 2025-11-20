'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface ComingSoonMaskProps {
  children: React.ReactNode
  label?: string
}

const ComingSoonMask = ({ children, label = "Coming Soon" }: ComingSoonMaskProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })

    tl.fromTo(
      wrapperRef.current,
      { opacity: 0, filter: "blur(20px)" },
      { opacity: 1, filter: "blur(6px)", duration: 1 }
    )

    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.6 },
      { opacity: 1, scale: 1, duration: 0.7 },
      "-=0.5"
    )

    gsap.to(textRef.current, {
      // boxShadow: "0 0 25px rgba(255,255,255,0.4)",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    })
  }, [])

  return (
    <div className="relative w-full">
      {/* Blurred content */}
      <div
        ref={wrapperRef}
        className="backdrop-blur-xl opacity-10 pointer-events-none select-none"
      >
        {children}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={textRef}
          className=" px-8 py-5 rounded-2xl"
        >
          <h2 className="text-gray-700 max-md:text-center font-semibold text-6xl tracking-wide" style={{
            WebkitTextStroke: '39px #f1e1e199',
            paintOrder: 'stroke markers fill',
            textShadow: '42px 35x 4px rgba(0,0,0,0.3)',
            WebkitTextStrokeColor: '#f1e1e199'
          }}>
            {label}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ComingSoonMask
