import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import logoImage from "../../assets/sections/footer/Logo.png";

export function Footer() {
  return (
    <footer className="py-16 px-4 md:px-6 lg:px-8 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-3xl font-bold mb-4">
              <img src={logoImage} alt="logo" className="h-16" loading="lazy" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">What's Project Glow</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact us</h3>
            <p className="text-gray-600">hello@projectglowskin.com</p>
            <div className="mt-4">
              <h3 className="font-semibold">For Business</h3>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-8 text-xl">
              Fascinated how to glow with your skin?
            </h3>
            <div className="relative mb-8 flex items-center">
              <div className="w-full relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-full text-gray-500 placeholder:text-gray-400 outline-none"
                />
                <div className="absolute right-1">
                  <button className="px-4 py-1 bg-lime-200 rounded-full text-gray-700 font-medium hover:bg-lime-300 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <button className="w-full px-6 py-5 bg-lime-200 rounded-full text-gray-700 text-lg font-medium hover:bg-lime-300 transition-colors">
                Try Project Glow Now
              </button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#privacy" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-600 hover:text-gray-900">
                Terms & conditions
              </a>
              <a href="#support" className="text-gray-600 hover:text-gray-900">
                Support
              </a>
            </div>
            <div className="text-gray-600 mb-4 md:mb-0">
              © 2025 Project Glow. All rights reserved.
            </div>
            <div className="flex gap-6 justify-center md:justify-end">
              <a
                href="#instagram"
                className="text-gray-600 hover:text-gray-900"
              >
                <Instagram size={20} />
              </a>
              <a href="#threads" className="text-gray-600 hover:text-gray-900">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2c-2.8 0-5 2.2-5 5v3c0 2.8 2.2 5 5 5s5-2.2 5-5V7c0-2.8-2.2-5-5-5Z" />
                  <path d="M12 15v7" />
                  <path d="M8 22h8" />
                </svg>
              </a>
              <a href="#facebook" className="text-gray-600 hover:text-gray-900">
                <Facebook size={20} />
              </a>
              <a href="#twitter" className="text-gray-600 hover:text-gray-900">
                <Twitter size={20} />
              </a>
              <a href="#linkedin" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
