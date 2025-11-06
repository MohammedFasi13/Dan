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

const BlogPostEighteen = () => {
    // Tailwind classes for the comparison-table
    const thClasses = "p-3 border border-gray-300 bg-[#46b724] text-white font-semibold";
    const tdClasses = "p-3 border border-gray-300 text-lg";
    const oddRowClasses = "bg-white";
    const evenRowClasses = "bg-[#f7f7f7]";
    const firstColClasses = "font-semibold text-black";

    return (
        <div className="font-poppins max-w-4xl mx-auto my-12 p-5">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 pt-8 leading-tight">
                Saudi Arabia vs. UAE: A Professional's Guide by DAN International
            </h1>
            <p className="text-lg mb-4 text-[#333]">
                Choosing between Saudi Arabia (KSA) and the United Arab Emirates (UAE) for career and life opportunities requires a clear understanding of their distinct economic, regulatory, and cultural landscapes. Both nations are rapidly transforming, but their professional environments offer unique advantages. DAN International offers an objective comparison to guide your decision.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Comparative Overview: KSA vs. UAE
            </h2>

            <table className="w-full border-collapse my-6 text-left text-base">
                <thead>
                    <tr>
                        <th className={thClasses}>Factor</th>
                        <th className={thClasses}>Saudi Arabia (KSA)</th>
                        <th className={thClasses}>UAE (Dubai/Abu Dhabi)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={oddRowClasses}>
                        <td className={`${tdClasses} ${firstColClasses}`}>Economic Focus</td>
                        <td className={tdClasses}>Mega-projects (NEOM, Red Sea), Energy, Industrialization (Vision 2030)</td>
                        <td className={tdClasses}>Trade, Finance, Tourism, Technology Hub</td>
                    </tr>
                    <tr className={evenRowClasses}>
                        <td className={`${tdClasses} ${firstColClasses}`}>Workforce Policy</td>
                        <td className={tdClasses}>Heavily focuses on **Saudization** (Nitaqat) and local content</td>
                        <td className={tdClasses}>High reliance on expatriate talent; new visa pathways (Green/Golden Visa)</td>
                    </tr>
                    <tr className={oddRowClasses}>
                        <td className={`${tdClasses} ${firstColClasses}`}>Compensation</td>
                        <td className={tdClasses}>Historically high tax-free salaries in specialized sectors (Oil & Gas, Engineering)</td>
                        <td className={tdClasses}>Competitive global benchmarks, particularly in Finance and Tech</td>
                    </tr>
                    <tr className={evenRowClasses}>
                        <td className={`${tdClasses} ${firstColClasses}`}>Cost of Living</td>
                        <td className={tdClasses}>Generally lower housing costs outside of Riyadh/Jeddah</td>
                        <td className={tdClasses}>Higher, especially for housing in major cities</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Career and Regulatory Environment
            </h2>

            <SubSubHeading>
                Employment Law Differences
            </SubSubHeading>
            <ul className="list-none p-0">
                <CheckListItem>
                    <span className="ml-2">
                        **KSA:** Stronger emphasis on end-of-service benefits and stringent rules around probation and termination.
                    </span>
                </CheckListItem>
                <CheckListItem>
                    <span className="ml-2">
                        **UAE:** Introduction of Federal Decree-Law No. 33 of 2021 establishing standard limited contracts and flexible work permits.
                    </span>
                </CheckListItem>
            </ul>
            <p className="text-lg mb-4 text-[#333]">
                **Taxation Note:** While both countries offer a zero-income tax environment for individuals, KSA has introduced a 15% VAT, and the UAE has introduced corporate tax for large businesses, though not affecting individual salaries.
            </p>

            <SubSubHeading>
                Lifestyle and Cultural Adjustment
            </SubSubHeading>
            <p className="text-lg mb-4 text-[#333]">
                The UAE is generally considered more liberal and globally integrated, while KSA maintains a more traditional culture, though it is rapidly modernizing under Vision 2030.
            </p>
            <ul className="list-none p-0">
                <CustomBulletItem>
                    <strong className="font-bold text-black">Travel & Leisure:</strong> UAE offers a wider range of global entertainment and tourism facilities.
                </CustomBulletItem>
                <CustomBulletItem>
                    <strong className="font-bold text-black">Community:</strong> KSA offers deep cultural immersion; the UAE offers a highly diverse, transient expatriate community.
                </CustomBulletItem>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Preparation for Gulf Mobility
            </h2>
            <SubSubHeading>
                Key Transition Steps
            </SubSubHeading>
            <ul className="list-none p-0">
                <CustomBulletItem>Local business etiquette training</CustomBulletItem>
                <CustomBulletItem>Regional compliance awareness</CustomBulletItem>
                <CustomBulletItem>Language basics (Arabic beneficial in both)</CustomBulletItem>
            </ul>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Conclusion
            </h2>
            <SubSubHeading>
                Why Consult DAN International
            </SubSubHeading>
            <p className="text-lg mb-4 text-[#333]">Our advisory services provide:</p>
            <ul className="list-none p-0">
                <CheckListItem><span className="ml-2">Market-specific compensation benchmarks</span></CheckListItem>
                <CheckListItem><span className="ml-2">Regulatory updates</span></CheckListItem>
                <CheckListItem><span className="ml-2">Sector opportunity analysis</span></CheckListItem>
                <CheckListItem><span className="ml-2">Relocation planning tools</span></CheckListItem>
            </ul>

            <div className="bg-[#f7f7f7] border-l-4 border-[#46b724] p-5 my-8 rounded-md">
                <p className="mb-2 font-bold">Next Steps with DAN International</p>
                <ul className="list-none p-0 mt-2">
                    <li className="relative pl-7 mb-1.5 text-lg flex items-start">
                        <span className="text-[#46b724] text-xl absolute left-0 top-0.5">➡</span>
                        <span className="pl-2">Request our Gulf Compensation Report</span>
                    </li>
                    <li className="relative pl-7 mb-1.5 text-lg flex items-start">
                        <span className="text-[#46b724] text-xl absolute left-0 top-0.5">➡</span>
                        <span className="pl-2">Schedule a career consultation</span>
                    </li>
                    <li className="relative pl-7 mb-1.5 text-lg flex items-start">
                        <span className="text-[#46b724] text-xl absolute left-0 top-0.5">➡</span>
                        <span className="pl-2">Access our relocation checklist</span>
                    </li>
                </ul>
                <p className="font-bold mt-4">DAN International - Your strategic partner for Gulf career advancement.</p>
            </div>
        </div>
    );
};

export default BlogPostEighteen;