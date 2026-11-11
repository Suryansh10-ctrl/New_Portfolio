"use client";

import { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, Send, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="py-8 md:py-16">
      {/* Page Header */}
      <div className="flex flex-col items-start gap-4 mb-16">
        <div className="flex items-center gap-3">
          <span className="font-mono text-12 md:text-14 uppercase tracking-widest text-base-500 border border-base-400/40 px-3 py-1">
            CONNECT // INQUIRY
          </span>
          <div className="flex items-center gap-2 border border-base-400 bg-base-200/50 px-3 py-1 font-mono text-12 text-base-800">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AVAILABLE FOR WORK</span>
          </div>
        </div>

        <h1 className="font-grunge text-64 sm:text-80 md:text-96 lg:text-128 uppercase tracking-tight text-base-900 leading-none">
          Contact Me
        </h1>
        <p className="font-mono text-16 md:text-18 text-base-600 max-w-2xl leading-relaxed">
          Have an upcoming project, freelance opportunity, or interested in collaborating? Let&apos;s build something exceptional together.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-10">
          {/* Direct channels */}
          <div className="border border-base-400/40 bg-base-200/30 p-8 space-y-6">
            <h3 className="font-grunge text-32 uppercase text-base-900 border-b border-base-400/30 pb-4">
              Direct Channels
            </h3>

            <div className="space-y-6 font-mono text-14">
              <div className="flex items-start gap-4">
                <div className="p-2 border border-base-400/40 bg-base-100 shrink-0">
                  <Mail className="h-5 w-5 text-base-800" />
                </div>
                <div>
                  <span className="text-11 uppercase text-base-500 block">Email Address</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-15 md:text-16 font-bold text-base-900 hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 border border-base-400/40 bg-base-100 shrink-0">
                  <MapPin className="h-5 w-5 text-base-800" />
                </div>
                <div>
                  <span className="text-11 uppercase text-base-500 block">Current Location</span>
                  <span className="text-15 md:text-16 font-bold text-base-900">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links List */}
          <div className="border border-base-400/40 bg-base-200/30 p-8">
            <h3 className="font-grunge text-28 uppercase text-base-900 mb-6">
              Network &amp; Profiles
            </h3>
            <ul className="space-y-3 font-mono text-14">
              {personalInfo.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 border-b border-base-400/20 text-base-800 hover:text-base-900 hover:pl-2 transition-all"
                  >
                    <span className="uppercase font-semibold">{social.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-base-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Barcode Stamp */}
          <div className="flex justify-between items-center px-2">
            <Image
              src="/assets/ui/barcode.svg"
              alt="Barcode"
              width={140}
              height={45}
              className="opacity-70 invert"
            />
            <span className="font-mono text-11 uppercase tracking-widest text-base-500">
              TRANSMIT // OK
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className="border border-base-400/40 bg-base-200/40 p-8 md:p-10 shadow-2xl">
            <h3 className="font-grunge text-36 md:text-48 uppercase text-base-900 mb-2">
              Send a Transmission
            </h3>
            <p className="font-mono text-14 text-base-600 mb-8">
              Fill out the parameters below to initiate direct correspondence.
            </p>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4 border border-emerald-500/40 bg-emerald-950/20 p-6">
                <CheckCircle2 className="h-12 w-12 text-emerald-400 animate-bounce" />
                <h4 className="font-grunge text-32 uppercase text-base-900">
                  Transmission Received!
                </h4>
                <p className="font-mono text-14 text-base-700 max-w-md">
                  Thank you for reaching out, {formData.name || "friend"}. I will review your inquiry and get back to you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-mono text-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-11 uppercase tracking-wider text-base-500 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-base-100 border border-base-400/60 px-4 py-3 text-base-900 placeholder:text-base-400 focus:outline-none focus:border-base-900 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-11 uppercase tracking-wider text-base-500 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full bg-base-100 border border-base-400/60 px-4 py-3 text-base-900 placeholder:text-base-400 focus:outline-none focus:border-base-900 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-11 uppercase tracking-wider text-base-500 block">
                    Subject / Project Category *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full-Stack Web App Development / Freelance"
                    className="w-full bg-base-100 border border-base-400/60 px-4 py-3 text-base-900 placeholder:text-base-400 focus:outline-none focus:border-base-900 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-11 uppercase tracking-wider text-base-500 block">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="w-full bg-base-100 border border-base-400/60 p-4 text-base-900 placeholder:text-base-400 focus:outline-none focus:border-base-900 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="group w-full md:w-auto inline-flex items-center justify-center gap-3 border-2 border-base-900 bg-base-900 px-8 py-3.5 font-mono text-14 uppercase tracking-widest text-base-100 transition-all hover:bg-transparent hover:text-base-900 cursor-pointer"
                >
                  <span>Dispatch Message</span>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

