"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "process", label: "Этапы" },
  { id: "contact", label: "Контакт" },
];

export function SectionProgress() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    function updateParallax() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.16, 220);
        document.documentElement.style.setProperty("--parallax-y", `${offset}px`);
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target instanceof HTMLElement) {
          const index = Number(visible.target.dataset.sectionIndex);
          if (!Number.isNaN(index)) {
            setActiveIndex(index);
          }
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55, 0.75],
      },
    );

    sections.forEach((section, index) => {
      const element = document.getElementById(section.id);
      element?.setAttribute("data-section-index", String(index));
      if (element) observer.observe(element);
    });

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateParallax);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 w-[min(25rem,calc(100vw-1rem))] -translate-x-1/2 rounded-full border border-white/10 bg-[#111411]/88 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-xl sm:bottom-5 sm:w-[min(25rem,calc(100vw-2rem))] sm:px-5 sm:py-4"
      aria-label="Навигация по секциям"
    >
      <div className="mb-2 flex items-center justify-between text-[0.68rem] font-black tabular-nums text-white/72">
        <span>{String(activeIndex + 1).padStart(2, "0")}</span>
        <span>{String(sections.length).padStart(2, "0")}</span>
      </div>
      <div className="relative h-px bg-white/12">
        <span
          className="absolute top-1/2 h-px w-1/4 -translate-y-1/2 bg-[#78ff8f] shadow-[0_0_18px_rgba(120,255,143,.5)] transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1 sm:gap-2">
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`truncate text-center text-[0.56rem] font-black uppercase tracking-[0.04em] transition sm:text-[0.62rem] sm:tracking-[0.12em] ${
              activeIndex === index ? "text-[#78ff8f] hover:text-white" : "text-white/42 hover:text-white"
            }`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
