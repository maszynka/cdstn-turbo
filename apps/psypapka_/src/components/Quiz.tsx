"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { type Subject, type Quiz as QuizType } from "../data/types"
import SubjectMenu from "./SubjectMenu"
import QuizMenu from "./QuizMenu"
import QuizQuestion from "./QuizQuestion"
import Results from "./Results"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Breadcrumbs from "./Breadcrumbs"
import { subjects } from "@/data/quizess/subjects"
// import { orderToString, stringToOrder, isValidOrder } from "./url-helpers"

interface QuizProps {
  subjectFromUrl?: string
  examFromUrl?: string
  initialVariant?: string
  initialQuestion?: number
}

export default function Quiz({ subjectFromUrl, examFromUrl, initialQuestion }: QuizProps) {
  const router = useRouter()
  const [selectedQuiz, setSelectedQuiz] = useState<QuizType | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isExamMode, setIsExamMode] = useState(false)

  const getCurrentSubject = (): Subject | null => {
    if (!subjectFromUrl) return null;

    const foundedSubject =  subjects.find((s) => s.title.toLowerCase().replace(/\s+/g, "-") === subjectFromUrl);
    return foundedSubject ?? null;
  }

  useEffect(() => {
    if (subjectFromUrl && examFromUrl) {
      const subject = getCurrentSubject();
      if (subject) {
        const quiz = subject.quizzes.find((q) => q.title.toLowerCase().replace(/\s+/g, "-") === examFromUrl)
        if (quiz) {
          setSelectedQuiz(quiz)
          handleQuizSelect(quiz);
        }
      }
    }
  }, [subjectFromUrl, examFromUrl, initialQuestion])

  const handleSubjectSelect = (subject: Subject) => {
    console.log('handleSubjectSelect')
    router.push(`/${subject.title.toLowerCase().replace(/\s+/g, "-")}`)
  }

  const handleQuizSelect = (quiz: QuizType) => {
    console.log('handleQuizSelect')
    const currentSubject = getCurrentSubject();
    if (!currentSubject) return;

    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
    router.push(
      `/${currentSubject.title.toLowerCase().replace(/\s+/g, "-")}/${quiz.title.toLowerCase().replace(/\s+/g, "-")}`
    );
  }

  const handleAnswer = (answerIndex: number) => {
    console.log('handleAnswer')
    const currentSubject = getCurrentSubject();
    if (!currentSubject || !selectedQuiz) return;

    setUserAnswers([...userAnswers, answerIndex])
    if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1
      setCurrentQuestionIndex(nextIndex)
      console.log({nextIndex, currentQuestionIndex})
      // router.push(
      //   `/${currentSubject.title.toLowerCase().replace(/\s+/g, "-")}/${selectedQuiz.title.toLowerCase().replace(/\s+/g, "-")}/${nextIndex + 1}`,
      // )
    } else {
      setShowResults(true)
    }
  }

  const handleRestart = () => {
    console.log('handleRestart')
    const currentSubject = getCurrentSubject();
    if (!currentSubject) return;

    setSelectedQuiz(null)
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setShowResults(false)
    router.push(`/${currentSubject.title.toLowerCase().replace(/\s+/g, "-")}`)
  }

  const toggleMode = () => {
    setIsExamMode(!isExamMode)
  }

  const getBreadcrumbs = () => {
    console.log('getBreadcrumbs')
    const currentSubject = getCurrentSubject();
    const items = [{ label: "Przedmioty", href: "/" }]
    if (currentSubject) {
      items.push({ label: currentSubject.title, href: `/${currentSubject.title.toLowerCase().replace(/\s+/g, "-")}` })
    }
    if (selectedQuiz) {
      items.push({
        label: selectedQuiz.title,
        href: `/${currentSubject!.title.toLowerCase().replace(/\s+/g, "-")}/${selectedQuiz.title.toLowerCase().replace(/\s+/g, "-")}`,
      })
    }
    return items
  }

  const handleBreadcrumbNavigation = (href: string) => {
    console.log('handleBreadcrumbNavigation')
    router.push(href)
  }

  const currentSubject = getCurrentSubject();

  if (!currentSubject) {
    return (
      <div className="container mx-auto p-4">
        <Breadcrumbs items={getBreadcrumbs()} onNavigate={handleBreadcrumbNavigation} />
        <SubjectMenu subjects={subjects} onSelectSubject={handleSubjectSelect} />
      </div>
    )
  }

  if (!selectedQuiz) {
    return (
      <div className="container mx-auto p-4">
        <Breadcrumbs items={getBreadcrumbs()} onNavigate={handleBreadcrumbNavigation} />
        <QuizMenu quizzes={currentSubject.quizzes} onSelectQuiz={handleQuizSelect} />
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="container mx-auto p-4">
        <Breadcrumbs items={getBreadcrumbs()} onNavigate={handleBreadcrumbNavigation} />
        <Results
          quiz={selectedQuiz}
          userAnswers={userAnswers}
          onRestart={handleRestart}
        />
      </div>
    )
  }

  const currentQuestion = selectedQuiz.questions[currentQuestionIndex]

  if (!currentQuestion) {
    return <div className="container mx-auto p-4">Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs items={getBreadcrumbs()} onNavigate={handleBreadcrumbNavigation} />
      <div className="flex items-center justify-end space-x-2 mb-4">
        <Switch id="exam-mode" checked={isExamMode} onCheckedChange={toggleMode} />
        <Label htmlFor="exam-mode">{isExamMode ? "Tryb egzaminu" : "Tryb nauki"}</Label>
      </div>
      <QuizQuestion
        question={currentQuestion}
        onAnswer={handleAnswer}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={selectedQuiz.questions.length}
        isExamMode={isExamMode}
      />
    </div>
  )
}

