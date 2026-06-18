"use client";

export function generateResumePdf() {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Lakshmeesh_Shet_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
