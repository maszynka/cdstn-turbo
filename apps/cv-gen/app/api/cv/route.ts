import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for development/demo purposes
const CV_STORAGE = new Map()

export async function POST(request: NextRequest) {
  try {
    const cvData = await request.json()

    // Ensure we have an ID
    if (!cvData.id) {
      return NextResponse.json({ error: "CV data must have an ID" }, { status: 400 })
    }

    // Store in memory (for demo purposes)
    // In a production app, you would use a database or Vercel KV
    CV_STORAGE.set(cvData.id, cvData)

    console.log(`CV saved with ID: ${cvData.id}`)

    return NextResponse.json({ id: cvData.id, success: true })
  } catch (error) {
    console.error("Error saving CV:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}

