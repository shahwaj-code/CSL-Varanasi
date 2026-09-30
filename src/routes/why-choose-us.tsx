import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-layout";
import { useEnquiry } from "../components/enquiry-modal";
import {
  Award, Briefcase, Target, GraduationCap, Users, Trophy, CheckCircle2, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose CSL — Mentors, Projects & Career Support" },
      { name: "description", content: "Discover why students choose Center of Skill Learning for expert mentors, live projects, portfolio development and career support." },
      { property: "og:title", content: "Why Choose CSL" },
      { property: "og:description", content: "Expert mentors, live projects, portfolio building and dedicated career support." },
    ],
  }),
  component: WhyChooseUs,
});

const reasons = [
  { i: Award, t: "Industry Expert Trainers", d: "Learn from professionals actively shipping work for leading studios and agencies." },
  { i: Briefcase, t: "Portfolio Development", d: "Graduate with a focused portfolio shaped around your target role." },
  { i: Target, t: "Internship Opportunities", d: "Build experience through structured internships with partner studios." },
  { i: GraduationCap, t: "Placement Support", d: "Get dedicated help with applications, interviews and your first role." },
  { i: Users, t: "Small Batch Sizes", d: "Get direct mentor attention in focused, collaborative cohorts." },
  { i: Trophy, t: "Career Counselling", d: "Make clearer choices with one-to-one guidance from admission onward." },
];

function WhyChooseUs() {
  const { open } = useEnquiry();
  return (
    <>
      <PageHero kicker="Why Choose CSL" title="Why Choose CSL" subtitle="A focused learning experience built to move your creative ambition toward a real career." />
      <section className="bg-[#f6f3ed] text-[#171717] py-20 border-b border-[#ded8cc]">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr] items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-[#b87500] uppercase tracking-[0.3em] text-xs font-bold">The CSL difference</p>
              <h2 className="font-display text-[#171717] text-4xl md:text-5xl mt-4 leading-[0.98]">Learn with purpose. <span className="text-[#b87500]">Create with confidence.</span></h2>
              <p className="mt-6 max-w-md text-[#625d55] leading-relaxed">From your first lesson to your first interview, every part of CSL is designed around practical progress and the work you want to do.</p>
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
                {["10 years", "1000+ partners", "95% support"].map((stat) => (
                  <div key={stat} className="border-l-2 border-[#d6a64e] pl-3">
                    <p className="font-display text-lg text-[#b87500]">{stat}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map(({ i: Icon, t, d }, index) => (
                <article key={t} className="group p-6 border border-[#ded8cc] bg-white hover:border-[#d6a64e] hover:-translate-y-1 transition shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="h-11 w-11 grid place-items-center border border-[#d6a64e] bg-[#fff8e8]">
                      <Icon className="h-5 w-5 text-[#b87500]" />
                    </div>
                    <span className="font-display text-3xl text-[#d8d1c5]">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-[#171717] text-xl mt-5">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#625d55]">{d}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-[#ded8cc] pt-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#b87500] shrink-0" />
              <span className="text-sm font-semibold text-[#b87500]">10 years shaping creative careers</span>
            </div>
            <button onClick={open} className="btn-primary btn-primary-hover">Book Free Career Counselling <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </section>
    </>
  );
}
