import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { posts } from "../lib/blog-data";
import { useEnquiry } from "../components/enquiry-modal";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — CSL Blog" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — CSL Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const { open } = useEnquiry();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="bg-background">
      <div className="container-x max-w-3xl py-14">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[var(--gold)]">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
          <CalendarDays className="h-3.5 w-3.5" /> {post.date}
        </p>
        <h1 className="font-display text-3xl md:text-5xl mt-3 leading-tight">{post.title}</h1>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{post.excerpt}</p>
        <img src={post.img} alt={post.title} className="mt-8 rounded-2xl w-full aspect-[16/9] object-cover" />

        <div className="mt-10 space-y-8">
          {post.sections.map((s: { h: string; p: string }) => (
            <section key={s.h}>
              <h2 className="font-display text-2xl">{s.h}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl">Want a personalised roadmap?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Talk to a CSL counsellor about the right program for your goals.</p>
          <button onClick={open} className="btn-primary btn-primary-hover mt-4">Book Free Counselling</button>
        </div>
      </div>

      <section className="border-t border-border bg-muted py-14">
        <div className="container-x">
          <h2 className="font-display text-2xl">Related articles</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-xl overflow-hidden bg-card border border-border hover-lift">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-widest font-semibold text-[var(--gold)]">{p.date}</p>
                  <h3 className="font-display text-sm font-semibold mt-1.5 leading-snug">{p.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">Read <ArrowRight className="h-3 w-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
