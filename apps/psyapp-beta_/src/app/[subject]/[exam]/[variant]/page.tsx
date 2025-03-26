"use client"

import { useParams } from "next/navigation"
import Quiz from "../../../../components/Quiz"

export default function VariantPage() {
  const params = useParams()
  return (
    <Quiz
      initialSubject={params.subject as string}
      initialExam={params.exam as string}
      initialVariant={params.variant as string}
    />
  )
}

