import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-10 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 mb-8 text-center">
              Welcome to NextGen Infratech Solutions LLP. By accessing and using our website and services, you agree to comply with and be bound by these Terms of Service. Please read these terms carefully before using our services.
            </p>

            <div className="space-y-10">
              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300">
                  By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">2. Use of Services</h2>
                <p className="text-gray-300 mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not:</p>
                <ul className="list-disc text-start text-gray-300 space-y-2">
                  <li>Use our services in any way that violates any applicable laws or regulations.</li>
                  <li>Engage in any activity that interferes with or disrupts our services.</li>
                  <li>Attempt to gain unauthorized access to any part of our services.</li>
                  <li>Use our services for any fraudulent or harmful purposes.</li>
                </ul>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">3. Intellectual Property</h2>
                <p className="text-gray-300">
                  All content, features, and functionality of our website and services, including but not limited to text, graphics, logos, images, and software, are the exclusive property of NextGen Infratech Solutions LLP and are protected by intellectual property laws.
                </p>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">4. User Accounts</h2>
                <p className="text-gray-300 mb-4">When creating an account with us, you must provide accurate and complete information. You are responsible for:</p>
                <ul className="list-disc text-start text-gray-300 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials.</li>
                  <li>All activities that occur under your account.</li>
                  <li>Notifying us immediately of any unauthorized use of your account.</li>
                </ul>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">5. Payment Terms</h2>
                <p className="text-gray-300 mb-4">For services requiring payment:</p>
                <ul className="list-disc text-start text-gray-300 space-y-2">
                  <li>All fees are non-refundable unless otherwise stated.</li>
                  <li>We reserve the right to modify our pricing with notice.</li>
                  <li>Payment must be made in full before service delivery.</li>
                </ul>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-300">
                  To the maximum extent permitted by law, NextGen Infratech Solutions LLP shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
                </p>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">7. Termination</h2>
                <p className="text-gray-300">
                  We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for any reason, including if you violate these Terms of Service.
                </p>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-300">
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new Terms on this page. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
                </p>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">9. Governing Law</h2>
                <p className="text-gray-300">
                  These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">10. Contact Information</h2>
                <p className="text-gray-300">
                  For any questions about these Terms of Service, please contact us at{' '}
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

export default TermsOfService; 