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

  // Lock background scroll when mobile menu is open
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

        {/* Mobile / Tablet Controls (Visible on all screens below lg) */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 border border-white/40 bg-white px-3 py-1.5 font-mono text-11 uppercase font-bold tracking-widest text-black hover:bg-transparent hover:text-white transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Hire</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center gap-1.5 border-2 border-white/80 bg-[#1e1e24] px-3.5 py-1.5 text-white focus:outline-none transition-all active:scale-95 cursor-pointer shadow-lg"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5 text-white" />
            <span className="font-mono text-11 uppercase font-bold tracking-wider text-white">Menu</span>
          </button>
        </div>
      </nav>

      {/* 100% OPAQUE FULL-SCREEN BRUTALIST MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[9999] bg-[#0c0c0e] text-white flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
            style={{ backgroundColor: "#0c0c0e" }}
          >
            {/* Drawer Top Bar */}
            <div className="flex items-center justify-between border-b border-white/20 pb-5">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-grunge text-24 sm:text-28 tracking-wider text-white"
              >
                <span>{personalInfo.name}</span>
                <span className="ml-2 text-11 font-mono uppercase tracking-widest text-emerald-400 border border-emerald-400/40 px-1.5 py-0.5">
                  DEV
                </span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 border-2 border-white bg-white text-black px-4 py-1.5 font-mono text-12 uppercase font-bold tracking-wider hover:bg-transparent hover:text-white transition-all cursor-pointer shadow-md"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
                <span>Close</span>
              </button>
            </div>

            {/* Navigation Links List */}
            <div className="my-auto py-8">
              <div className="font-mono text-11 uppercase tracking-widest text-white/50 mb-4 block">
                // SYSTEM_NAVIGATION
              </div>
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href} className="border-b border-white/10 pb-4">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex items-center justify-between w-full"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-14 text-emerald-400 font-bold">
                            [{link.number}]
                          </span>
                          <span
                            className={`font-grunge text-48 sm:text-60 uppercase tracking-tight transition-colors ${
                              isActive
                                ? "text-emerald-400 underline underline-offset-8 decoration-2"
                                : "text-white group-hover:text-emerald-400"
                            }`}
                          >
                            {link.label}
                          </span>
                        </div>
                        <ArrowUpRight
                          className={`h-7 w-7 transition-transform ${
                            isActive
                              ? "text-emerald-400"
                              : "text-white/60 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1"
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Drawer Bottom Bar */}
            <div className="pt-6 border-t border-white/20 space-y-5">
              <div className="flex items-center justify-between font-mono text-12">
                <span className="text-white/60">AVAILABILITY //</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {personalInfo.availability}
                </span>
              </div>

              {/* Social handles */}
              <div className="flex flex-wrap gap-4 font-mono text-13 uppercase tracking-wider">
                {personalInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white underline underline-offset-4 decoration-1 font-semibold"
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
                <span className="font-mono text-11 text-white/50 uppercase">
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
