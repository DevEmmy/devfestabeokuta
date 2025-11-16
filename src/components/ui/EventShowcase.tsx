import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GetTicketButton from "./GetTicketButton";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface EventCard {
  title: string;
  bgImage: string;
  textColor: string;
  size: "large" | "small";
  image: string;
}

const EventShowcase: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Add card refs properly
  const addCardRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // Cards animation sequence with ScrollTrigger
    tl.fromTo(
      cardsRef.current,
      { opacity: 0, scale: 0.9, y: 10 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 116%",
          end: "top 20%",
          toggleActions: "play pause resume reverse"
        }
      }
    );

    // Button animation after cards with ScrollTrigger
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      },
      "-=0.4"
    );

    // Parallax effect on images
    cardsRef.current.forEach((card) => {
      const image = card.querySelector('img');
      if (image) {
        gsap.to(image, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        });
      }
    });

    // Hover effects
    const hoverEffects: (() => void)[] = [];

    cardsRef.current.forEach((card) => {
      const enter = () =>
        gsap.to(card, { scale: 1.04, duration: 0.3, ease: "power2.out" });

      const leave = () =>
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);

      hoverEffects.push(() => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    });

    // Cleanup
    return () => {
      hoverEffects.forEach(cleanup => cleanup());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Event grid data
  const events: EventCard[] = [
    {
      title: "Workshops",
      bgImage:
        "linear-gradient(135deg, rgba(255,182,193,0.6), rgba(219,112,147,0.4))",
      textColor: "text-pink-600",
      size: "large",
      image: "/private.jpg",
    },
    {
      title: "Conference",
      bgImage:
        "linear-gradient(135deg, rgba(255,239,186,0.6), rgba(255,215,0,0.4))",
      textColor: "text-yellow-600",
      size: "large",
      image: "/past1.jpg",
    },
    {
      title: "Hackathon",
      bgImage:
        "linear-gradient(135deg, rgba(186,230,186,0.6), rgba(144,238,144,0.4))",
      textColor: "text-green-600",
      size: "small",
      image: "/hackathon.jpg",
    },
    {
      title: "Private Network",
      bgImage:
        "linear-gradient(135deg, rgba(173,216,230,0.6), rgba(135,206,235,0.4))",
      textColor: "text-blue-600",
      size: "small",
      image: "/past4.jpg",
    },
  ];
  return (
    <div className="py-6  md:pt-20 md:pb-10">
      <div className="flex justify-center items-center pb-10">
        <div ref={containerRef} className="w-full ">

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-3">

            {events.map((event, index) => (
              <div
                key={index}
                ref={addCardRef}
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer group 
                  transition-all duration-300 border-[12px] md:border-[24px] border-spacing-x-12 border-[#1e1e1e]/90 border-double
                
                  ${index === 0 && "row-span-2"}
                  ${index === 1 && "row-span-1"}
                  ${index === 2 && ""}
                  row-span-1
                  ${event.size === "large" ? index === 0 || index === 1 ? "md:col-span-2 min-h-[290px]" : "col-span-1 md:col-span-2 min-h-[350px]" : "min-h-[290px] md:min-h-[195px]"}
                `}
                style={{
                  background: event.bgImage,
                }}
              >
                {/* Background Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 h-full w-auto min-h-[250px] object-cover scale-150"
                />

                {/* Title */}
                <div className="absolute inset-0 flex items-end p-6 lg:p-8">
                  <h2
                    className={`font-black drop-shadow-lg z-10 ${event.textColor}`}
                    style={{
                      WebkitTextStroke: "2px white",
                      paintOrder: "stroke fill",
                    }}
                  >
                    <span
                      className={`
                        block 
                        ${event.size === "large" ? "text-4xl md:text-6xl lg:text-7xl" : "text-4xl md:text-4xl"}
                      `}
                    >
                      {event.title}
                    </span>
                  </h2>
                </div>

                {/* Corner UI */}
                <Corners />
              </div>
            ))}
          </div>

          {/* Button Section */}
          <div className="grid place-items-center pt-10 md:pt-28" ref={buttonRef}>
            <GetTicketButton isIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable corner design
const Corners = () => (
  <>
    <div className="absolute top-2 left-2 w-4 h-4 border-l-4 border-t-4 border-black/50 rounded-tl-lg" />
    <div className="absolute top-2 right-2 w-4 h-4 border-r-4 border-t-4 border-black/40 rounded-tr-full" />
    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-4 border-b-4 border-black/40 rounded-bl-full" />
    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-4 border-b-4 border-black/40 rounded-br-full" />
  </>
);

export default EventShowcase;