import { Link, Outlet } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail, MapPin, Instagram, Youtube, Facebook, Linkedin } from "lucide-react";
import { useEnquiry } from "./enquiry-modal";

const BRAND = "Center of Skill Learning";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/students-world", label: "Student Work" },
  { to: "/partner", label: "Placements" },
  { to: "/franchise", label: "Franchise" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;



export function Header() {
  const [open, setOpen] = useState(false);
  const { open: openEnquiry } = useEnquiry();
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10">
      <div className="container-x flex items-center justify-between h-16 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.webp" alt="CSL" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-base md:text-lg font-bold tracking-wide text-white uppercase">Centre Of</div>
            <div className="font-display text-sm md:text-base font-bold text-[var(--gold)] uppercase -mt-1">Skill Learning</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[var(--gold)] transition-colors"
              activeProps={{ className: "text-[var(--gold)]" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <button onClick={openEnquiry} className="btn-primary btn-primary-hover text-xs">
            Enquire Now
          </button>
        </div>
        <button className="lg:hidden text-white" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black animate-fade-in-soft">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2.5 text-white/80 border-b border-white/10 uppercase text-xs font-bold tracking-wider">
                {n.label}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(false); openEnquiry(); }}
              className="btn-primary btn-primary-hover mt-3 justify-center text-xs"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="gradient-dark text-white/85 mt-24">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src="/logo.webp" alt="CSL" className="h-10 w-10 object-contain" />
            <span className="font-display text-lg font-bold text-white leading-tight">{BRAND}</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">A premium training institute preparing India's next generation of animators, VFX artists, designers and creators.</p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="hover:text-[var(--gold)] transition"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[var(--gold)] transition"><Youtube className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-[var(--gold)] transition"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[var(--gold)] transition"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-[var(--gold)]">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-[var(--gold)]">Courses</Link></li>
            <li><Link to="/students-world" className="hover:text-[var(--gold)]">Student Work</Link></li>
            <li><Link to="/partner" className="hover:text-[var(--gold)]">Hiring Partners</Link></li>
            <li><Link to="/franchise" className="hover:text-[var(--gold)]">Franchise</Link></li>
            <li><Link to="/blog" className="hover:text-[var(--gold)]">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-white">Resources</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li><Link to="/why-choose-us" className="hover:text-[var(--gold)]">Why Choose Us</Link></li>
            <li><Link to="/testimonials" className="hover:text-[var(--gold)]">Testimonials</Link></li>
            <li><Link to="/faq" className="hover:text-[var(--gold)]">FAQs</Link></li>
            <li><Link to="/events" className="hover:text-[var(--gold)]">Events & Workshops</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--gold)]">Career Counselling</Link></li>
            <li><Link to="/privacy" className="hover:text-[var(--gold)]">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-white">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[var(--gold)]" /> CSL HQ, Mumbai, India</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[var(--gold)]" /> +91 99993 80187</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[var(--gold)]" /> hello@cslindia.example</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {BRAND}. All rights reserved.</span>
          <span>Crafted with care for creative careers.</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function LayoutRoute() {
  return (
    <SiteShell>
      <Outlet />
    </SiteShell>
  );
}

export function PageHero({ title, kicker, subtitle }: { title: string; kicker?: string; subtitle?: string }) {
  return (
    <section className="relative gradient-hero border-b border-border animate-fade-in-soft">
      <div className="container-x py-20 md:py-24">
        {kicker && <p className="text-[var(--gold)] uppercase tracking-[0.3em] text-xs mb-4 font-semibold">{kicker}</p>}
        <h1 className="font-display text-3xl md:text-5xl leading-[1.05] max-w-4xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-muted-foreground text-base leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
