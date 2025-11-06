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

const BlogPostSixteen = () => {
    return (
        <div className="font-poppins max-w-4xl mx-auto my-12 p-5">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 pt-8 leading-tight">
                Leadership Development: HR's Strategic Advantage - Insights from DAN International
            </h1>
            <p className="text-lg mb-4 text-[#333]">
                In an era defined by volatility and rapid change, effective leadership is the single most reliable predictor of organizational success. HR's role has evolved from managing training logistics to strategically architecting the leadership pipeline. DAN International’s framework focuses on developing adaptive, future-ready leaders.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                The Core Pillars of Strategic Leadership Development
            </h2>

            <SubSubHeading>
                1. Competency Mapping for the Future
            </SubSubHeading>
            <p className="text-lg mb-4 text-[#333]">
                Traditional models are insufficient. We must map competencies to emerging needs, not just current roles.
            </p>
            <ul className="list-none p-0">
                <CheckListItem>
                    <span className="ml-2">
                        <strong>Digital Fluency:</strong> Capability to drive and embrace technological transformation.
                    </span>
                </CheckListItem>
                <CheckListItem>
                    <span className="ml-2">
                        <strong>Systemic Thinking:</strong> Ability to see the organization as an interconnected system rather than isolated departments.
                    </span>
                </CheckListItem>
                <CheckListItem>
                    <span className="ml-2">
                        <strong>Emotional Intelligence & Resilience:</strong> The capacity to lead with empathy and maintain team stability during disruption.
                    </span>
                </CheckListItem>
            </ul>

            <SubSubHeading>
                2. Adopting a Blended Learning Approach
            </SubSubHeading>
            <p className="text-lg mb-4 text-[#333]">
                Development is most effective when it is continuous, integrated into daily work, and personalized.
            </p>
            <ul className="list-none p-0">
                <CustomBulletItem>
                    <strong className="font-bold text-black">Action Learning Sets:</strong> Solving real business problems as part of the training program.
                </CustomBulletItem>
                <CustomBulletItem>
                    <strong className="font-bold text-black">Reverse Mentoring:</strong> Pairing senior leaders with junior staff to teach them about digital tools and culture shifts.
                </CustomBulletItem>
                <CustomBulletItem>
                    <strong className="font-bold text-black">360-Degree Feedback:</strong> Comprehensive feedback to create targeted personal development plans.
                </CustomBulletItem>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Measuring Impact and Ensuring Sustainability
            </h2>
            <p className="text-lg mb-4 text-[#333]">
                The ultimate goal is to connect leadership investment directly to improved business outcomes and a sustainable talent pipeline.
            </p>
            <SubSubHeading>
                Evaluation Metrics
            </SubSubHeading>
            <ul className="list-none p-0">
                <CustomBulletItem>
                    <strong>Talent Pipeline Readiness:</strong> Percentage of key roles with a ready-now successor identified.
                </CustomBulletItem>
                <CustomBulletItem>
                    <strong>Employee Engagement Scores:</strong> Direct correlation between effective leadership and team morale.
                </CustomBulletItem>
                <CustomBulletItem>
                    <strong>Retention of High-Potentials:</strong> The success rate of retaining employees identified as future leaders.
                </CustomBulletItem>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Emerging Trends in Leadership Development
            </h2>
            <p className="text-lg mb-4 text-[#333]">
                Forward-thinking organizations are embracing these shifts:
            </p>
            <ul className="list-none p-0">
                <CheckListItem>
                    <span className="ml-2">Shift from <strong>hero-leadership</strong> to <strong>collective ownership</strong></span>
                </CheckListItem>
                <CheckListItem>
                    <span className="ml-2">Greater integration of neuroscience principles</span>
                </CheckListItem>
                <CheckListItem>
                    <span className="ml-2">Personalized, just-in-time development</span>
                </CheckListItem>
                <CheckListItem>
                    <span className="ml-2">Enhanced use of predictive analytics</span>
                </CheckListItem>
            </ul>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#46b724] mt-8 mb-4 pt-2">
                Conclusion
            </h2>
            <SubSubHeading>
                Why Partner with DAN International for Leadership Strategy
            </SubSubHeading>
            <ul className="list-none p-0">
                <CustomBulletItem>Research-based frameworks</CustomBulletItem>
                <CustomBulletItem>Customizable program blueprints</CustomBulletItem>
                <CustomBulletItem>Implementation roadmaps</CustomBulletItem>
                <CustomBulletItem>Evaluation methodologies</CustomBulletItem>
            </ul>

            <div className="bg-[#f7f7f7] border-l-4 border-[#46b724] p-5 my-8 rounded-md">
                <p className="mb-2 font-bold">Next Steps with DAN International</p>
                <ul className="list-none p-0 mt-2">
                    <li className="relative pl-7 mb-1.5 text-lg flex items-start">
                        <span className="text-[#46b724] text-xl absolute left-0 top-0.5">➡</span>
                        <span className="pl-2">Request our leadership competency framework</span>
                    </li>
                    <li className="relative pl-7 mb-1.5 text-lg flex items-start">
                        <span className="text-[#46b724] text-xl absolute left-0 top-0.5">➡</span>
                        <span className="pl-2">Schedule a development strategy session</span>
                    </li>
                    <li className="relative pl-7 mb-1.5 text-lg flex items-start">
                        <span className="text-[#46b724] text-xl absolute left-0 top-0.5">➡</span>
                        <span className="pl-2">Access our program design toolkit</span>
                    </li>
                </ul>
                <p className="font-bold mt-4">DAN International - Enabling organizations to build leadership capability as a strategic advantage.</p>
            </div>
        </div>
    );
};

export default BlogPostSixteen;