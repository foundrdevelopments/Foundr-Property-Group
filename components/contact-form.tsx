
"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

const services = ["Develop", "Refine", "Protect", "Not sure yet"]

const investmentRanges = [
  "Below R50,000",
  "R50,000 – R150,000",
  "R150,000 – R500,000",
  "R500,000 – R1,000,000",
  "R1,000,000 – R3,000,000",
  "Above R3,000,000",
  "Budget to be determined",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (submitting) return

    setSubmitting(true)
    setSubmitError("")

    try {
      const formData = new FormData(e.currentTarget)

      const name = String(formData.get("name") || "")
      const email = String(formData.get("email") || "")
      const phone = String(formData.get("phone") || "")
      const service = String(formData.get("service") || "")
      const investment = String(formData.get("investment") || "")
      const message = String(formData.get("message") || "")

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: [
            `Service: ${service || "Not specified"}`,
            `Indicative Project Investment: ${investment || "Not specified"}`,
            "",
            message,
          ].join("\n"),
        }),
      })

      if (!response.ok) {
        throw new Error("Submission failed")
      }

      if (typeof window !== "undefined") {
        const gtag = (
          window as Window & {
            gtag?: (...args: unknown[]) => void
          }
        ).gtag

        if (typeof gtag === "function") {
          gtag("event", "generate_lead", {
            lead_source: "contact_form",
          })
        }
      }

      setSubmitted(true)
    } catch {
      setSubmitError(
        "We couldn't send your enquiry. Please try again or contact us directly."
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-border/60 bg-card p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Check className="h-6 w-6" />
        </span>

        <h3 className="mt-6 text-2xl">
          Thank you for your enquiry.
        </h3>

        <p className="mt-3 max-w-sm text-pretty text-muted-foreground">
          Thank you for contacting Foundr Property Group.
          Your consultation request has been submitted successfully.
          A member of our team will be in touch to discuss your
          project requirements.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-medium text-accent hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border/60 bg-card p-8 md:p-10"
    >
      <div className="mb-8">
        <h2 className="text-2xl">
          Tell Us About Your Project
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Share a few details to help us better understand your
          requirements and prepare for your consultation.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </Field>

        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </Field>

        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="+27 ..."
          />
        </Field>

        <Field label="Nature of Project" htmlFor="service">
          <select
            id="service"
            name="service"
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field
          label="Indicative Project Investment (Optional)"
          htmlFor="investment"
        >
          <select
            id="investment"
            name="investment"
            className={inputClass}
            defaultValue=""
          >
            <option value="">
              Select your anticipated investment
            </option>
            {investmentRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </Field>
        <p className="mt-2 text-xs text-muted-foreground">
          An approximate range is sufficient. This helps us
          understand the anticipated scale of your project.
        </p>
      </div>

      <div className="mt-6">
        <Field label="Tell Us About Your Vision" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your property, your project requirements and what you hope to achieve..."
          />
        </Field>
      </div>

      {submitError && (
        <p role="alert" className="mt-4 text-sm text-red-600">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Request Your Consultation"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  )
}

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20"

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
