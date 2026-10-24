import type { Metadata } from "next";
import { Button, Container } from "../../components/ui";
import { LabCard } from "../../components/products";
import { getLabProducts } from "../../lib/products";

export const metadata: Metadata = {
  title: "MTHD Lab | MTHD",
  description:
    "The MTHD Lab — where ideas become things you can actually use. Games, apps, and experiments you can launch right now.",
};

export default function LabPage() {
  const labProducts = getLabProducts();

  return (
    <>
      <section className="pb-24 pt-16 md:pt-24">
        <Container>
          <div className="mb-16 max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              MTHD LAB.
            </h1>
            <p className="mt-4 text-xl text-mthd-accent md:text-2xl">
              Where ideas become things you can actually use.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-mthd-muted">
              The Lab is where MTHD builds for the fun of it — games, apps, and
              experiments. No pitch, no demo call. Just launch them.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {labProducts.map((product) => (
              <LabCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-mthd-border bg-mthd-surface/20 py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Like testing new things?
              </h2>
              <p className="mt-2 text-lg text-mthd-accent">Join the MTHD Club.</p>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-mthd-muted">
                Get early access to new apps, games, experiments, and products
                coming out of MTHD — before they go public.
              </p>
              <div className="mt-8">
                <Button href="/club" variant="primary">
                  Join the Club
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
