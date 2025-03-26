import { useState } from "react"
import type { Question } from "../data/quizzes"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { ReportModal } from "./ReportModal"

interface QuizQuestionProps {
  question: Question
  onAnswer: (answerIndex: number) => void
  onPrevious: () => void
  currentQuestion: number
  totalQuestions: number
  isExamMode: boolean
  userAnswer: number | null
}

export default function QuizQuestion({
  question,
  onAnswer,
  onPrevious,
  currentQuestion,
  totalQuestions,
  isExamMode,
  userAnswer,
}: QuizQuestionProps) {
  const { t } = useTranslation()
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(userAnswer)
  const [showReportModal, setShowReportModal] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    if (isExamMode) {
      onAnswer(answerIndex)
    }
  }

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      onAnswer(selectedAnswer)
    }
  }

  const handleReport = () => {
    setShowReportModal(true)
  }

  const handleReportSubmit = (reason: string) => {
    console.log(`Question ${question.id} reported. Reason: ${reason}`)
    // Here you would typically send this data to your backend
  }

  return (
    <>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">
            {t("question")} {currentQuestion} {t("of")} {totalQuestions}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl mb-4">{question.text}</p>
          <div className="grid gap-2">
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                variant={selectedAnswer === index ? "default" : "outline"}
                className={`text-left justify-start h-auto py-3 px-4 ${
                  !isExamMode && selectedAnswer !== null
                    ? index === question.correctAnswer
                      ? "bg-green-100 hover:bg-green-200"
                      : selectedAnswer === index
                        ? "bg-red-100 hover:bg-red-200"
                        : ""
                    : ""
                }`}
              >
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          {!isExamMode && selectedAnswer !== null && (
            <>
              <p className="text-lg font-semibold mb-2">
                {selectedAnswer === question.correctAnswer ? t("correct") : t("incorrect")}
              </p>
              <p className="mb-4">{question.options[question.correctAnswer]}</p>
              <p className="text-lg font-semibold mb-2">{t("explanation")}:</p>
              <p className="mb-4">{question.explanation || t("noExplanation")}</p>
            </>
          )}
          <div className="flex justify-between w-full">
            <Button onClick={onPrevious} disabled={currentQuestion === 1}>
              {t("previousQuestion")}
            </Button>
            <Button onClick={handleNextQuestion}>
              {currentQuestion === totalQuestions ? t("finishQuiz") : t("nextQuestion")}
            </Button>
          </div>
          <Button variant="outline" size="sm" onClick={handleReport} className="mt-2">
            {t("report")}
          </Button>
        </CardFooter>
      </Card>
      <ReportModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        onSubmit={handleReportSubmit}
        questionId={question.id}
      />
    </>
  )
}

