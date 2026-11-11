import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import { projectsData } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export default function SelectedWorks() {
  const featured = projectsData.filter((p) => p.isFeatured);

  return (
    <section className="relative w-full py-16 md:py-24">
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-20">
        <span className="font-mono text-12 md:text-14 uppercase tracking-widest text-base-500 mb-3 border-b border-base-500 pb-1">
          ARCHIVE // HIGHLIGHTS
        </span>
        <h2 className="font-grunge text-64 md:text-80 lg:text-96 uppercase tracking-tight text-base-900 leading-none">
          Featured Works
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 justify-items-center max-w-6xl mx-auto">
        {featured.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-20">
        <Link
          href="/works"
          className="group inline-flex items-center gap-3 border-2 border-base-900 bg-base-900 px-8 py-3.5 font-mono text-14 uppercase tracking-widest text-base-100 transition-all duration-300 hover:bg-transparent hover:text-base-900"
        >
          <span>Explore All Projects ({projectsData.length})</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

