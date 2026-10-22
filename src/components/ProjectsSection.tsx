"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Layers, Cpu, Maximize2, X } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";

interface ModalImageState {
  src: string;
  title: string;
  number: string;
}

export default function ProjectsSection() {
  const projects = PORTFOLIO_DATA.projects;
  const [activeModalImage, setActiveModalImage] = useState<ModalImageState | null>(null);

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
      id="work"
      className="py-24 sm:py-32 bg-[#292821] border-t border-[#837967]/25 relative"
      aria-label="Selected Engineering Work"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9a7655]">
              // 02. SELECTED WORK
            </span>
            <span className="w-12 h-px bg-[#837967]/40" />
            <span className="font-mono text-xs text-[#837967]">
              {projects.length} Featured Systems
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5ddce] leading-tight mb-4 font-normal">
            Systems Engineered for Substance.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#c8bca5] font-light leading-relaxed">
            Applications, real-time pipelines, and enterprise workflows built during internships and independent technical work. Each project highlights real backend architecture, database modeling, and verified individual contributions.
          </p>
        </div>

        {/* Projects Layout */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelectImage={(img) => setActiveModalImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal (Uncropped Full View) */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Screenshot preview for ${activeModalImage.title}`}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#1a1b16] border border-[#837967]/50 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#21221b] border-b border-[#837967]/30">
              <div className="flex items-center space-x-3 font-mono text-xs">
                <span className="text-[#9a7655] font-medium">
                  [{activeModalImage.number}]
                </span>
                <span className="text-[#e5ddce] font-sans font-medium text-sm">
                  {activeModalImage.title}
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

            {/* Modal Image Body: 100% uncropped display */}
            <div className="relative overflow-auto max-h-[calc(92vh-60px)] p-2 sm:p-4 bg-[#0d0e0b] flex items-center justify-center">
              <Image
                src={activeModalImage.src}
                alt={`${activeModalImage.title} Full Screenshot`}
                width={1400}
                height={900}
                className="w-auto h-auto max-w-full max-h-[82vh] object-contain rounded-sm"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onSelectImage,
}: {
  project: Project;
  index: number;
  onSelectImage: (img: ModalImageState) => void;
}) {
  const isEven = index % 2 === 0;

  return (
    <article
      className="border border-[#837967]/30 bg-[#21211b] p-6 sm:p-8 md:p-10 transition-colors hover:border-[#837967]/60 relative group"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Corner tick marks */}
      <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-[#c8bca5]" />
      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-[#c8bca5]" />
      <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-[#c8bca5]" />
      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-[#c8bca5]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Project Meta and Details (7 cols) */}
        <div
          className={`lg:col-span-7 flex flex-col justify-between ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div>
            {/* Index, Category, Timeline Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#837967]/20">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-sm text-[#9a7655] font-medium">
                  [{project.number}]
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#c8bca5] bg-[#171816]/70 px-2.5 py-1 border border-[#837967]/30">
                  {project.category}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#837967]">
                {project.timeline}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3
              id={`project-title-${project.id}`}
              className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#e5ddce] leading-tight mb-2 font-normal"
            >
              {project.title}
            </h3>
            <p className="font-mono text-xs text-[#9a7655] uppercase tracking-wider mb-4">
              {project.subtitle} · <span className="text-[#837967]">{project.role}</span>
            </p>

            {/* Overview / Problem Statement */}
            <div className="space-y-3 mb-6">
              <p className="font-sans text-sm sm:text-base text-[#c8bca5] leading-relaxed">
                {project.summary}
              </p>
              <div className="bg-[#171816]/60 border-l-2 border-[#9a7655] p-3 text-xs font-sans text-[#c8bca5] leading-relaxed">
                <span className="font-mono uppercase text-[#e5ddce] tracking-wider block mb-1">
                  Problem Context:
                </span>
                {project.problemStatement}
              </div>
            </div>

            {/* Key Engineering Contributions */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#e5ddce] mb-3 flex items-center space-x-2">
                <Cpu className="w-3.5 h-3.5 text-[#9a7655]" />
                <span>Verified Engineering Contributions</span>
              </h4>
              <ul className="space-y-2">
                {project.keyContributions.map((contribution, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#c8bca5] font-light leading-normal"
                  >
                    <span className="font-mono text-[#9a7655] text-xs mt-0.5 select-none">
                      →
                    </span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Decisions */}
            <div className="mb-6 bg-[#1a1b16] border border-[#837967]/25 p-4">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#9a7655] mb-2 flex items-center space-x-2">
                <Layers className="w-3 h-3 text-[#9a7655]" />
                <span>Architecture &amp; Trade-Offs</span>
              </h4>
              <ul className="space-y-1.5">
                {project.technicalDecisions.map((decision, idx) => (
                  <li
                    key={idx}
                    className="font-sans text-xs text-[#c8bca5]/90 leading-relaxed"
                  >
                    • {decision}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies & Actions Footer */}
          <div className="pt-4 border-t border-[#837967]/20 flex flex-wrap items-center justify-between gap-4">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] text-[#c8bca5] bg-[#171816]/70 border border-[#837967]/30 px-2.5 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center space-x-3">
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 font-mono text-xs text-[#e5ddce] bg-[#35342c] hover:bg-[#45443a] px-3.5 py-2 border border-[#837967]/40 transition-colors uppercase tracking-wider"
                  aria-label={`View ${project.title} GitHub repository`}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 font-mono text-xs text-[#292821] bg-[#e5ddce] hover:bg-[#c8bca5] px-3.5 py-2 font-medium transition-colors uppercase tracking-wider"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Screenshot / Visual Area (5 cols)
            STRICT REQUIREMENT: NEVER CROP THE SCREENSHOT.
            Renders exact native aspect ratio with architectural window chrome.
            Clickable to open high-res lightbox modal.
        */}
        <div
          className={`lg:col-span-5 w-full ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {project.screenshotPath ? (
            /* Uncropped Screenshot Frame */
            <div
              className="border border-[#837967]/35 bg-[#171814] overflow-hidden group/ss cursor-pointer transition-all duration-300 hover:border-[#9a7655]/60 hover:shadow-xl hover:shadow-black/50"
              onClick={() =>
                onSelectImage({
                  src: project.screenshotPath,
                  title: project.title,
                  number: project.number,
                })
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onSelectImage({
                    src: project.screenshotPath,
                    title: project.title,
                    number: project.number,
                  });
                }
              }}
              aria-label={`View full resolution screenshot of ${project.title}`}
            >
              {/* Window Chrome Header */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#1f201a] border-b border-[#837967]/25 text-[11px] font-mono select-none">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#837967]/40 group-hover/ss:bg-[#9a7655] transition-colors" />
                  <span className="w-2 h-2 rounded-full bg-[#837967]/30" />
                  <span className="w-2 h-2 rounded-full bg-[#837967]/30" />
                  <span className="text-[#837967] ml-2 text-[10px] tracking-wider uppercase">
                    {project.screenshotLabel ? (
                      <span className="text-[#9a7655] font-semibold">{project.screenshotLabel.toUpperCase()} // {project.number}</span>
                    ) : (
                      `SYS.VIEW // ${project.number}`
                    )}
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-[#9a7655] text-[10px] uppercase tracking-wider group-hover/ss:text-[#e5ddce] transition-colors">
                  <Maximize2 className="w-3 h-3" />
                  <span className="text-[9px]">ENLARGE</span>
                </div>
              </div>

              {/* Exact uncropped image: w-full h-auto object-contain */}
              <div className="relative w-full bg-[#0d0e0b] overflow-hidden flex items-center justify-center p-1 sm:p-1.5">
                <Image
                  src={project.screenshotPath}
                  alt={`${project.title} Interface Screenshot`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain block transition-transform duration-500 group-hover/ss:scale-[1.01]"
                  priority={index < 2}
                />
              </div>

              {/* Window Chrome Footer */}
              <div className="px-3 py-1.5 bg-[#171814] border-t border-[#837967]/20 flex items-center justify-between font-mono text-[9px] text-[#837967]/80">
                <span className="truncate max-w-[220px] text-[#c8bca5]/90">
                  {project.screenshotLabel ? `${project.screenshotLabel} · ${project.id}` : project.id}
                </span>
                <span className="text-[#9a7655]">100% UNCROPPED</span>
              </div>
            </div>
          ) : (
            /* Architectural Empty Frame for projects without screenshots */
            <div
              className="relative w-full aspect-[16/10] bg-[#181914] border border-[#837967]/30 overflow-hidden flex flex-col justify-between p-4"
              data-empty-screenshot="true"
              data-project-id={project.id}
            >
              {/* Corner marks for architectural frame */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#837967]/50" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#837967]/50" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#837967]/50" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#837967]/50" />

              {/* Subtle architectural hairline grid inside empty area */}
              <div
                className="absolute inset-0 bg-[radial-gradient(#837967_0.6px,transparent_0.6px)] [background-size:16px_16px] opacity-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Technical container frame metadata (subtle architectural header & footer) */}
              <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#837967]/70 uppercase tracking-widest">
                <span>CANVAS // {project.number}</span>
                <span>ASPECT 16:10</span>
              </div>

              <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-[#837967]/50 uppercase tracking-wider">
                <span>{project.id}</span>
                <span>RESERVED SCREENSHOT FRAME</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
