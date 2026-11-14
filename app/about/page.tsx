import type { Metadata } from "next";
import { Container } from "../../components/ui";

export const metadata: Metadata = {
  title: "About | QORVN",
  description: "Why QORVN exists: real problems, real businesses, better systems.",
};

export default function AboutPage() {
  return (
    <section className="pb-24 pt-16 md:pt-24">
      <Container>
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            WHY QORVN EXISTS.
          </h1>
        </div>

        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-qorvn-muted">
          <p>
            QORVN started from solving real problems while running and working
            inside businesses.
          </p>
          <p>Scheduling people. Managing jobs. Finding customers. Following up.</p>
          <p>
            Tracking work. Trying to grow while still handling everything
            manually.
          </p>
          <p>
            Eventually the realization was simple:{" "}
            <span className="font-medium text-white">
              Working harder isn&apos;t always the answer. Sometimes you need a
              better system.
            </span>
          </p>
          <p>We started building those systems.</p>
          <p>That&apos;s what became QORVN.</p>
          <p className="text-white">Now we build them for other businesses.</p>
        </div>
      </Container>
    </section>
  );
}
