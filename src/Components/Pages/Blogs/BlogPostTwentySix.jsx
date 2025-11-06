// NOTE: This component assumes Tailwind CSS is configured in your project.
import React from 'react';
// ... Helper Components (CheckIcon, BulletIcon, SectionTitle, SubTitle, Paragraph, HighlightBox)

const BlogPostTwentySix = () => {
    // Re-defining helpers locally for component completeness in this context
    const CheckIcon = () => (<svg className="w-5 h-5 text-[#46b724] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>);
    const BulletIcon = () => (<span className="text-[#46b724] mr-3 text-2xl leading-none">•</span>);
    const SectionTitle = ({ children }) => (<h2 className="text-2xl font-semibold text-[#46b724] mt-8 mb-4 pt-4 border-t border-gray-200">{children}</h2>);
    const SubTitle = ({ children }) => (<h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{children}</h3>);
    const Paragraph = ({ children, className = "" }) => (<p className={`text-lg mb-4 leading-relaxed text-gray-700 ${className}`}>{children}</p>);
    const HighlightBox = ({ children }) => (<div className="p-6 my-8 border-l-4 border-[#46b724] bg-green-50 rounded-lg shadow-sm">{children}</div>);

    const ServiceCard = ({ title, description }) => (
        <div className="border border-gray-200 p-5 mb-4 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-bold text-[#46b724] mb-2">{title}</h4>
            <Paragraph className="mb-0 text-base">{description}</Paragraph>
        </div>
    );

    const TableData = [
        { industry: "Healthcare (KSA)", service: "Saudi-Compliant RPO", value: "Manages complex licensing for doctors/nurses" },
        { industry: "Construction", service: "Talent Mapping", value: "Identifies giga-project skilled labor pools" },
        { industry: "IT", service: "European BPO", value: "Supports nearshoring to Poland/Portugal" },
        { industry: "Finance", service: "Cross-Border Payroll", value: "Handles Mumbai-Dubai-Riyadh payment flows" },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 lg:px-0 mt-8 mb-10 font-poppins">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 pt-24 leading-tight">
                DAN International Solutions: Service-Focused Blog Topics for Global HR Leadership
            </h1>
            <Paragraph>
                In today's complex global environment, HR leaders require specialized, cross-border support. DAN International's service ecosystem—spanning BPO, RPO, and Talent Mapping—is designed to integrate technology, ensure compliance, and deliver strategic talent outcomes across India, Saudi Arabia, and Europe.
            </Paragraph>

            <SectionTitle>Key Service Frameworks</SectionTitle>

            <ServiceCard
                title="Business Process Outsourcing (BPO) Revolution"
                description="The shift from simple cost reduction to strategic partnership. Covers HR functions like payroll, administration, and regulatory reporting (e.g., Saudization, EU working hours directives) across geographies."
            />
            <ServiceCard
                title="Recruitment Process Outsourcing (RPO) Framework"
                description="Tailored for high-volume and niche recruitment needs. Focuses on compliance, candidate experience, and the strategic deployment of recruitment technology to ensure a consistent, high-quality talent pipeline."
            />
            <ServiceCard
                title="Talent Mapping 2024: Proactive Workforce Planning"
                description="Going beyond basic sourcing, this is about identifying future skill demands and proactively mapping global talent pools for high-impact roles, essential for mega-projects and rapid expansion."
            />

            <SectionTitle>Compliance & Technology Integration</SectionTitle>
            <SubTitle>The Compliance Imperative</SubTitle>
            <Paragraph>
                Compliance is non-negotiable, especially in highly regulated markets like the GCC and the EU. Our services are built to ensure **Nitaqat** (KSA) targets are met, and EU data/labor laws are strictly adhered to.
            </Paragraph>
            <SubTitle>Technology Integration</SubTitle>
            <Paragraph>
                Leveraging HRIS systems, AI for screening, and cloud-based payroll to provide real-time data and auditability for global operations.
            </Paragraph>

            <SectionTitle>Case Studies: Industry & Regional Applications</SectionTitle>
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#46b724] text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Industry</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Service Focus</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Strategic Value</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {TableData.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">{row.industry}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-700">{row.service}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-700">{row.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <SubTitle>Strategic Suggestions:</SubTitle>
            <ul className="space-y-2 mb-6 list-disc list-inside text-lg text-gray-700 pl-4">
                <li>For **Fast-Growing Startups:** Begin with targeted RPO before full BPO.</li>
                <li>For **EU-GCC Corporations:** Combine talent mapping with compliance audits.</li>
            </ul>

            <HighlightBox>
                <Paragraph className="mb-2 font-bold text-gray-800">Final Call to Action</Paragraph>
                <Paragraph className="text-lg text-gray-700">"Explore DAN International's service frameworks tailored for your industry and region. Contact our advisors for methodology whitepapers."</Paragraph>
            </HighlightBox>
        </div>
    );
};
export default BlogPostTwentySix;