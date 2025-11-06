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

const BlogPostFifteen = () => {
    // Tailwind classes for the cost-table
    const thClasses = "p-3 border border-gray-300 bg-[#46b724] text-white font-semibold";
    const tdClasses = "p-3 border border-gray-300 text-lg";
    const oddRowClasses = "bg-white";
    const evenRowClasses = "bg-[#f7f7f7]";
    const firstColClasses = "font-semibold text-black";

    return (
        <div className="font-poppins max-w-4xl mx-auto my-12 p-5">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 pt-8 leading-tight">
                HR Outsourcing vs. In-House: A Strategic Cost Analysis by DAN International
            </h1>
            <p className="text-lg mb-4 text-[#333]">
                The decision to outsource HR functions or manage them in-house is one of the most significant strategic choices a company can make. DAN International’s advisory services help organizations conduct a rigorous cost analysis, moving beyond surface-level figures to understand the total cost of ownership (TCO) for each model.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Understanding the Total Cost of Ownership (TCO)
            </h2>
            <p className="text-lg mb-4 text-[#333]">
                A true comparison requires factoring in both direct and indirect costs associated with HR operations.
            </p>

            <SubSubHeading>
                Direct Cost Components
            </SubSubHeading>
            <ul className="list-none p-0">
                <CustomBulletItem>
                    <strong className="font-bold text-black">In-House:</strong> Salaries, benefits, office space, training budgets, and HRIS (Human Resources Information System) licensing fees.
                </CustomBulletItem>
                <CustomBulletItem>
                    <strong className="font-bold text-black">Outsourced:</strong> Monthly service fees, contract negotiation costs, and transition/implementation fees.
                </CustomBulletItem>
            </ul>

            <SubSubHeading>
                Indirect Cost Components
            </SubSubHeading>
            <ul className="list-none p-0">
                <CheckListItem>
                    <span className="ml-2">**Compliance Risk:** Outsourcing often transfers liability for compliance, reducing fines/legal fees (indirect savings).</span>
                </CheckListItem>
                <CheckListItem>
                    <span className="ml-2">**Opportunity Cost:** Time senior management spends on HR administration is time lost from strategic work.</span>
                </CheckListItem>
                <CheckListItem>
                    <span className="ml-2">**Staff Turnover:** Outsourced providers may have a lower average cost-per-employee but can impact cultural fit and employee experience.</span>
                </CheckListItem>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Cost Comparison Matrix
            </h2>

            <table className="w-full border-collapse my-6 text-left text-base">
                <thead>
                    <tr>
                        <th className={thClasses}>Factor</th>
                        <th className={thClasses}>In-House HR</th>
                        <th className={thClasses}>HR Outsourcing (HRO)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={oddRowClasses}>
                        <td className={`${tdClasses} ${firstColClasses}`}>Cost Visibility</td>
                        <td className={tdClasses}>High (detailed expense tracking)</td>
                        <td className={tdClasses}>Medium (packaged service fees)</td>
                    </tr>
                    <tr className={evenRowClasses}>
                        <td className={`${tdClasses} ${firstColClasses}`}>Scalability Cost</td>
                        <td className={tdClasses}>High (hiring/firing costs)</td>
                        <td className={tdClasses}>Low (adjusting service tier)</td>
                    </tr>
                    <tr className={oddRowClasses}>
                        <td className={`${tdClasses} ${firstColClasses}`}>Technology Cost</td>
                        <td className={tdClasses}>High (licensing, maintenance, upgrades)</td>
                        <td className={tdClasses}>Low (included in service fee)</td>
                    </tr>
                    <tr className={evenRowClasses}>
                        <td className={`${tdClasses} ${firstColClasses}`}>Expertise Access</td>
                        <td className={tdClasses}>Limited (to in-house skill set)</td>
                        <td className={tdClasses}>High (global pool of specialists)</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Considering a Hybrid Model
            </h2>
            <p className="text-lg mb-4 text-[#333]">
                Many organizations find an optimal balance by selectively outsourcing transactional functions (payroll, benefits administration) while retaining core strategic functions (talent development, culture) in-house.
            </p>
            <SubSubHeading>
                Implementation Considerations
            </SubSubHeading>
            <ul className="list-disc pl-6 mt-2 mb-4 text-lg">
                <li>Scope definition and precise service level agreements (SLAs)</li>
                <li>Data security and privacy protections</li>
                <li>Cultural fit in vendor selections</li>
                <li>Scalability considerations</li>
                <li>Flexibility requirements</li>
                <li>Risk mitigation factors</li>
            </ul>

            <SubSubHeading>
                Why Consider DAN International's Advisory Services
            </SubSubHeading>
            <p className="text-lg mb-4 text-[#333]">Our impartial guidance helps organizations:</p>
            <ul className="list-none p-0">
                <CheckListItem><span className="ml-2">Objectively evaluate both options</span></CheckListItem>
                <CheckListItem><span className="ml-2">Identify cost optimization opportunities</span></CheckListItem>
                <CheckListItem><span className="ml-2">Navigate vendor selection processes</span></CheckListItem>
                <CheckListItem><span className="ml-2">Develop transition roadmaps</span></CheckListItem>
            </ul>

            <div className="bg-[#f7f7f7] border-l-4 border-[#46b724] p-5 my-8 rounded-md">
                <p className="mb-2 font-bold">Next Steps with DAN International</p>
                <ul className="list-none p-0 mt-2">
                    <li className="relative pl-7 mb-1.5 text-lg flex items-start">
                        <span className="text-[#46b724] text-xl absolute left-0 top-0.5">➡</span>
                        <span className="pl-2">Request our HR cost calculator tool</span>
                    </li>
                    <li className="relative pl-7 mb-1.5 text-lg flex items-start">
                        <span className="text-[#46b724] text-xl absolute left-0 top-0.5">➡</span>
                        <span className="pl-2">Schedule a financial analysis consultation</span>
                    </li>
                    <li className="relative pl-7 mb-1.5 text-lg flex items-start">
                        <span className="text-[#46b724] text-xl absolute left-0 top-0.5">➡</span>
                        <span className="pl-2">Access our vendor evaluation checklist</span>
                    </li>
                </ul>
                <p className="font-bold mt-4">DAN International - Providing strategic HR operational guidance for optimal cost efficiency.</p>
            </div>
        </div>
    );
};

export default BlogPostFifteen;