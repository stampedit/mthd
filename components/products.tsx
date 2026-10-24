import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { Button, Container } from "./ui";
import {
  type Product,
  type ProductStatus,
  type ProductStep,
  type ProductFAQ,
  getProductStatusLabel,
} from "../lib/products";

const LIVE_STATUSES: ReadonlySet<ProductStatus> = new Set<ProductStatus>([
  "available",
  "beta",
  "live beta",
  "playable",
  "testable",
]);

export function StatusPill({ status }: { status: ProductStatus }) {
  const label = getProductStatusLabel(status);
  const isLive = LIVE_STATUSES.has(status);
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${
        isLive
          ? "border-mthd-accent/40 bg-mthd-accent/10 text-mthd-accent"
          : "border-mthd-border bg-mthd-surface text-mthd-muted"
      }`}
    >
      {label}
    </span>
  );
}

function tryUrl(product: Product): string | undefined {
  return product.demoUrl ?? product.liveUrl;
}

function tryLabel(product: Product): string {
  return product.launchLabel ?? "Try Demo";
}

function CardActions({ product }: { product: Product }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      {product.CTA && (
        <Button href={product.CTA.href} variant="primary">
          {product.CTA.label} <ArrowRight className="h-4 w-4" />
        </Button>
      )}
      {tryUrl(product) && (
        <Button href={tryUrl(product)} external variant="secondary">
          {tryLabel(product)} <ExternalLink className="h-4 w-4" />
        </Button>
      )}
      {product.altCTA && (
        <Button href={product.altCTA.href} variant="secondary">
          {product.altCTA.label}
        </Button>
      )}
      <Button href={`/products/${product.slug}`} variant="ghost">
        Learn More <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

export function BusinessProductCard({
  product,
  featured,
}: {
  product: Product;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <div className="group relative grid gap-8 rounded-3xl border border-mthd-accent/60 bg-gradient-to-b from-mthd-surface to-mthd-black p-8 transition-all duration-300 hover:border-mthd-accent/40 md:grid-cols-2 md:p-10">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <StatusPill status={product.status} />
            <span className="text-xs font-medium text-mthd-accent">
              Primary Product
            </span>
            {product.kind && (
              <span className="text-xs font-medium uppercase tracking-widest text-mthd-muted">
                {product.kind}
              </span>
            )}
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {product.name}
          </h3>
          <p className="mt-1 text-lg text-mthd-accent">{product.tagline}</p>
          {product.problem && (
            <p className="mt-4 text-sm text-mthd-muted">
              <span className="font-medium text-white">The problem: </span>
              {product.problem}
            </p>
          )}
        </div>
        <div className="flex flex-col justify-between">
          {product.explanation && (
            <p className="text-sm text-mthd-muted">
              <span className="font-medium text-white">The MTHD: </span>
              {product.explanation}
            </p>
          )}
          <CardActions product={product} />
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col rounded-3xl border border-mthd-border bg-mthd-surface/30 p-8 transition-all duration-300 hover:border-mthd-accent/40">
      <div className="mb-4 flex items-center justify-between gap-3">
        <StatusPill status={product.status} />
        {product.kind && (
          <span className="text-xs font-medium uppercase tracking-widest text-mthd-muted">
            {product.kind}
          </span>
        )}
      </div>

      <h3 className="text-2xl font-semibold tracking-tight text-white">
        {product.name}
      </h3>
      <p className="mt-1 text-lg text-mthd-accent">{product.tagline}</p>

      {product.problem && (
        <p className="mt-4 text-sm text-mthd-muted">
          <span className="font-medium text-white">The problem: </span>
          {product.problem}
        </p>
      )}
      {product.explanation && (
        <p className="mt-3 flex-grow text-sm text-mthd-muted">
          <span className="font-medium text-white">The MTHD: </span>
          {product.explanation}
        </p>
      )}

      <CardActions product={product} />
    </div>
  );
}

export function LabCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col rounded-3xl border border-dashed border-mthd-border bg-mthd-surface/10 p-8 transition-all duration-300 hover:border-mthd-accent/40">
      <div className="mb-4 flex items-center justify-between gap-3">
        <StatusPill status={product.status} />
        {product.kind && (
          <span className="text-xs font-medium uppercase tracking-widest text-mthd-muted">
            {product.kind}
          </span>
        )}
      </div>

      <h3 className="text-2xl font-semibold tracking-tight text-white">
        {product.name}
      </h3>
      <p className="mt-4 flex-grow text-mthd-muted">
        {product.shortDescription}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {product.liveUrl ? (
          <Button href={product.liveUrl} external variant="primary">
            {product.launchLabel ?? "Launch"} <ExternalLink className="h-4 w-4" />
          </Button>
        ) : (
          <span className="inline-flex items-center rounded-full border border-dashed border-mthd-border px-6 py-3 text-sm font-medium text-mthd-muted">
            Coming Soon — link pending
          </span>
        )}
        <Button href={`/products/${product.slug}`} variant="ghost">
          Details <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export function ProductHero({ product }: { product: Product }) {
  const isLab = product.category === "lab";

  return (
    <section className="border-b border-mthd-border pb-24 pt-16 md:pt-24">
      <Container>
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <StatusPill status={product.status} />
            <span className="text-xs font-medium uppercase tracking-widest text-mthd-muted">
              {isLab
                ? product.kind
                  ? `MTHD Lab — ${product.kind}`
                  : "A MTHD Lab project"
                : product.kind ?? "MTHD Product"}
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            {product.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mthd-muted md:text-xl">
            {product.longDescription}
          </p>

          {!product.listed && (
            <p className="mt-6 inline-block rounded-xl border border-dashed border-mthd-border px-4 py-3 text-sm text-mthd-muted">
              This product isn&apos;t in the current public lineup — this page is
              kept for reference.
            </p>
          )}

          <div className="mt-10 flex flex-wrap gap-4">
            {isLab ? (
              product.liveUrl ? (
                <Button href={product.liveUrl} external variant="primary">
                  {product.launchLabel ?? "Launch"}{" "}
                  <ExternalLink className="h-4 w-4" />
                </Button>
              ) : (
                <span className="inline-flex items-center rounded-full border border-dashed border-mthd-border px-6 py-3 text-sm font-medium text-mthd-muted">
                  Coming Soon — link pending
                </span>
              )
            ) : (
              <>
                {product.CTA && (
                  <Button href={product.CTA.href} variant="primary">
                    {product.CTA.label} <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
                {tryUrl(product) && (
                  <Button href={tryUrl(product)} external variant="secondary">
                    {tryLabel(product)} <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
                {product.altCTA && (
                  <Button href={product.altCTA.href} variant="secondary">
                    {product.altCTA.label}
                  </Button>
                )}
              </>
            )}
            <Button href="/products" variant="secondary">
              View All Products
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProductOrigin({ origin }: { origin: string }) {
  return (
    <section className="py-12">
      <Container>
        <div className="max-w-3xl rounded-2xl border border-mthd-border bg-mthd-surface/20 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-mthd-muted">
            Where it came from
          </h2>
          <p className="mt-3 text-mthd-muted">{origin}</p>
        </div>
      </Container>
    </section>
  );
}

export function ProductSteps({ steps }: { steps: ProductStep[] }) {
  return (
    <section className="bg-mthd-surface/30 py-20">
      <Container>
        <h2 className="mb-12 text-2xl font-medium text-white md:text-3xl">
          How it works
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="rounded-2xl border border-mthd-border bg-mthd-black p-6 md:p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-mthd-accent">
                  {step.step}
                </span>
                <h3 className="mt-4 text-xl font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-mthd-muted">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 z-10 hidden -translate-x-1/2 text-mthd-accent md:block">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProductBeforeAfter({
  before,
  after,
  productName,
}: {
  before: string[];
  after: string[];
  productName: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-mthd-border bg-mthd-surface/20 p-8">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-mthd-muted">
              Before
            </h3>
            <ul className="space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <span className="h-2 w-2 rounded-full bg-neutral-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-mthd-accent/40 bg-mthd-surface/40 p-8">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-mthd-accent">
              With {productName}
            </h3>
            <ul className="space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <Check className="h-5 w-5 text-mthd-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProductFeatures({
  features,
  title = "Features",
}: {
  features: string[];
  title?: string;
}) {
  return (
    <section className="border-t border-mthd-border py-20">
      <Container>
        <h2 className="mb-12 text-2xl font-medium text-white md:text-3xl">
          {title}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-4 rounded-2xl border border-mthd-border bg-mthd-surface/20 p-5"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-mthd-accent" />
              <span className="text-white">{feature}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProductFAQ({ faq }: { faq: ProductFAQ[] }) {
  return (
    <section className="border-t border-mthd-border py-20">
      <Container>
        <h2 className="mb-12 text-2xl font-medium text-white md:text-3xl">
          FAQ
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((item, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-mthd-border bg-mthd-surface/20 p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-white focus:outline-none">
                <span className="font-medium">{item.q}</span>
                <span className="text-mthd-accent group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-mthd-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProductVisual({ product }: { product: Product }) {
  const screenshot = product.screenshots?.[0];

  return (
    <section className="bg-mthd-surface/30 py-20">
      <Container>
        <h2 className="mb-8 text-2xl font-medium text-white md:text-3xl">
          See it in action
        </h2>
        {product.demoVideo ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-mthd-border bg-mthd-black">
            <video
              src={product.demoVideo}
              controls
              className="h-full w-full object-cover"
            />
          </div>
        ) : screenshot ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-mthd-border bg-mthd-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={screenshot}
              alt={`${product.name} screenshot`}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-mthd-border bg-mthd-black">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
              <div className="h-16 w-16 rounded-2xl bg-mthd-surface p-4">
                <div className="h-full w-full rounded-lg bg-mthd-accent/20" />
              </div>
              {product.demoUrl ? (
                <>
                  <p className="text-white">
                    Try the interactive demo — no account needed.
                  </p>
                  <Button
                    href={product.demoUrl}
                    external
                    variant="primary"
                  >
                    {product.launchLabel ?? "Try Interactive Demo"}{" "}
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <>
                  <p className="text-mthd-muted">
                    {product.name} visuals coming soon
                  </p>
                  <p className="max-w-md px-6 text-sm text-mthd-muted">
                    Screenshots and demo video slots are wired up — real assets
                    go here when they&apos;re ready.
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

export function ProductCTA({ product }: { product: Product }) {
  const isLab = product.category === "lab";

  return (
    <section className="border-t border-mthd-border py-20">
      <Container>
        <div className="rounded-3xl border border-mthd-border bg-mthd-surface/30 p-8 text-center md:p-16">
          <h2 className="text-2xl font-medium text-white md:text-4xl">
            {isLab
              ? `Try ${product.name}`
              : `Interested in ${product.name}?`}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mthd-muted">
            {isLab
              ? "Launch it straight from the MTHD Lab — no signup, no pitch."
              : "Request access and we'll reach out to talk through fit, or book a demo to see it in action."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {isLab ? (
              product.liveUrl ? (
                <Button href={product.liveUrl} external variant="primary">
                  {product.launchLabel ?? "Launch"}{" "}
                  <ExternalLink className="h-4 w-4" />
                </Button>
              ) : (
                <span className="inline-flex items-center rounded-full border border-dashed border-mthd-border px-6 py-3 text-sm font-medium text-mthd-muted">
                  Coming Soon — link pending
                </span>
              )
            ) : (
              <>
                {product.CTA && (
                  <Button href={product.CTA.href} variant="primary">
                    {product.CTA.label}
                  </Button>
                )}
                {tryUrl(product) && (
                  <Button href={tryUrl(product)} external variant="secondary">
                    {tryLabel(product)} <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
                {product.altCTA && (
                  <Button href={product.altCTA.href} variant="secondary">
                    {product.altCTA.label}
                  </Button>
                )}
              </>
            )}
            <Button href="/products" variant="secondary">
              View All Products
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
