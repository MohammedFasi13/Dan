import React from 'react';

const CoreClientsContent = () => {
  return (
    <div className="text-black font-sans min-h-screen bg-white">
      
      {/* NOTE: Navbar and Footer removed as requested. 
        Top padding adjusted from pt-32 to py-20 since the fixed navbar is gone. 
      */}

      {/* Main Content: Why Clients Choose Us Section */}
      <section className="w-full px-6 py-30 bg-white mt-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

          {/* Left Content */}
          <div className="flex-1">
            <h2 className="pt-4 text-4xl font-extrabold text-black sm:text-5xl leading-tight">
              Why <span className="text-[#46b724]">Clients Choose Us</span>
            </h2>

            <div className="mt-8 space-y-8 text-base text-gray-700">

              {/* Feature 1: Global Sourcing Network */}
              <div className="flex gap-4">
                <i className="ri-global-line text-2xl text-[#46b724] flex-shrink-0"></i>
                <div>
                  <h3 className="font-semibold text-black mb-1">Global Sourcing Network</h3>
                  <p>Tap into a rich, pre-vetted international talent pool:</p>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Skilled, semi-skilled, and unskilled workers</li>
                    <li>Executive and C-level professionals</li>
                    <li>Sourcing from India, Nepal, Bangladesh, Pakistan, the Philippines, Kenya, Nigeria, Egypt, Morocco, Sri Lanka, and beyond</li>
                  </ul>
                </div>
              </div>

              {/* Feature 2: Compliance & Licensing Assurance */}
              <div className="flex gap-4">
                <i className="ri-shield-check-line text-2xl text-[#46b724] flex-shrink-0"></i>
                <div>
                  <h3 className="font-semibold text-black mb-1">Compliance & Licensing Assurance</h3>
                  <p>We ensure 100% compliance with international labor laws and host country regulations:</p>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Visa processing & Iqama sponsorship (KSA)</li>
                    <li>GAMCA (Wafid) medicals, POE, and emigration clearance</li>
                    <li>Transparent, fully documented recruitment process</li>
                  </ul>
                </div>
              </div>

              {/* Feature 3: Industry-Specific Hiring Expertise */}
              <div className="flex gap-4">
                <i className="ri-building-2-line text-2xl text-[#46b724] flex-shrink-0"></i>
                <div>
                  <h3 className="font-semibold text-black mb-1">Industry-Specific Hiring Expertise</h3>
                  <p>We deliver sector-specialized recruitment for:</p>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Petrochemical, Construction, Civil Engineering, Oil & Gas, MEP, EPC</li>
                    <li>IT, Telecom, and Software Development</li>
                    <li>Healthcare, Hospitality, F&B, Logistics, and Manufacturing</li>
                  </ul>
                </div>
              </div>

              {/* Feature 4: High-Speed & Scalable Hiring Solutions */}
              <div className="flex gap-4">
                <i className="ri-rocket-2-line text-2xl text-[#46b724] flex-shrink-0"></i>
                <div>
                  <h3 className="font-semibold text-black mb-1">High-Speed & Scalable Hiring Solutions</h3>
                  <p>Whether you need 1 or 1,000 workers, our processes scale effortlessly:</p>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Bulk hiring for NEOM, Vision 2030, Jeddah Tower, King Salman Park, FIFA 2030</li>
                    <li>Trade-tested workers ready for immediate mobilization</li>
                    <li>Rapid deployment within 3–19 business days</li>
                  </ul>
                </div>
              </div>

              {/* Feature 5: Modern & Data-Driven Recruitment Process */}
              <div className="flex gap-4">
                <i className="ri-cpu-line text-2xl text-[#46b724] flex-shrink-0"></i>
                <div>
                  <h3 className="font-semibold text-black mb-1">Modern & Data-Driven Recruitment Process</h3>
                  <p>We blend human expertise with smart recruitment technologies:</p>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Advanced sourcing strategies via job boards, ATS & social media</li>
                    <li>Skill assessments, trade testing, and performance KPIs</li>
                    <li>Metrics like time-to-hire, cost-per-hire, and quality-of-hire</li>
                  </ul>
                </div>
              </div>

              {/* Feature 6: All-in-One HR Outsourcing Partner */}
              <div className="flex gap-4">
                <i className="ri-team-line text-2xl text-[#46b724] flex-shrink-0"></i>
                <div>
                  <h3 className="font-semibold text-black mb-1">All-in-One HR Outsourcing Partner</h3>
                  <p>DAN is your full-service provider for:</p>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Payroll outsourcing, HR consulting, and contract staffing</li>
                    <li>Executive search and leadership hiring</li>
                    <li>PRO support, onboarding & compliance in GCC countries</li>
                  </ul>
                </div>
              </div>

              {/* Feature 7: Startup Agility, Global Reach */}
              <div className="flex gap-4">
                <i className="ri-global-fill text-2xl text-[#46b724] flex-shrink-0"></i>
                <div>
                  <h3 className="font-semibold text-black mb-1">Startup Agility, Global Reach</h3>
                  <p>As a fast-growing HR consultancy, we are:</p>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Agile, responsive, and client-focused</li>
                    <li>Committed to cost-effective, high-impact results</li>
                    <li>Backed by a global network and proven track record</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 hidden lg:block">
            <img className="w-full h-[820px] object-cover rounded-2xl shadow-xl ring-1 ring-gray-300" src="https://images.pexels.com/photos/7550300/pexels-photo-7550300.jpeg" alt="HR App Preview" />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="max-w-7xl mx-auto px-6 py-0 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#46b724] underline underline-offset-4 mb-6">Our Clients</h2>

        <p className="text-md md:text-lg leading-relaxed max-w-4xl mx-auto mb-10 text-gray-700">
          DAN International is proud to serve a diverse and renowned client base across various industries. Our clients include respected companies in healthcare, construction, oil & gas, and education, showcasing our ability to deliver tailored recruitment solutions that drive impressive results. Explore our portfolio to discover why DAN International is the preferred choice for both established businesses and emerging organizations across Saudi Arabia and the global talent market.
        </p>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center mb-15">
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="https://umc-sa.com/wp-content/uploads/2024/08/logo.webp" alt="Client 1" className="h-20 object-contain" />
          </div>
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="https://expertindus.com/wp-content/uploads/2022/04/expertise-logo-1.png" alt="Client 2" className="h-20 object-contain" />
          </div>
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Logotype_de_DP_World.png" alt="Client 3" className="h-20 object-contain" />
          </div>
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXYbg-x3XLg0M1ZfN8CCIYrR2qyV3OuIH8BMJ5ZFjhqtJlw2-7wkzTWdy9edO8Kwrv7jo&usqp=CAU" alt="Client 4" className="h-20 object-contain" />
          </div>
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="http://watersealuae.com/wp-content/uploads/2021/10/Water-Seal-Logo.png" alt="Client 5" className="h-20 object-contain" />
          </div>
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="http://aicsteel.com/en/wp-content/uploads/2018/03/aic_logo.png" alt="Client 5" className="h-20 object-contain" />
          </div>
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="https://greatplacetowork.me/wp-content/uploads/2024/12/Mohammad-A.-Al-Habib-Partner-Co.-For-Real-Estate-Investment.png" alt="Client 5" className="h-20 object-contain" />
          </div>
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="https://www.dopet.com/wp-content/uploads/2023/02/DOPET-logoTP.png" alt="Client 5" className="h-20 object-contain" />
          </div>
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/1280px-HDFC_Bank_Logo.svg.png" alt="Client 5" className="h-20 object-contain" />
          </div>
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/1200px-PhonePe_Logo.svg.png" alt="Client 5" className="h-20 object-contain" />
          </div>
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/IDFC_First_Bank_logo.jpg" alt="Client 5" className="h-20 object-contain" />
          </div>
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="https://www.smasco.com/wp-content/uploads/2022/11/%D8%B3%D9%85%D8%A7%D8%B3%D9%83%D9%88.png" alt="Client 5" className="h-20 object-contain" />
          </div>
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="http://www.zamiloffshore.com/assets/frontend/images/logo.png" alt="Client 5" className="h-20 object-contain" />
          </div>
          <div className="bg-white shadow p-4 flex items-center justify-center rounded-xl transition hover:shadow-lg">
            <img src="https://www.al-aali.com/uploads/logo_20181012063705.jpg" alt="Client 5" className="h-20 object-contain" />
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default CoreClientsContent;