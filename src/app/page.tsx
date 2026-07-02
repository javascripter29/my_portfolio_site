import { ContactForm } from "@/components/contact-form";
import { HeroShowcase } from "@/components/hero-showcase";
import { SectionProgress } from "@/components/section-progress";

const services = [
  {
    title: "Лендинги и сайты",
    text: "Собираю быстрые, адаптивные страницы с понятной структурой, аккуратной вёрсткой и фокусом на заявку.",
  },
  {
    title: "Frontend-разработка",
    text: "Разрабатываю интерфейсы на React, Next.js и TypeScript: от отдельных экранов до небольших веб-продуктов.",
  },
  {
    title: "Telegram-боты",
    text: "Делаю Python-ботов и интеграции: заявки, уведомления, простые сценарии автоматизации и связку с сайтом.",
  },
];

const process = [
  "Заявка через форму или мессенджер",
  "Обсуждение задачи, сроков и деталей",
  "Разработка, промежуточные показы и правки",
  "Запуск проекта и финальная проверка",
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#111311] pb-28 text-white">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(180deg,#202220_0%,#111311_42%,#0b0c0b_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(180deg,rgba(255,255,255,.035),transparent)]" />

      <HeroShowcase />
      <SectionProgress />

      <section id="services" data-section-index="1" className="px-4 py-14 sm:px-5 md:px-8 md:py-20">
        <div className="site-card parallax-soft mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-white/10 bg-[#181a18] p-5 shadow-[0_28px_90px_rgba(0,0,0,.42)] sm:p-6 md:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
            <div>
              <p className="eyebrow text-[#78ff8f]">02 / Услуги</p>
              <h2 className="section-title mt-4">Что я делаю</h2>
              <p className="mt-6 max-w-md text-base leading-8 text-white/66">
                Помогаю превращать идею в понятный веб-интерфейс: продумываю
                структуру, верстаю адаптивно, подключаю форму, уведомления и
                базовые интеграции.
              </p>
              <div className="mt-8 grid gap-3 text-sm font-black uppercase tracking-[0.12em] text-white/72">
                <span className="hover-bright cursor-default transition">Чистая вёрстка</span>
                <span className="hover-bright cursor-default transition">Понятный процесс</span>
                <span className="hover-bright cursor-default transition">Запуск без хаоса</span>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {services.map((service, index) => (
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
          <p className="eyebrow text-[#78ff8f]">03 / Этапы</p>
          <h2 className="section-title mt-4 max-w-3xl">Процесс работы</h2>
          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
            {process.map((step, index) => (
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

      <section id="contact" data-section-index="3" className="px-4 py-14 sm:px-5 md:px-8 md:py-20">
        <div className="site-card parallax-soft mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[8px] border border-white/10 bg-[#181a18] p-5 shadow-[0_28px_90px_rgba(0,0,0,.42)] sm:p-6 md:p-10 lg:grid-cols-[.86fr_1fr] lg:p-14">
          <div>
            <p className="eyebrow text-[#78ff8f]">04 / Контакт</p>
            <h2 className="section-title mt-4">Расскажите о задаче</h2>
            <p className="mt-6 text-base leading-8 text-white/64">
              Оставьте контакт и пару слов о проекте. Заявка уйдёт мне в
              Telegram, а я вернусь с уточняющими вопросами и предложу следующий
              шаг.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-5 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm font-bold text-white/46 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Malasaj_dev. Frontend-разработка и Telegram-боты.</p>
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
