import React from 'react';
// Requires installation: npm install react-icons or yarn add react-icons
import { RiCheckboxCircleFill } from 'react-icons/ri'; 

// Define the colors based on the provided CSS variables
const PRIMARY_COLOR = '#46b724'; // Green
const SECONDARY_COLOR = '#000'; // Black
const LIGHT_BG = '#f7f7f7'; // Light Gray

const BlogPostThirteen = () => {
  
  // Utility component for the custom solid-circle bullet list (replacing .bullet-point)
  const CustomBulletItem = ({ children, useArrow = false }) => (
    <li className="flex items-start mb-3 text-gray-700 leading-relaxed text-lg pl-8 relative">
      {/* Unicode for a solid circle bullet (or right arrow if specified), styled with the primary color */}
      <span className="absolute left-0 top-0.5 text-xl font-extrabold" style={{ color: PRIMARY_COLOR }}>
        {useArrow ? '➡' : '\u2022'} 
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

  // Utility component for the feature list (replacing .feature-list-group)
  const FeatureList = ({ children }) => (
    <ul className="list-disc ml-5 text-gray-700 space-y-1 text-base leading-snug mb-5">
        {children}
    </ul>
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
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 pt-8 leading-tight" style={{ color: SECONDARY_COLOR }}>
          Selecting the Right HRMS: 
          <span style={{ color: PRIMARY_COLOR }} className="font-bold"> A Strategic Guide by DAN International</span>
        </h1>

        {/* Introduction Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Introduction to HRMS Selection
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p><strong>DAN International</strong> provides expert guidance to help organizations navigate the complex process of choosing a <strong>Human Resource Management System (HRMS)</strong>. The right HRMS solution can transform your HR operations, streamline processes, and enhance workforce management.</p>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Understanding HRMS Solutions Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Understanding HRMS Solutions
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>An HRMS integrates multiple HR functions into a unified platform. Key components include:</p>
          
          <SubSubHeading>Core HRMS Modules</SubSubHeading>
          <ul className="list-none space-y-2 pl-0 mt-4">
            <CustomBulletItem>Employee database management</CustomBulletItem>
            <CustomBulletItem>Payroll processing</CustomBulletItem>
            <CustomBulletItem>Benefits administration</CustomBulletItem>
            <CustomBulletItem>Time and attendance tracking</CustomBulletItem>
            <CustomBulletItem>Recruitment and onboarding</CustomBulletItem>
          </ul>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* HRMS Selection Framework Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          DAN International's HRMS Selection Framework
        </h2>
        
        <SubSubHeading>1. Needs Assessment</SubSubHeading>
        <p className="text-lg text-gray-700">Before evaluating vendors, DAN International recommends:</p>
        
        <p className="text-lg font-semibold text-gray-800 mt-4">Organizational Analysis</p>
        <FeatureList>
          <li>Company size and structure</li>
          <li>Geographic distribution</li>
          <li>Growth projections</li>
          <li>Current HR pain points</li>
        </FeatureList>

        <p className="text-lg font-semibold text-gray-800 mt-4">Stakeholder Requirements</p>
        <FeatureList>
          <li>HR team needs</li>
          <li>Manager expectations</li>
          <li>Employee experience considerations</li>
          <li>IT infrastructure compatibility</li>
        </FeatureList>

        <SubSubHeading>2. Key Selection Criteria</SubSubHeading>
        <p className="text-lg text-gray-700">DAN International's evaluation matrix includes:</p>
        
        <p className="text-lg font-semibold text-gray-800 mt-4">Technical Considerations</p>
        <FeatureList>
          <li>Cloud vs. on-premise solutions</li>
          <li>Integration capabilities</li>
          <li>Mobile accessibility</li>
          <li>Data security standards</li>
        </FeatureList>

        <p className="text-lg font-semibold text-gray-800 mt-4">Functional Requirements</p>
        <FeatureList>
          <li>Core HR features</li>
          <li>Talent management tools</li>
          <li>Analytics and reporting</li>
          <li>Compliance management</li>
        </FeatureList>

        <p className="text-lg font-semibold text-gray-800 mt-4">Vendor Evaluation</p>
        <FeatureList>
          <li>Implementation support</li>
          <li>Training resources</li>
          <li>Customer service quality</li>
          <li>Product roadmap</li>
        </FeatureList>

        <hr className="my-8 border-gray-200" />

        {/* Implementation Considerations Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Implementation Considerations
        </h2>
        <p className="text-lg text-gray-700">DAN International's phased approach:</p>
        
        <SubSubHeading>1. Pre-Implementation</SubSubHeading>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CustomBulletItem>Data cleansing and migration planning</CustomBulletItem>
          <CustomBulletItem>Process redesign</CustomBulletItem>
          <CustomBulletItem>Change management strategy</CustomBulletItem>
        </ul>

        <SubSubHeading>2. Deployment</SubSubHeading>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CustomBulletItem>System configuration</CustomBulletItem>
          <CustomBulletItem>User acceptance testing</CustomBulletItem>
          <CustomBulletItem>Training programs</CustomBulletItem>
        </ul>

        <SubSubHeading>3. Post-Implementation</SubSubHeading>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CustomBulletItem>Performance monitoring</CustomBulletItem>
          <CustomBulletItem>User feedback collection</CustomBulletItem>
          <CustomBulletItem>Continuous optimization</CustomBulletItem>
        </ul>

        <hr className="my-8 border-gray-200" />

        {/* HRMS Trends to Consider Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          HRMS Trends to Consider
        </h2>
        <p className="text-lg text-gray-700">DAN International highlights emerging technologies:</p>
        
        <SubSubHeading>Innovative Features</SubSubHeading>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CheckListItem><strong>AI-powered analytics</strong></CheckListItem>
          <CheckListItem>Employee self-service portals</CheckListItem>
          <CheckListItem>Predictive workforce planning</CheckListItem>
          <CheckListItem>Enhanced candidate experience tools</CheckListItem>
        </ul>

        <hr className="my-8 border-gray-200" />

        {/* Why Partner Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Why Partner with DAN International for HRMS Selection
        </h2>
        <p className="text-lg text-gray-700">Our advisory services provide:</p>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CustomBulletItem>Vendor-neutral recommendations</CustomBulletItem>
          <CustomBulletItem>Comprehensive requirement analysis</CustomBulletItem>
          <CustomBulletItem>Implementation best practices</CustomBulletItem>
          <CustomBulletItem>Ongoing support resources</CustomBulletItem>
        </ul>

        {/* Highlight Box (replacing .highlight-box) */}
        <div className="border-l-4 p-5 rounded-md mt-8" style={{ borderColor: PRIMARY_COLOR, backgroundColor: LIGHT_BG }}>
          <p className="mb-2 text-xl font-bold text-gray-800">Next Steps with DAN International</p>
          <ul className="list-none space-y-2 pl-0 mt-3">
            <CustomBulletItem useArrow={true}>Request our HRMS comparison checklist</CustomBulletItem>
            <CustomBulletItem useArrow={true}>Schedule a needs assessment consultation</CustomBulletItem>
            <CustomBulletItem useArrow={true}>Access our vendor evaluation toolkit</CustomBulletItem>
          </ul>
          <p className="font-bold text-gray-800 mt-4">DAN International - Your trusted partner in HR technology strategy.</p>
        </div>
      </div>
    </article>
  );
};

export default BlogPostThirteen;