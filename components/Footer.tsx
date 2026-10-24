import Link from "next/link";
import { Container } from "./ui";
import { getBusinessProducts } from "../lib/products";

export default function Footer() {
  return (
    <footer className="border-t border-mthd-border bg-mthd-black py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="text-2xl font-semibold tracking-tight text-white">
              MTHD<span className="text-mthd-accent">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-mthd-muted">
              There&apos;s a MTHD to growth.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-white">Products</h3>
            <ul className="space-y-3 text-sm text-mthd-muted">
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
                  MTHD Lab
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-white">Company</h3>
            <ul className="space-y-3 text-sm text-mthd-muted">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/the-mthd" className="hover:text-white">
                  The MTHD
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/club" className="hover:text-white">
                  MTHD Club
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-white">Actions</h3>
            <ul className="space-y-3 text-sm text-mthd-muted">
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

        <div className="mt-16 flex flex-col gap-6 border-t border-mthd-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6 text-sm text-mthd-muted">
            <span>Social:</span>
            <span className="hover:text-white">LinkedIn</span>
            <span className="hover:text-white">TikTok</span>
            <span className="hover:text-white">Instagram</span>
          </div>
          <div className="flex gap-6 text-sm text-mthd-muted">
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
