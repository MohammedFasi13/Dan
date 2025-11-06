import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri'; // Using react-icons for the checkmark

// Define the colors based on the provided CSS variables
const PRIMARY_COLOR = '#46b724'; 
const LIGHT_BG = '#f7f7f7';

const BlogPostSix = () => {
  
  // Utility component for the check-list items (replacing .check-list)
  const CheckListItem = ({ children }) => (
    <li className="flex items-start mb-3 text-gray-700 leading-relaxed text-lg">
      <RiCheckboxCircleFill 
        className="flex-shrink-0 mr-3 mt-1 text-xl" 
        style={{ color: PRIMARY_COLOR }} 
      />
      <span>{children}</span>
    </li>
  );
  
  // Utility component for the custom bullet-point list (replacing .bullet-point)
  const CustomBulletItem = ({ children }) => (
    <li className="flex items-start mb-3 text-gray-700 leading-relaxed text-lg">
      <span className="flex-shrink-0 mr-3 mt-0.5 text-xl font-extrabold" style={{ color: PRIMARY_COLOR }}>
        &bull; 
      </span>
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
    // Main container (replacing .blog-container with modern Tailwind spacing)
    <article className="min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Blog Title (replacing .blog-title) */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 pt-8 leading-tight">
          How AI is Transforming HR: 
          <span style={{ color: PRIMARY_COLOR }} className="font-bold"> DAN International’s Strategic Approach</span>
        </h1>

        {/* Content Section */}
        <div className="text-lg text-gray-700 space-y-6">
          <p>The Human Resources (HR) industry is in the middle of a digital revolution. <strong>Artificial Intelligence (AI)</strong> is no longer a futuristic concept—it is an operational reality that is reshaping how organizations recruit, manage, and retain their workforce. From candidate sourcing to compliance monitoring, AI is delivering speed, accuracy, and data-driven insights that human teams alone cannot achieve.</p>
          
          <p>At <strong>DAN International</strong>, we believe that while AI enhances efficiency, the <strong>human touch remains the soul of HR</strong>. Our philosophy is simple: AI should empower HR professionals, not replace them. By blending advanced AI technologies with human expertise, DAN ensures that businesses and employees alike benefit from smarter recruitment, stronger compliance, and better workforce experiences.</p>
          
          <p>This guide explores:</p>
          <ul className="list-none space-y-2 pl-0">
            <CustomBulletItem>Key AI trends transforming HR globally.</CustomBulletItem>
            <CustomBulletItem>How DAN International integrates AI into recruitment and compliance.</CustomBulletItem>
            <CustomBulletItem>Ethical practices to ensure responsible AI in HR.</CustomBulletItem>
          </ul>

          {/* Section: 1. The AI Revolution in HR */}
          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2 border-t" style={{ color: PRIMARY_COLOR }}>1. The AI Revolution in HR: Key Global Trends</h2>
          <p>AI adoption in HR is accelerating across industries, driven by the need for efficiency and fairness. Let’s look at the biggest transformations:</p>

          <SubSubHeading>a) Smarter Candidate Sourcing</SubSubHeading>
          <p>Traditional recruitment relies on posting jobs and waiting for applicants. AI turns this passive approach into an active talent hunt.</p>
          {/* Example List (replacing .example-list with Tailwind list-disc) */}
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 text-lg">
            <li className="italic"><strong>Automated Job Matching</strong> – AI algorithms scan millions of resumes, profiles, and job boards to identify the most suitable candidates within seconds.</li>
            <li className="italic"><strong>Predictive Analytics</strong> – By analyzing past hiring trends, AI predicts which candidates are more likely to succeed and stay longer.</li>
          </ul>
          <p className="italic"><strong>Industry Insight:</strong> Companies that leverage AI sourcing reduce hiring times by up to <strong>40%</strong> (McKinsey, 2023).</p>

          <SubSubHeading>b) Bias-Free Hiring</SubSubHeading>
          <p>Human decisions often suffer from unconscious bias. AI helps level the playing field:</p>
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 text-lg">
            <li className="italic"><strong>Blind Recruitment Tools</strong> – Strip personal details such as names, gender, and age from applications, ensuring selections are made purely on merit.</li>
            <li className="italic"><strong>Skill-Based Assessments</strong> – AI evaluates technical and practical tests with accuracy, eliminating favoritism and prejudice.</li>
          </ul>

          <SubSubHeading>c) Employee Experience & Retention</SubSubHeading>
          <p>AI doesn’t stop at hiring—it supports long-term employee success.</p>
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 text-lg">
            <li className="italic"><strong>HR Chatbots</strong> – Employees receive instant answers on leave policies, payroll queries, and benefits, improving efficiency.</li>
            <li className="italic"><strong>Sentiment Analysis</strong> – AI tracks employee engagement by analyzing feedback, emails, or survey responses, helping HR intervene before attrition occurs.</li>
          </ul>


          {/* Section: 2. DAN’s AI-Driven HR Solutions */}
          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2 border-t" style={{ color: PRIMARY_COLOR }}>2. DAN’s AI-Driven HR Solutions</h2>
          <p>At <strong>DAN International</strong>, we use AI responsibly—not as a replacement for recruiters, but as a strategic enabler. Our proprietary solutions ensure clients get the best of both worlds: <strong>AI precision + human judgment.</strong></p>
          
          {/* AI Tools Table (replacing .ai-table) */}
          <div className="overflow-x-auto my-8">
            <table className="w-full table-auto text-left border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="p-3 border text-white font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>DAN AI Tool</th>
                  <th className="p-3 border text-white font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>Function</th>
                  <th className="p-3 border text-white font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="p-3 border font-semibold text-gray-900"><strong>DAN Talent Match</strong></td>
                  <td className="p-3 border">Auto-matches candidates to role requirements</td>
                  <td className="p-3 border">50% faster shortlisting</td>
                </tr>
                <tr style={{ backgroundColor: LIGHT_BG }} className="hover:bg-gray-200">
                  <td className="p-3 border font-semibold text-gray-900"><strong>Compliance Guardian</strong></td>
                  <td className="p-3 border">Monitors labor law changes across 50+ countries</td>
                  <td className="p-3 border">Prevents costly compliance errors</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="p-3 border font-semibold text-gray-900"><strong>Workforce Planner</strong></td>
                  <td className="p-3 border">Predicts staffing shortages and surpluses</td>
                  <td className="p-3 border">Optimizes hiring budgets and workforce allocation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-semibold text-gray-800">Why It Matters:</p>
          <ul className="list-none space-y-2 pl-0">
            <CustomBulletItem><strong>For Employers:</strong> Faster hiring cycles, lower recruitment costs, improved compliance.</CustomBulletItem>
            <CustomBulletItem><strong>For Candidates:</strong> Fairer evaluations, quicker communication, transparent career opportunities.</CustomBulletItem>
          </ul>
          <p>By integrating these tools, DAN ensures businesses are future-ready while candidates experience a smoother recruitment journey.</p>


          {/* Section: 3. DAN’s Responsible Approach to Ethical AI */}
          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2 border-t" style={{ color: PRIMARY_COLOR }}>3. DAN’s Responsible Approach to Ethical AI</h2>
          <p>While AI is powerful, it comes with risks—privacy violations, biased algorithms, or over-automation. At <strong>DAN International</strong>, we place ethical responsibility at the center of our AI strategy.</p>
          
          <p className="font-semibold text-gray-800">Our commitments include:</p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem><strong>Human Oversight</strong> – All AI-driven decisions are validated by HR professionals.</CheckListItem>
            <CheckListItem><strong>Algorithm Audits</strong> – Regular testing ensures fairness and removes bias.</CheckListItem>
            <CheckListItem><strong>Data Privacy</strong> – Strict compliance with GDPR and local labor data laws.</CheckListItem>
          </ul>

          {/* Highlight Box with quote (replacing .highlight-box) */}
          <div className="border-l-4 p-5 rounded-md my-8" style={{ borderColor: PRIMARY_COLOR, backgroundColor: LIGHT_BG }}>
            <p className="mb-0 italic text-xl border-l-0">“AI should assist HR, not control it. At DAN, we keep the human in Human Resources.”</p>
            <p className="font-semibold text-sm mt-3 mb-0 text-gray-700">— Chief HR Technology Officer, DAN International</p>
          </div>

          
          {/* Section: 4. The Future of HR */}
          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2 border-t" style={{ color: PRIMARY_COLOR }}>4. The Future of HR: AI + Human Expertise</h2>
          <p>The most successful HR models of the future will not be AI-only or human-only—but a strategic fusion of both.</p>
          <ul className="list-none space-y-2 pl-0">
            <CustomBulletItem><strong>AI Handles:</strong> Repetitive and data-heavy tasks such as resume parsing, compliance monitoring, and employee FAQs.</CustomBulletItem>
            <CustomBulletItem><strong>Humans Focus On:</strong> Strategic priorities like culture building, leadership development, and employee well-being.</CustomBulletItem>
          </ul>
          <p>At <strong>DAN International</strong>, we are already implementing this model with clients across the Gulf, Asia, and Europe—helping them transition smoothly into the AI-powered HR era while maintaining ethical and people-first practices.</p>


          {/* Section: 5. DAN’s Tips for Businesses */}
          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2 border-t" style={{ color: PRIMARY_COLOR }}>5. DAN’s Tips for Businesses Exploring AI in HR</h2>
          <p>If you’re considering AI adoption, here are DAN’s top strategic recommendations:</p>
          <ul className="list-none space-y-2 pl-0">
            <CheckListItem><strong>Start Small, Scale Smart</strong> – Begin with AI in candidate screening or compliance tracking before expanding.</CheckListItem>
            <CheckListItem><strong>Keep Human Oversight</strong> – Use AI for decision support, but never eliminate recruiter involvement.</CheckListItem>
            <CheckListItem><strong>Prioritize Transparency</strong> – Clearly communicate how AI tools are used to both candidates and employees.</CheckListItem>
            <CheckListItem><strong>Audit Regularly</strong> – Test AI algorithms for hidden bias and performance accuracy.</CheckListItem>
            <CheckListItem><strong>Choose the Right Partner</strong> – Work with agencies like DAN International that blend AI innovation with proven HR expertise.</CheckListItem>
          </ul>


          {/* Conclusion */}
          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 pt-2 border-t" style={{ color: PRIMARY_COLOR }}>Conclusion: AI is Here—DAN Helps You Adapt</h2>
          <p>Artificial Intelligence is no longer optional in HR—it is essential. But the question is not whether to adopt AI, it’s <strong>how to adopt it responsibly.</strong></p>
          
          <p>At <strong>DAN International</strong>, we empower businesses with AI-driven HR solutions that are fast, ethical, and people-first. From talent sourcing and compliance monitoring to workforce planning and retention, our AI tools deliver measurable results—without losing the human connection.</p>
          
          <p>AI is reshaping HR, but it’s the combination of technology and human expertise that drives true success. With DAN, you gain a partner that helps you <strong>hire smarter, retain better, and grow faster.</strong></p>

          {/* Final Contact Highlight Box */}
          <div className="border-l-4 p-5 rounded-md mt-8 text-center" style={{ borderColor: PRIMARY_COLOR, backgroundColor: LIGHT_BG }}>
            <p className="mb-2 text-xl font-bold text-gray-800">👉 Ready to explore AI-powered HR with DAN International?</p>
            <p className="mb-0 text-lg text-gray-700">Contact us today for a free demo of our HR technology solutions.</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostSix;