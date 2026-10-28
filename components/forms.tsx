"use client";

import { useState } from "react";
import { Button, Container } from "./ui";
import { getBusinessProducts } from "../lib/products";

const LEAD_WEBHOOK = "https://jaystampedit.app.n8n.cloud/webhook/mthd-lead";

const ERROR_MESSAGE =
  "Something went wrong while sending your request. Please try again.";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface LeadPayload {
  formType: string;
  product: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  whatTheyNeed: string;
  currentTools: string;
  budget: string;
  timeline: string;
  sourcePage: string;
}

function emptyPayload(formType: string, product: string): LeadPayload {
  return {
    formType,
    product,
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    whatTheyNeed: "",
    currentTools: "",
    budget: "",
    timeline: "",
    sourcePage: "",
  };
}

function useLeadSubmit() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [honeypot, setHoneypot] = useState("");

  const submit = async (payload: LeadPayload) => {
    // Honeypot filled = bot. Silently drop the submission.
    if (honeypot) return;
    setStatus("submitting");
    try {
      const res = await fetch(LEAD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          sourcePage: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error(`Lead webhook responded ${res.status}`);
      setStatus("success");
    } catch (err) {
      console.error("[lead-submit]", err instanceof Error ? err.message : err);
      setStatus("error");
    }
  };

  return { status, submit, honeypot, setHoneypot, reset: () => setStatus("idle") };
}

