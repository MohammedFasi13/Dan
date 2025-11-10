import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// We do NOT import images from the 'public' folder.
// We reference them directly as strings.

const teamData = [
  {
    name: "D.Ali",
    role: "Chief Executive Officer (CEO)",
    bio: "Dania Sujath is the visionary leader behind our organization, serving as Chief Executive Officer. With a strong commitment to innovation, excellence, and strategic growth, she drives the company’s mission and long-term vision. Under her leadership, the organization continues to expand its impact, build strong client relationships, and deliver high-quality solutions across all sectors. Dania’s dynamic leadership and forward-thinking approach are key to our continued success.",
    img: "/assets/Dania-Sujath.png", // <-- CHANGED
    linkedin: "https://www.linkedin.com/in/dania-sujath-43a917348/",
  },
  {
    name: "Mubassir Mohammed",
    role: "Founder & Managing Director – DAN International Solutions",
    bio: (
      <>
        “Where Talent Meets Opportunity” <br />
        <br /> After years of working with global leaders like Aramco,
        NEOM, Ma’aden, and ADNOC, I founded DAN International with a clear
        mission: to transform HR services and fix what’s broken in global
        workforce management. At DAN, we don’t just fill positions — we provide
        comprehensive, end-to-end HR solutions that build careers, empower
        businesses, and drive lasting success. From our 72-hour candidate
        response policy to military-grade visa handling and a 95% offer
        acceptance rate, every step of our process is designed with precision,
        transparency, and integrity. DAN International is more than an HR
        service provider — it’s a commitment to elevate people, performance, and
        the future of workforce excellence.{" "}
      </>
    ),
    img: "/assets/Mubassir-Mohammed.jpeg", // <-- CHANGED
    linkedin: "https://www.linkedin.com/in/mubassir-mohammed-/",
  },
  {
    name: "Ali Hussain",
    role: "Vice President",
    bio: "Ali Hussain serves as the Vice President of our organization, bringing strategic insight and strong leadership to every facet of the business. With a focus on operational excellence and sustainable growth, he oversees key departments, drives high-level decision-making, and fosters valuable partnerships. His leadership ensures the company remains agile, competitive, and aligned with its long-term vision.",
    img: "/assets/Al-hussain.png", // <-- CHANGED (and fixed case)
    linkedin: "https://www.linkedin.com/in/ali-hussain-04984230/",
  },
  {
    name: "Mohammed Salman Ali",
    role: "Business Development Executive – GCC Region",
    bio: "With a strong focus on strategic growth and client engagement, Mohammed Salman Ali brings valuable experience in business development across the GCC region. He is dedicated to identifying new market opportunities, fostering long-term partnerships, and driving sustainable business expansion. His deep understanding of regional markets and results-driven approach make him a key contributor to our success in the Middle East.",
    img: "https://www.freeiconspng.com/thumbs/male-icon/male-icon-32.png", // External URL
    linkedin: "https://www.linkedin.com/in/mohammed-salman-ali-b344a9306/",
  },
  {
    name: "Mir Azam Ali",
    role: "HR Business Partner",
    bio: "Mir Azam Ali serves as a key link between leadership and employees, aligning human resource strategies with overall business objectives. As an HR Business Partner, he focuses on talent management, employee engagement, and organizational development. With a people-first approach and a deep understanding of HR practices, Mir Azam ensures a productive, compliant, and growth-driven workplace environment.",
    img: "https://www.freeiconspng.com/thumbs/male-icon/male-icon-32.png", // External URL
    linkedin: "https://www.linkedin.com/in/mir-azam-ali-02a659265/",
  },
  {
    name: "Mohammed Shadab Chowdhary",
    role: "Business and Recruitment Specialist",
    bio: "Mohammed Shadab Chowdhary plays a vital role in bridging business growth and talent acquisition. As a Business and Recruitment Specialist, he focuses on identifying new opportunities, supporting client needs, and sourcing the right talent to meet organizational goals. With a strong understanding of both business operations and recruitment strategies, Shadab ensures that the company stays competitive, agile, and well-equipped with the right people to drive success.",
    img: "https://www.freeiconspng.com/thumbs/male-icon/male-icon-32.png", // External URL
    linkedin:
      "https://www.linkedin.com/in/mohammed-shadab-chowdhary-shrm-539295a4/",
  },
  {
    name: "Mohammed Adnan",
    role: "Accounts & Recruitment Executive",
    bio: "Mohammed Adnan plays a dual role at our organization, efficiently managing both financial operations and talent acquisition. With expertise in handling billing, purchase and sales orders, contract management, and RFQs, he ensures smooth and accurate accounting processes. On the HR front, he oversees the entire recruitment cycle — from sourcing and interviews to mobilization — helping us build a strong and capable workforce. Adnan’s dedication and versatility make him a valuable asset to both our finance and HR teams.",
    img: "/assets/Mohammed-Adnan.jpeg", // <-- CHANGED
    linkedin: "https://www.linkedin.com/in/mohammed-adnan-bba943288/",
  },
];

const OurTeam = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {" "}
      <div className="max-w-7xl mx-auto">
        {" "}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-14 border-b-2 pt-12 border-[#46B724] pb-4">
          {" "}
          Meet Our Team{" "}
        </h1>
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {" "}
          {teamData.map((member, index) => (
            <div
              key={index}
              className="team-member bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              {" "}
              <div className="profile-pic-container flex justify-center mb-6">
                {" "}
                <img
                  src={member.img}
                  alt={member.name}
                  className="profile-pic w-32 h-32 object-cover rounded-full ring-4 ring-[#46B724] "
                  onError={(e) => {
                    // Optional: Fallback for missing images
                    e.target.onError = null;
                    e.target.src =
                      "https://via.placeholder.com/128?text=Profile";
                  }}
                />
                {" "}
              </div>
              {" "}
              <h2 className="member-name text-2xl font-bold text-gray-900 text-center mb-1">
                {" "}
                {member.name} {" "}
              </h2>
              {" "}
              <p className="member-role text-md font-semibold text-[#46B724]  text-center mb-4">
                {" "}
                {member.role} {" "}
              </p>
              {" "}
              <p className="member-bio text-gray-600 text-sm leading-relaxed mb-6 italic border-t pt-4">
                {" "}
                {member.bio} {" "}
              </p>
              {" "}
              <div className="social-links flex justify-center space-x-4">
                {" "}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#46B724]  transition text-2xl"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  {" "}
                  {/* Using the React Font Awesome component */}
                  <FontAwesomeIcon icon={faLinkedin} />{" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
          ))}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
};

export default OurTeam;