import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-layout";
import students from "../assets/students.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AnimaCraft — Our Story & Mission" },
      { name: "description", content: "Centre of Skill Learning has been shaping creative careers for 10 years through animation, VFX, design and technology education." },
      { property: "og:title", content: "About AnimaCraft" },
      { property: "og:description", content: "10 years shaping creative careers through industry-led education." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero kicker="About Us" title="Shaping Creative Careers" subtitle="For 10 years, Centre of Skill Learning has helped animators, VFX artists, designers, game creators and digital professionals build industry-ready careers." />
      <section className="container-x py-20 grid gap-10 lg:grid-cols-2 items-center">
        <img src={students} alt="AnimaCraft students at work" loading="lazy" className="rounded-2xl aspect-[4/3] object-cover w-full" />
        <div>
          <h2 className="font-display text-4xl">Our Mission</h2>
          <p className="mt-4 text-muted-foreground">To equip every learner with industry-aligned skills, real-world exposure, and a portfolio strong enough to open studio doors — anywhere in the world.</p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[["120+","Centres"],["500K+","Students Trained"],["25+","Years of Excellence"]].map(([n,t]) => (
              <div key={t} className="rounded-xl bg-muted p-4 text-center">
                <div className="font-display text-3xl text-primary">{n}</div>
                <div className="text-xs mt-1 text-muted-foreground">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-muted py-20">
        <div className="container-x">
          <h2 className="font-display text-4xl">What Sets Us Apart</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Industry-Led Curriculum","Programs co-created with active studios and creator collectives."],
              ["Placement Ecosystem","A national network of 1,000+ hiring partners across media & tech."],
              ["Global Certification","Government-recognised training partnered with skill councils."],
              ["Career + Creator Tracks","Study a role. Or study a business. We support both paths."],
              ["Mentors, Not Just Faculty","Learn from working professionals with active portfolios."],
              ["Real Projects","Live client briefs, festival submissions, and studio internships."],
            ].map(([t,d]) => (
              <div key={t} className="rounded-2xl bg-card border border-border p-6">
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
