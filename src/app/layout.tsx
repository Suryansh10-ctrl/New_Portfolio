import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.tagline}`,
  description: personalInfo.shortBio,
  keywords: [
    "Suryansh Sharma",
    "Full-Stack Developer",
    "MERN Stack",
    "Python Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} | Full-Stack Developer`,
    description: personalInfo.shortBio,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen text-base-900 antialiased selection:bg-base-900 selection:text-base-100">
        {/* Subtle noise texture filter over background */}
        <div className="noise-overlay" />

        {/* Global wrapper with max width */}
        <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-4 sm:px-8 lg:px-12 flex flex-col justify-between">
          <Navigation />
          <main className="flex-1 flex flex-col gap-16 md:gap-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

