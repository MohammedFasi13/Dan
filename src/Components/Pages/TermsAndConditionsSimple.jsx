import React from 'react';
// Note: Ensure 'remixicon/fonts/remixicon.css' is linked in your main index.html or global CSS file for the icons to display.

const TermsAndConditionsSimple = () => {
  // Define the primary color based on the original Tailwind config
  const primaryColor = '#46b724';

  // Helper component for a single Term Card
  const TermCard = ({ number, title, children }) => (
    <div className="bg-gray-800 text-white rounded-lg shadow-xl p-6 transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
      <h2 className="text-2xl font-semibold mb-2" style={{ color: primaryColor }}>
        {number}. {title}
      </h2>
      {children}
    </div>
  );

  return (
    <div className=" text-gray-800 font-sans min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-35 space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-lg font-semibold mb-2" style={{ color: primaryColor }}>
            <i className="ri-file-list-line text-2xl"></i> Terms & Conditions
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900">DAN International Solutions</h1>
          <p className="text-gray-600 mt-2 text-lg">Governing your use of our website and services.</p>
        </div>

        {/* Term Cards Grid */}
        <div className="grid gap-8">
          
          <TermCard number="1" title="Introduction">
            <p className="text-gray-300">Welcome to DAN International Solutions ("we," "us," or "our"). These Terms and Conditions govern your use of our website and services. By accessing our site or services, you agree to comply with these terms.</p>
          </TermCard>

          <TermCard number="2" title="Definitions">
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li><strong>Candidate:</strong> Job seeker using our platform.</li>
              <li><strong>Client:</strong> Employer using our services.</li>
              <li><strong>Services:</strong> All offerings provided.</li>
              <li><strong>User:</strong> Any party interacting with our services.</li>
            </ul>
          </TermCard>

          <TermCard number="3" title="Services Offered">
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Recruitment & Staffing</li>
              <li>HR Outsourcing</li>
              <li>Visa & Immigration Support</li>
              <li>Executive Search</li>
              <li>Compliance Management</li>
            </ul>
          </TermCard>

          <TermCard number="4" title="User Responsibilities">
            <p className="font-medium text-gray-200 mb-2">For Candidates:</p>
            <ul className="list-disc list-inside mb-4 text-gray-300">
              <li>Provide accurate and complete information.</li>
              <li>Do not submit fraudulent documents.</li>
              <li>Comply with labor laws of destination countries.</li>
            </ul>
            <p className="font-medium text-gray-200 mb-2">For Clients:</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Provide lawful job descriptions.</li>
              <li>Adhere to fair hiring practices.</li>
              <li>Pay fees as agreed in the contract.</li>
            </ul>
          </TermCard>

          <TermCard number="5" title="Fees & Payment">
            <ul className="list-disc list-inside text-gray-300">
              <li><strong>Candidates:</strong> No hidden fees. Costs disclosed upfront.</li>
              <li><strong>Clients:</strong> Charges per agreement. Vary by service.</li>
            </ul>
          </TermCard>

          <TermCard number="6" title="Privacy & Data Protection">
            <p className="text-gray-300">We comply with GDPR, Saudi Data Protection Laws, and other applicable regulations. See our Privacy Policy for details.</p>
          </TermCard>

          <TermCard number="7" title="Intellectual Property">
            <p className="text-gray-300">All content is protected. Unauthorized reproduction or distribution is prohibited.</p>
          </TermCard>

          <TermCard number="8" title="Prohibited Activities">
            <ul className="list-disc list-inside text-gray-300">
              <li>No unethical or fraudulent practices.</li>
              <li>No hacking, spamming, or site misuse.</li>
              <li>No false job or employer information.</li>
            </ul>
          </TermCard>

          <TermCard number="9" title="Limitation of Liability">
            <p className="text-gray-300">We are not liable for delays caused by third parties, government actions, or indirect damages.</p>
          </TermCard>

          <TermCard number="10" title="Indemnification">
            <p className="text-gray-300">You agree to indemnify DAN International Solutions for any misuse or legal claims arising from your actions.</p>
          </TermCard>

          <TermCard number="11" title="Termination">
            <p className="text-gray-300">We may suspend or terminate access if you violate these Terms or engage in unethical behavior.</p>
          </TermCard>

          <TermCard number="12" title="Governing Law & Dispute Resolution">
            <p className="text-gray-300">These Terms are governed by Saudi Arabian law. Disputes are handled in Dammam courts.</p>
          </TermCard>

          <TermCard number="13" title="Amendments">
            <p className="text-gray-300">These Terms may be updated at any time. Continued use constitutes acceptance.</p>
          </TermCard>

          <TermCard number="14" title="Contact Us">
            <div className="space-y-1 text-gray-300">
              <p><strong>DAN International Solutions</strong></p>
              <p><i className="ri-map-pin-line mr-1" style={{ color: primaryColor }}></i> P.O. Box 7529, Ibn Qais, Ash Sulah, Dammam 34271, KSA</p>
              <p><i className="ri-phone-line mr-1" style={{ color: primaryColor }}></i> +966 566280420 | +966 594703655</p>
              <p><i className="ri-mail-line mr-1" style={{ color: primaryColor }}></i> info@daninternational.com</p>
              <p><i className="ri-global-line mr-1" style={{ color: primaryColor }}></i> www.daninternationalsolutions.com</p>
            </div>
          </TermCard>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsSimple;