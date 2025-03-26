import { useState } from "react"
import type { Question } from "../data/types"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface QuizQuestionProps {
  question: Question
  onAnswer: (answerIndex: number) => void
  currentQuestion: number
  totalQuestions: number
  isExamMode: boolean
}

export default function QuizQuestion({
  question,
  onAnswer,
  currentQuestion,
  totalQuestions,
  isExamMode,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  // Add null check for question
  if (!question || !question.options) {
    return <div>Loading...</div>
  }

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    if (isExamMode) {
      onAnswer(answerIndex)

    }
  }

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      onAnswer(selectedAnswer)
      setSelectedAnswer(null)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">
          Question {currentQuestion} z {totalQuestions}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl mb-4">{question?.text}</p>
        <div className="grid gap-2">
          {question.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(index)}
              variant={selectedAnswer === index ? "default" : "outline"}
              className={`text-left justify-start h-auto py-3 px-4 text-wrap ${
                !isExamMode && selectedAnswer !== null
                  ? index === question.correctAnswer
                    ? "bg-green-400 hover:bg-green-500"
                    : selectedAnswer === index
                      ? "bg-red-400 hover:bg-red-500"
                      : ""
                  : ""
              }`}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
      {!isExamMode && selectedAnswer !== null && (
        <CardFooter className="flex flex-col items-start">
          <p className="text-lg font-semibold mb-2">
            {selectedAnswer === question.correctAnswer ? "Dobrze!" : "Nieprawidłowa odpowiedź."}
          </p>
          <p className="mb-4">{question.options[question.correctAnswer]}</p>
          <p className="text-lg font-semibold mb-2">Wyjaśnienie:</p>
          <p className="mb-4">{question.explanation || "No explanation available for this question."}</p>
          <Button onClick={handleNextQuestion}>Następne pytanie</Button>
        </CardFooter>
      )}
    </Card>
  )
}

