import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import heroSite from "@/assets/hero-site.jpg";
import heroCementBagsAsset from "@/assets/hero-cement-bags.jpg.asset.json";
import heroScaffoldAsset from "@/assets/hero-scaffold.jpg.asset.json";
import serviceBulkAsset from "@/assets/service-bulk.jpg.asset.json";
import serviceLogisticsAsset from "@/assets/service-logistics.jpg.asset.json";
import serviceSupplyAsset from "@/assets/service-supply.jpg.asset.json";

const serviceBulk = serviceBulkAsset.url;
const serviceLogistics = serviceLogisticsAsset.url;
const serviceSupply = serviceSupplyAsset.url;

const heroSlides = [
  {
    src: heroSite,
    alt: "Aerial view of a large construction site with workers laying reinforced foundations",
  },
  {
    src: heroCementBagsAsset.url,
    alt: "Stacked cement bags surrounded by grey cement dust at a supply yard",
  },
  {
    src: serviceSupplyAsset.url,
    alt: "Construction workers assembling reinforcement steel at a bridge project site",
  },
  {
    src: heroScaffoldAsset.url,
    alt: "Workers on scaffolding at a large reinforced concrete building under construction",
  },
];

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
  { value: "50+", label: "Construction Companies" },
  { value: "40", label: "Trucks Delivered Monthly" },
  { value: "20,000", label: "Metric Tons Distributed Annually" },
  { value: "99.9%", label: "On-Time Delivery Rate" },
];

const services = [
  {
    image: serviceBulk,
    alt: "Pallets of cement bags stacked in a warehouse with a supervisor in safety gear",
    title: "Bulk Cement Distribution",
    text: "Supplying premium cement in bulk volumes to sites nationwide.",
  },
  {
    image: serviceLogistics,
    alt: "Loaded haulage trailer with covered cargo parked along a highway",
    title: "Delivery Logistics",
    text: "Ensuring timely and efficient delivery to your site, every time.",
  },
  {
    image: serviceSupply,
    alt: "Construction workers assembling reinforcement steel at a bridge project site",
    title: "Supply Chain Management",
    text: "Tailored procurement solutions for wholesalers and retailers.",
  },
];

const testimonials = [
  {
    quote:
      "Working with Golden Vee has made our procurement much easier. Their service is dependable, consistent, and highly professional.",
    name: "Engr. Briggs",
    role: "Port Harcourt Construction Ltd.",
  },
  {
    quote: "They consistently deliver on schedule, regardless of where the order needs to go.",
    name: "Mrs. Faith",
    role: "Cement Retail Shop Owner",
  },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Products & Services" },
  { href: "#contact", label: "Contact Us" },
];

function Index() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-sky">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a
            href="#home"
            className="rounded-md bg-background px-4 py-2 text-lg font-extrabold tracking-tight text-foreground"
          >
            Golden Vee
            <span className="ml-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Integrated
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
            className="inline-flex items-center gap-2 rounded-md bg-background px-4 py-2 text-xs font-bold uppercase tracking-wide text-foreground transition-transform active:scale-[0.98]"
          >
            Reach Us <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden">
          {heroSlides.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={1920}
              height={1080}
              loading={i === 0 ? "eager" : "lazy"}
              aria-hidden={i !== slide}
              className={`absolute inset-0 -z-10 size-full object-cover transition-opacity duration-1000 ${
                i === slide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 -z-10 bg-ink/70" />
          <div className="mx-auto max-w-6xl px-5 py-28 md:py-40">
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground md:text-6xl">
              Strengthening Nigeria’s Growth Through Dependable Cement Supply
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/80">
              Reliable, affordable, and efficient cement distribution solutions designed to meet
              the demands of your construction projects.
            </p>
            <a
              href="#services"
              className="mt-12 inline-flex rounded-md bg-sky px-8 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform active:scale-[0.98]"
            >
              Our Services
            </a>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid items-stretch gap-0 md:grid-cols-2">
            <div className="bg-sky p-10 md:p-14">
              <p className="text-lg text-primary-foreground/70">Build Your Dream</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary-foreground md:text-4xl">
                Why Choose Golden Vee Integrated?
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-primary-foreground/90">
                With a strong reputation for dependable logistics, competitive rates, and a{" "}
                <strong>99.9% on-time delivery record</strong>, Golden Vee Integrated provides efficient
                cement distribution services. The company serves more than{" "}
                <strong>350 clients across Nigeria</strong> and supplies over{" "}
                <strong>20,000 metric tons of cement each year</strong>, contributing to the nation’s continued development.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 rounded-md bg-background px-8 py-4 text-sm font-semibold uppercase tracking-wide text-sky"
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
                className="inline-flex items-center gap-2 rounded-md bg-sky px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground"
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
            Here's What Our Customers Say
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-md border border-border p-9">
                <blockquote className="text-base leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-semibold text-sky">{t.name}</span>
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
                <MapPin className="size-6 text-sky" />
                <h3 className="mt-4 font-semibold text-primary-foreground">Meet Us</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">Port Harcourt, Nigeria</p>
              </div>
              <div>
                <Phone className="size-6 text-sky" />
                <h3 className="mt-4 font-semibold text-primary-foreground">Call Us</h3>
                <a
                  href="tel:+2347064591361"
                  className="mt-2 block text-sm text-primary-foreground/70 hover:text-sky"
                >
                  +234 706 459 1361
                </a>
              </div>
              <div>
                <Mail className="size-6 text-sky" />
                <h3 className="mt-4 font-semibold text-primary-foreground">Email Us</h3>
                <a
                  href="mailto:chinule13@gmail.com"
                  className="mt-2 block text-sm text-primary-foreground/70 hover:text-sky"
                >
                  chinule13@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sky py-6">
        <p className="mx-auto max-w-6xl px-5 text-xs text-primary-foreground/80">
          &copy; {new Date().getFullYear()} Golden Vee Integrated. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