function HoneypotField({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="website_url">Website</label>
      <input
        id="website_url"
        name="website_url"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function FormSuccess({
  message,
  onBack,
}: {
  message: string;
  onBack: () => void;
}) {
  return (
    <div className="rounded-2xl border border-mthd-accent/40 bg-mthd-accent/5 p-8 text-center">
      <h3 className="text-xl font-medium text-white">Sent.</h3>
      <p className="mt-2 text-mthd-muted">{message}</p>
      <div className="mt-6">
        <Button onClick={onBack} variant="secondary">
          Send another
        </Button>
      </div>
    </div>
  );
}

function SubmitButton({
  status,
  label,
}: {
  status: SubmitStatus;
  label: string;
}) {
  return (
    <Button
      type="submit"
      variant="primary"
      className="mt-2 w-full"
      disabled={status === "submitting"}
    >
      {status === "submitting" ? "Sending..." : label}
    </Button>
  );
}

function ErrorNote() {
  return (
    <p className="text-center text-sm text-red-400">{ERROR_MESSAGE}</p>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

const FORM_TYPE_BY_INTEREST: Record<string, string> = {
  "Join the Beta": "BETA",
  "Join the Waitlist": "WAITLIST",
  "Request Access": "ACCESS",
  "Request a Demo": "DEMO",
  "General Question": "DEMO",
};

const SUCCESS_BY_FORM_TYPE: Record<string, string> = {
  PROJECT:
    "Thanks — your request has been received. I'll review what you're trying to solve and follow up with you soon.",
  BETA: "You're in. Your beta request has been received and we'll follow up with next steps.",
  ACCESS: "Your request has been received and we'll follow up with next steps.",
  DEMO: "Your demo request has been received. We'll follow up to coordinate the next step.",
  WAITLIST: "You're on the list. We'll keep you updated as development continues.",
  CLUB: "Welcome to the MTHD Club. You'll hear from us when there's something new to test.",
};

export function LeadForm({
  product,
  interest,
}: {
  product?: string;
  interest?: string;
}) {
  const { status, submit, honeypot, setHoneypot, reset } = useLeadSubmit();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    product: product ?? "Something else / not sure",
    interest: interest ?? "Request Access",
    message: "",
  });

  const formType = FORM_TYPE_BY_INTEREST[form.interest] ?? "ACCESS";
  const payloadProduct =
    form.product === "Something else / not sure" ? "MTHD" : form.product;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    const payload = emptyPayload(formType, payloadProduct);
    payload.name = form.name;
    payload.email = form.email;
    payload.company = form.company;
    payload.interest = form.interest;
    payload.whatTheyNeed = form.message;
    submit(payload);
  };

  if (status === "success") {
    return (
      <FormSuccess
        message={
          formType === "WAITLIST"
            ? "You're on the list. We'll keep you updated as development continues."
            : (SUCCESS_BY_FORM_TYPE[formType] ?? SUCCESS_BY_FORM_TYPE.ACCESS)
        }
        onBack={reset}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <HoneypotField value={honeypot} onChange={setHoneypot} />
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
      {status === "error" && <ErrorNote />}
      <SubmitButton status={status} label="Send Request" />
    </form>
  );
}

export function WaitlistForm({ product }: { product: string }) {
  const { status, submit, honeypot, setHoneypot, reset } = useLeadSubmit();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    const payload = emptyPayload("WAITLIST", product);
    payload.name = form.name;
    payload.email = form.email;
    payload.company = form.company;
    payload.whatTheyNeed = form.industry ? `Industry: ${form.industry}` : "";
    submit(payload);
  };

  if (status === "success") {
    return (
      <FormSuccess
        message={SUCCESS_BY_FORM_TYPE.WAITLIST}
        onBack={reset}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="waitlist">
      <HoneypotField value={honeypot} onChange={setHoneypot} />
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
      {status === "error" && <ErrorNote />}
      <SubmitButton status={status} label="Join the Waitlist" />
    </form>
  );
}

export function BookDemoForm() {
  const { status, submit, honeypot, setHoneypot, reset } = useLeadSubmit();
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
    if (status === "submitting") return;
    const payload = emptyPayload("DEMO", form.interest === "Not Sure" || form.interest === "Custom System" ? "MTHD" : form.interest);
    payload.name = form.name;
    payload.email = form.email;
    payload.phone = form.phone;
    payload.company = form.company;
    payload.interest = form.interest;
    const details = [
      form.slowdown,
      form.industry ? `Industry: ${form.industry}` : "",
      form.employees ? `Employees: ${form.employees}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    payload.whatTheyNeed = details;
    submit(payload);
  };

  if (status === "success") {
    return (
      <FormSuccess message={SUCCESS_BY_FORM_TYPE.DEMO} onBack={reset} />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <HoneypotField value={honeypot} onChange={setHoneypot} />
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
      {status === "error" && <ErrorNote />}
      <SubmitButton status={status} label="Book a Demo" />
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
  const { status, submit, honeypot, setHoneypot, reset } = useLeadSubmit();
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
    if (status === "submitting") return;
    if (!EMAIL_RE.test(form.email)) return;
    const payload = emptyPayload("PROJECT", "MTHD");
    payload.name = form.name;
    payload.email = form.email;
    payload.company = form.company;
    payload.interest = form.lookingFor;
    payload.whatTheyNeed = [
      form.problem,
      form.website ? `Website: ${form.website}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    payload.currentTools = form.currentTools;
    payload.budget = form.budget;
    payload.timeline = form.timeline;
    submit(payload);
  };

  if (status === "success") {
    return (
      <FormSuccess message={SUCCESS_BY_FORM_TYPE.PROJECT} onBack={reset} />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <HoneypotField value={honeypot} onChange={setHoneypot} />
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
      {status === "error" && <ErrorNote />}
      <SubmitButton status={status} label="Start the Conversation" />
    </form>
  );
}

export function ClubForm() {
  const { status, submit, honeypot, setHoneypot, reset } = useLeadSubmit();
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (!EMAIL_RE.test(form.email)) return;
    const payload = emptyPayload("CLUB", "MTHD Club");
    payload.name = form.name;
    payload.email = form.email;
    submit(payload);
  };

  if (status === "success") {
    return (
      <FormSuccess message={SUCCESS_BY_FORM_TYPE.CLUB} onBack={reset} />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <HoneypotField value={honeypot} onChange={setHoneypot} />
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
      {status === "error" && <ErrorNote />}
      <SubmitButton status={status} label="Join the Club" />
    </form>
  );
}
