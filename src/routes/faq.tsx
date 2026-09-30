import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHero } from "../components/site-layout";
import { useEnquiry } from "../components/enquiry-modal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Admissions, Fees & Placements | Center of Skill Learning" },
      { name: "description", content: "Answers about CSL admissions, course fees and EMI options, program duration, certification, internships and placement assistance." },
      { property: "og:title", content: "CSL Frequently Asked Questions" },
      { property: "og:description", content: "Admissions, fees, duration, certification and placement questions answered." },
    ],
  }),
  component: Faq,
});

const faqs = [
  { q: "What is the admission process?", a: "Fill our enquiry form or book a free career counselling session. Our counsellors will guide you through eligibility, batch options and enrolment." },
  { q: "What are the fees and payment options?", a: "Fees vary by program. We offer easy EMI plans, education loans through our partner banks, and merit-based scholarships." },
  { q: "How long are the courses?", a: "Programs range from 4-month specialisations to 24-month career diplomas. Every course page lists exact duration and eligibility." },
  { q: "Do you offer placement assistance?", a: "Yes. Our placement cell offers 95% placement assistance with 1000+ hiring partners across studios, agencies and product companies." },
  { q: "Will I receive a certification?", a: "All graduates receive an industry-recognised CSL certification along with a portfolio review from our mentors." },
  { q: "Are internships part of the program?", a: "Structured internships are built into every long-format program. Short-term courses include a live-project capstone." },
  { q: "Do I need prior experience or a drawing background?", a: "No. Our foundation modules start from first principles — most students join with no professional experience." },
  { q: "Are there weekend or evening batches?", a: "Yes. We run weekday, evening and weekend batches so working professionals and students can both attend." },
];

function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { open } = useEnquiry();
  return (
    <>
      <PageHero kicker="FAQs" title="Questions, answered." subtitle="Everything you need to know before you enrol — or reach out to our counsellors any time." />
      <section className="container-x py-20 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="font-display text-3xl">Still unsure?</h2>
          <p className="mt-4 text-muted-foreground">Our counsellors help you pick the right program, batch and payment plan — free of cost.</p>
          <button onClick={open} className="btn-primary btn-primary-hover mt-6">Talk to a counsellor</button>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl bg-card border border-border overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between text-left p-5 font-display text-base md:text-lg font-semibold"
              >
                {f.q}
                <ChevronDown className={`h-5 w-5 shrink-0 transition ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
