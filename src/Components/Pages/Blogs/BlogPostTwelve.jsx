import React from 'react';
// Requires installation: npm install react-icons or yarn add react-icons
import { RiCheckboxCircleFill } from 'react-icons/ri'; 

// Define the colors based on the provided CSS variables
const PRIMARY_COLOR = '#46b724'; // Green
const SECONDARY_COLOR = '#000'; // Black
const LIGHT_BG = '#f7f7f7'; // Light Gray

const BlogPostTwelve = () => {
  
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
          Building a Positive Workplace Culture: 
          <span style={{ color: PRIMARY_COLOR }} className="font-bold"> Insights from DAN International</span>
        </h1>

        {/* Introduction Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Introduction to Workplace Culture
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p><strong>DAN International</strong> recognizes workplace culture as the foundation of organizational success. A positive culture drives **employee engagement, productivity, and retention** while supporting business objectives. This guide explores fundamental principles for cultivating a thriving work environment.</p>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Understanding Workplace Culture Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Understanding Workplace Culture
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Workplace culture encompasses the shared values, beliefs, and behaviors that shape how work gets done. DAN International emphasizes these core cultural components:</p>

          <SubSubHeading>1. Leadership Commitment</SubSubHeading>
          <ul className="list-none space-y-2 pl-0 mt-4">
            <CustomBulletItem>Visible support from senior management</CustomBulletItem>
            <CustomBulletItem>Consistent demonstration of company values</CustomBulletItem>
            <CustomBulletItem>Open-door policies for communication</CustomBulletItem>
          </ul>

          <SubSubHeading>2. Employee Engagement</SubSubHeading>
          <ul className="list-none space-y-2 pl-0 mt-4">
            <CustomBulletItem>Opportunities for professional growth</CustomBulletItem>
            <CustomBulletItem>Meaningful recognition programs</CustomBulletItem>
            <CustomBulletItem>Inclusive decision-making processes</CustomBulletItem>
          </ul>

          <SubSubHeading>3. Organizational Values</SubSubHeading>
          <ul className="list-none space-y-2 pl-0 mt-4">
            <CustomBulletItem>Clearly defined and communicated principles</CustomBulletItem>
            <CustomBulletItem>Alignment between stated values and daily operations</CustomBulletItem>
            <CustomBulletItem>Integration into hiring and performance evaluations</CustomBulletItem>
          </ul>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* DAN International's Framework Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          DAN International's Framework for Positive Culture
        </h2>
        
        <SubSubHeading>1. Communication Strategies</SubSubHeading>
        <p className="text-lg text-gray-700">Effective workplace culture requires:</p>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CheckListItem>Transparent company updates</CheckListItem>
          <CheckListItem>Regular team meetings</CheckListItem>
          <CheckListItem>Multiple feedback channels</CheckListItem>
          <CheckListItem>Cross-departmental collaboration</CheckListItem>
        </ul>
        
        <SubSubHeading>2. Professional Development</SubSubHeading>
        <p className="text-lg text-gray-700">Supporting employee growth through:</p>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CheckListItem>Skills training programs</CheckListItem>
          <CheckListItem>Mentorship opportunities</CheckListItem>
          <CheckListItem>Career path planning</CheckListItem>
          <CheckListItem>Continuous learning resources</CheckListItem>
        </ul>

        <SubSubHeading>3. Work-Life Integration</SubSubHeading>
        <p className="text-lg text-gray-700">Promoting employee wellbeing with:</p>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CheckListItem>Flexible work arrangements</CheckListItem>
          <CheckListItem>Mental health support</CheckListItem>
          <CheckListItem>Paid time off policies</CheckListItem>
          <CheckListItem>Wellness initiatives</CheckListItem>
        </ul>

        <hr className="my-8 border-gray-200" />

        {/* Implementing Cultural Initiatives Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Implementing Cultural Initiatives
        </h2>
        <p className="text-lg text-gray-700">DAN International recommends this structured approach:</p>
        
        <SubSubHeading>1. Assessment Phase</SubSubHeading>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CustomBulletItem>Employee surveys</CustomBulletItem>
          <CustomBulletItem>Focus groups</CustomBulletItem>
          <CustomBulletItem>Cultural audits</CustomBulletItem>
        </ul>
        
        <SubSubHeading>2. Planning Phase</SubSubHeading>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CustomBulletItem>Priority identification</CustomBulletItem>
          <CustomBulletItem>Goal setting</CustomBulletItem>
          <CustomBulletItem>Resource allocation</CustomBulletItem>
        </ul>
        
        <SubSubHeading>3. Execution Phase</SubSubHeading>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CustomBulletItem>Pilot programs</CustomBulletItem>
          <CustomBulletItem>Departmental rollouts</CustomBulletItem>
          <CustomBulletItem>Manager training</CustomBulletItem>
        </ul>
        
        <SubSubHeading>4. Evaluation Phase</SubSubHeading>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CustomBulletItem>Progress metrics</CustomBulletItem>
          <CustomBulletItem>Feedback collection</CustomBulletItem>
          <CustomBulletItem>Continuous improvement</CustomBulletItem>
        </ul>

        <hr className="my-8 border-gray-200" />

        {/* Sustaining and Measuring Cultural Impact Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Sustaining and Measuring Cultural Impact
        </h2>

        <SubSubHeading>Measuring Cultural Impact</SubSubHeading>
        <p className="text-lg text-gray-700">Key performance indicators include:</p>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CheckListItem>Employee retention rates</CheckListItem>
          <CheckListItem>Engagement survey scores</CheckListItem>
          <CheckListItem>Internal promotion rates</CheckListItem>
          <CheckListItem>Absenteeism metrics</CheckListItem>
        </ul>

        <SubSubHeading>Sustaining Positive Culture</SubSubHeading>
        <p className="text-lg text-gray-700">DAN International emphasizes these maintenance strategies:</p>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CustomBulletItem>Regular cultural check-ins</CustomBulletItem>
          <CustomBulletItem>Leadership development programs</CustomBulletItem>
          <CustomBulletItem>Policy reviews and updates</CustomBulletItem>
          <CustomBulletItem>Celebration of milestones</CustomBulletItem>
        </ul>

        <SubSubHeading>Why Culture Matters for Business</SubSubHeading>
        <p className="text-lg text-gray-700">A positive workplace culture contributes to:</p>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CheckListItem>Enhanced productivity</CheckListItem>
          <CheckListItem>Improved talent attraction</CheckListItem>
          <CheckListItem>Stronger employer brand</CheckListItem>
          <CheckListItem>Better customer experiences</CheckListItem>
          <CheckListItem>Increased innovation</CheckListItem>
        </ul>
        
        <hr className="my-8 border-gray-200" />

        {/* DAN International's Advisory Approach Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          DAN International's Advisory Approach
        </h2>
        <p className="text-lg text-gray-700">While respecting client confidentiality, we offer:</p>
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CustomBulletItem>Cultural assessment tools</CustomBulletItem>
          <CustomBulletItem>Strategy development frameworks</CustomBulletItem>
          <CustomBulletItem>Implementation roadmaps</CustomBulletItem>
          <CustomBulletItem>Measurement methodologies</CustomBulletItem>
        </ul>

        {/* Highlight Box (replacing .highlight-box) */}
        <div className="border-l-4 p-5 rounded-md mt-8" style={{ borderColor: PRIMARY_COLOR, backgroundColor: LIGHT_BG }}>
          <p className="mb-2 text-xl font-bold text-gray-800">Next Steps with DAN International</p>
          <ul className="list-none space-y-2 pl-0 mt-3">
            <CustomBulletItem useArrow={true}>Request our workplace culture whitepaper</CustomBulletItem>
            <CustomBulletItem useArrow={true}>Schedule a cultural assessment consultation</CustomBulletItem>
            <CustomBulletItem useArrow={true}>Access our manager training resources</CustomBulletItem>
          </ul>
          <p className="font-bold text-gray-800 mt-4">DAN International - Supporting organizations in building thriving workplace cultures.</p>
        </div>
      </div>
    </article>
  );
};

export default BlogPostTwelve;