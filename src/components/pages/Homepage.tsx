import React, { useEffect, useRef, FC } from 'react'; // Import FC (FunctionComponent)
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Your existing component imports
import Banner from '../ui/Banner';
import CountdownTimer from '../ui/CountdownTimer';
import PastEventsGallery from '../ui/PastEventsGallery';
import Agenda from '../ui/Agenda';
import SponsorCTA from '../ui/SponsorCTA';
import FAQ from '../ui/FAQ';
import AttendeeCardGenerator from '../ui/AttendeeCardGenerator'; // This is still commented out, as in your original
import Footer from '../ui/Footer';
import Gif from '../ui/Gif';
import Speaker from '../ui/Speaker';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Homepage: FC = () => {
  // Create a ref for the main container, typed for an HTMLElement
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Check if mainRef.current exists before proceeding
    if (!mainRef.current) return;

    // Select all direct children of the <main> element
    const sections: Element[] = gsap.utils.toArray(mainRef.current.children);

    // Loop over each section and apply a "fade-in-up" animation
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          autoAlpha: 0, // Start with opacity 0 and visibility: hidden
          y: 50,        // Start 50px down
        },
        {
          autoAlpha: 1, // Animate to opacity 1 and visibility: visible
          y: 0,         // Animate to original position
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section, // The element itself triggers the animation
            start: 'top 80%', // Start animation when top of section is 80% from top of viewport
            once: true,       // Only run the animation once
          },
        }
      );
    });

    // Optional: Add a very slight delay to the first element (Banner)
    if (sections.length > 0) {
      gsap.fromTo(
        sections[0],
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
      );
    }
    
    // Cleanup function for React
    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []); // Empty dependency array means this runs once on mount

  return (
    // Attach the ref to your main element
    <main className=' overflow-hidden' ref={mainRef}>
      <Banner />
      <CountdownTimer />
      <PastEventsGallery />
      <Agenda />
      <Speaker />
      <SponsorCTA />
      {/* <AttendeeCardGenerator /> */}
      <Gif />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Homepage;