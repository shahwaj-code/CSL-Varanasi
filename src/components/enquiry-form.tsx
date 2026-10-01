import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type StateDistricts = { state: string; districts: string[] };

const districtsUrl = "https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json";

const courses = [
  "Animation", "VFX", "Graphic Design", "UI/UX Design", "Motion Graphics",
  "Video Editing", "Generative AI", "Broadcast Design", "Multimedia",
  "Game Design", "Short Term Courses",
];

const field =
  "w-full rounded-lg border border-white/20 bg-white/[0.04] px-3.5 py-2.5 text-sm font-light text-white placeholder:text-white/45 transition focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]";
const label = "block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 mb-1.5";

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [locations, setLocations] = useState<StateDistricts[]>([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districtError, setDistrictError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(districtsUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("District list unavailable");
        return response.json() as Promise<{ states: StateDistricts[] }>;
      })
      .then((data) => setLocations(data.states))
      .catch(() => {
        if (!controller.signal.aborted) setDistrictError(true);
      });
    return () => controller.abort();
  }, []);

  async function submitEnquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    const form = new FormData(event.currentTarget);
    const { error } = await supabase.from("enquiries").insert({
      full_name: String(form.get("full_name")),
      phone: String(form.get("phone")),
      city: String(form.get("city")),
      state: districtError ? null : String(form.get("state")),
      course: String(form.get("course")),
      source: "website",
    });
    setSubmitting(false);
    if (error) {
      toast.error("Could not submit your enquiry. Please try again.");
      return;
    }
    setSent(true);
  }

  const availableDistricts = locations.find(({ state }) => state === selectedState)?.districts ?? [];
  if (sent) {
    return (
      <div className="rounded-2xl bg-[#0E0E0E] p-8 text-center border border-white/10">
        <div className="h-14 w-14 rounded-full bg-[var(--gold)]/20 grid place-items-center mx-auto">
          <span className="font-display text-2xl text-[var(--gold)]">✓</span>
        </div>
        <h3 className="font-display text-2xl mt-4 text-white">Thank you!</h3>
        <p className="mt-2 text-sm font-light text-white/70">Our counsellor will reach out within one working day.</p>
      </div>
    );
  }
  return (
    <form
      onSubmit={submitEnquiry}
      className="rounded-2xl bg-[#0E0E0E] p-6 md:p-8 border border-white/10 grid gap-5"
    >
      <h3 className="font-display text-2xl md:text-[1.75rem] leading-tight text-white">Book Free Career Counselling</h3>

      <div className={compact ? "grid gap-5" : "grid gap-5 md:grid-cols-2"}>
        <div>
          <label className={label} htmlFor="eq-name">Full Name</label>
          <input id="eq-name" name="full_name" required placeholder="Your full name" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="eq-phone">Phone</label>
          <input id="eq-phone" name="phone" required type="tel" placeholder="10-digit mobile number" className={field} />
        </div>
      </div>




      {districtError ? (
        <div>
          <label className={label} htmlFor="eq-city">City / District</label>
          <input id="eq-city" name="city" required placeholder="Your city or district" className={field} />
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="eq-state">State / UT</label>
            <select id="eq-state" name="state" required value={selectedState} onChange={(event) => { setSelectedState(event.target.value); setSelectedDistrict(""); }} className={field}>
              <option value="" disabled>{locations.length ? "Select a state / UT" : "Loading states…"}</option>
              {locations.map(({ state }) => <option key={state} value={state} className="bg-[#0E0E0E]">{state}</option>)}
            </select>
          </div>
          <div>
            <label className={label} htmlFor="eq-city">City / District</label>
            <select id="eq-city" name="city" required disabled={!selectedState} value={selectedDistrict} onChange={(event) => setSelectedDistrict(event.target.value)} className={field}>
              <option value="" disabled>{selectedState ? "Select a district" : "Select state first"}</option>
              {availableDistricts.map((district) => <option key={district} value={district} className="bg-[#0E0E0E]">{district}</option>)}
            </select>
          </div>
        </div>
      )}

      <div>
        <label className={label} htmlFor="eq-course">Course Interested In</label>
        <select id="eq-course" name="course" required defaultValue="" className={field}>
          <option value="" disabled>Select a course</option>
          {courses.map((c) => <option key={c} className="bg-[#0E0E0E]">{c}</option>)}
        </select>
      </div>

      <button disabled={submitting} className="rounded-lg bg-[var(--gold)] text-black px-4 py-3 text-sm font-bold uppercase tracking-wide transition hover:brightness-110 disabled:opacity-60">
        {submitting ? "Submitting…" : "Submit Enquiry"}
      </button>
    </form>
  );
}
