const lengthInstructions = {
  short: "Provide a very brief summary.",
  medium: "Provide a balanced summary.",
  long: "Provide a highly detailed summary.",
};

const formatInstructions = {
  bullets: "Format the response using bullet points.",
  paragraphs: "Format the response using paragraphs.",
};

export default function buildPrompt({
  text,
  length,
  format,
}) {
  return `
You are an expert text summarizer.

${lengthInstructions[length]}

${formatInstructions[format]}

Summarize the following text:

${text}
`;
}