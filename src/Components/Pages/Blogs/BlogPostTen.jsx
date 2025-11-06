import React from 'react';
// Requires installation: npm install react-icons or yarn add react-icons
import { RiCheckboxCircleFill } from 'react-icons/ri'; 

// Define the colors based on the provided CSS variables
const PRIMARY_COLOR = '#46b724'; // Green
const SECONDARY_COLOR = '#000'; // Black
const LIGHT_BG = '#f7f7f7'; // Light Gray

const BlogPostTen = () => {
  
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
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 pt-8 leading-tight" style={{ color: SECONDARY_COLOR }}>
          Recruitment Process Outsourcing (RPO): 
          <span style={{ color: PRIMARY_COLOR }} className="font-bold"> A Strategic Overview by DAN International</span>
        </h1>

        {/* Introduction Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Introduction: The Future of Scalable Hiring
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Recruitment is no longer just about filling vacancies—it’s about building sustainable talent pipelines that align with business strategy. For organizations operating in fast-changing markets, <strong>Recruitment Process Outsourcing (RPO)</strong> has emerged as a proven way to optimize talent acquisition.</p>
          
          <p>At <strong>DAN International Solutions</strong>, we deliver customized RPO models that balance speed, quality, and compliance. Our approach combines global best practices with localized expertise, helping businesses recruit efficiently while keeping costs under control.</p>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* What is RPO Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          What is Recruitment Process Outsourcing (RPO)?
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p><strong>Recruitment Process Outsourcing (RPO)</strong> is a strategic partnership where organizations delegate part—or all—of their recruitment functions to a specialized provider like DAN International.</p>
          
          <p>Unlike traditional recruitment agencies, RPO goes beyond filling roles. It <strong>integrates deeply with your HR function</strong>, using data-driven insights, technology, and industry expertise to deliver long-term hiring success.</p>
          
          {/* Highlight Box (replacing .highlight-box) */}
          <div className="border-l-4 p-5 rounded-md mt-8" style={{ borderColor: PRIMARY_COLOR, backgroundColor: LIGHT_BG }}>
            <p className="mb-0 italic font-semibold text-gray-800">In short, with DAN International’s RPO, you don’t just hire employees—you build an adaptable, future-ready workforce.</p>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Why Companies Choose RPO Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Why Companies Choose RPO with DAN International
        </h2>
        <p className="text-lg text-gray-700">Organizations partner with DAN International for RPO because of the <strong>measurable advantages</strong> we bring:</p>
        
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CustomBulletItem><strong>Cost Efficiency:</strong> Reduced hiring costs through optimized processes and targeted sourcing.</CustomBulletItem>
          <CustomBulletItem><strong>Scalability:</strong> Flexible solutions to handle hiring spikes or expansion into new regions.</CustomBulletItem>
          <CustomBulletItem><strong>Quality of Hire:</strong> Access to vetted global talent pools for both white-collar and blue-collar roles.</CustomBulletItem>
          <CustomBulletItem><strong>Time Savings:</strong> Faster hiring cycles through automation and pre-screened candidate pipelines.</CustomBulletItem>
          <CustomBulletItem><strong>Compliance Assurance:</strong> Adherence to local labor laws, visa regulations, and global employment standards.</CustomBulletItem>
        </ul>

        <hr className="my-8 border-gray-200" />

        {/* RPO Models Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          DAN International’s RPO Models
        </h2>
        <p className="text-lg text-gray-700">Every business is unique, which is why we offer <strong>three flexible RPO solutions</strong>:</p>
        
        <SubSubHeading>End-to-End RPO</SubSubHeading>
        <ul className="list-disc pl-5 space-y-2">
          <ExampleListItem>Complete outsourcing of recruitment—sourcing, screening, interviewing, and onboarding.</ExampleListItem>
          <ExampleListItem>Ideal for organizations seeking a long-term strategic hiring partner.</ExampleListItem>
        </ul>

        <SubSubHeading>Project-Based RPO</SubSubHeading>
        <ul className="list-disc pl-5 space-y-2">
          <ExampleListItem>Focused support during rapid expansion, seasonal hiring, or new market entry.</ExampleListItem>
          <ExampleListItem>Short-term engagements with long-term impact.</ExampleListItem>
        </ul>

        <SubSubHeading>Selective RPO</SubSubHeading>
        <ul className="list-disc pl-5 space-y-2">
          <ExampleListItem>Outsourcing only specific recruitment functions (e.g., sourcing, compliance checks, or onboarding).</ExampleListItem>
          <ExampleListItem>Perfect for businesses that want to retain control while improving efficiency.</ExampleListItem>
        </ul>

        <hr className="my-8 border-gray-200" />

        {/* When to Consider RPO Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          When Should You Consider RPO?
        </h2>
        <p className="text-lg text-gray-700">At DAN International, we recommend RPO solutions when your organization is:</p>
        
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CheckListItem>Managing <strong>high-volume</strong> recruitment drives.</CheckListItem>
          <CheckListItem>Expanding into new geographies or industries.</CheckListItem>
          <CheckListItem>Facing <strong>specialized hiring challenges</strong> (tech, healthcare, engineering, etc.).</CheckListItem>
          <CheckListItem>Struggling with time-to-hire and cost-per-hire metrics.</CheckListItem>
          <CheckListItem>Seeking to strengthen employer branding and candidate experience.</CheckListItem>
        </ul>

        <hr className="my-8 border-gray-200" />

        {/* DAN International’s Approach to RPO Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          DAN International’s Approach to RPO
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>Our methodology is structured yet adaptable:</p>
          <ul className="list-none space-y-2 pl-0 mt-4">
            <CustomBulletItem><strong>Needs Assessment</strong> – We analyze your workforce demands, hiring pain points, and industry benchmarks.</CustomBulletItem>
            <CustomBulletItem><strong>Solution Design</strong> – A tailored RPO model that aligns with your organizational goals.</CustomBulletItem>
            <CustomBulletItem><strong>Implementation</strong> – Integration with your HR team and systems for smooth collaboration.</CustomBulletItem>
            <CustomBulletItem><strong>Ongoing Optimization</strong> – Continuous monitoring, reporting, and fine-tuning for better results.</CustomBulletItem>
          </ul>
          <p>This ensures you don’t just outsource recruitment—you <strong>transform your hiring ecosystem</strong>.</p>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Technology Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Technology at the Core of DAN International’s RPO
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>We leverage advanced tools to improve efficiency and transparency:</p>
          <ul className="list-none space-y-2 pl-0 mt-4">
            <CustomBulletItem><strong>Applicant Tracking Systems (ATS)</strong> for structured recruitment pipelines.</CustomBulletItem>
            <CustomBulletItem><strong>Candidate Relationship Management (CRM)</strong> platforms to engage talent communities.</CustomBulletItem>
            <CustomBulletItem><strong>AI-powered Screening Tools</strong> for bias-free shortlisting.</CustomBulletItem>
            <CustomBulletItem><strong>Analytics Dashboards</strong> for real-time insights into hiring performance.</CustomBulletItem>
          </ul>
          <p>With technology as an enabler, DAN International ensures faster, smarter, and fairer recruitment decisions.</p>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Key Considerations Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Key Considerations in Choosing the Right RPO Partner
        </h2>
        <p className="text-lg text-gray-700">Not all RPO providers are the same. Businesses choose DAN International because we offer:</p>
        
        <ul className="list-none space-y-2 pl-0 mt-4">
          <CheckListItem><strong>Industry-specific expertise</strong> (construction, healthcare, IT, oil & gas, and more).</CheckListItem>
          <CheckListItem><strong>Global reach with local compliance knowledge</strong>—critical for cross-border hiring.</CheckListItem>
          <CheckListItem>Flexible engagement models that fit startups, SMEs, and enterprises.</CheckListItem>
          <CheckListItem>Commitment to transparency with detailed reporting and KPIs.</CheckListItem>
          <CheckListItem>Cultural alignment with your business values.</CheckListItem>
        </ul>

        <hr className="my-8 border-gray-200" />

        {/* The Future of RPO Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          The Future of RPO: DAN International’s Perspective
        </h2>
        <p className="text-lg text-gray-700">The world of recruitment is evolving—and so is RPO. At DAN International, we are at the forefront of emerging trends such as:</p>
        
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <ExampleListItem><strong>Candidate Experience as a Priority</strong> – Engaging and retaining talent through personalized processes.</ExampleListItem>
          <ExampleListItem><strong>AI & Data-Driven Hiring</strong> – Using predictive analytics for talent mapping and workforce planning.</ExampleListItem>
          <ExampleListItem><strong>Diversity and Inclusion</strong> – Building more inclusive recruitment pipelines.</ExampleListItem>
          <ExampleListItem><strong>Global-Local Integration</strong> – Balancing global sourcing strategies with regional compliance needs.</ExampleListItem>
        </ul>

        <hr className="my-8 border-gray-200" />

        {/* Conclusion Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2" style={{ color: PRIMARY_COLOR }}>
          Why Choose DAN International for Your RPO Needs?
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>At DAN International, we go beyond filling roles—we build partnerships that strengthen organizations. Here’s why clients trust us:</p>
          
          <ul className="list-none space-y-2 pl-0 mt-4">
            <CustomBulletItem>✅ Customized RPO solutions tailored to business goals.</CustomBulletItem>
            <CustomBulletItem>✅ Experienced recruiters with multi-industry expertise.</CustomBulletItem>
            <CustomBulletItem>✅ Global sourcing networks with local compliance knowledge.</CustomBulletItem>
            <CustomBulletItem>✅ Scalable models for startups and large enterprises alike.</CustomBulletItem>
            <CustomBulletItem>✅ Proven processes that balance speed, quality, and compliance.</CustomBulletItem>
          </ul>

          <p className="font-semibold italic">Final Thoughts: RPO as a Competitive Advantage</p>
          <p>Recruitment is no longer just an HR function—it’s a business strategy. Partnering with <strong>DAN International for RPO</strong> means gaining a competitive edge in attracting, engaging, and retaining the right talent—faster and smarter.</p>
          
          <p>If your organization is ready to move beyond traditional hiring challenges, DAN International is the trusted partner you need.</p>

          {/* Highlight Box (replacing .highlight-box) */}
          <div className="border-l-4 p-5 rounded-md mt-8" style={{ borderColor: PRIMARY_COLOR, backgroundColor: LIGHT_BG }}>
            <p className="mb-2 text-xl font-bold text-gray-800">📌 Next Steps with DAN International:</p>
            <ul className="list-none space-y-2 pl-0 mt-3">
              <CheckListItem>Contact our RPO specialists for a free consultation</CheckListItem>
              <CheckListItem>Request a customized proposal</CheckListItem>
              <CheckListItem>Schedule a discovery session with our team</CheckListItem>
            </ul>
            <p className="font-bold text-gray-800 mt-4">DAN International Solutions – Your trusted partner for strategic recruitment outsourcing.</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostTen;