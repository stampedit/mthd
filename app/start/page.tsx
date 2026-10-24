import type { Metadata } from "next";
import { Container } from "../../components/ui";
import { ProjectForm } from "../../components/forms";

export const metadata: Metadata = {
  title: "Start a Project | MTHD",
  description:
    "Got a problem worth solving? Tell MTHD what isn't working — custom software, automation, operational systems, or consulting.",
};

export default function StartPage() {
  return (
    <section className="pb-24 pt-16 md:pt-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-12">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              GOT A PROBLEM WORTH SOLVING?
            </h1>
            <p className="mt-4 text-lg text-mthd-muted">
              You don&apos;t need to know what needs to be built. Start with the
              problem — tell us what isn&apos;t working and we&apos;ll go from
              there.
            </p>
            <p className="mt-4 text-mthd-muted">
              Custom software, automation, operational systems, or just help
              figuring out what should exist. Whatever it is, start here.
            </p>
          </div>

          <ProjectForm />
        </div>
      </Container>
    </section>
  );
}
