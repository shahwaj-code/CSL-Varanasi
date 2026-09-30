import c3d from "../assets/course-3d.jpg";
import cvfx from "../assets/course-vfx.jpg";
import cgame from "../assets/course-game.jpg";
import ccontent from "../assets/course-content.jpg";
import cshort from "../assets/course-short.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  category?: string;
  img: string;
  date: string;
  excerpt: string;
  sections: { h: string; p: string }[];
};

export const posts: BlogPost[] = [
  {
    slug: "what-is-avgc-career",
    title: "AVGC careers: animation, VFX, gaming and comics explained",
    category: "AVGC",
    img: c3d,
    date: "Aug 18, 2026",
    excerpt: "Understand the AVGC industry and choose the creative path that fits your strengths.",
    sections: [
      { h: "What AVGC means", p: "AVGC brings together animation, visual effects, gaming and comics. These connected industries share artists, storytelling skills and production pipelines." },
      { h: "Choose your starting point", p: "Animation suits character and movement-focused artists, VFX fits visual problem-solvers, gaming rewards interactive thinkers, and comics build strong visual storytelling." },
      { h: "Build a practical portfolio", p: "Start with two or three finished projects that show your process, your role and the tools you used. A focused portfolio makes your first conversation with a studio much stronger." },
    ],
  },
  {
    slug: "vfx-career-roadmap",
    title: "VFX career roadmap: from roto to compositing",
    category: "VFX",
    img: cvfx,
    date: "Aug 10, 2026",
    excerpt: "A clear beginner roadmap for learning the VFX pipeline and preparing a studio-ready reel.",
    sections: [
      { h: "Learn the pipeline first", p: "Understand how plates move through prep, tracking, roto, paint, compositing and review before choosing a specialisation." },
      { h: "Practise with real shots", p: "Rebuild short shots with clean organisation, versioning and breakdowns. Recruiters value repeatable process as much as a polished final frame." },
      { h: "Keep your reel focused", p: "Lead with your strongest work and show only the skills you want to be hired for. Add breakdowns that make your contribution easy to verify." },
    ],
  },
  {
    slug: "video-editing-career-guide",
    title: "Video editing in 2026: skills that get you hired",
    category: "Video Editing",
    img: ccontent,
    date: "Aug 02, 2026",
    excerpt: "Editing rhythm, sound, colour and storytelling are the foundation of a strong video career.",
    sections: [
      { h: "Story comes before software", p: "A great edit gives every shot a reason to exist. Learn pacing, continuity and emotional structure before collecting plugins." },
      { h: "Sound changes everything", p: "Clean dialogue, purposeful ambience and considered music often make a bigger difference than visual effects." },
      { h: "Edit for the platform", p: "Practise long-form, short-form and vertical formats. Showing that you understand audience and platform constraints makes your reel more useful to clients." },
    ],
  },
  {
    slug: "ui-ux-design-portfolio",
    title: "How to build a UI/UX portfolio without a client project",
    category: "UI/UX",
    img: cshort,
    date: "Jul 26, 2026",
    excerpt: "Use thoughtful case studies to show your research, decisions and design system thinking.",
    sections: [
      { h: "Start with a real problem", p: "Choose a familiar workflow with visible friction. A narrow problem gives your case study a clearer point of view." },
      { h: "Show the decisions", p: "Include research notes, user flows, wireframes and iterations so readers can understand how your solution developed." },
      { h: "Finish with a usable prototype", p: "A clickable prototype and a short usability test turn a visual concept into evidence of product thinking." },
    ],
  },
  {
    slug: "graphic-design-foundations",
    title: "Graphic design foundations every beginner should learn",
    category: "Graphic Design",
    img: cgame,
    date: "Jul 18, 2026",
    excerpt: "Typography, layout, colour and consistency are the core skills behind professional design.",
    sections: [
      { h: "Typography creates hierarchy", p: "Use type size, weight and spacing to guide attention. Good typography makes information easier to understand before decoration enters the picture." },
      { h: "Build a repeatable system", p: "Define a small colour palette, spacing rhythm and image treatment so every piece feels like part of the same brand." },
      { h: "Practise with constraints", p: "Design posters, social sets and identity pieces with a clear audience and brief. Constraints make your judgement visible." },
    ],
  },
  {
    slug: "career-in-3d-animation",
    title: "How to build a career in 3D animation in 2026",
    img: c3d,
    date: "Jul 12, 2026",
    excerpt: "A step-by-step roadmap from foundations to your first studio job.",
    sections: [
      { h: "Start with the fundamentals", p: "Before touching software, learn the twelve principles of animation, basic anatomy and staging. Studios hire for craft first — software is taught in weeks, timing and weight take years." },
      { h: "Pick one pipeline and go deep", p: "Choose between character animation, rigging, lighting or layout. A focused reel with three strong shots beats a generalist reel with twelve average ones." },
      { h: "Build a reel studios actually watch", p: "Keep it under 90 seconds, lead with your strongest shot, and include a breakdown of your contribution on every clip." },
      { h: "Get inside the industry early", p: "Internships, festival submissions and freelance shots build the credits and references that turn an application into an interview." },
    ],
  },
  {
    slug: "vfx-industry-trends",
    title: "The state of VFX in India: trends & opportunities",
    img: cvfx,
    date: "Jun 28, 2026",
    excerpt: "Where the industry is growing and what skills studios hire for.",
    sections: [
      { h: "Streaming keeps driving volume", p: "OTT originals now account for a large share of VFX shot counts, creating steady demand for compositors, roto and paint artists across the country." },
      { h: "Real-time is no longer niche", p: "Virtual production and Unreal-based previs are moving from experiments to standard practice on mid-budget shows." },
      { h: "Skills studios ask for", p: "Nuke compositing, Houdini FX, matchmove accuracy and clean scene-management habits remain the most requested skills in hiring briefs." },
    ],
  },
  {
    slug: "game-design-portfolio",
    title: "Building a game design portfolio that stands out",
    img: cgame,
    date: "Jun 05, 2026",
    excerpt: "What recruiters look for and how to structure your reel.",
    sections: [
      { h: "Ship something playable", p: "One finished small game says more than five unfinished prototypes. Recruiters want evidence you can close scope." },
      { h: "Show your thinking", p: "Document design decisions, iterations and playtest findings. Process pages are often read before the build itself." },
      { h: "Match the studio", p: "Tailor the first project in your portfolio to the genre and platform of the studio you're applying to." },
    ],
  },
  {
    slug: "creator-economy-india",
    title: "Creator economy 101: making a living online",
    img: ccontent,
    date: "May 20, 2026",
    excerpt: "From your first thousand followers to monetisation and brand deals.",
    sections: [
      { h: "Pick a format you can repeat", p: "Sustainable channels are built on a format, not on individual viral hits. Choose something you can produce weekly for a year." },
      { h: "Own the craft", p: "Editing rhythm, sound design and thumbnails carry more weight than gear. Most successful creators started on a phone." },
      { h: "Diversify income early", p: "Brand deals, digital products, memberships and services all outperform ad revenue for creators under 100K subscribers." },
    ],
  },
];
