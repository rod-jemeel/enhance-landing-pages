"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Shield,
  Lock,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="lg:col-span-1">
            <Image
              src="/images/enhancemd-logo.webp"
              alt="Enhance.MD"
              width={120}
              height={32}
              className="mb-4 brightness-0 invert"
            />
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3" />
                <a
                  href="tel:1-888-299-5088"
                  className="hover:text-white transition-colors"
                >
                  1-888-299-5088
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3" />
                <a
                  href="mailto:support@enhance.md"
                  className="hover:text-white transition-colors text-xs"
                >
                  support@enhance.md
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Quick Links</h4>
            <ul className="space-y-1.5 text-gray-400 text-xs">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Medication & Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Legal</h4>
            <ul className="space-y-1.5 text-gray-400 text-xs">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  HIPAA Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Telehealth Consent
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Stay Connected</h4>
            <div className="flex space-x-2 mb-4">
              <a
                href="#"
                className="p-1.5 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-3 h-3" />
              </a>
              <a
                href="#"
                className="p-1.5 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-3 h-3" />
              </a>
              <a
                href="#"
                className="p-1.5 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-3 h-3" />
              </a>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                <span>HIPAA</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>Secure</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="text-center text-gray-400 text-xs mb-3">
            <p>&copy;2025 Enhance MD. All Rights reserved.</p>
          </div>

          <div className="text-gray-500 text-xs space-y-1 max-w-3xl mx-auto text-center">
            <p className="leading-relaxed">
              Prescription products require an online consultation with a licensed healthcare provider.
              Results may vary. Not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
