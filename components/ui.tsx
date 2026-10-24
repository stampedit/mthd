import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  href,
  external = false,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mthd-accent/50";
  const variants = {
    primary:
      "bg-white text-mthd-black hover:bg-mthd-accent hover:text-mthd-black",
    secondary:
      "border border-mthd-border bg-transparent text-white hover:border-mthd-accent hover:text-mthd-accent",
    ghost: "bg-transparent text-mthd-muted hover:text-white",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}
    >
      {children}
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`text-xl font-semibold tracking-tight text-white ${className}`}
    >
      MTHD<span className="text-mthd-accent">.</span>
    </Link>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

export function Divider() {
  return <div className="h-px w-full bg-mthd-border" />;
}
