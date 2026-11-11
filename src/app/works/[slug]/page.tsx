import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/portfolio";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-8 md:py-16">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/works"
          className="group inline-flex items-center gap-2 font-mono text-14 uppercase tracking-widest text-base-600 hover:text-base-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to all works</span>
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-base-400/30 pb-12 mb-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-12 font-bold uppercase tracking-wider text-base-100 bg-base-900 px-3 py-1">
            {project.category}
          </span>
          <span className="font-mono text-12 uppercase text-base-500">
            YEAR // {project.year}
          </span>
        </div>

        <h1 className="font-grunge text-64 sm:text-80 md:text-110 uppercase tracking-tight text-base-900 leading-[0.9]">
          {project.title}
        </h1>

        <p className="font-mono text-16 md:text-18 text-base-700 max-w-3xl leading-relaxed mt-2">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={project.liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border-2 border-base-900 bg-base-900 px-6 py-2.5 font-mono text-14 uppercase tracking-widest text-base-100 transition-all hover:bg-transparent hover:text-base-900"
          >
            <span>Live Demonstration</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border-2 border-base-400/50 bg-base-200/40 px-6 py-2.5 font-mono text-14 uppercase tracking-widest text-base-800 transition-all hover:border-base-900 hover:text-base-900"
          >
            <Github className="h-4 w-4" />
            <span>Source Code</span>
          </a>
        </div>
      </div>

      {/* Metadata Specification Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 border border-base-400/30 bg-base-200/30 font-mono mb-16">
        <div>
          <span className="text-11 uppercase text-base-500 block mb-1">Client / Domain</span>
          <span className="text-14 md:text-16 font-bold text-base-900">{project.client}</span>
        </div>
        <div>
          <span className="text-11 uppercase text-base-500 block mb-1">Services Delivered</span>
          <span className="text-14 md:text-16 font-bold text-base-900">{project.services}</span>
        </div>
        <div>
          <span className="text-11 uppercase text-base-500 block mb-1">Release Year</span>
          <span className="text-14 md:text-16 font-bold text-base-900">{project.year}</span>
        </div>
        <div>
          <span className="text-11 uppercase text-base-500 block mb-1">Status</span>
          <span className="text-14 md:text-16 font-bold text-emerald-400">Deployed &bull; Verified</span>
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="mb-16">
        <h3 className="font-grunge text-28 md:text-36 uppercase tracking-wide text-base-900 mb-4">
          Tech Stack &amp; Architecture
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-13 uppercase tracking-wider text-base-800 bg-base-200 border border-base-400/50 px-3 py-1.5"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image Gallery Showcase */}
      <div className="space-y-12">
        <h3 className="font-grunge text-32 md:text-48 uppercase tracking-wide text-base-900">
          Visual Artifacts &amp; Exhibition
        </h3>
        {/* Image Gallery Showcase - 2 columns on mobile */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">
          {project.images.map((imgSrc, index) => (
            <div
              key={index}
              className="relative h-[160px] sm:h-[260px] md:h-[400px] border border-base-400/40 bg-base-200/60 overflow-hidden shadow-xl"
            >
              <Image
                src={imgSrc}
                alt={`${project.title} Screenshot ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 50vw, 50vw"
              />
              <div className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 font-mono text-[9px] sm:text-11 uppercase text-base-400 bg-base-100/90 px-1.5 py-0.5 border border-base-400/30">
                FRAME // 0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Project Link */}
      <div className="pt-20 border-t border-base-400/30 mt-20 flex justify-between items-center">
        <Link
          href="/works"
          className="font-grunge text-28 uppercase text-base-600 hover:text-base-900 hover:underline transition-colors"
        >
          &larr; View Archive
        </Link>
        <Link
          href="/contact"
          className="font-grunge text-28 uppercase text-base-900 hover:text-base-700 hover:underline transition-colors"
        >
          Have a similar project? Let&apos;s talk &rarr;
        </Link>
      </div>
    </article>
  );
}

