// NOTE: This component assumes Tailwind CSS is configured in your project.
import React from 'react';
// ... Helper Components (CheckIcon, BulletIcon, SectionTitle, SubTitle, Paragraph, HighlightBox)
// Define them or import them from a shared file for the complete solution.

const BlogPostTwentyOne = () => {
    // Re-defining helpers locally for component completeness in this context
    const CheckIcon = () => (<svg className="w-5 h-5 text-[#46b724] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>);
    const BulletIcon = () => (<span className="text-[#46b724] mr-3 text-2xl leading-none">•</span>);
    const SectionTitle = ({ children }) => (<h2 className="text-2xl font-semibold text-[#46b724] mt-8 mb-4 pt-4 border-t border-gray-200">{children}</h2>);
    const SubTitle = ({ children }) => (<h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{children}</h3>);
    const Paragraph = ({ children, className = "" }) => (<p className={`text-lg mb-4 leading-relaxed text-gray-700 ${className}`}>{children}</p>);
    const HighlightBox = ({ children }) => (<div className="p-6 my-8 border-l-4 border-[#46b724] bg-green-50 rounded-lg shadow-sm">{children}</div>);

    const FeatureList = ({ items }) => (
        <ul className="space-y-3 mb-6 list-disc list-inside text-lg text-gray-700 pl-4">
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    );

    return (
        <div className="max-w-4xl mx-auto px-4 lg:px-0 mt-8 mb-10 font-poppins">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 pt-24 leading-tight">
                Planning for Permanent Residency or Long-Term Stay in the Middle East: DAN International's Strategic Guide
            </h1>
            <Paragraph>
                The Middle East is rapidly shifting towards policies designed to attract long-term capital and talent. The days of mandatory short-term visas tied solely to employment are fading, replaced by attractive permanent residency and long-term stay programs. DAN International provides a guide to the key pathways for investors and skilled professionals in the GCC.
            </Paragraph>

            <SectionTitle>The UAE Golden Visa Program</SectionTitle>
            <Paragraph>
                The Golden Visa offers 5- or 10-year renewable residency for various categories, providing stability without the need for a national sponsor.
            </Paragraph>
            <SubTitle>Key Categories:</SubTitle>
            <FeatureList items={[
                "Investors (minimum AED 2 million property investment or public investments)",
                "Entrepreneurs (owning a company of a specific category and value)",
                "Specialized Talents (scientists, doctors, engineers, artists)",
                "Outstanding Students",
                "Humanitarian Pioneers"
            ]} />

            <SectionTitle>KSA Premium Residency (Iqama)</SectionTitle>
            <Paragraph>
                Saudi Arabia’s Premium Residency grants holders the right to live, work, and own businesses without a sponsor. It is a critical component of **Vision 2030** to diversify the economy.
            </Paragraph>
            <SubTitle>Two Main Types:</SubTitle>
            <FeatureList items={[
                "**Limited Duration:** Renewable on an annual basis.",
                "**Unlimited Duration:** Requires a higher one-time payment and provides a truly permanent status."
            ]} />
            <SubTitle>Benefits Include:</SubTitle>
            <FeatureList items={[
                "Sponsoring dependents (spouse, children under 25)",
                "Exiting and re-entering the country without a travel permit",
                "Owning real estate and transport within the Kingdom"
            ]} />

            <SectionTitle>Qatar's Investor and Real Estate Residency</SectionTitle>
            <Paragraph>
                Qatar offers permanent residency to foreign nationals who meet certain criteria, particularly in the real estate sector and for skilled, long-term professionals.
            </Paragraph>
            <SubTitle>The Real Estate Pathway</SubTitle>
            <Paragraph>
                A key route involves purchasing property in designated investment zones, granting temporary or long-term residency based on the value of the investment.
            </Paragraph>

            <SectionTitle>Strategic Planning Considerations</SectionTitle>
            <SubTitle>Financial & Legal Implications</SubTitle>
            <Paragraph className="font-semibold">Investment Diligence</Paragraph>
            <ul className="space-y-2 mb-4">
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>Source of funds verification</span>
                </li>
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>Tax and inheritance implications</span>
                </li>
            </ul>

            <SubTitle>Family Considerations</SubTitle>
            <ul className="space-y-2 mb-4">
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>Dependent sponsorship rules</span>
                </li>
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>Education pathways</span>
                </li>
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>Healthcare coverage</span>
                </li>
            </ul>

            <SubTitle>Why Consult DAN International</SubTitle>
            <Paragraph>Our advisory services provide:</Paragraph>
            <ul className="space-y-2 mb-6">
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />Current program requirements</li>
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />Eligibility assessments</li>
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />Application process guidance</li>
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />Alternative option analysis</li>
            </ul>

            <HighlightBox>
                <Paragraph className="mb-2 font-bold text-gray-800">Next Steps with DAN International</Paragraph>
                <ul className="space-y-2 mt-4">
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>➡ Request our Residency Program Comparison</span>
                    </li>
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>➡ Schedule a Pathway Assessment</span>
                    </li>
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>➡ Access our Country Guides</span>
                    </li>
                </ul>
                <Paragraph className="font-bold mt-4 mb-0 text-gray-800">DAN International - Your partner for Middle East long-term stay planning.</Paragraph>
            </HighlightBox>
        </div>
    );
};
export default BlogPostTwentyOne;
