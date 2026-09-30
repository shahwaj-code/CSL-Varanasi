import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-layout";
import { Quote, Star } from "lucide-react";
import t1 from "../assets/testimonial-1.jpg";
import t2 from "../assets/testimonial-2.jpg";
import t3 from "../assets/testimonial-3.jpg";
import t4 from "../assets/testimonial-4.jpg";
import t5 from "../assets/testimonial-5.jpg";
import t6 from "../assets/testimonial-6.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Student Testimonials — Center of Skill Learning" },
      { name: "description", content: "Read success stories from CSL graduates now working as animators, compositors, environment artists and designers across top studios." },
      { property: "og:title", content: "CSL Student Testimonials" },
      { property: "og:description", content: "Success stories from graduates working across film, gaming and design studios." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Testimonials,
});

const testimonials = [
  { name: "Aarav Mehta", role: "3D Animator at Sundeep Studios", img: t1, quote: "The mentorship at CSL is unmatched. My mentors didn't just teach software — they taught me how to think like a studio artist." },
  { name: "Preeti Sharma", role: "Compositor at Light & Wonder", img: t2, quote: "I walked in curious and walked out with a reel that got me interviews at four top studios. The placement team is exceptional." },
  { name: "Shivam Gupta", role: "Environment Artist", img: t3, quote: "The live projects made all the difference. I was already shipping work before I graduated — that's what studios want to see." },
  { name: "Shilpi Roy", role: "Motion Designer at Ogilvy", img: t4, quote: "The broadcast module rebuilt my craft from scratch. I now lead motion for national campaigns." },
  { name: "Ritika Singh", role: "Content Creator, 480K subscribers", img: t5, quote: "CSL taught me the business of content, not just the editing. That changed everything about how I work." },
  { name: "Kamna Gupta", role: "Product Designer at Zeta", img: t6, quote: "The design-systems training was better than anything I found online. My case studies got me shortlisted everywhere." },
];

function Testimonials() {
  return (
    <>
      <PageHero kicker="Testimonials" title="Success stories, in their own words." subtitle="Graduates from across our programs on mentorship, portfolios and landing their first studio role." />
      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-card border border-border p-8 hover-lift">
              <Quote className="h-8 w-8 text-[var(--gold)] mb-4" />
              <blockquote className="text-foreground/85 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border flex items-center gap-4">
                <img
                  src={t.img}
                  alt={`${t.name}, ${t.role}`}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-[var(--gold)]/50 shrink-0"
                />
                <span className="block">
                  <span className="block font-display text-lg font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground mt-0.5">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
            ))}
          </div>
          <span>4.9 · 800+ Google Reviews</span>
        </div>
      </section>
    </>
  );
}
