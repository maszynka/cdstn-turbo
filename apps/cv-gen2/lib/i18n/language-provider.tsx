"use client"

import { createContext, useContext, type ReactNode, useEffect } from "react"
import { translations } from "./translations"

interface LanguageContextType {
  language: string
  t: (key: string, params?: Record<string, string>) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  t: (key) => key,
})

interface LanguageProviderProps {
  language: string
  children: ReactNode
}

export function LanguageProvider({ language, children }: LanguageProviderProps) {
  useEffect(() => {
    console.log(`Language provider initialized with: ${language}`)
    // Log a few test translations to verify they're working
    console.log(`Test translation - cv.title: ${t("cv.title")}`)
    console.log(`Test translation - cv.newCv: ${t("cv.newCv")}`)
  }, [language])

  const t = (key: string, params?: Record<string, string>) => {
    // Split the key by dots to access nested properties
    const keys = key.split(".")

    // Get the translation object for the current language or fallback to English
    const translationObj = translations[language] || translations.en

    // Navigate through the nested properties
    let result = translationObj
    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k]
      } else {
        // If the key doesn't exist in the translations, return the key itself
        return key
      }
    }

    // If the result is not a string (e.g., it's an object), return the key
    if (typeof result !== "string") {
      return key
    }

    // Replace parameters if provided
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        result = result.replace(`{{${param}}}`, value)
      })
    }

    return result
  }

  return <LanguageContext.Provider value={{ language, t }}>{children}</LanguageContext.Provider>
}

export const useLanguageContext = () => useContext(LanguageContext)

