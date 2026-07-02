"use client";

import { useEffect, useMemo, useState } from "react";
import type { SiteCopy } from "@/lib/i18n";

type SectionProgressProps = {
  copy: SiteCopy["nav"];
};

export function SectionProgress({ copy }: SectionProgressProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = useMemo(
    () => [
      { id: "hero", label: copy.hero },
      { id: "services", label: copy.services },
      { id: "process", label: copy.process },
      { id: "contact", label: copy.contact },
    ],
    [copy],
  );

  useEffect(() => {
    let frame = 0;

    function updateProgress() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.16, 220);
        const viewportAnchor = window.scrollY + window.innerHeight * 0.42;
        let nextIndex = 0;

        sections.forEach((section, index) => {
          const element = document.getElementById(section.id);
          if (!element) return;

          if (viewportAnchor >= element.offsetTop) {
            nextIndex = index;
          }
        });

        document.documentElement.style.setProperty("--parallax-y", `${offset}px`);
        setActiveIndex(nextIndex);
      });
    }

    sections.forEach((section, index) => {
      document
        .getElementById(section.id)
        ?.setAttribute("data-section-index", String(index));
    });

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [sections]);

  const fillWidth =
    sections.length > 1 ? `${(activeIndex / (sections.length - 1)) * 100}%` : "0%";

  return (
    <nav
      className="fixed inset-x-3 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 mx-auto w-auto max-w-[25rem] rounded-full border border-white/10 bg-[#111411]/90 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-xl sm:inset-x-auto sm:left-1/2 sm:w-[min(25rem,calc(100vw-2rem))] sm:-translate-x-1/2 sm:px-5 sm:py-4"
      aria-label="Section navigation"
    >
      <div className="mb-2 flex items-center justify-between text-[0.68rem] font-black tabular-nums text-white/72">
        <span>{String(activeIndex + 1).padStart(2, "0")}</span>
        <span>{String(sections.length).padStart(2, "0")}</span>
      </div>
      <div className="relative h-1 rounded-full bg-white/12">
        <span
          className="absolute left-0 top-0 h-full rounded-full bg-[#78ff8f] shadow-[0_0_18px_rgba(120,255,143,.5)] transition-[width] duration-500 ease-out"
          style={{ width: fillWidth }}
        />
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#111411] bg-white/30 transition hover:scale-125 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78ff8f]"
            style={{
              left:
                sections.length > 1
                  ? `${(index / (sections.length - 1)) * 100}%`
                  : "0%",
              backgroundColor:
                activeIndex >= index ? "#78ff8f" : "rgba(255,255,255,.3)",
            }}
            aria-label={section.label}
          />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1 sm:gap-2">
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`truncate text-center text-[0.56rem] font-black uppercase tracking-[0.04em] transition hover:text-white sm:text-[0.62rem] sm:tracking-[0.12em] ${
              activeIndex === index ? "text-[#78ff8f]" : "text-white/42"
            }`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
