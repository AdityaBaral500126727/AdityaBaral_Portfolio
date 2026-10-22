"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

const NAV_ITEMS = [
  { label: "Work", href: "#work", index: "01" },
  { label: "Experience", href: "#experience", index: "02" },
  { label: "Skills", href: "#skills", index: "03" },
  { label: "About", href: "#about", index: "04" },
  { label: "Contact", href: "#contact", index: "05" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#292821]/90 backdrop-blur-md border-b border-[#837967]/25 py-3.5 shadow-md shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Name in plain styled typography - STRICTLY NO LOGO */}
        <a
          href="#"
          className="group flex flex-col focus:outline-none"
          aria-label="Aditya Baral - Back to top"
        >
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#e5ddce] group-hover:text-[#c8bca5] transition-colors">
            {PORTFOLIO_DATA.profile.name}
          </span>
          <span className="font-mono text-[10px] tracking-wider text-[#837967] group-hover:text-[#c8bca5] transition-colors">
            Full-Stack & Backend Systems
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-8"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-baseline space-x-1 text-sm font-sans text-[#c8bca5] hover:text-[#e5ddce] transition-colors"
            >
              <span className="font-mono text-[10px] text-[#837967] group-hover:text-[#9a7655] transition-colors">
                {item.index}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center space-x-5">
          <div className="flex items-center space-x-2 text-[11px] font-mono text-[#c8bca5] border border-[#837967]/30 px-3 py-1 bg-[#171816]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="uppercase tracking-wider">Available</span>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-widest bg-[#e5ddce] text-[#292821] px-4 py-2 hover:bg-[#c8bca5] transition-colors font-medium"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#e5ddce] hover:text-[#c8bca5] border border-[#837967]/30 bg-[#171816]/60 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 top-[60px] bg-[#171816] border-t border-[#837967]/30 z-40 px-6 py-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6 pt-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[#837967] pb-2 border-b border-[#837967]/20">
                // Navigation Index
              </div>
              <ul className="space-y-5">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-baseline justify-between text-2xl font-serif text-[#e5ddce] hover:text-[#c8bca5] transition-colors py-1"
                    >
                      <span className="group-hover:translate-x-2 transition-transform">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs text-[#837967]">
                        [{item.index}]
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-[#837967]/20 space-y-4">
              <div className="font-mono text-[11px] text-[#c8bca5]">
                UPES CSE &apos;27 · Ex-Intern Xebia & ONGC
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-[#e5ddce] text-[#292821] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#c8bca5] transition-colors"
                >
                  Initiate Conversation
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 border border-[#837967]/40 text-[#c8bca5] font-mono text-xs uppercase tracking-widest hover:border-[#e5ddce] transition-colors"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
