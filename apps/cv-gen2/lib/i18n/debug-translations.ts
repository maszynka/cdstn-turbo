import { translations } from "./translations"

// This function checks if all translation keys are present in all languages
export function validateTranslations() {
  const languages = Object.keys(translations)
  const referenceLanguage = "en" // Use English as the reference

  const missingTranslations: Record<string, string[]> = {}

  // Function to recursively check keys
  function checkKeys(obj: any, path = "", lang: string) {
    if (typeof obj !== "object" || obj === null) return

    Object.keys(obj).forEach((key) => {
      const currentPath = path ? `${path}.${key}` : key

      if (typeof obj[key] === "object" && obj[key] !== null) {
        // Recursively check nested objects
        checkKeys(obj[key], currentPath, lang)
      } else {
        // Check if this key exists in all other languages
        languages.forEach((otherLang) => {
          if (otherLang === lang) return // Skip the current language

          // Navigate to the same path in the other language
          const pathParts = currentPath.split(".")
          let current = translations[otherLang]
          let missing = false

          for (const part of pathParts) {
            if (!current || typeof current !== "object" || !(part in current)) {
              missing = true
              break
            }
            current = current[part]
          }

          if (missing || typeof current !== "string") {
            if (!missingTranslations[otherLang]) {
              missingTranslations[otherLang] = []
            }
            missingTranslations[otherLang].push(currentPath)
          }
        })
      }
    })
  }

  // Start checking from the reference language
  checkKeys(translations[referenceLanguage], "", referenceLanguage)

  return missingTranslations
}

// This function logs the translation structure for debugging
export function logTranslationStructure() {
  console.log("Translation structure:", JSON.stringify(translations, null, 2))
}

// This function tests a specific translation key
export function testTranslation(key: string) {
  const languages = Object.keys(translations)
  const results: Record<string, string> = {}

  languages.forEach((lang) => {
    // Split the key by dots to access nested properties
    const keys = key.split(".")
    let result = translations[lang]

    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k]
      } else {
        result = `[Missing: ${key}]`
        break
      }
    }

    results[lang] = typeof result === "string" ? result : `[Not a string: ${typeof result}]`
  })

  return results
}

