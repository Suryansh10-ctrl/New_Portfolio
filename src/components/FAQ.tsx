"use client";

import { useState } from "react";
import { faqData } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full py-16 md:py-24 border-t border-base-400/30">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="font-mono text-12 md:text-14 uppercase tracking-widest text-base-500 mb-2">
          INQUIRIES // FAQ
        </span>
        <h2 className="font-grunge text-64 md:text-80 uppercase tracking-tight text-base-900 leading-none">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto flex flex-col divide-y divide-base-400/30">
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="py-6">
              <button
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between text-left group cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 pr-6">
                  <span className="font-mono text-14 text-base-500 font-bold">
                    [0{item.id}]
                  </span>
                  <span className="font-grunge text-28 md:text-40 uppercase tracking-wide text-base-900 group-hover:text-base-700 transition-colors">
                    {item.question}
                  </span>
                </div>
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center border border-base-400/60 bg-base-200/50 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-base-900 text-base-100" : "text-base-800"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pl-10 md:pl-12 font-mono text-15 md:text-16 leading-relaxed text-base-700 max-w-3xl">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

