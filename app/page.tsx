import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button, Container, Section } from "../components/ui";
import { BusinessProductCard, LabCard } from "../components/products";
import { ClubForm } from "../components/forms";
import { getBusinessProducts, getLabProducts } from "../lib/products";
import HeroVisual from "../components/HeroVisual";
import CustomSystems from "../components/CustomSystems";

export const metadata: Metadata = {
  title: "MTHD | Better Systems for Growing Businesses",
  description:
    "MTHD builds software, automation, and custom systems that help businesses simplify operations and grow without the chaos.",
};

const whatWeBuild = [
  {
    title: "Software",
    description:
      "Tools that replace the manual work slowing a business down — scheduling, jobs, inventory, and the day-to-day.",
  },
  {
    title: "Automation",
    description:
      "Workflows that connect the pieces so follow-ups, handoffs, and updates stop falling through the cracks.",
  },
  {
    title: "Digital Products",
    description:
      "Games and apps from the MTHD Lab — ideas turned into things you can actually use.",
  },
];

const mthdSteps = [
  { step: "01", title: "Find the problem", desc: "Show us how you're doing it now." },
  { step: "02", title: "Simplify", desc: "Figure out what actually needs to happen." },
  { step: "03", title: "Build", desc: "Build the system around the way the business works." },
  { step: "04", title: "Put it to work", desc: "Connect it to the real operation." },
  { step: "05", title: "Improve", desc: "See what's working and make it better." },
];

const buildWith = [
  {
    title: "Custom Software",
    description:
      "When off-the-shelf doesn't fit the problem, we build the tool around the way you actually work.",
  },
  {
    title: "Automation",
    description:
      "Workflows, notifications, and data movement that happen without someone remembering to do them.",
  },
  {
    title: "Operational Systems",
    description:
      "Disconnected processes — schedules, jobs, checklists, inventory — organized into systems the team can see.",
  },
  {
    title: "Consulting",
    description:
      "Not sure what needs to be built? Start with the problem — we'll figure out what's worth fixing first.",
  },
];

export default function HomePage() {
  const businessProducts = getBusinessProducts();
  const labProducts = getLabProducts();

  return (
    <>
      <section className="relative flex min-h-[calc(100vh-73px)] items-center border-b border-mthd-border">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
                THERE&apos;S A MTHD
                <br />
                TO GROWTH.
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-mthd-muted md:text-2xl">
                We find what&apos;s slowing your business down and build a better
                way to do it.
              </p>
              <p className="mt-4 max-w-xl text-mthd-muted">
                From scheduling and operations to sales and custom systems, MTHD
                builds technology around real business problems.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/products" variant="primary">
                  EXPLORE PRODUCTS
                </Button>
                <Button href="/start" variant="secondary">
                  START A PROJECT
                </Button>
              </div>
            </div>

            <div className="hidden justify-center lg:flex">
              <HeroVisual />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="max-w-4xl">
            <p className="text-3xl font-medium text-white md:text-5xl">
              &quot;There has to be an easier way to do this.&quot;
            </p>
            <p className="mt-6 text-2xl text-mthd-accent md:text-4xl">
              There probably is.
            </p>
          </div>

          <div className="mt-16 max-w-2xl text-lg leading-relaxed text-mthd-muted">
            <p className="mb-4">Businesses grow.</p>
            <p className="mb-4">More customers come in.</p>
            <p className="mb-4">More employees get hired.</p>
            <p className="mb-4">More jobs need to be managed.</p>
            <p className="mb-6">
              And eventually the spreadsheets, texts, emails, group chats, and
              disconnected apps that used to work start creating more work.
            </p>
            <p className="text-white">
              That&apos;s where MTHD comes in. We find the parts of your business
              that are taking too much time and build a better way to handle them.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-mthd-border">
        <Container>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              WHAT WE BUILD.
            </h2>
            <p className="mt-4 text-xl text-mthd-accent md:text-2xl">
              Real problems → practical ideas → working products.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {whatWeBuild.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-mthd-border bg-mthd-surface/20 p-8"
              >
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-mthd-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-mthd-border bg-mthd-surface/20">
        <Container>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              FEATURED PRODUCTS.
            </h2>
            <p className="mt-4 text-xl text-mthd-accent md:text-2xl">
              Different problems. Better MTHDs.
            </p>
            <p className="mt-4 max-w-2xl text-mthd-muted">
              Built for real operations. Join the beta or request access to try
              them with your business.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {businessProducts[0] && (
              <BusinessProductCard product={businessProducts[0]} featured />
            )}
            <div className="grid gap-6 md:grid-cols-2">
              {businessProducts.slice(1).map((product) => (
                <BusinessProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-mthd-border">
        <Container>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              THE MTHD
            </h2>
            <p className="mt-4 text-lg text-mthd-muted">
              We don&apos;t start with technology. We start with the problem.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {mthdSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-mthd-border bg-mthd-surface/20 p-6"
              >
                <span className="text-mthd-accent">{item.step}</span>
                <h3 className="mt-3 text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-mthd-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl">
            <p className="text-2xl font-medium text-white md:text-3xl">
              Find the problem. Build the system. Put it to work.
            </p>
            <div className="mt-6">
              <Button href="/the-mthd" variant="secondary">
                Learn the Process
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        id="lab"
        className="border-t border-mthd-border bg-mthd-surface/20"
      >
        <Container>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              MTHD LAB.
            </h2>
            <p className="mt-4 text-xl text-mthd-accent md:text-2xl">
              Where ideas become things you can actually use.
            </p>
            <p className="mt-4 max-w-2xl text-mthd-muted">
              Experiments, games, and tools built for the fun of it — launch them
              straight from here.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {labProducts.map((product) => (
              <LabCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-10">
            <Button href="/lab" variant="ghost">
              Explore the Lab <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-mthd-border">
        <Container>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              BUILD WITH MTHD.
            </h2>
            <p className="mt-4 text-lg text-mthd-muted">
              Sometimes the right answer isn&apos;t another off-the-shelf tool.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {buildWith.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-mthd-border bg-mthd-surface/20 p-6"
              >
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-mthd-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/start" variant="primary">
              Start a Project
            </Button>
            <Button href="/solutions" variant="ghost">
              More on solutions <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-mthd-border bg-mthd-surface/20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                MTHD CLUB.
              </h2>
              <p className="mt-2 text-xl text-mthd-accent">
                Want to test what we&apos;re building next?
              </p>
              <p className="mt-4 max-w-md leading-relaxed text-mthd-muted">
                Join the MTHD Club for early access to apps, games, prototypes,
                and new MTHD experiments — before they go public.
              </p>
            </div>
            <div className="rounded-3xl border border-mthd-border bg-mthd-black p-8">
              <ClubForm />
            </div>
          </div>
        </Container>
      </Section>

      <CustomSystems />
    </>
  );
}
