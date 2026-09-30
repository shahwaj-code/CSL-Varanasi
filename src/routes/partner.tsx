import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-layout";
import { EnquiryForm } from "../components/enquiry-form";
import { PartnerLogoGrid, placementStats } from "../components/partner-logos";
import { Briefcase, Target, GraduationCap, Trophy, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Placements & Hiring Partners — Center of Skill Learning" },
      { name: "description", content: "100% internship guarantee, 95% placement record, ₹12 LPA highest package and 1000+ hiring partners across animation, VFX, design and tech." },
      { property: "og:title", content: "Placements & Hiring Partners — CSL" },
      { property: "og:description", content: "100% internships, 95% placement record, ₹12 LPA highest package, 1000+ hiring partners." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Placements,
});

const support = [
  { i: Target, t: "Guaranteed Internship", d: "Every enrolled student is placed into a live studio or agency internship." },
  { i: Briefcase, t: "Placement Drives", d: "Year-round on-campus and virtual hiring drives with recruiting companies." },
  { i: GraduationCap, t: "Portfolio & Interview Prep", d: "Showreel reviews, mock interviews and salary negotiation coaching." },
  { i: Trophy, t: "Lifetime Career Support", d: "Alumni keep access to the placement cell for future job switches." },
];

const process = [
  "Skill assessment and career mapping in your first month",
  "Portfolio and showreel built on live industry briefs",
  "Internship placement with a partner studio",
  "Interview training, resume and profile polishing",
  "Company interviews through our hiring network",
  "Offer support and post-joining mentorship",
];

function Placements() {
  return (
    <>
      <PageHero
        kicker="Placements & Hiring"
        title="Careers built on real hiring outcomes."
        subtitle="Internships, placement drives and interview training until you are hired."
      />

      <section className="bg-[#0B1B3A] text-white py-16 border-y border-white/10">
        <div className="container-x grid gap-4 grid-cols-2 lg:grid-cols-4">
          {placementStats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="font-display text-3xl md:text-4xl text-[var(--gold)]">{s.n}</p>
              <p className="mt-2 text-sm text-white/70 font-semibold">{s.l}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="container-x py-20">
        <p className="text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-bold">Our Hiring Network</p>
        <h2 className="font-display text-3xl md:text-5xl mt-4 text-white leading-tight">
          1000+ companies <span className="text-[var(--gold)]">hire from us.</span>
        </h2>
        <div className="mt-10">
          <PartnerLogoGrid variant="dark" />
        </div>
      </section>

      <section className="container-x pb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {support.map((s) => (
          <div key={s.t} className="rounded-2xl bg-[#0E0E0E] border border-white/10 p-6">
            <s.i className="h-7 w-7 text-[var(--gold)]" />
            <h3 className="font-display text-xl mt-4 text-white">{s.t}</h3>
            <p className="mt-2 text-sm font-light text-white/70 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </section>

      <section className="container-x pb-24 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-white">How our placement process works</h2>
          <ul className="mt-6 space-y-3">
            {process.map((p) => (
              <li key={p} className="flex gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--gold)]" />
                <span className="text-white/80 font-light">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <EnquiryForm compact />
      </section>
    </>
  );
}
