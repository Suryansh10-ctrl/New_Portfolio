import { servicesData } from "@/data/portfolio";

export default function Services() {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-b border-base-400/30">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-mono text-12 md:text-14 uppercase tracking-widest text-base-500 mb-2 block">
            CAPABILITIES // OFFERINGS
          </span>
          <h2 className="font-grunge text-64 md:text-80 uppercase tracking-tight text-base-900 leading-none">
            Services &amp; Skills
          </h2>
        </div>
        <p className="font-mono text-14 text-base-600 max-w-md uppercase tracking-wider">
          Delivering end-to-end web engineering, high-conversion user interfaces, and scalable backend solutions.
        </p>
      </div>

      {/* Services List */}
      <div className="flex flex-col divide-y divide-base-400/30">
        {servicesData.map((service) => (
          <div
            key={service.number}
            className="group flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-8 md:py-10 transition-colors duration-300 hover:bg-base-200/40 px-4 -mx-4"
          >
            {/* Number & Title */}
            <div className="flex items-start md:items-center gap-6 lg:w-1/2">
              <span className="font-mono text-20 md:text-24 text-base-500 font-bold tracking-tighter">
                [{service.number}]
              </span>
              <h3 className="font-grunge text-32 md:text-48 uppercase tracking-wide text-base-900 group-hover:text-base-700 transition-colors">
                {service.title}
              </h3>
            </div>

            {/* Description & Tags */}
            <div className="lg:w-1/2 flex flex-col gap-4">
              <p className="font-mono text-14 md:text-16 leading-relaxed text-base-700">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-11 uppercase tracking-wider border border-base-400/60 px-2 py-0.5 text-base-500 bg-base-100/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

