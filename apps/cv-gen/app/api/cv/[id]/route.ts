import { type NextRequest, NextResponse } from "next/server"

// Access the same in-memory storage
// In a production app, you would use a database or Vercel KV
const CV_STORAGE = new Map()

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Retrieve from memory storage
    const cvData = CV_STORAGE.get(id)

    if (!cvData) {
      return NextResponse.json({ error: "CV not found" }, { status: 404 })
    }

    return NextResponse.json(cvData)
  } catch (error) {
    console.error("Error retrieving CV:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}

