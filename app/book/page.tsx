import type { Metadata } from "next";
import { Container } from "../../components/ui";
import { BookDemoForm } from "../../components/forms";

export const metadata: Metadata = {
  title: "Book a Demo | MTHD",
  description:
    "Book a demo with MTHD and show us how your business is working today.",
};

export default function BookPage() {
  return (
    <section className="pb-24 pt-16 md:pt-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              LET&apos;S SEE HOW YOU&apos;RE DOING IT NOW.
            </h1>
            <p className="mt-4 text-lg text-mthd-muted">
              Tell us what&apos;s slowing you down and what you&apos;re interested
              in. We&apos;ll be in touch to schedule a time.
            </p>
          </div>

          <div>
            <BookDemoForm />

            {/* 
              BOOKING INTEGRATION PLACEHOLDER
              Replace the div below with a Calendly, Cal.com, or custom
              scheduling embed once the account is set up.
            */}
            <div className="mt-10 rounded-2xl border border-dashed border-mthd-border p-8 text-center">
              <p className="text-sm font-medium text-mthd-muted">
                Booking calendar integration goes here
              </p>
              <p className="mt-2 text-xs text-mthd-muted">
                Calendly / Cal.com embed placeholder
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
