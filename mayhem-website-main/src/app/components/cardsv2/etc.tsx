export function StrikeTable() {
  const rows = [
    { offense: "Offense 1", punishment: "Warning" },
    { offense: "Offense 2", punishment: "Warning" },
    { offense: "Offense 3", punishment: "Kick from the server" },
    { offense: "Offense 4", punishment: "30-day ban (appealable)" },
    { offense: "Offense 5", punishment: "Permanent ban (appealable)" },
    { offense: "Offense 6", punishment: "Permanent blacklist from all Mayhem servers (no appeal)" },
  ];

  return (
    <div className="relative w-full max-w-8xl mx-auto mt-8">
      {/* glass container */}
      <div className="rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-xl overflow-hidden shadow-2xl">
        <div className="divide-y divide-white/10">
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-12 px-3 py-4 text-sm hover:bg-white/5 transition-colors"
            >
              <div className="col-span-4 text-purple-400 font-semibold tracking-wide text-md">
                {row.offense}
              </div>
              <div className="col-span-8 text-gray-300">
                {row.punishment}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* subtle glow behind the card */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 " />
    </div>
  );
}
