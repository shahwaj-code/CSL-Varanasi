import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site-layout";
import { ArrowRight } from "lucide-react";
import { posts } from "../lib/blog-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Career Guides & Industry Insights | CSL" },
      { name: "description", content: "Career guides, tutorials and industry insights on animation, VFX, game design and the creator economy from Center of Skill Learning." },
      { property: "og:title", content: "Center of Skill Learning Blog" },
      { property: "og:description", content: "Career guides, tutorials and industry insights." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero kicker="Blog" title="Insights, guides & industry stories" subtitle="From career playbooks to industry trend reports — updates from the CSL team and mentors." />
      <section className="container-x py-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-xl overflow-hidden bg-card border border-border hover-lift">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-4">
              <div className="text-[10px] text-[var(--gold)] font-semibold uppercase tracking-widest">{p.category ?? "Industry Insights"} · {p.date}</div>
              <h2 className="font-display text-base font-semibold mt-1.5 leading-snug">{p.title}</h2>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">{p.excerpt}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">Read Article <ArrowRight className="h-3 w-3" /></span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
