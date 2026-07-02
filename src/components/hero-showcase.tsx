"use client";

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "Этапы", href: "#process" },
  { label: "Контакт", href: "#contact" },
];

export function HeroShowcase() {
  return (
    <section
      id="hero"
      data-section-index="0"
      className="relative flex min-h-[720px] items-center px-4 pb-20 pt-5 sm:px-5 md:min-h-screen md:px-8 md:pt-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="reference-card reveal-up relative overflow-hidden rounded-[8px] border border-white/10 bg-[#181a18] shadow-[0_34px_120px_rgba(0,0,0,.58)]">
          <div className="reference-grain absolute inset-0" />

          <header className="relative z-20 flex flex-wrap items-center justify-between gap-4 px-4 pt-5 sm:px-7 md:flex-nowrap md:px-14 md:pt-12">
            <a
              href="#hero"
              className="group grid size-9 place-items-center"
              aria-label="Наверх"
            >
              <span className="grid gap-1.5">
                <span className="block h-1.5 w-7 rotate-45 rounded-full bg-[#78ff8f] transition group-hover:bg-white" />
                <span className="block h-1.5 w-7 -rotate-45 rounded-full bg-[#4adf67] transition group-hover:bg-white" />
              </span>
            </a>

            <nav className="hidden items-center gap-10 text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/70 md:flex">
              {navItems.map((item) => (
                <a key={item.href} className="hover-bright transition" href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hover-bright rounded-full border border-[#78ff8f]/35 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.08em] text-white transition hover:border-white sm:px-4 sm:text-xs sm:tracking-[0.12em]"
            >
              Оставить заявку
            </a>
          </header>

          <div className="relative z-10 grid min-h-[580px] gap-10 px-4 pb-7 pt-12 sm:px-7 md:min-h-[620px] md:grid-cols-2 md:px-14 md:pb-12 md:pt-20">
            <div className="flex flex-col justify-center md:pb-12">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/76">
                Frontend / Next.js / Python
              </p>
              <h1 className="mt-4 max-w-xl text-balance text-[clamp(2.7rem,14vw,7.2rem)] font-black uppercase leading-[0.86] tracking-normal text-white sm:text-[clamp(3.5rem,8vw,7.2rem)]">
                Сайты
                <span className="mt-2 block text-[0.62em] leading-none text-[#78ff8f]">
                  которые работают
                </span>
              </h1>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/68 md:text-base">
                Я Илья, начинающий frontend-разработчик. Собираю лендинги,
                веб-интерфейсы на React, Next.js,
                TypeScript и Telegram-интеграции/боты на Python.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="hover-bright grid size-12 place-items-center rounded-full border border-white/18 text-white transition hover:border-white"
                  aria-label="Оставить заявку"
                >
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M5 12h13m-5-5 5 5-5 5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </a>
                <a href="#contact" className="hover-bright text-sm font-black text-white transition">
                  Оставить заявку
                </a>
              </div>
            </div>

            <div className="relative min-h-[18rem] overflow-hidden rounded-[8px] sm:min-h-[22rem] md:min-h-[32rem]">
              <div className="parallax-video-frame absolute inset-0 overflow-hidden rounded-[8px] border border-[#78ff8f]/18 bg-black shadow-[0_30px_90px_rgba(0,0,0,.42)]">
                <video
                  className="h-full w-full object-cover opacity-90 saturate-[.86]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Фоновое видео главного блока"
                >
                  <source src="/background.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,26,20,.08),rgba(20,26,20,.38)),linear-gradient(180deg,rgba(120,255,143,.08),rgba(0,0,0,.42))]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
