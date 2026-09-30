import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { LayoutDashboard, Inbox, FileText, Quote, LogOut, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin")({
  component: AdminLayout,
});

const tabs = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/enquiries", label: "Enquiries", icon: Inbox, exact: false },
  { to: "/admin/blog", label: "Blog Posts", icon: FileText, exact: false },
  { to: "/admin/testimonials", label: "Testimonials", icon: Quote, exact: false },
] as const;

function AdminLayout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: session } = useQuery({
    queryKey: ["admin-session"],
    queryFn: async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) return null;
      const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", data.user.id);
      return { email: data.user.email ?? "", isAdmin: (roles ?? []).some((r) => r.role === "admin") };
    },
  });

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  if (session && !session.isAdmin) {
    return (
      <section className="container-x py-24">
        <div className="mx-auto max-w-lg rounded-2xl border border-border bg-card p-8 text-center">
          <ShieldAlert className="mx-auto h-10 w-10 text-[var(--gold)]" />
          <h1 className="font-display text-2xl mt-4">Admin access required</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            You are signed in as {session.email}, but this account does not have admin rights yet. Ask an existing
            admin to grant your account the admin role.
          </p>
          <button onClick={signOut} className="btn-primary btn-primary-hover mt-6">Sign out</button>
        </div>
      </section>
    );
  }

  return (
    <section className="container-x py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-[var(--gold)] uppercase tracking-[0.3em] text-[11px] font-semibold">Admin Panel</p>
          <h1 className="font-display text-3xl md:text-4xl mt-2">Centre Of Skill Learning</h1>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          {session?.email && <span className="hidden sm:inline">{session.email}</span>}
          <button onClick={signOut} className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-semibold hover:border-[var(--gold)] hover:text-[var(--gold)] transition">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </div>

      <nav className="mt-8 flex flex-wrap gap-2">
        {tabs.map(({ to, label, icon: Icon, exact }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact }}
            activeProps={{ className: "bg-[var(--gold)] text-black border-[var(--gold)]" }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:border-[var(--gold)]"
          >
            <Icon className="h-4 w-4" /> {label}
          </Link>
        ))}
      </nav>

      <div className="mt-10">
        <Outlet />
      </div>
    </section>
  );
}
