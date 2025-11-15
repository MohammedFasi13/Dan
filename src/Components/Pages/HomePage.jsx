import React, { useState, useEffect, useRef } from "react";
// 🎯 FIX: Import Link from react-router-dom for proper client-side routing
import { Link } from 'react-router-dom';
import Carousel from './Carousel'
import {
  RiTeamFill,
  RiUserSearchFill,
  RiPassportFill,
  RiBuilding2Fill,
  RiMoneyDollarCircleFill,
  RiAddLine,
  RiSubtractLine,
  RiLinkedinFill,
  RiInstagramFill,
  RiTwitterXFill,
  RiFacebookFill,
} from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const HomePage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };


  const aboutUsText = `
    DAN International Solutions is an evolving provider of HR and manpower solutions across the Middle East, Asia, Europe, and Africa. Specializing in border and broader recruitment and talent acquisition, we help companies find and onboard semi-skilled, unskilled, and skilled professionals seamlessly and compliantly.
    \n\n
    Headquartered in Dammam, Saudi Arabia, we operate across key markets including Saudi Arabia, the UAE, Qatar, Oman, India, Europe, and Africa. Our strategic partnership with Sadaa Al Tamkeen Human Resources Company (CR 2050214572) allows us to ensure full legal compliance and market-specific expertise for every placement.
    \n\n
    By integrating AI-powered recruitment tools with deep regional insights, DAN simplifies hiring, accelerates time-to-hire, and enhances candidate quality for businesses of all sizes.
  `;

  const coreServices = [
    { icon: <RiTeamFill />, title: "Permanent & Temporary Staffing", desc: "Quality hires for long term roles and short term projects." },
    { icon: <RiUserSearchFill />, title: "BPO/RPO & HR Outsourcing", desc: "Cost effective HR, recruitment & payroll services." },
    { icon: <RiPassportFill />, title: "Bulk Recruitment for Mega Projects", desc: "High volume staffing for Construction, Oil & Gas, Infrastructure & EPC." },
    { icon: <RiBuilding2Fill />, title: "Specialized Staffing Services", desc: "IT, EPC, Oil & Gas, Finance, Healthcare & Civil Infrastructure." },
    { icon: <RiMoneyDollarCircleFill />, title: "Visa Processing & Compliance", desc: "End to end visa, mobilization & KSA/GCC labour law compliance support." },
  ];
  
  const faqData = [
      { q: "1. Is DAN International a registered company?", a: `Yes, DAN International Solutions operates under a valid Commercial Registration (CR No. 2050214572) in Saudi Arabia in partnership with Sadaa Al Tamkeen Human Resources Company, Dammam.<br>🔗 Check CR on Saudi Government Portal` },
      { q: "2. Does DAN International have a valid license in India?", a: "Our licensing process in India is currently under progress. We are in the final stages of obtaining all necessary approvals and licenses for domestic and international recruitment." },
      
      // --- MODIFIED FAQ ITEM 3 ---
      { 
        q: "3. Who is the founder of DAN International Solutions?", 
        a: `DAN International Solutions was founded by Mr. Mubassir Mohammed, a certified recruitment expert with extensive experience in international talent acquisition.<br><b>Expertise & Platforms:</b><br>LinkedIn Recruiter<br>Naukri (Maestro/Gulf)<br>PMP (Project Management Professional)<br><b>Connect with Mr. Mubassir Mohammed:</b>`,
        // We add a 'socials' array to render as components
        socials: [
          { icon: <RiLinkedinFill />, href: "https://www.linkedin.com/in/mubassir-mohammed-709894263/", label: "View Profile" },
          { icon: <RiInstagramFill />, href: "https://www.instagram.com/mubassir.mohammed.mm/", label: "@mubassir.mohammed.mm" },
          { icon: <RiTwitterXFill />, href: "https://x.com/MubassirMo89563", label: "@MubassirMo89563" },
          { icon: <RiFacebookFill />, href: "https://www.facebook.com/share/1CFWEXVxRP/", label: "Profile" }
        ]
      },
      // --- END OF MODIFIED ITEM ---

      { q: "4. Is DAN International an Indian or Saudi company?", a: "DAN International Solutions is a Saudi-based company, headquartered in Dammam, led by Mr. Mubassir Mohammed in partnership with a local Saudi sponsor." },
      { q: "5. What type of business model does DAN International follow?", a: "Operates as an LLC under the Saudi Ministry of Commerce with licensed HR partners." },
      { q: "6. What services does DAN International provide?", a: `<ul class="list-disc ml-5 space-y-1"><li>Overseas recruitment</li><li>Domestic staffing</li><li>Executive search</li><li>Contract staffing</li><li>Project-based manpower supply</li><li>Workforce outsourcing</li><li>Payroll & Compliance</li></ul>` },
      { q: "7. Which countries does DAN International recruit for?", a: "GCC: Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain. Others based on demand." },
      { q: "8. Does DAN International charge candidates for overseas jobs?", a: "No. We comply with Saudi labor law—no illegal/unauthorized charges." },
      { q: "9. Is DAN International licensed by the Saudi Ministry of Human Resources?", a: "Yes, via partnership with Sadaa Al Tamkeen Human Resources Company." },
      { q: "10. How can I apply for a job through DAN International?", a: `You can apply through:<br>Website: <a href="https://www.daninternationalsolutions.com" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">daninternationalsolutions.com</a><br>Email: <a href="mailto:info@daninternational.com" class="text-blue-500 hover:underline">info@daninternational.com</a><br>WhatsApp: +966 566280420` },
      { q: "11. Can clients or companies hire through DAN International?", a: "Absolutely. We provide end-to-end recruitment solutions for companies looking to hire skilled or unskilled manpower from India, Pakistan, Nepal, Philippines, and other countries." },
      { q: "12. Is DAN International compliant with Saudi Labor Laws?", a: "Yes. We operate in full compliance with Saudi labor regulations and guidelines set by the Ministry of Human Resources and Social Development (HRSD)." },
      { q: "13. Where is DAN International located?", a: `📍 Address: P.O. Box 7529, Zuhair Ibn Qais, Ash Sulbah, Dammam -34271, Saudi Arabia` },
      { q: "14. What industries does DAN International recruit for?", a: `<ul class="list-disc ml-5 space-y-1"><li>Construction & Engineering</li><li>EPC & Petrochemical</li><li>FMCG & Food and Beverages</li><li>Oil & Gas</li><li>Healthcare & Hospitals</li><li>Facility Management</li><li>Hospitality, Health Care & Aviation</li><li>Logistics & Warehousing</li><li>Manufacturing, Mining & Industrial</li></ul>` },
      { q: "15. Can I trust DAN International as a candidate or employer?", a: "Yes. With our valid registration, professional team, transparent process, and client partnerships, DAN International has built a reputation for integrity, reliability, and compliance." },
      { q: "16. Is DAN International currently hiring or accepting CVs?", a: "Yes, we are accepting CVs. Submit via website or email. Jobs posted on social media too." },
  ];

  return (
    <div className="bg-white">
      <main>
        {/* BANNER SECTION */}
        <section className="min-h-[70vh] flex items-center justify-center text-center py-35 mt-15 px- ">
          <div>
            <h1 className="text-6xl md:text-8xl lg:text-[10vh] font-extrabold text-gray-800">DAN</h1>
            <div className="text-4xl md:text-6xl lg:text-[8vh] font-bold text-[#46B724]">
              <span className="text-black">International</span> Solutions
            </div>
            <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              WHERE TALENT MEETS OPPORTUNITY <br />
              INTERNATIONAL WORKFORCE SOLUTIONS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="https://chat.whatsapp.com/DmDsjyMk5xO4QReeYOY2qt" target="_blank" rel="noopener noreferrer" className="bg-[#46B724] text-white font-semibold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                Get Started
              </a>
              <a href="#tools" className="bg-transparent text-[#46B724] font-semibold py-3 px-8 rounded-full border-2 border-[#46B724] transition-all hover:bg-[#46B724] hover:text-white">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* IMAGE CAROUSEL SECTION */}
        <section className=" bg-white">
          <div className="max-w-7xl mx-auto rounded-lg overflow-hidden shadow-2xl">
              <Carousel
                baseWidth={300}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
          </div>
        </section>

        {/* ABOUT US SECTION */}
        
