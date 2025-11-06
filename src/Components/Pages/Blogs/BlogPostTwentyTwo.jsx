// NOTE: This component assumes Tailwind CSS is configured in your project.
import React from 'react';
// ... Helper Components (CheckIcon, BulletIcon, SectionTitle, SubTitle, Paragraph, HighlightBox)
// Define them or import them from a shared file for the complete solution.

const BlogPostTwentyTwo = () => {
    // Re-defining helpers locally for component completeness in this context
    const CheckIcon = () => (<svg className="w-5 h-5 text-[#46b724] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>);
    const BulletIcon = () => (<span className="text-[#46b724] mr-3 text-2xl leading-none">•</span>);
    const SectionTitle = ({ children }) => (<h2 className="text-2xl font-semibold text-[#46b724] mt-8 mb-4 pt-4 border-t border-gray-200">{children}</h2>);
    const SubTitle = ({ children }) => (<h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{children}</h3>);
    const Paragraph = ({ children, className = "" }) => (<p className={`text-lg mb-4 leading-relaxed text-gray-700 ${className}`}>{children}</p>);
    const HighlightBox = ({ children }) => (<div className="p-6 my-8 border-l-4 border-[#46b724] bg-green-50 rounded-lg shadow-sm">{children}</div>);

    const FeatureList = ({ items }) => (
        <ul className="space-y-2 mb-6">
            {items.map((item, index) => (
                <li key={index} className="flex items-start text-lg text-gray-700">
                    <CheckIcon />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );

    const DefinitionBox = ({ title, calculation, details }) => (
        <div className="border border-gray-200 p-4 mb-6 mt-8 rounded-lg bg-white shadow-sm">
            <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
            <Paragraph className="mb-1 italic">**Calculation Basis:** {calculation}</Paragraph>
            <p className="text-sm text-gray-600">{details}</p>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto px-4 lg:px-0 pt-24 mb-10 font-poppins">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                End-of-Service Benefits Explained: DAN International's Guide to Employee Entitlements
            </h1>
            <Paragraph>
                The **End-of-Service Benefit (EOSB)**, or gratuity, is a statutory payment made to employees upon the termination of their contract in the Middle East. While tax-free, the calculation rules differ significantly across the GCC, impacting an employee's final payout. This guide details the calculation basis for the UAE, KSA, and Qatar.
            </Paragraph>

            <SectionTitle>UAE End-of-Service Calculation (Federal Decree-Law No. 33 of 2021)</SectionTitle>
            <DefinitionBox
                title="EOSB Calculation in UAE"
                calculation="Based on Basic Salary Only."
                details="The new law unifies the treatment for limited and unlimited contracts. The calculation is based on the final basic salary."
            />
            <SubTitle>Calculation Formula:</SubTitle>
            <FeatureList items={[
                "Service from 1 to 5 years: 21 days' basic salary for each year of service.",
                "Service exceeding 5 years: 30 days' basic salary for each subsequent year of service.",
                "The total gratuity must not exceed two years' salary."
            ]} />

            <SectionTitle>KSA End-of-Service Calculation (Saudi Labor Law)</SectionTitle>
            <DefinitionBox
                title="EOSB Calculation in KSA"
                calculation="Based on the Final Wage (including basic salary, housing allowance, etc.)."
                details="KSA's calculation is often more generous, based on the *actual* final wage, not just the basic salary. However, entitlements may be reduced for voluntary resignation before specific timeframes."
            />
            <SubTitle>Calculation Formula:</SubTitle>
            <FeatureList items={[
                "Service from 2 to 5 years: Half a month's wage for each of the first five years.",
                "Service exceeding 5 years: One month's wage for each subsequent year.",
                "The full entitlement is granted for service > 5 years if terminated by the employer."
            ]} />

            <SectionTitle>Qatar End-of-Service Calculation (Qatar Labour Law No. 14 of 2004)</SectionTitle>
            <DefinitionBox
                title="EOSB Calculation in Qatar"
                calculation="Based on Basic Salary (or full salary if stipulated in the contract)."
                details="The law stipulates a minimum of three weeks' basic salary for each year of service, but many employers offer more in the employment contract."
            />
            <SubTitle>Minimum Entitlement:</SubTitle>
            <FeatureList items={[
                "Service must exceed one full year.",
                "Minimum payment is three weeks' basic salary for each year of service.",
                "There is no legal ceiling, but the amount is often contractually defined."
            ]} />

            <SectionTitle>Strategic Planning for Employees</SectionTitle>
            <SubTitle>Maximizing Your Entitlements</SubTitle>
            <ul className="space-y-2 mb-4">
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>Maintain complete employment records.</span>
                </li>
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>Understand all salary components (only basic counts in UAE).</span>
                </li>
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>Track service periods accurately.</span>
                </li>
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>Know grievance procedures.</span>
                </li>
            </ul>

            <SubTitle>Why Consult DAN International</SubTitle>
            <Paragraph>Our advisory services provide:</Paragraph>
            <ul className="space-y-2 mb-6">
                <li className="flex items-start text-lg text-gray-700">
                    <CheckIcon />
                    <span>Current regulation updates</span>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                    <CheckIcon />
                    <span>Calculation methodology</span>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                    <CheckIcon />
                    <span>Dispute resolution guidance</span>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                    <CheckIcon />
                    <span>Regional comparisons</span>
                </li>
            </ul>


            <HighlightBox>
                <Paragraph className="mb-2 font-bold text-gray-800">Next Steps with DAN International</Paragraph>
                <ul className="space-y-2 mt-4">
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>➡ Request our EOSB Calculator</span>
                    </li>
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>➡ Access Country-Specific Guides</span>
                    </li>
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>➡ Schedule a Compliance Consultation</span>
                    </li>
                </ul>
                <Paragraph className="font-bold mt-4 mb-0 text-gray-800">DAN International - Your trusted resource for Middle East employment regulations.</Paragraph>
            </HighlightBox>
        </div>
    );
};
export default BlogPostTwentyTwo;
