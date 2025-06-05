import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Welcome to NextGen Infratech Solutions LLP. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our website and services.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company details, and other contact details provided during inquiries or bookings.</li>
                <li><strong>Payment Information:</strong> Billing details for transactions related to our coworking services.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, device details, and pages visited.</li>
                <li><strong>Other Information:</strong> Details shared voluntarily, such as feedback, surveys, or inquiries.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information collected to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide and improve our coworking space services.</li>
                <li>Respond to inquiries and communicate with you effectively.</li>
                <li>Process bookings, payments, and manage accounts.</li>
                <li>Send updates, promotional materials, and offers related to our services.</li>
                <li>Enhance user experience on our website through analytics and insights.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Sharing Your Information</h2>
              <p className="text-gray-600 mb-4">We respect your privacy and do not sell, rent, or trade your personal information. However, we may share your information with trusted third parties for purposes such as:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Payment processing.</li>
                <li>Website hosting and analytics.</li>
                <li>Legal compliance, when required by law.</li>
                <li>Service partners assisting in coworking operations.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device to help us analyze website traffic and understand user preferences.</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You can manage or disable cookies through your browser settings.</li>
                <li>By using our website, you consent to the use of cookies as described in this policy.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600">
                We implement robust security measures to protect your personal data from unauthorized access, disclosure, or alteration. While we strive to ensure the safety of your information, no system is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Links</h2>
              <p className="text-gray-600">
                Our website may contain links to external websites or services. We are not responsible for the privacy practices or content of these third-party sites. Please review their privacy policies before sharing any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access, update, or delete your personal data.</li>
                <li>Opt-out of receiving promotional communications.</li>
                <li>Withdraw consent for specific data processing activities.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:info@nextgeninfratech.in" className="text-[#28aa4a] hover:text-[#21b858]">
                  info@nextgeninfratech.in
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. Any changes will be reflected on this page with the updated effective date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-600">
                NextGen Infratech Solutions LLP<br />
                Nextgen House Building No. 306,<br />
                Vishesh Reality Project LLP,<br />
                Mahape Road, opp. Ramada Hotel,<br />
                Millenium Business Park,<br />
                Navi Mumbai, Maharashtra 400710
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#28aa4a] hover:bg-[#21b858] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 