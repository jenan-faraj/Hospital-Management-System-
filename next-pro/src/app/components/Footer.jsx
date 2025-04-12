"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Hide footer on the same pages where navbar is hidden
  const pathname = window.location.pathname;
  const isHiddenPage =
    pathname?.startsWith("/adminDashboard") ||
    pathname === "/login" ||
    pathname === "/register" ||
    pathname?.startsWith("/doctorDashboard");

  if (isHiddenPage) {
    return null;
  }

  return (
    <footer className="bg-[#415A80] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            {/* Logo */}
            <div className="flex shrink-0 my-2 items-center">
              <Link href="/" className="flex items-center group">
                <svg
                  className="h-7 w-7 mr-1.5 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8" fill="#A5D4DC" />
                  <path
                    d="M12 20C12 16.13 15.13 13 19 13H29V27H19C15.13 27 12 23.87 12 20Z"
                    fill="white"
                  />
                  <path
                    d="M24 17V23M21 20H27"
                    stroke="#415A80"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-lg font-bold text-white drop-shadow-sm">
                  SmiloClinic
                </span>
              </Link>
            </div>
            <p className="text-sm mb-4">
              Providing quality healthcare services with a smile since 2020.
              Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#A5D4DC] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#A5D4DC] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#A5D4DC] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#A5D4DC] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-[#A5D4DC] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-[#A5D4DC] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-sm hover:text-[#A5D4DC] transition-colors"
                >
                  Health Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-[#A5D4DC] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/patient/book"
                  className="text-sm hover:text-[#A5D4DC] transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/general"
                  className="text-sm hover:text-[#A5D4DC] transition-colors"
                >
                  General Medicine
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dental"
                  className="text-sm hover:text-[#A5D4DC] transition-colors"
                >
                  Dental Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pediatric"
                  className="text-sm hover:text-[#A5D4DC] transition-colors"
                >
                  Pediatric Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cardiology"
                  className="text-sm hover:text-[#A5D4DC] transition-colors"
                >
                  Cardiology
                </Link>
              </li>
              <li>
                <Link
                  href="/chat"
                  className="text-sm hover:text-[#A5D4DC] transition-colors"
                >
                  Online Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">
                  123 Healthcare Blvd, Medical City
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-sm">info@smiloclinic.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Opening Hours</h4>
              <p className="text-sm">Mon-Fri: 8:00 AM - 8:00 PM</p>
              <p className="text-sm">Sat-Sun: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and additional links */}
        <div className="border-t border-[#6478A3] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SmiloClinic. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm hover:text-[#A5D4DC] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm hover:text-[#A5D4DC] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm hover:text-[#A5D4DC] transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
