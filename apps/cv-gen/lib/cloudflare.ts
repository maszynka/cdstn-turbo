import type { CvData } from "@/components/cv-generator"
import { v4 as uuidv4 } from "uuid"

// Save CV data to storage
export async function saveCV(cvData: CvData): Promise<string> {
  try {
    // Generate an ID if one doesn't exist
    const id = cvData.id || uuidv4()
    const dataToSave = { ...cvData, id }

    const response = await fetch("/api/cv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSave),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Server error:", errorData)
      throw new Error(`Failed to save CV: ${response.status} ${response.statusText}`)
    }

    const result = await response.json()
    return result.id
  } catch (error) {
    console.error("Error saving CV:", error)
    throw error
  }
}

