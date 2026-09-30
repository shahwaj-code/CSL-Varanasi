import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/blog")({
  component: AdminBlog,
});

const schema = z.object({
  title: z.string().trim().min(3, "Title is too short").max(160),
  slug: z.string().trim().regex(/^[a-z0-9-]+$/, "Slug can use lowercase letters, numbers and dashes only").max(120),
  excerpt: z.string().trim().max(300).optional(),
  image_url: z.string().trim().url("Image URL must be a valid link").max(500).optional().or(z.literal("")),
  body: z.string().trim().max(20000).optional(),
  published: z.boolean(),
});

const field = "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]";
const label = "block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-1.5";

const empty = { title: "", slug: "", excerpt: "", image_url: "", body: "", published: false };

function AdminBlog() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState(empty);
  const [busy, setBusy] = useState(false);

  const { data } = useQuery({
    queryKey: ["admin-blog"],
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  function refresh() {
    queryClient.invalidateQueries({ queryKey: ["admin-blog"] });
    queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) return toast.error(parsed.error.issues[0]?.message ?? "Check the form");
    setBusy(true);
    const { error } = await supabase.from("blog_posts").insert({
      title: parsed.data.title,
      slug: parsed.data.slug,
      excerpt: parsed.data.excerpt || null,
      image_url: parsed.data.image_url || null,
      body: parsed.data.body || null,
      published: parsed.data.published,
    });
    setBusy(false);
    if (error) return toast.error(error.message.includes("duplicate") ? "That slug is already used" : "Could not save post");
    toast.success("Post created");
    setForm(empty);
    refresh();
  }

  async function togglePublished(id: string, published: boolean) {
    const { error } = await supabase.from("blog_posts").update({ published: !published }).eq("id", id);
    if (error) return toast.error("Could not update post");
    refresh();
  }

  async function remove(id: string) {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) return toast.error("Could not delete post");
    toast.success("Post deleted");
    refresh();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
      <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 grid gap-5 h-fit">
        <h2 className="font-display text-xl">New blog post</h2>
        <div>
          <label className={label} htmlFor="bp-title">Title</label>
          <input id="bp-title" className={field} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        </div>
        <div>
          <label className={label} htmlFor="bp-slug">URL Slug</label>
          <input id="bp-slug" className={field} placeholder="career-in-3d-animation" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
        </div>
        <div>
          <label className={label} htmlFor="bp-excerpt">Short Summary</label>
          <input id="bp-excerpt" className={field} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
        </div>
        <div>
          <label className={label} htmlFor="bp-img">Cover Image Link</label>
          <input id="bp-img" className={field} placeholder="https://…" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} />
        </div>
        <div>
          <label className={label} htmlFor="bp-body">Article Content</label>
          <textarea id="bp-body" rows={7} className={field} value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} />
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
          Publish immediately
        </label>
        <button disabled={busy} className="btn-primary btn-primary-hover justify-center disabled:opacity-60">
          {busy ? "Saving…" : "Create Post"}
        </button>
      </form>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="font-display text-xl">All posts</h2>
        {!data?.length && <p className="mt-3 text-sm text-muted-foreground">No posts yet.</p>}
        <ul className="mt-4 divide-y divide-border">
          {data?.map((p) => (
            <li key={p.id} className="py-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-sm">{p.title}</p>
                <p className="text-xs text-muted-foreground">/blog/{p.slug}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => togglePublished(p.id, p.published)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${p.published ? "border-[var(--gold)] text-[var(--gold)]" : "border-border text-muted-foreground"}`}
                >
                  {p.published ? "Published" : "Draft"}
                </button>
                <button onClick={() => remove(p.id)} aria-label="Delete post" className="text-muted-foreground hover:text-destructive transition">
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
