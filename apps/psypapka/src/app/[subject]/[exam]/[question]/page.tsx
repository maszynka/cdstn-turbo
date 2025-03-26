"use client"

import { useParams } from "next/navigation"
import Quiz from "../../../../components/Quiz"

export default function QuestionPage() {
  const params = useParams()
  return (
    <Quiz
      subjectFromUrl={params.subject as string}
      examFromUrl={params.exam as string}
      initialQuestion={Number.parseInt(params.question as string, 10)}
    />
  )
}

