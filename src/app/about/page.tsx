import Image from "next/image";
import Link from "next/link";
import { personalInfo, skillsData, experienceData, educationData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-8 md:py-16 space-y-20 md:space-y-28">
      {/* Intro Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-12 md:text-14 uppercase tracking-widest text-base-500 border border-base-400/40 px-3 py-1">
            ABOUT // BIOGRAPHY
          </span>
          <h1 className="font-grunge text-64 sm:text-80 md:text-96 uppercase tracking-tight text-base-900 leading-none">
            {personalInfo.name}
          </h1>
          <p className="font-mono text-18 md:text-20 uppercase tracking-wider text-base-600 font-semibold">
            {personalInfo.tagline}
          </p>

          <div className="space-y-4 font-mono text-15 md:text-16 leading-relaxed text-base-800 pt-2">
            {personalInfo.fullBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border-2 border-base-900 bg-base-900 px-6 py-2.5 font-mono text-14 uppercase tracking-widest text-base-100 transition-all hover:bg-transparent hover:text-base-900"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href="https://github.com/Suryansh10-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-base-400 px-6 py-2.5 font-mono text-14 uppercase tracking-widest text-base-800 hover:border-base-900 hover:text-base-900 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Portrait container */}
        <div className="lg:col-span-5 h-[420px] sm:h-[500px] relative border-2 border-base-400/50 bg-base-200 overflow-hidden shadow-2xl">
          <Image
            src="/assets/images/peter.jpg"
            alt={personalInfo.name}
            fill
            className="object-cover grayscale contrast-125 transition-all duration-700 hover:grayscale-0"
            priority
          />
          <div className="absolute top-3 left-3 bg-base-900 border border-base-100 px-3 py-1 font-mono text-11 uppercase text-base-100">
            LOC // {personalInfo.location}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="border-t border-base-400/30 pt-16">
        <div className="mb-12">
          <span className="font-mono text-12 md:text-14 uppercase tracking-widest text-base-500 block mb-2">
            ARSENAL // TOOLING
          </span>
          <h2 className="font-grunge text-48 md:text-64 uppercase tracking-tight text-base-900">
            Skills &amp; Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="border border-base-400/40 bg-base-200/40 p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-grunge text-28 md:text-32 uppercase text-base-900 mb-4 flex items-center justify-between">
                <span>Frontend</span>
                <span className="font-mono text-12 text-base-500">[01]</span>
              </h3>
              <p className="font-mono text-13 text-base-600 mb-6">
                Creating responsive, high-fidelity interfaces and design systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {skillsData.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-12 uppercase tracking-wider bg-base-100/70 border border-base-400/40 px-2.5 py-1 text-base-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="border border-base-400/40 bg-base-200/40 p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-grunge text-28 md:text-32 uppercase text-base-900 mb-4 flex items-center justify-between">
                <span>Backend &amp; Logic</span>
                <span className="font-mono text-12 text-base-500">[02]</span>
              </h3>
              <p className="font-mono text-13 text-base-600 mb-6">
                Architecting performant REST APIs, server logic, and auth pipelines.
              </p>
              <div className="flex flex-wrap gap-2">
                {skillsData.backend.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-12 uppercase tracking-wider bg-base-100/70 border border-base-400/40 px-2.5 py-1 text-base-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Database & Tools */}
          <div className="border border-base-400/40 bg-base-200/40 p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-grunge text-28 md:text-32 uppercase text-base-900 mb-4 flex items-center justify-between">
                <span>Database &amp; Tools</span>
                <span className="font-mono text-12 text-base-500">[03]</span>
              </h3>
              <p className="font-mono text-13 text-base-600 mb-6">
                Scalable data structures, cloud storage, and developer workflows.
              </p>
              <div className="flex flex-wrap gap-2">
                {skillsData.databaseAndTools.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-12 uppercase tracking-wider bg-base-100/70 border border-base-400/40 px-2.5 py-1 text-base-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience History */}
      <section className="border-t border-base-400/30 pt-16">
        <div className="mb-12">
          <span className="font-mono text-12 md:text-14 uppercase tracking-widest text-base-500 block mb-2">
            TRACK RECORD // ROLES
          </span>
          <h2 className="font-grunge text-48 md:text-64 uppercase tracking-tight text-base-900">
            Work &amp; Experience
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-base-400/30">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="py-8 flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="md:w-1/3">
                <span className="font-mono text-12 text-base-500 uppercase tracking-widest block mb-1">
                  {exp.period}
                </span>
                <h3 className="font-grunge text-32 uppercase text-base-900">
                  {exp.company}
                </h3>
                <p className="font-mono text-14 text-base-600 uppercase font-semibold">
                  {exp.role}
                </p>
              </div>

              <div className="md:w-2/3 space-y-4">
                <p className="font-mono text-15 leading-relaxed text-base-800">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-11 uppercase text-base-500 border border-base-400/50 px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-base-400/30 pt-16">
        <div className="mb-12">
          <span className="font-mono text-12 md:text-14 uppercase tracking-widest text-base-500 block mb-2">
            ACADEMIC // BACKGROUND
          </span>
          <h2 className="font-grunge text-48 md:text-64 uppercase tracking-tight text-base-900">
            Education
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-base-400/30">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="py-8 flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="md:w-1/3">
                <span className="font-mono text-12 text-base-500 uppercase tracking-widest block mb-1">
                  {edu.period}
                </span>
                <h3 className="font-grunge text-28 md:text-32 uppercase text-base-900">
                  {edu.institution}
                </h3>
              </div>
              <div className="md:w-2/3">
                <h4 className="font-mono text-16 font-bold uppercase text-base-900 mb-2">
                  {edu.degree}
                </h4>
                <p className="font-mono text-15 leading-relaxed text-base-700">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

