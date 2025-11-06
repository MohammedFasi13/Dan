import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';

const ScrollToTopButton = () => {
    // State to manage the visibility of the button
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll the window to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    };

    // Effect to handle button visibility based on scroll position
    useEffect(() => {
        // Function to check scroll position
        const toggleVisibility = () => {
            // Show button if user has scrolled down at least 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            // FIX 1: Aligned to right-6 and positioned at bottom-6
            // FIX 2: className condensed to prevent ReferenceError from multi-line template literal
            className={`fixed bottom-6 right-6 bg-[#46B724] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-xl z-[999] transition-opacity duration-300 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            aria-label="Scroll to top"
            title="Scroll to Top"
        >
            <i className="ri-arrow-up-line"></i>
        </button>
    );
};

export default ScrollToTopButton;