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

  // Completely lock all scrolling (desktop & mobile touch) when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      const preventTouch = (e: TouchEvent) => {
        if (e.target instanceof Element && e.target.closest("a, button")) {
          return;
        }
        e.preventDefault();
      };

      document.addEventListener("touchmove", preventTouch, { passive: false });

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        document.body.style.touchAction = "";
        document.removeEventListener("touchmove", preventTouch);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "WORKS", href: "/works" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#121212]/90 backdrop-blur-md pt-4 pb-4 md:pt-5 md:pb-5 transition-all border-b border-base-400/40">
      <nav className="flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-grunge text-32 sm:text-36 md:text-42 lg:text-46 tracking-wider text-base-900 transition-colors hover:text-base-700 whitespace-nowrap shrink-0"
        >
          <span>{personalInfo.name}</span>
          <span className="text-11 sm:text-12 font-mono uppercase tracking-widest text-base-500 border border-base-400/60 px-2 py-0.5 bg-base-200/50">
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

        {/* Mobile Menu Trigger Button */}
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

      {/* 100% Fixed Non-Scrollable Full-Screen Mobile Menu Overlay */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 w-screen h-screen h-[100dvh] z-[999999] bg-black text-white flex flex-col items-center justify-center overflow-hidden overscroll-none touch-none select-none"
                style={{ backgroundColor: "#000000" }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setMobileMenuOpen(false);
                  }
                }}
              >
                {/* Fixed Top Right Close Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setMobileMenuOpen(false);
                  }}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white bg-black hover:bg-white hover:text-black transition-all active:scale-90 cursor-pointer shadow-2xl z-[1000000]"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 stroke-[2.5]" />
                </button>

                {/* Centered Navigation Links - Exactly in viewport center */}
                <div className="flex flex-col items-center justify-center gap-7 sm:gap-9">
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
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
