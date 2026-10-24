import type { Metadata } from "next";
import { Container } from "../../components/ui";
import { BusinessProductCard, LabCard } from "../../components/products";
import { getBusinessProducts, getLabProducts } from "../../lib/products";

export const metadata: Metadata = {
  title: "Products | MTHD",
  description:
    "Built by MTHD: business software for operations, field teams, and inventory — plus experiments from the MTHD Lab.",
};

export default function ProductsPage() {
  const businessProducts = getBusinessProducts();
  const labProducts = getLabProducts();

  return (
    <section className="pb-24 pt-16 md:pt-24">
      <Container>
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            BUILT BY MTHD.
          </h1>
          <p className="mt-4 text-xl text-mthd-accent md:text-2xl">
            Different problems. Better MTHDs.
          </p>
        </div>

        <div className="mb-10 max-w-3xl">
          <h2 className="text-2xl font-medium text-white md:text-3xl">
            Products
          </h2>
          <p className="mt-2 text-mthd-muted">
            Systems for real operations. Request access and we&apos;ll reach out
            to talk through fit.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {businessProducts[0] && (
            <BusinessProductCard product={businessProducts[0]} featured />
          )}
          <div className="grid gap-6 sm:grid-cols-2">
            {businessProducts.slice(1).map((product) => (
              <BusinessProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>

        <div id="lab" className="mb-10 mt-24 max-w-3xl scroll-mt-24">
          <h2 className="text-2xl font-medium text-white md:text-3xl">
            MTHD Lab
          </h2>
          <p className="mt-2 text-mthd-muted">
            Where ideas become things you can actually use. Launch them right
            here — no pitch required.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {labProducts.map((product) => (
            <LabCard key={product.slug} product={product} />
          ))}
        </div>

        <p className="mt-16 text-center text-mthd-muted">
          More products are on the way. Check back or{" "}
          <a href="/start" className="text-mthd-accent hover:underline">
            tell us what you need
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
