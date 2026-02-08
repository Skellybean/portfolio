import Section from "../components/Section";
import { site } from "../data/siteData";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="What I’ve worked on">
      <div className="grid gap-4">
        {site.experience.map((e) => (
          <div
            key={`${e.title}-${e.period}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-white">{e.title}</h3>
                <p className="text-sm text-white/60">{e.org}</p>
              </div>
              <p className="text-sm text-white/50">{e.period}</p>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/50" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
