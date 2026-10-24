import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "../../../components/ui";
import {
  ProductHero,
  ProductOrigin,
  ProductSteps,
  ProductFeatures,
  ProductFAQ,
  ProductCTA,
  ProductVisual,
  ProductBeforeAfter,
} from "../../../components/products";
import { products, getProductBySlug } from "../../../lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product | MTHD" };
  return {
    title: `${product.name} | MTHD`,
    description: product.shortDescription,
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const isLab = product.category === "lab";

  return (
    <>
      <ProductHero product={product} />

      {!isLab && (product.problem || product.explanation) && (
        <section className="border-b border-mthd-border py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2">
              {product.problem && (
                <div>
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-mthd-muted">
                    The Problem
                  </h2>
                  <p className="text-lg text-white">{product.problem}</p>
                </div>
              )}
              {product.explanation && (
                <div>
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-mthd-muted">
                    What it does
                  </h2>
                  <p className="text-lg text-white">{product.explanation}</p>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {product.origin && <ProductOrigin origin={product.origin} />}

      {product.howItWorks && product.howItWorks.length > 0 && (
        <ProductSteps steps={product.howItWorks} />
      )}

      {product.before && product.after && (
        <ProductBeforeAfter
          before={product.before}
          after={product.after}
          productName={product.name}
        />
      )}

      <ProductVisual product={product} />

      {product.features && product.features.length > 0 && (
        <ProductFeatures features={product.features} />
      )}

      {product.plannedFeatures && product.plannedFeatures.length > 0 && (
        <ProductFeatures
          features={product.plannedFeatures}
          title="On the roadmap"
        />
      )}

      {!isLab &&
        ((product.whoFor && product.whoFor.length > 0) ||
          (product.benefits && product.benefits.length > 0)) && (
          <section className="border-t border-mthd-border py-20">
            <Container>
              <div className="grid gap-12 lg:grid-cols-2">
                {product.whoFor && product.whoFor.length > 0 && (
                  <div>
                    <h2 className="mb-6 text-2xl font-medium text-white md:text-3xl">
                      Who it&apos;s for
                    </h2>
                    <ul className="space-y-4">
                      {product.whoFor.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-white"
                        >
                          <span className="h-2 w-2 rounded-full bg-mthd-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {product.benefits && product.benefits.length > 0 && (
                  <div>
                    <h2 className="mb-6 text-2xl font-medium text-white md:text-3xl">
                      Benefits
                    </h2>
                    <ul className="space-y-4">
                      {product.benefits.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-white"
                        >
                          <span className="h-2 w-2 rounded-full bg-mthd-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Container>
          </section>
        )}

      {product.faq && product.faq.length > 0 && (
        <ProductFAQ faq={product.faq} />
      )}

      <ProductCTA product={product} />
    </>
  );
}
