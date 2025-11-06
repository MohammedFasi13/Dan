import React, { useEffect, useRef, useState } from "react";
import Testimoninals from '../Animations/Testimonials';

// NOTE: You must have Tailwind CSS configured in your React project.
// The Remix Icons (ri-) are external dependencies (e.g., react-icons, or included via CDN).

// Custom CSS variables derived from the source HTML/CSS.
const customStyles = {
  // Define custom colors used in the original CSS/HTML for Tailwind to reference.
  "--danGreen": "#46b724",
  "--primary": "#46b724",
};

/*
 * ----------------------------------------------------------------------------------
 * NOTE: Required Custom CSS
 * The custom keyframe CSS for infinite scroll has been REMOVED.
 * Only the CSS for hiding the scrollbar is still needed if 'no-scrollbar'
 * is not a pre-configured Tailwind plugin in your project:
 * ----------------------------------------------------------------------------------
 * * .no-scrollbar::-webkit-scrollbar {
 * display: none;
 * }
 * .no-scrollbar {
 * -ms-overflow-style: none;
 * scrollbar-width: none;
 * }
 * ----------------------------------------------------------------------------------
 */

const TOTAL_SLIDES = 5; // Define the total number of slides for image carousel

const AboutUs = () => {
  // State for Image Carousel
  const [activeIndex, setActiveIndex] = useState(0);

  // Ref and State for Testimonial Scroll
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true); // Controls auto-scroll state
  const CARD_SCROLL_DISTANCE = 320 + 24; // min-w-[320px] + gap-6 (1.5rem = 24px)

  // Effect for Image Carousel Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % TOTAL_SLIDES);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Effect for Testimonial Auto-scroll (New Logic)
  useEffect(() => {
    let scrollInterval;
    if (isScrolling) {
      scrollInterval = setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } =
            scrollContainerRef.current;

          // Check if we are near the end of the scrollable content
          if (scrollLeft + clientWidth >= scrollWidth) {
            // Reset scroll position to 0 to loop
            scrollContainerRef.current.scrollLeft = 0;
          } else {
            // Scroll smoothly by one card distance
            scrollContainerRef.current.scrollBy({
              left: CARD_SCROLL_DISTANCE,
              behavior: "smooth",
            });
          }
        }
      }, 3000); // Auto-scroll interval
    }

    // Cleanup interval
    return () => clearInterval(scrollInterval);
  }, [isScrolling, CARD_SCROLL_DISTANCE]);

  // Functions for Image Carousel navigation
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % TOTAL_SLIDES);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + TOTAL_SLIDES) % TOTAL_SLIDES
    );
  };

  // Functions for Testimonial Manual navigation (New Logic)
  const scrollTestimonials = (direction) => {
    if (scrollContainerRef.current) {
      // Stop auto-scroll on manual interaction
      setIsScrolling(false);

      const scrollAmount =
        direction === "next" ? CARD_SCROLL_DISTANCE : -CARD_SCROLL_DISTANCE;

      // Scroll the container smoothly
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      // Re-enable auto-scroll after a short delay (optional, or rely on mouse leave)
      setTimeout(() => setIsScrolling(true), 10000);
    }
  };

  // Mouse events to pause/resume auto-scroll
  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  return (
    <div id="main" className="bg-white text-black" style={customStyles}>
      {/* About us text */}
      <h2 className="text-5xl  md:text-8xl mb-8 text-center pt-50 font-black ">
        <span className="text-[#46b724]">About</span>{" "}
        <span className="text-black">Us</span>
      </h2>

      {/* Image Carousal (Pure React / Tailwind CSS Component) */}
      <div id="indicators-carousel" className="relative w-full ">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden  rounded-lg md:h-[40rem]">
          {/* Item 1 */}
          <div
            className={`${
              activeIndex === 0 ? "block" : "hidden"
            } duration-700 ease-in-out`}
          >
            <img
              src="https://images.pexels.com/photos/7433850/pexels-photo-7433850.jpeg"
              className="absolute block w-full h-full object-cover  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Learning Language"
            />
          </div>
          {/* Item 2 */}
          <div
            className={`${
              activeIndex === 1 ? "block" : "hidden"
            } duration-700 ease-in-out`}
          >
            <img
              src="https://images.pexels.com/photos/7710148/pexels-photo-7710148.jpeg"
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Workplace Mediation"
            />
          </div>
          {/* Item 3 */}
          <div
            className={`${
              activeIndex === 2 ? "block" : "hidden"
            } duration-700 ease-in-out`}
          >
            <img
              src="https://images.pexels.com/photos/6340656/pexels-photo-6340656.jpeg"
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Online Conference"
            />
          </div>
          {/* Item 4 */}
          <div
            className={`${
              activeIndex === 3 ? "block" : "hidden"
            } duration-700 ease-in-out`}
          >
            <img
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Team Collaboration"
            />
          </div>
          {/* Item 5 */}
          <div
            className={`${
              activeIndex === 4 ? "block" : "hidden"
            } duration-700 ease-in-out`}
          >
            <img
              src="https://images.pexels.com/photos/7794078/pexels-photo-7794078.jpeg"
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Workplace Setting"
            />
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
          {[...Array(TOTAL_SLIDES)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                activeIndex === index
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white"
              }`}
              onClick={() => goToSlide(index)}
              aria-current={activeIndex === index}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slider Controls - Previous */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Slider Controls - Next */}
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <main id="company" className="max-w-7xl mx-auto ">
        {/* Hero Section */}
        <section className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Left Side */}
          <h2 className="text-5xl md:text-7xl mb-8 text-left mt-10 font-black ">
            <span className="text-black">Your Global Partner in</span>
            <span className="text-[#46b724]">HR & Manpower Excellence </span>
          </h2>

          {/* Right Side - Featured Articles (Vertical Scroll) */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 mt-4 text-[#46b724]">
              About DAN
            </h2>
            {/* The no-scrollbar class comes from the user's CSS for cross-browser scrollbar hiding. */}
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[400px] pr-2 no-scrollbar">
              {/* Card 1 */}
              <article className="bg-white border border-gray-200 rounded-xl shadow-md p-4">
                <p className="text-md ">
                  DAN International Solutions is a premier provider of
                  international recruitment, HR consulting, and workforce
                  management services, headquartered in Dammam, Kingdom of Saudi
                  Arabia. We deliver reliable and customized HR solutions to
                  businesses across Saudi Arabia, UAE, Qatar, Oman, India,
                  Europe, and Africa — enabling seamless cross-border hiring and
                  workforce optimization.
                </p>
              </article>
              {/* Card 2 */}
              <article className="bg-white border border-gray-200 rounded-xl shadow-md p-4">
                <p className="text-md ">
                  Founded with a vision to transform how global companies
                  attract and manage talent, DAN International Solutions offers
                  end-to-end services, including talent sourcing, staffing,
                  outsourcing, payroll, visa processing, and HR compliance. Our
                  approach blends human insight with AI-driven recruitment
                  technologies, ensuring smarter hiring, faster placements, and
                  cost-effective operations.
                </p>
              </article>
              {/* Card 3 */}
              <article className="bg-white border border-gray-200 rounded-xl shadow-md p-4">
                <p className="text-md ">
                  With a dedicated team of industry professionals and
                  recruiters, we serve organizations of all sizes — from
                  startups building their first team to multinational
                  enterprises expanding across regions. Our in-depth market
                  understanding and wide candidate network allow us to identify
                  the right talent, at the right time, for the right role.
                </p>
              </article>
              {/* Card 4 */}
              <article className="bg-white border border-gray-200 rounded-xl shadow-md p-4">
                <p className="text-md ">
                  What sets DAN International apart is our commitment to service
                  excellence, client trust, and people-first philosophy. We
                  focus on long-term partnerships, not just placements, and
                  pride ourselves on delivering flexible, scalable, and
                  culturally aligned HR solutions tailored to your specific
                  business goals.
                </p>
              </article>
              {/* Card 5 */}
              <article className="bg-white border border-gray-200 rounded-xl shadow-md p-4">
                <p className="text-md ">
                  From workforce planning to mobilization and retention, DAN
                  International Solutions is your trusted partner for managing
                  today’s workforce challenges and preparing for tomorrow’s
                  opportunities. Our global presence, local expertise, and
                  results-driven strategies position us as a leading force in
                  international HR and manpower consulting.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* text */}
        <h2
          className="text-2xl font-semibold mb-6 text-center mt-10"
          id="Testimonials"
        >
          Built on Trust.{" "}
          <span className="text-[#46b724]">Focused on People.</span> Powered by
          Opportunity.
        </h2>

        <h2 className="text-5xl font-black mb-6 text-center mt-20">
          SUCCESS STORY  
          <span className="text-[#46b724]">- Candidate Testimonials</span>{" "}
        </h2>

        {/* CARD START - Horizontal Scroll (Updated Section) */}
        <Testimoninals/>
        {/* END of CARD START - Horizontal Scroll */}

        {/* our vision */}
        <section
          id="mission-vision"
          className="bg-white py-16 px-4 sm:px-6 lg:px-20"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#46B724] mb-12">
              Our Mission & Vision
            </h2>

            <div className="grid gap-10 md:grid-cols-2">
              {/* Mission Card */}
              <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 border-l-4 border-[#46B724]">
                <h3 className="text-xl font-semibold text-[#46B724] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  To provide ethical, efficient, and cost-effective recruitment
                  and HR solutions that help global organizations find the right
                  talent and grow their business confidently.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 border-l-4 border-green-600">
                <h3 className="text-xl font-semibold text-green-600 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  To be recognized as a leading global HR and recruitment
                  services company, redefining hiring through AI-driven
                  recruitment structures that enable workforce mobility and
                  business expansion across the GCC and international markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* message */}
        <section id="founder" className="py-8 px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 leading-tight"
              id="mes"
            >
              A Message from the Heart of <br className="hidden md:block" />
              <span className="text-[#46b724]">DAN</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              <div className="flex justify-center w-full md:w-auto mt-12 md:mt-20 mb-6 md:mb-10">
                <div
                  className="w-[240px] sm:w-[280px] md:w-[360px] h-[240px] sm:h-[280px] md:h-[360px] shadow-2xl overflow-hidden"
                  style={{ clipPath: "circle(50% at 50% 50%)" }}
                >
                  <img
                    src="/assets/Mubassir-Mohammed.jpeg"
                    alt="Mubassir Mohammed"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Note: All text-danGreen classes are replaced with the hex code equivalent `text-[#46b724]` */}
              <div className="w-full bg-black/90 text-white p-5 sm:p-6 md:p-10 rounded-2xl transition duration-500 ease-in-out group hover:bg-[#46b724] hover:text-white">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">
                  Mubassir Mohammed
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-4">
                  Founder & Managing Director | DAN International Solutions
                </p>
                <p className="text-sm sm:text-base italic mb-6 border-l-4 border-[#46b724] group-hover:border-white pl-4">
                  “Where Talent Meets Opportunity”
                </p>

                {/* Emojis removed */}
                <h4 className="text-base sm:text-lg font-semibold text-[#46b724] group-hover:text-white">
                  Built on Trust. Focused on People. Powered by Opportunity.
                </h4>
                <p className="text-xs sm:text-sm mb-4">
                  With years of experience supporting global giants like Aramco,
                  NEOM, Ma’aden, SABIC, ADNOC, and Fortune 500 projects, I
                  started DAN International to fix what’s broken in global
                  recruitment.
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-1 text-xs sm:text-sm">
                  {/* Emojis removed */}
                  <li>
                    No Ghosting Policy: Every candidate hears back within 72
                    hours — regardless of status.
                  </li>
                  <li>
                    Zero False Promises: We’re upfront about salaries, visa
                    timelines, and requirements.
                  </li>
                  <li>
                    Military-Grade Compliance: 100% aligned with KSA Labour
                    Laws, GCC regulations, and international policies.
                  </li>
                </ul>

                {/* Emojis removed */}
                <h4 className="text-base sm:text-lg font-semibold text-[#46b724] group-hover:text-white">
                  What Makes Us Different
                </h4>
                <ul className="list-disc pl-5 mb-6 space-y-1 text-xs sm:text-sm">
                  {/* Emojis removed */}
                  <li>7–15 Day Placement Guarantee for critical roles</li>
                  <li>
                    95% Offer Acceptance Rate thanks to honest negotiations
                  </li>
                  <li>
                    AI-Driven Fraud Detection ensuring candidate profiles are
                    genuine
                  </li>
                </ul>
                <ul className="list-disc pl-5 mb-6 space-y-1 text-xs sm:text-sm">
                  {/* Emojis removed */}
                  <li>
                    Cultural Bridge: Pre-deployment orientation for seamless
                    integration in the GCC
                  </li>
                  <li>
                    Visa Command Center: Real-time status tracking from
                    application to Iqama issuance
                  </li>
                  <li>
                    Saudization Optimization: Helping businesses achieve and
                    maintain Nitaqat Green Tier status
                  </li>
                </ul>

                {/* Emojis removed */}
                <h4 className="text-base sm:text-lg font-semibold text-[#46b724] group-hover:text-white">
                  Our Ironclad Commitment
                </h4>
                <p className="italic text-xs sm:text-sm">
                  “While many treat candidates as numbers, we build careers —
                  not just payrolls.”
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-1 text-xs sm:text-sm">
                  {/* Emojis and plus symbols removed */}
                  <li>
                    3 Stage Skill Validation: Resume review + Technical Test +
                    Behavioral Interview
                  </li>
                  <li>
                    Right to Know Policy: 100% disclosure of employer and role
                    before interviews
                  </li>
                  <li>
                    90 Day Performance Warranty: We’ll replace a hire for free
                    if it doesn’t work out
                  </li>
                </ul>

                {/* Emojis removed */}
                <h4 className="text-base sm:text-lg font-semibold text-[#46b724] group-hover:text-white">
                  About Mubassir Mohammed
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  BBA in HRM | MBA on the Mark | Certified in Recruitment & HR{" "}
                  <br />
                  (LinkedIn, Naukri Maestro, Naukri Gulf & PMP Recruitment
                  Process Management) | CIPD & SHRM Aspirant | GCC & PAN India
                  Recruitment Specialist
                </p>

                <div className="text-xs sm:text-sm text-gray-300 pt-4 border-t border-gray-600 mt-4">
                  <strong>Connect with Me:</strong>
                  <div className="flex items-center gap-4 mt-2 text-lg">
                    <a
                href="https://www.linkedin.com/in/mubassirmohammed/"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/mubassir.mohammed.mm/"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://x.com/daninternat"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
              <a
                href="https://www.linkedin.com/safety/go?url=https%3A%2F%2Fx.com%2Fmubassir_mm%3Ft%3De1m1lOQetHIY4p0LS3UEoQ%26s%3D09&trk=flagship-messaging-web&messageThreadUrn=urn%3Ali%3AmessagingThread%3A2-OTA4ODU1NmMtNzFlNy00MmRlLWEyNzQtZDllNTg3MTNmOGQxXzAxMg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BcT8QeiW7Srq7fwy1UEL4Lg%3D%3D "
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-facebook-box-fill"></i>
              </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         <section id="why-dan" className="bg-white py-16 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    The DAN Difference <span className="text-[#46b724]">| Why Clients Rely on Us</span>
                </h2>

                <div className="space-y-8 text-gray-800 text-sm sm:text-base leading-relaxed">

                    {/* Fast Turnaround */}
                    <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-lg 
                                    transition-all duration-300 ease-in-out 
                                    hover:shadow-xl hover:-translate-y-2 hover:scale-[1.01] hover:bg-[#46b724] hover:text-white">
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-3 group-hover:text-white">
                            {/* Clock/Timer SVG Icon */}
                            <svg className="w-6 h-6 text-[#46b724] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Fast Turnaround Time – 3 to 19 Business Days
                        </h3>
                        <p>
                            At DAN International Solutions, we understand that speed is critical in today’s competitive recruitment landscape, especially across Saudi Arabia, UAE, Qatar, Oman, and other international markets. Our streamlined recruitment process enables us to fill both technical and non-technical positions within 3 to 19 business days, helping businesses minimize downtime and maintain smooth workforce operations.
                        </p>
                    </div>

                    {/* Success Rate */}
                    <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-lg 
                                    transition-all duration-300 ease-in-out 
                                    hover:shadow-xl hover:-translate-y-2 hover:scale-[1.01] hover:bg-[#46b724] hover:text-white">
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-3 group-hover:text-white">
                            {/* Chart/Graph SVG Icon */}
                            <svg className="w-6 h-6 text-[#46b724] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                            97% Placement Success Rate
                        </h3>
                        <p>
                            Our clients rely on us for consistent results, reflected in our 97% placement success rate. We excel at delivering accurate candidate matching while ensuring full local labor law compliance and cross-cultural alignment—key factors for sustainable hiring across diverse global markets. Our industry-focused recruiters bring deep sector expertise that drives successful talent acquisition outcomes.
                        </p>
                    </div>

                    {/* CV-to-Hire Ratio */}
                    <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-lg 
                                    transition-all duration-300 ease-in-out 
                                    hover:shadow-xl hover:-translate-y-2 hover:scale-[1.01] hover:bg-[#46b724] hover:text-white">
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-3 group-hover:text-white">
                            {/* Document/Paper SVG Icon */}
                            <svg className="w-6 h-6 text-[#46b724] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            High CV-to-Hire Conversion Ratio – 5:4
                        </h3>
                        <p>
                            We pride ourselves on a remarkable CV-to-hire ratio of 5:4, meaning for every 5 shortlisted candidates, 4 are successfully hired. This high conversion rate highlights our ability to precisely screen candidates, validate skills, and align talent with client requirements—saving valuable time, effort, and recruitment costs.
                        </p>
                    </div>

                    {/* Global Talent */}
                    <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-lg 
                                    transition-all duration-300 ease-in-out 
                                    hover:shadow-xl hover:-translate-y-2 hover:scale-[1.01] hover:bg-[#46b724] hover:text-white">
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-3 group-hover:text-white">
                            {/* Globe SVG Icon */}
                            <svg className="w-6 h-6 text-[#46b724] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v2.414M11 20.944A9.954 9.954 0 0110 21a9.96 9.96 0 01-5-1.405M14.945 13H17a2 2 0 002-2V8.586M21 21a9.96 9.96 0 00-5-1.405M12 21V3m0 0a9.96 9.96 0 005 1.405M12 3a9.96 9.96 0 01-5 1.405M3 10a9.96 9.96 0 015-1.405M21 10a9.96 9.96 0 00-5-1.405"></path>
                            </svg>
                            Access to Global Talent Across Asia, Africa, and Europe
                        </h3>
                        <p>
                            With an extensive network of recruitment partners and associates, DAN International Solutions offers clients seamless access to a vast global talent pool from key sourcing regions:
                        </p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                            <li>South Asia: India, Nepal, Bangladesh, Pakistan, Sri Lanka</li>
                            <li>Southeast Asia: Philippines</li>
                            <li>Africa: Nigeria, Kenya, Egypt, Tunisia, Morocco</li>
                            <li>Europe: Eastern and Central Europe</li>
                        </ul>
                        <p className="mt-2">
                            Our expert team manages the entire international hiring process—from visa processing and mobilization to documentation and onboarding—ensuring a smooth, compliant experience. This global reach empowers companies across the Middle East and GCC to hire skilled, semi-skilled, and unskilled professionals efficiently and with confidence.
                        </p>
                    </div>

                    {/* Why Employers Trust Us */}
                    <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-lg 
                                    transition-all duration-300 ease-in-out 
                                    hover:shadow-xl hover:-translate-y-2 hover:scale-[1.01] hover:bg-[#46b724] hover:text-white">
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-3 group-hover:text-white">
                            {/* Checkmark SVG Icon */}
                            <svg className="w-6 h-6 text-[#46b724] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Why Top Employers Trust Us:
                        </h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Fast & compliant hiring in Saudi Arabia, UAE, Oman, Kuwait, and Qatar</li>
                            <li>Expert recruitment for IT, Petrochemical, construction, oil & gas, healthcare, and engineering</li>
                            <li>Local & international manpower outsourcing</li>
                            <li>Visa, payroll, and HR legal support under one roof</li>
                            <li>Industry-specific recruiters with multilingual capability</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
