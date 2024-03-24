import React from "react";
import html2pdf from "html2pdf.js";
import "../../styles/downloadPDFButton.css";

const DownloadPDFButton = () => {
  const downloadPDF = () => {
    const element = document.getElementById("descargable");
    if (!element) {
      console.error('Element with id "descargable" not found');
      return;
    }
    const options = {
      margin: 0.5,
      filename: "queCurso.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="col-12 text-center">
      <button
        onClick={downloadPDF}
        className="btn mx-auto fw-bold download-btn"
      >
        Descargar materias en PDF
      </button>
    </div>
  );
};

export default DownloadPDFButton;
