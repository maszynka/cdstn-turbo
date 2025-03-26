import type { Quiz } from "../data/quizzes"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface QuizMenuProps {
  quizzes: Quiz[]
  onSelectQuiz: (quiz: Quiz) => void
}

export default function QuizMenu({ quizzes, onSelectQuiz }: QuizMenuProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose a Quiz</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{quiz.title}</CardTitle>
              <CardDescription>{quiz.questions.length} questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => onSelectQuiz(quiz)} className="w-full">
                Start Quiz
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

