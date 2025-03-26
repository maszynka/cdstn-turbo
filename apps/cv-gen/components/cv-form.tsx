"use client"

import type React from "react"

import { useState } from "react"
import type { CvData, JobExperience, Education } from "./cv-generator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Trash, ChevronDown, ChevronUp } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import { useTranslation } from "@/lib/i18n/use-translation"

interface CvFormProps {
  cvData: CvData
  setCvData: React.Dispatch<React.SetStateAction<CvData>>
}

export function CvForm({ cvData, setCvData }: CvFormProps) {
  const { t } = useTranslation()
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean
  }>({
    personalInfo: true,
    experience: true,
    education: true,
    skills: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const updatePersonalInfo = (field: string, value: string) => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }))
  }

  const addExperience = () => {
    const newJob: JobExperience = {
      id: uuidv4(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      isOwnCompany: false,
      isPresent: false,
      subJobs: [],
    }

    setCvData((prev) => ({
      ...prev,
      experience: [...prev.experience, newJob],
    }))
  }

  const updateExperience = (index: number, field: string, value: any) => {
    setCvData((prev) => {
      const updatedExperience = [...prev.experience]
      updatedExperience[index] = {
        ...updatedExperience[index],
        [field]: value,
      }

      // If "isPresent" is checked, clear the endDate
      if (field === "isPresent" && value === true) {
        updatedExperience[index].endDate = ""
      }

      return { ...prev, experience: updatedExperience }
    })
  }

  const removeExperience = (index: number) => {
    setCvData((prev) => {
      const updatedExperience = [...prev.experience]
      updatedExperience.splice(index, 1)
      return { ...prev, experience: updatedExperience }
    })
  }

  const addSubJob = (parentIndex: number) => {
    const newSubJob: JobExperience = {
      id: uuidv4(),
      company: "",
      position: "",
      startDate: "",
      location: "",
      endDate: "",
      description: "",
      isOwnCompany: false,
      isPresent: false,
      subJobs: [],
    }

    setCvData((prev) => {
      const updatedExperience = [...prev.experience]
      updatedExperience[parentIndex].subJobs.push(newSubJob)
      return { ...prev, experience: updatedExperience }
    })
  }

  const updateSubJob = (parentIndex: number, subIndex: number, field: string, value: any) => {
    setCvData((prev) => {
      const updatedExperience = [...prev.experience]
      updatedExperience[parentIndex].subJobs[subIndex] = {
        ...updatedExperience[parentIndex].subJobs[subIndex],
        [field]: value,
      }

      // If "isPresent" is checked, clear the endDate
      if (field === "isPresent" && value === true) {
        updatedExperience[parentIndex].subJobs[subIndex].endDate = ""
      }

      return { ...prev, experience: updatedExperience }
    })
  }

  const removeSubJob = (parentIndex: number, subIndex: number) => {
    setCvData((prev) => {
      const updatedExperience = [...prev.experience]
      updatedExperience[parentIndex].subJobs.splice(subIndex, 1)
      return { ...prev, experience: updatedExperience }
    })
  }

  const addEducation = () => {
    const newEducation: Education = {
      id: uuidv4(),
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      isPresent: false,
    }

    setCvData((prev) => ({
      ...prev,
      education: [...prev.education, newEducation],
    }))
  }

  const updateEducation = (index: number, field: string, value: any) => {
    setCvData((prev) => {
      const updatedEducation = [...prev.education]
      updatedEducation[index] = {
        ...updatedEducation[index],
        [field]: value,
      }

      // If "isPresent" is checked, clear the endDate
      if (field === "isPresent" && value === true) {
        updatedEducation[index].endDate = ""
      }

      return { ...prev, education: updatedEducation }
    })
  }

  const removeEducation = (index: number) => {
    setCvData((prev) => {
      const updatedEducation = [...prev.education]
      updatedEducation.splice(index, 1)
      return { ...prev, education: updatedEducation }
    })
  }

  const addSkill = () => {
    setCvData((prev) => ({
      ...prev,
      skills: [...prev.skills, ""],
    }))
  }

  const updateSkill = (index: number, value: string) => {
    setCvData((prev) => {
      const updatedSkills = [...prev.skills]
      updatedSkills[index] = value
      return { ...prev, skills: updatedSkills }
    })
  }

  const removeSkill = (index: number) => {
    setCvData((prev) => {
      const updatedSkills = [...prev.skills]
      updatedSkills.splice(index, 1)
      return { ...prev, skills: updatedSkills }
    })
  }

  return (
    <div className="space-y-8">
      {/* Personal Information */}
      <Card>
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("personalInfo")}>
          <div className="flex justify-between items-center">
            <CardTitle>{t("cv.personalInfo")}</CardTitle>
            {expandedSections.personalInfo ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </CardHeader>
        {expandedSections.personalInfo && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t("form.firstName")}</Label>
                <Input
                  id="firstName"
                  value={cvData.personalInfo.firstName}
                  onChange={(e) => updatePersonalInfo("firstName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{t("form.lastName")}</Label>
                <Input
                  id="lastName"
                  value={cvData.personalInfo.lastName}
                  onChange={(e) => updatePersonalInfo("lastName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("form.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  value={cvData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t("form.phone")}</Label>
                <Input
                  id="phone"
                  value={cvData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">{t("form.address")}</Label>
                <Input
                  id="address"
                  value={cvData.personalInfo.address}
                  onChange={(e) => updatePersonalInfo("address", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="summary">{t("cv.summary")}</Label>
              <Textarea
                id="summary"
                rows={4}
                value={cvData.personalInfo.summary}
                onChange={(e) => updatePersonalInfo("summary", e.target.value)}
                className="font-mono text-sm"
                placeholder={t("form.summary")}
              />
              <p className="text-xs text-muted-foreground">
                Line breaks and spacing will be preserved in the preview and printed CV.
              </p>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Work Experience */}
      <Card>
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("experience")}>
          <div className="flex justify-between items-center">
            <CardTitle>{t("cv.experience")}</CardTitle>
            {expandedSections.experience ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </CardHeader>
        {expandedSections.experience && (
          <CardContent className="space-y-6">
            {cvData.experience.map((job, index) => (
              <div key={job.id} className="space-y-4 border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    {t("form.job")} {index + 1}
                  </h3>
                  <Button variant="destructive" size="sm" onClick={() => removeExperience(index)}>
                    <Trash size={16} />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`company-${index}`}>{t("form.company")}</Label>
                    <Input
                      id={`company-${index}`}
                      value={job.company}
                      onChange={(e) => updateExperience(index, "company", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`position-${index}`}>{t("form.position")}</Label>
                    <Input
                      id={`position-${index}`}
                      value={job.position}
                      onChange={(e) => updateExperience(index, "position", e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`startDate-${index}`}>{t("form.startDate")}</Label>
                    <Input
                      id={`startDate-${index}`}
                      type="date"
                      value={job.startDate}
                      onChange={(e) => updateExperience(index, "startDate", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor={`endDate-${index}`}>{t("form.endDate")}</Label>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={`isPresent-${index}`}
                          checked={job.isPresent}
                          onCheckedChange={(checked) => updateExperience(index, "isPresent", checked)}
                        />
                        <Label htmlFor={`isPresent-${index}`} className="text-sm font-normal">
                          {t("form.present")}
                        </Label>
                      </div>
                    </div>
                    <Input
                      id={`endDate-${index}`}
                      type="date"
                      value={job.endDate}
                      onChange={(e) => updateExperience(index, "endDate", e.target.value)}
                      disabled={job.isPresent}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor={`location-${index}`}>{t("form.location")}</Label>
                    </div>
                    <Input
                      id={`location-${index}`}
                      type="text"
                      value={job.location}
                      onChange={(e) => updateExperience(index, "location", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`description-${index}`}>{t("form.description")}</Label>
                  <Textarea
                    id={`description-${index}`}
                    rows={3}
                    value={job.description}
                    onChange={(e) => updateExperience(index, "description", e.target.value)}
                    className="font-mono text-sm"
                    placeholder={t("form.description")}
                  />
                  <p className="text-xs text-muted-foreground">Line breaks and spacing will be preserved.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id={`isOwnCompany-${index}`}
                    checked={job.isOwnCompany}
                    onCheckedChange={(checked) => updateExperience(index, "isOwnCompany", checked)}
                  />
                  <Label htmlFor={`isOwnCompany-${index}`}>{t("form.ownCompany")}</Label>
                </div>

                {job.isOwnCompany && (
                  <div className="border-l-2 border-gray-200 mt-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-md font-medium">{t("form.clientProjects")}</h4>
                      <Button variant="outline" size="sm" onClick={() => addSubJob(index)}>
                        <Plus size={16} className="mr-1" /> {t("form.addClientProject")}
                      </Button>
                    </div>

                    {job.subJobs.map((subJob, subIndex) => (
                      <div key={subJob.id} className="border rounded-lg p-3 space-y-3 bg-muted/30">
                        <div className="flex justify-between items-center">
                          <h5 className="text-sm font-medium">
                            {t("form.project")} {subIndex + 1}
                          </h5>
                          <Button variant="destructive" size="sm" onClick={() => removeSubJob(index, subIndex)}>
                            <Trash size={16} />
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <Label htmlFor={`subCompany-${index}-${subIndex}`} className="text-sm">
                              {t("form.client")}
                            </Label>
                            <Input
                              id={`subCompany-${index}-${subIndex}`}
                              value={subJob.company}
                              onChange={(e) => updateSubJob(index, subIndex, "company", e.target.value)}
                              className="h-8 text-sm"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`subPosition-${index}-${subIndex}`} className="text-sm">
                              {t("form.role")}
                            </Label>
                            <Input
                              id={`subPosition-${index}-${subIndex}`}
                              value={subJob.position}
                              onChange={(e) => updateSubJob(index, subIndex, "position", e.target.value)}
                              className="h-8 text-sm"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`subStartDate-${index}-${subIndex}`} className="text-sm">
                              {t("form.startDate")}
                            </Label>
                            <Input
                              id={`subStartDate-${index}-${subIndex}`}
                              type="date"
                              value={subJob.startDate}
                              onChange={(e) => updateSubJob(index, subIndex, "startDate", e.target.value)}
                              className="h-8 text-sm"
                            />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <Label htmlFor={`subEndDate-${index}-${subIndex}`} className="text-sm">
                                {t("form.endDate")}
                              </Label>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id={`subIsPresent-${index}-${subIndex}`}
                                  checked={subJob.isPresent}
                                  onCheckedChange={(checked) => updateSubJob(index, subIndex, "isPresent", checked)}
                                  className="h-3 w-3"
                                />
                                <Label htmlFor={`subIsPresent-${index}-${subIndex}`} className="text-xs font-normal">
                                  {t("form.present")}
                                </Label>
                              </div>
                            </div>
                            <Input
                              id={`subEndDate-${index}-${subIndex}`}
                              type="date"
                              value={subJob.endDate}
                              onChange={(e) => updateSubJob(index, subIndex, "endDate", e.target.value)}
                              className="h-8 text-sm"
                              disabled={subJob.isPresent}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`subDescription-${index}-${subIndex}`} className="text-sm">
                            {t("form.description")}
                          </Label>
                          <Textarea
                            id={`subDescription-${index}-${subIndex}`}
                            rows={2}
                            value={subJob.description}
                            onChange={(e) => updateSubJob(index, subIndex, "description", e.target.value)}
                            className="text-sm font-mono"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button onClick={addExperience} className="w-full">
              <Plus size={16} className="mr-2" /> {t("form.addExperience")}
            </Button>
          </CardContent>
        )}
      </Card>

      {/* Education */}
      <Card>
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("education")}>
          <div className="flex justify-between items-center">
            <CardTitle>{t("cv.education")}</CardTitle>
            {expandedSections.education ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </CardHeader>
        {expandedSections.education && (
          <CardContent className="space-y-6">
            {cvData.education.map((edu, index) => (
              <div key={edu.id} className="space-y-4 border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    {t("cv.education")} {index + 1}
                  </h3>
                  <Button variant="destructive" size="sm" onClick={() => removeEducation(index)}>
                    <Trash size={16} />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`institution-${index}`}>{t("form.institution")}</Label>
                    <Input
                      id={`institution-${index}`}
                      value={edu.institution}
                      onChange={(e) => updateEducation(index, "institution", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`degree-${index}`}>{t("form.degree")}</Label>
                    <Input
                      id={`degree-${index}`}
                      value={edu.degree}
                      onChange={(e) => updateEducation(index, "degree", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`field-${index}`}>{t("form.field")}</Label>
                    <Input
                      id={`field-${index}`}
                      value={edu.field}
                      onChange={(e) => updateEducation(index, "field", e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor={`eduStartDate-${index}`}>{t("form.startDate")}</Label>
                      <Input
                        id={`eduStartDate-${index}`}
                        type="date"
                        value={edu.startDate}
                        onChange={(e) => updateEducation(index, "startDate", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor={`eduEndDate-${index}`}>{t("form.endDate")}</Label>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`eduIsPresent-${index}`}
                            checked={edu.isPresent}
                            onCheckedChange={(checked) => updateEducation(index, "isPresent", checked)}
                          />
                          <Label htmlFor={`eduIsPresent-${index}`} className="text-sm font-normal">
                            {t("form.present")}
                          </Label>
                        </div>
                      </div>
                      <Input
                        id={`eduEndDate-${index}`}
                        type="date"
                        value={edu.endDate}
                        onChange={(e) => updateEducation(index, "endDate", e.target.value)}
                        disabled={edu.isPresent}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button onClick={addEducation} className="w-full">
              <Plus size={16} className="mr-2" /> {t("form.addEducation")}
            </Button>
          </CardContent>
        )}
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("skills")}>
          <div className="flex justify-between items-center">
            <CardTitle>{t("cv.skills")}</CardTitle>
            {expandedSections.skills ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </CardHeader>
        {expandedSections.skills && (
          <CardContent className="space-y-4">
            {cvData.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={skill}
                  onChange={(e) => updateSkill(index, e.target.value)}
                  placeholder={t("form.addSkill")}
                />
                <Button variant="destructive" size="icon" onClick={() => removeSkill(index)}>
                  <Trash size={16} />
                </Button>
              </div>
            ))}
            <Button onClick={addSkill} className="w-full">
              <Plus size={16} className="mr-2" /> {t("form.addSkill")}
            </Button>
          </CardContent>
        )}
      </Card>
    </div>
  )
}

