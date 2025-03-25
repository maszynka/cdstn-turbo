import type { CvData } from "@/components/cv-generator"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx"

// Export CV to PDF
export async function exportToPdf(element: HTMLElement): Promise<void> {
  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    })

    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    })

    const imgProps = pdf.getImageProperties(imgData)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
    pdf.save("cv.pdf")
  } catch (error) {
    console.error("Error exporting to PDF:", error)
    throw error
  }
}

// Calculate duration between two dates in years and months
function calculateDuration(startDate: string, endDate: string, isPresent: boolean | undefined): string {
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

// Export CV to DOCX
export async function exportToDocx(cvData: CvData): Promise<void> {
  try {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // Header with name - left-aligned
            new Paragraph({
              text: cvData.personalInfo.fullName,
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.LEFT,
            }),

            // Contact info - left-aligned
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun(cvData.personalInfo.email || ""),
                cvData.personalInfo.phone ? new TextRun(" • " + cvData.personalInfo.phone) : new TextRun(""),
                cvData.personalInfo.address ? new TextRun(" • " + cvData.personalInfo.address) : new TextRun(""),
              ],
            }),

            // Summary
            ...(cvData.personalInfo.summary
              ? [
                  new Paragraph({
                    text: "Professional Summary",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 400 },
                  }),
                  new Paragraph({
                    text: cvData.personalInfo.summary,
                  }),
                ]
              : []),

            // Experience
            ...(cvData.experience.length > 0
              ? [
                  new Paragraph({
                    text: "Work Experience",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 400 },
                  }),
                  ...cvData.experience.flatMap((job) => [
                    // Date first, left-aligned with duration
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: formatDate(job.startDate) + " - " + formatDate(job.endDate, job.isPresent),
                          size: 22,
                        }),
                        new TextRun({
                          text: " <" + calculateDuration(job.startDate, job.endDate, job.isPresent) + ">",
                          size: 22,
                          color: "777777",
                        }),
                      ],
                      spacing: { before: 200 },
                    }),
                    // Position
                    new Paragraph({
                      text: job.position,
                      heading: HeadingLevel.HEADING_3,
                    }),
                    // Company
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: job.company,
                          bold: true,
                        }),
                      ],
                    }),
                    // Description
                    new Paragraph({
                      text: job.description,
                      spacing: { before: 100 },
                    }),
                    // Sub-jobs
                    ...(job.subJobs && job.subJobs.length > 0
                      ? [
                          new Paragraph({
                            text: "Client Projects:",
                            heading: HeadingLevel.HEADING_4,
                            spacing: { before: 200, left: 200 },
                          }),
                          ...job.subJobs.flatMap((subJob) => [
                            // Date first for sub-jobs
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text:
                                    formatDate(subJob.startDate) + " - " + formatDate(subJob.endDate, subJob.isPresent),
                                  size: 22,
                                }),
                                new TextRun({
                                  text:
                                    " <" + calculateDuration(subJob.startDate, subJob.endDate, subJob.isPresent) + ">",
                                  size: 22,
                                  color: "777777",
                                }),
                              ],
                              spacing: { before: 100, left: 400 },
                            }),
                            // Position and company
                            new Paragraph({
                              text: subJob.position + " at " + subJob.company,
                              heading: HeadingLevel.HEADING_4,
                              spacing: { left: 400 },
                            }),
                            // Description
                            new Paragraph({
                              text: subJob.description,
                              spacing: { before: 100, left: 400 },
                            }),
                          ]),
                        ]
                      : []),
                  ]),
                ]
              : []),

            // Education
            ...(cvData.education.length > 0
              ? [
                  new Paragraph({
                    text: "Education",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 400 },
                  }),
                  ...cvData.education.flatMap((edu) => [
                    // Date first, left-aligned with duration
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: formatDate(edu.startDate) + " - " + formatDate(edu.endDate, edu.isPresent),
                          size: 22,
                        }),
                        new TextRun({
                          text: " <" + calculateDuration(edu.startDate, edu.endDate, edu.isPresent) + ">",
                          size: 22,
                          color: "777777",
                        }),
                      ],
                      spacing: { before: 200 },
                    }),
                    // Degree and field
                    new Paragraph({
                      text: edu.degree + " in " + edu.field,
                      heading: HeadingLevel.HEADING_3,
                    }),
                    // Institution
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: edu.institution,
                          bold: true,
                        }),
                      ],
                    }),
                  ]),
                ]
              : []),

            // Skills
            ...(cvData.skills.length > 0
              ? [
                  new Paragraph({
                    text: "Skills",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 400 },
                  }),
                  new Paragraph({
                    text: cvData.skills.join(", "),
                  }),
                ]
              : []),
          ],
        },
      ],
    })

    const blob = await Packer.toBlob(doc)
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "cv.docx"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error("Error exporting to DOCX:", error)
    throw error
  }
}

// Helper function to format dates
function formatDate(dateString: string, isPresent?: boolean): string {
  if (isPresent) return "Present"
  if (!dateString) return "Present"
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  })
}

