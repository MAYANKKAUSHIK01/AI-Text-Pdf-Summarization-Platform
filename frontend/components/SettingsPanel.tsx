interface Props {
  length: string;
  setLength: (value: string) => void;

  format: string;
  setFormat: (value: string) => void;
}

export default function SettingsPanel({
  length,
  setLength,
  format,
  setFormat,
}: Props) {

  return (
    <div className="bg-white p-6 rounded-xl border">

      <h2 className="text-xl font-semibold mb-4">
        Settings
      </h2>

      <div className="space-y-4">

        <div>
          <label className="block mb-2">
            Summary Length
          </label>

          <select
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">
            Summary Format
          </label>

          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="paragraphs">
              Paragraphs
            </option>

            <option value="bullets">
              Bullets
            </option>
          </select>
        </div>

      </div>
    </div>
  );
}