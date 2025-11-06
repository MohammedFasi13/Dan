// NOTE: This component assumes Tailwind CSS is configured in your project.
import React from 'react';
// ... Helper Components (CheckIcon, BulletIcon, SectionTitle, SubTitle, Paragraph, HighlightBox)
// Define them or import them from a shared file for the complete solution.

const BlogPostTwentyThree = () => {
    // Re-defining helpers locally for component completeness in this context
    const CheckIcon = () => (<svg className="w-5 h-5 text-[#46b724] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>);
    const BulletIcon = () => (<span className="text-[#46b724] mr-3 text-2xl leading-none">•</span>);
    const SectionTitle = ({ children }) => (<h2 className="text-2xl font-semibold text-[#46b724] mt-8 mb-4 pt-4 border-t border-gray-200">{children}</h2>);
    const SubTitle = ({ children }) => (<h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{children}</h3>);
    const Paragraph = ({ children, className = "" }) => (<p className={`text-lg mb-4 leading-relaxed text-gray-700 ${className}`}>{children}</p>);
    const HighlightBox = ({ children }) => (<div className="p-6 my-8 border-l-4 border-[#46b724] bg-green-50 rounded-lg shadow-sm">{children}</div>);

    return (
        <div className="max-w-4xl mx-auto px-4 lg:px-0 mt-8 mb-10 font-poppins">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 pt-24 leading-tight">
                Workplace Etiquette in the GCC: DAN International's Professional Guide
            </h1>
            <Paragraph>
                Success in the Gulf Cooperation Council (GCC) requires more than just technical skill—it demands a nuanced understanding of professional etiquette and cultural sensitivity. DAN International's guide helps professionals navigate the unique workplace norms in Saudi Arabia (KSA), the UAE, and Qatar.
            </Paragraph>

            <SectionTitle>Meeting Protocols & Communication Styles</SectionTitle>
            <SubTitle>The Value of Personal Relationships (Wasta)</SubTitle>
            <Paragraph>
                Business often relies on personal trust and relationship-building. Be prepared to invest time in non-business conversations. In formal settings, address locals by their title (e.g., Sheikh, Doctor) or "Mr." / "Ms." followed by their first name.
            </Paragraph>
            <SubTitle>Meeting Dynamics</SubTitle>
            <ul className="space-y-2 mb-4">
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>**Punctuality:** While your punctuality is essential, meetings may start late due to cultural flexibility.</span>
                </li>
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>**Decision Making:** Decisions are often hierarchical and may not be finalized in the initial meeting.</span>
                </li>
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>**Handshakes:** Reserve handshakes for members of the same sex, and always wait for a woman to initiate.</span>
                </li>
            </ul>

            <SectionTitle>Professional Dress Code (Men & Women)</SectionTitle>
            <Paragraph>
                While the UAE and Qatar have slightly more liberal interpretations, a conservative standard is the universal rule for the workplace across the GCC.
            </Paragraph>
            <SubTitle>For Men:</SubTitle>
            <ul className="space-y-2 mb-4">
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />Dark, well-fitted suits, shirts, and ties for formal settings.</li>
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />Avoid shorts or overly casual attire even in a 'smart casual' environment.</li>
            </ul>
            <SubTitle>For Women:</SubTitle>
            <ul className="space-y-2 mb-4">
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />Shoulders and knees must be covered. High necklines and long sleeves are recommended.</li>
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />Avoid tight-fitting or revealing clothing. The focus should be on modesty and professionalism.</li>
            </ul>

            <SectionTitle>Respecting Hierarchy and Time</SectionTitle>
            <Paragraph>
                The organizational structure is typically formal and hierarchical. Show utmost respect to senior management and decision-makers.
            </Paragraph>
            <SubTitle>Working Hours</SubTitle>
            <Paragraph>
                The work week often runs from Sunday to Thursday, with Friday and Saturday as the weekend. Be mindful of prayer times, which may briefly interrupt meetings or workflow.
            </Paragraph>

            <SectionTitle>Essential Cross-Cultural Competencies</SectionTitle>
            <ul className="space-y-2 mb-4">
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />**Patience:** Decisions often take longer.</li>
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />**Respect:** For hierarchy and traditions.</li>
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />**Adaptability:** To local interpretations.</li>
                <li className="flex items-start text-lg text-gray-700"><CheckIcon />**Discretion:** In all professional matters.</li>
            </ul>

            <SubTitle>Best Practices for Female Professionals:</SubTitle>
            <ul className="space-y-2 mb-4">
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>Research company-specific norms.</span>
                </li>
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>Establish professional boundaries clearly.</span>
                </li>
                <li className="flex items-start text-lg pl-8 relative text-gray-700">
                    <BulletIcon />
                    <span>Leverage formal networks.</span>
                </li>
            </ul>

            <HighlightBox>
                <Paragraph className="mb-2 font-bold text-gray-800">Next Steps with DAN International</Paragraph>
                <ul className="space-y-2 mt-4">
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>➡ Request our GCC Cultural Handbook</span>
                    </li>
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>➡ Schedule an Etiquette Consultation</span>
                    </li>
                    <li className="flex items-start text-lg pl-8 relative text-gray-700">
                        <BulletIcon />
                        <span>➡ Access our Country-Specific Guides</span>
                    </li>
                </ul>
                <Paragraph className="font-bold mt-4 mb-0 text-gray-800">DAN International - Your trusted partner for GCC professional success.</Paragraph>
            </HighlightBox>
        </div>
    );
};
export default BlogPostTwentyThree;
