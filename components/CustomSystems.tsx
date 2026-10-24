import { Button, Container } from "./ui";

export default function CustomSystems() {
  return (
    <section className="border-y border-mthd-border bg-mthd-surface/20 py-20 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Got a problem worth solving?
            </h2>
            <p className="mt-2 text-lg text-mthd-accent">
              There&apos;s probably a better way to do it.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-mthd-muted">
              Every business works differently. If you&apos;re doing something
              manually, jumping between multiple tools, or constantly thinking
              &quot;there has to be a better way,&quot; show us how you&apos;re
              doing it now.
            </p>
            <p className="mt-4 text-mthd-muted">
              We&apos;ll figure out what can be simplified and whether MTHD can
              build a better system around it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/start" variant="primary">
                Start a Project
              </Button>
              <Button href="/book" variant="secondary">
                Talk to MTHD
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
