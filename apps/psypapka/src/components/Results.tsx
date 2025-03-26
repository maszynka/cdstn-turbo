import type { Quiz } from "../data/types"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ResultsProps {
  quiz: Quiz
  userAnswers: number[]
  onRestart: () => void
}

export default function Results({ quiz, userAnswers, onRestart }: ResultsProps) {
  const correctAnswers = userAnswers.filter(
    (answer, index) => quiz.questions[userAnswers[index]].correctAnswer === answer,
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
            {quiz.questions.map((question, index) => {
              const isCorrect = question.correctAnswer === userAnswers[index]
              return (
                <div key={question.id} className="border-b pb-2">
                  <p className="font-semibold">{question.text}</p>
                  <p className={isCorrect ? "text-green-600" : "text-red-600"}>
                    Twoja odpowiedź: {question.options[userAnswers[index]]}

                  </p>
                  {!isCorrect && <>
                    <p className="text-green-600">Poprawna odpowiedź:{question.options[question.correctAnswer]}</p>
                    <h4 className="mt-6">wyjaśnienie:</h4>
                    <p className=" font-light">{question.explanation}</p>
                  </>}
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

