// components/upload/dropzone.tsx
"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, CheckCircle, AlertCircle } from "lucide-react"
import { Upload as TusUpload} from 'tus-js-client';

import * as Progress from '@radix-ui/react-progress'

type UploadStatus = "idle" | "uploading" | "success" | "error"

interface UploadProgress {
  bytesUploaded: number
  bytesTotal: number
}

export function DropZone() {
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [progress, setProgress] = useState<UploadProgress | null>(null)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]

    if (!file) {
      console.log("No file provided or it was not accepted");
    }

    console.log(
      {name: file.name,
        lastModifiedDate: new Date(file.lastModified).toUTCString(),
        size: `${Math.round(file.size / 1024 / 1024)}mb`,
      }
    )


    if (!file.type.startsWith("video/")) {
      setErrorMessage("Please upload a video file")
      setUploadStatus("error")
      return
    }

    setUploadStatus("uploading")
    setErrorMessage(null)

    const upload = new TusUpload(file, {
      endpoint: '/api/dc-upload', // This goes through our secure API route
      retryDelays: [0, 3000, 5000, 10000, 20000],
      metadata: {
        filename: file.name,
        filetype: file.type
      },
      chunkSize: 5 * 1024 * 1024, // 50MB chunks

      onError: (error) => {
        console.error("Upload error:", error)
        setErrorMessage(error.message || "Upload failed. Please try again.")
        setUploadStatus("error")
      },
      onProgress: (bytesUploaded, bytesTotal) => {
        setProgress({
          bytesUploaded,
          bytesTotal
        })
      },
      onSuccess: () => {
        setUploadStatus("success")
      }
    })

    try {
      upload.start()
    } catch (error) {
      console.error("Upload error:", error)
      setErrorMessage(error instanceof Error ? error.message : "Upload failed. Please try again.")
      setUploadStatus("error")
    }

    // const formData = new FormData()
    // formData.append("file", file)



    // try {
    //   const response = await fetch("/api/upload", {
    //     method: "POST",
    //     body: formData,
    //   })

    //   if (!response.ok) {
    //     throw new Error(await response.text())
    //   }

    //   setUploadStatus("success")
    // } catch (error) {
    //   console.error("Upload error:", error)
    //   setErrorMessage(error instanceof Error ? error.message : "Upload failed. Please try again.")
    //   setUploadStatus("error")
    // }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "video/*": [] },
    multiple: false,
    maxSize: 1000 * 1024 * 1024 // 100MB
  })

  const getProgressPercentage = () => {
    if (!progress) return 0
    return Math.round((progress.bytesUploaded / progress.bytesTotal) * 100)
  }

  const dropZonesClassNames = `flex flex-col items-center justify-center w-full p-6 border-2 border-dashed rounded-lg transition-colors ${
    isDragActive ? "border-primary bg-primary/10" : "border-gray-300"
  } ${uploadStatus === "error" ? "border-red-500 bg-red-50" : ""}`;

  return (
    <div
      {...getRootProps({className: dropZonesClassNames})}
      >

      <input {...getInputProps()} />
      <Upload className="w-12 h-12 mb-4 text-gray-400" />
      <p className="mb-2 text-sm text-gray-500">
        {isDragActive ? "Drop the video here" : "Drag & drop a video file here, or click to select"}
      </p>
      <p className="text-xs text-gray-400">MP4, WebM, or OGG (max. 100MB)</p>

      {uploadStatus === "uploading" && progress && (
        <div className="w-full mt-4">
          <Progress.Root className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <Progress.Indicator
              className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </Progress.Root>
          <p className="mt-2 text-sm text-blue-500 text-center">
            Uploading... {getProgressPercentage()}%
          </p>
        </div>
      )}

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