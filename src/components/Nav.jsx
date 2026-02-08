import { useEffect, useMemo, useState } from "react";
import Container from "./Container";
import Button from "./Button";
import { site } from "../data/siteData";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { label: "Home", href: "#top" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <Container className="py-3">
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <span className="text-sm font-bold text-white">
                {site.name?.[0] ?? "D"}
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">{site.name}</div>
              <div className="text-xs text-white/60">{site.role}</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <Button href="#contact" variant="secondary">
              Let’s talk
            </Button>
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open ? (
          <div className="mt-3 rounded-2xl border border-white/10 bg-black/60 p-3 md:hidden">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2">
                <Button href="#contact" variant="primary">
                  Let’s talk
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
