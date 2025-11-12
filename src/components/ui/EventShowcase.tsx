import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GetTicketButton from './GetTicketButton';

interface EventCard {
  title: string;
  bgImage: string;
  bgColor: string;
  textColor: string;
  size: 'large' | 'small';
}

const EventShowcase: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Animate cards with stagger
    gsap.fromTo(
      cardsRef.current,
      { 
        opacity: 0, 
        scale: 0.9,
        y: 30
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      }
    );

    // Animate button
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, delay: 1, ease: 'back.out(1.7)' }
    );

    // Hover animations for cards
    cardsRef.current.forEach((card) => {
      if (!card) return;
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.03,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }, []);

  const events: EventCard[] = [
    {
      title: 'Workshops',
      bgImage: 'linear-gradient(135deg, rgba(255, 182, 193, 0.6), rgba(219, 112, 147, 0.4))',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-600',
      size: 'large'
    },
    {
      title: 'Conference',
      bgImage: 'linear-gradient(135deg, rgba(255, 239, 186, 0.6), rgba(255, 215, 0, 0.4))',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      size: 'large'
    },
    {
      title: 'Hackathon',
      bgImage: 'linear-gradient(135deg, rgba(186, 230, 186, 0.6), rgba(144, 238, 144, 0.4))',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      size: 'small'
    },
    {
      title: 'Private Network',
      bgImage: 'linear-gradient(135deg, rgba(173, 216, 230, 0.6), rgba(135, 206, 235, 0.4))',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      size: 'small'
    }
  ];

  const icons = ['🎨', '✨', '🌐', '🔗', '💡', '🎯', '⭐', '🚀'];

  return (
    <div className="  flex items-center justify-center py-20">
      <div className="w-full">
        {/* Icons Row */}
        

        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Workshops - Large Left */}
          <div
            ref={(el : any) => (cardsRef.current[0] = el)}
            className=" col-span-1 relative overflow-hidden rounded-2xl cursor-pointer group"
            style={{
              background: events[0].bgImage,
              minHeight: '400px',
              border: '4px dashed black'
            }}
          >
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-end p-8">
              <h2 className={`text-6xl font-black ${events[0].textColor} drop-shadow-lg relative z-10`}
                  style={{
                    WebkitTextStroke: '2px white',
                    paintOrder: 'stroke fill'
                  }}>
                {events[0].title}
              </h2>
            </div>
            {/* Corner Handles */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-4 border-t-4 border-black" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-4 border-t-4 border-black" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-4 border-b-4 border-black" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-4 border-b-4 border-black" />
          </div>

          {/* Conference - Large Right Top */}
         <div className='grid grid-cols-2 gap-4 '>
           <div
            ref={(el : any) => (cardsRef.current[1] = el)}
            className="relative col-span-2 overflow-hidden rounded-2xl cursor-pointer group"
            style={{
              background: events[1].bgImage,
              minHeight: '292px',
              border: '4px dashed black'
            }}
          >
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <h2 className={`text-5xl font-black ${events[1].textColor} drop-shadow-lg relative z-10`}
                  style={{
                    WebkitTextStroke: '2px white',
                    paintOrder: 'stroke fill'
                  }}>
                {events[1].title}
              </h2>
            </div>
            {/* Corner Handles */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-4 border-t-4 border-black" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-4 border-t-4 border-black" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-4 border-b-4 border-black" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-4 border-b-4 border-black" />
          </div>

          {/* Hackathon - Small Right Bottom Left */}
          <div
            ref={(el : any) => (cardsRef.current[2] = el)}
            className="relative col-span-1 overflow-hidden rounded-2xl cursor-pointer group"
            style={{
              background: events[2].bgImage,
              minHeight: '222px',
              border: '4px dashed black'
            }}
          >
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-end p-6">
              <h2 className={`text-4xl font-black ${events[2].textColor} drop-shadow-lg relative z-10`}
                  style={{
                    WebkitTextStroke: '2px white',
                    paintOrder: 'stroke fill'
                  }}>
                {events[2].title}
              </h2>
            </div>
            {/* Corner Handles */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-4 border-t-4 border-black" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-4 border-t-4 border-black" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-4 border-b-4 border-black" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-4 border-b-4 border-black" />
          </div>

          {/* Private Network - Small Right Bottom Right */}
          <div
            ref={(el : any) => (cardsRef.current[3] = el)}
            className="relative col-span-1 overflow-hidden rounded-2xl cursor-pointer group"
            style={{
              background: events[3].bgImage,
              minHeight: '192px',
              border: '4px dashed black'
            }}
          >
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-end p-6">
              <h2 className={`text-4xl font-black ${events[3].textColor} drop-shadow-lg relative z-10 leading-tight`}
                  style={{
                    WebkitTextStroke: '2px white',
                    paintOrder: 'stroke fill'
                  }}>
                {events[3].title}
              </h2>
            </div>
            {/* Corner Handles */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-4 border-t-4 border-black" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-4 border-t-4 border-black" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-4 border-b-4 border-black" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-4 border-b-4 border-black" />
          </div>
         </div>
        </div>



        <div className='grid place-items-center pt-10'>
          <GetTicketButton />
        </div>

        </div>
    </div>
  );
};

export default EventShowcase;