"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo } from "@/data/portfolio";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock background scroll and handle Escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "WORKS", href: "/works" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="relative z-30 w-full pt-6 pb-8 md:pt-8 md:pb-12">
      <nav className="flex items-center justify-between border-b border-base-400/40 pb-5">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-grunge text-26 sm:text-30 md:text-34 tracking-wider text-base-900 transition-colors hover:text-base-700 whitespace-nowrap shrink-0"
        >
          <span>{personalInfo.name}</span>
          <span className="text-11 font-mono uppercase tracking-widest text-base-500 border border-base-400/60 px-1.5 py-0.5 bg-base-200/50">
            Dev
          </span>
        </Link>

        {/* Desktop Links (Hidden on screens below lg) */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 font-mono text-15 uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors underline-offset-8 hover:text-base-900 hover:underline ${
                      isActive
                        ? "text-base-900 underline font-bold"
                        : "text-base-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Quick CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-base-900 bg-base-900 px-5 py-2 font-mono text-12 uppercase tracking-widest text-base-100 transition-all duration-300 hover:bg-transparent hover:text-base-900"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Trigger Button (Circular with two vertical bars) */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-white bg-black/80 hover:bg-white hover:text-black transition-all active:scale-95 cursor-pointer shadow-xl"
            aria-label="Open navigation menu"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-[2.5px] h-4 bg-current rounded-full"></span>
              <span className="w-[2.5px] h-4 bg-current rounded-full"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Full-Screen Portal Overlay (Rendered directly in document.body to avoid stacking context traps) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 z-[999999] bg-black text-white flex flex-col justify-between p-6 sm:p-8"
                style={{ backgroundColor: "#000000" }}
                onClick={(e) => {
                  // Clicking outside the links closes the menu
                  if (e.target === e.currentTarget) {
                    setMobileMenuOpen(false);
                  }
                }}
              >
                {/* Top Right Close Button */}
                <div className="w-full flex justify-end">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setMobileMenuOpen(false);
                    }}
                    className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white bg-black hover:bg-white hover:text-black transition-all active:scale-90 cursor-pointer shadow-2xl z-[1000000]"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5 stroke-[2.5]" />
                  </button>
                </div>

                {/* Centered Navigation Links */}
                <div
                  className="flex-1 flex flex-col items-center justify-center gap-8 sm:gap-10 -mt-10"
                  onClick={(e) => {
                    // Clicking in empty areas between links also closes
                    if (e.target === e.currentTarget) {
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`font-grunge text-36 sm:text-44 tracking-wider uppercase underline underline-offset-8 decoration-2 transition-all cursor-pointer ${
                          isActive
                            ? "text-white decoration-white opacity-100 font-bold"
                            : "text-white decoration-white opacity-90 hover:opacity-100 hover:tracking-widest"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>

                {/* Empty bottom spacer */}
                <div className="h-10 pointer-events-none"></div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
