import React from 'react';
// Assuming you have installed react-icons
import { RiCheckboxCircleFill } from 'react-icons/ri'; 

// Define the colors based on the provided CSS variables
const PRIMARY_COLOR = '#46b724'; 
const SECONDARY_COLOR = '#000';
const LIGHT_BG = '#f7f7f7';

const BlogPostNine = () => {
  
  // Utility component for the custom solid-circle bullet list (replacing .bullet-point)
  const CustomBulletItem = ({ children }) => (
    <li className="flex items-start mb-3 text-gray-700 leading-relaxed text-lg pl-8 relative">
      {/* Unicode for a solid circle bullet, styled with the primary color */}
      <span className="absolute left-0 top-0.5 text-xl font-extrabold" style={{ color: PRIMARY_COLOR }}>
        &bull; 
      </span>
      <span>{children}</span>
    </li>
  );
  
  // Utility component for the check-list items (replacing .check-list)
  const CheckListItem = ({ children }) => (
    <li className="flex items-start mb-3 text-gray-700 leading-relaxed text-lg pl-8 relative">
      <RiCheckboxCircleFill 
        className="flex-shrink-0 absolute left-0 top-0.5 text-xl" 
        style={{ color: PRIMARY_COLOR }} 
      />
      <span>{children}</span>
    </li>
  );

  // Utility component for example lists (replacing .example-list)
  // This uses a standard list-disc with specific text styling (italic and darker color)
  const ExampleListItem = ({ children }) => (
    <li className="list-disc ml-5 mb-2 text-gray-600 italic text-lg">{children}</li>
  );

  // Utility component for sub-sub-headings (replacing .sub-sub-heading)
  const SubSubHeading = ({ children }) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 border-b border-gray-100 pb-1">
      {children}
    </h3>
  );

  return (
    // Main container (replacing .blog-container)
    <article className="min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Blog Title (replacing .blog-title) */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 pt-9 leading-tight">
          Winning the Talent War: 
          <span style={{ color: PRIMARY_COLOR }} className="font-bold"> DAN International’s Data-Backed Strategies for Top Talent Acquisition</span>
        </h1>

        {/* Introduction Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2 border-t" style={{ color: PRIMARY_COLOR }}>
          Introduction: The Global Talent Shortage Challenge
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>In today’s hyper-competitive hiring market, companies are facing unprecedented challenges in finding and retaining qualified talent. According to ManpowerGroup 2024, <strong>77% of global employers report difficulty in filling positions</strong> — the highest in over 16 years.</p>
          
          <p>At <strong>DAN International Solutions</strong>, we recognize that winning the talent war requires more than just posting jobs. It demands a strategic, data-driven, and candidate-focused approach. With our <strong>Talent Magnet Framework™</strong>, we help organizations attract, engage, and retain elite professionals across industries and geographies.</p>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Section 1: The New Rules of Talent Attraction */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          1. The New Rules of Talent Attraction
        </h2>
        
        <SubSubHeading>1.1 Why Traditional Hiring Fails</SubSubHeading>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Conventional recruitment methods are no longer enough:</p>
          
          <ul className="list-none space-y-2 pl-0">
            <CustomBulletItem>Job boards alone yield less than <strong>15%</strong> of qualified candidates.</CustomBulletItem>
            <CustomBulletItem>Standard salary and benefits packages do little to differentiate employers.</CustomBulletItem>
            <CustomBulletItem>Lengthy hiring processes cause <strong>62%</strong> of top candidates to drop out.</CustomBulletItem>
          </ul>
        </div>

        <SubSubHeading>1.2 DAN International’s Market Insights</SubSubHeading>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Through ongoing research and global talent tracking, DAN International identifies what truly matters to today’s workforce:</p>
          
          {/* Info Table (replacing .info-table) */}
          <div className="overflow-x-auto my-6">
            <table className="w-full table-auto text-left border-collapse border border-gray-300 text-base">
              <thead>
                <tr>
                  <th className="p-3 border text-white font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>Priority</th>
                  <th className="p-3 border text-white font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>% Candidates Ranking #1</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="p-3 border text-gray-700">Career growth</td>
                  <td className="p-3 border font-semibold" style={{ color: SECONDARY_COLOR }}>43%</td>
                </tr>
                <tr style={{ backgroundColor: LIGHT_BG }} className="hover:bg-gray-200">
                  <td className="p-3 border text-gray-700">Work flexibility</td>
                  <td className="p-3 border font-semibold" style={{ color: SECONDARY_COLOR }}>38%</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="p-3 border text-gray-700">Company culture</td>
                  <td className="p-3 border font-semibold" style={{ color: SECONDARY_COLOR }}>37%</td>
                </tr>
                <tr style={{ backgroundColor: LIGHT_BG }} className="hover:bg-gray-200">
                  <td className="p-3 border text-gray-700">Compensation</td>
                  <td className="p-3 border font-semibold" style={{ color: SECONDARY_COLOR }}>35%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>This data-driven approach ensures our clients align their hiring strategies with candidate expectations.</p>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Section 2: DAN International’s 5-Point Talent Attraction System */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          2. DAN International’s 5-Point Talent Attraction System
        </h2>
        <p className="text-lg text-gray-700">To help organizations win in the competitive talent landscape, DAN International has designed a <strong>5-Point System</strong> that combines branding, sourcing, candidate care, compensation design, and AI tools.</p>
        
        <SubSubHeading>2.1 Employer Branding That Resonates</SubSubHeading>
        <div className="text-lg text-gray-700 space-y-6">
          <p>We help employers craft an authentic <strong>Employer Value Proposition (EVP)</strong> by focusing on:</p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>Employee storytelling campaigns</CheckListItem>
            <CheckListItem>Transparent communication of growth opportunities</CheckListItem>
            <CheckListItem>Sector-specific branding strategies</CheckListItem>
          </ul>
          <p>A strong brand ensures talent chooses you before competitors.</p>
        </div>

        <SubSubHeading>2.2 Precision Talent Sourcing</SubSubHeading>
        <div className="text-lg text-gray-700 space-y-6">
          <p>With our <strong>Global Talent Mapping™</strong> process, DAN International identifies talent pools proactively rather than reactively. Our approach includes:</p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>Competitor and market intelligence</CheckListItem>
            <CheckListItem>Niche professional network engagement</CheckListItem>
            <CheckListItem>Alumni and passive talent reactivation</CheckListItem>
          </ul>
          <p>This ensures companies always have a ready-to-hire pipeline of high-quality candidates.</p>
        </div>

        <SubSubHeading>2.3 Candidate-Centric Hiring Process</SubSubHeading>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Modern candidates expect speed, clarity, and respect during recruitment. DAN International’s <strong>Candidate Experience Scorecard™</strong> supports:</p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>Quick turnaround times (shorter time-to-interview cycles)</CheckListItem>
            <CheckListItem>Personalized communication at each stage</CheckListItem>
            <CheckListItem>Mobile-friendly applications for global access</CheckListItem>
          </ul>
          <p>A better candidate experience translates directly into stronger employer reputation.</p>
        </div>

        <SubSubHeading>2.4 Competitive Compensation Architecture</SubSubHeading>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Salary alone does not win talent. Using our <strong>Total Rewards Optimizer™</strong>, we advise employers on:</p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>Market benchmarking across industries and regions</CheckListItem>
            <CheckListItem>Balancing financial compensation with benefits and flexibility</CheckListItem>
            <CheckListItem>Personalizing rewards to reflect generational and cultural differences</CheckListItem>
          </ul>
          <p>This ensures offers are both competitive and compelling.</p>
        </div>

        <SubSubHeading>2.5 AI-Enhanced Talent Pipelining</SubSubHeading>
        <div className="text-lg text-gray-700 space-y-6">
          <p>With <strong>Talent Radar™</strong>, DAN International uses AI tools to forecast future hiring needs and identify skill shortages before they become critical. Features include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <ExampleListItem>Predictive analytics on talent availability</ExampleListItem>
            <ExampleListItem>Automated talent engagement campaigns</ExampleListItem>
            <ExampleListItem>Skills-gap forecasting for workforce planning</ExampleListItem>
          </ul>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Section 3: Industry-Specific Talent Solutions */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          3. Industry-Specific Talent Solutions
        </h2>
        
        <SubSubHeading>3.1 Technology Sector</SubSubHeading>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Tech companies face one of the hardest battles in attracting digital talent. DAN International provides:</p>
          <ul className="list-none space-y-2 pl-0">
            <CustomBulletItem>Access to niche developer and data science communities</CustomBulletItem>
            <CustomBulletItem>Events and hackathons to engage top talent</CustomBulletItem>
            <CustomBulletItem>Pre-verified pipelines for roles in AI, cloud, and cybersecurity</CustomBulletItem>
          </ul>
        </div>

        <SubSubHeading>3.2 Construction & Engineering</SubSubHeading>
        <div className="text-lg text-gray-700 space-y-6">
          <p>We address the blue-collar and project-based workforce needs by providing:</p>
          <ul className="list-none space-y-2 pl-0">
            <CustomBulletItem>Visa-ready skilled labor pools</CustomBulletItem>
            <CustomBulletItem>Regional training and certification programs</CustomBulletItem>
            <CustomBulletItem>Multilingual onboarding to ensure smooth transitions</CustomBulletItem>
          </ul>
        </div>

        <SubSubHeading>3.3 Healthcare</SubSubHeading>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Healthcare employers benefit from our <strong>Global MedTalent Program</strong> which supports:</p>
          <ul className="list-none space-y-2 pl-0">
            <CustomBulletItem>International licensing assistance</CustomBulletItem>
            <CustomBulletItem>Specialist community networks</CustomBulletItem>
            <CustomBulletItem>Relocation and integration support</CustomBulletItem>
          </ul>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Section 4: Measuring Talent Acquisition Success */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          4. Measuring Talent Acquisition Success
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>At DAN International, success is measurable, not vague. We establish clear KPIs for every hiring campaign:</p>
          
          {/* Info Table (replacing .info-table) */}
          <div className="overflow-x-auto my-6">
            <table className="w-full table-auto text-left border-collapse border border-gray-300 text-base">
              <thead>
                <tr>
                  <th className="p-3 border text-white font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>Metric</th>
                  <th className="p-3 border text-white font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>Industry Standard</th>
                  <th className="p-3 border text-white font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>With DAN International</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="p-3 border text-gray-700"><strong>Time-to-fill</strong></td>
                  <td className="p-3 border font-semibold" style={{ color: SECONDARY_COLOR }}>42 days</td>
                  <td className="p-3 border text-gray-700">Reduced significantly</td>
                </tr>
                <tr style={{ backgroundColor: LIGHT_BG }} className="hover:bg-gray-200">
                  <td className="p-3 border text-gray-700"><strong>Quality-of-hire</strong></td>
                  <td className="p-3 border font-semibold" style={{ color: SECONDARY_COLOR }}>60% retention at 1 year</td>
                  <td className="p-3 border text-gray-700">Higher consistency</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="p-3 border text-gray-700"><strong>Cost-per-hire</strong></td>
                  <td className="p-3 border font-semibold" style={{ color: SECONDARY_COLOR }}>$4,000+ average</td>
                  <td className="p-3 border text-gray-700">More cost-efficient</td>
                </tr>
                <tr style={{ backgroundColor: LIGHT_BG }} className="hover:bg-gray-200">
                  <td className="p-3 border text-gray-700"><strong>Candidate satisfaction</strong></td>
                  <td className="p-3 border font-semibold" style={{ color: SECONDARY_COLOR }}>3.2/5 average</td>
                  <td className="p-3 border text-gray-700">Significantly higher</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Our focus is on consistent improvement, measurable impact, and long-term retention.</p>
        </div>
        
        <hr className="my-8 border-gray-200" />

        {/* Section 5: Future-Proofing Talent Acquisition */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          5. Future-Proofing Talent Acquisition
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>The talent war will only intensify in the coming years. To stay competitive, DAN International recommends:</p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem>Shifting to <strong>skills-based hiring</strong> rather than degree-driven filters</CheckListItem>
            <CheckListItem>Embracing micro-credentials and digital certifications</CheckListItem>
            <CheckListItem>Building internal mobility pathways to retain talent</CheckListItem>
            <CheckListItem>Using <strong>AI-augmented recruitment teams</strong> for faster, smarter hiring</CheckListItem>
          </ul>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Conclusion */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Conclusion: Partner with DAN International to Win the Talent War
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Talent acquisition has become one of the greatest challenges of our time. Organizations that fail to evolve risk losing their competitive edge. DAN International Solutions empowers employers with:</p>
          
          <ul className="list-none space-y-2 pl-0">
            <CustomBulletItem>✅ Data-driven talent attraction strategies</CustomBulletItem>
            <CustomBulletItem>✅ Global yet localized recruitment expertise</CustomBulletItem>
            <CustomBulletItem>✅ AI-powered talent mapping and forecasting tools</CustomBulletItem>
            <CustomBulletItem>✅ Proven frameworks for future-ready hiring</CustomBulletItem>
          </ul>

          <p className="font-semibold italic">Final Thoughts:</p>
          <p>The global talent shortage is not just a challenge — it’s an opportunity for forward-thinking organizations to differentiate themselves. By partnering with <strong>DAN International</strong>, businesses gain access to a recruitment partner that blends global reach with local insight, ensuring they always stay ahead in the talent race.</p>

          {/* Highlight Box (replacing .highlight-box) */}
          <div className="border-l-4 p-5 rounded-md mt-8" style={{ borderColor: PRIMARY_COLOR, backgroundColor: LIGHT_BG }}>
            <p className="mb-2 text-xl font-bold text-gray-800">📌 Take the First Step Today</p>
            <ul className="list-none space-y-2 pl-0 mt-3">
              <CheckListItem>Request a Talent Attraction Audit</CheckListItem>
              <CheckListItem>Access our Compensation Benchmarks Report</CheckListItem>
              <CheckListItem>Schedule a Strategy Session with DAN International experts</CheckListItem>
            </ul>
            <p className="font-bold text-gray-800 mt-4">DAN International Solutions – Building world-class teams in competitive markets.</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostNine;