"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  MessageCircle, 
  Video,
  User, 
  LogOut, 
  Menu, 
  X 
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const isHiddenPage =
    pathname?.startsWith("/adminDashboard") ||
    pathname === "/login" ||
    pathname === "/register" ||
    pathname?.startsWith("/doctorDashboard");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);

    const getUserData = async () => {
      try {
        const res = await fetch("/api/current-user");
        if (!res.ok) {
          setCurrentUser(null);
          return;
        }
        const data = await res.json();
        setCurrentUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setCurrentUser(null);
      }
    };

    getUserData();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await res.json();
      if (data.message === 'Logged out successfully') {
        window.location.href = '/';
      } else {
        console.error('Logout failed:', data.message);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  
  if (!mounted) return null;
  if (isHiddenPage) return null;

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-gradient-to-r from-[#3a5073] to-[#476184] backdrop-blur-sm shadow-md" 
          : "bg-gradient-to-r from-[#415A80] to-[#4A6A96]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center group">
              <svg 
                className="h-8 w-8 mr-2 transition-transform duration-300 group-hover:scale-110" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="8" fill="#A5D4DC"/>
                <path d="M12 20C12 16.13 15.13 13 19 13H29V27H19C15.13 27 12 23.87 12 20Z" fill="white"/>
                <path d="M24 17V23M21 20H27" stroke="#415A80" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-xl font-bold text-white drop-shadow-sm">SmiloClinic</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <NavLink href="/" text="Home" current={pathname === "/"} />
            <NavLink href="/about" text="About" current={pathname === "/about"} />
            <NavLink href="/articles" text="Articles" current={pathname === "/articles"} />
            <NavLink href="/contact" text="Contact" current={pathname === "/contact"} />
            <NavLink href="/doctors" text="Book" current={pathname === "/doctors"} />
            
            {/* Communication Links - Icons Only with bigger size */}
            <div className="flex items-center space-x-3 ml-2">
              <IconOnlyNavLink href="/chat" icon={<MessageCircle size={20} />} title="Chat" current={pathname === "/chat"} />
              <IconOnlyNavLink href="/video-call" icon={<Video size={20} />} title="Video Call" current={pathname === "/video-call"} />
            </div>
          </nav>

          {/* User Menu - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            {currentUser ? (
              <>
                <div className="flex items-center bg-white/10 rounded-full px-3 py-1.5">
                  <span className="text-sm font-medium text-white mr-2">
                    {currentUser.name || "User"}
                  </span>
                  <Link
                    href="/profile"
                    className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-[#415A80] hover:shadow-md transition-all duration-200 hover:scale-105"
                  >
                    <User size={16} />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="ml-2 inline-flex items-center px-3 py-1.5 rounded text-sm font-medium text-white hover:bg-white/20 transition-all duration-200 focus:ring-2 focus:ring-white/50 focus:outline-none"
                  >
                    <LogOut size={16} className="mr-1.5" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="px-4 py-1.5 rounded text-sm font-medium text-white hover:bg-white/10 transition-all duration-200 focus:ring-2 focus:ring-white/50 focus:outline-none"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-1.5 rounded text-sm font-medium text-[#415A80] bg-white hover:bg-[#E5E7E9] transition-all duration-200 shadow-sm hover:shadow focus:ring-2 focus:ring-white/50 focus:outline-none"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded p-2 text-white hover:bg-white/15 transition-all duration-200 focus:ring-2 focus:ring-white/50 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6 transition-transform duration-200" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 transition-transform duration-200 hover:rotate-3" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? "max-h-screen opacity-100" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="space-y-2 px-4 pb-4 pt-3 bg-white border-t border-[#D7E2E9] shadow-lg rounded-b-lg">
          <MobileNavLink href="/" text="Home" current={pathname === "/"} onClick={() => setMobileMenuOpen(false)} />
          <MobileNavLink href="/about" text="About" current={pathname === "/about"} onClick={() => setMobileMenuOpen(false)} />
          <MobileNavLink href="/articles" text="Articles" current={pathname === "/articles"} onClick={() => setMobileMenuOpen(false)} />
          <MobileNavLink href="/contact" text="Contact" current={pathname === "/contact"} onClick={() => setMobileMenuOpen(false)} />
          <MobileNavLink href="/doctors" text="Book" current={pathname === "/doctors"} onClick={() => setMobileMenuOpen(false)} />
          <MobileNavLink href="/patient/my-appointments" text="Appointments" current={pathname === "/patient/my-appointments"} onClick={() => setMobileMenuOpen(false)} />

          {/* Communication tools for mobile - Icons with small labels */}
          <div className="my-4 pt-3 border-t border-[#D7E2E9]">
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/chat"
                className="flex flex-col items-center justify-center p-3 rounded bg-[#E5E7E9] text-[#415A80] hover:bg-[#D7E2E9] transition-all duration-200 hover:shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle size={24} className="mb-1.5" />
                <span className="text-sm font-medium">Chat</span>
              </Link>
              <Link
                href="/video-call"
                className="flex flex-col items-center justify-center p-3 rounded bg-[#E5E7E9] text-[#415A80] hover:bg-[#D7E2E9] transition-all duration-200 hover:shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Video size={24} className="mb-1.5" />
                <span className="text-sm font-medium">Video</span>
              </Link>
            </div>
          </div>

          {/* Mobile User Menu */}
          <div className="pt-4 pb-2 border-t border-[#D7E2E9]">
            {currentUser ? (
              <div className="space-y-3 px-3">
                <div className="flex items-center p-2 bg-[#F0F5F8] rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-[#A5D4DC] flex items-center justify-center text-[#415A80] shadow-sm">
                    <User size={18} />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{currentUser.name || "User"}</div>
                    <Link
                      href="/profile"
                      className="text-sm text-[#415A80] hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded text-sm font-medium text-white bg-gradient-to-r from-[#415A80] to-[#4A6A96] hover:from-[#3a5073] hover:to-[#415A80] transition-all duration-200 shadow-sm"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 px-3">
                <Link
                  href="/login"
                  className="flex items-center justify-center px-4 py-3 rounded text-sm font-medium text-[#415A80] border border-[#415A80] hover:bg-[#E5E7E9] transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex items-center justify-center px-4 py-3 rounded text-sm font-medium text-white bg-gradient-to-r from-[#415A80] to-[#4A6A96] hover:from-[#3a5073] hover:to-[#415A80] transition-all duration-200 shadow-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

// Desktop NavLink component - Larger font size
function NavLink({ href, text, current }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-4 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
        current
          ? "bg-white text-[#415A80] shadow-sm"
          : "text-white hover:bg-white/15 hover:scale-105"
      } focus:ring-2 focus:ring-white/50 focus:outline-none`}
    >
      {text}
    </Link>
  );
}

// Icon-only NavLink for communication tools with hover effect
function IconOnlyNavLink({ href, icon, title, current }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center p-2 rounded-full transition-all duration-200 ${
        current
          ? "bg-white text-[#415A80] shadow-sm"
          : "text-white hover:bg-white/15 hover:scale-110"
      } focus:ring-2 focus:ring-white/50 focus:outline-none`}
      title={title}
    >
      {icon}
    </Link>
  );
}

// Mobile NavLink component - Larger font
function MobileNavLink({ href, text, current, onClick }) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between px-4 py-3 rounded text-base font-medium transition-all duration-200 ${
        current
          ? "bg-[#A5D4DC] text-[#415A80] shadow-sm"
          : "text-[#415A80] hover:bg-[#E5E7E9]"
      }`}
      onClick={onClick}
    >
      <span>{text}</span>
      {current && (
        <span className="w-2 h-2 rounded-full bg-[#415A80]"></span>
      )}
    </Link>
  );
}