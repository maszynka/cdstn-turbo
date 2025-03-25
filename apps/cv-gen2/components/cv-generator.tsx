"use client"

import { useState, useEffect } from "react"
import { CvForm } from "./cv-form"
import { CvPreview } from "./cv-preview"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { toast } from "@/lib/toast"
import { Loader2, Save, Trash2 } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"
import { ShareButton } from "./share-button"

export type JobExperience = {
  id: string
  company: string
  position: string
  startDate: string
  location: string
  endDate: string
  description: string
  isOwnCompany: boolean
  isPresent?: boolean
  subJobs: JobExperience[]
}

export type Education = {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  isPresent?: boolean
}

export type CvData = {
  id?: string
  personalInfo: {
    fullName: string
    email: string
    phone: string
    address: string
    summary: string
  }
  experience: JobExperience[]
  education: Education[]
  skills: string[]
}

const initialCvData: CvData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
}

interface CvGeneratorProps {
  initialData: CvData | null
  onDataChange: (data: CvData) => void
}

export function CvGenerator({ initialData, onDataChange }: CvGeneratorProps) {
  const { t } = useTranslation()
  const [cvData, setCvData] = useState<CvData>(initialData || initialCvData)
  const [activeTab, setActiveTab] = useState("edit")
  const [isSaving, setIsSaving] = useState(false)

  // Update parent component when cvData changes
  useEffect(() => {
    onDataChange(cvData)
  }, [cvData, onDataChange])

  const clearLocalData = () => {
    if (window.confirm(t("cv.clearConfirm"))) {
      try {
        localStorage.removeItem("cv-generator-data")
        setCvData(initialCvData)
        toast({
          title: t("cv.dataCleared"),
          description: t("cv.dataCleared"),
        })
      } catch (error) {
        console.error("Error clearing localStorage:", error)
        toast({
          title: "Error",
          description: "Failed to clear data. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          {cvData.personalInfo.fullName ? `${cvData.personalInfo.fullName}'s CV` : t("cv.newCv")}
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={clearLocalData} title={t("common.clear")}>
            <Trash2 className="h-4 w-4 mr-1" /> {t("common.clear")}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="edit">{t("common.edit")}</TabsTrigger>
          <TabsTrigger value="preview">{t("common.preview")}</TabsTrigger>
        </TabsList>
        <TabsContent value="edit" className="mt-6">
          <CvForm cvData={cvData} setCvData={setCvData} />
        </TabsContent>
        <TabsContent value="preview" className="mt-6">
          <CvPreview cvData={cvData} />
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button onClick={() => {}} disabled={isSaving} className="w-32">
          {isSaving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("common.saving")}
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              {t("common.save")}
            </>
          )}
        </Button>

        <div className="flex gap-2">
          <ShareButton cvData={cvData} />
          <Button onClick={() => document.getElementById("export-pdf")?.click()} variant="outline">
            {t("cv.exportPdf")}
          </Button>
          <Button onClick={() => document.getElementById("export-docx")?.click()} variant="outline">
            {t("cv.exportDocx")}
          </Button>
        </div>
      </div>

      <div className="text-xs text-muted-foreground text-center">
        {t("cv.autoSave")}
        <br />
        {t("cv.wontLose")}
      </div>
    </div>
  )
}

