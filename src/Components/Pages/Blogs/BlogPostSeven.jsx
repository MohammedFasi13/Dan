import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri'; // Using react-icons for the checkmark

// Define the colors based on the provided CSS variables
const PRIMARY_COLOR = '#46b724'; 
const LIGHT_BG = '#f7f7f7';

const BlogPostSeven = () => {
  
  // Utility component for the custom bullet-point list (replacing .bullet-point)
  const CustomBulletItem = ({ children }) => (
    <li className="flex items-start mb-3 text-gray-700 leading-relaxed text-lg pl-8 relative">
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

  // Utility component for sub-sub-headings (replacing .sub-sub-heading)
  const SubSubHeading = ({ children }) => (
    <h3 className="text-xl font-semibold text-gray-800 pt-6 mb-3 border-b border-gray-100 pb-1">
      {children}
    </h3>
  );

  return (
    // Main container (replacing .blog-container with modern Tailwind spacing)
    <article className="min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Blog Title (replacing .blog-title) */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-8 leading-tight">
          Strategic Workforce Transformation: 
          <span style={{ color: PRIMARY_COLOR }} className="font-bold"> DAN International's Comprehensive Approach to Modern Work Models</span>
        </h1>

        {/* Introduction Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2 border-t" style={{ color: PRIMARY_COLOR }}>
          Introduction: The Global Workforce Revolution
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>The modern workplace is evolving at a pace never seen before. <strong>Remote, hybrid, and flexible work models</strong> are no longer temporary fixes—they are the foundation of future work. At <strong>DAN International Solutions</strong>, we recognize that organizations today need practical frameworks and actionable strategies to design work models that balance productivity, employee well-being, and compliance.</p>
          
          <p>This article explores how DAN International approaches workforce transformation, with insights on global trends, our strategic framework, and recommendations for businesses seeking to adapt.</p>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Section 1: The Evolving Global Workforce Landscape */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Section 1: The Evolving Global Workforce Landscape
        </h2>
        
        <SubSubHeading>1.1 The New Paradigm of Work</SubSubHeading>
        <div className="text-lg text-gray-700 space-y-6">
          <p>The pandemic accelerated flexible work adoption, but the shift was already in motion. Employees now demand autonomy, organizations seek cost efficiency, and technology enables seamless collaboration.</p>
          
          <p className="font-semibold text-gray-800">Key global trends:</p>
          <ul className="list-none space-y-2 pl-0">
            <CustomBulletItem>Majority of employees prefer <strong>hybrid or flexible models</strong> over full-time office work.</CustomBulletItem>
            <CustomBulletItem>Companies adopting hybrid models report <strong>improved productivity and lower attrition.</strong></CustomBulletItem>
            <CustomBulletItem>Leaders face challenges in sustaining company culture and collaboration across distributed teams.</CustomBulletItem>
          </ul>
        </div>

        <SubSubHeading>1.2 Regional Variations in Work Preferences</SubSubHeading>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Workforce expectations differ across geographies, and DAN International emphasizes the importance of tailoring models by region:</p>
          
          {/* Info Table (replacing .info-table) */}
          <div className="overflow-x-auto my-8">
            <table className="w-full table-auto text-left border-collapse border border-gray-300 text-base">
              <thead>
                <tr>
                  <th className="p-3 border text-white font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>Region</th>
                  <th className="p-3 border text-white font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>Preference for Hybrid Work</th>
                  <th className="p-3 border text-white font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>Key Challenges</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="p-3 border font-semibold text-gray-900">North America</td>
                  <td className="p-3 border">Strong demand for hybrid</td>
                  <td className="p-3 border">Time-zone coordination</td>
                </tr>
                <tr style={{ backgroundColor: LIGHT_BG }} className="hover:bg-gray-200">
                  <td className="p-3 border font-semibold text-gray-900">Europe</td>
                  <td className="p-3 border">Balanced mix</td>
                  <td className="p-3 border">Regulatory compliance</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="p-3 border font-semibold text-gray-900">Middle East</td>
                  <td className="p-3 border">Emerging hybrid adoption</td>
                  <td className="p-3 border">Cultural adaptation</td>
                </tr>
                <tr style={{ backgroundColor: LIGHT_BG }} className="hover:bg-gray-200">
                  <td className="p-3 border font-semibold text-gray-900">Asia-Pacific</td>
                  <td className="p-3 border">Growing remote adoption</td>
                  <td className="p-3 border">Technology infrastructure gaps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Section 2: DAN International's Strategic Framework */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Section 2: DAN International's Strategic Framework
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>At <strong>DAN International</strong>, we apply a <strong>four-dimensional evaluation model</strong> to help businesses define their ideal work strategy:</p>
          
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem><strong>Operational Analysis</strong> – Identify processes that require in-person collaboration vs. those suited for remote execution.</CheckListItem>
            <CheckListItem><strong>Workforce Profiling</strong> – Understand employee preferences, role categorizations, and skill distributions.</CheckListItem>
            <CheckListItem><strong>Technology Audit</strong> – Assess digital readiness, collaboration tools, and cybersecurity infrastructure.</CheckListItem>
            <CheckListItem><strong>Compliance Check</strong> – Review local labor laws, data protection standards, and tax implications.</CheckListItem>
          </ul>
          <p>This structured framework ensures organizations make <strong>data-driven decisions</strong> about work models.</p>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Section 3: Industry-Specific Considerations */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Section 3: Industry-Specific Considerations
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Different industries face different workforce challenges:</p>
          
          <ul className="list-none space-y-2 pl-0">
            <CustomBulletItem><strong>Financial Services</strong> – High compliance requirements, client-facing needs, yet growing appetite for flexible back-office roles.</CustomBulletItem>
            <CustomBulletItem><strong>Manufacturing & Petrochemicals</strong> – On-site production teams supported by hybrid planning, logistics, and quality control functions.</CustomBulletItem>
            <CustomBulletItem><strong>IT & Professional Services</strong> – Strong potential for <strong>hybrid/remote-first adoption</strong>, with emphasis on digital collaboration tools.</CustomBulletItem>
          </ul>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Section 4: Technology as the Enabler */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Section 4: Technology as the Enabler
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Modern work transformation is impossible without digital enablement. DAN International advocates for:</p>
          
          <ul className="list-none space-y-2 pl-0">
            <CustomBulletItem><strong>Collaboration Platforms</strong> – Secure video conferencing, project management, and workflow automation.</CustomBulletItem>
            <CustomBulletItem><strong>Workforce Analytics</strong> – Real-time data on productivity, engagement, and retention.</CustomBulletItem>
            <CustomBulletItem><strong>Compliance Tools</strong> – Automated labor law tracking and documentation.</CustomBulletItem>
          </ul>
          <p>Startups and SMEs can begin with affordable, scalable solutions before moving to enterprise-grade platforms.</p>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Section 5: Measuring Success */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Section 5: Measuring Success
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Organizations should measure transformation impact using:</p>
          
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem><strong>Productivity Metrics</strong> – Output per employee, project completion speed.</CheckListItem>
            <CheckListItem><strong>Employee Experience</strong> – Engagement surveys, retention trends, burnout indicators.</CheckListItem>
            <CheckListItem><strong>Business Outcomes</strong> – Cost savings, client satisfaction, faster decision-making.</CheckListItem>
          </ul>
          <p>DAN International encourages <strong>quarterly reviews</strong> to refine workforce strategies continuously.</p>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Conclusion */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Conclusion: The DAN International Advantage
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>While DAN International is a new entrant, our strength lies in our <strong>agility, innovation, and global perspective</strong>. We bring fresh thinking and a practical, ethical approach to workforce transformation—helping businesses adapt with confidence in the digital era.</p>
          
          <p className="font-semibold italic">Final Thoughts:</p>
          <p>The future of work is neither fully remote nor entirely on-site—it is <strong>strategically hybrid</strong>, tailored to the needs of each organization. With the right framework and digital support, companies can achieve both efficiency and employee satisfaction.</p>

          {/* Final Contact Highlight Box (replacing .highlight-box) */}
          <div className="border-l-4 p-5 rounded-md mt-8 text-center" style={{ borderColor: PRIMARY_COLOR, backgroundColor: LIGHT_BG }}>
            <p className="mb-2 text-xl font-bold text-gray-800"> Partner with DAN International to explore modern workforce models designed for your unique business needs.</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostSeven;