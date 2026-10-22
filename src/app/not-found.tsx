import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#292821] text-[#e5ddce] flex items-center justify-center px-6">
      <div className="max-w-md w-full border border-[#837967]/35 bg-[#1e1f18] p-8 sm:p-12 text-center relative">
        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-[#c8bca5]" />
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-[#c8bca5]" />
        <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-[#c8bca5]" />
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-[#c8bca5]" />

        <span className="font-mono text-xs uppercase tracking-widest text-[#9a7655] block mb-3">
          // ERROR 404
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl text-[#e5ddce] mb-4 font-normal">
          Page Not Found
        </h1>

        <p className="font-sans text-sm text-[#c8bca5] font-light mb-8 leading-relaxed">
          The requested route or resource does not exist in this portfolio. Return to the primary overview to explore verified projects and experience.
        </p>

        <Link
          href="/"
          className="inline-flex items-center space-x-2 bg-[#e5ddce] text-[#292821] font-mono text-xs uppercase tracking-wider font-semibold px-6 py-3 hover:bg-[#c8bca5] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
