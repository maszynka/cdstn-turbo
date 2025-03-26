"use client"

import { useParams } from "next/navigation"
import Quiz from "../../components/Quiz"

export default function SubjectPage() {
  const params = useParams()
  return <Quiz subjectFromUrl={params.subject as string} />
}

