"use client";

import { useState } from "react";
import { Copy, Check, Mail, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = PORTFOLIO_DATA.profile.links.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#292821] border-t border-[#837967]/25 relative"
      aria-label="Contact Information"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mx-auto border border-[#837967]/35 bg-[#1f201a] p-8 sm:p-12 md:p-16 relative">
          {/* Corner tick marks */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#c8bca5]" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#c8bca5]" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#c8bca5]" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#c8bca5]" />

          {/* Section tag */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9a7655]">
              // 06. INITIATE CONTACT
            </span>
            <span className="w-12 h-px bg-[#837967]/40" />
            <span className="font-mono text-xs text-[#837967]">
              Open Channels
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#e5ddce] leading-tight mb-6 font-normal">
            Let&apos;s build systems that matter.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#c8bca5] font-light leading-relaxed mb-10 max-w-2xl">
            I am actively considering Software Developer, Full-Stack, and Backend Engineering opportunities. Whether you have an open engineering role or wish to discuss my projects and experience, I welcome direct correspondence.
          </p>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {/* Email Card with Direct Action & Copy */}
            <div className="border border-[#837967]/30 bg-[#171816] p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#837967] mb-2">
                  <span>PRIMARY INBOX</span>
                  <Mail className="w-3.5 h-3.5 text-[#9a7655]" />
                </div>
                <div className="font-mono text-sm sm:text-base text-[#e5ddce] break-all select-all mb-4">
                  {email}
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-3 border-t border-[#837967]/20">
                <a
                  href={`mailto:${email}`}
                  className="flex-1 text-center py-2 bg-[#e5ddce] text-[#292821] font-mono text-xs uppercase tracking-wider font-medium hover:bg-[#c8bca5] transition-colors"
                >
                  Compose Email
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 border border-[#837967]/40 text-[#c8bca5] hover:text-[#e5ddce] hover:border-[#c8bca5] transition-colors"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Resume & Verification Card */}
            <div className="border border-[#837967]/30 bg-[#171816] p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#837967] mb-2">
                  <span>CURRICULUM VITAE</span>
                  <FileText className="w-3.5 h-3.5 text-[#9a7655]" />
                </div>
                <div className="font-serif text-lg text-[#e5ddce] mb-1">
                  Aditya Baral — Software Developer Resume
                </div>
                <p className="font-sans text-xs text-[#c8bca5] font-light">
                  Complete technical profile, verified internship contributions, and academic credentials.
                </p>
              </div>

              <div className="pt-3 border-t border-[#837967]/20">
                <a
                  href={PORTFOLIO_DATA.profile.links.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center space-x-2 py-2 border border-[#837967]/40 text-[#c8bca5] hover:text-[#e5ddce] hover:border-[#e5ddce] font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  <span>View Verified Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Social Profiles & Verification Bar */}
          <div className="pt-6 border-t border-[#837967]/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <a
                href={PORTFOLIO_DATA.profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#c8bca5] hover:text-[#e5ddce] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <span className="text-[#837967]">/</span>

              <a
                href={PORTFOLIO_DATA.profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#c8bca5] hover:text-[#e5ddce] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <div className="font-mono text-[11px] text-[#837967]">
              Availability: Immediate / Graduate 2027 Cohort
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
