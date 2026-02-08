import Section from "../components/Section";
import { site } from "../data/siteData";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="leading-relaxed text-white/70">{site.about}</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2">
          <p className="text-sm font-semibold text-white">Quick links</p>

          <div className="mt-4 grid gap-2">
            <a
              className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70 hover:bg-white/5"
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70 hover:bg-white/5"
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70 hover:bg-white/5"
              href={site.social.twitter}
              target="_blank"
              rel="noreferrer"
            >
              X / Twitter
            </a>
            <a
              className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70 hover:bg-white/5"
              href={site.social.email}
            >
              Email me
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
