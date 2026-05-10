import pdfParse from "pdf-parse/lib/pdf-parse.js";

export default async function parsePDF(buffer) {
  const data = await pdfParse(buffer);

  return data.text;
}