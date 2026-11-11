"use client";

import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { ArrowUpRight, Terminal, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-between gap-8 md:gap-12 py-4 md:py-12">
      {/* Elevator Pitch & Status Row */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <p className="font-mono text-15 md:text-18 leading-relaxed text-base-800 max-w-xl">
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 md:pt-6">
        {/* Left Column: Heading & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border-2 border-base-900 bg-base-900 px-5 py-2 font-mono text-13 md:text-14 uppercase tracking-widest text-base-100 transition-all duration-300 hover:bg-transparent hover:text-base-900"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <div>
            <h1 className="font-grunge text-56 sm:text-72 md:text-96 lg:text-110 uppercase tracking-tight text-base-900 leading-[0.9] select-none break-words">
              {personalInfo.name}
            </h1>
            <p className="mt-3 font-mono text-14 sm:text-16 md:text-18 uppercase tracking-widest text-base-600 font-medium">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {["React.js", "Next.js", "Node.js", "MongoDB", "Python"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-11 sm:text-12 uppercase tracking-wider text-base-500 border border-base-400/40 px-2.5 py-1 bg-base-200/40"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Custom Developer Terminal Card */}
        <div className="lg:col-span-5 w-full">
          <div className="relative w-full border-2 border-base-400/60 bg-base-100/90 shadow-2xl backdrop-blur-md overflow-hidden font-mono">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-base-400/40 bg-base-200/80 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 text-11 uppercase text-base-500 tracking-wider hidden sm:inline">
                  suryansh@coer:~/profile
                </span>
              </div>
              <div className="flex items-center gap-2 text-11 text-emerald-400 font-bold uppercase">
                <Terminal className="h-3.5 w-3.5" />
                <span>ACTIVE</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 sm:p-6 text-12 sm:text-13 leading-relaxed space-y-3 text-base-700">
              <div className="text-base-500 text-11">
                // System Developer Manifest v2026
              </div>

              <div>
                <span className="text-emerald-400 font-bold">const</span>{" "}
                <span className="text-base-900 font-bold">developer</span> = &#123;
              </div>

              <div className="pl-4 sm:pl-6 space-y-1.5 border-l border-base-400/30 ml-1">
                <div>
                  <span className="text-base-500">name:</span>{" "}
                  <span className="text-amber-300">&quot;Suryansh Sharma&quot;</span>,
                </div>
                <div>
                  <span className="text-base-500">title:</span>{" "}
                  <span className="text-cyan-300">&quot;Full-Stack Engineer&quot;</span>,
                </div>
                <div>
                  <span className="text-base-500">domain:</span>{" "}
                  <span className="text-purple-300">&quot;B.Tech AI &amp; ML&quot;</span>,
                </div>
                <div>
                  <span className="text-base-500">institution:</span>{" "}
                  <span className="text-base-800">&quot;COER University&quot;</span>,
                </div>
                <div>
                  <span className="text-base-500">coreStack:</span> [
                  <span className="text-emerald-300">&quot;MERN&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Python&quot;</span>],
                </div>
                <div>
                  <span className="text-base-500">status:</span>{" "}
                  <span className="text-emerald-400 font-semibold">&quot;Ready for Impact&quot;</span>
                </div>
              </div>

              <div>&#125;;</div>

              <div className="pt-2 flex items-center justify-between border-t border-base-400/30 text-11 text-base-500">
                <span className="flex items-center gap-1.5 text-base-800">
                  <Code2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>clean_code: true</span>
                </span>
                <span className="flex items-center gap-1 text-amber-400">
                  <Sparkles className="h-3 w-3" />
                  <span>AI/ML Enhanced</span>
                </span>
              </div>
            </div>

            {/* Corner UI Accents */}
            <div className="absolute bottom-1 right-2 font-mono text-10 uppercase tracking-widest text-base-500">
              SYS // OK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
