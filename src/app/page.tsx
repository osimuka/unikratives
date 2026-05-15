"use client";

import { FormEvent, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebookF,
  FaGlobeAfrica,
  FaHandHoldingHeart,
  FaInstagram,
  FaLeaf,
  FaSeedling,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";

import CASHEWNUT from "./../../public/cashew_nut.jpg";
import FOUNDER from "./../../public/unikrative.jpg";
import { ThemeToggle } from "./theme-toggle";
import products from "../../data/products";
import { features, galleryImages, stats, testimonials } from "@/data/page";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(".hero-reveal, .hero-media, .scroll-reveal", {
          clearProps: "all",
          opacity: 1,
        });

        gsap.utils.toArray<HTMLElement>(".stat-value").forEach((element) => {
          const value = Number(element.dataset.value ?? 0);
          element.textContent = `${element.dataset.prefix ?? ""}${value}${element.dataset.suffix ?? ""}`;
        });

        return;
      }

      gsap
        .timeline({ defaults: { duration: 0.75, ease: "power3.out" } })
        .from(".hero-reveal", { opacity: 0, y: 24, stagger: 0.12 })
        .from(".hero-media", { opacity: 0, scale: 0.96, duration: 0.8 }, "-=0.45");

      gsap.utils.toArray<HTMLElement>(".scroll-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 24,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".stat-value").forEach((element) => {
        const counter = { value: 0 };
        const target = Number(element.dataset.value ?? 0);
        const prefix = element.dataset.prefix ?? "";
        const suffix = element.dataset.suffix ?? "";

        gsap.to(counter, {
          value: target,
          duration: 1.45,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-stats]",
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            element.textContent = `${prefix}${Math.round(counter.value)}${suffix}`;
          },
          onComplete: () => {
            element.textContent = `${prefix}${target}${suffix}`;
          },
        });
      });
    },
    { scope: mainRef },
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Partnership enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:info@unikratives.com?subject=${subject}&body=${body}`;
  }

  return (
    <main ref={mainRef} className="min-h-screen bg-stone-50 text-stone-950 transition-colors dark:bg-stone-950 dark:text-stone-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-stone-950/88">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Unikrative home">
            <span className="grid size-11 place-items-center rounded-lg bg-emerald-700 text-white">
              <FaLeaf aria-hidden className="size-5" />
            </span>
            <span>
              <span className="block text-base font-semibold leading-tight">Unikrative C-enterprise</span>
              <span className="block text-xs font-medium uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
                U-Agro Snacks
              </span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-7 text-sm font-medium text-stone-700 md:flex dark:text-stone-300">
              <a href="#about" className="transition hover:text-emerald-700 dark:hover:text-emerald-300">About</a>
              <a href="#products" className="transition hover:text-emerald-700 dark:hover:text-emerald-300">Products</a>
              <a href="#impact" className="transition hover:text-emerald-700 dark:hover:text-emerald-300">Impact</a>
              <a href="#contact" className="rounded-lg bg-stone-950 px-5 py-2.5 text-white transition hover:bg-emerald-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-emerald-300">
                Contact
              </a>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden bg-white pt-28 dark:bg-stone-950">
        <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-[1fr_0.88fr] lg:px-8">
          <div>
            <p
              className="hero-reveal mb-5 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200"
            >
              <FaSeedling aria-hidden /> From farm to flavor
            </p>
            <h1
              className="hero-reveal max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-stone-950 sm:text-6xl lg:text-7xl dark:text-stone-50"
            >
              Empowering farmers. Elevating Nigerian snacks.
            </h1>
            <p className="hero-reveal mt-6 max-w-2xl text-lg leading-8 text-stone-650 dark:text-stone-300">
              Unikrative C-enterprise transforms familiar local snacks into shelf-ready products through
              better sourcing, sustainable packaging, and market access for rural producers.
            </p>
            <div className="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-700 px-6 font-semibold text-white transition hover:bg-emerald-800"
              >
                Explore products
              </a>
              <a
                href="https://wa.me/qr/A32AQ3KXCHYNI1"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-6 font-semibold text-stone-900 transition hover:border-emerald-700 hover:text-emerald-800 dark:border-white/10 dark:bg-stone-900 dark:text-stone-100 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
              >
                <FaWhatsapp aria-hidden /> WhatsApp us
              </a>
            </div>
            <div data-stats className="hero-reveal mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-stone-200 pt-8 dark:border-white/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong
                    className="stat-value block text-3xl font-semibold text-emerald-700 dark:text-emerald-300"
                    data-prefix={stat.prefix}
                    data-suffix={stat.suffix}
                    data-value={stat.value}
                  >
                    {`${stat.prefix ?? ""}0${stat.suffix}`}
                  </strong>
                  <span className="mt-1 block text-sm leading-5 text-stone-600 dark:text-stone-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-media relative">
            <Image
              src={CASHEWNUT}
              alt="Packaged Nigerian snacks and agricultural produce"
              width={1100}
              height={1300}
              priority
              className="aspect-4/5 w-full rounded-lg object-cover shadow-2xl shadow-stone-950/15 dark:shadow-black/40"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/92 p-5 shadow-xl backdrop-blur dark:bg-stone-950/82">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700 dark:text-amber-300">Built for better markets</p>
              <p className="mt-2 text-lg font-semibold text-stone-950 dark:text-stone-50">
                Clean packaging, reliable quality, and a farmer-connected supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div className="scroll-reveal hidden md:block overflow-hidden rounded-lg shadow-xl shadow-stone-950/10 dark:shadow-black/35">
            <Image
              src={FOUNDER}
              alt="Entrepreneur reviewing agribusiness growth plans"
              width={1000}
              height={780}
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="scroll-reveal section-kicker">Founder story</p>
            <h2 className="scroll-reveal section-title">Led by lived experience in farming and finance.</h2>
            <p className="scroll-reveal section-copy">
              John Uka O. is a passionate entrepreneur with a background in Accounting from Michael
              Okpara University of Agriculture, Umudike. As an executive founding member of the MOUAU
              Entrepreneurship Club, he honed his passion for agriculture while leveraging his financial
              expertise to drive business success.
            </p>
            <div className="scroll-reveal my-10 md:hidden block overflow-hidden rounded-lg shadow-xl shadow-stone-950/10 dark:shadow-black/35">
              <Image
                src={FOUNDER}
                alt="Entrepreneur reviewing agribusiness growth plans"
                width={1000}
                height={780}
                className="w-full object-cover"
              />
            </div>
            <p className="scroll-reveal section-copy mt-4">
              With more than two years in the financial sector, four years in startups, and extensive
              agribusiness training, he has developed strong financial management and leadership skills.
              Growing up with farmer parents, he witnessed the struggles of rural farmers in accessing fair
              markets. This inspired him to start U-Agro Services, an innovation tackling post-harvest losses
              through eco-friendly packaging and innovative sales strategies—boosting sales by 40% and
              reducing waste by 20%.
            </p>
            <blockquote className="scroll-reveal mt-8 rounded-lg border-l-4 border-emerald-700 bg-white p-6 text-lg font-medium leading-8 shadow-sm dark:border-emerald-400 dark:bg-stone-900 dark:text-stone-100">
              His mission is to transform local agricultural products into globally competitive goods, ensuring
              farmers earn what they truly deserve. Through entrepreneurship, I am committed to driving
              sustainable change in Nigeria’s agribusiness sector.
            </blockquote>
          </div>
        </div>
      </section>

      <section id="impact" className="bg-white px-5 py-24 lg:px-8 dark:bg-stone-900">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker">What makes us different</p>
            <h2 className="section-title">A practical model for modern Nigerian agribusiness.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="scroll-reveal rounded-lg border border-stone-200 bg-stone-50 p-6 dark:border-white/10 dark:bg-stone-950"
              >
                <feature.icon aria-hidden className="size-7 text-emerald-700 dark:text-emerald-300" />
                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-stone-650 dark:text-stone-300">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker">Product range</p>
              <h2 className="section-title">Premium snacks with authentic Nigerian roots.</h2>
            </div>
            <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-stone-950 px-6 font-semibold text-white transition hover:bg-emerald-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-emerald-300">
              Wholesale enquiry
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="scroll-reveal overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-stone-900 dark:hover:shadow-black/35"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={900}
                  height={900}
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                    <span className="whitespace-nowrap text-sm font-bold text-emerald-700 dark:text-emerald-300">{product.price}</span>
                  </div>
                  <p className="mt-3 min-h-14 leading-7 text-stone-650 dark:text-stone-300">{product.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant) => (
                        <span key={variant} className="rounded-lg bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-300/10 dark:text-amber-200">
                          {variant}
                        </span>
                      ))}
                    </div>
                    <div className="flex text-amber-500" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar key={index} aria-hidden className="size-3.5" />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 px-5 py-24 text-white lg:px-8 dark:bg-emerald-950">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-white/15 bg-white/8 p-8 dark:bg-white/6">
            <FaHandHoldingHeart aria-hidden className="size-9 text-amber-300" />
            <h2 className="mt-6 text-3xl font-semibold">Our mission</h2>
            <p className="mt-4 text-lg leading-8 text-emerald-50">
              Unikrative C-Enterprise&apos;s mission is to modernize agriculture and empower rural small-scale
              farmers, bridge market gaps, and showcase Nigeria’s agricultural wealth to a global audience.
            </p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/8 p-8 dark:bg-white/6">
            <FaGlobeAfrica aria-hidden className="size-9 text-amber-300" />
            <h2 className="mt-6 text-3xl font-semibold">Our vision</h2>
            <p className="mt-4 text-lg leading-8 text-emerald-50">
              To become a leading brand delivering innovative, high-quality local snack products that meet
              global standards while promoting Nigerian creativity and value.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-start">
            <div>
              <p className="section-kicker">Our journey</p>
              <h2 className="section-title">From rural producers to modern shelves.</h2>
              <p className="section-copy">
                The brand connects sourcing, packaging, storytelling, and distribution into one practical
                system for local snack products.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <Image
                  key={image.id}
                  src={image.url}
                  alt={`U-Agro agricultural journey image ${index + 1}`}
                  width={700}
                  height={700}
                  className="aspect-square rounded-lg object-cover shadow-sm dark:shadow-black/25"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8 dark:bg-stone-900">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker">Market feedback</p>
            <h2 className="section-title">Trusted by people who care about quality.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-lg border border-stone-200 bg-stone-50 p-6 dark:border-white/10 dark:bg-stone-950">
                <div className="mb-5 flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} aria-hidden className="size-4" />
                  ))}
                </div>
                <p className="text-lg leading-8 text-stone-800 dark:text-stone-200">{testimonial.quote}</p>
                <div className="mt-6 border-t border-stone-200 pt-5 dark:border-white/10">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-stone-600 dark:text-stone-400">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Bring U-Agro Snacks to your shelves.</h2>
            <p className="section-copy">
              Reach out for wholesale orders, partnerships, export opportunities, or product enquiries.
            </p>
            <div className="mt-8 space-y-4">
              <a href="mailto:info@unikratives.com" className="contact-link">
                <FaEnvelope aria-hidden /> info@unikratives.com
              </a>
              <a href="https://wa.me/qr/A32AQ3KXCHYNI1" className="contact-link">
                <FaWhatsapp aria-hidden /> Chat with us on WhatsApp
              </a>
              <a href="https://www.unikratives.com" className="contact-link">
                <FaGlobeAfrica aria-hidden /> www.unikratives.com
              </a>
            </div>
            <div className="mt-8 flex gap-3">
              <a className="social-link" href="https://www.facebook.com/share/19Kuc6nbxg/" aria-label="Facebook">
                <FaFacebookF aria-hidden />
              </a>
              <a className="social-link" href="https://instagram.com/unikratives" aria-label="Instagram">
                <FaInstagram aria-hidden />
              </a>
              <a className="social-link" href="https://wa.me/qr/A32AQ3KXCHYNI1" aria-label="WhatsApp">
                <FaWhatsapp aria-hidden />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border border-stone-200 bg-white p-6 shadow-xl shadow-stone-950/5 md:p-8 dark:border-white/10 dark:bg-stone-900 dark:shadow-black/30">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-stone-800 dark:text-stone-200">
                Full name
                <input
                  required
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  className="form-field"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-stone-800 dark:text-stone-200">
                Email address
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className="form-field"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-stone-800 dark:text-stone-200">
              Message
              <textarea
                required
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                className="form-field min-h-40 resize-y"
                placeholder="Tell us what you need..."
              />
            </label>
            <button type="submit" className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-6 font-semibold text-white transition hover:bg-emerald-800">
              <FaEnvelope aria-hidden /> Send enquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-stone-950 px-5 py-12 text-white lg:px-8 dark:bg-black">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.7fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-emerald-700">
                <FaLeaf aria-hidden />
              </span>
              <div>
                <p className="font-semibold">Unikrative C-enterprise</p>
                <p className="text-sm text-stone-400">U-Agro Snacks</p>
              </div>
            </div>
            <p className="mt-5 max-w-md leading-7 text-stone-400">
              From farm to flavor. Preserving Nigeria&apos;s agricultural heritage through better snack products.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Explore</h3>
            <div className="mt-4 grid gap-2 text-sm text-stone-400">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#products" className="hover:text-white">Products</a>
              <a href="#impact" className="hover:text-white">Impact</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Products</h3>
            <p className="mt-4 text-sm leading-7 text-stone-400">
              Kilishi, Kuli Kuli, Plantain Chips, Cashew, Peanuts, and Chin Chin.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-stone-500">
          Copyright 2026 Unikrative C-enterprise. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
