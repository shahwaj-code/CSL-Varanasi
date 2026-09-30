import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-layout";
import { Terminal, Upload, Globe, ShieldCheck, RefreshCw, FolderTree } from "lucide-react";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Deployment Guide — Publish CSL Website on Hostinger" },
      { name: "description", content: "Step-by-step guide to build the Centre Of Skill Learning website and publish it live on Hostinger: build output, file upload, domain setup, SSL and updates." },
      { property: "og:title", content: "Hostinger Deployment Guide — Centre Of Skill Learning" },
      { property: "og:description", content: "Build, upload, connect your domain and enable SSL — publish the CSL website on Hostinger." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: GuidePage,
});

const steps = [
  {
    i: Terminal,
    h: "1. Build the production site",
    p: "On your computer, install dependencies and create the production build. The finished, uploadable site lands in the build output folder.",
    code: "npm install\nnpm run build",
  },
  {
    i: FolderTree,
    h: "2. Locate the build output",
    p: "After the build finishes, open the generated output folder. Everything inside it (HTML, JS, CSS and images) is what goes to Hostinger — not the source folders.",
    code: "dist/\n├── index.html\n├── assets/\n└── favicon.ico",
  },
  {
    i: Upload,
    h: "3. Upload to Hostinger",
    p: "In hPanel go to Files → File Manager, open public_html and delete the default files. Upload the contents of the build output folder (not the folder itself) into public_html. You can also zip it, upload the zip and use Extract.",
    code: "public_html/  ←  contents of dist/",
  },
  {
    i: Globe,
    h: "4. Point your domain",
    p: "If the domain is registered with Hostinger it already resolves to your hosting. For an external domain, open hPanel → Domains, copy the Hostinger nameservers and paste them at your registrar. DNS changes take up to 24 hours.",
  },
  {
    i: ShieldCheck,
    h: "5. Enable free SSL and force HTTPS",
    p: "In hPanel go to Security → SSL, install the free Let's Encrypt certificate for your domain, then turn on Force HTTPS so every visitor gets the secure version.",
  },
  {
    i: RefreshCw,
    h: "6. Publishing updates later",
    p: "Any time content changes, run the build again and re-upload the output to public_html, replacing the old files. Clear the browser cache (Ctrl+Shift+R) to see changes immediately.",
    code: "npm run build   →   re-upload to public_html",
  },
];

function GuidePage() {
  return (
    <>
      <PageHero
        kicker="Deployment"
        title="Publish this website on Hostinger"
        subtitle="A six-step checklist to take the Centre Of Skill Learning website from your machine to your live domain."
      />

      <section className="container-x py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map(({ i: Icon, h, p, code }) => (
            <article key={h} className="rounded-2xl bg-card border border-border p-7 hover-lift">
              <div className="h-12 w-12 rounded-xl bg-[var(--gold)]/15 grid place-items-center">
                <Icon className="h-6 w-6 text-[var(--gold)]" />
              </div>
              <h2 className="font-display text-xl mt-4 font-semibold">{h}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p}</p>
              {code && (
                <pre className="mt-4 rounded-xl border border-border bg-[#0E0E0E] p-4 text-xs text-white/80 overflow-x-auto whitespace-pre">
                  {code}
                </pre>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--gold)]/40 bg-[var(--gold)]/[0.07] p-7">
          <h2 className="font-display text-xl font-semibold text-[var(--gold)]">Before you go live — quick checklist</h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 text-sm text-muted-foreground">
            {[
              "Phone number and WhatsApp link are correct on every page",
              "Enquiry form submissions reach the right inbox or WhatsApp",
              "Course names, durations and syllabus are final",
              "Centre address and map details are up to date",
              "Social media links in the footer are connected",
              "Favicon and page titles show your brand name",
            ].map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-[var(--gold)]">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
