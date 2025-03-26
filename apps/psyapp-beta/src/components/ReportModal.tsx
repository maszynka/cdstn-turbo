import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "react-i18next"

interface ReportModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (reason: string) => void
  questionId: number
}

export function ReportModal({ isOpen, onClose, onSubmit, questionId }: ReportModalProps) {
  const [reason, setReason] = useState("")
  const { t } = useTranslation()

  const handleSubmit = () => {
    onSubmit(reason)
    setReason("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("reportQuestion", { id: questionId })}</DialogTitle>
        </DialogHeader>
        <Textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder={t("enterReportReason")}
          className="min-h-[100px]"
        />
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            {t("cancel")}
          </Button>
          <Button onClick={handleSubmit} disabled={!reason.trim()}>
            {t("submit")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

