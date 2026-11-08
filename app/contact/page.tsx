import type { Metadata } from "next"
import { Clock, Mail, Phone } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Bespoke Project Consultation",
  description:
    "Request a bespoke project consultation with Foundr Property Group. Explore tailored renovations, construction, waterproofing and property care.",
}

const details = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Project Enquiries"
        title="Request a Bespoke Project Consultation."
        intro="Exceptional spaces begin with a considered approach. Tell us about your property, your vision and what you hope to achieve. Our team will review your requirements and discuss a tailored approach to bringing your project to life."
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-2xl">Speak With Our Team</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Call or email any of our team directly — we&apos;ll be glad to help.
            </p>

            <div className="mt-10 flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                <Phone className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Phone</p>
                <ul className="mt-2 divide-y divide-border/60">
                  {siteConfig.contact.people.map((person) => (
                    <li key={person.name}>
                      <a
                        href={`tel:${person.tel}`}
                        className="flex min-h-11 items-center justify-between gap-4 py-2 text-foreground transition-colors hover:text-accent"
                      >
                        <span className="font-medium">{person.name}</span>
                        <span className="tabular-nums">{person.phone}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ul className="mt-8 space-y-8">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block text-foreground transition-colors hover:text-accent">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-foreground">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                <Clock className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Office hours</p>
                <dl className="mt-2 divide-y divide-border/60">
                  {siteConfig.contact.hours.map((entry) => (
                    <div key={entry.days} className="flex min-h-11 items-center justify-between gap-4 py-2">
                      <dt className="text-foreground">{entry.days}</dt>
                      <dd
                        className={
                          entry.time === "Closed" ? "text-muted-foreground" : "tabular-nums text-foreground"
                        }
                      >
                        {entry.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
