"use client";

import { languageLabels, languages, type Language } from "@/lib/i18n";

type LanguageSwitcherProps = {
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageSwitcher({ language, onChange }: LanguageSwitcherProps) {
  return (
    <div
      className="language-switcher"
      aria-label="Language"
      role="group"
    >
      {languages.map((item) => (
        <button
          key={item}
          type="button"
          className="language-switcher__button"
          data-active={language === item}
          onClick={() => onChange(item)}
          aria-pressed={language === item}
        >
          {languageLabels[item]}
        </button>
      ))}
    </div>
  );
}
