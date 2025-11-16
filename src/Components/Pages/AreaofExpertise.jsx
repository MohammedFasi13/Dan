import React, { useState } from "react";

// NOTE ON STYLING:
// In a production React environment, the styles below should be included in your
// global CSS file (e.g., index.css) or configured in your tailwind.config.js
// since custom @keyframes and global styles (like Google Translate overrides)
// cannot be placed directly in a JSX component.

/* // Recommended CSS to include in a global stylesheet for animations:
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.8s ease-out both;
}
*/

const AreaofExpertise = () => {
  // Custom DAN Green color: #46b724
  const DAN_GREEN = "#46b724";

  // 1. Image Map for dynamic display (using placeholders for assumption)
  const imageMap = {
    default:
      "https://img.freepik.com/free-vector/pitch-meeting-concept-illustration_114360-6300.jpg?uid=R155181765&ga=GA1.1.1657592745.1694377776&semt=ais_hybrid&w=740",
    Construction:
      "https://images.unsplash.com/photo-1423784346385-c1d4fabf6e91?fit=crop&w=700&q=80",
    OilGas:
      "https://images.unsplash.com/photo-1547844356-02e078822530?fit=crop&w=700&q=80",
    IT: "https://images.unsplash.com/photo-1581090123510-410c59828d15?fit=crop&w=700&q=80",
    Telecom:
      "https://images.unsplash.com/photo-1522851508210-9114d483b8b9?fit=crop&w=700&q=80",
    Infrastructure:
      "https://images.unsplash.com/photo-1550953683-99d8d697b0a7?fit=crop&w=700&q=80",
    Healthcare:
      "https://images.unsplash.com/photo-1538356247963-c35dd0c97800?fit=crop&w=700&q=80",
    Logistics:
      "https://images.unsplash.com/photo-1582213782179-e0d5a002f260?fit=crop&w=700&q=80",
    Retail:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?fit=crop&w=700&q=80",
    Hospitality:
      "https://images.unsplash.com/photo-1555598688-e2ce3f4e24ed?fit=crop&w=700&q=80",
    Mining:
      "https://images.unsplash.com/photo-1549553757-3a137e06a86c?fit=crop&w=700&q=80",
  };

  // 2. State for dynamic image display
  const [currentImage, setCurrentImage] = useState(imageMap.default);

  // 3. Hover Handler for dynamic image
  const changeImage = (industryKey) => {
    setCurrentImage(imageMap[industryKey] || imageMap.default);
  };

  return (
    <div className="bg-white text-black font-sans">
      {/* Main Content Start */}

      <h2 className="text-5xl md:text-8xl mb-8 text-center pt-45 font-black">
        <span style={{ color: DAN_GREEN }}>Area of </span>{" "}
        <span className="text-black">Specialization</span>
      </h2>

      <div id="industries" className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-lg">
          {/* Left Image Div */}
          <div className="bg-white p-6 rounded-lg flex items-center justify-center ">
            <img
              src="https://neonir.com/wp-content/uploads/2023/07/box-banner-2-1024x793.jpg"
              alt="Industry"
              className="rounded-lg w-full max-h-[400px] object-cover transition-opacity duration-300"
            />
          </div>

          {/* Right Text Div */}
          <div className="bg-white p-6 rounded-lg">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: DAN_GREEN }}
            >
              Industries We Serve
            </h2>
            <ul className="space-y-3">
              <li
                className="hover:text-current cursor-pointer transition-colors duration-200"
                style={{ "--tw-text-current": DAN_GREEN }}
                onMouseEnter={() => changeImage("Construction")}
              >
                Construction & Civil Engineering
              </li>
              <li
                className="hover:text-current cursor-pointer transition-colors duration-200"
                style={{ "--tw-text-current": DAN_GREEN }}
                onMouseEnter={() => changeImage("OilGas")}
              >
                Oil & Gas, Petrochemicals & Refineries
              </li>
              <li
                className="hover:text-current cursor-pointer transition-colors duration-200"
                style={{ "--tw-text-current": DAN_GREEN }}
                onMouseEnter={() => changeImage("IT")}
              >
                IT (Production and Services) & Software Development
              </li>
              <li
                className="hover:text-current cursor-pointer transition-colors duration-200"
                style={{ "--tw-text-current": DAN_GREEN }}
                onMouseEnter={() => changeImage("Telecom")}
              >
                Telecommunications & Internet Services
              </li>
              <li
                className="hover:text-current cursor-pointer transition-colors duration-200"
                style={{ "--tw-text-current": DAN_GREEN }}
                onMouseEnter={() => changeImage("Infrastructure")}
              >
                EPC, MEP & Infrastructure
              </li>
              <li
                className="hover:text-current cursor-pointer transition-colors duration-200"
                style={{ "--tw-text-current": DAN_GREEN }}
                onMouseEnter={() => changeImage("Healthcare")}
              >
                Healthcare, Pharma & Life Sciences
              </li>
              <li
                className="hover:text-current cursor-pointer transition-colors duration-200"
                style={{ "--tw-text-current": DAN_GREEN }}
                onMouseEnter={() => changeImage("Logistics")}
              >
                Logistics & Transportation
              </li>
              <li
                className="hover:text-current cursor-pointer transition-colors duration-200"
                style={{ "--tw-text-current": DAN_GREEN }}
                onMouseEnter={() => changeImage("Retail")}
              >
                Retail, E-commerce & Manufacturing
              </li>
              <li
                className="hover:text-current cursor-pointer transition-colors duration-200"
                style={{ "--tw-text-current": DAN_GREEN }}
                onMouseEnter={() => changeImage("Hospitality")}
              >
                F&B, Hospitality & Facility Management
              </li>
              <li
                className="hover:text-current cursor-pointer transition-colors duration-200"
                style={{ "--tw-text-current": DAN_GREEN }}
                onMouseEnter={() => changeImage("Mining")}
              >
                Mining, Metals & Heavy Industries
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header (Top of the main content) */}
      <header className="text-center py-14 px-4 animate-fade-up">
        <h1
          className="text-4xl font-extrabold mb-2"
          style={{ color: DAN_GREEN }}
        >
          Technology and Specialized Staffing Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Precision Workforce Solutions for Niche Industries Across GCC & India
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* 1. IT & Technology Staffing */}
        <section className="animate-fade-up">
          <h2
            className="text-3xl font-semibold mb-8"
             id="it-staffing"
            style={{ color: DAN_GREEN }}
          >
            1. IT & Technology Staffing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1662638600476-d563fffbb072?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D="
                alt="AI/ML & Cybersecurity Experts"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">
                  AI/ML & Cybersecurity Experts
                </h3>
                <p className="text-sm text-gray-600">
                  Arabic-speaking preferred
                </p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1714974528683-8940bd8311aa?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="SAP/ERP Consultants"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">SAP/ERP Consultants</h3>
                <p className="text-sm text-gray-600">
                  With GCC implementation experience
                </p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://www.advizzo.com/wp-content/uploads/2022/01/Saudi-Arabia-Neom-1024x585.jpg"
                alt="NEOM Smart City Specialists"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">
                  NEOM Smart City Specialists
                </h3>
                <p className="text-sm text-gray-600">
                  IoT & Automation Engineers
                </p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEZ1bGwlMjBTdGFjayUyMERldmVsb3BlcnN8ZW58MHx8MHx8fDA%3D"
                alt="Full-Stack Developers"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">Full-Stack Developers</h3>
                <p className="text-sm text-gray-600">React, Node, Python</p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://www.algotive.ai/hubfs/mainbanner-4.jpg"
                alt="Cloud Architects"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">Cloud Architects</h3>
                <p className="text-sm text-gray-600">AWS/Azure certified</p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://www.datatobiz.com/wp-content/uploads/2021/04/c-18-1.png"
                alt="Data Science Teams"
                className="w-full h-48 object-fill rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">Data Science Teams</h3>
                <p className="text-sm text-gray-600">For MNC R&D centers</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 mt-8 p-5 rounded-md">
            <h4 className="font-semibold mb-2" style={{ color: DAN_GREEN }}>
              Our Edge
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>
                ✔ 5-stage technical vetting (coding tests + system design
                interviews)
              </li>
              <li>✔ 48-hour placement guarantee for contract roles</li>
            </ul>
          </div>
        </section>

        {/* 2. EPC & Oil/Gas Staffing */}
        <section className="animate-fade-up">
          <h2
            className="text-3xl font-semibold mb-8"
            id="#oil-gas"
            style={{ color: DAN_GREEN }}
          >
            2. EPC & Oil/Gas Staffing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1749073668528-38ab64575f5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE9GRlNIT1JFfGVufDB8fDB8fHww"
                alt="Pipeline Engineers"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">Pipeline Engineers</h3>
                <p className="text-sm text-gray-600">
                  ASME B31.3, Aramco approval
                </p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://safesitehq.com/wp-content/uploads/2021/03/Safety-director-providing-health-and-safety-orientation-to-a-team-scaled-1.jpeg"
                alt="HSE Managers"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">HSE Managers</h3>
                <p className="text-sm text-gray-600">NEBOSH IGC, OSHA 30</p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1682144333631-eac578433ea1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2lsJTIwYW5kJTIwZ2FzfGVufDB8fDB8fHww"
                alt="QA/QC Inspectors"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">QA/QC Inspectors</h3>
                <p className="text-sm text-gray-600">
                  CSWIP 3.1, ASNT Level II
                </p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1690508313456-bf8c851e8319?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8T0ZGU0hPUkV8ZW58MHx8MHx8fDA%3D"
                alt="Turnaround Specialists"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">Turnaround Specialists</h3>
                <p className="text-sm text-gray-600">
                  Refinery Shutdown Experts
                </p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldHJvbGV1bXxlbnwwfHwwfHx8MA%3D%3D"
                alt="LNG Terminal Engineers"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">LNG Terminal Engineers</h3>
                <p className="text-sm text-gray-600">
                  Intl. project experience
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 mt-8 p-5 rounded-md">
            <h4 className="font-semibold mb-2" style={{ color: DAN_GREEN }}>
              Operational Support
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>✔ Camp management & WPS payroll for expat crews</li>
              <li>✔ GAMCA medical pre-screening to avoid visa rejections</li>
            </ul>
          </div>
        </section>

        {/* 3. Healthcare Staffing */}
        <section className="animate-fade-up">
          <h2
            className="text-3xl font-semibold mb-8"
            style={{ color: DAN_GREEN }}
          >
            3. Healthcare Staffing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1661699717204-82c08926c77a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fExpY2Vuc2VkJTIwRG9jdG9yc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Licensed Doctors"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">Licensed Doctors</h3>
                <p className="text-sm text-gray-600">
                  DHA, HAAD, MOH certified
                </p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://media.istockphoto.com/id/1419093013/photo/young-nurse-consoling-little-girl-patient-lying-on-bed-in-hospital-ward.webp?a=1&b=1&s=612x612&w=0&k=20&c=aiR6UWC33pMCrBOZQUNoi5NlmEDN6yK8XdG3uYgUlIo="
                alt="BLS-Certified Nurses"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">BLS-Certified Nurses</h3>
                <p className="text-sm text-gray-600">
                  Prometric passed, GCC-ready
                </p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1681995761699-b0852778b9f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fFBoYXJtYWNpc3RzfGVufDB8fDB8fHww"
                alt="Pharmacists"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">Pharmacists</h3>
                <p className="text-sm text-gray-600">
                  Saudi Council registered
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 mt-8 p-5 rounded-md">
            <h4 className="font-semibold mb-2" style={{ color: DAN_GREEN }}>
              Healthcare Compliance Support
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>✔ License processing: Dataflow, Good Standing</li>
              <li>✔ Arabic medical terminology training</li>
            </ul>
          </div>
        </section>

        {/* 4. Finance & Banking */}
        <section className="animate-fade-up">
          <h2
            className="text-3xl font-semibold mb-8"
            style={{ color: DAN_GREEN }}
          >
            4. Finance & Banking
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg"
                alt="Risk Analysts"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">Risk Analysts</h3>
                <p className="text-sm text-gray-600">
                  Basel III, Credit Risk Modeling
                </p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://media.istockphoto.com/id/1131629281/photo/hand-touching-button-with-aml-anti-money-laundering-sign.webp?a=1&b=1&s=612x612&w=0&k=20&c=fPTbOvdRGBlXzfpq4-0GWwbgc7d8tqTaS4TkyjirSFk="
                alt="AML/KYC Specialists"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">AML/KYC Specialists</h3>
                <p className="text-sm text-gray-600">
                  GCC regulatory experience
                </p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1661313642084-90e3df2e4c5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Investment Analysts"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">Investment Analysts</h3>
                <p className="text-sm text-gray-600">
                  Equity & Fixed Income Focus
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 mt-8 p-5 rounded-md">
            <h4 className="font-semibold mb-2" style={{ color: DAN_GREEN }}>
              What We Offer
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>✔ Pre-screened with financial acumen tests</li>
              <li>✔ Access to GCC-based certified talent pool</li>
            </ul>
          </div>
        </section>

        {/* 5. Civil Infrastructure */}
        <section className="animate-fade-up">
          <h2
            className="text-3xl font-semibold mb-8"
            id="construction"
            style={{ color: DAN_GREEN }}
          >
            5. Civil Infrastructure
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.pscxvjPmmukEJcicZEnDrwHaE8?pid=Api&P=0&h=180"
                alt="BIM Engineers"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">BIM Engineers</h3>
                <p className="text-sm text-gray-600">
                  Revit, Navisworks, Civil 3D
                </p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1661499575649-e9d534f64ec9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9uJTIwcHJvZHVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D"
                alt="Project Managers"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">Project Managers</h3>
                <p className="text-sm text-gray-600">
                  PMP certified, GCC experience
                </p>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1517089152318-42ec560349c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWluaW5nfGVufDB8fDB8fHww"
                alt="Structural Engineers"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">Structural Engineers</h3>
                <p className="text-sm text-gray-600">
                  STAAD Pro, Etabs expertise
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 mt-8 p-5 rounded-md">
            <h4 className="font-semibold mb-2" style={{ color: DAN_GREEN }}>
              Project-Ready Deployment
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>✔ Manpower supply with mobilization support</li>
              <li>✔ Immediate availability for mega-projects</li>
            </ul>
          </div>
        </section>
      </main>
      {/* Main Content End */}
    </div>
  );
};

export default AreaofExpertise;
