import Container from "../components/Container";
import { site } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {site.name}. Built with React + Tailwind.
          </p>
          <div className="flex gap-4 text-sm">
            <a
              className="text-white/60 hover:text-white"
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-white/60 hover:text-white"
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="text-white/60 hover:text-white" href={site.social.email}>
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
