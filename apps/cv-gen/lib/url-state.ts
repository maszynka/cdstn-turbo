import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string"
import type { CvData } from "@/components/cv-generator"

// Compress CV data to a URL-safe string
export function compressCvData(data: CvData): string {
  try {
    return compressToEncodedURIComponent(JSON.stringify(data))
  } catch (error) {
    console.error("Error compressing CV data:", error)
    return ""
  }
}

// Decompress CV data from a URL-safe string
export function decompressCvData(compressed: string): CvData | null {
  try {
    if (!compressed) return null

    const decompressed = decompressFromEncodedURIComponent(compressed)
    if (!decompressed) return null

    return JSON.parse(decompressed) as CvData
  } catch (error) {
    console.error("Error decompressing CV data:", error)
    return null
  }
}

// Create a shareable URL with the CV data
export function createShareableUrl(language: string, data: CvData): string {
  const compressed = compressCvData(data)
  const baseUrl = window.location.origin + window.location.pathname
  return `${baseUrl}#${language}:${compressed}`
}

// Parse a shareable URL to extract language and CV data
export function parseShareableUrl(url: string): { language: string; data: CvData | null } {
  try {
    // Extract hash part (without the # symbol)
    const hashIndex = url.indexOf("#")
    if (hashIndex === -1) {
      return { language: "en", data: null }
    }

    const hash = url.substring(hashIndex + 1)
    const parts = hash.split(":")

    if (parts.length < 2) {
      return { language: "en", data: null }
    }

    const language = parts[0]
    const compressed = parts.slice(1).join(":")

    return {
      language,
      data: decompressCvData(compressed),
    }
  } catch (error) {
    console.error("Error parsing shareable URL:", error)
    return { language: "en", data: null }
  }
}

