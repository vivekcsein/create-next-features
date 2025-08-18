"use client";
import React, { useState } from "react";
import BiodataPreview from "./biodata.preview";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import { generatePDF } from "@/libs/configs/config.pdf";
import { BioDataFormInputs, BiodataFullForm } from "./biodata.form";

const BiodataEditorPage = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [formIsEmpty, setFormIsEmpty] = useState(true);
  const [formData, setFormData] = useState<BioDataFormInputs | null>(null);
  const PdfRef = React.useRef<HTMLDivElement>(null);

  const handleBackToForm = () => {
    setShowPreview(false);
  };

  const handleDownloadPDF = async () => {
    try {
      const pdfFile = PdfRef.current;
      if (!pdfFile) return;
      await generatePDF({
        fullName: "PixelCV",
        htmlContent: pdfFile.innerHTML,
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Action Buttons */}
      <div className="flex justify-center">
        {
          // back to form button
          showPreview ? (
            <Button
              onClick={handleBackToForm}
              variant={"outline"}
              className="bg-primary text-primary-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Form
            </Button>
          ) : (
            <Button
              onClick={handleDownloadPDF}
              variant={"gradient"}
              disabled={formIsEmpty}
            >
              <Download className="mr-2 h-5 w-5" />
              Preview & Download PDF
            </Button>
          )
        }
      </div>
      {
        // biodata preview
        showPreview ? (
          <BiodataPreview formData={formData} Ref={PdfRef} />
        ) : (
          <BiodataFullForm
            setFormIsEmpty={setFormIsEmpty}
            setFormData={setFormData}
            setShowPreview={setShowPreview}
          />
        )
      }
    </div>
  );
};

export default BiodataEditorPage;
