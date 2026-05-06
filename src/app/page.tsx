"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  FaChartLine,
  FaEnvelope,
  FaFacebookF,
  FaGlobeAfrica,
  FaHandHoldingHeart,
  FaInstagram,
  FaLeaf,
  FaRecycle,
  FaSeedling,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";

import CASHEW_NUT from "./../../public/cashew.png";
import CASHEWNUT from "./../../public/cashew_nut.jpg";
import CHIN_CHIN from "./../../public/chin_chin.jpg";
import GROUND_NUT from "./../../public/ground_nut.jpg";
import KILISHI_BOX from "./../../public/kilishi_box.jpg";
import KILISHI from "./../../public/kilishi.jpg";
import KULI_KULI from "./../../public/kuli_kuli.jpg";
import PEA_NUT from "./../../public/pea_nut.jpg";
import PLANTAINCHIPS from "./../../public/kulikuli.jpg";
import KULIKULI from "./../../public/kulikuli.jpg";
import PLANTAIN_CHIPS from "./../../public/plantain_chips.jpg";


const products = [
  {
    name: "Kilishi",
    description: "Premium sun-dried spiced beef, finished for modern retail shelves.",
    image: KILISHI,
    price: "NGN 2,500",
    variants: ["Original", "Spicy"],
  },
  {
    name: "Kuli Kuli",
    description: "Crunchy groundnut snack with clean packaging and consistent quality.",
    image: KULIKULI,
    price: "NGN 1,800",
    variants: ["Classic"],
  },
  {
    name: "Plantain Chips",
    description: "Crisp sliced plantains, naturally sweet and ready for distribution.",
    image: PLANTAIN_CHIPS,
    price: "NGN 2,000",
    variants: ["Sweet", "Savory"],
  },
  {
    name: "Roasted Cashew",
    description: "Premium cashews sourced from local farms and roasted in small batches.",
    image: CASHEW_NUT,
    price: "NGN 3,500",
    variants: ["Salted"],
  },
  {
    name: "Roasted Peanuts",
    description: "Fresh roasted peanuts with a familiar Nigerian taste and shelf-ready finish.",
    image: PEA_NUT,
    price: "NGN 1,500",
    variants: ["Salted"],
  },
  {
    name: "Chin Chin",
    description: "Crunchy fried dough snacks built for everyday enjoyment and gifting.",
    image: CHIN_CHIN,
    price: "NGN 2,200",
    variants: ["Traditional", "Coconut"],
  },
];

