"use client"

import { useEffect, useState } from "react"
import { CvGenerator } from "./components/cv-generator"
import { LanguageSelector } from "./components/language-selector"
import { LanguageProvider } from "./lib/i18n/language-provider"
import { decompressFromEncodedURIComponent, compressToEncodedURIComponent } from "lz-string"
import type { CvData } from "./components/cv-generator"
import { DebugTranslations } from "./components/debug-translations"
import { useTranslation } from "./lib/i18n/use-translation"
import "./styles/timeline.css"

// The Title component needs to be inside the LanguageProvider to access translations
function Title() {
  // Import useTranslation from our custom hook
  const { t } = useTranslation()
  return <h1 className="text-3xl font-bold">{t("cv.title")}</h1>
}

export default function App() {
  const [language, setLanguage] = useState("en")
  const [cvData, setCvData] = useState<CvData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load state from URL on initial render
  useEffect(() => {
    const loadStateFromUrl = () => {
      try {
        setIsLoading(true)

        // Get hash from URL (without the # symbol)
        const hash = window.location.hash.substring(1)

        if (hash) {
          // Extract language and data parts
          const parts = hash.split(":")

          if (parts.length >= 2) {
            const urlLang = parts[0]
            const compressedData = parts.slice(1).join(":")

            // Set language from URL
            if (urlLang) {
              console.log(`Setting language from URL: ${urlLang}`)
              setLanguage(urlLang)
            }

            // Decompress and parse CV data
            if (compressedData) {
              const decompressed = decompressFromEncodedURIComponent(compressedData)
              if (decompressed) {
                const parsedData = JSON.parse(decompressed) as CvData
                console.log('parsedData', parsedData);
                setCvData(parsedData)
              }
            }
          }
        } else {
          // If no hash, try to load from localStorage
          const savedData = localStorage.getItem("cv-generator-data")
          if (savedData) {
            setCvData(JSON.parse(savedData))
          }

          // Check for language preference in localStorage
          const savedLang = localStorage.getItem("cv-generator-language")
          if (savedLang) {
            console.log(`Setting language from localStorage: ${savedLang}`)
            setLanguage(savedLang)
          }
        }
      } catch (error) {
        console.error("Error loading state from URL:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadStateFromUrl()

    // Listen for hash changes
    window.addEventListener("hashchange", loadStateFromUrl)
    return () => window.removeEventListener("hashchange", loadStateFromUrl)
  }, [])

  // Update URL when state changes
  useEffect(() => {
    if (!cvData || isLoading) return

    try {
      // Save to localStorage as backup
      localStorage.setItem("cv-generator-data", JSON.stringify(cvData))
      localStorage.setItem("cv-generator-language", language)

      // Compress data for URL
      const compressed = compressToEncodedURIComponent(JSON.stringify(cvData))

      // Update URL hash without triggering a navigation
      const newHash = `#${language}:${compressed}`
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, "", newHash)
      }
    } catch (error) {
      console.error("Error updating URL:", error)
    }
  }, [cvData, language, isLoading])

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <LanguageProvider language={language}>
      <main className="container mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-8">
          <Title />
          <LanguageSelector currentLanguage={language} onLanguageChange={handleLanguageChange} />
        </div>
        <CvGenerator initialData={cvData} onDataChange={setCvData} />
        <DebugTranslations />
      </main>
    </LanguageProvider>
  )
}

