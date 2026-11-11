import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { ArrowUpRight, GraduationCap, Code, Flame, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Brutalist Metrics & Credentials Card */}
        <div className="lg:col-span-5 w-full border-2 border-base-400/50 bg-base-200/40 p-6 md:p-8 font-mono shadow-2xl">
          <div className="flex items-center justify-between border-b border-base-400/30 pb-4 mb-6">
            <span className="text-11 uppercase tracking-widest text-base-500">
              DEVELOPER_PROFILE // 2026
            </span>
            <span className="text-11 uppercase text-emerald-400 font-bold bg-base-100 px-2 py-0.5 border border-base-400/40">
              VERIFIED
            </span>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="p-2 border border-base-400/40 bg-base-100 shrink-0">
                <GraduationCap className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <span className="text-11 uppercase text-base-500 block">Education</span>
                <span className="text-14 font-bold text-base-900 block">
                  B.Tech AIML (2022 - 2026)
                </span>
                <span className="text-12 text-base-600">COER University, Roorkee</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 border border-base-400/40 bg-base-100 shrink-0">
                <Code className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-11 uppercase text-base-500 block">Focus Stack</span>
                <span className="text-14 font-bold text-base-900 block">
                  Full-Stack MERN &amp; Python
                </span>
                <span className="text-12 text-base-600">React, Next.js, Node, MongoDB</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 border border-base-400/40 bg-base-100 shrink-0">
                <Flame className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <span className="text-11 uppercase text-base-500 block">Project Delivery</span>
                <span className="text-14 font-bold text-base-900 block">
                  7+ Production Projects
                </span>
                <span className="text-12 text-base-600">Web Apps, SaaS, Portals</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 border border-base-400/40 bg-base-100 shrink-0">
                <Award className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <span className="text-11 uppercase text-base-500 block">Goal</span>
                <span className="text-14 font-bold text-base-900 block">
                  Impactful Software Products
                </span>
                <span className="text-12 text-base-600">Scalable &amp; User-Centric</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Philosophy & Bio */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          <span className="font-mono text-12 md:text-14 uppercase tracking-widest text-base-500">
            PROFILE // STATEMENT
          </span>
          <h2 className="font-grunge text-44 sm:text-56 md:text-64 uppercase tracking-tight text-base-900 leading-none">
            Turning Ideas Into Scalable Reality
          </h2>
          <div className="space-y-4 font-mono text-14 sm:text-15 md:text-16 leading-relaxed text-base-800">
            <p>{personalInfo.fullBio[0]}</p>
            <p>{personalInfo.fullBio[1]}</p>
            <p className="text-base-600 italic border-l-2 border-base-500 pl-4">
              &ldquo;{personalInfo.headline}&rdquo;
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 font-mono text-13 md:text-14 uppercase tracking-widest text-base-900 underline underline-offset-8 decoration-2 hover:text-base-600 transition-colors"
            >
              <span>Read Full Background &amp; Education</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
