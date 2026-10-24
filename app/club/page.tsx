import type { Metadata } from "next";
import { Container } from "../../components/ui";
import { ClubForm } from "../../components/forms";

export const metadata: Metadata = {
  title: "MTHD Club | MTHD",
  description:
    "Join the MTHD Club — early access to new apps, games, experiments, and products coming out of MTHD.",
};

const perks = [
  "Early access to new apps, games, and experiments",
  "First look at products before they go public",
  "Help shape what gets built next",
];

export default function ClubPage() {
  return (
    <section className="pb-24 pt-16 md:pt-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              MTHD CLUB.
            </h1>
            <p className="mt-4 text-xl text-mthd-accent">
              Want to test what we&apos;re building next?
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-mthd-muted">
              The MTHD Club is an early-access list for people who enjoy trying
              what MTHD builds — apps, games, prototypes, and experiments —
              before everyone else.
            </p>
            <ul className="mt-8 space-y-3">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-3 text-mthd-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-mthd-accent" />
                  {perk}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-mthd-muted">
              Free to join. No spam — just new things to try.
            </p>
          </div>

          <div>
            <ClubForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
