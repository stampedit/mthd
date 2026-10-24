import type { Metadata } from "next";
import { Container } from "../../components/ui";
import { LeadForm } from "../../components/forms";
import { getProductBySlug } from "../../lib/products";

export const metadata: Metadata = {
  title: "Request Access | MTHD",
  description:
    "Join the beta or request access for MTHD products — ProfitPilot, CrewCheck, and StockFlow Pro.",
};

const intentMap: Record<string, string> = {
  beta: "Join the Beta",
  demo: "Request a Demo",
  access: "Request Access",
  waitlist: "Join the Waitlist",
};

export default function AccessPage({
  searchParams,
}: {
  searchParams?: { product?: string; intent?: string };
}) {
  const product = searchParams?.product
    ? getProductBySlug(searchParams.product)
    : undefined;
  const interest = searchParams?.intent
    ? intentMap[searchParams.intent] ?? "Request Access"
    : "Request Access";

  return (
    <section className="pb-24 pt-16 md:pt-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-12">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              REQUEST ACCESS.
            </h1>
            <p className="mt-4 text-lg text-mthd-muted">
              {product
                ? `Tell us a bit about you and we'll reach out about ${product.name}.`
                : "Tell us what you want access to and we'll reach out."}
            </p>
          </div>

          {/* Key on product so the pre-selected value resets when navigating
              between product access links. */}
          <LeadForm
            key={product?.slug ?? "general"}
            product={product?.name}
            interest={interest}
          />
        </div>
      </Container>
    </section>
  );
}
