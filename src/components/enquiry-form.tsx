import { useState } from "react";

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
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-2xl bg-[#0E0E0E] p-6 md:p-8 border border-white/10 grid gap-5"
    >
      <h3 className="font-display text-2xl md:text-[1.75rem] leading-tight text-white">Book Free Career Counselling</h3>

      <div className={compact ? "grid gap-5" : "grid gap-5 md:grid-cols-2"}>
        <div>
          <label className={label} htmlFor="eq-name">Full Name</label>
          <input id="eq-name" required placeholder="Your full name" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="eq-phone">Phone</label>
          <input id="eq-phone" required type="tel" placeholder="10-digit mobile number" className={field} />
        </div>
      </div>




      <div>
        <label className={label} htmlFor="eq-city">City</label>
        <input id="eq-city" required placeholder="Your city" className={field} />
      </div>

      <div>
        <label className={label} htmlFor="eq-course">Course Interested In</label>
        <select id="eq-course" required defaultValue="" className={field}>
          <option value="" disabled>Select a course</option>
          {courses.map((c) => <option key={c} className="bg-[#0E0E0E]">{c}</option>)}
        </select>
      </div>

      <button className="rounded-lg bg-[var(--gold)] text-black px-4 py-3 text-sm font-bold uppercase tracking-wide transition hover:brightness-110">
        Submit Enquiry
      </button>
    </form>
  );
}
