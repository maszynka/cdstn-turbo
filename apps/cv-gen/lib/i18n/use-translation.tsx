"use client"

import { useLanguageContext } from "./language-provider"

export function useTranslation() {
  const { language, t } = useLanguageContext()

  return {
    language,
    t,
  }
}

