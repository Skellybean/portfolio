import Pill from "./Pill";

export default function ProjectCard({ p }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{p.title}</h3>

        <div className="flex gap-2">
          {p.links?.live ? (
            <a
              href={p.links.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-white/70 hover:bg-white/10"
            >
              Live
            </a>
          ) : null}

          {p.links?.code ? (
            <a
              href={p.links.code}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-white/70 hover:bg-white/10"
            >
              Code
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-white/65">{p.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>

      <div className="mt-5 h-px w-full bg-white/10" />
      <p className="mt-4 text-xs text-white/50">
        Tip: add screenshots later as a carousel or modal 👀
      </p>
    </div>
  );
}
