// NOTE: This component assumes Tailwind CSS is configured in your project.
import React from 'react';
// ... Helper Components (CheckIcon, BulletIcon, SectionTitle, SubTitle, Paragraph, HighlightBox)
// Define them or import them from a shared file for the complete solution.

const BlogPostTwenty = () => {
    // Re-defining helpers locally for component completeness in this context
    const CheckIcon = () => (<svg className="w-5 h-5 text-[#46b724] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>);
    const BulletIcon = () => (<span className="text-[#46b724] mr-3 text-2xl leading-none">•</span>);
    const SectionTitle = ({ children }) => (<h2 className="text-2xl font-semibold text-[#46b724] mt-8 mb-4 pt-4 border-t border-gray-200">{children}</h2>);
    const SubTitle = ({ children }) => (<h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{children}</h3>);
    const Paragraph = ({ children, className = "" }) => (<p className={`text-lg mb-4 leading-relaxed text-gray-700 ${className}`}>{children}</p>);
    const HighlightBox = ({ children }) => (<div className="p-6 my-8 border-l-4 border-[#46b724] bg-green-50 rounded-lg shadow-sm">{children}</div>);
    const NumberedStep = ({ number, title, content }) => (
        <li className="mb-4">
            <p className="text-xl font-medium text-[#46b724] mb-1">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-white bg-[#46b724] rounded-full">{number}</span>
                {title}
            </p>
            <p className="text-lg text-gray-700 pl-9">{content}</p>
        </li>
    );


    return (
        <div className="max-w-4xl mx-auto px-4 lg:px-0 mt-8 mb-10 font-poppins">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 pt-22 leading-tight">
                Iqama Transfer Process: DAN International's Guide to Legal Sponsorship Transfer in Saudi Arabia
            </h1>
            <Paragraph>
                The process of transferring an **Iqama** (residence permit and legal sponsorship) in Saudi Arabia is governed by the Ministry of Human Resources and Social Development (MHRSD) and is crucial for expatriate professionals changing employment. DAN International's guide simplifies the key steps and requirements for a smooth transition.
            </Paragraph>

            <SectionTitle>Pre-Requisites for Transfer</SectionTitle>
            <SubTitle>The No Objection Certificate (NOC)</SubTitle>
            <Paragraph>
                While the rules have liberalized, an official **No Objection Certificate (NOC)** from the current sponsor (employer) may still be required in some cases, particularly if the initial contract terms or specific employment categories demand it. However, under new labor reforms, employees can often transfer without the previous employer's consent if certain conditions are met (e.g., expiry of contract, non-payment of wages, or end of a specific notice period).
            </Paragraph>

            <SubTitle>Employer Compliance</SubTitle>
            <Paragraph>The new employing company must be compliant with the **Nitaqat Saudization Program** and must have sufficient foreign employee visa quotas to absorb the transferring employee.</Paragraph>

            <SectionTitle>The 5-Step Transfer Process</SectionTitle>
            <ol className="list-none space-y-4 border-l-2 border-gray-200 ml-2 pl-4">
                <NumberedStep
                    number="1"
                    title="Transfer Request Initiation"
                    content="The new employer initiates the transfer request through the MHRSD's online portal (Qiwa platform)."
                />
                <NumberedStep
                    number="2"
                    title="Employee Consent"
                    content="The employee receives a notification and must electronically accept the transfer offer on the MHRSD platform within a specified timeframe (usually 10-15 days)."
                />
                <NumberedStep
                    number="3"
                    title="Current Employer Notification"
                    content="The current employer is notified and given a period (e.g., 60 days) to raise any objection, though objections are limited under the new reform."
                />
                <NumberedStep
                    number="4"
                    title="Iqama Issuance/Update"
                    content="Once approved by MHRSD, the process moves to the Ministry of Interior (MOI)/Jawazat for the physical update and issuance of the new Iqama card under the new employer's sponsorship."
                />
                <NumberedStep
                    number="5"
                    title="Mandatory Medical Check-up (if required)"
                    content="In some cases, a new medical check-up may be required to finalize the transfer of the residence permit."
                />
            </ol>

            <SectionTitle>Common Hurdles & How to Navigate Them</SectionTitle>
            <SubTitle>NOC Negotiation</SubTitle>
            <Paragraph>
                Even when not legally required, a professional exit and a negotiated NOC can expedite the process and maintain professional relationships.
            </Paragraph>
            <SubTitle>Data Synchronization Errors</SubTitle>
            <Paragraph>
                Discrepancies between government databases (e.g., MOI, MHRSD, insurance) can cause delays. Ensure all personal details are consistent across all platforms before initiating.
            </Paragraph>

            <SectionTitle>Post-Transfer Compliance</SectionTitle>
            <Paragraph>After the transfer is complete, the new employer must ensure the following updates are made promptly:</Paragraph>
            <ul className="space-y-2 mb-6">
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />Update GOSI (General Organization for Social Insurance) registration</li>
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />Enrollment with new health provider</li>
            </ul>

            <SectionTitle>Conclusion & Strategic Advice</SectionTitle>
            <Paragraph className="font-semibold">Key Takeaways:</Paragraph>
            <ul className="space-y-2 mb-6">
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>**Start Early:** Begin process 2-3 months before desired transfer date.</span>
                </li>
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>**Document Everything:** Maintain copies of all submissions.</span>
                </li>
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>**Professional Guidance:** Consider expert consultation for complex cases.</span>
                </li>
            </ul>

            <HighlightBox>
                <Paragraph className="mb-2 font-bold text-gray-800">DAN International's Final Recommendations</Paragraph>
                <Paragraph className="font-semibold mt-4 mb-2 text-gray-800">For employees:</Paragraph>
                <ul className="space-y-2 mb-4">
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>Negotiate NOC terms during initial hiring</span>
                    </li>
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>Maintain impeccable work records</span>
                    </li>
                </ul>
                <Paragraph className="font-semibold mt-2 mb-2 text-gray-800">For employers:</Paragraph>
                <ul className="space-y-2">
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>Verify candidate's transfer eligibility upfront</span>
                    </li>
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>Budget for all government fees</span>
                    </li>
                </ul>
                <Paragraph className="font-bold mt-4 mb-0 text-gray-800">DAN International - Your trusted resource for KSA employment regulations and processes.</Paragraph>
            </HighlightBox>
        </div>
    );
};
export default BlogPostTwenty;