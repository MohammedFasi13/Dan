// NOTE: This component assumes Tailwind CSS is configured in your project.
import React from 'react';

// --- Helper Components for Consistency ---
const CheckIcon = () => (
    <svg className="w-5 h-5 text-[#46b724] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const BulletIcon = () => (
    <span className="text-[#46b724] mr-3 text-2xl leading-none">•</span>
);

const SectionTitle = ({ children }) => (
    <h2 className="text-2xl font-semibold text-[#46b724] mt-8 mb-4 pt-4 border-t border-gray-200">{children}</h2>
);

const SubTitle = ({ children }) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{children}</h3>
);

const Paragraph = ({ children, className = "" }) => (
    <p className={`text-lg mb-4 leading-relaxed text-gray-700 ${className}`}>{children}</p>
);

const HighlightBox = ({ children }) => (
    <div className="p-6 my-8 border-l-4 border-[#46b724] bg-green-50 rounded-lg shadow-sm">
        {children}
    </div>
);

const CollarDefinition = ({ color, role, description, bgColor = 'bg-white' }) => (
    <div className={`p-5 mb-4 rounded-lg border border-gray-200 ${bgColor}`}>
        <h4 className="text-xl font-bold text-gray-900 mb-1">{color} Collar</h4>
        <p className="text-lg font-medium text-[#46b724] mb-2">{role}</p>
        <Paragraph className="mb-0 text-base">{description}</Paragraph>
    </div>
);
// ----------------------------------------------------------------------

const BlogPostTwentyFour = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 lg:px-0 mt-8 mb-10 font-poppins">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 pt-24 leading-tight">
                Understanding Job Collar Colors: DAN International's Guide to Workforce Classification
            </h1>
            <Paragraph>
                The terms used to classify the workforce—such as "white collar" and "blue collar"—are crucial for HR strategy, impacting everything from recruitment and compensation to development. DAN International's guide clarifies these classifications and their relevance in modern workforce mobilization, especially across global markets like the GCC.
            </Paragraph>

            <SectionTitle>The Core Classifications</SectionTitle>

            <CollarDefinition
                color="White"
                role="Professional, Managerial, and Administrative"
                description="Refers to office-based roles, often requiring specialized knowledge and higher education. Typically salaried, focused on intellectual, managerial, or creative tasks."
            />
            <CollarDefinition
                color="Blue"
                role="Manual, Skilled, and Unskilled Labor"
                description="Encompasses roles involving manual work, typically paid hourly or on a daily wage. Includes manufacturing, construction, maintenance, and logistics."
            />

            <SectionTitle>Emerging Classifications & HR Implications</SectionTitle>

            <CollarDefinition
                color="Grey"
                role="Hybrid Technical and Trade Specialists"
                description="Workers who combine manual labor (blue collar) with specialized technical skills, IT, or complex machinery operation (white collar). Examples: highly skilled technicians, engineers in the field, IT support specialists."
            />
            <CollarDefinition
                color="Pink"
                role="Service, Care, and Support Roles"
                description="Historically refers to jobs predominantly held by women, often characterized by service orientation. Examples: Nursing, teaching, childcare, and administrative support. Compensation and benefits need careful benchmarking."
            />
            <CollarDefinition
                color="Green"
                role="Sustainability, Renewable Energy, and Environmental"
                description="New roles emerging from the sustainability sector. Examples: Wind turbine technicians, carbon auditors, environmental engineers. These are often highly skilled and are a major focus of KSA's Vision 2030 and other GCC diversification plans."
            />

            <SectionTitle>Strategic HR Implications</SectionTitle>
            <SubTitle>Recruitment & Sourcing</SubTitle>
            <Paragraph>
                Different collars require different sourcing channels. White collar roles are often recruited via professional networks, while blue/grey collar roles rely heavily on structured mass mobilization and regional labor partnerships.
            </Paragraph>

            <SubTitle>Compensation & Benefits</SubTitle>
            <Paragraph>
                Compensation structure must be tailored: salaried packages for white collar versus hourly wages/overtime policies for blue collar. Healthcare, accommodation, and transport benefits also vary widely.
            </Paragraph>

            <SectionTitle>The Future of Workforce Classification</SectionTitle>
            <SubTitle>Key Trends</SubTitle>
            <div className="space-y-2 mb-6">
                <div className="flex items-start text-lg text-gray-700">
                    <CheckIcon />
                    <p><strong>Collars Are Blurring:</strong> Increasing role hybridization, especially with automation.</p>
                </div>
                <div className="flex items-start text-lg text-gray-700">
                    <CheckIcon />
                    <p><strong>Skills Trump Labels:</strong> A shift towards competency-based HR approaches is rising.</p>
                </div>
                <div className="flex items-start text-lg text-gray-700">
                    <CheckIcon />
                    <p><strong>Future-Proofing:</strong> The growth of the Green Collar workforce is accelerating globally.</p>
                </div>
            </div>

            <SubTitle>Why DAN International's Classification Matters</SubTitle>
            <Paragraph>Our framework helps organizations:</Paragraph>
            <ul className="space-y-2 mb-6 list-disc list-inside text-lg text-gray-700 pl-4">
                <li>Tailor recruitment approaches.</li>
                <li>Design appropriate benefits.</li>
                <li>Create targeted development.</li>
                <li>Improve retention strategies.</li>
            </ul>

            <HighlightBox>
                <Paragraph className="mb-2 font-bold text-gray-800">Next Steps with DAN International</Paragraph>
                <ul className="bullet-point space-y-2 mt-4">
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>➡ Request our Workforce Classification Tool</span>
                    </li>
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>➡ Schedule a Composition Analysis</span>
                    </li>
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>➡ Access our Collar-Specific HR Guides</span>
                    </li>
                </ul>
                <Paragraph className="font-bold mt-4 mb-0 text-gray-800">DAN International - Your partner in strategic workforce understanding.</Paragraph>
            </HighlightBox>
        </div>
    );
};
export default BlogPostTwentyFour;
