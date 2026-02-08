import Section from "../components/Section";
import Button from "../components/Button";
import { site } from "../data/siteData";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="leading-relaxed text-white/70">
            Want a portfolio, a landing page, a dashboard UI, or a full-stack
            app? Send a message and include what you’re trying to build.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={site.social.email} variant="primary">
              Email me
            </Button>
            <Button href={site.social.github} variant="secondary">
              GitHub
            </Button>
            <Button href={site.social.linkedin} variant="secondary">
              LinkedIn
            </Button>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="text-sm text-white/60">Email</p>
            <a
              className="mt-1 block text-sm font-semibold text-white hover:underline"
              href={site.social.email}
            >
              {site.social.email.replace("mailto:", "")}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold text-white">Quick message</p>
          <p className="mt-1 text-sm text-white/60">
            This form is UI-only (no backend). If you want, I can wire it to
            EmailJS, Formspree, or your own API.
          </p>

          <form
            className="mt-4 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Form is UI-only for now. Use the Email button or wire it to a backend."
              );
            }}
          >
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Your name"
            />
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Your email"
              type="email"
            />
            <textarea
              className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="What are you trying to build?"
            />
            <button
              className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
