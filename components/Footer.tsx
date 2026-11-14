import Link from "next/link";
import { Container } from "./ui";
import { getBusinessProducts } from "../lib/products";

export default function Footer() {
  return (
    <footer className="border-t border-qorvn-border bg-qorvn-black py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="text-2xl font-semibold tracking-tight text-white">
              QORVN<span className="text-qorvn-accent">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-qorvn-muted">
              Better systems. Smarter operations. Real results.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-white">Products</h3>
            <ul className="space-y-3 text-sm text-qorvn-muted">
              {getBusinessProducts().map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-white"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/lab" className="hover:text-white">
                  QORVN Lab
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-white">Company</h3>
            <ul className="space-y-3 text-sm text-qorvn-muted">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/club" className="hover:text-white">
                  QORVN Club
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-white">Actions</h3>
            <ul className="space-y-3 text-sm text-qorvn-muted">
              <li>
                <Link href="/access" className="hover:text-white">
                  Request Access
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-white">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link href="/start" className="hover:text-white">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-qorvn-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6 text-sm text-qorvn-muted">
            <span>Social:</span>
            <span className="hover:text-white">LinkedIn</span>
            <span className="hover:text-white">TikTok</span>
            <span className="hover:text-white">Instagram</span>
          </div>
          <div className="flex gap-6 text-sm text-qorvn-muted">
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
