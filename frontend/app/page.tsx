"use client";

import Header from "@/components/Header";

import InputPanel from "@/components/InputPanel";

import OutputPanel from "@/components/OutputPanel";

import SettingsPanel from "@/components/SettingsPanel";

import useSummarizer from "@/hooks/useSummarizer";

export default function Home() {

  const summarizer = useSummarizer();

  return (
    <div className="min-h-screen bg-slate-100">

      <Header />

      <main className="max-w-7xl mx-auto p-6 grid lg:grid-cols-12 gap-6">

        <div className="lg:col-span-5 space-y-6">

          <SettingsPanel
            length={summarizer.length}
            setLength={summarizer.setLength}
            format={summarizer.format}
            setFormat={summarizer.setFormat}
          />

          <InputPanel
            text={summarizer.text}
            setText={summarizer.setText}
            setFile={summarizer.setFile}
            handleSummarize={summarizer.handleSummarize}
            loading={summarizer.loading}
            setSummary={summarizer.setSummary}
          />

        </div>

        <div className="lg:col-span-7">

          <OutputPanel
            summary={summarizer.summary}
          />

        </div>

      </main>
    </div>
  );
}