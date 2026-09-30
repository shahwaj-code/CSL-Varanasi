import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Centre Of Skill Learning" },
      { name: "description", content: "How Centre Of Skill Learning collects, uses, stores and protects the information you share through enquiries and our website." },
      { property: "og:title", content: "Privacy Policy — Centre Of Skill Learning" },
      { property: "og:description", content: "How Centre Of Skill Learning handles and protects your information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

const sections = [
  {
    h: "Information We Collect",
    p: "We only collect what we need to respond to you and guide your admission.",
    points: [
      "Contact details you submit: name, phone number, email address, state and city",
      "Course preference and any message you share in an enquiry or counselling request",
      "Basic technical data such as browser type, device and pages visited",
    ],
  },
  {
    h: "How We Use Your Information",
    p: "Your details are used for admissions guidance and service improvement only.",
    points: [
      "To respond to enquiries and schedule free career counselling",
      "To share program details, fees, batch timings and scholarship options",
      "To send admission or batch updates you have asked for",
      "To improve our website, courses and student support",
    ],
  },
  {
    h: "Information Sharing",
    p: "We do not sell or rent your personal information to anyone.",
    points: [
      "Shared only with our own counselling and placement teams",
      "Shared with hiring partners only with your consent during placement",
      "Disclosed if required by law or a valid legal request",
    ],
  },
  {
    h: "Data Security & Retention",
    p: "We apply reasonable technical and organisational safeguards.",
    points: [
      "Access to enquiry data is restricted to authorised staff",
      "Data is retained only as long as needed for admissions and records",
      "No method of transmission over the internet is fully secure",
    ],
  },
  {
    h: "Cookies & Analytics",
    p: "Cookies help the site work and help us understand usage.",
    points: [
      "Essential cookies keep the site functional",
      "Analytics cookies measure traffic in aggregate",
      "You can disable cookies in your browser settings",
    ],
  },
  {
    h: "Your Rights",
    p: "You stay in control of the information you share with us.",
    points: [
      "Request access to the information we hold about you",
      "Request correction or deletion of your details",
      "Opt out of marketing messages at any time",
    ],
  },
];

function Privacy() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy Policy" subtitle="Last updated: August 2026" />
      <section className="container-x py-16 max-w-3xl">
        <p className="text-muted-foreground leading-relaxed">
          Centre Of Skill Learning respects your privacy. This policy explains what information we
          collect through our website and enquiry forms, how we use it, and the choices you have.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-2xl md:text-3xl">{s.h}</h2>
              <p className="mt-2 text-muted-foreground">{s.p}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                    <span className="text-[var(--gold)]">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="font-display text-2xl md:text-3xl">Contact Us</h2>
            <p className="mt-2 text-muted-foreground">
              For any privacy question or request, write to us or call our admissions desk at
              <span className="text-[var(--gold)]"> +91 99993 80187</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
