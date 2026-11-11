import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full pt-24 pb-12 mt-24 border-t border-base-400/30">
      {/* Top barcode & symbol accent */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/ui/symbolWhite.svg"
            alt="UI Symbol"
            width={36}
            height={20}
            className="opacity-80"
          />
          <span className="font-mono text-12 uppercase tracking-widest text-base-500">
            SYSTEM_OK // 2026
          </span>
        </div>
        <Image
          src="/assets/ui/barcode.svg"
          alt="Barcode Stamp"
          width={130}
          height={40}
          className="opacity-70 invert"
        />
      </div>

      {/* Main columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Socials */}
        <div className="text-center md:text-left">
          <h3 className="font-grunge uppercase tracking-tight text-32 md:text-40 text-base-900 mb-6">
            Socials & Links
          </h3>
          <ul className="flex flex-col gap-3">
            {personalInfo.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-grunge uppercase text-20 md:text-24 tracking-wide text-base-800 hover:text-base-900 underline underline-offset-4 decoration-2 transition-colors"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="text-center md:text-right">
          <h3 className="font-grunge uppercase tracking-tight text-32 md:text-40 text-base-900 mb-6">
            Navigation
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/"
                className="font-grunge uppercase text-20 md:text-24 tracking-wide text-base-800 hover:text-base-900 underline underline-offset-4 decoration-2 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className="font-grunge uppercase text-20 md:text-24 tracking-wide text-base-800 hover:text-base-900 underline underline-offset-4 decoration-2 transition-colors"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-grunge uppercase text-20 md:text-24 tracking-wide text-base-800 hover:text-base-900 underline underline-offset-4 decoration-2 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-grunge uppercase text-20 md:text-24 tracking-wide text-base-800 hover:text-base-900 underline underline-offset-4 decoration-2 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-base-400/20 text-center font-mono text-14 text-base-500 md:flex-row">
        <p>
          {personalInfo.name} &copy; {currentYear}. All Rights Reserved.
        </p>
        <p className="flex items-center gap-2">
          <span>Engineered with Next.js &amp; Framer Motion</span>
          <span>&bull;</span>
          <span className="text-base-400">Dark Brutalist Theme</span>
        </p>
      </div>
    </footer>
  );
}

