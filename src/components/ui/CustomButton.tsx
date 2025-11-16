"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { MdArrowOutward } from "react-icons/md";

interface CustomButtonProps {
  label?: string;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
  target?: "_blank" | "_self";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label = "Get Ticket",
  href = "#",
  icon,
  className = "",
  target = "_self",
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    // Initial mount animation
    gsap.fromTo(
      btn,
      { opacity: 0, scale: 0.9, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );

    // Hover and click effects
    const handleMouseEnter = () => {
      gsap.to(btn, {
        scale: 1.05,
        // backgroundColor: "#374151",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(arrowRef.current, { x: 6, y: -4, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        scale: 1,
        // backgroundColor: "#000",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        duration: 0.3,
        ease: "power3.inOut",
      });
      gsap.to(arrowRef.current, { x: 0, y: 0, duration: 0.3, ease: "power2.inOut" });
    };

    const handleMouseDown = () => {
      gsap.to(btn, { scale: 0.95, duration: 0.1, ease: "power1.inOut" });
    };

    const handleMouseUp = () => {
      gsap.to(btn, { scale: 1.05, duration: 0.2, ease: "power1.out" });
    };

    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("mousedown", handleMouseDown);
    btn.addEventListener("mouseup", handleMouseUp);

    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("mousedown", handleMouseDown);
      btn.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <Link href={href} target={target}>
      <button
        ref={btnRef}
        className={`${className} px-6 sm:px-8 lg:px-10 py-3 sm:py-4  rounded-full flex items-center gap-2 cursor-pointer text-sm lg:text-xl md:font-semibold sm:text-base transition-all duration-300`}
      >
        {icon && <span className="mr-2 flex items-center" >{icon}</span>}

        <span>{label}</span>

        {/* <div ref={arrowRef}>
          <MdArrowOutward size={20} />
        </div> */}
      </button>
    </Link>
  );
};

export default CustomButton;
