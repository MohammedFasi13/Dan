import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';

const SubSubHeading = ({ children }) => (
    <h3 className="text-xl font-semibold text-[#333] mt-6 mb-3 border-b border-[#f7f7f7] pb-1.5">
        {children}
    </h3>
);

const CustomBulletItem = ({ children }) => (
    <li className="relative pl-7 mb-2 text-lg before:content-['\2022'] before:text-[#46b724] before:text-2xl before:absolute before:left-0 before:top-0 before:font-bold">
        {children}
    </li>
);

const CheckListItem = ({ children }) => (
    <li className="relative pl-7 mb-2 text-lg flex items-start">
        <RiCheckboxCircleFill className="text-[#46b724] text-xl absolute left-0 top-0.5" />
        {children}
    </li>
);

const BlogPostSeventeen = () => {
    return (
        <div className="font-poppins max-w-4xl mx-auto my-12 p-5">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 pt-8 leading-tight">
                How to Secure ARAMCO & SABIC Approvals: DAN International's Strategic Guide
            </h1>
            <p className="text-lg mb-4 text-[#333]">
                Securing vendor approval from industry giants like Saudi Aramco (ARAMCO) and Saudi Basic Industries Corporation (SABIC) is the gateway to high-value projects in the Kingdom of Saudi Arabia (KSA). This process is complex and highly regulated, requiring meticulous preparation and deep local knowledge. DAN International offers a strategic roadmap for successful qualification.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Phase 1: Eligibility and Documentation Checklist
            </h2>
            <p className="text-lg mb-4 text-[#333]">
                Before initiating the formal application, ensure your organization meets the fundamental requirements and has all necessary documents prepared.
            </p>
            <SubSubHeading>
                Mandatory Documentation
            </SubSubHeading>
            <ul className="list-none p-0">
                <CheckListItem>
                    <span className="ml-2">Valid Commercial Registration (CR) in KSA.</span>
                </CheckListItem>
                <CheckListItem>
                    <span className="ml-2">Zakat & Income Tax Certificate.</span>
                </CheckListItem>
                <CheckListItem>
                    <span className="ml-2">GOSI (General Organization for Social Insurance) Certificate.</span>
                </CheckListItem>
                <CheckListItem>
                    <span className="ml-2">Audited Financial Statements for the last 3 years.</span>
                </CheckListItem>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Phase 2: The SAP Ariba and E-Procurement Process
            </h2>
            <p className="text-lg mb-4 text-[#333]">
                Both ARAMCO and SABIC utilize digital procurement platforms for vendor registration and management.
            </p>
            <SubSubHeading>
                Key Platform Steps
            </SubSubHeading>
            <ul className="list-none p-0">
                <CustomBulletItem>
                    <strong className="font-bold text-black">ARAMCO:</strong> Registration through the SAP Ariba network, followed by an extensive qualification questionnaire (e-sourcing event).
                </CustomBulletItem>
                <CustomBulletItem>
                    <strong className="font-bold text-black">SABIC:</strong> Use of the SABIC Global Supplier Portal for pre-qualification, which assesses company size, capabilities, and compliance.
                </CustomBulletItem>
            </ul>
            <p className="text-lg mb-4 text-[#333]">
                **Critical Insight:** Errors in the initial data submission are the most common cause of delays. Ensure all data precisely matches your official KSA business documents.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Phase 3: Compliance with Local Standards
            </h2>
            <p className="text-lg mb-4 text-[#333]">
                Compliance is non-negotiable, particularly with KSA’s localization and safety mandates.
            </p>
            <SubSubHeading>
                Compliance Focus Areas
            </SubSubHeading>
            <ul className="list-none p-0">
                <CheckListItem>
                    <span className="ml-2">
                        **Saudization (Nitaqat):** Meeting the required percentage of Saudi national employees for your company size and sector.
                    </span>
                </CheckListItem>
                <CheckListItem>
                    <span className="ml-2">
                        **In-Kingdom Total Value Add (IKTVA):** ARAMCO’s program requiring a minimum local content contribution score.
                    </span>
                </CheckListItem>
                <CheckListItem>
                    <span className="ml-2">
                        **HSE Standards:** Demonstrating robust Health, Safety, and Environmental management systems, often requiring ISO or equivalent certification.
                    </span>
                </CheckListItem>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Maintaining Approved Status
            </h2>
            <ul className="list-none p-0">
                <CheckListItem><span className="ml-2">Regular document updates</span></CheckListItem>
                <CheckListItem><span className="ml-2">Performance monitoring</span></CheckListItem>
                <CheckListItem><span className="ml-2">Continuous Saudization tracking</span></CheckListItem>
                <CheckListItem><span className="ml-2">Annual re-certification requirements</span></CheckListItem>
            </ul>

            <SubSubHeading>
                Why Consider DAN International's Advisory Services
            </SubSubHeading>
            <ul className="list-none p-0">
                <CustomBulletItem>Navigate complex approval processes</CustomBulletItem>
                <CustomBulletItem>Prepare comprehensive documentation</CustomBulletItem>
                <CustomBulletItem>Avoid common application pitfalls</CustomBulletItem>
                <CustomBulletItem>Maintain ongoing compliance</CustomBulletItem>
            </ul>

            <div className="bg-[#f7f7f7] border-l-4 border-[#46b724] p-5 my-8 rounded-md">
                <p className="mb-2 font-bold">Next Steps with DAN International</p>
                <ul className="list-none p-0 mt-2">
                    <li className="relative pl-7 mb-1.5 text-lg flex items-start">
                        <span className="text-[#46b724] text-xl absolute left-0 top-0.5">➡</span>
                        <span className="pl-2">Request our ARAMCO/SABIC readiness checklist</span>
                    </li>
                    <li className="relative pl-7 mb-1.5 text-lg flex items-start">
                        <span className="text-[#46b724] text-xl absolute left-0 top-0.5">➡</span>
                        <span className="pl-2">Schedule a compliance consultation</span>
                    </li>
                    <li className="relative pl-7 mb-1.5 text-lg flex items-start">
                        <span className="text-[#46b724] text-xl absolute left-0 top-0.5">➡</span>
                        <span className="pl-2">Access our document preparation toolkit</span>
                    </li>
                </ul>
                <p className="font-bold mt-4">DAN International - Your strategic partner for Middle Eastern market entry and corporate approvals.</p>
            </div>
        </div>
    );
};

export default BlogPostSeventeen;