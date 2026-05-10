"use client";

import { useState } from "react";

import { summarizeAPI } from "@/services/api";

export default function useSummarizer() {

  const [text, setText] = useState("");

  const [summary, setSummary] = useState("");

  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState<File | null>(null);

  const [length, setLength] = useState("medium");

  const [format, setFormat] = useState("paragraphs");

  async function handleSummarize() {

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("text", text);

      formData.append("length", length);

      formData.append("format", format);

      if (file) {
        formData.append("file", file);
      }

      const data = await summarizeAPI(formData);

      setSummary(data.summary);

    } catch (error) {

      console.error(error);

      alert("Failed to summarize");

    } finally {

      setLoading(false);
    }
  }

return {
  text,
  setText,
  summary,
  setSummary,
  loading,
  file,
  setFile,
  length,
  setLength,
  format,
  setFormat,
  handleSummarize,
};
}