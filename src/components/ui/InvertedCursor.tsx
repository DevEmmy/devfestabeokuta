import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const InvertedCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is the size from your Tailwind class (w-7 = 1.75rem = 28px)
    const cursorSize = 28;
    const offset = cursorSize / 2;

    const move = (e: any) => {
      gsap.to(cursorRef.current, {
        // Center the cursor by subtracting half its size
        x: e.clientX - offset,
        y: e.clientY - offset,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    // This wrapper div gets the ref and all the positioning styles
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-7 h-7 z-[9999999] pointer-events-none"
      //   ^^^
      // 1. Added top-0 for consistency
      // 2. CRITICAL: Changed to pointer-events-none
      // 3. Kept your w-7 h-7 size
    >
      <Image
        src={'/./default-cursor.svg'}
        alt="cursor"
        width={100} // These props are for optimization, not final size
        height={100}
        className="w-full h-full" // This makes the image fill the 28px div
      />
    </div>
  );
};

export default InvertedCursor;