// NOTE: This component assumes Tailwind CSS is configured in your project.
import React from 'react';
// ... Helper Components (CheckIcon, BulletIcon, SectionTitle, SubTitle, Paragraph, HighlightBox)

const BlogPostTwentyEight = () => {
    // Re-defining helpers locally for component completeness in this context
    const CheckIcon = () => (<svg className="w-5 h-5 text-[#46b724] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>);
    const BulletIcon = () => (<span className="text-[#46b724] mr-3 text-2xl leading-none">•</span>);
    const SectionTitle = ({ children }) => (<h2 className="text-2xl font-semibold text-[#46b724] mt-8 mb-4 pt-4 border-t border-gray-200">{children}</h2>);
    const SubTitle = ({ children }) => (<h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{children}</h3>);
    const Paragraph = ({ children, className = "" }) => (<p className={`text-lg mb-4 leading-relaxed text-gray-700 ${className}`}>{children}</p>);
    const HighlightBox = ({ children }) => (<div className="p-6 my-8 border-l-4 border-[#46b724] bg-green-50 rounded-lg shadow-sm">{children}</div>);

    const KeyPrinciple = ({ title, content }) => (
        <div className="mb-4">
            <h4 className="text-xl font-semibold text-gray-900 mb-1 flex items-center">
                <CheckIcon />
                <span>{title}</span>
            </h4>
            <Paragraph className="pl-7 mb-0 text-base">{content}</Paragraph>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto px-4 lg:px-0 mt-8 mb-10 font-poppins">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 pt-24 leading-tight">
                Navigating Approvals with Aramco, SABIC, ADNOC, SEC, APOC & NEOM: Founder’s Perspective from DAN International Solutions
            </h1>
            <Paragraph>
                The operational success of working with GCC giants—such as **Aramco, SABIC, ADNOC, SEC, APOC, and NEOM**—hinges entirely on securing and maintaining their strict vendor and candidate approvals. This process is not bureaucratic; it’s a prerequisite for guaranteed quality and compliance. From the Founder’s desk, we outline the structured approach required.
            </Paragraph>

            <SectionTitle>The Approval Process: A Gateway to Partnership</SectionTitle>
            <Paragraph>
                Approval means pre-qualification. These entities require their partners (like DAN International) to demonstrate upfront capability, financial stability, and, critically, **compliance** with local content rules (Saudization/Emiratization) and HSE standards.
            </Paragraph>

            <SubTitle>The Three Critical Phases</SubTitle>
            <ul className="space-y-3 mb-6 list-disc list-inside text-lg text-gray-700 pl-4">
                <li>**Pre-Qualification/Vendor Registration:** Detailed company audit (financials, ISO certification, legal status).</li>
                <li>**Candidate Nomination & Screening:** Strict technical and security vetting before deployment.</li>
                <li>**Post-Deployment Compliance:** Ongoing adherence to project-specific rules, including weekly reporting and safety audits.</li>
            </ul>

            <SectionTitle>Founder’s Key Principles for Approval Success</SectionTitle>

            <KeyPrinciple
                title="Integrity in Documentation"
                content="Any misrepresentation is a blacklisting offense. Every document—from attested degrees to previous employment letters—must be verifiable and 100% accurate."
            />
            <KeyPrinciple
                title="Mandatory HSE Focus"
                content="Health, Safety, and Environment standards are paramount. ADNOC, Aramco, and NEOM demand world-class protocols. Candidates must possess relevant and current certifications (e.g., OSHA, NEBOSH)."
            />
            <KeyPrinciple
                title="Structured Candidate Nomination"
                content="Submitting a candidate is a complex data exercise. It requires perfectly aligned job descriptions, salary bands, and compliance records to meet the client's internal system requirements."
            />

            <SectionTitle>Compliance as a Competitive Advantage</SectionTitle>
            <Paragraph>
                At DAN, we don’t just follow regulations—we internalize them. We ensure documentation consistency and ethical adherence at every level, from Saudi cybersecurity mandates to NEOM’s stringent screening protocols. This dedication guarantees a seamless audit trail and faster mobilization.
            </Paragraph>

            <SectionTitle>What Clients Gain When Partnering with DAN International Solutions</SectionTitle>
            <ul className="space-y-2 mb-6">
                <li className="flex items-start text-lg text-gray-700">
                    <CheckIcon />
                    <span>**Streamlined Access:** To approved, compliant talent pools for premium clients.</span>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                    <CheckIcon />
                    <span>**Consistent Quality Delivery:** Built on the foundation of industry trust and operational rigor.</span>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                    <CheckIcon />
                    <span>**Lifecycle Accountability:** From initial approval to post-deployment follow-up, DAN stands with its partners and workforce.</span>
                </li>
            </ul>

            <HighlightBox>
                <Paragraph className="font-bold text-xl text-gray-800 mb-2">Final Thoughts from the Founder</Paragraph>
                <Paragraph className="text-lg text-gray-700">
                    Securing an approval—be it from Aramco, SABIC, ADNOC, or NEOM—is a gateway to excellence. At **DAN International Solutions**, these partnerships reflect our dedication to **integrity, compliance, and unmatched HR depth**.
                </Paragraph>
            </HighlightBox>
        </div>
    );
};
export default BlogPostTwentyEight;