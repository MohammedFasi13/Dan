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
            <div className="flex space-x-4 mt-4 text-xl">
              <a
                href="https://www.linkedin.com/company/daninternational/"
                className="hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/daninternationalsolutions"
                className="hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://x.com/daninternat"
                className="hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61577941017231 "
                className="hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-facebook-box-fill"></i>
              </a>
              {/* Correct YouTube icon with the correct link and a hover effect */}
              <a
                href="https://www.youtube.com/@DANInternationalSolutions"
                className="hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-youtube-fill"></i>
              </a>{" "}
              {/* Changed to ri-youtube-fill for a solid icon */}
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
              <img
                src="src\assets\humanCapital.jpeg"
                alt="ISO 9001 Certified"
                className="h-16 w-auto"
              />
              <img
                src="src\assets\sio.jpeg"
                alt="ISO 14001 Certified"
                className="h-16 w-auto"
              />
              <img
                src="src\assets\ism.jpeg"
                alt="ISO 45001 Certified"
                className="h-16 w-auto"
              />
              <img
                src="src\assets\bcm.jpeg"
                alt="ISO 27001 Certified"
                className="h-16 w-auto"
              />
              <img
                src="src\assets\cert.jpeg"
                alt="Another ISO Certification"
                className="h-16 w-auto"
              />
              <img
                src="src\assets\healthSafety.jpeg"
                alt="Another ISO Certification"
                className="h-16 w-auto"
              />
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
