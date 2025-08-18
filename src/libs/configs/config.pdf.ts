// Generate PDF from HTML content
export const generatePDF = async (data: {
  fullName?: string;
  htmlContent?: string;
}) => {
  const html2canvas = (await import("html2canvas")).default;
  const jsPDF = (await import("jspdf")).default;

  // Create a temporary container if htmlContent is provided
  let element = document.getElementById("pdf-content");

  if (!element && data.htmlContent) {
    element = document.createElement("div");
    element.id = "pdf-content";
    element.innerHTML = data.htmlContent;
    element.style.position = "absolute";
    element.style.left = "-9999px"; // Hide off-screen
    document.body.appendChild(element);
  }

  if (!element) {
    throw new Error("Biodata content not found");
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      width: 794,
      height: 1123,
    });

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [794, 1123],
    });

    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", 0, 0, 794, 1123);

    const fullname = data.fullName?.trim() || "pixelcv";
    const fileName = `${fullname}_pdf.pdf`;

    pdf.save(fileName);
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  } finally {
    // Clean up temporary element if created
    if (data.htmlContent) {
      element?.remove();
    }
  }
};
