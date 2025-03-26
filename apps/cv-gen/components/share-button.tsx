"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import { useState } from "react"
import { createShareableUrl } from "@/lib/url-state"
import { toast } from "@/lib/toast"
import { useTranslation } from "@/lib/i18n/use-translation"
import type { CvData } from "./cv-generator"

interface ShareButtonProps {
  cvData: CvData
}

export function ShareButton({ cvData }: ShareButtonProps) {
  const { t, language } = useTranslation()
  const [isSharing, setIsSharing] = useState(false)

  const handleShare = async () => {
    try {
      setIsSharing(true)
      const url = createShareableUrl(language, cvData)

      // Try to use the Web Share API if available
      if (navigator.share) {
        await navigator.share({
          title: cvData.personalInfo.fullName ? `${cvData.personalInfo.fullName}'s CV` : "CV Generator",
          text: "Check out this CV I created!",
          url: url,
        })
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(url)
        toast({
          title: t("share.copied"),
          description: t("share.urlCopied"),
        })
      }
    } catch (error) {
      console.error("Error sharing:", error)
      toast({
        title: t("share.error"),
        description: t("share.errorSharing"),
        variant: "destructive",
      })
    } finally {
      setIsSharing(false)
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={handleShare} disabled={isSharing} className="gap-2">
      <Share2 className="h-4 w-4" />
      {t("share.share")}
    </Button>
  )
}

