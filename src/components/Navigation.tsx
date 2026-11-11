"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo } from "@/data/portfolio";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/works" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative z-30 w-full pt-8 pb-12">
      <nav className="flex items-center justify-between border-b border-base-400/40 pb-6">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 font-grunge text-24 sm:text-28 md:text-32 tracking-wider text-base-900 transition-colors hover:text-base-700"
        >
          <span>{personalInfo.name}</span>
          <span className="hidden sm:inline-block text-12 font-mono uppercase tracking-widest text-base-500 border border-base-400 px-2 py-0.5">
            Dev
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 md:gap-10">
          <ul className="flex items-center gap-5 md:gap-8 font-mono text-14 md:text-16 uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors underline-offset-8 hover:text-base-900 hover:underline ${
                      isActive
                        ? "text-base-900 underline font-semibold"
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
            className="hidden lg:inline-flex items-center gap-2 border border-base-900 bg-base-900 px-4 py-2 font-mono text-12 uppercase tracking-widest text-base-100 transition-all duration-300 hover:bg-transparent hover:text-base-900"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 border border-base-900 bg-base-900 px-3 py-1 font-mono text-11 uppercase tracking-widest text-base-100"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Hire
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-base-400/60 bg-base-200/50 text-base-900 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 border-b border-base-400/50 bg-base-100/95 backdrop-blur-md p-6 z-50 shadow-2xl space-y-6"
          >
            <ul className="flex flex-col gap-4 font-mono text-16 uppercase tracking-wider">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-1 transition-colors ${
                        isActive
                          ? "text-base-900 font-bold underline underline-offset-4"
                          : "text-base-600 hover:text-base-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-4 border-t border-base-400/30 flex items-center justify-between">
              <span className="font-mono text-12 text-base-500 uppercase tracking-widest">
                {personalInfo.availability}
              </span>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1 font-mono text-12 uppercase tracking-widest text-base-900 underline underline-offset-4 font-bold"
              >
                <span>Connect</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
