import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { EnquiryForm } from "../components/enquiry-form";
import { useEnquiry } from "../components/enquiry-modal";
import {
  ArrowRight, Award, Users, Briefcase, Sparkles, GraduationCap, Trophy,
  Search, Star, ChevronDown, ChevronLeft, ChevronRight, Quote, CheckCircle2, Clock, Target, Lightbulb,
  Download,
} from "lucide-react";
import c3d from "../assets/course-3d.jpg";
import { HeroParticles } from "../components/hero-particles";
import { PartnerLogoGrid, placementStats } from "../components/partner-logos";

import cvfx from "../assets/course-vfx.jpg";
import cgame from "../assets/course-game.jpg";
import ccontent from "../assets/course-content.jpg";
import cmotion from "../assets/course-motion.jpg";
import cshort from "../assets/course-short.jpg";
import heroWarrior from "../assets/hero-warrior.jpg";
import heroCyber from "../assets/hero-cyber.jpg";
import heroDragon from "../assets/hero-dragon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Center of Skill Learning — Premium Institute for Animation, VFX, Design & Tech" },
      { name: "description", content: "Center of Skill Learning (CSL) — India's premium training institute for animation, VFX, UI/UX, motion graphics, game design, web development and generative AI. Industry mentors. Placement support." },
      { name: "keywords", content: "animation institute, VFX training, UI UX course, game design, motion graphics, generative AI course, graphic design institute India, Center of Skill Learning" },
      { property: "og:title", content: "Center of Skill Learning — Premium Creative Careers Institute" },
      { property: "og:description", content: "Industry-led programs in animation, VFX, design, gaming, web and AI with dedicated placement support." },
    ],
  }),
  component: Home,
});

import { courses, categories, type Course } from "../lib/courses-data";

const studentWorks = [
  { title: "Neon Runner", author: "Aarav Mehta", course: "Animation", img: c3d },
  { title: "Kaiju Skyline", author: "Preeti Sharma", course: "VFX", img: cvfx },
  { title: "Shadow Realm", author: "Shivam Gupta", course: "Game Design", img: cgame },
  { title: "The Daily Cut", author: "Shilpi Roy", course: "Motion Graphics", img: ccontent },
  { title: "Broadcast 2049", author: "Ritika Singh", course: "Motion Graphics", img: cmotion },
  { title: "Studio System", author: "Kamna Gupta", course: "UI/UX", img: cshort },
];


const whyChoose = [
  { i: Award, t: "Industry Expert Trainers", d: "Learn from professionals actively shipping work for top studios and agencies." },
  { i: Briefcase, t: "Portfolio Development", d: "Graduate with a curated portfolio built to open studio doors." },
  { i: Target, t: "Internship Opportunities", d: "Structured internships with our 1000+ partner studios and agencies." },
  { i: GraduationCap, t: "Placement Support", d: "Dedicated placement cell with 95% placement assistance." },
  { i: Users, t: "Small Batch Sizes", d: "Personalised mentorship in intimate cohorts — never lost in a crowd." },
  { i: Trophy, t: "Career Counselling", d: "One-on-one career guidance from admission through your first job." },
];


const testimonials = [
  { name: "Aarav Mehta", role: "3D Animator at Sundeep Studios", quote: "The mentorship at CSL is unmatched. My mentors didn't just teach software — they taught me how to think like a studio artist." },
  { name: "Preeti Sharma", role: "Compositor at Light & Wonder", quote: "I walked in curious and walked out with a reel that got me interviews at four top studios. The placement team is exceptional." },
  { name: "Shivam Gupta", role: "Environment Artist at OpenCV", quote: "The live projects made all the difference. I was already shipping work before I graduated — that's what studios want to see." },
];

