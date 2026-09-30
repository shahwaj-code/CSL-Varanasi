import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useEnquiry } from "../components/enquiry-modal";

import { CheckCircle2, ChevronDown, Clock, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { courseMap, courses as allCourses, type Course } from "../lib/courses-data";

const faqs = [
  { q: "What is the admission process?", a: "Fill our enquiry form or book a free counselling session. Our team will guide you through eligibility, batch options and fees." },
  { q: "Do you offer EMI or scholarships?", a: "Yes — easy EMIs, education loans through our partner banks and merit-based scholarships are available." },
  { q: "Is placement assistance included?", a: "Every long-format program includes structured placement assistance with our 1000+ hiring partners." },
];

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = courseMap[params.slug];
    if (!course) throw notFound();
    return { course, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Course not found — Centre Of Skill Learning" }, { name: "robots", content: "noindex" }] };
    const { course } = loaderData;
    return {
      meta: [
        { title: `${course.title} — Centre Of Skill Learning` },
        { name: "description", content: course.intro },
        { property: "og:title", content: `${course.title} — Centre Of Skill Learning` },
        { property: "og:description", content: course.intro },
      ],
    };
  },
  component: CourseDetail,
  notFoundComponent: () => (
    <div className="container-x py-20 text-center">
      <h1 className="font-display text-5xl">Course not found</h1>
      <Link to="/courses" className="mt-6 inline-block text-[var(--gold)] font-semibold">Back to all courses</Link>
    </div>
  ),
});

const related = allCourses.map((c) => ({ slug: c.slug, title: c.title, img: c.img }));

function CourseDetail() {
  const { course, slug } = Route.useLoaderData() as { course: Course; slug: string };
  const { open: openEnquiry } = useEnquiry();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const relatedFiltered = related.filter((r) => r.slug !== slug).slice(0, 3);

  // Auto-open the enquiry popup a few seconds after the course page loads
  useEffect(() => {
    const t = setTimeout(() => openEnquiry(), 6000);
    return () => clearTimeout(t);
  }, [slug, openEnquiry]);


  return (
    <>
      {/* HERO BANNER */}
      <section className="gradient-hero border-b border-border">
        <div className="container-x py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold">{course.tag}</p>
            <h1 className="font-display text-3xl md:text-[2.75rem] mt-4 leading-[1.1]">{course.title}</h1>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-xl">{course.intro}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 max-w-xl">

              <div className="rounded-xl border border-white/10 bg-[#0E0E0E] p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-white/55">Duration</p>
                <p className="mt-1 font-display text-xl text-white inline-flex items-center gap-2"><Clock className="h-4 w-4 text-[var(--gold)]" />{course.duration}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0E0E0E] p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-white/55">Eligibility</p>
                <p className="mt-1 text-sm font-light text-white/80 inline-flex items-start gap-2"><GraduationCap className="h-4 w-4 mt-0.5 text-[var(--gold)] shrink-0" />{course.eligibility}</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-white/55">Software Covered</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {course.tools.map((t) => (
                  <span key={t} className="rounded-full border border-[var(--gold)]/35 bg-[var(--gold)]/10 px-3 py-1.5 text-xs font-medium text-[var(--gold)]">{t}</span>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <button onClick={openEnquiry} className="btn-primary btn-primary-hover">Enquire Now <ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
          <img src={course.img} alt={course.title} className="rounded-3xl aspect-[4/3] object-cover w-full shadow-glow" />
        </div>
      </section>

      <section className="container-x py-20">
        <div className="space-y-14">
          {/* OVERVIEW & HIGHLIGHTS */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Course Highlights</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {course.outcomes.map((o) => (
                <div key={o} className="flex items-start gap-3 rounded-2xl bg-card border border-border p-4">
                  <CheckCircle2 className="h-5 w-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <span className="text-sm">{o}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Software Covered</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {course.tools.map((t) => (
                <span key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">{t}</span>
              ))}
            </div>
          </div>

          {/* CAREERS */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl">What You Will Get — Job Options</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">On completing this program you receive an industry-recognised certificate, a mentor-reviewed portfolio and placement assistance for roles such as:</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {course.careers.map((c) => (
                <span key={c} className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/40 px-4 py-2 text-sm">
                  <Briefcase className="h-4 w-4 text-[var(--gold)]" />{c}
                </span>
              ))}
            </div>
          </div>

          {/* PLACEMENT */}
          <div className="rounded-3xl gradient-dark text-white p-8 md:p-10">
            <h2 className="font-display text-3xl text-white">Placement Assistance</h2>
            <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
              Dedicated placement cell with 1000+ hiring partners, portfolio reviews, mock interviews and studio walk-ins.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[{ n: "95%", l: "Placement Assistance" }, { n: "1000+", l: "Hiring Partners" }, { n: "5K+", l: "Alumni Network" }].map((s) => (
                <div key={s.l} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="font-display text-3xl text-[var(--gold)]">{s.n}</p>
                  <p className="mt-1 text-sm text-white/70">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((f, i) => (
                <div key={f.q} className="rounded-2xl border border-border bg-card overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left font-display text-lg">
                    {f.q}
                    <ChevronDown className={`h-5 w-5 transition ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>


      {/* RELATED COURSES */}
      <section className="bg-muted py-20">
        <div className="container-x">
          <h2 className="font-display text-3xl md:text-4xl">Related Courses</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedFiltered.map((r) => (
              <Link key={r.slug} to="/courses/$slug" params={{ slug: r.slug }} className="group rounded-2xl overflow-hidden bg-card border border-border hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={r.img} alt={r.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="font-display text-xl">{r.title}</h3>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
