import Section from "../components/Section";
import Pill from "../components/Pill";
import { site } from "../data/siteData";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Stuff I’m good with">
      <div className="flex flex-wrap gap-2">
        {site.skills.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>
    </Section>
  );
}
