import React from 'react';
// Note: Ensure 'remixicon/fonts/remixicon.css' is linked in your main index.html or global CSS file for the icons to display.

const TermsOfService = () => {
  // Helper component for a single section/card
  const ServiceSection = ({ number, title, children }) => (
    <div className="bg-gray-800 text-white rounded-lg p-6 shadow transition duration-300 hover:shadow-xl">
      <h3 className="text-lg font-semibold mb-2">{number}. {title}</h3>
      {children}
    </div>
  );

  return (
    <div className=" text-gray-900 font-sans min-h-screen">
      <section className="max-w-4xl mx-auto px-4 py-35">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-gray-700 mb-3 text-lg font-semibold">
            <i className="ri-file-text-line text-2xl"></i> Terms & Conditions
          </div>
          <h1 className="text-4xl font-bold">DAN International Solutions</h1>
        </div>

        {/* Intro */}
        <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">Terms of Service – DAN International</h2>
          <p className="text-sm mb-2">Effective Date: May 01, 2025</p>
          <p className="text-sm">
            Welcome to DAN International. These Terms of Service ("Terms") govern your use of our website and any services provided through 
            <strong>www.daninternational.com</strong>, operated by DAN International Solutions, headquartered in Dammam, Saudi Arabia.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="space-y-6">
          
          <ServiceSection number="1" title="Acceptance of Terms">
            <p className="text-sm">By accessing or using our services, you agree to comply with and be legally bound by these Terms. If you do not agree to these Terms, you may not use our services.</p>
          </ServiceSection>

          <ServiceSection number="2" title="Our Services">
            <ul className="list-disc list-inside text-sm">
              <li>Recruitment and talent acquisition</li>
              <li>Staffing solutions (contract and permanent)</li>
              <li>Visa and documentation assistance</li>
              <li>Career advisory and support services</li>
            </ul>
          </ServiceSection>

          <ServiceSection number="3" title="Eligibility">
            <p className="text-sm">You must be at least 18 years old to use our services. By agreeing to these Terms, you confirm that you are legally permitted to enter into contracts.</p>
          </ServiceSection>

          <ServiceSection number="4" title="User Responsibilities">
            <ul className="list-disc list-inside text-sm">
              <li>To provide accurate and truthful information</li>
              <li>Not to use the Site or Services for illegal activities</li>
              <li>Not to impersonate any individual or entity</li>
              <li>To comply with all applicable laws, including Saudi labor regulations and international employment standards</li>
            </ul>
          </ServiceSection>

          <ServiceSection number="5" title="Third-Party Services">
            <p className="text-sm">We may integrate with third-party platforms (e.g., LinkedIn, WhatsApp). We are not responsible for the content or practices of any third-party site or service.</p>
          </ServiceSection>

          <ServiceSection number="6" title="Payment and Refunds">
            <p className="text-sm">Payment terms and refund conditions are governed by our Refund Policy. Please review it before making any transactions.</p>
          </ServiceSection>

          <ServiceSection number="7" title="Termination">
            <p className="text-sm">We reserve the right to suspend or terminate access to our services at any time without prior notice, especially in cases of misuse or violation of these Terms.</p>
          </ServiceSection>

          <ServiceSection number="8" title="Intellectual Property">
            <p className="text-sm">All content on the Site (logos, text, graphics, etc.) is the property of DAN International or its licensors and is protected by applicable copyright laws.</p>
          </ServiceSection>

          <ServiceSection number="9" title="Limitation of Liability">
            <p className="text-sm">DAN International is not liable for any indirect, incidental, or consequential damages resulting from the use of our services. We do not guarantee employment outcomes.</p>
          </ServiceSection>

          <ServiceSection number="10" title="Modifications">
            <p className="text-sm">We may update these Terms from time to time. Continued use of the services after changes means you accept the revised Terms.</p>
          </ServiceSection>

          <ServiceSection number="11" title="Governing Law">
            <p className="text-sm">These Terms shall be governed by the laws of the Kingdom of Saudi Arabia, without regard to its conflict of law provisions.</p>
          </ServiceSection>
          
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;