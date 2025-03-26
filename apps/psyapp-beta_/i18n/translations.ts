import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        subjects: "Subjects",
        showAllExplanations: "Show All Explanations",
        chosen: "Chosen",
        backToQuiz: "Back to Quiz",
        report: "Report",
        examMode: "Exam Mode",
        learningMode: "Learning Mode",
        previewAllQuestions: "Preview All Questions",
        question: "Question",
        explanation: "Explanation",
        showExplanation: "Show Explanation",
        of: "of",
        correct: "Correct!",
        incorrect: "Incorrect. The correct answer is:",
        noExplanation: "No explanation available for this question.",
        nextQuestion: "Next Question",
        previousQuestion: "Previous Question",
        reportQuestion: "Report Question {{id}}",
        enterReportReason: "Enter the reason or source indicating why this question is incorrect",
        cancel: "Cancel",
        submit: "Submit",
        backToSubjects: "Back to Subjects",
        backToQuizzes: "Back to Quizzes",
        startQuiz: "Start Quiz",
        finishQuiz: "Finish Quiz",
        quizResults: "Quiz Results",
        correctAnswers: "You got {{correct}} out of {{total}} questions correct!",
        restartQuiz: "Restart Quiz",
      },
    },
    pl: {
      translation: {
        subjects: "Przedmioty",
        showAllExplanations: "Pokaż wszystkie wyjaśnienia",
        chosen: "Wybrane",
        backToQuiz: "Powrót do quizu",
        report: "Zgłoś",
        examMode: "Tryb egzaminu",
        learningMode: "Tryb nauki",
        previewAllQuestions: "Podgląd wszystkich pytań",
        question: "Pytanie",
        explanation: "Wyjaśnienie",
        showExplanation: "Pokaż wyjaśnienie",
        of: "z",
        correct: "Poprawnie!",
        incorrect: "Niepoprawnie. Prawidłowa odpowiedź to:",
        noExplanation: "Brak wyjaśnienia dla tego pytania.",
        nextQuestion: "Następne pytanie",
        previousQuestion: "Poprzednie pytanie",
        reportQuestion: "Zgłoś pytanie {{id}}",
        enterReportReason: "Podaj powód lub źródło wskazujące, dlaczego to pytanie jest niepoprawne",
        cancel: "Anuluj",
        submit: "Wyślij",
        backToSubjects: "Powrót do przedmiotów",
        backToQuizzes: "Powrót do quizów",
        startQuiz: "Rozpocznij quiz",
        finishQuiz: "Zakończ quiz",
        quizResults: "Wyniki quizu",
        correctAnswers: "Odpowiedziałeś poprawnie na {{correct}} z {{total}} pytań!",
        restartQuiz: "Rozpocznij quiz ponownie",
      },
    },
  },
  lng: "pl", // Set default language to Polish
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

