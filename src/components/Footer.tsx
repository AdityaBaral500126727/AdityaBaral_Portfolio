"use client";

import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#171816] border-t border-[#837967]/25 py-16 text-[#c8bca5] relative"
      aria-label="Portfolio Footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#837967]/20 items-start">
          {/* Identity Column (5 cols) - STRICTLY NO LOGO */}
          <div className="md:col-span-5 space-y-3">
            <div className="font-mono text-sm uppercase tracking-[0.2em] text-[#e5ddce]">
              {PORTFOLIO_DATA.profile.name}
            </div>
            <p className="font-serif text-lg text-[#e5ddce] font-normal">
              Software Developer · Full-Stack &amp; Backend Systems
            </p>
            <p className="font-sans text-xs text-[#837967] max-w-sm leading-relaxed">
              Computer Science Engineering student at UPES with internship experience at Xebia and ONGC GEOPIC. Building scalable applications and reliable backend architectures.
            </p>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#9a7655] block">
              // Navigation Index
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono uppercase tracking-wider">
              <li>
                <a
                  href="#work"
                  className="hover:text-[#e5ddce] transition-colors"
                >
                  01. Work
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-[#e5ddce] transition-colors"
                >
                  02. Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-[#e5ddce] transition-colors"
                >
                  03. Skills
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#e5ddce] transition-colors"
                >
                  04. About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#e5ddce] transition-colors"
                >
                  05. Contact
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_DATA.profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e5ddce] transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Back to top (3 cols) */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 border border-[#837967]/30 px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#c8bca5] hover:text-[#e5ddce] hover:border-[#c8bca5] transition-colors bg-[#21211b]"
              aria-label="Return to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#837967]">
          <div>
            © 2026 {PORTFOLIO_DATA.profile.name}. All verified portfolio rights reserved.
          </div>
          <div>
            Built with Next.js, TypeScript, Tailwind CSS, GSAP &amp; Lenis.
          </div>
        </div>
      </div>
    </footer>
  );
}
