import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
// The import for 'react-icons/fa' has been removed and replaced with an inline SVG below.
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

// --- Utility Function (cn) ---
// Combines Tailwind classes conditionally and resolves conflicts.
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const testimonialsData = [
  {
    name: "Jabbar Sadique John (KSA)",
    role: "Ma’aden, Project Procurement Specialist",
    quote: "After disappointing experiences with 3 recruiters, Mr. Mubassir placed me at an Aramco-approved vendor. His contract reviews highlighted benefits I would have missed, including annual flight allowances."
  },
  {
    name: "Mohamed El Gharbawy (KSA)",
    role: "Ma’aden, Project Procurement Specialist",
    quote: "Mr. Mubassir's 15-year GCC procurement knowledge helped me transition from Egyptian markets to KSA's premium projects. His salary benchmarking ensured I wasn't lowballed as an expat hire."
  },
  {
    name: "Raheemuddin Khan (KSA)",
    role: "Ma’aden, QA/QC Principle Engineer",
    quote: "Mr. Mubassir's technical interviews were more rigorous than the client's! This thorough approach landed me a Principle Engineer role at 50% above my expected salary band."
  },
  {
    name: "Azeemuddin Shaik (KSA)",
    role: "SABIC, QA/QC Lead Engineer",
    quote: "Other recruiters wasted my time with mismatched roles. Mr. Mubassir's specialized matching found a QA/QC Lead position respecting my welding inspection expertise while tripling my Pakistan salary."
  },
  {
    name: "Hafiz Majid Nawaz (Riyadh, KSA)",
    role: "Ma’aden, Safety Engineer",
    quote: "From interview preparation to final offer negotiation, Mr. Mubassir Mohammed demonstrated why he's different. As a Safety Engineer now earning in SAR, I value how he explained every contract clause in simple terms before signing."
  },
];

// --- Testimonial Card Component ---
const TestimonialCard = ({ name, role, quote }) => (
  <div className="flex h-full flex-col flex-shrink-0 w-[90vw] sm:w-[450px] bg-white rounded-xl shadow-xl p-8 border border-slate-100 font-sans">
    {/* Replaced FaQuoteLeft with a simple inline SVG for compilation safety */}
    
    <blockquote className="text-slate-600 italic leading-relaxed mb-6 whitespace-normal flex-grow">
      "{quote}"
    </blockquote>
    <div className="mt-auto border-t border-slate-100 pt-4 text-left">
      <p className="font-bold text-lg text-slate-800 whitespace-normal">{name}</p>
      <p className="text-sm text-slate-500 whitespace-normal">{role}</p>
    </div>
  </div>
);

// --- Main Interactive Component ---
const InteractiveMarquee = () => {
  const contentRef = useRef(null);
  // State to pause the animation loop
  const [isPaused, setIsPaused] = useState(false);
  // MotionValue holds the current X position (shared by animation and drag)
  const x = useMotionValue(0); 

  // State to hold the dynamically calculated width of one set of content
  const [contentWidth, setContentWidth] = useState(0); 
  
  // Speed multiplier (adjust this to change speed)
  const SCROLL_SPEED = 2; // pixels per frame

  // 1. Calculate Content Width on Mount/Resize
  useEffect(() => {
    const updateWidth = () => {
      if (contentRef.current) {
        // We divide by 2 because the content is duplicated for the seamless loop
        // The scrollWidth includes the content width plus the gap (gap-8 = 32px * 4 = 128px)
        const totalContentWidth = contentRef.current.scrollWidth / 2;
        setContentWidth(totalContentWidth);
      }
    };

    // Delay necessary for card width calculation after initial render
    const timeoutId = setTimeout(updateWidth, 100); 
    window.addEventListener('resize', updateWidth);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  // 2. Continuous Animation Loop (Manual Marquee)
  useEffect(() => {
    let animationFrameId;

    const animateScroll = () => {
      if (!isPaused && contentWidth > 0) {
        let currentX = x.get();
        
        // Move left
        currentX -= SCROLL_SPEED;
        
        // If the content has scrolled past the reset point, reset X to 0
        if (currentX <= -contentWidth) {
          currentX = 0;
        }
        
        x.set(currentX);
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    // Start the manual animation loop
    animateScroll();

    // Cleanup: Stop the animation frame when the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, [x, isPaused, contentWidth]);

  // 3. Drag and Hover Handlers
  const handleDragStart = () => setIsPaused(true);
  const handleDragEnd = () => setIsPaused(false);
  
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // 4. Calculate Drag Constraints
  // Allows dragging from the start (0) to the end of the first content block (-contentWidth)
  const dragConstraints = contentWidth > 0 ? { left: -contentWidth, right: 0 } : { left: 0, right: 0 };

  return (
    <section className="bg-slate-50 w-full py-20 overflow-hidden font-sans">
      <div 
        className="relative w-full overflow-x-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={handleMouseEnter} // Pauses animation on hover
        onMouseLeave={handleMouseLeave} // Resumes animation on leave
      >
        <motion.div
          ref={contentRef}
          className="flex flex-row flex-nowrap gap-8 w-max"
          // Framer Motion automatically reads the X position from the 'x' MotionValue
          style={{ x }}
          // Drag properties allow manual swiping
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          onDragStart={handleDragStart} // Pause animation when dragging starts
          onDragEnd={handleDragEnd}     // Resume animation when dragging ends
        >
          {/* Render the full content list twice for a seamless loop */}
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
          {testimonialsData.map((testimonial, index) => (
            // Use a unique key for the second set
            <TestimonialCard key={`dup-${index}`} {...testimonial} />
          ))}
        </motion.div>
        
        {/* Fading Gradients for Polish */}
        <div className="absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50/100 via-slate-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50/100 via-slate-50/50 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default InteractiveMarquee;
