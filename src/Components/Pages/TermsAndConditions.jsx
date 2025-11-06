import React from 'react';
// Assuming you have a way to import CSS for Remix Icons, 
// or have added the link in your public/index.html or main layout file.
// Example: import 'remixicon/fonts/remixicon.css'; 

const TermsAndConditions = () => {
  // Define the primary color, as it was in the tailwind.config
  const primaryColor = '#46b724';

  return (
    <div className=" text-gray-800 font-sans min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-40">
        
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 text-primary mb-3 text-lg font-semibold" style={{ color: primaryColor }}>
            <i className="ri-shield-user-line text-2xl"></i> Compliance & Policy Center
          </div>
          <h1 className="text-4xl font-bold text-gray-900">DAN International</h1>
          <p className="text-gray-600 mt-2 text-base">Committed to ethical hiring, data privacy, and global compliance standards.</p>
        </div>

        {/* Policy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Compliance & Anti-Fraud Policy */}
          <div className="bg-gray-800 text-white border border-primary/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 text-primary rounded-full p-2" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
                <i className="ri-shield-check-line text-xl"></i>
              </div>
              <h2 className="text-lg font-semibold">Compliance & Anti-Fraud Policy</h2>
            </div>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Saudi Labor Law</li>
              <li>Ministry of Human Resources (HRSD)</li>
              <li>International employment standards</li>
            </ul>
            <p className="text-sm font-medium">We prohibit:</p>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Misrepresentation of job roles/salaries</li>
              <li>Unauthorized candidate fees</li>
              <li>Forgery or document misuse</li>
              <li>Discriminatory hiring</li>
              <li>Unethical collaboration with agents</li>
            </ul>
            <p className="text-sm text-primary" style={{ color: primaryColor }}><i className="ri-mail-line"></i> Report: <a href="mailto:compliance@daninternational.com" className="underline">compliance@daninternational.com</a></p>
          </div>

          {/* Document Retention */}
          <div className="bg-gray-800 text-white border border-primary/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 text-primary rounded-full p-2" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
                <i className="ri-file-text-line text-xl"></i>
              </div>
              <h2 className="text-lg font-semibold">Document Retention & Destruction Policy</h2>
            </div>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Secure storage of resumes, IDs, visas, etc.</li>
              <li>Retention for up to 24 months</li>
              <li>Certified digital & physical destruction</li>
            </ul>
          </div>

          {/* Disclaimers */}
          <div className="bg-gray-800 text-white border border-primary/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 text-primary rounded-full p-2" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
                <i className="ri-error-warning-line text-xl"></i>
              </div>
              <h2 className="text-lg font-semibold">Disclaimers Policy</h2>
            </div>
            <p className="text-sm">DAN International does not guarantee job offers, visa approvals, or salaries. Independent verification is advised. Third-party actions are not our liability.</p>
          </div>

          {/* Zero Tolerance */}
          <div className="bg-gray-800 text-white border border-primary/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 text-primary rounded-full p-2" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
                <i className="ri-close-circle-line text-xl"></i>
              </div>
              <h2 className="text-lg font-semibold">Zero Tolerance Policy</h2>
            </div>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Discrimination of any form</li>
              <li>Harassment or exploitation</li>
              <li>Bribery or unethical behavior</li>
            </ul>
            <p className="text-sm text-primary" style={{ color: primaryColor }}><i className="ri-shield-line"></i> Violators may face disqualification or legal action.</p>
          </div>

          {/* Cross Border */}
          <div className="bg-gray-800 text-white border border-primary/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 text-primary rounded-full p-2" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
                <i className="ri-global-line text-xl"></i>
              </div>
              <h2 className="text-lg font-semibold">Cross-Border Data Transfer Policy</h2>
            </div>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Transfers between KSA, India, Qatar, UAE</li>
              <li>Encrypted & consent-based handling</li>
              <li>Compliant with PDPL, GDPR, and local laws</li>
            </ul>
          </div>

          {/* Terms of Service */}
          <div className="bg-gray-800 text-white border border-primary/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 text-primary rounded-full p-2" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
                <i className="ri-contract-line text-xl"></i>
              </div>
              <h2 className="text-lg font-semibold">Terms of Service</h2>
            </div>
            <p className="text-sm">Defines user responsibilities, service limitations, and legal jurisdiction. <a href="#" className="underline text-primary" style={{ color: primaryColor }}>View Full Terms</a></p>
          </div>

          {/* Cookie Policy */}
          <div className="bg-gray-800 text-white border border-primary/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 text-primary rounded-full p-2" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
                <i className="ri-cookie-line text-xl"></i>
              </div>
              <h2 className="text-lg font-semibold">Cookie Policy</h2>
            </div>

            <p className="text-sm mb-4">
              This Cookie Policy explains how DAN International (“we”, “our”, or “us”) uses cookies and similar technologies on our website.
            </p>

            <p className="text-sm font-medium mb-1">1. What Are Cookies?</p>
            <p className="text-sm mb-4">
              Cookies are small data files stored on your device when you visit a website. They are used to remember your preferences, login status, and usage patterns.
            </p>

            <p className="text-sm font-medium mb-1">2. Why We Use Cookies</p>
            <ul className="list-disc list-inside text-sm mb-4">
              <li>Enable basic site functionality</li>
              <li>Analyze website traffic via tools like Google Analytics</li>
              <li>Enhance your user experience</li>
              <li>Deliver relevant job postings and HR content</li>
              <li>Support secure login and user sessions</li>
            </ul>

            <p className="text-sm font-medium mb-1">3. Types of Cookies We Use</p>
            <div className="text-sm mb-4">
              <p><strong>Essential Cookies</strong> — Required for core functionality</p>
              <p><strong>Analytics Cookies</strong> — Help us understand user behavior</p>
              <p><strong>Functionality Cookies</strong> — Remember settings/preferences</p>
              <p><strong>Marketing Cookies</strong> — Serve targeted ads via LinkedIn, Meta, etc.</p>
            </div>

            <p className="text-sm font-medium mb-1">4. Third-Party Cookies</p>
            <p className="text-sm mb-4">
              We may allow trusted third parties (e.g., Google, Facebook, LinkedIn) to place cookies on your device for analytics and advertising purposes.
            </p>

            <p className="text-sm font-medium mb-1">5. Managing Cookies</p>
            <p className="text-sm mb-4">
              You can control and/or delete cookies at any time through your browser settings. Note that disabling cookies may affect your site experience.
            </p>

            <p className="text-sm font-medium mb-1">6. Updates to This Policy</p>
            <p className="text-sm">
              We may revise this Cookie Policy periodically. Please check this page for the latest version.
            </p>
          </div>

          {/* Refund Policy */}
          <div className="bg-gray-800 text-white border border-primary/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 text-primary rounded-full p-2" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
                <i className="ri-exchange-dollar-line text-xl"></i>
              </div>
              <h2 className="text-lg font-semibold">Refund Policy</h2>
            </div>
            <p className="text-sm mb-4">DAN International Solutions strives for transparency in all financial transactions. This policy outlines the conditions under which refunds may be issued for our services, including:</p>
            <ul className="list-disc list-inside text-sm mb-4">
              <li>Recruitment & Placement Fees</li>
              <li>Visa Processing Services</li>
              <li>HR Consulting or Outsourcing Contracts</li>
            </ul>
            <p className="text-sm mb-4">Note: We do <strong>not charge candidates</strong> for job placements or interviews. Any government-related fees (visas, medical tests, etc.) are non-refundable unless stated otherwise.</p>

            <p className="text-sm font-medium mb-2">Refund Eligibility – For Clients (Employers):</p>
            <ul className="list-disc list-inside text-sm mb-4">
              <li><strong>Recruitment Services:</strong> Free replacement if hired candidate leaves within 90 days.</li>
              <li>If we fail to deliver agreed-upon services due to our error, a partial or full refund may be issued.</li>
              <li><strong>Visa/Immigration Services:</strong> If rejected due to our error, service fee is refundable (excluding government fees).</li>
              <li>If canceled before submission, an administrative fee may apply.</li>
            </ul>

            <p className="text-sm font-medium mb-2">❌ Non-Refundable Scenarios:</p>
            <ul className="list-disc list-inside text-sm mb-4">
              <li>Government fees (visa stamps, medical tests, attestations)</li>
              <li>Services already rendered (e.g., interviews, advertising)</li>
              <li>Incorrect documentation provided by client</li>
            </ul>

            <p className="text-sm font-medium mb-2">For Candidates:</p>
            <p className="text-sm mb-4">We do <strong>not charge candidates</strong> for job placements. Any third-party costs (e.g., medical tests, passport fees) are the candidate’s responsibility and are non-refundable.</p>

            <p className="text-sm font-medium mb-2">How to Request a Refund:</p>
            <ul className="list-disc list-inside text-sm mb-4">
              <li>Email us at <a href="mailto:accounts@daninternational.com" className="text-primary underline" style={{ color: primaryColor }}>accounts@daninternational.com</a></li>
              <li>Include invoice/payment receipt number, reason, and supporting documents</li>
              <li>Refunds processed within 7–14 business days after approval</li>
              <li>Refunds issued via the original payment method</li>
            </ul>

            <p className="text-sm font-medium mb-2">Disputes & Amendments:</p>
            <p className="text-sm mb-4">All refund disputes will be resolved through mutual negotiation or under Saudi Arabian law. Policy updates will be published on our website.</p>

            <p className="text-sm font-medium mb-2">Contact Our Expert:</p>
            <p className="text-sm">
              📧 Email: <a href="mailto:accounts@daninternational.com" className="text-primary underline" style={{ color: primaryColor }}>accounts@daninternational.com</a><br/>
              📞 Phone: +966 566280420<br/>
              📍 Address: P.O. Box 7529, Dammam 34271, KSA
            </p>
          </div>
        </div>

        {/* Footer Info (Kept as part of the main content block) */}
        <div className="mt-16 border-t border-gray-200 pt-6 text-sm text-gray-700">
          <p>
            <i className="ri-building-line text-primary" style={{ color: primaryColor }}></i> <strong>DAN International Solutions</strong><br/>
            <i className="ri-phone-line text-primary" style={{ color: primaryColor }}></i> +966 566280420<br/>
            <i className="ri-map-pin-line text-primary" style={{ color: primaryColor }}></i> P.O. Box 7529, Dammam 34271, Saudi Arabia<br/>
            <i className="ri-file-list-line text-primary" style={{ color: primaryColor }}></i> CR No.: 2050214572<br/>
            <i className="ri-handshake-line text-primary" style={{ color: primaryColor }}></i> Partnered with Sadaa Al Tamkeen HR Co.<br/>
            <i className="ri-links-line text-primary" style={{ color: primaryColor }}></i> <a href="#" className="text-blue-600 underline">Check CR on Saudi Gov Portal</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;