<section id="about" className="py-20 px-4 bg-gray-50">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
      <span className="text-[#46B724]">About</span> <span className="text-black">Us</span>
    </h2>
    <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-10">
      Built on Trust, Focused on People, Powered by Opportunity.
    </h3>
    <p className="text-xl text-gray-600 leading-relaxed whitespace-pre-wrap">
      {aboutUsText}
    </p>
  </div>
</section>

        {/* CORE SERVICES SECTION */}
        <section id="tools" className="py-20 px-4 bg-white text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              Our <span className="text-[#46B724]">Core HR</span> Services
            </h2>
            <p className="text-lg text-gray-600 mt-4 mb-16">
              End-to-end workforce solutions across KSA, GCC & global markets — tailored to your business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <div key={index} className="group bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm text-left transition-all duration-300 hover:bg-[#46B724] hover:text-white hover:-translate-y-2">
                  <div className="text-4xl text-[#46B724] mb-4 transition-colors group-hover:text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-green-100">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq-section" className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
                <span className="text-[#46B724]">Frequently Asked</span><br />Questions
              </h2>
            </div>
            <div className="lg:w-2/3 h-[60vh] overflow-y-auto pr-4">
              {faqData.map((item, index) => (
                <div key={index} className="border-b border-gray-200 py-6">
                  <button onClick={() => handleFaqToggle(index)} className="w-full flex justify-between items-center text-left">
                    <h3 className="text-lg font-semibold text-gray-800">{item.q}</h3>
                    <span className="text-[#46B724] text-2xl">
                      {openFaqIndex === index ? <RiSubtractLine /> : <RiAddLine />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                    <div
                      className="text-gray-600 space-y-2" // <-- MODIFIED (added space-y-2)
                      dangerouslySetInnerHTML={{ __html: item.a }}
                    />

                    {/* --- ADDED THIS BLOCK TO RENDER SOCIALS --- */}
                    {item.socials && (
                      <div className="mt-4 flex flex-col space-y-3">
                        {item.socials.map((social, sIndex) => (
                          <a 
                            key={sIndex} 
                            href={social.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-3 text-blue-500 hover:underline transition-colors"
                          >
                            <span className="text-xl">{social.icon}</span>
                            <span>{social.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                    {/* --- END OF ADDED BLOCK --- */}

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORT CTA SECTION */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-700 to-[#46B724] rounded-3xl p-12 text-center text-white shadow-xl">
            <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full">
              End-to-End Workforce Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
              24/7 Operational Support – From Hiring to Payroll, We Deliver
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto mb-8">
              Full-service recruitment, visa processing, and HR management – we don’t just advise, we execute.
            </p>
            {/* 🎯 FIX APPLIED HERE: Using <Link> instead of <a> for internal routing */}
            <Link 
              to="/contact" 
              className="bg-white text-[#46B724] font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;