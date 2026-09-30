import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { PageHero } from "../components/site-layout";

export const Route = createFileRoute("/centres")({
  head: () => ({
    meta: [
      { title: "Locate a Centre — AnimaCraft" },
      { name: "description", content: "Find an AnimaCraft centre near you across major cities in India." },
      { property: "og:title", content: "Find an AnimaCraft centre" },
      { property: "og:description", content: "120+ centres across India." },
    ],
  }),
  component: Centres,
});

const centres = [
  { city: "Mumbai", areas: ["Andheri", "Borivali", "Thane", "Dadar"], phone: "+91 90000 10001" },
  { city: "Delhi NCR", areas: ["Connaught Place", "Rohini", "Noida", "Gurgaon"], phone: "+91 90000 10002" },
  { city: "Bengaluru", areas: ["Koramangala", "Jayanagar", "Marathahalli"], phone: "+91 90000 10003" },
  { city: "Hyderabad", areas: ["Ameerpet", "Kukatpally"], phone: "+91 90000 10004" },
  { city: "Chennai", areas: ["T. Nagar", "Adyar"], phone: "+91 90000 10005" },
  { city: "Kolkata", areas: ["Park Street", "Salt Lake"], phone: "+91 90000 10006" },
  { city: "Pune", areas: ["FC Road", "Kothrud"], phone: "+91 90000 10007" },
  { city: "Ahmedabad", areas: ["CG Road", "Bopal"], phone: "+91 90000 10008" },
  { city: "Kochi", areas: ["MG Road"], phone: "+91 90000 10009" },
];

function Centres() {
  return (
    <>
      <PageHero kicker="Locate a Centre" title="120+ centres across India." subtitle="Find a centre near you and drop in for a campus tour." />
      <section className="container-x py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {centres.map((c) => (
          <div key={c.city} className="rounded-2xl bg-card border border-border p-6">
            <h3 className="font-display text-2xl flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> {c.city}</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {c.areas.map((a) => <li key={a}>• {a}</li>)}
            </ul>
            <a href={`tel:${c.phone.replace(/\s/g,"")}`} className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm"><Phone className="h-4 w-4" />{c.phone}</a>
          </div>
        ))}
      </section>
    </>
  );
}
