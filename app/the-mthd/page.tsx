import type { Metadata } from "next";
import { Button, Container } from "../../components/ui";

export const metadata: Metadata = {
  title: "The MTHD | MTHD",
  description:
    "The MTHD process: find the problem, simplify, build, put it to work, and improve.",
};

const steps = [
  {
    number: "01",
    title: "Find the problem",
    description: "Show us how you're doing it now.",
  },
  {
    number: "02",
    title: "Simplify",
    description: "Figure out what actually needs to happen.",
  },
  {
    number: "03",
    title: "Build",
    description: "Build the system around the way the business works.",
  },
  {
    number: "04",
    title: "Put it to work",
    description: "Connect it to the real operation.",
  },
  {
    number: "05",
    title: "Improve",
    description: "See what's working and make it better.",
  },
];

export default function TheMthdPage() {
  return (
    <section className="pb-24 pt-16 md:pt-24">
      <Container>
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            THE MTHD
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-mthd-muted">
            We don&apos;t start with technology.{" "}
            <span className="text-white">We start with the problem.</span>
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-mthd-border bg-mthd-surface/20 p-8"
            >
              <span className="text-3xl font-medium text-mthd-accent">
                {step.number}
              </span>
              <h2 className="mt-4 text-xl font-medium text-white">
                {step.title}
              </h2>
              <p className="mt-2 text-mthd-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-mthd-border bg-mthd-surface/30 p-8 text-center md:p-16">
          <p className="text-2xl font-medium text-white md:text-3xl">
            Find the problem.
            <br />
            Build the system.
            <br />
            Put it to work.
          </p>
          <div className="mt-8">
            <Button href="/start" variant="primary">
              Show Us the Problem
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
