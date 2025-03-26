"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { type Subject, type Quiz as QuizType, subjects } from "../data/quizzes"
import SubjectMenu from "./SubjectMenu"
import QuizMenu from "./QuizMenu"
import QuizQuestion from "./QuizQuestion"
import QuizPreview from "./QuizPreview"
import Results from "./Results"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "./Breadcrumbs"
import { useTranslation } from "react-i18next"

interface QuizProps {
  initialSubject?: string
  initialExam?: string
  initialVariant?: string
  initialQuestion?: number
}

export default function Quiz({ initialSubject, initialExam, initialVariant, initialQuestion }: QuizProps) {
  const router = useRouter()
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const [selectedQuiz, setSelectedQuiz] = useState<QuizType | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isExamMode, setIsExamMode] = useState(true)
  const [questionOrder, setQuestionOrder] = useState<number[]>([])
  const [showPreview, setShowPreview] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    if (initialSubject) {
      const subject = subjects.find((s) => s.title.toLowerCase().replace(/\s+/g, "-") === initialSubject)
      if (subject) {
        setSelectedSubject(subject)
        if (initialExam) {
          const quiz = subject.quizzes.find((q) => q.title.toLowerCase().replace(/\s+/g, "-") === initialExam)
          if (quiz) {
            setSelectedQuiz(quiz)
            if (initialVariant) {
              const seed = Number.parseInt(initialVariant, 36)
              const newOrder = shuffleArray([...Array(quiz.questions.length).keys()], seed)
              setQuestionOrder(newOrder)
              if (initialQuestion !== undefined) {
                setCurrentQuestionIndex(initialQuestion - 1)
              }
            }
          }
        }
      }
    }
  }, [initialSubject, initialExam, initialVariant, initialQuestion])

  const shuffleArray = (array: number[], seed: number) => {
    const shuffled = [...array]
    let currentIndex = shuffled.length,
      temporaryValue,
      randomIndex
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280
      return seed / 233280
    }

    while (0 !== currentIndex) {
      randomIndex = Math.floor(random() * currentIndex)
      currentIndex -= 1
      temporaryValue = shuffled[currentIndex]
      shuffled[currentIndex] = shuffled[randomIndex]
      shuffled[randomIndex] = temporaryValue
    }

    return shuffled
  }

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject)
    setSelectedQuiz(null)
    router.push(`/${subject.title.toLowerCase().replace(/\s+/g, "-")}`)
  }

  const handleQuizSelect = (quiz: QuizType) => {
    setSelectedQuiz(quiz)
    const variant = Math.random().toString(36).substring(2, 8)
    const newOrder = shuffleArray([...Array(quiz.questions.length).keys()], Number.parseInt(variant, 36))
    setQuestionOrder(newOrder)
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setShowResults(false)
    router.push(
      `/${selectedSubject!.title.toLowerCase().replace(/\s+/g, "-")}/${quiz.title.toLowerCase().replace(/\s+/g, "-")}/${variant}/1`,
    )
  }

  const handleAnswer = (answerIndex: number) => {
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestionIndex] = answerIndex
    setUserAnswers(newUserAnswers)
    if (currentQuestionIndex < selectedQuiz!.questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1
      setCurrentQuestionIndex(nextIndex)
      router.push(
        `/${selectedSubject!.title.toLowerCase().replace(/\s+/g, "-")}/${selectedQuiz!.title.toLowerCase().replace(/\s+/g, "-")}/${questionOrder.join("")}/${nextIndex + 1}`,
      )
    } else {
      setShowResults(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1
      setCurrentQuestionIndex(prevIndex)
      router.push(
        `/${selectedSubject!.title.toLowerCase().replace(/\s+/g, "-")}/${selectedQuiz!.title.toLowerCase().replace(/\s+/g, "-")}/${questionOrder.join("")}/${prevIndex + 1}`,
      )
    }
  }

  const handleRestart = () => {
    setSelectedQuiz(null)
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setShowResults(false)
    router.push(`/${selectedSubject!.title.toLowerCase().replace(/\s+/g, "-")}`)
  }

  const toggleMode = () => {
    setIsExamMode(!isExamMode)
  }

  const handlePreviewToggle = () => {
    setShowPreview(!showPreview)
  }

  const getBreadcrumbs = () => {
    const items = [{ label: t("subjects"), href: "/" }]
    if (selectedSubject) {
      items.push({ label: selectedSubject.title, href: `/${selectedSubject.title.toLowerCase().replace(/\s+/g, "-")}` })
    }
    if (selectedQuiz) {
      items.push({
        label: selectedQuiz.title,
        href: `/${selectedSubject!.title.toLowerCase().replace(/\s+/g, "-")}/${selectedQuiz.title.toLowerCase().replace(/\s+/g, "-")}`,
      })
    }
    return items
  }

  const handleBreadcrumbNavigation = (href: string) => {
    router.push(href)
  }

  if (!selectedSubject) {
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
        <QuizMenu quizzes={selectedSubject.quizzes} onSelectQuiz={handleQuizSelect} />
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
          questionOrder={questionOrder}
          onRestart={handleRestart}
        />
      </div>
    )
  }

  if (showPreview) {
    return (
      <div className="container mx-auto p-4">
        <Breadcrumbs items={getBreadcrumbs()} onNavigate={handleBreadcrumbNavigation} />
        <Button onClick={handlePreviewToggle} className="mb-4">
          {t("backToQuiz")}
        </Button>
        <QuizPreview quiz={selectedQuiz} />
      </div>
    )
  }

  const currentQuestion = selectedQuiz.questions[questionOrder[currentQuestionIndex]]

  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs items={getBreadcrumbs()} onNavigate={handleBreadcrumbNavigation} />
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Switch id="exam-mode" checked={isExamMode} onCheckedChange={toggleMode} />
          <Label htmlFor="exam-mode">{isExamMode ? t("examMode") : t("learningMode")}</Label>
        </div>
        <Button onClick={handlePreviewToggle}>{t("previewAllQuestions")}</Button>
      </div>
      <QuizQuestion
        question={currentQuestion}
        onAnswer={handleAnswer}
        onPrevious={handlePreviousQuestion}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={selectedQuiz.questions.length}
        isExamMode={isExamMode}
        userAnswer={userAnswers[currentQuestionIndex]}
      />
    </div>
  )
}

