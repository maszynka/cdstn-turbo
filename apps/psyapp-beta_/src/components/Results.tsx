import type { Quiz } from "../data/quizzes"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ResultsProps {
  quiz: Quiz
  userAnswers: number[]
  questionOrder: number[]
  onRestart: () => void
}

export default function Results({ quiz, userAnswers, questionOrder, onRestart }: ResultsProps) {
  const correctAnswers = userAnswers.filter(
    (answer, index) => quiz.questions[questionOrder[index]].correctAnswer === answer,
  ).length

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Quiz Results</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl mb-4">
            You got {correctAnswers} out of {quiz.questions.length} questions correct!
          </p>
          <div className="space-y-4">
            {questionOrder.map((questionIndex, index) => {
              const question = quiz.questions[questionIndex]
              return (
                <div key={question.id} className="border-b pb-2">
                  <p className="font-semibold">{question.text}</p>
                  <p className="text-green-600">Correct answer: {question.options[question.correctAnswer]}</p>
                  <p className={question.correctAnswer === userAnswers[index] ? "text-green-600" : "text-red-600"}>
                    Your answer: {question.options[userAnswers[index]]}
                  </p>
                </div>
              )
            })}
          </div>
          <Button onClick={onRestart} className="mt-6">
            Restart Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

