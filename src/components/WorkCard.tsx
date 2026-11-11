"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/portfolio";

interface WorkCardProps {
  project: Project;
}

export default function WorkCard({ project }: WorkCardProps) {
  return (
    <div className="group relative flex flex-col items-center sm:items-start">
      <Link href={`/works/${project.slug}`} className="block w-full">
        {/* Vinyl Cover & Record Container */}
        <div className="relative mx-auto mb-6 h-[260px] w-[260px] overflow-visible sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[340px] lg:w-[340px] xl:h-[380px] xl:w-[380px]">
          {/* Category Badge */}
          <div className="absolute top-3 left-3 z-40 flex items-center gap-2 border border-base-900 bg-base-900 px-3 py-1 shadow-md">
            <span className="font-mono text-12 font-bold uppercase tracking-wider text-base-100">
              {project.category}
            </span>
            <Image
              src="/assets/ui/symbol.svg"
              alt="UI Stamp"
              width={20}
              height={14}
              className="inline-block"
            />
          </div>

          {/* Vinyl Texture Groove Overlay */}
          <div
            style={{ backgroundImage: "url('/assets/work-card/vinyltexture.jpg')" }}
            className="pointer-events-none absolute inset-0 z-30 bg-cover bg-center opacity-40 mix-blend-screen"
          />

          {/* Project Featured Image (Jacket Art) */}
          <div className="relative z-20 h-full w-full overflow-hidden border border-base-400/30 bg-base-200 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
            <Image
              src={project.featuredImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 300px, 400px"
            />
          </div>

          {/* Vinyl Disk that slides out and spins */}
          <div
            style={{ backgroundImage: "url('/assets/work-card/vinyldisk.png')" }}
            className="absolute top-0 -right-8 sm:-right-12 z-10 h-full w-full bg-cover bg-center transition-all duration-500 ease-out group-hover:-right-20 sm:group-hover:-right-28 group-hover:rotate-180"
          >
            <div className="h-full w-full spin-slow bg-cover bg-center" style={{ backgroundImage: "url('/assets/work-card/vinyldisk.png')" }} />
          </div>
        </div>

        {/* Info & Typography */}
        <div className="flex flex-col gap-1 text-left">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-grunge text-32 md:text-40 uppercase tracking-tight text-base-900 transition-colors group-hover:underline group-hover:text-base-700">
              {project.title}
            </h3>
            <span className="font-mono text-12 text-base-500 border border-base-400/40 px-2 py-0.5">
              {project.year}
            </span>
          </div>
          <p className="font-mono text-14 text-base-600 uppercase tracking-wider">
            {project.client} &bull; {project.services}
          </p>
        </div>
      </Link>
    </div>
  );
}

