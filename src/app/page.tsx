"use client";

import { useEffect, useState } from "react";
import { ContactForm } from "@/components/contact-form";
import { HeroShowcase } from "@/components/hero-showcase";
import { SectionProgress } from "@/components/section-progress";
import { dictionary, type Language } from "@/lib/i18n";

const projects = [
  {
    title: "One Piece",
    url: "one-piece-taupe-delta.vercel.app",
    description: {
      ua: "Сторінка у стилі аніме-всесвіту з яскравою подачею та акцентом на атмосферу.",
      en: "An anime-inspired page with bold presentation and a strong visual mood.",
      ru: "Страница в стиле аниме-вселенной с яркой подачей и акцентом на атмосферу.",
    },
  },
  {
    title: "Emberline Travel",
    url: "emberline-travel.vercel.app",
    description: {
      ua: "Тревел-сайт для добірки напрямків, емоційних фото та швидкого знайомства з турами.",
      en: "A travel site for destinations, atmospheric photos, and quick tour discovery.",
      ru: "Тревел-сайт для направлений, атмосферных фото и быстрого знакомства с турами.",
    },
  },
  {
    title: "Beauty Salon Lisse",
    url: "beauty-salon-lisse.vercel.app",
    description: {
      ua: "Лендінг салону краси з послугами, візуальним ритмом і фокусом на запис.",
      en: "A beauty salon landing page with services, visual rhythm, and booking focus.",
      ru: "Лендинг салона красоты с услугами, визуальным ритмом и фокусом на запись.",
    },
  },
  {
    title: "KinoSearch",
    url: "kinosearch-alpha.vercel.app",
    description: {
      ua: "Інтерфейс для пошуку фільмів з простим сценарієм перегляду результатів.",
      en: "A movie search interface with a simple flow for browsing results.",
      ru: "Интерфейс поиска фильмов с простым сценарием просмотра результатов.",
    },
  },
  {
    title: "Crypto App",
    url: "nextjs-crypto-app-psi.vercel.app",
    description: {
      ua: "Крипто-інтерфейс на Next.js для перегляду ринку та ключових показників.",
      en: "A Next.js crypto interface for market browsing and key metrics.",
      ru: "Крипто-интерфейс на Next.js для просмотра рынка и ключевых показателей.",
    },
  },
  {
    title: "Ukrainian Cuisine",
    url: "ukrainian-cuisine-8nfk.vercel.app",
    description: {
      ua: "Сайт про українську кухню з теплим контентом, стравами та культурним настроєм.",
      en: "A Ukrainian cuisine site with warm content, dishes, and cultural character.",
      ru: "Сайт об украинской кухне с теплым контентом, блюдами и культурным настроением.",
    },
  },
  {
    title: "Shoes Store",
    url: "shoes-store-five-mocha.vercel.app",
    description: {
      ua: "Вітрина магазину взуття з товарними картками та чистою e-commerce подачею.",
      en: "A shoe store showcase with product cards and a clean e-commerce feel.",
      ru: "Витрина магазина обуви с карточками товаров и чистой e-commerce подачей.",
    },
  },
  {
    title: "Grow Site",
    url: "grow-site-snowy.vercel.app",
    description: {
      ua: "Промо-сайт з м'якою структурою, секціями переваг і простим шляхом до дії.",
      en: "A promo site with soft structure, benefit sections, and a clear action path.",
      ru: "Промо-сайт с мягкой структурой, секциями преимуществ и простым путем к действию.",
    },
  },
  {
    title: "Weather App",
    url: "new-weather-app-dun.vercel.app",
    description: {
      ua: "Погодний застосунок з компактною подачею прогнозу та швидким скануванням даних.",
      en: "A weather app with compact forecast presentation and quick data scanning.",
      ru: "Погодное приложение с компактной подачей прогноза и быстрым чтением данных.",
    },
  },
  {
    title: "Furniture Store",
    url: "furniture-store-peach-nu.vercel.app",
    description: {
      ua: "Інтерфейс меблевого магазину з каталоговою логікою та візуальним фокусом на товар.",
      en: "A furniture store interface with catalog logic and product-focused visuals.",
      ru: "Интерфейс мебельного магазина с каталоговой логикой и фокусом на товар.",
    },
  },
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("ua");
  const [flippedProject, setFlippedProject] = useState<string | null>(null);
  const copy = dictionary[language];

  useEffect(() => {
    document.documentElement.lang = language === "ua" ? "uk" : language;
  }, [language]);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#111311] pb-28 text-white">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(180deg,#202220_0%,#111311_42%,#0b0c0b_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(180deg,rgba(255,255,255,.035),transparent)]" />

      <HeroShowcase
        copy={copy}
        language={language}
        onLanguageChange={setLanguage}
      />
      <SectionProgress copy={copy.nav} />

      <section id="services" data-section-index="1" className="px-4 py-14 sm:px-5 md:px-8 md:py-20">
        <div className="site-card parallax-soft mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-white/10 bg-[#181a18] p-5 shadow-[0_28px_90px_rgba(0,0,0,.42)] sm:p-6 md:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
            <div>
              <p className="eyebrow text-[#78ff8f]">{copy.services.eyebrow}</p>
              <h2 className="section-title mt-4">{copy.services.title}</h2>
              <p className="mt-6 max-w-md text-base leading-8 text-white/66">
                {copy.services.intro}
              </p>
              <div className="mt-8 grid gap-3 text-sm font-black uppercase tracking-[0.12em] text-white/72">
                {copy.services.tags.map((tag) => (
                  <span key={tag} className="hover-bright cursor-default transition">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {copy.services.items.map((service, index) => (
                <article
                  key={service.title}
                  className="service-card group rounded-[8px] border border-white/10 bg-black/20 p-5 transition sm:p-6"
                >
                  <span className="text-xs font-black text-[#78ff8f]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 text-[1.35rem] font-black uppercase leading-[1.02] text-white sm:mt-10 sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-white/58">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" data-section-index="2" className="px-4 py-14 sm:px-5 md:px-8 md:py-20">
        <div className="site-card parallax-soft mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-white/10 bg-[#181a18] p-5 shadow-[0_28px_90px_rgba(0,0,0,.42)] sm:p-6 md:p-10 lg:p-14">
          <p className="eyebrow text-[#78ff8f]">{copy.process.eyebrow}</p>
          <h2 className="section-title mt-4 max-w-3xl">{copy.process.title}</h2>
          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
            {copy.process.steps.map((step, index) => (
              <div
                key={step}
                className="process-card grid gap-4 rounded-[8px] border border-white/10 bg-black/20 p-5 transition sm:p-6 md:grid-cols-[4.25rem_1fr]"
              >
                <div className="text-4xl font-black text-[#78ff8f] sm:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex items-center">
                  <p className="text-base font-black uppercase leading-7 text-white sm:text-lg">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" data-section-index="3" className="px-4 py-14 sm:px-5 md:px-8 md:py-20">
        <div className="site-card parallax-soft mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-white/10 bg-[#181a18] p-5 shadow-[0_28px_90px_rgba(0,0,0,.42)] sm:p-6 md:p-10 lg:p-14">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-[#78ff8f]">{copy.projects.eyebrow}</p>
              <h2 className="section-title mt-4 max-w-3xl">{copy.projects.title}</h2>
            </div>
            <p className="max-w-sm text-sm font-bold uppercase leading-6 tracking-[0.12em] text-white/46">
              {copy.projects.hint}
            </p>
          </div>

          <div className="project-carousel mt-10 flex snap-x gap-4 overflow-x-auto pb-4 md:mt-12">
            {projects.map((project) => {
              const href = `https://${project.url}`;
              const isFlipped = flippedProject === project.url;

              return (
                <article
                  key={project.url}
                  className="project-card project-flip group min-w-[78vw] snap-start rounded-[8px] sm:min-w-[28rem] lg:min-w-[34rem]"
                  role="button"
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  onClick={() => setFlippedProject(isFlipped ? null : project.url)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setFlippedProject(isFlipped ? null : project.url);
                    }
                  }}
                >
                  <div className="project-flip__inner" data-flipped={isFlipped}>
                    <div
                      className="project-flip__face project-flip__front overflow-hidden rounded-t-[8px] border border-white/10 bg-black/20 text-left"
                    >
                      <div className="project-preview aspect-[16/10] overflow-hidden bg-[#101210]">
                        <iframe
                          src={href}
                          title={`${copy.projects.previewLabel} ${project.title}`}
                          className="pointer-events-none h-[150%] w-[150%] origin-top-left scale-[0.667] border-0 bg-white"
                          loading="lazy"
                          tabIndex={-1}
                        />
                      </div>
                    </div>

                    <div
                      className="project-flip__face project-flip__back flex rounded-t-[8px] border border-white/10 bg-[#101210] p-5 text-left sm:p-6"
                    >
                      <span className="mt-auto block">
                        <span className="block text-xs font-black uppercase tracking-[0.18em] text-[#78ff8f]">
                          {copy.projects.details}
                        </span>
                        <span className="mt-4 block text-3xl font-black uppercase leading-none text-white sm:text-4xl">
                          {project.title}
                        </span>
                        <span className="mt-5 block max-w-md text-sm font-bold leading-7 text-white/64">
                          {project.description[language]}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-b-[8px] border-x border-b border-white/10 bg-black/20 p-4 sm:p-5">
                    <span className="text-sm font-black uppercase tracking-[0.08em] text-white">
                      {project.title}
                    </span>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-open shrink-0 rounded-full border border-[#78ff8f]/30 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#78ff8f]"
                      onClick={(event) => event.stopPropagation()}
                      aria-label={`${copy.projects.openLabel} ${project.title}`}
                    >
                      {copy.projects.visit}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" data-section-index="4" className="px-4 py-14 sm:px-5 md:px-8 md:py-20">
        <div className="site-card parallax-soft mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[8px] border border-white/10 bg-[#181a18] p-5 shadow-[0_28px_90px_rgba(0,0,0,.42)] sm:p-6 md:p-10 lg:grid-cols-[.86fr_1fr] lg:p-14">
          <div>
            <p className="eyebrow text-[#78ff8f]">{copy.contact.eyebrow}</p>
            <h2 className="section-title mt-4">{copy.contact.title}</h2>
            <p className="mt-6 text-base leading-8 text-white/64">
              {copy.contact.intro}
            </p>
          </div>
          <ContactForm copy={copy.contact.form} />
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-5 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm font-bold text-white/46 md:flex-row md:items-center md:justify-between">
          <p>{copy.footer.copyright}</p>
          <div className="flex flex-wrap gap-5">
            <a className="hover-bright transition" href="https://t.me/illya124" target="_blank">
              Telegram
            </a>
            <a className="hover-bright transition" href="https://discordapp.com/users/1155145604066979840" target="_blank">
              Discord
            </a>
            <a className="hover-bright transition" href="https://github.com/javascripter29" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
