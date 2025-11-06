import React from 'react';
import { useNavigate } from 'react-router-dom';

// --- Blog Post Metadata ---
// This array now includes the 'path' property, which MUST match the routes defined in app.jsx
const blogPosts = [
    { 
        id: 1, 
        title: "How GAMCA Works (and How DAN International Solutions Helps You Avoid Delays & Scams)", 
        summary: "For thousands of professionals traveling to the Gulf Cooperation Council (GCC) countries—Saudi Arabia, UAE, Qatar, Oman, Kuwait, and Bahrain—passing a GAMCA (Gulf Approved Medical Centers Association) medical test is the very first step before a visa can be stamped...", 
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/how-gamca-works" // Matches <Route path="/blog/how-gamca-works" ...
    },
    { 
        id: 2, 
        title: "How to Avoid Trade Test Delays & Scams in the GCC: A Guide for Job Seekers & Recruiters", 
        summary: "Trade tests are one of the most critical steps in the recruitment process for overseas workers, particularly in Saudi Arabia, UAE, Qatar, and other GCC countries...", 
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/avoid-trade-test-delays" // Matches <Route path="/blog/avoid-trade-test-delays" ...
    },
    { 
        id: 3, 
        title: "The DAN International Guide to Seamless Gulf Employment: Before You Go & After You Arrive", 
        summary: "For thousands of professionals and skilled workers, the Gulf Cooperation Council (GCC) remains one of the most attractive destinations for employment...", 
        img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/seamless-gulf-employment-guide"
    },
    { 
        id: 4, 
        title: "Legal Protection Against Unlawful Resignation Fees & Fake Job Offers in KSA/GCC", 
        summary: "The Gulf region—particularly Saudi Arabia (KSA), the UAE, and wider GCC—offers lucrative opportunities for expatriates. However, many workers face two recurring challenges...", 
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
        path: "/blog/legal-protection-unlawful-fees"
    },
    { 
        id: 5, 
        title: "How to Hire 1000+ Construction Workers in 30 Days: DAN’s Reliable Blue-Collar Recruitment Process", 
        summary: "Large-scale construction projects often face a single pressing question: How do you hire 1,000+ skilled workers in just 30 days? ...", 
        img: "https://img.freepik.com/premium-photo/construction-workers-wearing-hard-hats-construction-site_605022-21415.jpg",
        path: "/blog/hire-1000-workers-in-30-days"
    },
    { 
        id: 6, 
        title: "How AI is Transforming HR: DAN International’s Strategic Approach", 
        summary: "The Human Resources (HR) industry is in the middle of a digital revolution. Artificial Intelligence (AI) is no longer a futuristic concept...", 
        img: "https://web-assets.hyscaler.com/wp-content/uploads/2023/11/ei-in-ai-for-decision-making.webp",
        path: "/blog/ai-transforming-hr"
    },
    { 
        id: 7, 
        title: "Strategic Workforce Transformation: DAN International's Comprehensive Approach to Modern Work Models", 
        summary: "The modern workplace is evolving at a pace never seen before. Remote, hybrid, and flexible work models are no longer temporary fixes...", 
        img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        path: "/blog/strategic-workforce-transformation"
    },
    { 
        id: 8, 
        title: "Global Labor Law Compliance: DAN International’s Essential Guide for Employers", 
        summary: "In today’s interconnected business environment, global labor law compliance is more than a legal requirement—it’s a foundation for sustainable growth...", 
        img: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/global-labor-law-compliance"
    },
    { 
        id: 9, 
        title: "Winning the Talent War: DAN International’s Data-Backed Strategies for Top Talent Acquisition", 
        summary: "In today’s hyper-competitive hiring market, companies are facing unprecedented challenges in finding and retaining qualified talent...", 
        img: "https://images.unsplash.com/photo-1556740738-b6a63e2775df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/winning-the-talent-war"
    },
    { 
        id: 10, 
        title: "Recruitment Process Outsourcing (RPO): A Strategic Overview by DAN International", 
        summary: "Recruitment is no longer just about filling vacancies—it’s about building sustainable talent pipelines that align with business strategy...", 
        img: "https://www.visionpix.in/wp-content/uploads/2023/05/ftrd-recruitment-process-outsourcing.jpg",
        path: "/blog/recruitment-process-outsourcing"
    },
    { 
        id: 11, 
        title: "Outsourcing and BPO in the Middle East & India: Strategic Advantages with DAN International", 
        summary: "In today’s competitive global market, organizations are under constant pressure to reduce costs, improve efficiency, and stay agile...", 
        img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/bpo-middle-east-india"
    },
    { 
        id: 12, 
        title: "Building a Positive Workplace Culture: Insights from DAN International", 
        summary: "DAN International recognizes workplace culture as the foundation of organizational success. A positive culture drives employee engagement...", 
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        path: "/blog/building-positive-workplace-culture"
    },
    { 
        id: 13, 
        title: "Selecting the Right HRMS: A Strategic Guide by DAN International", 
        summary: "DAN International provides expert guidance to help organizations navigate the complex process of choosing a Human Resource Management System...", 
        img: "https://www.betterplace.co.in/blog/wp-content/uploads/2023/06/Five_ways_modern_HRMS_solve_traditional_issues_faced_by_HR.jpg",
        path: "/blog/selecting-right-hrms"
    },
    { 
        id: 14, 
        title: "Upskilling Your Workforce: A Strategic Guide by DAN International", 
        summary: "DAN International recognizes upskilling as a critical component of modern workforce strategy. In today's rapidly evolving business landscape...", 
        img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/upskilling-your-workforce"
    },
    { 
        id: 15, 
        title: "HR Outsourcing vs. In-House: A Strategic Cost Analysis by DAN International", 
        summary: "DAN International provides organizations with expert guidance when evaluating HR operational approaches. This comprehensive cost comparison...", 
        img: "https://images.pexels.com/photos/7691724/pexels-photo-7691724.jpeg",
        path: "/blog/hr-outsourcing-vs-in-house"
    },
    { 
        id: 16, 
        title: "Leadership Development: HR's Strategic Advantage - Insights from DAN International", 
        summary: "DAN International recognizes leadership development as a cornerstone of organizational success. In today's competitive business environment...", 
        img: "https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/leadership-development"
    },
    { 
        id: 17, 
        title: "How to Secure ARAMCO & SABIC Approvals: DAN International's Strategic Guide", 
        summary: "DAN International recognizes leadership development as a cornerstone of organizational success. In today's competitive business environment...", 
        img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/secure-aramco-sabic-approvals"
    },
    { 
        id: 18, 
        title: "Saudi Arabia vs. UAE: A Professional's Guide by DAN International", 
        summary: "DAN International provides strategic insights for professionals considering career opportunities in Saudi Arabia and the United Arab Emirates...", 
        img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        path: "/blog/saudi-arabia-vs-uae"
    },
    { 
        id: 19, 
        title: "Cost of Living in KSA, UAE, and Qatar: DAN International's Expert Guide for Professionals", 
        summary: "DAN International provides this comprehensive analysis to help professionals make informed decisions about career opportunities...", 
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/cost-of-living-ksa-uae-qatar"
    },
    { 
        id: 20, 
        title: "Iqama Transfer Process: DAN International's Guide to Legal Sponsorship Transfer in Saudi Arabia", 
        summary: "DAN International provides this comprehensive overview of Saudi Arabia's Iqama transfer process to help professionals and employers navigate...", 
        img: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        path: "/blog/iqama-transfer-process"
    },
    { 
        id: 21, 
        title: "Planning for Permanent Residency or Long-Term Stay in the Middle East: DAN International's Strategic Guide", 
        summary: "DAN International provides this overview of permanent residency pathways in key Middle Eastern countries to help professionals make informed decisions...", 
        img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        path: "/blog/permanent-residency-middle-east"
    },
    { 
        id: 22, 
        title: "End-of-Service Benefits Explained: DAN International's Guide to Employee Entitlements", 
        summary: "DAN International provides this comprehensive guide to help employees and employers understand end-of-service benefits (EOSB)...", 
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/end-of-service-benefits"
    },
    { 
        id: 23, 
        title: "Workplace Etiquette in the GCC: DAN International's Professional Guide", 
        summary: "DAN International presents this essential guide to professional etiquette across Gulf Cooperation Council (GCC) countries...", 
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/workplace-etiquette-gcc"
    },
    { 
        id: 24, 
        title: "Understanding Job Collar Colors: DAN International's Guide to Workforce Classification", 
        summary: "DAN International presents this comprehensive guide to collar color classifications in modern workforce terminology. These categories help...", 
        img: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/understanding-job-collar-colors"
    },
    { 
        id: 25, 
        title: "How to Find a Job in Saudi Arabia, Oman, Qatar, Dubai, USA, UK, Australia & Europe: DAN International's Expert Guide", 
        summary: "DAN International presents this comprehensive roadmap for professionals targeting key international markets...", 
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/how-to-find-job-globally"
    },
    { 
        id: 26, 
        title: "DAN International Solutions: Service-Focused Blog Topics for Global HR Leadership", 
        summary: "BPO Revolution: How DAN International is Transforming Business Process Outsourcing Across India, Saudi Arabia & Europe...", 
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/service-focused-blog-topics"
    },
    { 
        id: 27, 
        title: "From the Founder’s Desk: Reinventing HR with DAN International Solutions", 
        summary: "By Mubassir Mohammed — Founder & Managing Director, DAN International Solutions. In today’s dynamic global business landscape...", 
        img: "https://images.unsplash.com/photo-1553877522-976993a22883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        path: "/blog/founders-desk-reinventing-hr"
    },
    { 
        id: 28, 
        title: "Navigating Approvals with Aramco, SABIC, ADNOC, SEC, APOC & NEOM: Founder’s Perspective from DAN International Solutions", 
        summary: "By Mubassir Mohammed — Founder & Managing Director, DAN International Solutions. As Founder of DAN International Solutions, I’ve witnessed firsthand...", 
        img: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
        path: "/blog/navigating-approvals-aramco-sabic"
    },
];


const Blogs = () => {
    // 1. Initialize useNavigate hook
    const navigate = useNavigate();

    // Function to handle navigation when "Read more" is clicked
    const handleReadMore = (path) => {
        navigate(path);
    };

    return (
        <div className="min-h-screen  py-25 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 text-center pt-12 mb-12">
                    Our Latest Insights & Blog Posts
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((blog) => (
                        <div
                            key={blog.id}
                            className="blog-card flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-t-4 border-green-500"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                    // Fallback for image loading error
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/600x400/10B981/ffffff?text=DAN+Blog";
                                    }}
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="card-title text-xl font-bold text-gray-900 mb-3 leading-snug">
                                    {blog.title}
                                </h2>
                                <p className="card-text text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                                    {blog.summary}
                                </p>
                                <button
                                    // 2. Call navigate function with the post's path
                                    onClick={() => handleReadMore(blog.path)} 
                                    className="card-button self-start mt-auto inline-block px-5 py-2.5 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    Read more
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
