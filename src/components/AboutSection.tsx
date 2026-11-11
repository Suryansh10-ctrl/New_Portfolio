import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Graphic / Photo */}
        <div className="lg:col-span-5 h-[340px] sm:h-[420px] relative border-2 border-base-400/50 bg-base-200 overflow-hidden shadow-2xl">
          <Image
            src="/assets/images/peter2.jpg"
            alt={personalInfo.name}
            fill
            className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-3 left-3 bg-base-900 border border-base-100 px-3 py-1 font-mono text-12 font-bold uppercase text-base-100">
            ENGINEERING &bull; AI/ML &bull; WEB
          </div>
        </div>

        {/* Right Side: Philosophy & Bio */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <span className="font-mono text-12 md:text-14 uppercase tracking-widest text-base-500">
            PROFILE // STATEMENT
          </span>
          <h2 className="font-grunge text-48 md:text-64 uppercase tracking-tight text-base-900 leading-none">
            Turning Ideas Into Scalable Reality
          </h2>
          <div className="space-y-4 font-mono text-15 md:text-16 leading-relaxed text-base-800">
            <p>{personalInfo.fullBio[0]}</p>
            <p>{personalInfo.fullBio[1]}</p>
            <p className="text-base-600 italic border-l-2 border-base-500 pl-4">
              &ldquo;{personalInfo.headline}&rdquo;
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 font-mono text-14 uppercase tracking-widest text-base-900 underline underline-offset-8 decoration-2 hover:text-base-600 transition-colors"
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

