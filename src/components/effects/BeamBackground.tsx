export function BeamBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-radial blur-3xl" />
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 h-full w-[2px] opacity-50"
          style={{
            left: `${20 + i * 30}%`,
            background: "linear-gradient(180deg, transparent, oklch(0.72 0.2 250 / 0.6), transparent)",
            animation: `scan-line ${6 + i * 2}s ${i * 1.5}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
