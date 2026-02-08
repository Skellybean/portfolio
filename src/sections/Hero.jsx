import Container from "../components/Container";
import Button from "../components/Button";
import Pill from "../components/Pill";
import { site } from "../data/siteData";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <Container className="py-16 sm:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              {site.location}
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {site.name} — <span className="text-white/80">{site.role}</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {site.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#projects" variant="primary">
                View projects
              </Button>
              <Button href={site.social.github} variant="secondary">
                GitHub
              </Button>
              <Button href={site.social.linkedin} variant="secondary">
                LinkedIn
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {site.highlights.map((h) => (
                <Pill key={h}>{h}</Pill>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-white/60">Currently building</p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Clean UIs + reliable APIs
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white/70">
                Available
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm font-semibold text-white">Frontend</p>
                <p className="mt-1 text-sm text-white/65">
                  React, Tailwind, responsive UI systems
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm font-semibold text-white">Backend</p>
                <p className="mt-1 text-sm text-white/65">
                  REST APIs, Postgres, deployments
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm font-semibold text-white">Quality</p>
                <p className="mt-1 text-sm text-white/65">
                  Performance, clean code, maintainability
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm font-semibold text-white">Tooling</p>
                <p className="mt-1 text-sm text-white/65">
                  Git, Docker, CI-ready structure
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-white/60">Contact</p>
              <a
                className="mt-1 block text-sm font-semibold text-white hover:underline"
                href={site.social.email}
              >
                {site.social.email.replace("mailto:", "")}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
