import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Utility function for smooth scrolling to sections (needed because React Router Link handles hash navigation differently)
  const handleLinkClick = (hash) => {
    // Only attempt to scroll if the hash exists in the URL after navigation
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If navigating to the base path, scroll to top
        window.scrollTo(0, 0);
      }
    }, 0);
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
          {/* Logo & Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-green-500">
                DAN International
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              DAN International Solutions is a licensed overseas recruitment and
              HR firm in Dammam, Saudi Arabia, Partnership with Sadaa Al Tamkeen
              HR Company. <br /> CR No: 2050214572.
            </p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>
                <i className="ri-phone-line text-pink-400 mr-1"></i> +966
                566280420
              </li>
              <li>
                <i className="ri-map-pin-line text-red-400 mr-1"></i> P.O. Box
                7529, Dammam 34271, KSA
              </li>
              {/* External link, stays as <a> */}
              <li>
                <a
                  href="https://ecr.mc.gov.sa/"
                  className="text-green-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-external-link-line mr-1"></i>Check CR on
                  Saudi Government Portal
                </a>
              </li>
            </ul>

            {/* Social Media Icons (External links, stay as <a>) */}
            <div className="flex items-center justify-center space-x-5 mt-4 text-gray-400 text-xl">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/daninternational/"
                className="text-white hover:text-green-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-linkedin-fill text-[22px]"></i>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/daninternationalsolutions"
                className="text-white hover:text-green-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-instagram-line text-[22px]"></i>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/daninternat"
                className="text-white hover:text-green-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-twitter-x-line text-[22px]"></i>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61577941017231"
                className="text-white hover:text-green-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-facebook-box-fill text-[22px]"></i>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@DANInternationalSolutions"
                className="text-white hover:text-green-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-youtube-fill text-[22px]"></i>
              </a>

              {/* Threads */}
              <a
                href="https://www.threads.net/@daninternationalsolutions"
                className=" hover:text-green-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 439.999 511.429"
                  fill="white"
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fillRule="nonzero"
                    d="M342.382 237.037a175.843 175.843 0 00-6.707-3.045c-3.947-72.737-43.692-114.379-110.428-114.805-38.505-.256-72.972 15.445-94.454 48.041l36.702 25.178c15.265-23.159 39.221-28.097 56.864-28.097.203 0 .408 0 .61.003 21.973.139 38.555 6.528 49.287 18.987 7.81 9.071 13.034 21.606 15.62 37.425-19.482-3.312-40.552-4.329-63.077-3.039-63.449 3.656-104.24 40.661-101.5 92.081 1.39 26.083 14.384 48.522 36.586 63.18 18.773 12.391 42.95 18.451 68.078 17.08 33.183-1.819 59.214-14.48 77.376-37.631 13.793-17.579 22.516-40.362 26.368-69.068 15.814 9.543 27.535 22.103 34.007 37.2 11.007 25.665 11.648 67.84-22.764 102.222-30.15 30.121-66.392 43.151-121.164 43.554-60.757-.45-106.707-19.934-136.582-57.914-27.976-35.563-42.434-86.93-42.973-152.675.539-65.745 14.997-117.113 42.973-152.675 29.875-37.979 75.824-57.464 136.581-57.914 61.197.455 107.948 20.033 138.967 58.195 15.21 18.713 26.677 42.248 34.236 69.688l43.011-11.476c-9.163-33.775-23.581-62.881-43.203-87.017C357.031 25.59 298.872.519 223.935 0h-.3C148.851.518 91.343 25.683 52.709 74.794 18.331 118.498.598 179.308.002 255.534l-.002.18.002.18c.596 76.226 18.329 137.037 52.707 180.741 38.634 49.11 96.142 74.277 170.926 74.794h.3c66.487-.462 113.352-17.868 151.96-56.442 50.511-50.463 48.991-113.717 32.342-152.548-11.944-27.847-34.716-50.464-65.855-65.402zm-114.795 107.93c-27.809 1.566-56.7-10.917-58.124-37.652-1.056-19.823 14.108-41.942 59.83-44.577 5.237-.302 10.375-.45 15.422-.45 16.609 0 32.146 1.613 46.272 4.702-5.268 65.798-36.173 76.483-63.4 77.977z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              {/* Internal links use Link */}
              <li>
                <Link
                  to="/about"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick()}
                >
                  Company Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/about#mission-vision"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick("#mission-vision")}
                >
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/about#founder"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick("#founder")}
                >
                  Meet the Founder
                </Link>
              </li>
              <li>
                <Link
                  to="/#faq-section"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick("#faq-section")}
                >
                  <i className="ri-question-line text-green-400 mr-1"></i>FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick()}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              {/* Linking to the /service route with specific hash IDs from the original HTML */}
              <li>
                <Link
                  to="/service#permanent-staffing"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick("#permanent-staffing")}
                >
                  Permanent & Temporary Staffing
                </Link>
              </li>
              <li>
                <Link
                  to="/service#BPO"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick("#BPO")}
                >
                  BPO/RPO & HR Outsourcing
                </Link>
              </li>
              <li>
                <Link
                  to="/service#Bulk"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick("#Bulk")}
                >
                  Bulk Recruitment for Mega Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/service#Executive-Search"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick("#Executive-Search")}
                >
                  Specialized Staffing Services
                </Link>
              </li>
              <li>
                <Link
                  to="/service#GCC-Visa"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick("#GCC-Visa")}
                >
                  Visa Processing & Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Policies</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              {/* Mapping to the new policy routes defined in App.jsx */}
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick()}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick()}
                >
                  Terms of Service
                </Link>
              </li>
              {/* Placeholder routes for compliance and usage, assuming they will be internal pages */}
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick()}
                >
                  Compliance & Policy Center
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/linkedin-usage"
                  className="hover:text-green-500"
                  onClick={() => handleLinkClick()}
                >
                  Official LinkedIn Usage
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Map, CTA & Certifications */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {/* Stay Updated */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-300 mb-3">
              Subscribe for job alerts & updates.
            </p>
            <Link
              to="/contact#contact"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm inline-block transition"
              onClick={() => handleLinkClick("#contact")}
            >
              Send Mail
            </Link>
          </div>

          {/* Visit Us + Map */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <div className="flex flex-col gap-4">
              {/* Left: Info */}
              <div className="w-full text-sm text-gray-300 space-y-2">
                <p>
                  <i className="ri-map-pin-2-line text-green-400 mr-1"></i> P.O.
                  Box 7529, Zuhair Ibn Qais, Ash Sulbah, Al Dammam - 34271
                </p>
                <p>
                  <i className="ri-map-pin-2-line text-green-400 mr-1"></i>
                  Hyderabad Office Address 22-8-85, City Civil Ct Rd, Nassir
                  Complex, Chatta Bazar, Darulshifa, Hyderabad, Telangana
                  500052, India
                </p>
                <p>
                  <i className="ri-time-line text-yellow-400 mr-1"></i> Monday
                  to Friday 7:00 AM – 5:00 PM
                </p>
                {/* External link, stays as <a> */}
                <a
                  href="https://www.google.com/maps/place/Al+Dammam+-+34271,+Saudi+Arabia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline inline-block"
                >
                  <i className="ri-map-line mr-1"></i>View on Map
                </a>
              </div>
            </div>
          </div>

          {/* ISO Certifications */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Our Certifications</h4>
            <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
              {" "}
              {/* Added justify-center for better alignment on small screens */}
              
              {/* --- CORRECTED PATHS START HERE --- */}
              <img
                src="/assets/humanCapital.jpeg"
                alt="ISO 9001 Certified"
                className="h-16 w-auto"
              />
              <img
                src="/assets/sio.jpeg"
                alt="ISO 14001 Certified"
                className="h-16 w-auto"
              />
              <img
                src="/assets/ism.jpeg"
                alt="ISO 45001 Certified"
                className="h-16 w-auto"
              />
              <img
                src="/assets/bcm.jpeg"
                alt="ISO 27001 Certified"
                className="h-16 w-auto"
              />
              <img
                src="/assets/cert.jpeg"
                alt="Another ISO Certification"
                className="h-16 w-auto"
              />
              <img
                src="/assets/healthSafety.jpeg"
                alt="Another ISO Certification"
                className="h-16 w-auto"
              />
              {/* --- CORRECTED PATHS END HERE --- */}

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-4 text-sm text-gray-500 text-center">
          © 2025 DAN International Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;