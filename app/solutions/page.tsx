import type { Metadata } from "next";
import { Button, Container } from "../../components/ui";

export const metadata: Metadata = {
  title: "Solutions | MTHD",
  description:
    "What MTHD can build for your business: custom software, workflow automation, AI-assisted systems, operational systems, and consulting.",
};

const solutions = [
  {
    title: "Custom Software",
    description:
      "For businesses with a problem or workflow that off-the-shelf software doesn't solve well. Built around how you actually work.",
    examples: [
      "Internal tools",
      "Dashboards",
      "Employee systems",
      "Client portals",
      "Operational tools",
      "Lightweight custom applications",
    ],
  },
  {
    title: "Workflow Automation",
    description:
      "Reduce the repetitive, manual work — the steps that only happen because someone remembers to do them.",
    examples: [
      "Workflow automation",
      "Notifications",
      "Data movement between tools",
      "Scheduling processes",
      "Form workflows",
      "Business process automation",
    ],
  },
  {
    title: "AI-Assisted Systems",
    description:
      "Practical use of AI inside business processes — drafting, summarizing, routing, reviewing — where it genuinely helps.",
    examples: [
      "AI inside real workflows",
      "Document and data handling",
      "Faster review and routing",
      "No buzzword features",
    ],
  },
  {
    title: "Operational Systems",
    description:
      "Take the disconnected processes — the spreadsheets, texts, and side channels — and organize them into clearer systems the whole team can see.",
    examples: [
      "Scheduling and assignments",
      "Job checklists and field workflows",
      "Inventory counts and review",
      "Day-to-day process systems",
    ],
  },
];

const consultingPoints = [
  "Understand how the current process actually works",
  "Find the bottlenecks and repetitive work",
  "Figure out what should be automated — and what shouldn't",
  "Decide whether existing software or custom software makes sense",
  "Design a practical solution around the real operation",
];

export default function SolutionsPage() {
  return (
    <section className="pb-24 pt-16 md:pt-24">
      <Container>
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Solutions.
          </h1>
          <p className="mt-4 text-lg text-mthd-muted">
            Not products. Capabilities — what MTHD can build around the way your
            business actually works.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-2xl border border-mthd-border bg-mthd-surface/20 p-8 transition-colors hover:border-mthd-accent/40"
            >
              <h3 className="text-xl font-medium text-white">
                {solution.title}
              </h3>
              <p className="mt-3 text-mthd-muted">{solution.description}</p>
              <ul className="mt-6 space-y-2">
                {solution.examples.map((example) => (
                  <li
                    key={example}
                    className="flex items-center gap-3 text-sm text-mthd-muted"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-mthd-accent" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Consulting.
            </h2>
            <p className="mt-4 text-xl text-mthd-accent">
              You don&apos;t need to know what needs to be built.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-mthd-muted">
              If something in your business feels inefficient but you&apos;re not
              sure what software or automation would fix it — that&apos;s
              exactly where to start. We look at how things work today and figure
              out where the time is actually going.
            </p>
            <ul className="mt-8 space-y-3">
              {consultingPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-mthd-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mthd-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-mthd-border bg-mthd-surface/30 p-8 text-center md:p-16">
          <p className="text-2xl font-medium text-white md:text-3xl">
            Got a problem worth solving?
          </p>
          <p className="mx-auto mt-4 max-w-xl text-mthd-muted">
            Sometimes the right answer isn&apos;t another off-the-shelf tool.
            Tell us what isn&apos;t working and we&apos;ll start there.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/start" variant="primary">
              Start a Project
            </Button>
            <Button href="/book" variant="secondary">
              Talk to MTHD
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
