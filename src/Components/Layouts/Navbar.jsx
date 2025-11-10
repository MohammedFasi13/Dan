import React, { useState, useEffect, useRef, useCallback } from "react";
import "remixicon/fonts/remixicon.css";
import { NavLink, Link, useLocation } from "react-router-dom";

// --- Global Google Translate Initialization (CRITICAL) ---
window.googleTranslateElementInit = function () {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
      layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
    },
    "google_translate_element"
  );
};

// Function to dynamically load the Google Translate script
const loadGoogleTranslateScript = () => {
  if (!document.querySelector("#google-translate-script")) {
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(script);
  }
};

const Navbar = () => {
  // --- State Initialization ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const [isExpertiseDropdownOpen, setIsExpertiseDropdownOpen] = useState(false);
  const [isMobileAboutUsExpanded, setIsMobileAboutUsExpanded] = useState(false);
  const [isMobileExpertiseExpanded, setIsMobileExpertiseExpanded] =
    useState(false);

  // --- Refs for Click-Outside Logic ---
  const aboutUsDropdownRef = useRef(null);
  const expertiseDropdownRef = useRef(null);
  const translateContainerRef = useRef(null);
  const location = useLocation();

  // --- Helper Functions (Memoized) ---
  const closeDesktopDropdowns = useCallback(() => {
    setIsAboutUsDropdownOpen(false);
    setIsExpertiseDropdownOpen(false);
    setIsTranslateOpen(false);
  }, []);

  const closeMobileNestedMenus = useCallback(() => {
    setIsMobileAboutUsExpanded(false);
    setIsMobileExpertiseExpanded(false);
  }, []);

  const handleDropdownLinkClick = (isHashLink = false) => {
    closeDesktopDropdowns();
    closeMobileNestedMenus();

    if (isHashLink) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 100);
    } else {
      setIsMenuOpen(false);
    }
  };

  const toggleMobileNestedMenu = (menu) => {
    if (menu === "about") {
      setIsMobileAboutUsExpanded((prev) => !prev);
      setIsMobileExpertiseExpanded(false);
    } else if (menu === "expertise") {
      setIsMobileExpertiseExpanded((prev) => !prev);
      setIsMobileAboutUsExpanded(false);
    }
  };

  const toggleTranslate = () => {
    setIsTranslateOpen((prev) => !prev);
    setIsAboutUsDropdownOpen(false);
    setIsExpertiseDropdownOpen(false);
  };

  // Define navigation links and classes
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "bg-[#46B724] text-white px-2 py-0.5 text-sm rounded-full whitespace-nowrap"
      : "text-white hover:text-[#46B724] transition-colors px-2 py-0.5 text-sm whitespace-nowrap";

  const getMobileNavLinkClass = (path) =>
    location.pathname.startsWith(path) ? "text-[#46B724]" : "text-black";

  // Definition for mobile navigation structure (Unchanged)
  const mobileNavLinks = [
    { name: "Home", to: "/", type: "link" },
    {
      name: "About Us",
      type: "dropdown",
      isExpanded: isMobileAboutUsExpanded,
      toggle: () => toggleMobileNestedMenu("about"),
      links: [
        { name: "Company", to: "/about" },
        { name: "Our Services", to: "/service" },
        { name: "Recruitment Process", to: "/service#recruitment-process" },
        { name: "Testimonials", to: "/about#Testimonials" },
        { name: "Message From Director", to: "/about#founder" },
      ],
    },
    {
      name: "Area of Expertise",
      type: "dropdown",
      isExpanded: isMobileExpertiseExpanded,
      toggle: () => toggleMobileNestedMenu("expertise"),
      links: [
        { name: "SPECIALIZATIONS", to: "/service" },
        { name: "HR Solutions", to: "/expertise#hr-solutions" },
        { name: "IT Staffing", to: "/expertise#it-staffing" },
        { name: "Oil & Gas", to: "/expertise#oil-gas" },
        { name: "Construction", to: "/expertise#construction" },
      ],
    },
    { name: "Our Clients", to: "/clients", type: "link" },
    { name: "Our Team", to: "/team", type: "link" },
    { name: "Blogs", to: "/blogs", type: "link" },
    { name: "Global Talent", to: "/talent", type: "link" },
    { name: "Contact Us", to: "/contact", type: "link" },
  ];

  // --- Effects ---
  useEffect(() => {
    loadGoogleTranslateScript();

    if (isMenuOpen) {
      closeDesktopDropdowns();
      document.body.classList.add("mobile-menu-open");
    } else {
      closeMobileNestedMenus();
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMenuOpen, closeDesktopDropdowns, closeMobileNestedMenus]);

  // HASH SCROLLING EFFECT FIX (Unchanged)
  useEffect(() => {
    const { hash } = location;

    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const yOffset = -90; 
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [location]);

  // Scroll/Dropdown Close Logic (Unchanged)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (window.scrollY > 10) {
        closeDesktopDropdowns(); 
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [closeDesktopDropdowns]);

  // Click Outside Logic (Unchanged)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isMenuOpen) {
        // ... (desktop and translate logic remains the same) ...
        if (
          aboutUsDropdownRef.current &&
          !aboutUsDropdownRef.current.contains(event.target)
        ) {
          setIsAboutUsDropdownOpen(false);
        }
        if (
          expertiseDropdownRef.current &&
          !expertiseDropdownRef.current.contains(event.target)
        ) {
          setIsExpertiseDropdownOpen(false);
        }

        if (isTranslateOpen) {
          if (
            translateContainerRef.current &&
            !translateContainerRef.current.contains(event.target)
          ) {
            const isClickedInIframe = Array.from(
              document.querySelectorAll("iframe.goog-te-menu-frame")
            ).some((iframe) => {
              try {
                return iframe.contentDocument.documentElement.contains(
                  event.target
                );
              } catch (e) {
                return false;
              }
            });

            if (!isClickedInIframe) {
              setIsTranslateOpen(false);
            }
          }
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isTranslateOpen]);

  // --- Derived State for Readability (Unchanged) ---
  const isAboutUsActive =
    isAboutUsDropdownOpen ||
    location.pathname.startsWith("/about") ||
    location.pathname.startsWith("/service");

  const isExpertiseActive =
    isExpertiseDropdownOpen || location.pathname.startsWith("/expertise");

  // --- Render ---
  return (
    <>
      <style>
        {/* CSS for scroll lock and translate widget (Unchanged) */}
        {`
            .mobile-menu-open {
                overflow: hidden !important;
            }

            .goog-logo-link { display: none !important; }
            .goog-te-banner-frame { display: none !important; }

            #google_translate_element .goog-te-gadget {
                transition: opacity 0.3s, transform 0.3s;
                position: relative !important;
                display: block !important;
                height: 100% !important;
                width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
                background-color: transparent !important;
            }

            #google_translate_element {
                position: absolute;
                top: 100%; 
                right: 0; 
                margin-top: 8px; 
                z-index: 1050;
                transition: opacity 0.3s, transform 0.3s;
                transform-origin: top right;
                min-width: 200px;
            }

            .translate-closed #google_translate_element {
                opacity: 0;
                pointer-events: none;
                transform: scale(0.95) translateY(-5px);
            }

            .translate-open #google_translate_element {
                opacity: 1;
                pointer-events: auto;
                transform: scale(1) translateY(0);
            }
            
            .goog-te-gadget-simple {
                background-color: white !important;
                border: 1px solid #ccc !important;
                border-radius: 8px !important;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
                overflow: hidden !important;
                width: 100% !important;
                display: block !important;
            }
            
            .goog-te-gadget-simple span {
                color: transparent !important;
                font-size: 0 !important;
                line-height: 0 !important;
                display: block !important;
                padding: 0 !important; 
                margin: 0 !important;
            }

            .goog-te-gadget-simple .goog-te-menu-value {
                display: none !important;
            }

            .goog-te-menu-value:hover {
                background-color: transparent !important;
                box-shadow: none !important;
            }
        `}
      </style>

      {/* Top Announcement Bar (Unchanged) */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#46B724] text-white text-xs sm:text-sm font-medium z-[1000] transition-transform duration-300
                      ${scrolled ? "-translate-y-full" : "translate-y-0"} hidden sm:block
                `}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 text-center tracking-wide">
          Transparent Fees. Clear Jobs. Candidate CVs in 1–2 Days. 72-Hour
          Updates. 24/7 Support for Clients & Candidates.
        </div>
      </div>
      {/* End Top Announcement Bar */}

      <nav
        className={`fixed w-full flex items-center justify-center px-6 py-0 z-[1010] transition-all duration-300
                      ${
                        scrolled
                          ? "top-0 bg-white/5 backdrop-blur-md shadow-lg"
                          : "top-0 sm:top-[40px] bg-transparent"
                      }
                `}
      >
        <div className="max-w-7xl w-full flex items-center justify-between">
          {/* 1. Logo Section (Unchanged) */}
          <Link to="/" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-[url('/assets/logo.png')] bg-contain bg-no-repeat bg-center"
              aria-label="Home"
            ></div>
          </Link>

          {/* 2. Navigation Links Container (Desktop Centered - Unchanged) */}
          <div className="hidden xl:flex flex-grow justify-center mx-4">
            <div className="flex bg-black text-white rounded-full px-4 py-3 items-center gap-x-2 lg:gap-x-3 shrink flex-wrap lg:flex-nowrap justify-center">
              <NavLink to="/" className={getNavLinkClass}>
                Home
              </NavLink>

              {/* Desktop About Us Dropdown (Unchanged) */}
              <div className="relative" ref={aboutUsDropdownRef}>
                <button
                  onClick={() => {
                    setIsAboutUsDropdownOpen((prev) => !prev);
                    setIsExpertiseDropdownOpen(false);
                    setIsTranslateOpen(false);
                  }}
                  className={`px-2 py-0.5 text-sm rounded-full whitespace-nowrap flex items-center gap-1 transition-colors
                                      ${
                                        isAboutUsActive
                                          ? "bg-[#46B724] text-white"
                                          : "text-white hover:text-[#46B724]"
                                      }
                                    `}
                >
                  About Us
                  <i
                    className={`ri-arrow-down-s-line transition-transform duration-200 ${
                      isAboutUsDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  ></i>
                </button>
                {isAboutUsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 p-3 w-52 bg-white rounded-lg shadow-xl z-50">
                    <div className="flex flex-col gap-2">
                      {mobileNavLinks[1].links.map((link) => (
                        <Link
                          key={link.name}
                          to={link.to}
                          onClick={() => handleDropdownLinkClick(link.to.includes("#"))}
                          className="text-black hover:bg-[#46B724] hover:text-white px-3 py-2 rounded-md text-sm transition-colors whitespace-nowrap"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Desktop Expertise Dropdown (Unchanged) */}
              <div className="relative" ref={expertiseDropdownRef}>
                <button
                  onClick={() => {
                    setIsExpertiseDropdownOpen((prev) => !prev);
                    setIsAboutUsDropdownOpen(false);
                    setIsTranslateOpen(false);
                  }}
                  className={`px-2 py-0.5 text-sm rounded-full whitespace-nowrap flex items-center gap-1 transition-colors
                                      ${
                                        isExpertiseActive
                                          ? "bg-[#46B724] text-white"
                                          : "text-white hover:text-[#46B724]"
                                      }
                                    `}
                >
                  Area of Expertise
                  <i
                    className={`ri-arrow-down-s-line transition-transform duration-200 ${
                      isExpertiseDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  ></i>
                </button>
                {isExpertiseDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 p-3 w-52 bg-white rounded-lg shadow-xl z-50">
                    <div className="flex flex-col gap-2">
                      {mobileNavLinks[2].links.map((link) => (
                        <Link
                          key={link.name}
                          to={link.to}
                          onClick={() => handleDropdownLinkClick(link.to.includes("#"))}
                          className="text-black hover:bg-[#46B724] hover:text-white px-3 py-2 rounded-md text-sm transition-colors whitespace-nowrap"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/clients" className={getNavLinkClass}>
                Our Clients
              </NavLink>
              <NavLink to="/team" className={getNavLinkClass}>
                Our Team
              </NavLink>
              <NavLink to="/blogs" className={getNavLinkClass}>
                Blogs
              </NavLink>
              <NavLink to="/talent" className={getNavLinkClass}>
                Global Talent
              </NavLink>
              <NavLink to="/contact" className={getNavLinkClass}>
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* 3. Unified Action Icons (Right - Unchanged) */}
          <div className="nav-actions flex items-center gap-2 lg:gap-3 shrink-0">
            {/* TRANSLATE BUTTON */}
            <div
              className={`relative ${
                isTranslateOpen ? "translate-open" : "translate-closed"
              } 
                                      xl:block`}
              ref={translateContainerRef}
            >
              <button
                onClick={toggleTranslate}
                aria-label="Change Language"
                className={`bg-[#46B724] text-white w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full text-lg lg:text-xl hover:opacity-90 transition-opacity z-[1025] 
                                          ${
                                            isTranslateOpen
                                              ? "opacity-90"
                                              : ""
                                          }`}
              >
                <i className="ri-translate-2"></i>
              </button>

              <div id="google_translate_element" aria-hidden={!isTranslateOpen}>
                {/* Google will inject the actual scrollable language list here */}
              </div>
            </div>

            {/* Mobile Only: Hamburger Menu Icon */}
            <div
              className="hamburger xl:hidden flex flex-col gap-[6px] cursor-pointer z-[1030]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div
                className={`w-8 h-1 bg-[#46B724] rounded-full transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-[10px]" : ""
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-[#46B724] rounded-full transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-[#46B724] rounded-full transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-[10px]" : ""
                }`}
              ></div>
            </div>

            {/* Desktop Only: Contact Icons */}
            <a
              href="mailto:info@daninternational.com"
              aria-label="Email Us"
              className="bg-[#46B724] text-white w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full text-lg lg:text-xl hover:opacity-90 transition-opacity hidden xl:flex"
            >
              <i className="ri-mail-line"></i>
            </a>
            <a
              href="tel:+966566280420"
              aria-label="Call Us"
              className="bg-[#46B724] text-white w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full text-lg lg:text-xl hover:opacity-90 transition-opacity hidden xl:flex"
            >
              <i className="ri-phone-line"></i>
            </a>
          </div>

          {/* Mobile Menu (Full-Screen Overlay) */}
          <div
            // 🟢 FIX: Changed h-full to h-screen to ensure full viewport height on mobile 🟢
            className={`mobile-menu xl:hidden fixed top-0 right-0 h-screen w-full bg-white shadow-2xl z-[1020] transform transition-transform duration-300 overflow-y-auto
                                      ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                                    `}
          >
            <div className="flex flex-col p-6 space-y-4 pt-20">
              {mobileNavLinks.map((item, index) => (
                <div key={index}>
                  {item.type === "link" ? (
                    <NavLink
                      to={item.to}
                      className={`text-lg font-medium py-1 block ${getMobileNavLinkClass(
                        item.to
                      )}`}
                      onClick={() => handleDropdownLinkClick(item.to.includes("#"))}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <>
                      <div
                        className={`flex justify-between items-center text-lg font-medium py-1 cursor-pointer transition-colors
                                            ${
                                              item.isExpanded
                                                ? "text-[#46B724]"
                                                : "text-black"
                                            }
                                          `}
                        onClick={item.toggle}
                      >
                        {item.name}
                        <i
                          className={`ri-arrow-down-s-line transition-transform duration-200 ${
                            item.isExpanded ? "rotate-180" : "rotate-0"
                          }`}
                        ></i>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 
                                            ${
                                              item.isExpanded
                                                ? "max-h-96 opacity-100 mt-2"
                                                : "max-h-0 opacity-0"
                                            }
                                          `}
                      >
                        {item.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            to={link.to}
                            className="text-base text-gray-700 hover:text-[#46B724] py-1 block"
                            onClick={() => handleDropdownLinkClick(link.to.includes("#"))}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Overlay (Unchanged) */}
          {isMenuOpen && (
            <div
              className="overlay xl:hidden fixed inset-0 bg-black bg-opacity-50 z-[1015]"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;