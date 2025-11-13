import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Image from "next/image";

const InvertedCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e : any) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 28, // offset for circle radius
        y: e.clientY - 28,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <Image
      src={'/./default-cursor.svg'}
      alt="cursor"
      width={100}
      height={100}
      ref={cursorRef}
      className=" fixed pointer-events-auto left-0  w-7 h-7  z-[9999999] "
      style={{
        // backdropFilter: "invert(1)",
        // WebkitBackdropFilter: "invert(1)",
      }}
    />
  );
};

export default InvertedCursor;