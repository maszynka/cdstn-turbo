import "../i18n/translations"
import Quiz from "../components/Quiz"
import { useTranslation } from "react-i18next"

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">{t("subjects")}</h1>
      <Quiz />
    </main>
  )
}

