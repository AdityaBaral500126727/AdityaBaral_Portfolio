"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Briefcase, GraduationCap, Users, HeartHandshake, Maximize2, X } from "lucide-react";
import { PORTFOLIO_DATA, ExperienceItem } from "@/data/portfolio-data";

export default function ExperienceSection() {
  const experiences = PORTFOLIO_DATA.experience;
  const [activeModalImage, setActiveModalImage] = useState<{
    src: string;
    caption: string;
    org: string;
  } | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveModalImage(null);
      }
    }
    if (activeModalImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalImage]);

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 bg-[#24231d] border-t border-[#837967]/25 relative"
      aria-label="Experience and Education"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9a7655]">
              // 03. EXPERIENCE &amp; FORMATION
            </span>
            <span className="w-12 h-px bg-[#837967]/40" />
            <span className="font-mono text-xs text-[#837967]">
              Career Trajectory
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5ddce] leading-tight mb-4 font-normal">
            Work Experience &amp; Academic Grounding.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#c8bca5] font-light leading-relaxed">
            Software development internships at Xebia and ONGC GEOPIC, technical leadership, and engineering foundations in Computer Science at UPES.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-[#837967]/35 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12 md:space-y-16">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              item={exp}
              onSelectImage={(img) => setActiveModalImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Experience & Volunteering Documentation */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Field record preview for ${activeModalImage.org}`}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#1a1b16] border border-[#837967]/50 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#21221b] border-b border-[#837967]/30">
              <div className="flex items-center space-x-3 font-mono text-xs">
                <span className="text-[#9a7655] font-medium">
                  [DOCUMENTATION]
                </span>
                <span className="text-[#e5ddce] font-sans font-medium text-sm">
                  {activeModalImage.org}
                </span>
                <span className="hidden sm:inline text-[#837967] text-[11px] border border-[#837967]/30 px-2 py-0.5">
                  100% ORIGINAL SCALE
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalImage(null)}
                className="text-[#c8bca5] hover:text-[#e5ddce] bg-[#292821] hover:bg-[#35342c] p-1.5 border border-[#837967]/40 transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative overflow-auto max-h-[calc(92vh-60px)] p-2 sm:p-4 bg-[#0d0e0b] flex flex-col items-center justify-center">
              <Image
                src={activeModalImage.src}
                alt={activeModalImage.caption}
                width={1400}
                height={800}
                className="w-auto h-auto max-w-full max-h-[75vh] object-contain rounded-sm"
                priority
              />
              {activeModalImage.caption && (
                <p className="mt-3 font-mono text-xs text-[#c8bca5]/90 text-center">
                  {activeModalImage.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ExperienceCard({
  item,
  onSelectImage,
}: {
  item: ExperienceItem;
  onSelectImage: (img: { src: string; caption: string; org: string }) => void;
}) {
  const getIcon = () => {
    switch (item.type) {
      case "internship":
        return <Briefcase className="w-3.5 h-3.5 text-[#9a7655]" />;
      case "education":
        return <GraduationCap className="w-3.5 h-3.5 text-[#c8bca5]" />;
      case "leadership":
        return <Users className="w-3.5 h-3.5 text-[#a7a49a]" />;
      case "volunteering":
        return <HeartHandshake className="w-3.5 h-3.5 text-[#837967]" />;
      default:
        return <Briefcase className="w-3.5 h-3.5 text-[#9a7655]" />;
    }
  };

  return (
    <div className="relative group">
      {/* Node bullet */}
      <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 bg-[#292821] border-2 border-[#9a7655] group-hover:bg-[#e5ddce] transition-colors" />

      <div className="border border-[#837967]/25 bg-[#1e1f19] p-6 sm:p-8 hover:border-[#837967]/50 transition-colors">
        {/* Header row */}
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span className="p-1.5 bg-[#171816] border border-[#837967]/30">
              {getIcon()}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9a7655] font-semibold">
              {item.type}
            </span>
          </div>
          <span className="font-mono text-xs text-[#837967] bg-[#171816]/70 px-2.5 py-1 border border-[#837967]/20">
            {item.period}
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="font-serif text-2xl sm:text-3xl text-[#e5ddce] font-normal mb-1">
          {item.role}
        </h3>
        <p className="font-mono text-xs text-[#c8bca5] uppercase tracking-wider mb-4">
          {item.organization} <span className="text-[#837967]">· {item.location}</span>
        </p>

        {/* Summary */}
        <p className="font-sans text-sm sm:text-base text-[#c8bca5] font-light leading-relaxed mb-4">
          {item.summary}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {item.highlights.map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start space-x-2 text-xs sm:text-sm text-[#c8bca5]/90 font-light"
            >
              <span className="font-mono text-[#9a7655] select-none text-xs mt-0.5">
                •
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Uncropped Documentation Image if available (e.g. Volunteering photo) */}
        {item.imagePath && (
          <div
            className="mb-6 mt-4 border border-[#837967]/35 bg-[#171814] overflow-hidden group/exp cursor-pointer transition-all duration-300 hover:border-[#9a7655]/60 hover:shadow-xl hover:shadow-black/50"
            onClick={() =>
              onSelectImage({
                src: item.imagePath!,
                caption: item.imageCaption || item.organization,
                org: item.organization,
              })
            }
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onSelectImage({
                  src: item.imagePath!,
                  caption: item.imageCaption || item.organization,
                  org: item.organization,
                });
              }
            }}
            aria-label={`View full resolution field record for ${item.organization}`}
          >
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between px-3.5 py-2 bg-[#1f201a] border-b border-[#837967]/25 text-[11px] font-mono select-none">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#837967]/40 group-hover/exp:bg-[#9a7655] transition-colors" />
                <span className="w-2 h-2 rounded-full bg-[#837967]/30" />
                <span className="w-2 h-2 rounded-full bg-[#837967]/30" />
                <span className="text-[#9a7655] ml-2 text-[10px] tracking-wider uppercase font-semibold">
                  FIELD RECORD // {item.organization.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center space-x-1.5 text-[#9a7655] text-[10px] uppercase tracking-wider group-hover/exp:text-[#e5ddce] transition-colors">
                <Maximize2 className="w-3 h-3" />
                <span className="text-[9px]">ENLARGE</span>
              </div>
            </div>

            {/* Exact uncropped image: w-full h-auto object-contain */}
            <div className="relative w-full bg-[#0d0e0b] overflow-hidden flex items-center justify-center p-1 sm:p-1.5">
              <Image
                src={item.imagePath}
                alt={item.imageCaption || `${item.organization} Documentation`}
                width={1200}
                height={700}
                className="w-full h-auto object-contain block transition-transform duration-500 group-hover/exp:scale-[1.01]"
              />
            </div>

            {/* Window Chrome Footer */}
            <div className="px-3 py-1.5 bg-[#171814] border-t border-[#837967]/20 flex items-center justify-between font-mono text-[9px] text-[#837967]/80">
              <span className="truncate max-w-[280px] text-[#c8bca5]/90">
                {item.imageCaption || item.organization}
              </span>
              <span className="text-[#9a7655]">100% UNCROPPED</span>
            </div>
          </div>
        )}

        {/* Tech tags if available */}
        {item.technologies && item.technologies.length > 0 && (
          <div className="pt-4 border-t border-[#837967]/20 flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] text-[#c8bca5] bg-[#171816]/50 border border-[#837967]/30 px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
