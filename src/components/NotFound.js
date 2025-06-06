import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-9xl font-bold text-teal-400 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-white mb-6">Page Not Found</h2>
        <p className="text-gray-300 text-lg mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Back to Home
          </Link>
          <div className="text-gray-400 text-sm">
            Need help?{' '}
            <a
              href="https://wa.me/9930365555"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 