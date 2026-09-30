import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-layout";
import { EnquiryForm } from "../components/enquiry-form";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AnimaCraft — Talk to a Counsellor" },
      { name: "description", content: "Get in touch with AnimaCraft for course details, admissions, or a campus tour." },
      { property: "og:title", content: "Contact AnimaCraft" },
      { property: "og:description", content: "Reach us for admissions, course details, or a campus tour." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero kicker="Contact" title="Talk to a Counsellor" subtitle="We'll help you pick the right program and answer everything about fees, scholarships, and placements." />
      <section className="container-x py-16 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl bg-card border border-border p-6">
            <h3 className="font-display text-2xl">Head Office</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> AnimaCraft HQ, 4th Floor, Creative Tower, Mumbai 400001</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 99993 80187</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@animacraft.example</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6">
            <h3 className="font-display text-2xl">Admissions</h3>
            <p className="mt-2 text-sm text-muted-foreground">Monday–Saturday, 10:00 AM – 7:00 PM</p>
            <p className="mt-2 text-sm text-muted-foreground">Prefer WhatsApp? Message us at +91 99993 80187.</p>
          </div>
        </div>
        <EnquiryForm />
      </section>
    </>
  );
}
