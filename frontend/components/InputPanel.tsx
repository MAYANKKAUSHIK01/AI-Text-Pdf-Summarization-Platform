"use client";

import { useState } from "react";

interface Props {
  text: string;
  setText: (value: string) => void;

  setFile: (file: File | null) => void;

  handleSummarize: () => void;

  loading: boolean;

  setSummary?: (value: string) => void;
}

export default function InputPanel({
  text,
  setText,
  setFile,
  handleSummarize,
  loading,
  setSummary,
}: Props) {

  const [inputType, setInputType] = useState<
    "text" | "pdf"
  >("text");

  function switchToText() {

    setInputType("text");

    setFile(null);

    setSummary?.("");
  }

  function switchToPDF() {

    setInputType("pdf");

    setText("");

    setSummary?.("");
  }

  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">

      <h2 className="text-2xl font-bold mb-5">
        Input
      </h2>

      {/* SWITCH BUTTONS */}

      <div className="flex gap-3 mb-6">

        <button
          onClick={switchToText}
          className={`px-4 py-2 rounded-lg border transition ${
            inputType === "text"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          Text
        </button>

        <button
          onClick={switchToPDF}
          className={`px-4 py-2 rounded-lg border transition ${
            inputType === "pdf"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          PDF
        </button>

      </div>

      {/* TEXT INPUT */}

      {inputType === "text" && (

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full h-56 border rounded-xl p-4 resize-none outline-none focus:ring-2 focus:ring-black"
        />

      )}

      {/* PDF INPUT */}

      {inputType === "pdf" && (

        <div className="border-2 border-dashed rounded-2xl p-10 text-center">

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => {

              const file =
                e.target.files?.[0] || null;

              setFile(file);

              setText("");

              setSummary?.("");
            }}
          />

          <p className="text-sm text-gray-500 mt-3">
            Upload PDF file
          </p>

        </div>

      )}

      {/* BUTTON */}

      <button
        onClick={handleSummarize}
        disabled={loading}
        className="w-full mt-6 bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        {loading
          ? "Generating Summary..."
          : "Generate Summary"}
      </button>

    </div>
  );
}