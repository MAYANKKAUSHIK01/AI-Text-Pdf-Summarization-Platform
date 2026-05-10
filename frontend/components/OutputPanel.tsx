interface Props {
  summary: string;
}

export default function OutputPanel({
  summary,
}: Props) {

  return (
    <div className="bg-white p-6 rounded-xl border h-full">

      <h2 className="text-2xl font-bold mb-4">
        Summary
      </h2>

      <div className="whitespace-pre-wrap">
        {summary || "Summary will appear here"}
      </div>

    </div>
  );
}