import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Clock, Search } from "lucide-react";
import { PageHero } from "../components/site-layout";
import { courses as list, categories } from "../lib/courses-data";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Courses — Centre Of Skill Learning" },
      { name: "description", content: "Explore professional programs in animation, VFX, Unreal Engine, graphic design, UI/UX, motion design and web development. Search and filter to find your course." },
      { property: "og:title", content: "Centre Of Skill Learning Courses" },
      { property: "og:description", content: "Programs across animation, VFX, motion design, graphic design, UI/UX and web development." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All Courses");
  const filtered = useMemo(() => list.filter((c) =>
    (cat === "All Courses" || c.category === cat) &&
    (query.trim() === "" || c.title.toLowerCase().includes(query.toLowerCase()) || c.short.toLowerCase().includes(query.toLowerCase()))
  ), [query, cat]);

  return (
    <>
      <PageHero kicker="Programs" title="Centre Of Skill Learning Courses" subtitle="Industry-aligned programs across animation, VFX, design, gaming and AI. Search and filter to find yours." />
      <section className="container-x py-16">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses…"
              className="w-full rounded-full border border-input bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-2 text-sm font-medium transition ${cat === c ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, idx) => (
            <Link key={`${c.slug}-${idx}`} to="/courses/$slug" params={{ slug: c.slug }} className="group rounded-xl overflow-hidden bg-black border border-white/10 hover:border-[var(--gold)]/50 hover-lift">
              <div className="h-36 md:h-40 overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-muted px-2.5 py-1 font-medium">{c.category}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {c.duration}</span>
                </div>
                <h3 className="font-display text-base mt-2 leading-snug line-clamp-2">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-1">{c.short}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-semibold text-xs">Explore Course <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
          {filtered.length === 0 && <p className="col-span-full text-center text-muted-foreground py-10">No matching courses.</p>}
        </div>
      </section>
    </>
  );
}
