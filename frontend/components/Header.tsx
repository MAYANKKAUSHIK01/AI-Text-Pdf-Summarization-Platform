export default function Header() {

  return (
    <header className="border-b bg-white">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">

        <img
          src="/favicon.ico"
          alt="Logo"
          className="w-10 h-10"
        />

        <h1 className="text-3xl font-bold">
          AI Summarizer
        </h1>

      </div>

    </header>
  );
}