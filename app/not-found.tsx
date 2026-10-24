import { Button, Container } from "../components/ui";

export default function NotFound() {
  return (
    <section className="pb-24 pt-32 text-center">
      <Container>
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Page not found.
        </h1>
        <p className="mt-4 text-mthd-muted">
          We could not find what you were looking for.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Go Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
