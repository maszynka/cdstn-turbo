"use client"

import { useParams } from "next/navigation"
import Quiz from "../../../components/Quiz"

export default function ExamPage() {
  const params = useParams()
  return <Quiz initialSubject={params.subject as string} initialExam={params.exam as string} />
}

