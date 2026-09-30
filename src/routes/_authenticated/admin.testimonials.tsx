import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/testimonials")({
  component: AdminTestimonials,
});

const schema = z.object({
  student_name: z.string().trim().min(2, "Name is too short").max(100),
  role: z.string().trim().max(140).optional(),
  quote: z.string().trim().min(10, "Quote is too short").max(600),
  image_url: z.string().trim().url("Photo URL must be a valid link").max(500).optional().or(z.literal("")),
  published: z.boolean(),
});

const field = "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]";
const label = "block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-1.5";

const empty = { student_name: "", role: "", quote: "", image_url: "", published: true };

function AdminTestimonials() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState(empty);
  const [busy, setBusy] = useState(false);

  const { data } = useQuery({
    queryKey: ["admin-testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  function refresh() {
    queryClient.invalidateQueries({ queryKey: ["admin-testimonials"] });
    queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) return toast.error(parsed.error.issues[0]?.message ?? "Check the form");
    setBusy(true);
    const { error } = await supabase.from("testimonials").insert({
      student_name: parsed.data.student_name,
      role: parsed.data.role || null,
      quote: parsed.data.quote,
      image_url: parsed.data.image_url || null,
      published: parsed.data.published,
    });
    setBusy(false);
    if (error) return toast.error("Could not save testimonial");
    toast.success("Testimonial added");
    setForm(empty);
    refresh();
  }

  async function togglePublished(id: string, published: boolean) {
    const { error } = await supabase.from("testimonials").update({ published: !published }).eq("id", id);
    if (error) return toast.error("Could not update testimonial");
    refresh();
  }

  async function remove(id: string) {
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (error) return toast.error("Could not delete testimonial");
    toast.success("Testimonial deleted");
    refresh();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
      <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 grid gap-5 h-fit">
        <h2 className="font-display text-xl">New testimonial</h2>
        <div>
          <label className={label} htmlFor="ts-name">Student Name</label>
          <input id="ts-name" className={field} value={form.student_name} onChange={(e) => setForm({ ...form, student_name: e.target.value })} />
        </div>
        <div>
          <label className={label} htmlFor="ts-role">Role / Studio</label>
          <input id="ts-role" className={field} placeholder="3D Animator at …" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
        </div>
        <div>
          <label className={label} htmlFor="ts-quote">Quote</label>
          <textarea id="ts-quote" rows={5} className={field} value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} />
        </div>
        <div>
          <label className={label} htmlFor="ts-img">Photo Link</label>
          <input id="ts-img" className={field} placeholder="https://…" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} />
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
          Show on website
        </label>
        <button disabled={busy} className="btn-primary btn-primary-hover justify-center disabled:opacity-60">
          {busy ? "Saving…" : "Add Testimonial"}
        </button>
      </form>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="font-display text-xl">All testimonials</h2>
        {!data?.length && <p className="mt-3 text-sm text-muted-foreground">No testimonials yet.</p>}
        <ul className="mt-4 divide-y divide-border">
          {data?.map((t) => (
            <li key={t.id} className="py-4 flex flex-wrap items-start justify-between gap-3">
              <div className="max-w-md">
                <p className="font-semibold text-sm">{t.student_name}</p>
                <p className="text-xs text-muted-foreground">{t.role ?? "—"}</p>
                <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => togglePublished(t.id, t.published)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${t.published ? "border-[var(--gold)] text-[var(--gold)]" : "border-border text-muted-foreground"}`}
                >
                  {t.published ? "Visible" : "Hidden"}
                </button>
                <button onClick={() => remove(t.id)} aria-label="Delete testimonial" className="text-muted-foreground hover:text-destructive transition">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
