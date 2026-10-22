"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDownRight, FileText, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const portraitFrameRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 15,
        duration: 0.8,
        delay: 0.1,
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          ".hero-desc",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 15,
            duration: 0.7,
            stagger: 0.1,
          },
          "-=0.5"
        )
        .from(
          portraitFrameRef.current,
          {
            opacity: 0,
            scale: 0.97,
            y: 20,
            duration: 1.1,
          },
          "-=0.9"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center bg-atmospheric-fog"
      aria-label="Hero Introduction"
    >
      {/* Subtle atmospheric ambient glow */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#45443a]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-[#171816]/70 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section index and technical tag */}
            <div className="hero-badge flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9a7655] bg-[#171816]/60 border border-[#837967]/30 px-3 py-1">
                // 01. FULL-STACK &amp; BACKEND SYSTEMS
              </span>
              <span className="font-mono text-xs text-[#837967]">
                UPES &apos;27 · B.Tech CSE
              </span>
            </div>

            {/* Display Headline */}
            <h1
              ref={headlineRef}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] tracking-tight text-[#e5ddce] mb-6 font-normal"
            >
              Building resilient backend architectures &amp; thoughtful web applications.
            </h1>

            {/* Supporting paragraph grounded in real experience */}
            <p className="hero-desc font-sans text-base sm:text-lg text-[#c8bca5] font-light leading-relaxed max-w-2xl mb-8">
              I’m <span className="text-[#e5ddce] font-normal">{PORTFOLIO_DATA.profile.name}</span>, a software developer with internship experience at{" "}
              <span className="text-[#e5ddce]">Xebia</span> and{" "}
              <span className="text-[#e5ddce]">ONGC GEOPIC</span>. I build practical web applications, design REST APIs, model database schemas, and engineer secure authentication workflows.
            </p>

            {/* Key verification tags */}
            <div className="hero-desc flex flex-wrap gap-2.5 mb-10">
              <span className="font-mono text-[11px] text-[#c8bca5] border border-[#837967]/30 px-3 py-1.5 bg-[#171816]/40">
                CGPA 8.1 / 10
              </span>
              <span className="font-mono text-[11px] text-[#c8bca5] border border-[#837967]/30 px-3 py-1.5 bg-[#171816]/40">
                Java · Spring Boot
              </span>
              <span className="font-mono text-[11px] text-[#c8bca5] border border-[#837967]/30 px-3 py-1.5 bg-[#171816]/40">
                Node.js · Express · TypeScript
              </span>
              <span className="font-mono text-[11px] text-[#c8bca5] border border-[#837967]/30 px-3 py-1.5 bg-[#171816]/40">
                React · Next.js · MongoDB
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="hero-cta group inline-flex items-center space-x-2.5 bg-[#e5ddce] text-[#292821] font-mono text-xs uppercase tracking-widest font-semibold px-6 py-3.5 hover:bg-[#c8bca5] transition-all"
              >
                <span>Selected Work</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#experience"
                className="hero-cta group inline-flex items-center space-x-2 text-[#c8bca5] hover:text-[#e5ddce] font-mono text-xs uppercase tracking-widest px-5 py-3.5 border border-[#837967]/40 hover:border-[#c8bca5] transition-all bg-[#171816]/30"
              >
                <span>Experience</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="hero-cta inline-flex items-center space-x-2 text-[#837967] hover:text-[#c8bca5] font-mono text-xs uppercase tracking-wider py-2 transition-colors ml-1"
              >
                <FileText className="w-3.5 h-3.5 text-[#9a7655]" />
                <span>Resume &amp; Contact</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Anchor (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div
              ref={portraitFrameRef}
              className="relative w-full max-w-md lg:max-w-none bg-[#171816] p-2.5 border border-[#837967]/40 shadow-2xl shadow-black/60 group"
            >
              {/* Corner tick marks */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-[#c8bca5]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-[#c8bca5]" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-[#c8bca5]" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-[#c8bca5]" />

              {/* Inner portrait image container with seamless atmospheric blending */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#171816]">
                <Image
                  src="/images/aditya-baral-portrait-enhanced.webp"
                  alt="Aditya Baral — Software Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 480px"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(ellipse 96% 94% at 50% 46%, black 74%, rgba(0,0,0,0.7) 88%, transparent 100%)",
                    maskImage:
                      "radial-gradient(ellipse 96% 94% at 50% 46%, black 74%, rgba(0,0,0,0.7) 88%, transparent 100%)",
                  }}
                  className="object-cover object-top filter grayscale-[10%] contrast-[1.03] brightness-[1.01] group-hover:grayscale-0 group-hover:scale-[1.015] transition-all duration-700 ease-out"
                />

                {/* Subtle multi-directional atmospheric vignette for seamless integration */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#171816] via-[#171816]/25 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-[#171816]/40 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#171816]/30 via-transparent to-[#171816]/30 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Micro status badge in photo corner */}
                <div className="absolute bottom-3 left-3 bg-[#171816]/90 border border-[#837967]/50 px-2.5 py-1 text-[10px] font-mono text-[#e5ddce] flex items-center space-x-1.5 backdrop-blur-sm z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="uppercase tracking-wider">UPES CSE &apos;27</span>
                </div>
              </div>

              {/* Caption beneath portrait */}
              <div className="mt-2.5 flex items-center justify-between font-mono text-[10px] text-[#837967] uppercase tracking-wider px-1">
                <span>Fig. 01 / Primary Portrait</span>
                <span>Aditya Baral</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
