export type Language = "ua" | "en" | "ru";

export const languageLabels: Record<Language, string> = {
  ua: "UA",
  en: "EN",
  ru: "RU",
};

export const languages = Object.keys(languageLabels) as Language[];

export const dictionary = {
  ua: {
    nav: {
      hero: "Головна",
      services: "Послуги",
      process: "Етапи",
      projects: "Проєкти",
      contact: "Контакт",
    },
    hero: {
      top: "Frontend / Next.js / Python",
      title: "Сайти",
      titleAccent: "які працюють",
      intro:
        "Я Ілля, frontend-розробник-початківець. Збираю лендинги, веб-інтерфейси на React, Next.js, TypeScript та Telegram-інтеграції/боти на Python.",
      cta: "Залишити заявку",
      logoLabel: "Нагору",
      videoLabel: "Фонове відео головного блоку",
    },
    services: {
      eyebrow: "02 / Послуги",
      title: "Що я роблю",
      intro:
        "Допомагаю перетворити ідею на зрозумілий веб-інтерфейс: продумую структуру, адаптивно верстаю, підключаю форму, сповіщення та базові інтеграції.",
      tags: ["Чиста верстка", "Зрозумілий процес", "Запуск без хаосу"],
      items: [
        {
          title: "Лендинги та сайти",
          text: "Збираю швидкі, адаптивні сторінки зі зрозумілою структурою, акуратною версткою та фокусом на заявку.",
        },
        {
          title: "Frontend-розробка",
          text: "Розробляю інтерфейси на React, Next.js і TypeScript: від окремих екранів до невеликих веб-продуктів.",
        },
        {
          title: "Telegram-боти",
          text: "Роблю Python-ботів та інтеграції: заявки, сповіщення, прості сценарії автоматизації і зв'язку із сайтом.",
        },
      ],
    },
    process: {
      eyebrow: "03 / Етапи",
      title: "Процес роботи",
      steps: [
        "Заявка через форму або месенджер",
        "Обговорення задачі, строків і деталей",
        "Розробка, проміжні покази та правки",
        "Запуск проєкту і фінальна перевірка",
      ],
    },
    projects: {
      eyebrow: "04 / Проєкти",
      title: "Мої проєкти",
      hint: "Гортайте та відкривайте проєкти",
      openLabel: "Відкрити проєкт",
      previewLabel: "Прев'ю проєкту",
      details: "Про проєкт",
      visit: "Відкрити",
    },
    contact: {
      eyebrow: "05 / Контакт",
      title: "Розкажіть про задачу",
      intro:
        "Залиште контакт і кілька слів про проєкт. Заявка піде мені в Telegram, а я повернуся з уточнювальними питаннями та запропоную наступний крок.",
      form: {
        name: "Ім'я *",
        namePlaceholder: "Як до вас звертатися",
        contactMethod: "Спосіб зв'язку *",
        contact: "Контакт *",
        contactPlaceholder: "@username або email",
        message: "Повідомлення",
        messagePlaceholder: "Коротко про проєкт, строки або питання",
        emailOption: "Пошта",
        submit: "Надіслати заявку",
        submitting: "Надсилаю...",
        success: "Дякую, скоро зв'яжуся",
        requiredName: "Вкажіть ім'я.",
        requiredMethod: "Оберіть спосіб зв'язку.",
        requiredContact: "Вкажіть контакт.",
        requiredFields: "Заповніть обов'язкові поля.",
        sendError:
          "Не вдалося надіслати заявку. Напишіть мені напряму в Telegram.",
      },
    },
    footer: {
      copyright:
        "© 2026 Malasaj_dev. Frontend-розробка та Telegram-боти.",
    },
  },
  en: {
    nav: {
      hero: "Home",
      services: "Services",
      process: "Process",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      top: "Frontend / Next.js / Python",
      title: "Websites",
      titleAccent: "that work",
      intro:
        "I'm Ilya, a junior frontend developer. I build landing pages, web interfaces with React, Next.js, TypeScript, and Telegram integrations/bots in Python.",
      cta: "Send a request",
      logoLabel: "Back to top",
      videoLabel: "Hero background video",
    },
    services: {
      eyebrow: "02 / Services",
      title: "What I do",
      intro:
        "I help turn an idea into a clear web interface: structure the page, build responsive layouts, connect forms, notifications, and basic integrations.",
      tags: ["Clean layout", "Clear process", "Launch without chaos"],
      items: [
        {
          title: "Landing pages and sites",
          text: "I build fast, responsive pages with clear structure, careful layout, and a focus on getting the request.",
        },
        {
          title: "Frontend development",
          text: "I develop interfaces with React, Next.js, and TypeScript: from individual screens to small web products.",
        },
        {
          title: "Telegram bots",
          text: "I create Python bots and integrations: requests, notifications, simple automation flows, and site connections.",
        },
      ],
    },
    process: {
      eyebrow: "03 / Process",
      title: "How the work goes",
      steps: [
        "Request through the form or messenger",
        "Discussion of the task, timeline, and details",
        "Development, previews, and edits",
        "Project launch and final check",
      ],
    },
    projects: {
      eyebrow: "04 / Projects",
      title: "My projects",
      hint: "Swipe and open projects",
      openLabel: "Open project",
      previewLabel: "Project preview",
      details: "About project",
      visit: "Visit",
    },
    contact: {
      eyebrow: "05 / Contact",
      title: "Tell me about the task",
      intro:
        "Leave your contact and a few words about the project. The request goes to my Telegram, and I'll come back with clarifying questions and the next step.",
      form: {
        name: "Name *",
        namePlaceholder: "How should I address you",
        contactMethod: "Contact method *",
        contact: "Contact *",
        contactPlaceholder: "@username or email",
        message: "Message",
        messagePlaceholder: "Briefly about the project, timeline, or question",
        emailOption: "Email",
        submit: "Send request",
        submitting: "Sending...",
        success: "Thanks, I'll get back soon",
        requiredName: "Enter your name.",
        requiredMethod: "Choose a contact method.",
        requiredContact: "Enter your contact.",
        requiredFields: "Fill in the required fields.",
        sendError:
          "Could not send the request. Please message me directly on Telegram.",
      },
    },
    footer: {
      copyright:
        "© 2026 Malasaj_dev. Frontend development and Telegram bots.",
    },
  },
  ru: {
    nav: {
      hero: "Главная",
      services: "Услуги",
      process: "Этапы",
      projects: "Мои проекты",
      contact: "Контакт",
    },
    hero: {
      top: "Frontend / Next.js / Python",
      title: "Сайты",
      titleAccent: "которые работают",
      intro:
        "Я Илья, начинающий frontend-разработчик. Собираю лендинги, веб-интерфейсы на React, Next.js, TypeScript и Telegram-интеграции/боты на Python.",
      cta: "Оставить заявку",
      logoLabel: "Наверх",
      videoLabel: "Фоновое видео главного блока",
    },
    services: {
      eyebrow: "02 / Услуги",
      title: "Что я делаю",
      intro:
        "Помогаю превращать идею в понятный веб-интерфейс: продумываю структуру, верстаю адаптивно, подключаю форму, уведомления и базовые интеграции.",
      tags: ["Чистая верстка", "Понятный процесс", "Запуск без хаоса"],
      items: [
        {
          title: "Лендинги и сайты",
          text: "Собираю быстрые, адаптивные страницы с понятной структурой, аккуратной версткой и фокусом на заявку.",
        },
        {
          title: "Frontend-разработка",
          text: "Разрабатываю интерфейсы на React, Next.js и TypeScript: от отдельных экранов до небольших веб-продуктов.",
        },
        {
          title: "Telegram-боты",
          text: "Делаю Python-ботов и интеграции: заявки, уведомления, простые сценарии автоматизации и связку с сайтом.",
        },
      ],
    },
    process: {
      eyebrow: "03 / Этапы",
      title: "Процесс работы",
      steps: [
        "Заявка через форму или мессенджер",
        "Обсуждение задачи, сроков и деталей",
        "Разработка, промежуточные показы и правки",
        "Запуск проекта и финальная проверка",
      ],
    },
    projects: {
      eyebrow: "04 / Проекты",
      title: "Мои проекты",
      hint: "Листайте и открывайте проекты",
      openLabel: "Открыть проект",
      previewLabel: "Превью проекта",
      details: "О проекте",
      visit: "Открыть",
    },
    contact: {
      eyebrow: "05 / Контакт",
      title: "Расскажите о задаче",
      intro:
        "Оставьте контакт и пару слов о проекте. Заявка уйдет мне в Telegram, а я вернусь с уточняющими вопросами и предложу следующий шаг.",
      form: {
        name: "Имя *",
        namePlaceholder: "Как к вам обращаться",
        contactMethod: "Способ связи *",
        contact: "Контакт *",
        contactPlaceholder: "@username или email",
        message: "Сообщение",
        messagePlaceholder: "Коротко о проекте, сроках или вопросе",
        emailOption: "Почта",
        submit: "Отправить заявку",
        submitting: "Отправляю...",
        success: "Спасибо, скоро свяжусь",
        requiredName: "Укажите имя.",
        requiredMethod: "Выберите способ связи.",
        requiredContact: "Укажите контакт.",
        requiredFields: "Заполните обязательные поля.",
        sendError:
          "Не получилось отправить заявку. Напишите мне напрямую в Telegram.",
      },
    },
    footer: {
      copyright:
        "© 2026 Malasaj_dev. Frontend-разработка и Telegram-боты.",
    },
  },
} as const;

export type SiteCopy = (typeof dictionary)[Language];
