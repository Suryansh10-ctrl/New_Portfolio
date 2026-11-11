import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 flex flex-col items-center justify-center text-center space-y-8">
      <span className="font-mono text-14 uppercase tracking-widest text-base-500 border border-base-400/40 px-3 py-1">
        ERROR // 404
      </span>
      <h1 className="font-grunge text-80 md:text-128 uppercase tracking-tight text-base-900 leading-none">
        Page Not Found
      </h1>
      <p className="font-mono text-16 text-base-600 max-w-md">
        The requested transmission coordinate does not exist or has been relocated to another sector.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 border-2 border-base-900 bg-base-900 px-8 py-3.5 font-mono text-14 uppercase tracking-widest text-base-100 hover:bg-transparent hover:text-base-900 transition-all"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Return to Base</span>
      </Link>
    </div>
  );
}

