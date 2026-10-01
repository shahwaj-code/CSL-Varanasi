import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/enquiries")({
  component: AdminEnquiries,
});

const statuses = ["new", "contacted", "enrolled", "closed"] as const;

function AdminEnquiries() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["admin-enquiries"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  async function setStatus(id: string, status: string) {
    const { error } = await supabase.from("enquiries").update({ status }).eq("id", id);
    if (error) return toast.error("Could not update status");
    toast.success("Status updated");
    queryClient.invalidateQueries({ queryKey: ["admin-enquiries"] });
    queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
  }

  async function remove(id: string) {
    const { error } = await supabase.from("enquiries").delete().eq("id", id);
    if (error) return toast.error("Could not delete enquiry");
    toast.success("Enquiry deleted");
    queryClient.invalidateQueries({ queryKey: ["admin-enquiries"] });
    queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h2 className="font-display text-xl">Enquiries</h2>
      <p className="mt-1 text-sm text-muted-foreground">Every enquiry submitted through the website forms.</p>

      {isLoading && <p className="mt-6 text-sm text-muted-foreground">Loading…</p>}
      {!isLoading && !data?.length && <p className="mt-6 text-sm text-muted-foreground">No enquiries yet.</p>}

      <div className="mt-6 overflow-x-auto">
        {!!data?.length && (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-widest text-muted-foreground">
                <th className="pb-3 pr-4">Name</th>
                <th className="pb-3 pr-4">Phone</th>
                <th className="pb-3 pr-4">City / District</th>
                <th className="pb-3 pr-4">State / UT</th>
                <th className="pb-3 pr-4">Course</th>
                <th className="pb-3 pr-4">Source</th>
                <th className="pb-3 pr-4">Date</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.map((e) => (
                <tr key={e.id}>
                  <td className="py-3 pr-4 font-semibold">{e.full_name}</td>
                  <td className="py-3 pr-4">
                    <a href={`tel:${e.phone}`} className="hover:text-[var(--gold)]">{e.phone}</a>
                  </td>
                  <td className="py-3 pr-4 text-muted-foreground">{e.city ?? "—"}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{e.state ?? "—"}</td>
                  <td className="py-3 pr-4 text-[var(--gold)]">{e.course ?? "—"}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{e.source ?? "—"}</td>
                  <td className="py-3 pr-4 text-xs text-muted-foreground">{new Date(e.created_at).toLocaleString()}</td>
                  <td className="py-3 pr-4">
                    <select
                      value={e.status}
                      onChange={(ev) => setStatus(e.id, ev.target.value)}
                      className="rounded-lg border border-border bg-background px-2 py-1.5 text-xs"
                    >
                      {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="py-3">
                    <button onClick={() => remove(e.id)} aria-label="Delete enquiry" className="text-muted-foreground hover:text-destructive transition">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