const blogPosts = [
  { slug: "career-in-3d-animation", title: "How to build a career in 3D animation in 2026", img: c3d, date: "Jul 12, 2026", excerpt: "A step-by-step roadmap from foundations to your first studio job." },
  { slug: "vfx-industry-trends", title: "The state of VFX in India: trends & opportunities", img: cvfx, date: "Jun 28, 2026", excerpt: "Where the industry is growing and what skills studios hire for." },
  { slug: "game-design-portfolio", title: "Building a game design portfolio that stands out", img: cgame, date: "Jun 05, 2026", excerpt: "What recruiters look for and how to structure your reel." },
];

const faqs = [
  { q: "What is the admission process?", a: "Fill our enquiry form or book a free career counselling session. Our counsellors will guide you through eligibility, batch options and enrolment." },
  { q: "What are the fees and payment options?", a: "Fees vary by program. We offer easy EMI plans, education loans through our partner banks, and merit-based scholarships." },
  { q: "How long are the courses?", a: "Programs range from 4-month specialisations to 24-month career diplomas. Every course page lists exact duration and eligibility." },
  { q: "Do you offer placement assistance?", a: "Yes. Our placement cell offers 95% placement assistance with 1000+ hiring partners across studios, agencies and product companies." },
  { q: "Will I receive a certification?", a: "All graduates receive an industry-recognised CSL certification along with a portfolio review from our mentors." },
  { q: "Are internships part of the program?", a: "Structured internships are built into every long-format program. Short-term courses include a live-project capstone." },
];

