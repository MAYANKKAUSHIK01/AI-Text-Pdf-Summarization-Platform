import parsePDF from "../utils/pdfParser.js";

import buildPrompt from "../services/promptBuilder.js";

import generateSummary from "../services/aiService.js";

export async function summarizeText(req, res) {
  try {
    let textToSummarize = req.body.text || "";

    const summaryLength = req.body.length || "medium";

    const summaryFormat = req.body.format || "paragraphs";

    if (req.file) {
      textToSummarize = await parsePDF(req.file.buffer);
    }

    if (!textToSummarize.trim()) {
      return res.status(400).json({
        error: "Please provide text or upload a PDF.",
      });
    }

    const prompt = buildPrompt({
      text: textToSummarize,
      length: summaryLength,
      format: summaryFormat,
    });

    const summary = await generateSummary(prompt);

    res.json({
      summary,
      originalText: textToSummarize,
    });

  } catch (error) {

  console.error("FULL ERROR:", error);

  res.status(500).json({
    error: error.message,
  });
}
}