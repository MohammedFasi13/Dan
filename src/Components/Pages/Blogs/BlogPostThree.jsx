import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri'; // Using react-icons for the checkmark

// Define the colors for easy management
const PRIMARY_COLOR = '#46b724'; 
const PAIN_POINT_COLOR = 'text-red-700'; // Corresponds to the original #C0392B

const BlogPostThree = () => {
  // Utility component for the check-list items
  const CheckListItem = ({ children }) => (
    <li className="flex items-start mb-2">
      {/* Replaces .ri-checkbox-circle-fill */}
      <RiCheckboxCircleFill 
        className="flex-shrink-0 mr-2 mt-1 text-xl" 
        style={{ color: PRIMARY_COLOR }} 
      />
      <span>{children}</span>
    </li>
  );

  // Utility component for the sub-sub-headings
  const SubSubHeading = ({ children }) => (
    <h3 className="text-xl font-semibold mt-6 mb-3 border-b border-gray-200 pb-1">
      {children}
    </h3>
  );

  return (
    // Main container
    <article className="min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Blog Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 pt-8 mb-6 leading-tight">
          The 
          <span style={{ color: PRIMARY_COLOR }} className="font-bold"> DAN International </span> 
          Guide to Seamless Gulf Employment: Before You Go & After You Arrive
        </h1>

        {/* Content Section (using Tailwind Typography for default paragraph/strong styling) */}
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>For thousands of professionals and skilled workers, the Gulf Cooperation Council (GCC) remains one of the most attractive destinations for employment. Opportunities in <strong>Saudi Arabia, UAE, Qatar, Oman, and Bahrain</strong> offer not just career growth but also financial stability. However, the journey from securing an offer to successfully settling in the Gulf is filled with hidden challenges.</p>
          
          <p>At <strong>DAN International Solutions</strong>, we specialize in bridging this gap by providing end-to-end HR and mobility solutions—from pre-departure documentation to post-arrival integration. This guide outlines the most common pain points that candidates face before mobility and after arrival, along with DAN’s proven strategies to make Gulf employment seamless, transparent, and secure.</p>


          {/* Section: Before Mobility */}
          <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-4" style={{ color: PRIMARY_COLOR }}>Before Mobility (Pre-Departure)</h2>
          
          {/* Sub-Section 1: Visa & Documentation Delays */}
          <SubSubHeading>1. Visa & Documentation Delays</SubSubHeading>
          <p>
            <span className={`${PAIN_POINT_COLOR} font-bold`}>Pain Point:</span> Candidates often struggle with attestation requirements, delayed embassy clearances, and unverified medical centers, especially with GAMCA medical scams.
          </p>
          <p><strong>DAN Solution:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>We provide a step-by-step document checklist customized for each GCC country.</CheckListItem>
            <CheckListItem>Partnerships with government-approved PRO services ensure faster attestation and error-free submissions.</CheckListItem>
            <CheckListItem>Verified GAMCA-approved medical panels help candidates avoid fraudulent centers.</CheckListItem>
          </ul>

          {/* Sub-Section 2: Unrealistic Job Promises */}
          <SubSubHeading>2. Unrealistic Job Promises</SubSubHeading>
          <p>
            <span className={`${PAIN_POINT_COLOR} font-bold`}>Pain Point:</span> Many candidates sign misleading contracts with inflated promises of salary, benefits, or job roles, only to face disappointment upon arrival.
          </p>
          <p><strong>DAN Solution:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>Pre-departure orientation programs allow candidates to interact with employers directly.</CheckListItem>
            <CheckListItem>All contracts are verified and translated into Arabic and English, ensuring candidates fully understand terms before departure.</CheckListItem>
          </ul>

          {/* Sub-Section 3: High Recruitment Fees */}
          <SubSubHeading>3. High Recruitment Fees</SubSubHeading>
          <p>
            <span className={`${PAIN_POINT_COLOR} font-bold`}>Pain Point:</span> In some regions, unregulated agents demand fees as high as six months’ salary, leaving workers in debt before they even start earning.
          </p>
          <p><strong>DAN Solution:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>Our fee transparency model ensures every candidate knows exactly what they are paying for.</CheckListItem>
            <CheckListItem>For several categories, we operate under a zero-cost recruitment policy, where employers bear the placement fees.</CheckListItem>
          </ul>

          {/* Sub-Section 4: Family Visa Uncertainty */}
          <SubSubHeading>4. Family Visa Uncertainty</SubSubHeading>
          <p>
            <span className={`${PAIN_POINT_COLOR} font-bold`}>Pain Point:</span> Workers often don’t know whether dependents can join them immediately, leading to stress and uncertainty.
          </p>
          <p><strong>DAN Solution:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>We provide clear guidance on family visa rules per country (e.g., Saudi Arabia’s three-month wait period).</CheckListItem>
            <CheckListItem>Early planning ensures dependents can transition smoothly without unexpected delays.</CheckListItem>
          </ul>

          {/* Sub-Section 5: Financial Preparedness */}
          <SubSubHeading>5. Financial Preparedness</SubSubHeading>
          <p>
            <span className={`${PAIN_POINT_COLOR} font-bold`}>Pain Point:</span> Many workers are unaware of the actual cost of living and arrive financially unprepared.
          </p>
          <p><strong>DAN Solution:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>Country-specific financial readiness guides are shared with every candidate.</CheckListItem>
            <CheckListItem><strong>Example:</strong> Workers moving to Riyadh are advised to have at least SAR 5,000 to cover food, housing deposits, and transport for the first month.</CheckListItem>
          </ul>


          {/* Section: After Mobility */}
          <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-4" style={{ color: PRIMARY_COLOR }}>After Mobility (Post-Arrival)</h2>

          {/* Sub-Section 1: Bait-and-Switch Contracts */}
          <SubSubHeading>1. Bait-and-Switch Contracts</SubSubHeading>
          <p>
            <span className={`${PAIN_POINT_COLOR} font-bold`}>Pain Point:</span> In some cases, the actual job or benefits differ from the original offer letter.
          </p>
          <p><strong>DAN Solution:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>Every employment agreement is registered with the Ministry of Labor.</CheckListItem>
            <CheckListItem>We ensure all contracts are legally binding in both Arabic and English, protecting candidates from exploitation.</CheckListItem>
          </ul>

          {/* Sub-Section 2: Delayed Iqama/Residency Permits */}
          <SubSubHeading>2. Delayed Iqama/Residency Permits</SubSubHeading>
          <p>
            <span className={`${PAIN_POINT_COLOR} font-bold`}>Pain Point:</span> Workers cannot open bank accounts, rent apartments, or even access healthcare until they receive their Iqama or residency card.
          </p>
          <p><strong>DAN Solution:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>DAN assigns a dedicated PRO (Public Relations Officer) to each candidate to fast-track iqama and residency processes.</CheckListItem>
            <CheckListItem>Our digital tracking ensures no worker is left waiting unnecessarily.</CheckListItem>
          </ul>

          {/* Sub-Section 3: Salary Withholding */}
          <SubSubHeading>3. Salary Withholding</SubSubHeading>
          <p>
            <span className={`${PAIN_POINT_COLOR} font-bold`}>Pain Point:</span> Non-compliant employers sometimes delay payments or withhold salaries altogether.
          </p>
          <p><strong>DAN Solution:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>We only work with companies registered under the **Wage Protection System (WPS)**.</CheckListItem>
            <CheckListItem>Pre-hire audits of employer compliance reduce salary-related risks.</CheckListItem>
          </ul>

          {/* Sub-Section 4: Accommodation Scams */}
          <SubSubHeading>4. Accommodation Scams</SubSubHeading>
          <p>
            <span className={`${PAIN_POINT_COLOR} font-bold`}>Pain Point:</span> Workers face overpriced, unhygienic, or unsafe housing options.
          </p>
          <p><strong>DAN Solution:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>DAN negotiates employer-sponsored housing packages wherever possible.</CheckListItem>
            <CheckListItem>Alternatively, candidates receive vetted lists of trusted landlords and brokers.</CheckListItem>
          </ul>

          {/* Sub-Section 5: Cultural Shock */}
          <SubSubHeading>5. Cultural Shock</SubSubHeading>
          <p>
            <span className={`${PAIN_POINT_COLOR} font-bold`}>Pain Point:</span> Many professionals face difficulty adapting to local laws and customs such as gender segregation, dress codes, and workplace hierarchies.
          </p>
          <p><strong>DAN Solution:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>In the first week post-arrival, we provide cultural orientation programs to ensure compliance with local traditions and avoid accidental violations.</CheckListItem>
          </ul>

          {/* Sub-Section 6: Healthcare Access */}
          <SubSubHeading>6. Healthcare Access</SubSubHeading>
          <p>
            <span className={`${PAIN_POINT_COLOR} font-bold`}>Pain Point:</span> Delays in medical insurance activation leave candidates vulnerable during the first few weeks.
          </p>
          <p><strong>DAN Solution:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>We provide temporary healthcare coverage until official insurance is active, ensuring workers are never left unprotected.</CheckListItem>
          </ul>

          {/* Sub-Section 7: Family Adjustment */}
          <SubSubHeading>7. Family Adjustment</SubSubHeading>
          <p>
            <span className={`${PAIN_POINT_COLOR} font-bold`}>Pain Point:</span> Dependents often struggle with school admissions, cultural adaptation, and social isolation.
          </p>
          <p><strong>DAN Solution:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>DAN partners with international schools, expat networks, and community groups, helping families integrate smoothly.</CheckListItem>
          </ul>

          {/* Sub-Section 8: Exit Visa Traps */}
          <SubSubHeading>8. Exit Visa Traps</SubSubHeading>
          <p>
            <span className={`${PAIN_POINT_COLOR} font-bold`}>Pain Point:</span> Some employers block workers from leaving the country, trapping them in unfair situations.
          </p>
          <p><strong>DAN Solution:</strong></p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>We ensure all contracts specify exit visa rights clearly.</CheckListItem>
            <CheckListItem>Candidates are educated on platforms like **Absher (KSA)** to file complaints if needed.</CheckListItem>
          </ul>


          {/* Final Sections */}
          <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-4" style={{ color: PRIMARY_COLOR }}>Why DAN International Solutions?</h2>
          <p>Unlike traditional recruiters, <strong>DAN International Solutions</strong> is not just a placement agency—we are a strategic HR partner for both candidates and employers across the Gulf. Our expertise in compliance, documentation, cultural integration, and mobility services ensures that employment in the GCC is transparent, stress-free, and successful.</p>
          
          <p>Whether you are a skilled technician heading to Riyadh, an executive moving to Dubai, or a professional seeking long-term growth in Qatar, <strong>DAN International</strong> is your trusted partner before you go and after you arrive.</p>

          <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-4" style={{ color: PRIMARY_COLOR }}>Final Takeaway</h2>
          <p>Employment in the Gulf is a life-changing opportunity, but without the right guidance, workers can fall into traps ranging from recruitment scams to legal complications. By choosing <strong>DAN International Solutions</strong>, candidates gain access to verified pathways, legal protection, and ongoing support throughout their journey.</p>
        </div>
      </div>
    </article>
  );
};

export default BlogPostThree;