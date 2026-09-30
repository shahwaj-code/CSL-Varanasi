import addaEducation from "../assets/partners/adda_education.png";
import ambrosiaBotanicals from "../assets/partners/ambrosia_botanicals.avif";
import bedigitech from "../assets/partners/Bedigitech.png";
import berawStorie from "../assets/partners/beraw_storie_production.jfif";
import boltAudio from "../assets/partners/bolt-audio.png";
import charuviDesign from "../assets/partners/charuvi_design.png";
import ecorp from "../assets/partners/ecorp.png";
import expandWwide from "../assets/partners/expand_wwide.jfif";
import gushsquad from "../assets/partners/gushsquad.jfif";
import immeverse from "../assets/partners/immeverse_studio.png";
import infyplus from "../assets/partners/infyplus.jfif";
import justProcure from "../assets/partners/just_procure.png";
import mobisoft from "../assets/partners/mobisoft_abs.png";
import myzaDiamond from "../assets/partners/myza_diamond..avif";
import narangProperties from "../assets/partners/narang_properties.png";
import oakStone from "../assets/partners/oak-stone-inc.png";
import oceanTechventure from "../assets/partners/ocean_techventure.png";
import qwerty from "../assets/partners/qwerty.png";
import renticle from "../assets/partners/renticle.png";
import schmooze from "../assets/partners/schmooze_media.jfif";
import socialCodify from "../assets/partners/social_codify.png";
import unstop from "../assets/partners/unstop.png";

const partners: ReadonlyArray<readonly [string, string]> = [
  ["Adda Education", addaEducation], ["Ambrosia Botanicals", ambrosiaBotanicals], ["Bedigitech", bedigitech],
  ["Beraw Storie Production", berawStorie], ["Bolt Audio", boltAudio], ["Charuvi Design", charuviDesign],
  ["Ecorp", ecorp], ["Expand Wwide", expandWwide], ["Gushsquad", gushsquad], ["Immeverse Studio", immeverse],
  ["Infyplus", infyplus], ["Just Procure", justProcure], ["Mobisoft", mobisoft], ["Myza Diamond", myzaDiamond],
  ["Narang Properties", narangProperties], ["Oak Stone", oakStone], ["Ocean Techventure", oceanTechventure],
  ["Qwerty", qwerty], ["Renticle", renticle], ["Schmooze Media", schmooze], ["Social Codify", socialCodify], ["Unstop", unstop],
] as const;

export function PartnerLogoGrid({
  variant = "dark",
  count = partners.length,
}: {
  variant?: "dark" | "light";
  count?: number;
}) {
  const visiblePartners = partners.slice(0, count);
  const rows = [visiblePartners.filter((_, index) => index % 2 === 0), visiblePartners.filter((_, index) => index % 2 === 1)];
  const tile = variant === "dark"
    ? "border border-white/10 bg-transparent hover:border-[var(--gold)]/60"
    : "border border-black/15 bg-transparent hover:border-black/30";

  return (
    <div className="partner-marquee space-y-3" aria-label="Hiring partners">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="overflow-hidden">
          <div className={`partner-marquee-track ${rowIndex % 2 ? "partner-marquee-track-reverse" : ""}`}>
            {[...row, ...row].map(([name, image], index) => (
              <div key={`${name}-${index}`} className={`${tile} h-24 w-44 shrink-0 p-3 grid place-items-center transition hover:-translate-y-0.5`}>
                <img src={image} alt={`${name} hiring partner logo`} className="max-h-16 max-w-[90%] object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export const placementStats = [
  { n: "1000+", l: "Hiring Partners" },
  { n: "100%", l: "Internship Guarantee" },
  { n: "95%", l: "Placement Record" },
  { n: "₹12 LPA", l: "Highest Package" },
];
