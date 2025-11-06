import React from "react";

// --- Helper Components ---

// Helper components for the FORM
const FormInput = ({
  id,
  label,
  type = "text",
  placeholder,
  required = true,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
    />
  </div>
);

const FormSelect = ({ id, label, children, required = true }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={id}
      name={id}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
    >
      {children}
    </select>
  </div>
);

// Helper components for the TIMELINE
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const TimelineItem = ({ number, title, children }) => (
  <div className="flex relative">
    {/* Vertical line connecting the dots */}
    <div className="absolute left-6 top-0 h-full w-0.5 bg-white/20" aria-hidden="true"></div>
    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center text-white font-bold text-lg bg-white/10 mr-6 z-10">
      {number}
    </div>
    <div className="pb-8">
      <h3 className="font-bold text-xl text-white">{title}</h3>
      <div className="text-white/80 mt-2">{children}</div>
    </div>
  </div>
);

// --- New Terms and Conditions Screen ---

const TermsAndConditionsScreen = ({ onBack }) => (
  <div className="bg-white min-h-screen p-8 sm:p-12 md:p-16">
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-8 flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
      >
        {/* Back Arrow Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Back to Contact Form
      </button>

      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 border-b pb-2">
        Terms and Conditions
      </h1>
      <p className="text-sm text-gray-500 mb-10">
        Last Updated: October 18, 2025
      </p>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-800">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the services provided by [Your Company Name], you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you disagree with any part of the terms, then you may not access the Service.
        </p>

        <h2 className="text-2xl font-bold text-gray-800">2. Service Usage</h2>
        <p>
          The service is provided on an "as is" and "as available" basis. [Your Company Name] makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content or materials included therein.
        </p>
        <p>
          Your use of the service is at your sole risk. You are responsible for any activity that occurs under your account.
        </p>

        <h2 className="text-2xl font-bold text-gray-800">3. Privacy Policy Reference</h2>
        <p>
          Your submission of personal information through the form is governed by our Privacy Policy, which is incorporated by reference into these Terms. By accepting these Terms, you acknowledge and consent to the collection and use of information as outlined in the Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold text-gray-800">4. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
      </div>
    </div>
  </div>
);

// --- Contact Form Screen (Original Component, renamed) ---

const ContactFormScreen = ({ onViewChange }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 pt-40" >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden">
        {/* Left Side: Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Get in touch with us!
          </h2>
          <p className="text-gray-600">
            Do you think we are perfect for your project?
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput id="firstName" label="First Name" placeholder="John" />
              <FormInput id="lastName" label="Last Name" placeholder="Doe" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput
                id="phone"
                label="Phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
              />
              <FormInput
                id="email"
                label="Email Address"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormSelect id="region" label="Select Region">
                <option>United States</option>
                <option>Canada</option>
                <option>Europe</option>
                <option>Asia</option>
              </FormSelect>
              <FormSelect id="category" label="Select Category">
                <option>Client Inquiry</option>
                <option>Job Seeker</option>
                <option>Partnership</option>
                <option>General</option>
              </FormSelect>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Please type your message here...
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                required
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label
                htmlFor="privacy"
                className="ml-2 block text-sm text-gray-900"
              >
                Please read and accept our{" "}
                {/* MODIFIED: Added onClick handler to change the view state */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onViewChange('terms');
                  }}
                  className="font-medium text-green-600 hover:underline cursor-pointer"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side: Information Panel */}
        <div className="w-full md:w-1/2 bg-[#46B724] text-white p-8  flex flex-col">
          <div className="flex-grow overflow-y-auto pr-4 -mr-4">
            <h2 className="text-3xl font-bold">What Happens Next?</h2>
            <p className="mt-4 text-white/90">
              Whether you're a client seeking talent or a job seeker exploring
              new opportunities, here’s what to expect after you fill out the
              form:
            </p>

            <div className="mt-10 relative">
              <div className="space-y-2">
                <TimelineItem number="01" title="Initial Contact">
                  <p>
                    Our team will get in touch with you to understand your needs
                    — whether it’s staffing support for your projects or
                    assistance in finding the right job opportunity.
                  </p>
                </TimelineItem>

                <TimelineItem number="02" title="Detailed Discussion">
                  <p className="font-semibold">For clients:</p>
                  <p>
                    Our HR experts will gather your complete hiring
                    requirements, timelines, and expectations.
                  </p>
                  <p className="font-semibold mt-2">For candidates:</p>
                  <p>
                    We’ll review your profile and career goals to match you with
                    the most suitable opportunities.
                  </p>
                </TimelineItem>

                <TimelineItem
                  number="03"
                  title="Proposal & Planning (For Clients)"
                >
                  <p>
                    Based on your requirements, we’ll provide a customized
                    proposal including scope of services, estimated costs, and
                    deployment timelines.
                  </p>
                </TimelineItem>

                <TimelineItem number="04" title="Job Matching (For Candidates)">
                  <p>
                    Once we identify a suitable role, we’ll guide you through
                    the screening, interview, and onboarding process.
                  </p>
                </TimelineItem>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="font-semibold">Contact at:</p>
              <div className="flex items-center mt-2">
                <MailIcon />
                <a
                  href="mailto:info@daninternational-sa.com"
                  className="hover:underline"
                >
                  info@daninternational-sa.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main Application Component (Handles Routing) ---

const App = () => {
  // State to track the current page view
  const [currentPage, setCurrentPage] = React.useState('contact');

  // Function to switch the view
  const handleViewChange = (view) => {
    setCurrentPage(view);
  };

  // Render the appropriate screen based on state
  if (currentPage === 'terms') {
    return <TermsAndConditionsScreen onBack={() => handleViewChange('contact')} />;
  }

  // Default view is the Contact Form
  return <ContactFormScreen onViewChange={handleViewChange} />;
};

export default App;
