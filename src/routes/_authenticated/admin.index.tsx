import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Inbox, FileText, Quote, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const [enquiries, newEnquiries, posts, testimonials] = await Promise.all([
        supabase.from("enquiries").select("id", { count: "exact", head: true }),
        supabase.from("enquiries").select("id", { count: "exact", head: true }).eq("status", "new"),
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
        supabase.from("testimonials").select("id", { count: "exact", head: true }),
      ]);
      return {
        enquiries: enquiries.count ?? 0,
        newEnquiries: newEnquiries.count ?? 0,
        posts: posts.count ?? 0,
        testimonials: testimonials.count ?? 0,
      };
    },
  });

  const { data: latest } = useQuery({
    queryKey: ["admin-latest-enquiries"],
    queryFn: async () => {
      const { data } = await supabase
        .from("enquiries")
        .select("id, full_name, phone, course, created_at")
        .order("created_at", { ascending: false })
        .limit(5);
      return data ?? [];
    },
  });

  const cards = [
    { icon: Inbox, label: "Total Enquiries", value: data?.enquiries, to: "/admin/enquiries" },
    { icon: TrendingUp, label: "New / Unhandled", value: data?.newEnquiries, to: "/admin/enquiries" },
    { icon: FileText, label: "Blog Posts", value: data?.posts, to: "/admin/blog" },
    { icon: Quote, label: "Testimonials", value: data?.testimonials, to: "/admin/testimonials" },
  ] as const;

  return (
    <div className="grid gap-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ icon: Icon, label, value, to }) => (
          <Link key={label} to={to} className="rounded-2xl border border-border bg-card p-6 hover-lift">
            <Icon className="h-6 w-6 text-[var(--gold)]" />
            <p className="mt-4 font-display text-3xl">{isLoading ? "—" : value}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
          </Link>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="font-display text-xl">Latest enquiries</h2>
        {!latest?.length && <p className="mt-3 text-sm text-muted-foreground">No enquiries yet.</p>}
        <ul className="mt-4 divide-y divide-border">
          {latest?.map((e) => (
            <li key={e.id} className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm">
              <span className="font-semibold">{e.full_name}</span>
              <span className="text-muted-foreground">{e.phone}</span>
              <span className="text-[var(--gold)]">{e.course ?? "—"}</span>
              <span className="text-xs text-muted-foreground">{new Date(e.created_at).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
