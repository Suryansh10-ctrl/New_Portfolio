"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/", number: "01" },
    { label: "Works", href: "/works", number: "02" },
    { label: "About", href: "/about", number: "03" },
    { label: "Contact", href: "/contact", number: "04" },
  ];

  return (
    <header className="relative z-40 w-full pt-6 pb-8 md:pt-8 md:pb-12">
      <nav className="flex items-center justify-between border-b border-base-400/40 pb-5">
        {/* Brand / Logo - always on a single line */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-grunge text-26 sm:text-30 md:text-34 tracking-wider text-base-900 transition-colors hover:text-base-700 whitespace-nowrap shrink-0"
        >
          <span>{personalInfo.name}</span>
          <span className="text-11 font-mono uppercase tracking-widest text-base-500 border border-base-400/60 px-1.5 py-0.5 bg-base-200/50">
            Dev
          </span>
        </Link>

        {/* Desktop Links (Hidden below lg screens) */}
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

        {/* Mobile / Tablet Controls (Visible on all screens below lg) */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 border border-base-900 bg-base-900 px-3 py-1.5 font-mono text-11 uppercase tracking-widest text-base-100 hover:bg-transparent hover:text-base-900 transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Hire</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-1.5 border-2 border-base-900 bg-base-200/80 px-3 py-1.5 text-base-900 focus:outline-none transition-all active:scale-95 cursor-pointer shadow-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <>
                <X className="h-5 w-5" />
                <span className="font-mono text-11 uppercase font-bold tracking-wider">Close</span>
              </>
            ) : (
              <>
                <Menu className="h-5 w-5" />
                <span className="font-mono text-11 uppercase font-bold tracking-wider">Menu</span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Full-Screen Brutalist Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-[76px] z-50 bg-base-100/98 backdrop-blur-xl border-t border-base-400/40 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Top metadata */}
            <div className="flex items-center justify-between border-b border-base-400/30 pb-4 font-mono text-11 uppercase tracking-widest text-base-500">
              <span>NAV_SYSTEM // v1.0</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {personalInfo.availability}
              </span>
            </div>

            {/* Navigation Links with Raw Brutalist Styling */}
            <ul className="flex flex-col gap-4 my-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="border-b border-base-400/20 pb-3">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-baseline justify-between w-full"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-13 text-base-500 font-bold">
                          [{link.number}]
                        </span>
                        <span
                          className={`font-grunge text-44 sm:text-56 uppercase tracking-tight transition-colors ${
                            isActive
                              ? "text-base-900 underline underline-offset-8 decoration-2"
                              : "text-base-600 group-hover:text-base-900"
                          }`}
                        >
                          {link.label}
                        </span>
                      </div>
                      <ArrowUpRight
                        className={`h-6 w-6 transition-transform ${
                          isActive
                            ? "text-base-900"
                            : "text-base-400 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-base-900"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Bottom Drawer Footer: Socials & Barcode */}
            <div className="pt-6 border-t border-base-400/30 space-y-6">
              <div className="flex flex-wrap gap-4 font-mono text-13 uppercase tracking-wider">
                {personalInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base-700 hover:text-base-900 underline underline-offset-4 decoration-1"
                  >
                    {social.name}
                  </a>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <Image
                  src="/assets/ui/barcode.svg"
                  alt="Barcode"
                  width={110}
                  height={34}
                  className="opacity-70 invert"
                />
                <span className="font-mono text-11 text-base-500 uppercase">
                  {personalInfo.name} &copy; 2026
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
