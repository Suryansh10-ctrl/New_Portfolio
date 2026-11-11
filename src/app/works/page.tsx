"use client";

import { useState } from "react";
import WorkCard from "@/components/WorkCard";
import { projectsData } from "@/data/portfolio";

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Full-Stack",
    "Frontend",
    "MERN Stack",
    "Next.js",
    "Python / AI",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-8 md:py-16">
      {/* Page Header */}
      <div className="flex flex-col items-start gap-4 mb-12 md:mb-16">
        <span className="font-mono text-12 md:text-14 uppercase tracking-widest text-base-500 border border-base-400/40 px-3 py-1">
          INDEX // ARCHIVE ({projectsData.length})
        </span>
        <h1 className="font-grunge text-64 sm:text-80 md:text-96 lg:text-128 uppercase tracking-tight text-base-900 leading-none">
          All Works
        </h1>
        <p className="font-mono text-16 text-base-600 max-w-2xl">
          A showcase of full-stack applications, modern frontend experiences, and AI-driven platforms built with high performance and clean code.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-12 uppercase tracking-widest px-4 py-2 border transition-all cursor-pointer ${
                  isActive
                    ? "border-base-900 bg-base-900 text-base-100 font-bold"
                    : "border-base-400/40 bg-base-200/30 text-base-700 hover:border-base-900 hover:text-base-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 justify-items-center">
        {filteredProjects.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

