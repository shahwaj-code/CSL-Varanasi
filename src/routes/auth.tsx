import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const searchSchema = z.object({ redirect: z.string().optional() });

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Admin Sign In — Centre Of Skill Learning" },
      { name: "description", content: "Secure sign in for the Centre Of Skill Learning admin panel to manage enquiries, courses, blog posts and testimonials." },
      { property: "og:title", content: "Admin Sign In — Centre Of Skill Learning" },
      { property: "og:description", content: "Secure staff sign in for the CSL admin panel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

const credentials = z.object({
  email: z.string().trim().email("Enter a valid email address").max(255),
  password: z.string().min(6, "Password must be at least 6 characters").max(72),
  fullName: z.string().trim().max(100).optional(),
});

const field =
  "w-full rounded-lg border border-white/20 bg-white/[0.04] px-3.5 py-2.5 text-sm font-light text-white placeholder:text-white/45 transition focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]";
const label = "block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 mb-1.5";

function AuthPage() {
  const navigate = useNavigate();
  const { redirect } = useSearch({ from: "/auth" });
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const dest = redirect && redirect.startsWith("/") && !redirect.startsWith("//") ? redirect : "/admin";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = credentials.safeParse({ email, password, fullName });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email: parsed.data.email, password: parsed.data.password });
        if (error) throw error;
        navigate({ to: dest });
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: {
            emailRedirectTo: window.location.origin + "/auth",
            data: { full_name: parsed.data.fullName ?? "" },
          },
        });
        if (error) throw error;
        if (!data.session) {
          setNotice("Account created. Check your email and click the confirmation link to finish signing in.");
        } else {
          navigate({ to: dest });
        }
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  async function onGoogle() {
    setBusy(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.origin + dest },
      });
      if (error) throw error;
    } catch {
      toast.error("Google sign-in failed. Please try again.");
      setBusy(false);
    }
  }

  return (
    <section className="container-x py-20 md:py-28">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-[#0E0E0E] border border-white/10 p-7 md:p-9">
        <h1 className="font-display text-2xl md:text-3xl text-white">
          {mode === "signin" ? "Admin Sign In" : "Create Admin Account"}
        </h1>
        <p className="mt-2 text-sm font-light text-white/60">
          Manage enquiries, blog posts and testimonials for Centre Of Skill Learning.
        </p>

        {notice && (
          <p className="mt-5 rounded-lg border border-[var(--gold)]/40 bg-[var(--gold)]/10 p-3 text-sm text-[var(--gold)]">{notice}</p>
        )}

        <form onSubmit={onSubmit} className="mt-6 grid gap-5">
          {mode === "signup" && (
            <div>
              <label className={label} htmlFor="au-name">Full Name</label>
              <input id="au-name" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your name" className={field} />
            </div>
          )}
          <div>
            <label className={label} htmlFor="au-email">Email</label>
            <input id="au-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className={field} />
          </div>
          <div>
            <label className={label} htmlFor="au-pass">Password</label>
            <input id="au-pass" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className={field} />
          </div>
          <button disabled={busy} className="rounded-lg bg-[var(--gold)] text-black px-4 py-3 text-sm font-bold uppercase tracking-wide transition hover:brightness-110 disabled:opacity-60">
            {busy ? "Please wait…" : mode === "signin" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/40">
          <span className="h-px flex-1 bg-white/10" /> or <span className="h-px flex-1 bg-white/10" />
        </div>

        <button
          onClick={onGoogle}
          disabled={busy}
          className="w-full rounded-lg border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:opacity-60"
        >
          Continue with Google
        </button>

        <button
          onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setNotice(null); }}
          className="mt-6 w-full text-center text-xs text-white/60 hover:text-[var(--gold)]"
        >
          {mode === "signin" ? "Need an account? Create one" : "Already have an account? Sign in"}
        </button>
      </div>
    </section>
  );
}
