import { useState } from "react"
import type { Quiz, Question, LLMAnswers } from "../data/quizzes"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { ReportModal } from "./ReportModal"

interface QuizPreviewProps {
  quiz: Quiz
}

export default function QuizPreview({ quiz }: QuizPreviewProps) {
  const { t } = useTranslation()
  const [showAllExplanations, setShowAllExplanations] = useState(false)
  const [reportingQuestionId, setReportingQuestionId] = useState<number | null>(null)

  const handleReport = (questionId: number) => {
    setReportingQuestionId(questionId)
  }

  const handleReportSubmit = (reason: string) => {
    console.log(`Question ${reportingQuestionId} reported. Reason: ${reason}`)
    // Here you would typically send this data to your backend
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-2xl">
            {quiz.title} {t("previewAllQuestions")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Switch id="show-explanations" checked={showAllExplanations} onCheckedChange={setShowAllExplanations} />
            <Label htmlFor="show-explanations">{t("showAllExplanations")}</Label>
          </div>
          <div className="space-y-6">
            {quiz.questions.map((question, index) => (
              <QuestionPreview
                key={question.id}
                question={question}
                showExplanation={showAllExplanations}
                questionNumber={index + 1}
                handleReport={handleReport}
              />
            ))}
          </div>
        </CardContent>
      </Card>
      <ReportModal
        isOpen={reportingQuestionId !== null}
        onClose={() => setReportingQuestionId(null)}
        onSubmit={handleReportSubmit}
        questionId={reportingQuestionId || 0}
      />
    </div>
  )
}

interface QuestionPreviewProps {
  question: Question
  showExplanation: boolean
  questionNumber: number
  handleReport: (questionId: number) => void
}

function QuestionPreview({ question, showExplanation, questionNumber, handleReport }: QuestionPreviewProps) {
  const { t } = useTranslation()
  const [localShowExplanation, setLocalShowExplanation] = useState(false)

  const llmIcons = {
    Claude: "🟣",
    OpenAI: "🟢",
    Deepseek: "🔵",
    gptO1: "🟢",
    dsR1: "🔵",
    sonnet3_5: "🟡",
  }

  const renderLLMAnswerIcons = (optionIndex: number, llmAnswers?: LLMAnswers) => {
    if (!llmAnswers) return null
    return Object.entries(llmAnswers).map(([llm, answer]) =>
      Number(answer) === optionIndex ? (
        <span key={llm} className="ml-1" title={`Answer selected by ${llm}`}>
          {llmIcons[llm as keyof typeof llmIcons]}
        </span>
      ) : null,
    )
  }

  return (
    <div className="border rounded-lg p-4 space-y-2">
      <h3 className="text-lg font-semibold">
        {t("question")} {questionNumber}: {question.text}
      </h3>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`p-2 rounded flex items-center ${
              index === question.correctAnswer ? "bg-green-100 dark:bg-green-800" : ""
            }`}
          >
            <span>{option}</span>
            {index === question.correctAnswer && question.llmAnswer && (
              <span className="ml-2" title={`Correct answer selected by ${question.llmAnswer}`}>
                {llmIcons[question.llmAnswer as keyof typeof llmIcons]}
              </span>
            )}
            {renderLLMAnswerIcons(index, question.llmAnswers)}
          </div>
        ))}
      </div>
      {!showExplanation && (
        <div className="mt-2">
          <Switch
            id={`show-explanation-${question.id}`}
            checked={localShowExplanation}
            onCheckedChange={setLocalShowExplanation}
          />
          <Label htmlFor={`show-explanation-${question.id}`} className="ml-2">
            {t("showExplanation")}
          </Label>
        </div>
      )}
      {(showExplanation || localShowExplanation) && (
        <div className="mt-2">
          <Tabs defaultValue="chosen">
            <TabsList>
              <TabsTrigger value="chosen">{t("chosen")}</TabsTrigger>
              {question.llmExplanations?.gptO1 && <TabsTrigger value="gptO1">GPT-O1</TabsTrigger>}
              {question.llmExplanations?.dsR1 && <TabsTrigger value="dsR1">DS-R1</TabsTrigger>}
              {question.llmExplanations?.sonnet3_5 && <TabsTrigger value="sonnet3_5">Sonnet 3.5</TabsTrigger>}
            </TabsList>
            <TabsContent value="chosen" className="p-2 bg-gray-100 dark:bg-gray-800 rounded mt-2">
              <strong>{t("explanation")}:</strong> {question.explanation}
            </TabsContent>
            {question.llmExplanations?.gptO1 && (
              <TabsContent value="gptO1" className="p-2 bg-gray-100 dark:bg-gray-800 rounded mt-2">
                <strong>GPT-O1 {t("explanation")}:</strong> {question.llmExplanations.gptO1}
              </TabsContent>
            )}
            {question.llmExplanations?.dsR1 && (
              <TabsContent value="dsR1" className="p-2 bg-gray-100 dark:bg-gray-800 rounded mt-2">
                <strong>DS-R1 {t("explanation")}:</strong> {question.llmExplanations.dsR1}
              </TabsContent>
            )}
            {question.llmExplanations?.sonnet3_5 && (
              <TabsContent value="sonnet3_5" className="p-2 bg-gray-100 dark:bg-gray-800 rounded mt-2">
                <strong>Sonnet 3.5 {t("explanation")}:</strong> {question.llmExplanations.sonnet3_5}
              </TabsContent>
            )}
          </Tabs>
          <Button variant="outline" size="sm" className="mt-2" onClick={() => handleReport(question.id)}>
            {t("report")}
          </Button>
        </div>
      )}
    </div>
  )
}

