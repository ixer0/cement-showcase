import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Mail, MapPin, Phone } from "lucide-react";

import heroSite from "@/assets/hero-site.jpg";
import serviceBulk from "@/assets/service-bulk.jpg";
import serviceLogistics from "@/assets/service-logistics.jpg";
import serviceSupply from "@/assets/service-supply.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Golden Vee Integrated | Reliable Cement Distribution" },
      {
        name: "description",
        content:
          "Efficient, cost-effective cement distribution and delivery logistics for construction companies, wholesalers and retailers across Nigeria.",
      },
      { property: "og:title", content: "Golden Vee Integrated | Reliable Cement Distribution" },
      {
        property: "og:description",
        content:
          "Bulk cement distribution, delivery logistics and supply chain management with a 99% on-time delivery rate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "500+", label: "Construction Companies" },
  { value: "160+", label: "Trucks Delivered Monthly" },
  { value: "300K", label: "Metric Tons Distributed Annually" },
  { value: "99%", label: "On-Time Delivery Rate" },
];

const services = [
  {
    image: serviceBulk,
    alt: "Stacked cement bags on a wooden pallet inside a distribution warehouse",
    title: "Bulk Cement Distribution",
    text: "Supplying premium cement in bulk volumes to sites nationwide.",
  },
  {
    image: serviceLogistics,
    alt: "Convoy of haulage trucks travelling along a highway at golden hour",
    title: "Delivery Logistics",
    text: "Ensuring timely and efficient delivery to your site, every time.",
  },
  {
    image: serviceSupply,
    alt: "Aerial view of shipping containers stacked at a port terminal",
    title: "Supply Chain Management",
    text: "Tailored procurement solutions for wholesalers and retailers.",
  },
];

const testimonials = [
  {
    quote:
      "Tetra Trade has simplified our procurement process. Reliable, consistent, and professional.",
    name: "Engr. Adewale",
    role: "Lagos Construction Ltd.",
  },
  {
    quote: "They've never missed a delivery deadline, no matter the location.",
    name: "Fatima S.",
    role: "Real Estate Developer",
  },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Products & Services" },
  { href: "#contact", label: "Contact Us" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-gold">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a
            href="#home"
            className="rounded-md bg-background px-4 py-2 text-lg font-extrabold tracking-tight text-ink"
          >
            Tetra
            <span className="ml-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Trade Limited
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-primary-foreground lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-opacity hover:opacity-70">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-background px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-transform active:scale-[0.98]"
          >
            Reach Us <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden">
          <img
            src={heroSite}
            alt="Aerial view of a large construction site with workers laying reinforced foundations"
            width={1920}
            height={1080}
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-ink/70" />
          <div className="mx-auto max-w-6xl px-5 py-28 md:py-40">
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground md:text-6xl">
              Building Nigeria's Future with Reliable Cement Distribution
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/80">
              Efficient, cost-effective, and trusted cement logistics tailored for your
              construction needs.
            </p>
            <a
              href="#services"
              className="mt-12 inline-flex rounded-md bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform active:scale-[0.98]"
            >
              Our Services
            </a>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid items-stretch gap-0 md:grid-cols-2">
            <div className="bg-gold p-10 md:p-14">
              <p className="text-lg text-primary-foreground/70">Build Your Dream</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary-foreground md:text-4xl">
                Why Choose Golden Vee Integrated?
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-primary-foreground/90">
                With reliable logistics, competitive pricing, and a proven track record of{" "}
                <strong>99% on-time deliveries</strong>, Golden Vee Integrated ensures seamless
                cement distribution, supporting over <strong>500 clients nationwide</strong> and
                delivering <strong>300,000+ metric tons annually</strong> to fuel Nigeria's growth.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 rounded-md bg-background px-8 py-4 text-sm font-semibold uppercase tracking-wide text-gold"
              >
                Work With Us <BadgeCheck className="size-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 border border-border">
              {stats.map((s) => (
                <div key={s.label} className="border border-border p-8 md:p-10">
                  <p className="text-3xl font-extrabold text-ink md:text-4xl">{s.value}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-muted py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-sm text-muted-foreground">Golden Vee Integrated Services</p>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-6">
              <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Our Key Offerings</h2>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground"
              >
                Work With Us <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className="overflow-hidden rounded-md bg-card shadow-sm">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-7">
                    <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-center text-3xl font-extrabold text-ink md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-md border border-border p-9">
                <blockquote className="text-base leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-semibold text-gold">{t.name}</span>
                  <span className="text-sm text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-ink py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
              Let's Connect!
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              <div>
                <MapPin className="size-6 text-gold" />
                <h3 className="mt-4 font-semibold text-primary-foreground">Meet Us</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">Abuja, Nigeria</p>
              </div>
              <div>
                <Phone className="size-6 text-gold" />
                <h3 className="mt-4 font-semibold text-primary-foreground">Call Us</h3>
                <a
                  href="tel:+2348109236423"
                  className="mt-2 block text-sm text-primary-foreground/70 hover:text-gold"
                >
                  +234 810 923 6423
                </a>
              </div>
              <div>
                <Mail className="size-6 text-gold" />
                <h3 className="mt-4 font-semibold text-primary-foreground">Email Us</h3>
                <a
                  href="mailto:info@tetratradelimited.com"
                  className="mt-2 block text-sm text-primary-foreground/70 hover:text-gold"
                >
                  info@tetratradelimited.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gold py-6">
        <p className="mx-auto max-w-6xl px-5 text-xs text-primary-foreground/80">
          &copy; {new Date().getFullYear()} Golden Vee Integrated. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
