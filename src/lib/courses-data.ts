import c3d from "../assets/course-3d.jpg";
import cvfx from "../assets/course-vfx.jpg";
import cgame from "../assets/course-game.jpg";
import ccontent from "../assets/course-content.jpg";
import cmotion from "../assets/course-motion.jpg";
import cshort from "../assets/course-short.jpg";

export type Course = {
  slug: string;
  title: string;
  short: string;
  category: string;
  img: string;
  duration: string;
  tag: string;
  price: string;
  intro: string;
  eligibility: string;
  outcomes: string[];
  syllabus: { title: string; items: string[] }[];
  tools: string[];
  careers: string[];
  projects: string[];
};

export const categories = [
  "All Courses",
  "Digital Content",
  "Graphic Design",
  "Web Design & Development",
  "UI/UX Design",
  "Motion Design",
  "Animation & VFX",
];

const courseCatalog: Course[] = [
  {
    slug: "digital-content-graphic-web-design",
    title: "Graphic Design, Web Design & Development",
    short: "Design, digital content and web development in one practical program.",
    category: "Web Design & Development",
    img: cgame,
    duration: "18 Months",
    tag: "Professional Program",
    price: "₹1,45,000",
    intro:
      "Learn design, digital content and web development while building live projects.",
    eligibility: "10+2 or equivalent",
    outcomes: [
      "Complete design + development portfolio",
      "Live, responsive websites you built end-to-end",
      "Brand identity and print-ready design work",
      "Version control and team workflow experience",
    ],
    syllabus: [
      { title: "Term 1 · Digital Content & Design Foundations", items: ["Design principles & colour", "Typography & layout", "Digital content creation", "Canva & Adobe Express"] },
      { title: "Term 2 · Graphic Design Craft", items: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Brand identity & print production"] },
      { title: "Term 3 · Web Design & Front-End", items: ["Figma UI design", "HTML5 & CSS3", "Bootstrap", "WordPress with Elementor", "JavaScript"] },
      { title: "Term 4 · Development & Deployment", items: ["Git & GitHub", "PHP", "MySQL", "React", "Capstone project & deployment"] },
    ],
    tools: [
      "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva", "Adobe Express", "Figma",
      "HTML5", "CSS3", "Bootstrap", "WordPress (Elementor)", "JavaScript", "Git & GitHub",
      "PHP", "MySQL", "React", "Visual Studio Code",
    ],
    careers: ["Graphic Designer", "Web Designer", "Front-End Developer", "WordPress Developer", "Full-Stack Developer (entry)"],
    projects: ["Brand identity system", "Responsive marketing website", "WordPress business site", "React web application"],
  },
  {
    slug: "ui-ux-design",
    title: "Digital Content & UI/UX Design",
    short: "Research, wireframes and prototypes for better digital products.",
    category: "UI/UX Design",
    img: cshort,
    duration: "8 Months",
    tag: "Specialisation",
    price: "₹75,000",
    intro:
      "Build product case studies through research, wireframes, UI and usability testing.",
    eligibility: "Open to all",
    outcomes: [
      "Three end-to-end UX case studies",
      "Design system and component library",
      "Interactive, testable prototypes",
      "Portfolio published on Behance / Dribbble",
    ],
    syllabus: [
      { title: "Module 1 · UX Research", items: ["User interviews & surveys", "Personas & journey maps", "Google Forms & Notion research ops", "Miro / FigJam workshops"] },
      { title: "Module 2 · Wireframes & IA", items: ["Information architecture", "Balsamiq low-fidelity wireframes", "User flows", "Content strategy"] },
      { title: "Module 3 · UI Design", items: ["Figma mastery", "Design systems & components", "Photoshop & Illustrator assets", "Accessibility"] },
      { title: "Module 4 · Prototype & Test", items: ["ProtoPie interactions", "Maze / UserTesting studies", "Hotjar / Microsoft Clarity insights", "Zeplin handoff & HTML5/CSS3 basics"] },
    ],
    tools: [
      "Adobe Photoshop", "Adobe Illustrator", "Figma", "Balsamiq", "Miro / FigJam", "ProtoPie",
      "Maze / UserTesting", "Hotjar / Microsoft Clarity", "Uizard", "Adobe Firefly", "ChatGPT",
      "VS Code", "HTML5 / CSS3", "Google Forms", "Notion", "Zeplin", "Behance / Dribbble",
    ],
    careers: ["UI Designer", "UX Designer", "Product Designer", "UX Researcher", "Design Systems Designer"],
    projects: ["Mobile app case study", "SaaS dashboard redesign", "Design system library"],
  },
  {
    slug: "motion-design",
    title: "Digital Content & Motion Design",
    short: "Motion graphics, editing and sound for modern content.",
    category: "Motion Design",
    img: cmotion,
    duration: "14 Months",
    tag: "Career Program",
    price: "₹1,10,000",
    intro:
      "Create motion graphics, edited videos and sound-led content for brands and social media.",
    eligibility: "10+2 or equivalent",
    outcomes: [
      "Broadcast-quality motion reel",
      "Editing, colour and sound fluency",
      "AI-assisted content workflows",
      "Freelance-ready client portfolio",
    ],
    syllabus: [
      { title: "Term 1 · Content & Design", items: ["Storyboarding with Storyboarder", "Adobe Illustrator", "Canva / Adobe Express", "Script & concept"] },
      { title: "Term 2 · Editing & Sound", items: ["Adobe Premiere Pro", "DaVinci Resolve colour", "Adobe Audition", "Suno AI music beds"] },
      { title: "Term 3 · Motion Design", items: ["Adobe After Effects", "Adobe Animate", "Kinetic typography", "Broadcast packaging"] },
      { title: "Term 4 · AI & Portfolio", items: ["Runway ML", "Adobe Firefly", "Midjourney", "Behance portfolio, LinkedIn & Upwork profile"] },
    ],
    tools: [
      "Adobe After Effects", "Adobe Premiere Pro", "Adobe Animate", "DaVinci Resolve",
      "Adobe Audition", "Adobe Illustrator", "Runway ML", "Suno AI", "Canva / Adobe Express",
      "Storyboarder", "Adobe Firefly", "Midjourney", "Behance", "LinkedIn", "Upwork",
    ],
    careers: ["Motion Designer", "Video Editor", "Content Producer", "Broadcast Designer", "Freelance Creator"],
    projects: ["Brand motion package", "Short-form social series", "Explainer film"],
  },
  {
    slug: "graphic-design-essentials",
    title: "Digital Graphic Design Essentials",
    short: "A focused foundation in graphic design and brand craft.",
    category: "Graphic Design",
    img: ccontent,
    duration: "6 Months",
    tag: "Specialisation",
    price: "₹45,000",
    intro:
      "Learn typography, layout and brand identity while building a professional portfolio.",
    eligibility: "Open to all",
    outcomes: [
      "Professional design portfolio",
      "Brand identity project",
      "Print and digital production skills",
      "Behance and LinkedIn presence",
    ],
    syllabus: [
      { title: "Module 1 · Design Foundations", items: ["Colour theory", "Typography", "Grid & composition"] },
      { title: "Module 2 · Software Craft", items: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"] },
      { title: "Module 3 · Brand & AI", items: ["Logo & identity systems", "Adobe Firefly", "Canva / Adobe Express templates"] },
      { title: "Module 4 · Portfolio", items: ["Print production", "Social campaign design", "Behance & LinkedIn portfolio"] },
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe Firefly", "Canva / Adobe Express", "Behance", "LinkedIn"],
    careers: ["Graphic Designer", "Brand Designer", "Social Media Designer", "Print & Layout Artist"],
    projects: ["Logo & identity kit", "Print collateral set", "Social campaign"],
  },
  {
    slug: "animation-vfx",
    title: "Advanced Animation & Visual Effects",
    short: "3D animation, FX simulation and film-grade compositing.",
    category: "Animation & VFX",
    img: c3d,
    duration: "24 Months",
    tag: "Career Diploma",
    price: "₹1,95,000",
    intro:
      "Master the animation and VFX pipeline from modelling and FX to final compositing.",
    eligibility: "10+2 or equivalent",
    outcomes: [
      "Studio-ready animation and VFX showreel",
      "Full pipeline fluency from asset to final comp",
      "FX simulation and compositing specialisation",
      "Mentor-reviewed portfolio and reel breakdown",
    ],
    syllabus: [
      { title: "Term 1 · Foundations & Digital Art", items: ["Design & drawing fundamentals", "Adobe Photoshop", "Storyboarding", "Introduction to 3D"] },
      { title: "Term 2 · 3D Modelling & Animation", items: ["Autodesk Maya modelling", "ZBrush sculpting", "Rigging", "Character animation"] },
      { title: "Term 3 · FX & Simulation", items: ["Houdini fundamentals", "Particles, pyro & destruction", "Dynamics", "Lighting & rendering"] },
      { title: "Term 4 · Compositing & Post", items: ["Nuke compositing", "Adobe After Effects", "Adobe Premiere Pro", "Adobe Audition & final reel"] },
    ],
    tools: ["Adobe Photoshop", "Autodesk Maya", "ZBrush", "Houdini", "Nuke", "Adobe Premiere Pro", "Adobe After Effects", "Adobe Audition"],
    careers: ["3D Animator", "FX Artist", "Compositor", "Modelling & Texturing Artist", "Lighting Artist"],
    projects: ["Character animation shot", "FX simulation sequence", "Final VFX breakdown reel"],
  },
  {
    slug: "animation-vfx-unreal-engine",
    title: "Advanced Program in Animation, VFX & Unreal Engine",
    short: "Film VFX and real-time Unreal Engine 5 production.",
    category: "Animation & VFX",
    img: cvfx,
    duration: "36 Months",
    tag: "Flagship Program",
    price: "₹2,75,000",
    intro:
      "Build a dual showreel across film VFX and real-time Unreal Engine 5 production.",
    eligibility: "10+2 or equivalent",
    outcomes: [
      "Film + real-time dual showreel",
      "Virtual production and Unreal Engine 5 expertise",
      "Advanced FX, tracking and compositing skills",
      "Industry-standard pipeline and review discipline",
    ],
    syllabus: [
      { title: "Year 1 · Art, Design & 3D Foundations", items: ["Adobe Photoshop & Illustrator", "Digital art & storyboarding", "Autodesk Maya", "ZBrush sculpting"] },
      { title: "Year 2 · Look-Dev, FX & Compositing", items: ["Substance 3D Painter", "Arnold rendering", "Houdini FX", "Nuke, Silhouette & 3DEqualizer"] },
      { title: "Year 3 · Real-Time & Virtual Production", items: ["Unreal Engine 5 with Lumen", "Niagara & Sequencer", "Blueprints & MetaHuman", "DaVinci Resolve finishing"] },
      { title: "Capstone · Showreel Production", items: ["Film VFX sequence", "Real-time cinematic", "Reel breakdown & industry review"] },
    ],
    tools: [
      "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe Audition", "Adobe After Effects",
      "Autodesk Maya", "ZBrush", "Substance 3D Painter", "Arnold", "Houdini", "Nuke", "Silhouette",
      "3DEqualizer", "Unreal Engine 5", "Lumen", "Niagara", "Sequencer", "Blueprints", "MetaHuman", "DaVinci Resolve",
    ],
    careers: ["VFX Compositor", "FX/Houdini Artist", "Unreal Generalist", "Virtual Production Artist", "Look-Dev Artist"],
    projects: ["Film VFX shot", "Unreal Engine 5 cinematic", "MetaHuman performance piece"],
  },
];

export const courses = [...courseCatalog].sort((a, b) => a.title.localeCompare(b.title));

export const courseMap: Record<string, Course> = Object.fromEntries(
  courses.map((c) => [c.slug, c]),
);
