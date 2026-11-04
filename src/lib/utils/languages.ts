export const languages = ["en", "tr"] as const;

export type SupportedLanguage = (typeof languages)[number];
