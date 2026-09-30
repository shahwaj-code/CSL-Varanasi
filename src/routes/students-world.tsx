import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-layout";
import c3d from "../assets/course-3d.jpg";
import cvfx from "../assets/course-vfx.jpg";
import cgame from "../assets/course-game.jpg";
import ccontent from "../assets/course-content.jpg";
import cmotion from "../assets/course-motion.jpg";

export const Route = createFileRoute("/students-world")({
  head: () => ({
    meta: [
      { title: "Students' World — AnimaCraft" },
      { name: "description", content: "Explore work from AnimaCraft students — animation reels, VFX shots, game builds, and content projects." },
      { property: "og:title", content: "Students' World — AnimaCraft" },
      { property: "og:description", content: "Where AnimaCraft students showcase their best work." },
    ],
  }),
  component: StudentsWorld,
});

const works = [
  { name: "Ritvik Kumar", title: "Character Reel", img: c3d },
  { name: "Tanuj Dhami", title: "VFX Compositing", img: cvfx },
  { name: "Mohik Dhakate", title: "Game Environment", img: cgame },
  { name: "Anjali Kashyap", title: "Vlog Series", img: ccontent },
  { name: "Chhandosi Mukherjee", title: "Broadcast Package", img: cmotion },
  { name: "Ashad Khan", title: "Short Film", img: cvfx },
  { name: "Deepak Kumar", title: "Level Design", img: cgame },
  { name: "Indranuj Das", title: "Motion Titles", img: cmotion },
  { name: "Sasmita Pani", title: "Character Design", img: c3d },
];

function StudentsWorld() {
  return (
    <>
      <PageHero kicker="Students' World" title="Creativity speaks louder." subtitle="See how AnimaCraft students are raising the bar with projects that blend skill, vision, and real-world training." />
      <section className="container-x py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {works.map((w) => (
          <figure key={w.name + w.title} className="group rounded-2xl overflow-hidden bg-card border border-border">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={w.img} alt={`${w.title} by ${w.name}`} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <figcaption className="p-5">
              <div className="font-display text-xl">{w.name}</div>
              <div className="text-sm text-muted-foreground">{w.title}</div>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
