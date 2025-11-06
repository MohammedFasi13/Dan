import React, { useState } from 'react';

// Define the primary color constant based on the original CSS variable
const PRIMARY_COLOR = '#46b724';

const OurService = () => {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  // Function to handle the form submission (for completeness, though functionality is limited here)
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form data submission here
    alert("Form submission is simulated. Please integrate a backend service.");
  };
  
  // Custom Tailwind classes for the vertical timeline process steps
  const StepNumber = ({ number }) => (
    <div className="absolute left-1/2 transform -translate-x-1/2 md:flex items-center justify-center w-12 h-12 rounded-full bg-[#46b724] text-white font-bold text-xl z-10 hidden">
      {number}
    </div>
  );

  const StepContent = ({ children, isRightAligned }) => (
    <div className={`w-full md:w-5/12 p-6 rounded-xl shadow-lg bg-white relative transition duration-500 hover:shadow-xl ${isRightAligned ? 'md:ml-auto' : 'md:mr-auto'}`}>
      {children}
    </div>
  );

  return (
    <div className="bg-white text-black font-sans">
      
      {/* All Services Section */}
      <section id="all-services" className="px-6 py-30 scroll-mt-24">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-14 animate-fade-up mt-15">
          All <span className="text-[#46b724] ">HR Services</span> at one Go
        </h2>

        {/* Service Blocks */}
        <div className="space-y-24">
          
          {/* Service 1: Permanent & Temporary Staffing */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <img src="https://img.freepik.com/free-photo/positive-business-people-working-with-diagram-office_1262-15085.jpg?uid=R155181765&ga=GA1.1.1657592745.1694377776&semt=ais_hybrid&w=740" alt="Staffing" className="w-full lg:w-1/2 rounded-xl shadow-lg" />
            <div className="lg:w-1/2" id="permanent-staffing">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <i className="ri-user-star-line text-[#46b724] text-2xl"></i>
                Permanent & Temporary Staffing
              </h3>
              <p className="text-gray-700 mb-2">Saudization-Optimized Workforce Solutions
              We deliver compliant long-term and contract staffing for Oil & Gas, IT, and Healthcare sectors, with:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>97% retention rate (vs. industry 82% average)</li>
                <li>7-day placement guarantee for critical roles</li>
                <li>Nitaqat Green Tier compliance assurance</li>
                <li>90-day free replacement policy</li>
              </ul>
              <br/>
              <p>Ideal for: Project surges, seasonal demands, and permanent hires with legally vetted contracts.</p>
            </div>
          </div>

          {/* Service 2: BPO/RPO & HR Outsourcing */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center" id="BPO">
            <img src="https://img.freepik.com/free-photo/colleagues-working-together-call-center-office_23-2149256064.jpg?uid=R155181765&ga=GA1.1.1657592745.1694377776&semt=ais_hybrid&w=740" alt="Outsourcing" className="w-full lg:w-1/2 rounded-xl shadow-lg" />
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <i className="ri-hand-coin-line text-[#46b724] text-2xl"></i>
                BPO/RPO & HR Outsourcing
              </h3>
              <p className="text-gray-700 mb-2">End-to-End HR Operations Managed for You
              Leverage our AI-powered Recruitment Process Outsourcing (RPO) and payroll systems to:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Reduce HR costs by 30-50% through GCC-optimized outsourcing</li>
                <li>Ensure 100% WPS/GST compliance with automated payroll</li>
                <li>Achieve Saudization targets through strategic Nitaqat planning</li>
                <li>Scale rapidly with dedicated RPO teams for IT, Healthcare & EPC sectors</li>
              </ul>
              <br/>
              <p>Featured Solutions: </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>High-Volume Hiring: Process 500+ CVs/month with AI screening </li> 
                <li> Employer of Record (EOR): Compliant workforce sponsorship </li> 
                <li> HR Tech Stack Integration: Seamless payroll-to-onboarding systems</li>
              </ul>
            </div>
          </div>

          {/* Service 3: Bulk Recruitment Solutions */}
          <div className="flex flex-col lg:flex-row gap-12 items-center" id="Bulk">
            <img src="https://img.freepik.com/free-photo/businessman-touching-red-icon-connected_1232-176.jpg?uid=R155181765&ga=GA1.1.1657592745.1694377776&semt=ais_hybrid&w=740" alt="Bulk Hiring" className="w-full lg:w-1/2 rounded-xl shadow-lg" />
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <i className="ri-team-line text-[#46b724] text-2xl"></i>
                Bulk Recruitment Solutions
              </h3>
              <p className="text-gray-700 mb-2">Rapid, compliant staffing for large-scale projects</p>
              <p className="text-gray-700 mb-2">Pre-screened candidates: Trade-tested for skills</p>
              <p className="text-gray-700 mb-2">End-to-end mobilization: Visas, travel, accommodation</p>
              <p className="text-gray-700 mb-2">Saudization-focused: Meet Nitaqat targets</p>
              <p className="text-gray-700 mb-2">AI-powered matching: Faster hiring</p>
              <p className="text-gray-700 mb-2">Our edge:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Founder-led quality control</li>
                <li>100% labor law compliance</li>
                <li>No candidate fees</li>
              </ul>
            </div>
          </div>

          {/* Service 4: Executive Search & Leadership Hiring */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center" id="Executive Search">
            <img src="https://img.freepik.com/premium-photo/magnify-lens-only-few-suitable-candidates-workplace_207634-3466.jpg?w=826" alt="Executive Search" className="w-full lg:w-1/2 rounded-xl shadow-lg" />
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <i className="ri-briefcase-4-line text-[#46b724] text-2xl"></i>
                Executive Search & Leadership Hiring
              </h3>
              <p className="text-gray-700 mb-2">Discreet, data-led recruitment for GCC's top talent</p>
              <p className="text-gray-700 mb-2">Salary benchmarking: GCC-specific compensation insights</p>
              <p className="text-gray-700 mb-2">Global talent mapping: Active and passive candidates</p>
              <p className="text-gray-700 mb-2">Confidential processes: Secure candidate handling</p>  
              <p className="text-gray-700 mb-2">Why us:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Founder-led senior placements</li>
                <li>30% faster than industry average</li>
                <li>Pre-vetted shortlists in 10 days</li>
              </ul>
            </div>
          </div>

          {/* Service 5: Specialized Staffing Solutions */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <img src="https://img.freepik.com/free-photo/handshake-businessmen_23-2147704547.jpg?t=st=1750854043~exp=1750857643~hmac=fdbbdeeccb500b058ef6fadcd24022d58dd6230232821f8b8222c60be8b9b31e&w=826" alt="Specialized Staffing" className="w-full lg:w-1/2 rounded-xl shadow-lg" />
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <i className="ri-stack-line text-[#46b724] text-2xl"></i>
                Specialized Staffing Solutions
              </h3>
              <p className="text-gray-700 mb-2">Right-fit talent for technical sectors - faster and compliant</p>
              <p className="text-gray-700 mb-2">Industry-specific hiring: IT, Healthcare, EPC, Finance & Infrastructure</p>
              <p className="text-gray-700 mb-2">AI-powered screening: 90% CV-to-interview accuracy</p>
              <p className="text-gray-700 mb-2">Trade test support: GCC-certified skill validation</p>
              <p className="text-gray-700 mb-2">Pan-GCC & India recruitment: Single-point solution</p>
              <p className="text-gray-700 mb-2">Why choose us:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>15-day average placement time</li>
                <li>100% labor law compliance</li>
                <li>Founder-vetted candidate shortlists</li>
              </ul>
            </div>
          </div>

          {/* Service 6: GCC Visa & Compliance Services */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center" id="GCC Visa">
            <img src="https://img.freepik.com/free-photo/visa-application-form-laptop-tablet_23-2149117770.jpg?t=st=1750854102~exp=1750857702~hmac=291ee60944455757a5e55fd3cbbf1c9bd3f26586413bd0de742a1d23887e4d4e&w=826" alt="Visa" className="w-full lg:w-1/2 rounded-xl shadow-lg" />
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <i className="ri-passport-line text-[#46b724] text-2xl"></i> 
                GCC Visa & Compliance Services | 98% Approval Rate
              </h3>
              <p className="text-gray-700 mb-2">Fast-track KSA, UAE, Qatar work visas with end-to-end processing. Expert WPS, Nitaqat, and labor law compliance. Dedicated PRO teams for smooth approvals.</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>98% Success Rate</li>
                <li>GCC Compliance Assurance</li>
                <li>PRO Support</li>
              </ul>
              <br/>
              <h2 className="text-1xl font-bold ">Simplify immigration. <span className="text-[#46b724]">Stay compliant.</span> </h2>
            </div>
          </div>

        </div>
      </section>

      {/* Core Services Section */}
      <section id="core-services" className="px-6 py-12">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 transition-all duration-700">
          Our <span className="text-[#46b724]">Core HR Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Permanent & Temporary Staffing */}
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#46b724]">
            <h3 className="text-2xl font-semibold text-[#46b724] mb-4 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
              <i className="ri-briefcase-line"></i> Permanent & Temporary Staffing
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 transition-colors duration-300 group-hover:text-white">
              <li>Long-term and short-term project staffing</li>
              <li>97% retention rate in GCC</li>
              <li>Saudization-compliant placements</li>
              <li>Engineering, Healthcare, IT hires</li>
            </ul>
          </div>

          {/* Card 2: BPO/RPO & HR Outsourcing */}
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#46b724]">
            <h3 className="text-2xl font-semibold text-[#46b724] mb-4 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
              <i className="ri-customer-service-2-line"></i> BPO/RPO & HR Outsourcing
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 transition-colors duration-300 group-hover:text-white">
              <li>Full-cycle RPO with Saudization focus</li>
              <li>WPS-compliant payroll systems</li>
              <li>CLRA, GST, and EPFO compliance</li>
              <li>AI-driven HR tools and tracking</li>
            </ul>
          </div>

          {/* Card 3: Bulk Recruitment */}
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#46b724]">
            <h3 className="text-2xl font-semibold text-[#46b724] mb-4 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
              <i className="ri-group-line"></i> Bulk Recruitment
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 transition-colors duration-300 group-hover:text-white">
              <li>500+ hires in 30 days for mega projects</li>
              <li>NEOM, Red Sea, FIFA 2030 staffing</li>
              <li>Pre-screened, trade-tested labor</li>
              <li>Visa, medical & mobilization handled</li>
            </ul>
          </div>

          {/* Card 4: Executive Search */}
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#46b724]">
            <h3 className="text-2xl font-semibold text-[#46b724] mb-4 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
              <i className="ri-user-search-line"></i> Executive Search
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 transition-colors duration-300 group-hover:text-white">
              <li>C-Suite, NRI and GCC leaders</li>
              <li>Discreet and confidential outreach</li>
              <li>Talent mapping & compensation benchmarking</li>
              <li>Cross-border placements</li>
            </ul>
          </div>

          {/* Card 5: Specialized Staffing */}
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#46b724]">
            <h3 className="text-2xl font-semibold text-[#46b724] mb-4 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
              <i className="ri-tools-line"></i> Specialized Staffing
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 transition-colors duration-300 group-hover:text-white">
              <li>Tech, EPC, Healthcare, Finance, Civil</li>
              <li>Trade test & compliance support</li>
              <li>Pan-India and GCC sourcing</li>
              <li>AI-driven CV vetting & payroll</li>
            </ul>
          </div>

          {/* Card 6: Visa & Compliance */}
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#46b724]">
            <h3 className="text-2xl font-semibold text-[#46b724] mb-4 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
              <i className="ri-file-paper-line"></i> Visa & Compliance
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 transition-colors duration-300 group-hover:text-white">
              <li>Work visa processing & mobilization</li>
              <li>Iqama, MOFA, GAMCA coordination</li>
              <li>Labor law compliance for KSA/UAE/Qatar</li>
              <li>Real-time tracking and alerts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Learn More Collapsible Content */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex justify-end">
          <button 
            className="bg-[#46b724] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition"
            onClick={() => setIsLearnMoreOpen(!isLearnMoreOpen)}
          >
            {isLearnMoreOpen ? 'Hide Details' : 'Learn More'}
          </button>
        </div>

        <div id="learnMoreContent" className={`${isLearnMoreOpen ? 'block' : 'hidden'} w-full mt-4 bg-white shadow-md text-base text-gray-800 transition-all duration-500 ease-in-out`}>
          <div className="w-full space-y-6">
            <h2 className="text-xl font-bold text-[#46b724] border-b px-4 pt-6 pb-2">Our Services - Details</h2>
            <div className="px-4 space-y-4 pb-6">

              <div>
                <h3 className="text-lg font-semibold text-[#46b724]">1. Domestic Staffing (India)</h3>
                <p>Pan-India recruitment solutions tailored to your industry:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Industries: IT, Oil & Gas, Petrochemicals, Mining, Hospitality, Manufacturing, BPO</li>
                  <li>Roles: Entry-level to executive hiring</li>
                  <li>Hiring: Permanent, contractual, temporary</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#46b724]">2. International Recruitment & Deployment (GCC & Europe)</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Skilled, semi-skilled, unskilled workers for construction, MEP, infra projects</li>
                  <li>Turnkey solutions: sourcing to mobilization</li>
                  <li>Target countries: Saudi Arabia, UAE, Qatar, Oman, Bahrain, Europe</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#46b724]">3. Project-Based Hiring / Mass Recruitment</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Support for mega projects: Vision 2030, NEOM, FIFA 2030</li>
                  <li>Large-scale onboarding & trade test coordination</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#46b724]">4. HR Outsourcing & Payroll Management</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Iqama sponsorship and legal compliance (Saudi Arabia)</li>
                  <li>Contract staffing, PRO services, GOSI advisory</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#46b724]">5. Executive Search & Talent Advisory</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>C-suite, director-level hiring</li>
                  <li>Talent mapping, succession planning</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#46b724]">6. Visa Processing & Documentation</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Contracts, attestation, pre-departure briefings</li>
                  <li>GAMCA medicals, ECNR/emigration, airport support</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#46b724]">7. Trade Test & Skill Evaluation Services</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Technical skill testing via partner centers in India</li>
                  <li>Hands-on certifications for MEP, construction, oil & gas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#46b724]">8. Mobilization & Onboarding Support</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Flights, visa stamping, airport transfers, accommodation</li>
                  <li>Onboarding and joining assistance across GCC and Europe</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Recruitment Process Section */}
      <section id="recruitment-process" className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-100 to-white overflow-hidden">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 text-gray-900">
          Our <span className="text-[#46b724]">Recruitment Process</span>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-base sm:text-lg">
          Efficient. Transparent. Scalable. Our step-by-step workflow ensures top-tier talent delivery, every time.
        </p>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#46b724] z-0 hidden md:block"></div>

          <div className="space-y-20">
            
            {/* Steps (Simplified Tailwind for Layout) */}
            
            {/* Step 1: Client Requirement Analysis (Left) */}
            <div className="relative flex justify-start md:justify-center">
              <StepNumber number={1} />
              <StepContent isRightAligned={false}>
                <h3 className="text-2xl font-semibold text-[#46b724] mb-2">Client Requirement Analysis</h3>
                <p className="text-gray-700">We consult with you to understand project-specific hiring needs, job roles, timelines, and budget constraints.</p>
              </StepContent>
            </div>
            
            {/* Step 2: Customized Recruitment Plan (Right) */}
            <div className="relative flex justify-end md:justify-center">
              <StepNumber number={2} />
              <StepContent isRightAligned={true}>
                <h3 className="text-2xl font-semibold text-[#46b724] mb-2">Customized Recruitment Plan</h3>
                <p className="text-gray-700">Our experts craft a tailored sourcing and hiring strategy aligned with your industry and project goals.</p>
              </StepContent>
            </div>
            
            {/* Step 3: Job Advertisement & Promotion (Left) */}
            <div className="relative flex justify-start md:justify-center">
              <StepNumber number={3} />
              <StepContent isRightAligned={false}>
                <h3 className="text-2xl font-semibold text-[#46b724] mb-2">Job Advertisement & Promotion</h3>
                <p className="text-gray-700">We publish targeted listings via online portals, social media, newspapers, and global job boards.</p>
              </StepContent>
            </div>

            {/* Step 4: Database Sourcing (Right) */}
            <div className="relative flex justify-end md:justify-center">
              <StepNumber number={4} />
              <StepContent isRightAligned={true}>
                <h3 className="text-2xl font-semibold text-[#46b724] mb-2">Database Sourcing</h3>
                <p className="text-gray-700">Quick access to thousands of pre-vetted candidates via our proprietary talent database.</p>
              </StepContent>
            </div>

            {/* Step 5: Candidate Screening (Left) */}
            <div className="relative flex justify-start md:justify-center">
              <StepNumber number={5} />
              <StepContent isRightAligned={false}>
                <h3 className="text-2xl font-semibold text-[#46b724] mb-2">Candidate Screening</h3>
                <p className="text-gray-700">Evaluation via resume reviews, interviews, and technical & behavioral assessments.</p>
              </StepContent>
            </div>
            
            {/* Step 6: Client Interviews (Right) */}
            <div className="relative flex justify-end md:justify-center">
              <StepNumber number={6} />
              <StepContent isRightAligned={true}>
                <h3 className="text-2xl font-semibold text-[#46b724] mb-2">Client Interviews</h3>
                <p className="text-gray-700">We schedule interviews through online platforms or in-person campaigns as per client preference.</p>
              </StepContent>
            </div>

            {/* Step 7: Trade Testing & Skill Validation (Left) */}
            <div className="relative flex justify-start md:justify-center">
              <StepNumber number={7} />
              <StepContent isRightAligned={false}>
                <h3 className="text-2xl font-semibold text-[#46b724] mb-2">Trade Testing & Skill Validation</h3>
                <p className="text-gray-700">Technical tests conducted through certified partner centers to ensure skills match the role.</p>
              </StepContent>
            </div>
            
            {/* Step 8: Medical Fitness Check (Right) */}
            <div className="relative flex justify-end md:justify-center">
              <StepNumber number={8} />
              <StepContent isRightAligned={true}>
                <h3 className="text-2xl font-semibold text-[#46b724] mb-2">Medical Fitness Check</h3>
                <p className="text-gray-700">Mandatory health check-ups via GAMCA or authorized local clinics to ensure readiness.</p>
              </StepContent>
            </div>

            {/* Step 9: Visa Processing & Documentation (Left) */}
            <div className="relative flex justify-start md:justify-center">
              <StepNumber number={9} />
              <StepContent isRightAligned={false}>
                <h3 className="text-2xl font-semibold text-[#46b724] mb-2">Visa Processing & Documentation</h3>
                <p className="text-gray-700">End-to-end management of visa, stamping, attestations, and offer documentation.</p>
              </StepContent>
            </div>
            
            {/* Step 10: Immigration & Emigration Clearance (Right) */}
            <div className="relative flex justify-end md:justify-center">
              <StepNumber number={10} />
              <StepContent isRightAligned={true}>
                <h3 className="text-2xl font-semibold text-[#46b724] mb-2">Immigration & Emigration Clearance</h3>
                <p className="text-gray-700">Handling POE, embassy formalities, and compliance for overseas deployments.</p>
              </StepContent>
            </div>

            {/* Step 11: Mobilization & Deployment (Left) */}
            <div className="relative flex justify-start md:justify-center">
              <StepNumber number={11} />
              <StepContent isRightAligned={false}>
                <h3 className="text-2xl font-semibold text-[#46b724] mb-2">Mobilization & Deployment</h3>
                <p className="text-gray-700">Flight bookings, airport pickups, and onboarding logistics—end-to-end support.</p>
              </StepContent>
            </div>
            
            {/* Step 12: Post-Deployment Support & Feedback (Right) */}
            <div className="relative flex justify-end md:justify-center">
              <StepNumber number={12} />
              <StepContent isRightAligned={true}>
                <h3 className="text-2xl font-semibold text-[#46b724] mb-2">Post-Deployment Support & Feedback</h3>
                <p className="text-gray-700">Continuous performance tracking and post-placement support to ensure client satisfaction.</p>
              </StepContent>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="px-6 py-12 bg-gray-50 flex flex-col items-center">
        <div className="contact-form max-w-lg w-full p-8 shadow-xl rounded-xl bg-white">
          <div className="flow text-center mb-8">
            <h1 className="text-3xl font-bold text-[#46b724]">Let's chat!</h1>
            <p className="text-gray-600 mt-2">We'd love to chat, please provide your contact details and we'll be in touch as quickly as possible.</p>
          </div>

          <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value="cca235d8-7b45-4869-83ce-819a334a6a92" />

            <div className="form-group">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#46b724] focus:border-[#46b724]" />
            </div>

            <div className="form-group">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#46b724] focus:border-[#46b724]" />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#46b724] focus:border-[#46b724]" />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#46b724] focus:border-[#46b724]" />
            </div>

            <div className="form-group">
              <button type="submit" className="w-full bg-[#46b724] text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                Send Message
              </button>
            </div>
          </form>

         
        </div>
      </div>
    </div>
  );
};

export default OurService;