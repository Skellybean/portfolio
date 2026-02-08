import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { site } from "../data/siteData";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {site.projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}
