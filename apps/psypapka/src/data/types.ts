export interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Quiz {
  id: number
  title: string
  questions: Question[]
}

export interface Subject {
  id: number
  title: string
  quizzes: Quiz[]
}


