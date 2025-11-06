// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa'; 

// Import necessary components
import ScrollToTopButton from './Components/common/ScrollToTopButton';

// Import your layout and page components - ADJUSTED PATHS
import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';
import HomePage from './Components/Pages/HomePage';
import AboutUs from './Components/Pages/AboutUs';
import AreaOfExpertise from './Components/Pages/AreaofExpertise';
import OurClients from './Components/Pages/OurClients';
import ContactUs from './Components/Pages/ContactUs';
import OurTeam from './Components/Pages/OurTeam';
import Blogs from './Components/Pages/Blogs';
import GlobalTalentPool from './Components/Pages/GlobalTalentPool';
import OurService from './Components/Pages/OurService';

// --- Import all your individual blog post pages ---
import BlogPostOne from './Components/Pages/Blogs/BlogPostOne';
import BlogPostTwo from './Components/Pages/Blogs/BlogPostTwo';
import BlogPostThree from './Components/Pages/Blogs/BlogPostThree';
import BlogPostFour from './Components/Pages/Blogs/BlogPostFour';
import BlogPostFive from './Components/Pages/Blogs/BlogPostFive';
import BlogPostSix from './Components/Pages/Blogs/BlogPostSix';
import BlogPostSeven from './Components/Pages/Blogs/BlogPostSeven';
import BlogPostEight from './Components/Pages/Blogs/BlogPostEight';
import BlogPostNine from './Components/Pages/Blogs/BlogPostNine';
import BlogPostTen from './Components/Pages/Blogs/BlogPostTen';
import BlogPostEleven from './Components/Pages/Blogs/BlogPostEleven';
import BlogPostTwelve from './Components/Pages/Blogs/BlogPostTwelve';
import BlogPostThirteen from './Components/Pages/Blogs/BlogPostThirteen';
import BlogPostFourteen from './Components/Pages/Blogs/BlogPostFourteen';
import BlogPostFifteen from './Components/Pages/Blogs/BlogPostFifteen';
import BlogPostSixteen from './Components/Pages/Blogs/BlogPostSixteen';
import BlogPostSeventeen from './Components/Pages/Blogs/BlogPostSeventeen';
import BlogPostEighteen from './Components/Pages/Blogs/BlogPostEighteen';
import BlogPostNineteen from './Components/Pages/Blogs/BlogPostNineteen';
import BlogPostTwenty from './Components/Pages/Blogs/BlogPostTwenty';
import BlogPostTwentyOne from './Components/Pages/Blogs/BlogPostTwentyOne';
import BlogPostTwentyTwo from './Components/Pages/Blogs/BlogPostTwentyTwo';
import BlogPostTwentyThree from './Components/Pages/Blogs/BlogPostTwentyThree';
import BlogPostTwentyFour from './Components/Pages/Blogs/BlogPostTwentyFour';
import BlogPostTwentyFive from './Components/Pages/Blogs/BlogPostTwentyFive';
import BlogPostTwentySix from './Components/Pages/Blogs/BlogPostTwentySix';
import BlogPostTwentySeven from './Components/Pages/Blogs/BlogPostTwentySeven';
import BlogPostTwentyEight from './Components/Pages/Blogs/BlogPostTwentyEight';

import TermsAndConditions from './Components/Pages/TermsAndConditions';
import TermsAndConditionsSimple from './Components/Pages/TermsAndConditionsSimple';
import TermsOfService from './Components/Pages/TermsOfService';


function App() {
  return (
    <div>
      {/* The Navbar will be displayed on every page */}
      <Navbar />

      {/* The Routes component defines where the page content will be rendered */}
      <main>
        <Routes>
          {/* Each Route maps a URL path to a specific page component */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/expertise" element={<AreaOfExpertise />} />
          <Route path="/clients" element={<OurClients />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/blogs" element={<Blogs />} /> {/* Blogs list component */}
          <Route path="/talent" element={<GlobalTalentPool />} />
          <Route path="/service" element={<OurService />} />

          {/* --- Routes for each individual blog post (Correctly set up!) --- */}
          <Route path="/blog/how-gamca-works" element={<BlogPostOne />} />
          <Route path="/blog/avoid-trade-test-delays" element={<BlogPostTwo />} />
          <Route path="/blog/seamless-gulf-employment-guide" element={<BlogPostThree />} />
          <Route path="/blog/legal-protection-unlawful-fees" element={<BlogPostFour />} />
          <Route path="/blog/hire-1000-workers-in-30-days" element={<BlogPostFive />} />
          <Route path="/blog/ai-transforming-hr" element={<BlogPostSix />} />
          <Route path="/blog/strategic-workforce-transformation" element={<BlogPostSeven />} />
          <Route path="/blog/global-labor-law-compliance" element={<BlogPostEight />} />
          <Route path="/blog/winning-the-talent-war" element={<BlogPostNine />} />
          <Route path="/blog/recruitment-process-outsourcing" element={<BlogPostTen />} />
          <Route path="/blog/bpo-middle-east-india" element={<BlogPostEleven />} />
          <Route path="/blog/building-positive-workplace-culture" element={<BlogPostTwelve />} />
          <Route path="/blog/selecting-right-hrms" element={<BlogPostThirteen />} />
          <Route path="/blog/upskilling-your-workforce" element={<BlogPostFourteen />} />
          <Route path="/blog/hr-outsourcing-vs-in-house" element={<BlogPostFifteen />} />
          <Route path="/blog/leadership-development" element={<BlogPostSixteen />} />
          <Route path="/blog/secure-aramco-sabic-approvals" element={<BlogPostSeventeen />} />
          <Route path="/blog/saudi-arabia-vs-uae" element={<BlogPostEighteen />} />
          <Route path="/blog/cost-of-living-ksa-uae-qatar" element={<BlogPostNineteen />} />
          <Route path="/blog/iqama-transfer-process" element={<BlogPostTwenty />} />
          <Route path="/blog/permanent-residency-middle-east" element={<BlogPostTwentyOne />} />
          <Route path="/blog/end-of-service-benefits" element={<BlogPostTwentyTwo />} />
          <Route path="/blog/workplace-etiquette-gcc" element={<BlogPostTwentyThree />} />
          <Route path="/blog/understanding-job-collar-colors" element={<BlogPostTwentyFour />} />
          <Route path="/blog/how-to-find-job-globally" element={<BlogPostTwentyFive />} />
          <Route path="/blog/service-focused-blog-topics" element={<BlogPostTwentySix />} />
          <Route path="/blog/founders-desk-reinventing-hr" element={<BlogPostTwentySeven />} />
          <Route path="/blog/navigating-approvals-aramco-sabic" element={<BlogPostTwentyEight />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
          <Route path="/terms-and-conditions-simple" element={<TermsAndConditionsSimple/>} />
          <Route path="/terms-of-service" element={<TermsOfService/>} />
        </Routes>
      </main>
      
      {/* WHATSAPP FLOATING BUTTON (Aligned with right-6 and positioned higher at bottom-20) */}
      <a 
        href="https://chat.whatsapp.com/DmDsjyMk5xO4QReeYOY2qt" 
        target="_blank" 
        rel="noopener noreferrer" 
        // ALIGNMENT FIX: Changed positioning to bottom-20 right-6
        className="fixed bottom-20 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110" 
        aria-label="Join WhatsApp Group"
        title="Join our WhatsApp Group"
      >
        <FaWhatsapp size={24} /> 
      </a>
      
      {/* SCROLL-TO-TOP BUTTON (Aligned with right-6 and positioned lower by ScrollToTopButton.jsx) */}
      <ScrollToTopButton />
      
      <Footer />
    </div>
  );
}

export default App;