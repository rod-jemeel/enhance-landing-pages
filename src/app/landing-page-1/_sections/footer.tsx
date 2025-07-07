"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Shield,
  Lock,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-5vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);

  return (
    <footer
      ref={container}
      className="relative bg-[#1A1E29] text-white pt-24 pb-16 px-6 overflow-hidden border-t border-[#F0E68C]/20"
    >
      <motion.div style={{ y, opacity }} className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Image
              src="/images/enhancemd-logo.webp"
              alt="Enhance.MD"
              width={150}
              height={40}
              className="mb-6 brightness-0 invert"
            />
            <div className="space-y-3 text-[#E0E0E0]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:1-888-299-5088"
                  className="hover:text-white transition-colors"
                >
                  1-888-299-5088
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:support@enhance.md"
                  className="hover:text-white transition-colors"
                >
                  support@enhance.md
                </a>
              </div>
              <div className="space-y-1 text-sm">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Monday - Friday: 8AM - 8PM EDT</span>
                </p>
                <p className="ml-6">Saturday - Sunday: 9AM - 5PM EDT</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#E0E0E0]">
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
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-[#E0E0E0]">
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
                  Notice to Consumers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Florida Patients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <div className="flex space-x-3 mb-6">
              <a
                href="#"
                className="p-2 rounded-full transition-all hover:scale-110"
                style={{
                  background:
                    "linear-gradient(to bottom right, #F0E68C, #D4AF37, #FFD700, #D4AF37)",
                }}
              >
                <Facebook className="w-5 h-5 text-[#1A1E29]" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full transition-all hover:scale-110"
                style={{
                  background:
                    "linear-gradient(to bottom right, #F0E68C, #D4AF37, #FFD700, #D4AF37)",
                }}
              >
                <Twitter className="w-5 h-5 text-[#1A1E29]" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full transition-all hover:scale-110"
                style={{
                  background:
                    "linear-gradient(to bottom right, #F0E68C, #D4AF37, #FFD700, #D4AF37)",
                }}
              >
                <Youtube className="w-5 h-5 text-[#1A1E29]" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full transition-all hover:scale-110"
                style={{
                  background:
                    "linear-gradient(to bottom right, #F0E68C, #D4AF37, #FFD700, #D4AF37)",
                }}
              >
                <Instagram className="w-5 h-5 text-[#1A1E29]" />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[#E0E0E0]">
                <Shield className="w-5 h-5" />
                <span className="text-sm">HIPAA</span>
              </div>
              <div className="flex items-center gap-2 text-[#E0E0E0]">
                <Lock className="w-5 h-5" />
                <span className="text-sm">SSL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-[#E0E0E0] text-sm mb-4">
            <p>&copy;2025 Enhance MD. All Rights reserved.</p>
          </div>

          <div className="text-[#E0E0E0] text-xs space-y-2 max-w-4xl mx-auto">
            <p className="text-center">
              285 N. El Camino Real, STE 211, Encinitas, CA 92024 | 13280
              Evening Creek Drive South, STE 225, San Diego, CA 92128
            </p>
            <p className="leading-relaxed">
              Products not intended to diagnose, treat, cure, or prevent any
              disease. Prescription products require an online consultation with
              a licensed healthcare provider who will determine if the
              medication is appropriate.
            </p>
            <p className="leading-relaxed">
              Enhance.MD LLC is a patient management platform that provides
              administrative and operational support to physicians and
              practitioners employed by Enhance Wellness PC and iThriveMD PC,
              who deliver care through a telehealth platform. Enhance.MD LLC
              does not provide medical or pharmacy services, employ healthcare
              providers, or influence clinical decision-making.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
