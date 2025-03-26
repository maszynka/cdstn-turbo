"use client"

import type { CvData, JobExperience } from "./cv-generator"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Printer } from "lucide-react"
import { useRef } from "react"
import { exportToPdf, exportToDocx } from "@/lib/export"
import { useTranslation } from "@/lib/i18n/use-translation"

interface CvPreviewProps {
  cvData: CvData
}

export function CvPreview({ cvData }: CvPreviewProps) {
  const { t } = useTranslation()
  const cvRef = useRef<HTMLDivElement>(null)

  const handleExportPdf = async () => {
    if (cvRef.current) {
      await exportToPdf(cvRef.current)
    }
  }

  const handleExportDocx = async () => {
    await exportToDocx(cvData)
  }

  const handlePrint = () => {
    const printWindow = window.open("", "_blank")
    if (!printWindow) {
      alert("Please allow pop-ups to print your CV")
      return
    }

    // Get the CV content
    const cvContent = cvRef.current?.innerHTML || ""

    const fullName = `${cvData.personalInfo.firstName} ${cvData.personalInfo.lastName}`

    // Create a complete HTML document with proper styling
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${fullName}</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.5;
              color: #000;
              background: #fff;
              margin: 0;
              padding: 20px;
            }
            
            .cv-container {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #eee;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            
            h1 {
              font-size: 24px;
              font-weight: 700;
              margin-bottom: 5px;
              text-align: left;
            }
            
            h2 {
              font-size: 22px;
              font-weight: 600;
              margin-top: 20px;
              margin-bottom: 15px;
              border-bottom: 1px solid #eee;
              padding-bottom: 5px;
            }
            
            h3 {
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 5px;
            }
            
            p {
              margin: 5px 0;
            }
            
            .contact-info {
              text-align: left;
              margin-bottom: 20px;
              font-size: 14px;
              color: #555;
            }
            
            .section {
              margin-bottom: 20px;
            }
            
            .job {
              margin-bottom: 15px;
              position: relative;
            }
            
            .job-header {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
            }
            
            .job-company {
              color: #555;
              font-size: 14px;
            }
            
            .job-date {
              color: #555;
              font-size: 14px;
              white-space: nowrap;
              margin-bottom: 5px;
            }
            
            .job-description {
              margin-top: 5px;
              font-size: 14px;
              white-space: pre-line;
            }


            
            .sub-jobs {
              margin-left: 20px;
              margin-top: 10px;
              padding-left: 10px;
              border-left: 2px solid #eee;
            }
            
            .skills {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
            }
            
            .skill {
              background-color: #f5f5f5;
              padding: 4px 10px;
              border-radius: 15px;
              font-size: 13px;
            }
            
            .summary {
              white-space: pre-line;
            }
            
            .timeline-circle {
              position: absolute;
              left: -20px;
              top: 2.3em;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              border: 2px solid #555;
              background-color: white;
            }
            
            .timeline-line {
              position: absolute;
              left: -15px;
              top: 0;
              bottom: 0;
              width: 2px;
              background-color: #ddd;
            }
            
            .job-duration {
              color: #777;
              font-size: 13px;
              margin-left: 5px;
            }
            
            @media print {
              body {
                padding: 0;
              }
              
              .cv-container {
                box-shadow: none;
                border: none;
                padding: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="cv-container">
            ${cvContent}
          </div>
          <script>
            // Auto print once loaded
            window.onload = function() {
              window.print();
              // setTimeout(function() { window.close(); }, 500);
            };
          </script>
        </body>
      </html>
    `)

    printWindow.document.close()
  }

  // Calculate duration between two dates in years and months
  const calculateDuration = (startDate: string, endDate: string, isPresent: boolean | undefined) => {
    if (!startDate) return ""

    const start = new Date(startDate)
    const end = isPresent ? new Date() : endDate ? new Date(endDate) : new Date()

    const years = end.getFullYear() - start.getFullYear()
    const months = end.getMonth() - start.getMonth()

    let totalMonths = years * 12 + months
    if (totalMonths < 0) totalMonths = 0

    const durationYears = Math.floor(totalMonths / 12)
    const durationMonths = totalMonths % 12

    let result = ""
    if (durationYears > 0) {
      result += `${durationYears} ${durationYears === 1 ? "year" : "years"}`
    }
    if (durationMonths > 0 || durationYears === 0) {
      if (result) result += ", "
      result += `${durationMonths} ${durationMonths === 1 ? "month" : "months"}`
    }

    return result
  }

  const formatDate = (dateString: string, isPresent: boolean | undefined) => {
    if (isPresent) return t("form.present")
    if (!dateString) return t("form.present")
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
  }

  const renderJobExperience = (job: JobExperience, isSubJob = false, isLast = false) => (
    <div key={job.id} className={`${isSubJob ? "ml-8" : ""} pt-8 job relative`}>
      {/* Timeline elements */}
      <div className="timeline-circle"></div>
      <div className="timeline-line"></div>

      {/* Date at the top, left-aligned */}
      <p className="text-sm text-muted-foreground job-date">
        {formatDate(job.startDate, false)} - {formatDate(job.endDate, job.isPresent)}
        <span className="job-duration">
          {" "}
          <span className="opacity-75">&lt;{calculateDuration(job.startDate, job.endDate, job.isPresent)}&gt;</span>
        </span>
      </p>

      <div className="flex justify-between items-start job-header">
        <div>
          <h3 className={`font-semibold ${isSubJob ? "text-base" : "text-xl"}`}>{job.position}</h3>
          <p className="text-muted-foreground job-company">{job.company}</p>
        </div>
      </div>

      {job.description && <p className="mt-2 text-sm job-description whitespace-pre-line">{job.description}</p>}

      {job.subJobs && job.subJobs.length > 0 && (
        <div className="sub-jobs relative">
          {job.subJobs.map((subJob, index) => renderJobExperience(subJob, true, index === job.subJobs.length - 1))}
        </div>
      )}
    </div>
  )

  return (
    <div className="space-y-4">
      <div className="flex justify-end space-x-2 mb-4 print:hidden">
        <Button variant="outline" size="sm" onClick={handleExportPdf} id="export-pdf">
          <Download className="mr-2 h-4 w-4" /> {t("cv.exportPdf")}
        </Button>
        <Button variant="outline" size="sm" onClick={handleExportDocx} id="export-docx">
          <Download className="mr-2 h-4 w-4" /> {t("cv.exportDocx")}
        </Button>
        <Button variant="outline" size="sm" onClick={handlePrint}>
          <Printer className="mr-2 h-4 w-4" /> {t("cv.print")}
        </Button>
      </div>

      <Card className="print:shadow-none">
        <CardContent className="p-8" ref={cvRef}>
          <div className="space-y-6 section">
            {/* Header - Left-aligned */}
            <div className="text-left border-b pb-4">
              <h1 className="text-2xl font-bold">{cvData.personalInfo.fullName}</h1>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground contact-info">
                {cvData.personalInfo.email && <span>{cvData.personalInfo.email}</span>}
                {cvData.personalInfo.phone && (
                  <>
                    <span>•</span>
                    <span>{cvData.personalInfo.phone}</span>
                  </>
                )}
                {cvData.personalInfo.address && (
                  <>
                    <span>•</span>
                    <span>{cvData.personalInfo.address}</span>
                  </>
                )}
              </div>
            </div>

            {/* Summary */}
            {cvData.personalInfo.summary && (
              <div className="section">
                <h2 className="text-2xl font-semibold mb-3">{t("cv.summary")}</h2>
                <p className="whitespace-pre-line summary">{cvData.personalInfo.summary}</p>
              </div>
            )}

            {/* Experience - Increased font size for section title */}
            {cvData.experience.length > 0 && (
              <div className="section">
                <h2 className="text-2xl font-semibold mb-4">{t("cv.experience")}</h2>
                <div className="relative">
                  {cvData.experience.map((job, index) =>
                    renderJobExperience(job, false, index === cvData.experience.length - 1),
                  )}
                </div>
              </div>
            )}

            {/* Education - Increased font size for section title */}
            {cvData.education.length > 0 && (
              <div className="section">
                <h2 className="text-2xl font-semibold mb-4">{t("cv.education")}</h2>
                <div className="space-y-5">
                  {cvData.education.map((edu, index) => (
                    <div key={edu.id} className="job relative">
                      {/* Timeline elements for education */}
                      <div className="timeline-circle"></div>
                      {index < cvData.education.length - 1 && <div className="timeline-line"></div>}

                      {/* Date at the top, left-aligned */}
                      <p className="text-sm text-muted-foreground job-date">
                        {formatDate(edu.startDate, false)} - {formatDate(edu.endDate, edu.isPresent)}
                        <span className="job-duration">
                          {" "}
                          <span className="opacity-75">
                            &lt;{calculateDuration(edu.startDate, edu.endDate, edu.isPresent)}&gt;
                          </span>
                        </span>
                      </p>

                      <div className="flex justify-between items-start job-header">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {edu.degree} in {edu.field}
                          </h3>
                          <p className="text-muted-foreground job-company">{edu.institution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills - Increased font size for section title */}
            {cvData.skills.length > 0 && (
              <div className="section">
                <h2 className="text-2xl font-semibold mb-3">{t("cv.skills")}</h2>
                <div className="flex flex-wrap gap-2 skills">
                  {cvData.skills.map((skill, index) => (
                    <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm skill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

