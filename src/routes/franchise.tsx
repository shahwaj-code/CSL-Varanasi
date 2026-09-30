import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "../components/site-layout";
import {
  Building2, TrendingUp, Users, GraduationCap, Megaphone, ShieldCheck,
  CheckCircle2, ChevronDown, MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise Opportunity — Centre of Skill Learning" },
      { name: "description", content: "Open a Centre of Skill Learning franchise. Overview, benefits, eligibility, investment, terms & policy, support and franchise enquiry form." },
      { property: "og:title", content: "CSL Franchise Opportunity" },
      { property: "og:description", content: "Partner with Centre of Skill Learning — proven curriculum, brand, marketing and academic support." },
    ],
  }),
  component: FranchisePage,
});

const WHATSAPP = "919999380187";

const benefits = [
  { i: TrendingUp, t: "Proven Business Model", d: "A training model refined across creative-career programs with strong repeat demand." },
  { i: GraduationCap, t: "Ready Curriculum", d: "Complete course library, lesson plans, assessments and certification framework." },
  { i: Megaphone, t: "Marketing Support", d: "Campaign creatives, digital lead generation, local activation kits and brand collateral." },
  { i: Users, t: "Faculty Training", d: "Trainer onboarding, teaching certification and continuous academic upgrades." },
  { i: ShieldCheck, t: "Territory Protection", d: "Exclusive operating territory so your centre grows without internal competition." },
  { i: Building2, t: "Setup Guidance", d: "Centre layout, lab specification, hardware/software list and launch playbook." },
];

const eligibility = [
  "Passion for education and student outcomes",
  "Minimum 1,500–2,500 sq. ft. commercial space in a prime locality",
  "Ability to invest in infrastructure, labs and working capital",
  "Local market understanding and willingness to lead operations full-time",
  "Clean business/legal record and valid registrations (GST, trade licence)",
  "Commitment to CSL academic standards and brand guidelines",
];




const support = [
  "Academic delivery support and curriculum updates every semester",
  "Centralised admissions helpdesk and CRM access",
  "Placement cell access for your students",
  "Standard operating procedures, audits and quality reviews",
  "Regional manager assigned to your centre",
  "Annual franchise partner meet and refresher training",
];

const terms = [
  "The franchise agreement is territory-specific and non-transferable without written consent.",
  "Franchisee must operate strictly under CSL brand guidelines, fee structures and academic standards.",
  "All course content, trademarks and teaching material remain the intellectual property of CSL.",
  "Royalty and reporting are due on the agreed monthly cycle.",
  "Faculty must be CSL-certified before delivering any program.",
  "Either party may terminate for material breach as detailed in the signed agreement.",
];

const policy = [
  "One franchise per protected territory; expansion requires a fresh agreement.",
  "Fee discounts and scholarships follow the central policy — no independent pricing.",
  "Student data is handled per our privacy policy and applicable data-protection law.",
  "Certificates are issued centrally only for students enrolled through official systems.",
  "Marketing creatives must use approved brand assets; local ads need prior approval.",
];

const faqs = [
  { q: "How long does it take to launch a centre?", a: "Typically 60–90 days from agreement signing — covering space finalisation, lab setup, faculty hiring and pre-launch marketing." },
  { q: "Do I need an education background?", a: "No. Many partners come from business backgrounds. Academic delivery is handled by CSL-certified faculty with our support." },
  { q: "What ongoing costs should I plan for?", a: "Rent, faculty salaries, utilities, local marketing and the agreed royalty. We share a detailed projection during discussions." },
  { q: "Is exclusivity guaranteed?", a: "Yes — each partner gets a protected territory defined in the agreement." },
  { q: "What is the next step?", a: "Submit the enquiry form below. Our franchise team will connect on WhatsApp with the detailed information kit." },
];

const field =
  "w-full rounded-lg border border-white/20 bg-white/[0.04] px-3.5 py-2.5 text-sm font-light text-white placeholder:text-white/45 transition focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]";
const label = "block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 mb-1.5";

function FranchiseForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", area: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Centre of Skill Learning,

I am interested in your franchise.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Area: ${form.area}

Please contact me with more details.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={submit} id="franchise-enquiry" className="rounded-2xl bg-[#0E0E0E] border border-white/10 p-6 md:p-8 grid gap-5 scroll-mt-24">
      <h2 className="font-display text-2xl md:text-3xl text-white">Franchise Enquiry</h2>
      <div>
        <label className={label} htmlFor="f-name">Full Name</label>
        <input id="f-name" required value={form.name} onChange={set("name")} placeholder="Your full name" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="f-email">Email Address</label>
        <input id="f-email" required type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="f-phone">Phone Number</label>
        <input id="f-phone" required type="tel" value={form.phone} onChange={set("phone")} placeholder="10-digit mobile number" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="f-area">Area / City Name</label>
        <input id="f-area" required value={form.area} onChange={set("area")} placeholder="City or preferred territory" className={field} />
      </div>
      <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--gold)] text-black px-4 py-3 text-sm font-bold uppercase tracking-wide transition hover:brightness-110">
        <MessageCircle className="h-4 w-4" /> Send on WhatsApp
      </button>
      <p className="text-xs font-light text-white/50">Submitting opens WhatsApp with your details pre-filled.</p>
    </form>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm font-light text-white/80">
          <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-[var(--gold)]" />{i}
        </li>
      ))}
    </ul>
  );
}

function FranchisePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <>
      <PageHero
        kicker="Franchise Opportunity"
        title="Build a creative-careers institute in your city."
        subtitle="Partner with Centre of Skill Learning and launch a future-ready training centre backed by our curriculum, brand and academic systems."
      />

      <section className="container-x py-16 grid gap-14 lg:grid-cols-[1fr_400px] items-start">
        <div className="space-y-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-white">Franchise Overview</h2>
            <p className="mt-4 text-sm md:text-base font-light leading-relaxed text-white/80 max-w-2xl">
              India's creative and digital economy needs trained talent in animation, VFX, design, video and AI. As a CSL franchise partner you operate a fully supported training centre — we provide the academic engine, brand and playbook; you build the local business.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[{ n: "9+", l: "Career Programs" }, { n: "1000+", l: "Hiring Partners" }].map((s) => (
                <div key={s.l} className="rounded-2xl border border-white/10 bg-[#0E0E0E] p-5">
                  <p className="font-display text-3xl text-[var(--gold)]">{s.n}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide font-semibold text-white/60">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl text-white">Benefits of Partnering With Us</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {benefits.map(({ i: Icon, t, d }) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-[#0E0E0E] p-5 hover:border-[var(--gold)]/50 transition">
                  <div className="h-10 w-10 rounded-xl bg-[var(--gold)]/15 grid place-items-center">
                    <Icon className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display text-lg mt-4 text-white">{t}</h3>
                  <p className="mt-1.5 text-sm font-light text-white/70 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl text-white">Eligibility Criteria</h2>
            <List items={eligibility} />
          </div>




          <div>
            <h2 className="font-display text-3xl md:text-4xl text-white">Support Provided</h2>
            <List items={support} />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white">Terms &amp; Conditions</h2>
              <List items={terms} />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white">Franchise Policy</h2>
              <List items={policy} />
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl text-white">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((f, i) => (
                <div key={f.q} className="rounded-2xl border border-white/10 bg-[#0E0E0E] overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left font-display text-base md:text-lg text-white">
                    {f.q}
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--gold)] transition ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <p className="px-5 pb-5 text-sm font-light text-white/75 leading-relaxed">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24">
          <FranchiseForm />
        </aside>
      </section>
    </>
  );
}
