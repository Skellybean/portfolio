import Container from "./Container";

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <div className="mb-10">
          {eyebrow ? (
            <p className="mb-2 text-sm font-semibold tracking-wide text-white/60">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </Container>
    </section>
  );
}
