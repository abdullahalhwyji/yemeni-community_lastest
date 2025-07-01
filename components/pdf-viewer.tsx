"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Download, FileText } from "lucide-react"

interface PDFViewerProps {
  title: string
  pdfUrl: string
  triggerText: string
  description?: string
}

export function PDFViewer({ title, pdfUrl, triggerText, description }: PDFViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    // Convert preview URL back to download URL
    const downloadUrl = pdfUrl.replace("/preview", "/view?usp=sharing")
    window.open(downloadUrl, "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full" size="lg">
          <FileText className="mr-2 h-4 w-4" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{title}</span>
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              تحميل / Download
            </Button>
          </DialogTitle>
          {description && <DialogDescription className="text-sm">{description}</DialogDescription>}
        </DialogHeader>
        <div className="flex-1 min-h-0">
          <iframe src={pdfUrl} className="w-full h-full border-0 rounded-md" title={title} loading="lazy" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
