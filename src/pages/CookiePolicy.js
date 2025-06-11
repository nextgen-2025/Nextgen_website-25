import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-10 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 mb-8 text-center">
              This Cookie Policy explains how NextGen Infratech Solutions LLP uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <div className="space-y-10">
              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">1. What are Cookies?</h2>
                <p className="text-gray-300">
                  Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">2. Types of Cookies We Use</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-teal-400 mb-2">Essential Cookies</h3>
                    <p className="text-gray-300">
                      These cookies are strictly necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-400 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-300">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve our website's performance and user experience.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-400 mb-2">Functionality Cookies</h3>
                    <p className="text-gray-300">
                      These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">3. How We Use Cookies</h2>
                <p className="text-gray-300 mb-4">We use cookies for the following purposes:</p>
                <ul className="list-disc text-start text-gray-300 space-y-2">
                  <li>To provide you with a better user experience</li>
                  <li>To analyze how our website is used</li>
                  <li>To remember your preferences and settings</li>
                  <li>To improve our website's performance and security</li>
                  <li>To enable certain features and functionality</li>
                </ul>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-300">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
                </p>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">5. Managing Cookies</h2>
                <p className="text-gray-300 mb-4">You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our website and some services and functionalities may not work.</p>
                <p className="text-gray-300">
                  Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit{' '}
                  <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors duration-300">
                    www.aboutcookies.org
                  </a>.
                </p>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">6. Changes to This Policy</h2>
                <p className="text-gray-300">
                  We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">7. Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about our use of cookies or other technologies, please contact us at{' '}
                  <a href="mailto:info@nextgeninfratech.in" className="text-teal-400 hover:text-teal-300 transition-colors duration-300">
                    info@nextgeninfratech.in
                  </a>
                </p>
              </section>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-teal-500 hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 