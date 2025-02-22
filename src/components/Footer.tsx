import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are a premier online shopping destination offering the latest
              trends in fashion, accessories, and lifestyle products. Our
              mission is to provide quality products at competitive prices.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-white transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter and get 10% off your first purchase.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-gray-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg text-white font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Your Shop Name. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {/* Visa Card Icon */}
              <svg
                className="h-6 w-auto text-gray-400"
                viewBox="0 0 38 24"
                fill="currentColor"
              >
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3zm-1 20c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h29c.6 0 1 .4 1 1v16z" />
                <path d="M12 8l-1.2 5.6L9.5 8H7l2.5 8h2l1.7-8H12zm4.5 0L14 16h1.8l2.5-8h-1.8zm6.5 5.6L21.7 8H20l-2.3 8h1.7l.3-1.1h2.3l.3 1.1h1.7L22.9 8h-1.7l1.8 5.6zM19.4 13l.7-2.4.7 2.4h-1.4zm8.6-2.3c0 2 4 2 4 3 0 .3-.3.5-.8.5-.8 0-1.8-.3-2.4-.8l-.4 1.5c.6.4 1.4.6 2.2.6 1.7 0 2.7-.8 2.7-2 0-2.1-4-2.1-4-3 0-.3.3-.5.7-.5.7 0 1.5.3 2.2.7l.4-1.4c-.7-.4-1.4-.6-2.2-.6-1.5 0-2.4.9-2.4 2z" />
              </svg>

              {/* Mastercard Icon */}
              <svg
                className="h-6 w-auto text-gray-400"
                viewBox="0 0 38 24"
                fill="currentColor"
              >
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3zm-1 20c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h29c.6 0 1 .4 1 1v16z" />
                <circle cx="15" cy="12" r="5" />
                <circle cx="23" cy="12" r="5" fillOpacity="0.8" />
              </svg>

              {/* PayPal Icon */}
              <svg
                className="h-6 w-auto text-gray-400"
                viewBox="0 0 38 24"
                fill="currentColor"
              >
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3zm-1 20c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h29c.6 0 1 .4 1 1v16z" />
                <path d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 14.2c0 .2.1.4.3.4h2.7c.2 0 .4-.1.4-.3l.3-1.7c0-.2.2-.4.4-.4h.9c2 0 3.5-.4 4.5-1.2 1.2-.9 1.6-2.1 1.4-3.7zm-2.1 2.3c-.5.4-1.2.6-2.2.6h-.4c-.2 0-.4.1-.4.3l-.3 1.7c0 .2-.2.3-.4.3H16c-.2 0-.3-.1-.3-.3l.8-5.2c0-.2.2-.3.4-.3h2.1c.9 0 1.6.2 1.9.5.3.4.4.9.2 1.7-.1.4-.3.7-.5 1z" />
              </svg>

              {/* Apple Pay Icon */}
              <svg
                className="h-6 w-auto text-gray-400"
                viewBox="0 0 38 24"
                fill="currentColor"
              >
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3zm-1 20c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h29c.6 0 1 .4 1 1v16z" />
                <path d="M20.2 11.1c-.1-.7.2-1.5.7-1.9.4-.3.9-.5 1.4-.5.1.7-.2 1.4-.6 1.9-.4.4-.9.6-1.5.5zm2.3.6c.8 0 1.5.4 2 .9-.2.2-1.1.6-1.1 1.9 0 1.5 1.3 2 1.3 2-.1.4-.2.8-.4 1.2-.2.5-.5.9-.9 1.2-.4.3-.9.3-1.4.3s-.8-.2-1.2-.3c-.4-.2-.8-.3-1.3-.3s-.9.2-1.3.3c-.4.2-.7.3-1.2.3-.5 0-1-.2-1.4-.6-.8-.8-1.4-2.1-1.4-3.3 0-1.9 1-3 1.9-3.6.5-.3 1.1-.5 1.7-.5.5 0 1.1.2 1.5.3.3.2.7.3 1.1.3.3 0 .7-.2 1.1-.3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
