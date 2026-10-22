"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function AboutSection() {
  const profile = PORTFOLIO_DATA.profile;

  const corePillars = [
    {
      title: "I build, not just learn",
      description:
        "Developing real software with working features, end-to-end data persistence, and verified individual contributions.",
    },
    {
      title: "I understand systems, not just screens",
      description:
        "Architecting backend services, relational and document schemas, authentication barriers, and event pipelines.",
    },
    {
      title: "Professional internship experience",
      description:
        "Applying engineering disciplines within organizational workflows at Xebia and ONGC GEOPIC.",
    },
    {
      title: "Committed to engineering growth",
      description:
        "Approaching complex problems with technical curiosity, structured trade-off evaluation, and clean code principles.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#24231d] border-t border-[#837967]/25 relative"
      aria-label="About Aditya Baral"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Casual Portrait & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative w-full bg-[#171816] p-2.5 border border-[#837967]/40 shadow-xl group">
              {/* Corner marks */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-[#c8bca5]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-[#c8bca5]" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-[#c8bca5]" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-[#c8bca5]" />

              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#171816]">
                <Image
                  src="/images/aditya-baral-portrait-enhanced.webp"
                  alt="Aditya Baral — Software Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(ellipse 96% 94% at 50% 46%, black 74%, rgba(0,0,0,0.7) 88%, transparent 100%)",
                    maskImage:
                      "radial-gradient(ellipse 96% 94% at 50% 46%, black 74%, rgba(0,0,0,0.7) 88%, transparent 100%)",
                  }}
                  className="object-cover object-top filter grayscale-[10%] contrast-[1.03] brightness-[1.01] group-hover:grayscale-0 group-hover:scale-[1.015] transition-all duration-700 ease-out"
                />

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
                <div
                  className="absolute inset-0 ring-1 ring-inset ring-[#837967]/30 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-2.5 flex items-center justify-between font-mono text-[10px] text-[#837967] uppercase tracking-wider px-1">
                <span>Fig. 02 / Aditya Baral</span>
                <span>Software Developer</span>
              </div>
            </div>

            {/* Quick Education Card */}
            <div className="border border-[#837967]/30 bg-[#1e1f18] p-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#9a7655] block mb-2">
                // Academic Institution
              </span>
              <h4 className="font-serif text-lg text-[#e5ddce] mb-1">
                {profile.education.institution}
              </h4>
              <p className="font-sans text-xs text-[#c8bca5] mb-2">
                {profile.education.degree} · {profile.education.specialization}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-[#837967]/20 font-mono text-xs text-[#9a7655]">
                <span>Graduating {profile.education.graduationYear}</span>
                <span className="text-[#e5ddce] font-medium bg-[#171816] px-2 py-0.5 border border-[#837967]/30">
                  {profile.education.score}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#9a7655]">
                  // 05. PERSPECTIVE &amp; PHILOSOPHY
                </span>
                <span className="w-12 h-px bg-[#837967]/40" />
                <span className="font-mono text-xs text-[#837967]">
                  About Me
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5ddce] leading-tight mb-6 font-normal">
                Beyond the User Interface: Engineering for Reliability.
              </h2>

              <div className="space-y-4 font-sans text-base text-[#c8bca5] font-light leading-relaxed mb-8">
                <p>
                  I am a Computer Science Engineering student at UPES who enjoys building practical software applications and understanding the backend systems that power them.
                </p>
                <p>
                  Through my software development internships at <span className="text-[#e5ddce] font-normal">ONGC GEOPIC</span> and <span className="text-[#e5ddce] font-normal">Xebia</span>, I have worked on applications involving intern resource management, enterprise workflows, APIs, database integration, authentication, and authorization. My project work has also exposed me to real-time event processing, third-party integrations, and backend business logic.
                </p>
                <p>
                  I enjoy breaking complex requirements into manageable components, exploring technical trade-offs, and improving how applications work. I am looking for opportunities to contribute to software development teams, apply my engineering fundamentals, and continue growing as a developer.
                </p>
              </div>

              {/* Core Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#837967]/25 mb-8">
                {corePillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="border border-[#837967]/25 bg-[#1e1f18] p-4 flex flex-col justify-start"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9a7655] shrink-0" />
                      <h4 className="font-mono text-xs uppercase tracking-wider text-[#e5ddce] font-medium">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="font-sans text-xs text-[#c8bca5]/80 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Roles & Callout */}
            <div className="border-l-2 border-[#9a7655] pl-5 py-2 bg-[#171816]/50">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#837967] block mb-1">
                Target Engineering Roles
              </span>
              <p className="font-mono text-xs sm:text-sm text-[#e5ddce]">
                Graduate Software Engineer · Full-Stack Developer (MERN) · Backend Developer (Node.js / Spring Boot)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
