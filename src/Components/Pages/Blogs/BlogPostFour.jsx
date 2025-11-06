import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri'; // Using react-icons for the checkmark

// Define the primary color for consistency
const PRIMARY_COLOR = '#46b724'; 
const LIGHT_BG = '#f7f7f7';

const BlogPostFour = () => {
  
  // Utility component for the check-list items (replacing .check-list)
  const CheckListItem = ({ children }) => (
    <li className="flex items-start mb-2 text-gray-700 leading-relaxed text-lg">
      <RiCheckboxCircleFill 
        className="flex-shrink-0 mr-3 mt-1 text-xl" 
        style={{ color: PRIMARY_COLOR }} 
      />
      <span>{children}</span>
    </li>
  );
  
  // Utility component for the custom bullet-point list
  const CustomBulletItem = ({ children }) => (
    <li className="flex items-start mb-2 text-gray-700 leading-relaxed text-lg">
      <span className="flex-shrink-0 mr-3 mt-0.5 text-xl font-extrabold" style={{ color: PRIMARY_COLOR }}>
        &bull; 
      </span>
      <span>{children}</span>
    </li>
  );

  // Utility component for the sub-sub-headings (replacing .sub-sub-heading)
  const SubSubHeading = ({ children }) => (
    <h3 className="text-xl font-semibold text-gray-800 pt-6 mb-3 border-b border-gray-100 pb-1">
      {children}
    </h3>
  );

  return (
    // Main container (replacing .blog-container)
    <article className="min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Blog Title (replacing .blog-title) */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-8 mb-6 leading-tight">
          Legal Protection Against Unlawful Resignation Fees & Fake Job Offers in 
          <span style={{ color: PRIMARY_COLOR }} className="font-bold"> KSA-GCC</span>
        </h1>

        {/* Content Section (using prose classes for default p/strong styling) */}
        <div className="text-lg text-gray-700 space-y-5">
          <p>The Gulf region—particularly <strong>Saudi Arabia (KSA), the UAE, and wider GCC</strong>—offers lucrative opportunities for expatriates. However, many workers face two recurring challenges that compromise their professional rights:</p>
          
          {/* Unlawful Fees & Scams list (replacing .bullet-point) */}
          <ul className="list-none space-y-2 pl-0">
            <CustomBulletItem>Unlawful resignation fees and penalties imposed by employers.</CustomBulletItem>
            <CustomBulletItem>Fake job offers and recruitment scams targeting overseas job seekers.</CustomBulletItem>
          </ul>

          <p>At <strong>DAN International Solutions</strong>, we specialize in end-to-end workforce mobility, legal compliance, and ethical recruitment practices. With our deep expertise in KSA and GCC labor laws, we help employers and candidates navigate these issues with clarity, compliance, and protection.</p>

          
          {/* Section: Part 1 */}
          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2 border-t" style={{ color: PRIMARY_COLOR }}>Part 1: The Resignation Fee Trap — What Every Employee Should Know</h2>
          
          <SubSubHeading>The Problem</SubSubHeading>
          <p>Many workers in KSA/GCC report facing:</p>
          {/* Problem list (replacing .example-list) */}
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li className="text-gray-700 italic">Demands for 12–15 months’ salary as “resignation charges”</li>
            <li className="text-gray-700 italic">Passport withholding to block resignations or job transfers</li>
            <li className="text-gray-700 italic">Threats of labor bans for attempting to move jobs</li>
          </ul>
          <p><strong>These practices are illegal and violate both KSA Labor Law and UAE MOHRE regulations.</strong></p>

          {/* Highlight Box (replacing .highlight-box) */}
          <div className="bg-gray-50 border-l-4 p-5 rounded-md my-8" style={{ borderColor: PRIMARY_COLOR, backgroundColor: LIGHT_BG }}>
            <h3 className="text-xl font-semibold mb-3" style={{ color: PRIMARY_COLOR }}>What the Law Actually Says</h3>
            <ul className="list-none space-y-2 pl-0">
              <CustomBulletItem><strong>Notice Periods Only:</strong> Employees are legally required to serve a 60–90 day notice period (depending on their contract and jurisdiction). Beyond this, no additional penalties apply.</CustomBulletItem>
              <CustomBulletItem><strong>No Resignation Fees:</strong> Under Saudi Labor Law (Article 74), salary deductions without Ministry of Labor approval are prohibited.</CustomBulletItem>
              <CustomBulletItem><strong>Passport Rules:</strong> Withholding passports is a criminal offense in KSA, with fines reaching SAR 50,000 per violation.</CustomBulletItem>
            </ul>
          </div>
          
          <SubSubHeading>DAN International Tactics: Protecting Your Rights</SubSubHeading>
          
          <p><strong>Before Resigning:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>Document all communications with your employer.</CheckListItem>
            <CheckListItem>Save emails or WhatsApp messages where resignation fees are mentioned.</CheckListItem>
            <CheckListItem>Photograph any suspicious contract clauses.</CheckListItem>
          </ul>

          <p><strong>Filing Official Complaints:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem><strong>KSA:</strong> Submit disputes via the Ministry of Labor portal or Absher’s “Labor Dispute” service.</CheckListItem>
            <CheckListItem><strong>UAE:</strong> File directly through MOHRE.gov.ae.</CheckListItem>
            <CheckListItem><strong>Other GCC States:</strong> Contact the respective labor ministry for arbitration.</CheckListItem>
          </ul>

          <p><strong>Proactive Protection with DAN:</strong></p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li className="text-gray-700 italic">We provide <strong>free contract reviews</strong> before you sign.</li>
            <li className="text-gray-700 italic">DAN screens and verifies every employer to ensure compliance with labor laws.</li>
            <li className="text-gray-700 italic">Our mobilization experts guide workers through MoL-registered contracts to prevent exploitation.</li>
          </ul>


          {/* Section: Part 2 */}
          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2 border-t" style={{ color: PRIMARY_COLOR }}>Part 2: Spotting Fake Job Offers in the GCC — 7 Red Flags</h2>
          
          <p>While resignation fee disputes affect those already employed, fake job offers trap candidates at the very start of their journey. Scammers exploit overseas workers, promising high salaries and easy visas—only to disappear after collecting “fees.”</p>
          
          <SubSubHeading>The Red Flags of Fraud</SubSubHeading>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li className="text-gray-700 italic"><strong>No Commercial Registration (CR):</strong> Genuine companies in KSA must have an active MOL registration. Fake employers refuse to provide CR numbers.</li>
            <li className="text-gray-700 italic"><strong>Improper Interview Process:</strong> Legitimate employers conduct structured interviews. Scammers may hire after a simple WhatsApp chat.</li>
            <li className="text-gray-700 italic"><strong>Payment Requests:</strong> Asking for “visa processing fees” is strictly illegal in the GCC.</li>
            <li className="text-gray-700 italic"><strong>Unregistered Contracts:</strong> Real contracts are bilingual (Arabic & English) and Ministry-approved. Fake offers are vague and often English-only.</li>
            <li className="text-gray-700 italic"><strong>Too-Good-To-Be-True Salaries:</strong> SAR 10,000 for cleaning jobs? Unrealistic. Always compare against GOSI averages or market benchmarks.</li>
            <li className="text-gray-700 italic"><strong>Unverified Contact Details:</strong> Real firms use official domains (e.g., *@aramco.com*). Fake offers rely on Gmail or Yahoo IDs.</li>
            <li className="text-gray-700 italic"><strong>No Physical Office:</strong> A reputable company always has a traceable address, not just a PO Box.</li>
          </ul>
          
          <SubSubHeading>DAN’s 3-Step Verification Process</SubSubHeading>
          <p>DAN International recommends every candidate perform this quick check before accepting any GCC job offer:</p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem><strong>CR Verification:</strong> Cross-check the employer’s Commercial Registration on the Saudi MOL or UAE ICP portal.</CheckListItem>
            <CheckListItem><strong>Company Confirmation:</strong> Call the company HQ using the number listed on their official website.</CheckListItem>
            <CheckListItem><strong>Office Validation:</strong> If already in GCC, visit the employer’s office physically.</CheckListItem>
          </ul>
          
          <p><strong>If You’ve Been Scammed:</strong></p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li className="text-gray-700 italic"><strong>KSA:</strong> Report fraudulent offers to Tawtheeq Complaints.</li>
            <li className="text-gray-700 italic"><strong>UAE:</strong> Submit a complaint to MOHRE’s Anti-Fraud Unit.</li>
            <li className="text-gray-700 italic"><strong>Other GCC:</strong> Escalate through respective government portals.</li>
          </ul>


          {/* Section: Why DAN */}
          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2 border-t" style={{ color: PRIMARY_COLOR }}>DAN International: Setting the Standard in Ethical Recruitment</h2>
          <p>As a leading HR services provider across KSA, GCC, and global markets, <strong>DAN International</strong> is committed to protecting workers and ensuring employers follow the law. Our approach includes:</p>
          <ul className="list-none space-y-2 pl-0">
            <CustomBulletItem>Transparent, <strong>Zero-Cost Recruitment</strong> for candidates.</CustomBulletItem>
            <CustomBulletItem>Employer <strong>Due Diligence & Screening</strong> to prevent fraud.</CustomBulletItem>
            <CustomBulletItem>Legal Compliance Advisory for labor laws, contracts, and visa processing.</CustomBulletItem>
            <CustomBulletItem>Free Candidate Education Guides (pre-departure and post-arrival).</CustomBulletItem>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2 border-t" style={{ color: PRIMARY_COLOR }}>Conclusion: Choose Protection, Choose DAN</h2>
          <p>Unlawful resignation penalties and fraudulent job offers continue to affect thousands of expatriates across the Gulf. But with the right knowledge, legal protection, and a trusted partner like <strong>DAN International</strong>, workers can avoid these pitfalls and build successful careers.</p>
          
          <p>At DAN, we believe ethical recruitment and legal compliance are not optional—they are the foundation of long-term success.</p>
          
          {/* Final Contact Highlight Box */}
          <div className="bg-gray-50 border-l-4 p-5 rounded-md mt-8" style={{ borderColor: PRIMARY_COLOR, backgroundColor: LIGHT_BG }}>
            <p className="mb-0 text-gray-700">If you are facing contract disputes, suspicious job offers, or resignation fee issues, <strong>DAN International</strong> can help. Our specialists provide free initial consultations, employer verification, and contract reviews to safeguard your rights.</p>
            <p className="mt-4 font-bold text-gray-800">
              📞 Contact DAN International (KSA): 
              <a href="tel:+966566280420" style={{ color: PRIMARY_COLOR }} className="ml-1 hover:underline">+966 566 280 420</a>
            </p>
            <p className="mt-2 font-bold text-gray-800">
              📧 Email: 
              <a href="mailto:legal@daninternational-sa.com" style={{ color: PRIMARY_COLOR }} className="ml-1 hover:underline">legal@daninternational-sa.com</a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostFour;