"use client"

import type { CvData, JobExperience } from "./cv-generator"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Printer, Share } from "lucide-react"
import { useRef, useState } from "react"
import { exportToPdf, exportToDocx } from "@/lib/export"
import { useTranslation } from "@/lib/i18n/use-translation"
import { useToast } from "@/components/ui/use-toast"

// In-memory storage for CVs
// In a production app, you would use localStorage, IndexedDB, or a backend service
const CV_STORAGE = new Map()

interface CvPreviewProps {
  cvData: CvData
}

export function CvPreview({ cvData }: CvPreviewProps) {
  const { t } = useTranslation()
  const cvRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()
  const [shareUrl, setShareUrl] = useState<string | null>(null)

  const handleExportPdf = async () => {
    if (cvRef.current) {
      await exportToPdf(cvRef.current)
    }
  }

  const handleExportDocx = async () => {
    await exportToDocx(cvData)
  }
  
  const handleShare = () => {
    // Generate a unique ID for the CV
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    
    // Store the CV data in memory
    CV_STORAGE.set(id, cvData)
    
    // Create the share URL
    const shareUrl = `${window.location.origin}/cv/${id}`
    setShareUrl(shareUrl)
    
    // Copy to clipboard
    navigator.clipboard.writeText(shareUrl)
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
              position: relative;
              position: relative;
              padding-top: 8px;
              padding-bottom: 8px;
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
              margin-bottom: 8px;
            }
            
            .job-description {
              margin-top: 5px;
              font-size: 14px;
              white-space: pre-line;
            }
            
            .sub-jobs {
              margin-top: 10px;
              position: relative;
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
            
            /* Timeline styling */
            .timeline-circle {
              position: absolute;
              left: -22px;
              top: 2.3em;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              border: 2px solid #555;
              background-color: white;
              z-index: 2;
            }
            
            .timeline-line {
              position: absolute;
              left: -15px;
              top: 0;
              bottom: 0;
              width: 2px;
              background-color: #ddd;
              z-index: 1;
            }
            
            .job-duration {
              color: #777;
              font-size: 13px;
              margin-left: 5px;
            }
            
            /* Improved timeline styling */
            .sub-jobs {
              position: relative;
            }
            
            .sub-jobs:before, .sub-jobs:after {
              display: block;
              content: "";
              width: 34px;
              height: 2px;
              background-color: #ddd;
              position: absolute;
              left: -15px;

            }

            .sub-jobs:before {
              top: 0;   
            }

            .sub-jobs:after {
              bottom: 0;   
            }
            
            /* Make relative positioning work better */
            .relative {
              position: relative;
            }
            
            /* Spacing utilities */
            .mt-2 { margin-top: 0.5rem; }
            .mt-4 { margin-top: 1rem; }
            .mb-3 { margin-bottom: 0.75rem; }
            .mb-4 { margin-bottom: 1rem; }
            .ml-8 { margin-left: 2rem; }
            .pb-4 { padding-bottom: 1rem; }
            .pt-8 { padding-top: 2rem; }
            .pb-8 { padding-bottom: 2rem; }
            
            /* Fix border-bottom for section titles */
            h2 {
              padding-bottom: 0.5rem;
              border-bottom: 1px solid #eaeaea;
            }
            
            /* Text utilities */
            .text-sm { font-size: 0.875rem; }
            .text-base { font-size: 1rem; }
            .text-lg { font-size: 1.125rem; }
            .text-xl { font-size: 1.25rem; }
            .text-2xl { font-size: 1.5rem; }
            .font-semibold { font-weight: 600; }
            .font-bold { font-weight: 700; }
            .whitespace-pre-line { white-space: pre-line; }
            .text-muted-foreground { color: #666; }
            
            /* Flex utilities */
            .flex { display: flex; }
            .flex-wrap { flex-wrap: wrap; }
            .items-start { align-items: flex-start; }
            .items-center { align-items: center; }
            .justify-between { justify-content: space-between; }
            .gap-2 { gap: 0.5rem; }
            
            /* Background utilities */
            .bg-muted { background-color: #f5f5f5; }
            
            /* Border utilities */
            .border-b { border-bottom: 1px solid #eaeaea; }
            .rounded-full { border-radius: 9999px; }
            
            /* Add specific fixes for timeline circles */
            .job .timeline-circle {
              background-color: white;
              border: 2px solid #555;
            }
            
            /* Improved sub-jobs styling */
            .sub-jobs .job {
              border-left: none;
            }
            
            @media print {
              
              .timeline-circle,
              .timeline-line {
                print-color-adjust: exact;
                -webkit-print-color-adjust: exact;
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

  const renderJobExperience = (job: JobExperience, isSubJob = false, index: number, length: number) => {

    const isLast =  index === cvData.experience.length - 1;
    const isFirst = index === 0;
    return (

    <div key={job.id} className={`${isSubJob ? "ml-8" : ""} pt-8 job relative ${isLast ? "pb-8" : ""}`}>
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
        <div className="sub-jobs relative mt-4 -pt-8">
          {job.subJobs.map((subJob, index) => renderJobExperience(subJob, true, index, job.subJobs.length))}
        </div>
      )}
    </div>
  )
}

  return (
    <div className="space-y-4 cv-preview-content">
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
                    renderJobExperience(job, false, index, cvData.experience.length),
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

