import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-layout";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — AnimaCraft" },
      { name: "description", content: "Workshops, competitions, and industry masterclasses at AnimaCraft — where students create, compete, and level up." },
      { property: "og:title", content: "Events — AnimaCraft" },
      { property: "og:description", content: "Workshops, competitions, and industry masterclasses at AnimaCraft." },
    ],
  }),
  component: Events,
});

const events = [
  { name: "Showreel Showdown", when: "March 2026", desc: "A multi-category student competition to hone presentation and portfolio skills." },
  { name: "Animation Awards", when: "May 2026", desc: "India's marquee student animation awards with expert critique." },
  { name: "Creator Camp", when: "June 2026", desc: "A 4-day immersive with workshops, seminars, and studio-style collaboration in Goa." },
  { name: "Industry Connect", when: "August 2026", desc: "Zonal events with alumni programs and industry sessions." },
  { name: "100 Hour Film", when: "September 2026", desc: "A high-pressure creative sprint to make a short film in 100 hours." },
  { name: "Lens Fest", when: "November 2026", desc: "A photography & filmmaking contest with expert feedback rounds." },
  { name: "Masterclass Live", when: "Monthly", desc: "Live webinars by industry professionals covering trends, tools, and tips." },
  { name: "Portfolio Day", when: "Quarterly", desc: "Recruiters meet graduating students for direct portfolio reviews." },
];

function Events() {
  return (
    <>
      <PageHero kicker="Events" title="Create. Compete. Level Up." subtitle="Every AnimaCraft event is a chance to challenge yourself and build industry-ready confidence." />
      <section className="container-x py-16 grid gap-6 md:grid-cols-2">
        {events.map((e) => (
          <article key={e.name} className="rounded-2xl bg-card border border-border p-6">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-display text-2xl">{e.name}</h3>
              <span className="text-xs text-primary font-semibold uppercase tracking-widest">{e.when}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
          </article>
        ))}
      </section>
    </>
  );
}
