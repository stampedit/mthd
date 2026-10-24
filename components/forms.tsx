"use client";

import { useState } from "react";
import { Button, Container } from "./ui";
import { getBusinessProducts } from "../lib/products";

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm text-mthd-muted">
        {label}
        {required && <span className="text-mthd-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-xl border border-mthd-border bg-mthd-surface px-4 py-3 text-white placeholder:text-neutral-600 focus:border-mthd-accent focus:outline-none"
      />
    </div>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm text-mthd-muted">
        {label}
        {required && <span className="text-mthd-accent"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-mthd-border bg-mthd-surface px-4 py-3 text-white focus:border-mthd-accent focus:outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextArea({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm text-mthd-muted">
        {label}
        {required && <span className="text-mthd-accent"> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-xl border border-mthd-border bg-mthd-surface px-4 py-3 text-white placeholder:text-neutral-600 focus:border-mthd-accent focus:outline-none"
      />
    </div>
  );
}

// Forms aren't wired to a backend yet. Be honest about it instead of
// faking a successful submission.
function FormOffline({ onBack }: { onBack: () => void }) {
  return (
    <div className="rounded-2xl border border-dashed border-mthd-border bg-mthd-surface p-8 text-center">
      <h3 className="text-xl font-medium text-white">
        Not sent — this form isn&apos;t connected yet.
      </h3>
      <p className="mt-2 text-mthd-muted">
        Lead capture is being wired up separately. Nothing you entered was sent
        or stored.
      </p>
      <div className="mt-6">
        <Button onClick={onBack} variant="secondary">
          Back to the form
        </Button>
      </div>
    </div>
  );
}

function OfflineNote() {
  return (
    <p className="text-center text-xs text-mthd-muted">
      Submissions aren&apos;t connected yet — this form is being wired up.
    </p>
  );
}

const businessProductOptions = [
  ...getBusinessProducts().map((p) => p.name),
  "Something else / not sure",
];

const interestOptions = [
  "Join the Beta",
  "Join the Waitlist",
  "Request Access",
  "Request a Demo",
  "General Question",
];

export function LeadForm({
  product,
  interest,
}: {
  product?: string;
  interest?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    product: product ?? "Something else / not sure",
    interest: interest ?? "Request Access",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will POST to an n8n webhook in a later pass. Not connected yet.
    console.log({ ...form });
    setSubmitted(true);
  };

  if (submitted) {
    return <FormOffline onBack={() => setSubmitted(false)} />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={(v) => setForm((f) => ({ ...f, name: v }))}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={(v) => setForm((f) => ({ ...f, email: v }))}
        required
      />
      <Input
        label="Company"
        name="company"
        value={form.company}
        onChange={(v) => setForm((f) => ({ ...f, company: v }))}
      />
      <Select
        label="Product"
        name="product"
        value={form.product}
        onChange={(v) => setForm((f) => ({ ...f, product: v }))}
        options={businessProductOptions}
      />
      <Select
        label="What are you interested in?"
        name="interest"
        value={form.interest}
        onChange={(v) => setForm((f) => ({ ...f, interest: v }))}
        options={interestOptions}
      />
      <TextArea
        label="Message (optional)"
        name="message"
        value={form.message}
        onChange={(v) => setForm((f) => ({ ...f, message: v }))}
        placeholder="Anything we should know about how you're doing it today?"
      />
      <Button type="submit" variant="primary" className="mt-2 w-full">
        Send Request
      </Button>
      <OfflineNote />
    </form>
  );
}

export function WaitlistForm({ product }: { product: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will POST to an n8n webhook in a later pass. Not connected yet.
    console.log({ product, ...form });
    setSubmitted(true);
  };

  if (submitted) {
    return <FormOffline onBack={() => setSubmitted(false)} />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="waitlist">
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={(v) => setForm((f) => ({ ...f, name: v }))}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={(v) => setForm((f) => ({ ...f, email: v }))}
        required
      />
      <Input
        label="Company"
        name="company"
        value={form.company}
        onChange={(v) => setForm((f) => ({ ...f, company: v }))}
      />
      <Input
        label="Industry"
        name="industry"
        value={form.industry}
        onChange={(v) => setForm((f) => ({ ...f, industry: v }))}
      />
      <Button type="submit" variant="primary" className="mt-2 w-full">
        Join the Waitlist
      </Button>
      <OfflineNote />
    </form>
  );
}

export function BookDemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    employees: "",
    interest: "Not Sure",
    slowdown: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will POST to an n8n webhook in a later pass. Not connected yet.
    console.log(form);
    setSubmitted(true);
  };

  if (submitted) {
    return <FormOffline onBack={() => setSubmitted(false)} />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={(v) => setForm((f) => ({ ...f, name: v }))}
        required
      />
      <Input
        label="Company"
        name="company"
        value={form.company}
        onChange={(v) => setForm((f) => ({ ...f, company: v }))}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={(v) => setForm((f) => ({ ...f, email: v }))}
        required
      />
      <Input
        label="Phone"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
      />
      <Input
        label="Industry"
        name="industry"
        value={form.industry}
        onChange={(v) => setForm((f) => ({ ...f, industry: v }))}
      />
      <Input
        label="Number of Employees"
        name="employees"
        value={form.employees}
        onChange={(v) => setForm((f) => ({ ...f, employees: v }))}
      />
      <Select
        label="What are you interested in?"
        name="interest"
        value={form.interest}
        onChange={(v) => setForm((f) => ({ ...f, interest: v }))}
        options={[
          ...getBusinessProducts().map((p) => p.name),
          "Custom System",
          "Not Sure",
        ]}
      />
      <TextArea
        label="What's the biggest thing slowing you down right now?"
        name="slowdown"
        value={form.slowdown}
        onChange={(v) => setForm((f) => ({ ...f, slowdown: v }))}
      />
      <Button type="submit" variant="primary" className="mt-2 w-full">
        Book a Demo
      </Button>
      <OfflineNote />
    </form>
  );
}

const lookingForOptions = [
  "Not Sure Yet",
  "Custom Software",
  "Workflow Automation",
  "AI / Automation",
  "Operational System",
  "Consulting",
];

const budgetOptions = [
  "Not sure yet",
  "Under $2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000+",
  "Let's talk first",
];

export function ProjectForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    lookingFor: "Not Sure Yet",
    problem: "",
    currentTools: "",
    budget: "Not sure yet",
    timeline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will POST to an n8n webhook in a later pass. Not connected yet.
    console.log(form);
    setSubmitted(true);
  };

  if (submitted) {
    return <FormOffline onBack={() => setSubmitted(false)} />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={(v) => setForm((f) => ({ ...f, name: v }))}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={(v) => setForm((f) => ({ ...f, email: v }))}
        required
      />
      <Input
        label="Company / Organization"
        name="company"
        value={form.company}
        onChange={(v) => setForm((f) => ({ ...f, company: v }))}
      />
      <Input
        label="Website (optional)"
        name="website"
        type="url"
        value={form.website}
        onChange={(v) => setForm((f) => ({ ...f, website: v }))}
      />
      <Select
        label="What are you looking for?"
        name="lookingFor"
        value={form.lookingFor}
        onChange={(v) => setForm((f) => ({ ...f, lookingFor: v }))}
        options={lookingForOptions}
      />
      <TextArea
        label="What are you trying to solve?"
        name="problem"
        value={form.problem}
        onChange={(v) => setForm((f) => ({ ...f, problem: v }))}
        required
        placeholder="Just describe the problem — no technical terms needed."
      />
      <TextArea
        label="What are you currently using? (optional)"
        name="currentTools"
        value={form.currentTools}
        onChange={(v) => setForm((f) => ({ ...f, currentTools: v }))}
        placeholder="Spreadsheets, texts, another app, nothing..."
      />
      <Select
        label="Budget range (optional)"
        name="budget"
        value={form.budget}
        onChange={(v) => setForm((f) => ({ ...f, budget: v }))}
        options={budgetOptions}
      />
      <Input
        label="Timeline (optional)"
        name="timeline"
        value={form.timeline}
        onChange={(v) => setForm((f) => ({ ...f, timeline: v }))}
        placeholder="When do you need this?"
      />
      <Button type="submit" variant="primary" className="mt-2 w-full">
        Start the Conversation
      </Button>
      <OfflineNote />
    </form>
  );
}

export function ClubForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will POST to an n8n webhook in a later pass. Not connected yet.
    console.log({ club: true, ...form });
    setSubmitted(true);
  };

  if (submitted) {
    return <FormOffline onBack={() => setSubmitted(false)} />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={(v) => setForm((f) => ({ ...f, name: v }))}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={(v) => setForm((f) => ({ ...f, email: v }))}
        required
      />
      <Button type="submit" variant="primary" className="mt-2 w-full">
        Join the Club
      </Button>
      <OfflineNote />
    </form>
  );
}
