import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Илья - frontend-разработчик",
    template: "%s | Илья - frontend-разработчик",
  },
  description:
    "Сайты, лендинги, веб-проекты на React и Next.js, а также Telegram-боты и интеграции.",
  applicationName: "Ilya Portfolio",
  authors: [{ name: "Илья" }],
  keywords: [
    "frontend разработчик",
    "React",
    "Next.js",
    "TypeScript",
    "Telegram бот",
    "лендинг",
    "портфолио",
  ],
  openGraph: {
    title: "Илья - frontend-разработчик",
    description:
      "Аккуратные сайты, веб-проекты и Telegram-интеграции на современном стеке.",
    url: "https://example.com",
    siteName: "Илья - frontend-разработчик",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Илья - frontend-разработчик",
    description:
      "React, Next.js, TypeScript, Telegram-боты и веб-проекты под задачу.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