const features = [
  {
    icon: FaRecycle,
    title: "Sustainable Packaging",
    text: "Biodegradable packs designed to extend shelf life and reduce food waste.",
  },
  {
    icon: FaChartLine,
    title: "Retail Growth",
    text: "A cleaner brand system and consistent supply model for stores and distributors.",
  },
  {
    icon: FaGlobeAfrica,
    title: "Global Standards",
    text: "Local Nigerian snacks positioned for export conversations and modern shelves.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Farmer First",
    text: "Direct market access that helps rural producers earn fairer, steadier returns.",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1595855759917-5e8e8001a0f8?w=700&h=700&fit=crop",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&h=700&fit=crop",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&h=700&fit=crop",
  "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=700&h=700&fit=crop",
];

const testimonials = [
  {
    quote: "The quality feels intentional. These are Nigerian snacks presented like a real export brand.",
    name: "Amaka Johnson",
    role: "Food Blogger, Lagos",
  },
  {
    quote: "The packaging, shelf life, and product consistency make the range easy to recommend.",
    name: "David Okonkwo",
    role: "Retail Partner, Abuja",
  },
  {
    quote: "It is exactly the kind of product line buyers want: authentic, clear, and reliable.",
    name: "Sarah Williams",
    role: "Export Buyer, UK",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Partnership enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:info@unikratives.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Unikrative home">
            <span className="grid size-11 place-items-center rounded-lg bg-emerald-700 text-white">
              <FaLeaf aria-hidden className="size-5" />
            </span>
            <span>
              <span className="block text-base font-semibold leading-tight">Unikrative C-enterprise</span>
              <span className="block text-xs font-medium uppercase tracking-[0.18em] text-amber-700">
                U-Agro Snacks
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-stone-700 md:flex">
            <a href="#about" className="transition hover:text-emerald-700">About</a>
            <a href="#products" className="transition hover:text-emerald-700">Products</a>
            <a href="#impact" className="transition hover:text-emerald-700">Impact</a>
            <a href="#contact" className="rounded-lg bg-stone-950 px-5 py-2.5 text-white transition hover:bg-emerald-800">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden bg-white pt-28">
        <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-[1fr_0.88fr] lg:px-8">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
            <motion.p
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800"
            >
              <FaSeedling aria-hidden /> From farm to flavor
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-stone-950 sm:text-6xl lg:text-7xl"
            >
              Empowering farmers. Elevating Nigerian snacks.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-stone-650">
              Unikrative C-enterprise transforms familiar local snacks into shelf-ready products through
              better sourcing, sustainable packaging, and market access for rural producers.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-700 px-6 font-semibold text-white transition hover:bg-emerald-800"
              >
                Explore products
              </a>
              <a
                href="https://wa.me/qr/A32AQ3KXCHYNI1"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-6 font-semibold text-stone-900 transition hover:border-emerald-700 hover:text-emerald-800"
              >
                <FaWhatsapp aria-hidden /> WhatsApp us
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-stone-200 pt-8">
              {[
                ["40%", "Projected sales lift"],
                ["20%", "Waste reduction goal"],
                ["$5B", "Snack market signal"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong className="block text-3xl font-semibold text-emerald-700">{value}</strong>
                  <span className="mt-1 block text-sm leading-5 text-stone-600">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <Image
              src={CASHEWNUT}
              alt="Packaged Nigerian snacks and agricultural produce"
              width={1100}
              height={1300}
              priority
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-2xl shadow-stone-950/15"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/92 p-5 shadow-xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">Built for better markets</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">
                Clean packaging, reliable quality, and a farmer-connected supply chain.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg shadow-xl shadow-stone-950/10"
          >
            <Image
              src={GROUND_NUT}
              alt="Entrepreneur reviewing agribusiness growth plans"
              width={1000}
              height={780}
              className="aspect-[5/4] w-full object-cover"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.1 }}>
            <motion.p variants={fadeUp} className="section-kicker">Founder story</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">Led by lived experience in farming and finance.</motion.h2>
            <motion.p variants={fadeUp} className="section-copy">
              Founder John Uka O. combines accounting, startup experience, and agribusiness training with a
              personal understanding of the market barriers rural farmers face.
            </motion.p>
            <motion.p variants={fadeUp} className="section-copy mt-4">
              U-Agro Snacks is his answer: a brand that turns local agricultural produce into competitive
              products while giving farmers fairer access to buyers, retailers, and export opportunities.
            </motion.p>
            <motion.blockquote variants={fadeUp} className="mt-8 rounded-lg border-l-4 border-emerald-700 bg-white p-6 text-lg font-medium leading-8 shadow-sm">
              Sustainable change starts when farmers earn what their work is truly worth.
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      <section id="impact" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker">What makes us different</p>
            <h2 className="section-title">A practical model for modern Nigerian agribusiness.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-lg border border-stone-200 bg-stone-50 p-6"
              >
                <feature.icon aria-hidden className="size-7 text-emerald-700" />
                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-stone-650">{feature.text}</p>
              </motion.article>
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
            <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-stone-950 px-6 font-semibold text-white transition hover:bg-emerald-800">
              Wholesale enquiry
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={900}
                  height={900}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                    <span className="whitespace-nowrap text-sm font-bold text-emerald-700">{product.price}</span>
                  </div>
                  <p className="mt-3 min-h-14 leading-7 text-stone-650">{product.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant) => (
                        <span key={variant} className="rounded-lg bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-white/15 bg-white/8 p-8">
            <FaHandHoldingHeart aria-hidden className="size-9 text-amber-300" />
            <h2 className="mt-6 text-3xl font-semibold">Our mission</h2>
            <p className="mt-4 text-lg leading-8 text-emerald-50">
              Modernize agriculture, bridge market gaps, and help small-scale farmers turn local produce
              into products with stronger commercial value.
            </p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/8 p-8">
            <FaGlobeAfrica aria-hidden className="size-9 text-amber-300" />
            <h2 className="mt-6 text-3xl font-semibold">Our vision</h2>
            <p className="mt-4 text-lg leading-8 text-emerald-50">
              Become a leading Nigerian snack brand known for quality, creativity, sustainability, and
              global-ready presentation.
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
                  key={image}
                  src={image}
                  alt={`U-Agro agricultural journey image ${index + 1}`}
                  width={700}
                  height={700}
                  className="aspect-square rounded-lg object-cover shadow-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker">Market feedback</p>
            <h2 className="section-title">Trusted by people who care about quality.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <div className="mb-5 flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} aria-hidden className="size-4" />
                  ))}
                </div>
                <p className="text-lg leading-8 text-stone-800">{testimonial.quote}</p>
                <div className="mt-6 border-t border-stone-200 pt-5">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-stone-600">{testimonial.role}</p>
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

          <form onSubmit={handleSubmit} className="rounded-lg border border-stone-200 bg-white p-6 shadow-xl shadow-stone-950/5 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-stone-800">
                Full name
                <input
                  required
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  className="form-field"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-stone-800">
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
            <label className="mt-5 grid gap-2 text-sm font-semibold text-stone-800">
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

      <footer className="bg-stone-950 px-5 py-12 text-white lg:px-8">
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
