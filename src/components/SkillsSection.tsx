"use client";

import { PORTFOLIO_DATA, SkillCategory } from "@/data/portfolio-data";

export default function SkillsSection() {
  const categories = PORTFOLIO_DATA.skills;

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 bg-[#292821] border-t border-[#837967]/25 relative"
      aria-label="Technical Skills and Capabilities"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9a7655]">
              // 04. TECHNICAL COMPETENCIES
            </span>
            <span className="w-12 h-px bg-[#837967]/40" />
            <span className="font-mono text-xs text-[#837967]">
              7 Engineering Domains
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5ddce] leading-tight mb-4 font-normal">
            Engineering Capabilities.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#c8bca5] font-light leading-relaxed">
            Technologies and concepts practiced across production internship repositories, real-time event platforms, and academic software architecture.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <SkillCard key={cat.id} category={cat} />
          ))}

          {/* Editorial Technical Summary Card filling 8th slot */}
          <div className="border border-[#837967]/35 bg-[#1e1f18] p-6 sm:p-8 flex flex-col justify-between relative md:col-span-2 lg:col-span-2">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#837967]/20">
                <span className="font-mono text-xs text-[#9a7655] uppercase tracking-wider">
                  [08] ENGINEERING PHILOSOPHY
                </span>
                <span className="font-mono text-[11px] text-[#837967]">
                  SYSTEM INTEGRITY
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#e5ddce] mb-3 font-normal">
                Beyond Framework Knowledge: Architecture &amp; Reliability
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#c8bca5] font-light leading-relaxed mb-4">
                I evaluate technologies based on their trade-offs in real applications: prioritizing deterministic validation with Zod, transactional boundaries with Spring Data JPA, non-blocking I/O with Node.js event loops, and clean separation between API gateways and data persistence.
              </p>
            </div>

            <div className="pt-3 border-t border-[#837967]/20 font-mono text-[11px] text-[#9a7655] uppercase tracking-wider flex flex-wrap gap-4">
              <span>✓ Testable REST APIs</span>
              <span>✓ Explicit Type Safety</span>
              <span>✓ Auditable State Machines</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="border border-[#837967]/30 bg-[#21211b] p-6 hover:border-[#837967]/60 transition-colors flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#837967]/20">
          <span className="font-mono text-xs text-[#9a7655] font-medium">
            [{category.index}]
          </span>
          <span className="font-mono text-[10px] text-[#837967] uppercase tracking-wider">
            Verified Stack
          </span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl text-[#e5ddce] mb-2 font-normal">
          {category.title}
        </h3>

        <p className="font-sans text-xs text-[#c8bca5]/90 font-light leading-relaxed mb-5">
          {category.description}
        </p>
      </div>

      <div className="pt-4 border-t border-[#837967]/20 flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-[11px] text-[#c8bca5] bg-[#171816]/60 border border-[#837967]/30 px-2.5 py-1 group-hover:border-[#837967]/50 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
