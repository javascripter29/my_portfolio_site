import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  contactMethod?: unknown;
  contact?: unknown;
  message?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = clean(payload.name);
    const contactMethod = clean(payload.contactMethod);
    const contact = clean(payload.contact);
    const message = clean(payload.message);

    if (!name || !contactMethod || !contact) {
      return NextResponse.json(
        { error: "Заполните имя и контакт для связи." },
        { status: 400 },
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Telegram integration is not configured." },
        { status: 500 },
      );
    }

    const text = [
      "Новая заявка с сайта",
      `Имя: ${name}`,
      `Способ связи: ${contactMethod}`,
      `Контакт: ${contact}`,
      message ? `Сообщение: ${message}` : "Сообщение: не указано",
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true,
        }),
      },
    );

    if (!telegramResponse.ok) {
      return NextResponse.json(
        { error: "Telegram request failed." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unexpected request error." },
      { status: 500 },
    );
  }
}