function Home() {
  const { open: openEnquiry } = useEnquiry();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All Courses");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      img: heroWarrior,
      kicker: "Admissions Open · 2026",
      title: "Creativity",
      titleAccent: "Starts Here.",
      subtitle: "Industry-ready training in Animation, VFX, Gaming and Design.",
    },
    {
      img: heroCyber,
      kicker: "Career Ready · Studio Grade",
      title: "Build Worlds.",
      titleAccent: "Ship Stories.",
      subtitle: "Master studio pipelines with expert mentors.",
    },
    {
      img: heroDragon,
      kicker: "Live Projects · Real Studios",
      title: "Creative",
      titleAccent: "Power.",
      subtitle: "Build a portfolio with dedicated placement support.",
    },
  ];

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  const filteredCourses = useMemo(() => courses.filter((c) =>
    (cat === "All Courses" || c.category === cat) &&
    (query.trim() === "" || c.title.toLowerCase().includes(query.toLowerCase()) || c.short.toLowerCase().includes(query.toLowerCase()))
  ), [query, cat]);

  return (
    <>
      {/* HERO SLIDER — MAAC style */}
      <section className="relative bg-black overflow-hidden">
        <div className="relative h-[560px] md:h-[640px]">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <img
                src={s.img}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover ${i === slide ? "animate-ken-burns" : ""}`}
                {...(i === 0 ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
              <div className="container-x relative h-full flex items-center pb-20 md:pb-24">
                <div className="max-w-2xl">
                  <p className="text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-bold">{s.kicker}</p>
                  <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mt-5 leading-[0.95]">
                    {s.title}
                    <span className="block text-[var(--gold)]">{s.titleAccent}</span>
                  </h1>
                  <p className="mt-6 max-w-xl text-white/85 text-base md:text-lg leading-relaxed">{s.subtitle}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button onClick={openEnquiry} className="btn-primary btn-primary-hover">
                      Book Free Demo <ArrowRight className="h-4 w-4" />
                    </button>
                    <a href="https://wa.me/919999380187?text=Hi%2C%20please%20send%20me%20the%20brochure" target="_blank" rel="noreferrer" className="btn-accent btn-accent-hover">
                      <Download className="h-4 w-4" /> Download Brochure
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Fire / ember particle layer */}
          <HeroParticles />

          {/* Slider arrows */}

          <button
            aria-label="Previous slide"
            onClick={() => setSlide((s) => (s - 1 + slides.length) % slides.length)}
            className="hidden md:grid absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center bg-black/50 hover:bg-[var(--gold)] hover:text-black text-white border border-white/20 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => setSlide((s) => (s + 1) % slides.length)}
            className="hidden md:grid absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center bg-black/50 hover:bg-[var(--gold)] hover:text-black text-white border border-white/20 transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-[var(--gold)]" : "w-4 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature strip under hero */}
      <section className="relative z-10 bg-[#0A0A0A] border-y border-white/10">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 py-7">
          {[
            { i: Users, t: "Industry Experts", d: "Learn from experienced professionals." },
            { i: Sparkles, t: "Advanced Training", d: "World-class infrastructure and tools." },
            { i: Briefcase, t: "Placement Support", d: "100% placement assistance for your career." },
            { i: Award, t: "Certification", d: "Industry-recognized certifications." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="flex items-start gap-3">
              <div className="h-11 w-11 shrink-0 grid place-items-center rounded-md border border-[var(--gold)]/40 text-[var(--gold)]">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-display text-sm font-bold text-white uppercase tracking-wide">{t}</p>
                <p className="text-xs text-white/60 mt-0.5 leading-snug">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>




      {/* ABOUT — no image, key-point style */}
      <section className="bg-black py-24 border-b border-white/10">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-bold">About CSL</p>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight text-white">
              Talent deserves <span className="text-[var(--gold)]">better training.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { i: Target, t: "Our Mission", d: "Turn creative passion into a professional career, without compromise." },
              { i: Lightbulb, t: "Our Vision", d: "To be the most trusted name in creative career training across India." },
              { i: Briefcase, t: "Industry-Focused", d: "Curriculum co-designed with active studios and agencies." },
              { i: Sparkles, t: "Live-Project Learning", d: "Real client briefs and production pipelines from semester one." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="p-6 rounded-2xl bg-[#0E0E0E] border border-white/10 hover:border-[var(--gold)]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[var(--gold)]/15 grid place-items-center">
                  <Icon className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <p className="font-display text-lg mt-4 text-[var(--gold)]">{t}</p>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              "10 years shaping creative careers",
              "1000+ hiring partners across India",
              "5,000+ students trained & placed",
            ].map((k) => (
              <div key={k} className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#0E0E0E] p-4">
                <CheckCircle2 className="h-5 w-5 text-[var(--gold)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--gold)]">{k}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* COURSES */}
      <section id="courses" className="bg-muted py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold">Programs</p>
              <h2 className="font-display text-4xl md:text-5xl mt-4">Industry-Ready Courses</h2>

            </div>
            <div className="relative w-full md:w-80">
              <Search className="h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses…"
                className="w-full rounded-full border border-input bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${cat === c ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-primary"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((c) => (
              <Link key={`${c.slug}-${c.title}`} to="/courses/$slug" params={{ slug: c.slug }} className="group h-[600px] rounded-xl overflow-hidden bg-black border border-white/10 hover:border-[var(--gold)]/50 hover-lift">
                <div className="overflow-hidden" style={{ height: "400px" }}>
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-contain object-center bg-[#111]" />
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-muted px-2.5 py-1 font-medium">{c.category}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {c.duration}</span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl mt-3 font-semibold leading-snug">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{c.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-sm text-primary group-hover:text-[var(--gold)] transition">
                    Explore Course <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
            {filteredCourses.length === 0 && (
              <p className="col-span-full text-center text-muted-foreground py-10">No matching courses. Try a different search.</p>
            )}
          </div>
        </div>
      </section>

      {/* STUDENT WORK — light, narrow */}
      <section className="bg-background py-20">
        <div className="container-x max-w-4xl">
          <div className="text-center">
            <p className="text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold">Student Work</p>
            <h2 className="font-display text-3xl md:text-4xl mt-3">A portfolio gallery, built by our students.</h2>
            <p className="mt-3 text-sm text-muted-foreground">Handpicked projects from recent cohorts.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {studentWorks.map((w) => (
              <figure key={w.title} className="group rounded-xl overflow-hidden bg-card border border-border hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={w.img} alt={`${w.title} by ${w.author}`} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <figcaption className="p-3">
                  <p className="text-[10px] text-[var(--gold)] uppercase tracking-widest font-semibold">{w.course}</p>
                  <p className="font-display text-sm font-semibold mt-1 leading-tight">{w.title}</p>
                  <p className="text-xs text-muted-foreground">by {w.author}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/students-world" className="inline-flex items-center gap-1.5 font-semibold text-sm text-primary hover:text-[var(--gold)]">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PLACEMENT & HIRING */}
      <section className="bg-[#0B1B3A] text-white py-24 border-y border-white/10">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-bold">Placement &amp; Hiring</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-white">Hired by the studios you dream of working for.</h2>
            <p className="mt-4 text-white/75 leading-relaxed">Every student gets a guaranteed internship, dedicated placement drives and interview preparation until they are hired.</p>
          </div>
          <div className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4">
            {placementStats.map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <p className="font-display text-3xl md:text-4xl text-[var(--gold)]">{s.n}</p>
                <p className="mt-2 text-sm text-white/70 font-semibold">{s.l}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <PartnerLogoGrid variant="dark" />
          </div>

        </div>
      </section>



      {/* WHY CHOOSE US */}

      <section className="container-x py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-display text-[var(--gold)] uppercase tracking-[0.12em] text-3xl md:text-4xl font-semibold">Why Choose CSL</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map(({ i: Icon, t, d }) => (
            <div key={t} className="p-6 rounded-2xl bg-card border border-border hover-lift">
              <div className="h-12 w-12 rounded-xl bg-[var(--gold)]/15 grid place-items-center">
                <Icon className="h-6 w-6 text-[var(--gold)]" />
              </div>
              <h3 className="font-display text-lg md:text-xl mt-4 font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="container-x py-24">
        <div className="max-w-2xl">
          <p className="text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl mt-4">Success stories, in their own words.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-card border border-border p-8 relative hover-lift">
              <Quote className="h-8 w-8 text-[var(--gold)] mb-4" />
              <blockquote className="text-foreground/85 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <p className="font-display text-lg font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
            ))}
          </div>
          <span>4.9 · 800+ Google Reviews</span>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-muted py-20">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold">From the Blog</p>
              <h2 className="font-display text-3xl md:text-4xl mt-3">Insights, guides & industry stories.</h2>
              <p className="mt-2 text-sm text-muted-foreground">Career playbooks and industry trends from our mentors.</p>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-1.5 font-semibold text-sm text-primary hover:text-[var(--gold)]">
              Read All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-xl overflow-hidden bg-card border border-border hover-lift">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-3.5">
                  <div className="text-[10px] text-[var(--gold)] font-semibold uppercase tracking-widest">{p.date}</div>
                  <h3 className="font-display text-sm font-semibold mt-1.5 leading-snug">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold">FAQs</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Questions, answered.</h2>
            <p className="mt-4 text-muted-foreground">Everything you need to know before you enrol — or reach out to our counsellors any time.</p>
            <button onClick={openEnquiry} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:brightness-110 transition">
              Talk to a counsellor
            </button>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="rounded-2xl bg-card border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left p-5 font-display text-base md:text-lg font-semibold"
                >
                  {f.q}
                  <ChevronDown className={`h-5 w-5 shrink-0 transition ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / ENQUIRY */}
      <section id="contact" className="scroll-mt-24 bg-muted py-24">

        <div className="container-x grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <p className="text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold">Contact / Enquiry</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Ready to begin? Let's talk.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Send us an enquiry, drop by our campus, or book a free career counselling call. Our counsellors respond within one working day.</p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5" />
                <div><p className="font-semibold">CSL HQ</p><p className="text-muted-foreground">Andheri West, Mumbai, Maharashtra 400053</p></div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5" />
                <div><p className="font-semibold">+91 99993 80187</p><p className="text-muted-foreground">Mon–Sat, 10am–7pm IST</p></div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5" />
                <div><p className="font-semibold">hello@cslindia.example</p><p className="text-muted-foreground">We reply within one working day</p></div>
              </div>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
