"use client";

import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-between gap-12 py-8 md:py-16">
      {/* Elevator Pitch & Status Row */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
        <p className="font-mono text-16 md:text-18 leading-relaxed text-base-800 max-w-xl">
          Hey there! I&apos;m <span className="text-base-900 font-bold">{personalInfo.name}</span>. {personalInfo.shortBio}
        </p>

        {/* Barcode stamp & availability indicator */}
        <div className="flex items-center gap-4 self-start">
          <div className="flex items-center gap-2 border border-base-400 bg-base-200/60 px-3 py-1 font-mono text-12 text-base-800">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{personalInfo.availability}</span>
          </div>
          <Image
            src="/assets/ui/barcode.svg"
            alt="Barcode"
            width={90}
            height={30}
            className="hidden sm:block opacity-60 invert"
          />
        </div>
      </div>

      {/* Main Hero Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
        {/* Left Column: Heading & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border-2 border-base-900 bg-base-900 px-6 py-2.5 font-mono text-14 uppercase tracking-widest text-base-100 transition-all duration-300 hover:bg-transparent hover:text-base-900"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <div>
            <h1 className="font-grunge text-64 sm:text-80 md:text-96 lg:text-128 uppercase tracking-tight text-base-900 leading-[0.88] select-none">
              {personalInfo.name}
            </h1>
            <p className="mt-4 font-mono text-16 md:text-20 uppercase tracking-widest text-base-600 font-medium">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {["React.js", "Next.js", "Node.js", "MongoDB", "Python"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-12 uppercase tracking-wider text-base-500 border border-base-400/40 px-3 py-1 bg-base-200/40"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: High-Impact Portrait / Visual Container */}
        <div className="lg:col-span-5 h-[380px] sm:h-[460px] md:h-[520px] w-full relative">
          <div className="relative h-full w-full overflow-hidden border-2 border-base-400/50 bg-base-200 shadow-2xl">
            {/* Corner UI Accents */}
            <div className="absolute top-2 left-2 z-20 font-mono text-11 uppercase tracking-widest text-base-400 bg-base-100/80 px-2 py-0.5 border border-base-400/40">
              ID // 010-DEV
            </div>
            <div className="absolute bottom-2 right-2 z-20 font-mono text-11 uppercase tracking-widest text-base-400 bg-base-100/80 px-2 py-0.5 border border-base-400/40">
              AIML // 2026
            </div>

            {/* Developer Artwork / Image */}
            <Image
              src="/assets/images/peter.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover grayscale contrast-125 transition-all duration-700 hover:grayscale-0"
              priority
            />

            {/* Subtle grunge overlay lines */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

