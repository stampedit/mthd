"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo, Button } from "./ui";
import { getBusinessProducts } from "../lib/products";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Lab", href: "/lab" },
  { label: "Solutions", href: "/solutions" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const businessProducts = getBusinessProducts();

  return (
    <header className="sticky top-0 z-50 border-b border-qorvn-border bg-qorvn-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm text-qorvn-muted transition-colors hover:text-white"
              onClick={() => setProductOpen((v) => !v)}
              aria-expanded={productOpen}
            >
              Products
              <ChevronDown className="h-4 w-4" />
            </button>
            {productOpen && (
              <div className="absolute left-0 top-full min-w-[240px] rounded-xl border border-qorvn-border bg-qorvn-surface p-2 shadow-xl">
                {businessProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="block rounded-lg px-4 py-3 text-sm text-qorvn-muted transition-colors hover:bg-qorvn-border hover:text-white"
                    onClick={() => setProductOpen(false)}
                  >
                    <span className="block text-white">{product.name}</span>
                    <span className="text-xs">{product.tagline}</span>
                  </Link>
                ))}
                <Link
                  href="/lab"
                  className="block rounded-lg px-4 py-3 text-sm text-qorvn-muted transition-colors hover:bg-qorvn-border hover:text-white"
                  onClick={() => setProductOpen(false)}
                >
                  <span className="block text-white">QORVN Lab</span>
                  <span className="text-xs">Experiments you can launch now</span>
                </Link>
                <Link
                  href="/products"
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-qorvn-accent transition-colors hover:bg-qorvn-border"
                >
                  View All Products
                </Link>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-qorvn-muted transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/start" variant="primary">
            Start a Project
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-qorvn-border text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-qorvn-border bg-qorvn-black px-6 pb-8 pt-6 md:hidden">
          <div className="mb-6 text-sm font-medium text-qorvn-muted">Products</div>
          <div className="mb-6 flex flex-col gap-3">
            {businessProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="text-white"
                onClick={() => setMobileOpen(false)}
              >
                {product.name}
              </Link>
            ))}
            <Link
              href="/lab"
              className="text-white"
              onClick={() => setMobileOpen(false)}
            >
              QORVN Lab
            </Link>
            <Link
              href="/products"
              className="text-qorvn-accent"
              onClick={() => setMobileOpen(false)}
            >
              View All Products
            </Link>
          </div>

          <div className="mb-6 flex flex-col gap-4">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button href="/start" variant="primary" onClick={() => setMobileOpen(false)}>
            Start a Project
          </Button>
        </div>
      )}
    </header>
  );
}
