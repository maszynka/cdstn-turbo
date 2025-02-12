"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, CheckCircle, AlertCircle } from "lucide-react"

type UploadStatus = "idle" | "uploading" | "success" | "error"

export function DropZone() {
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return

    if (!file.type.startsWith("video/")) {
      setErrorMessage("Please upload a video file")
      setUploadStatus("error")
      return
    }

    setUploadStatus("uploading")
    setErrorMessage(null)

    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      setUploadStatus("success")
    } catch (error) {
      console.error("Upload error:", error)
      setErrorMessage("Upload failed. Please try again.")
      setUploadStatus("error")
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "video/*": [] },
    multiple: false,
  })

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center w-full p-6 border-2 border-dashed rounded-lg transition-colors ${
        isDragActive ? "border-primary bg-primary/10" : "border-gray-300"
      } ${uploadStatus === "error" ? "border-red-500 bg-red-50" : ""}`}
    >
      <input {...getInputProps()} />
      <Upload className="w-12 h-12 mb-4 text-gray-400" />
      <p className="mb-2 text-sm text-gray-500">
        {isDragActive ? "Drop the video here" : "Drag & drop a video file here, or click to select"}
      </p>
      <p className="text-xs text-gray-400">MP4, WebM, or OGG (max. 100MB)</p>
      {uploadStatus === "uploading" && <p className="mt-4 text-sm text-blue-500">Uploading...</p>}
      {uploadStatus === "success" && (
        <div className="flex items-center mt-4 text-sm text-green-500">
          <CheckCircle className="w-4 h-4 mr-2" />
          Upload successful!
        </div>
      )}
      {uploadStatus === "error" && (
        <div className="flex items-center mt-4 text-sm text-red-500">
          <AlertCircle className="w-4 h-4 mr-2" />
          {errorMessage || "Upload failed. Please try again."}
        </div>
      )}
    </div>
  )
}
