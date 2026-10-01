import { i as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, n as QueryClientProvider, r as useQueryClient, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { B as notFound, L as redirect, b as useRouter, f as createRouter, g as Link, h as createRootRouteWithContext, l as Scripts, m as createFileRoute, p as Outlet, u as HeadContent, v as useNavigate, y as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { A as Globe, B as CalendarDays, C as LogOut, D as Instagram, E as LayoutDashboard, F as Clock, G as ArrowLeft, H as Briefcase, I as CircleCheck, L as ChevronRight, M as FileText, N as Facebook, O as Inbox, P as Download, R as ChevronLeft, S as Mail, T as Lightbulb, U as Award, V as Building2, W as ArrowRight, _ as Phone, a as Trophy, b as Megaphone, c as Terminal, d as Sparkles, f as ShieldCheck, g as Quote, h as RefreshCw, i as Upload, j as FolderTree, k as GraduationCap, l as Target, m as Search, n as X, o as TrendingUp, p as ShieldAlert, r as Users, s as Trash2, t as Youtube, u as Star, v as MessageCircle, w as Linkedin, x as MapPin, y as Menu, z as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { i as stringType, n as literalType, r as objectType, t as booleanType } from "../_libs/zod.mjs";
//#region src/styles.css?transform-only
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-AkFw3Kev.css";
//#endregion
//#region src/components/enquiry-form.tsx
var import_jsx_runtime = require_jsx_runtime();
var districtsUrl = "https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json";
var courses$1 = [
	"Animation",
	"VFX",
	"Graphic Design",
	"UI/UX Design",
	"Motion Graphics",
	"Video Editing",
	"Generative AI",
	"Broadcast Design",
	"Multimedia",
	"Game Design",
	"Short Term Courses"
];
var field$4 = "w-full rounded-lg border border-white/20 bg-white/[0.04] px-3.5 py-2.5 text-sm font-light text-white placeholder:text-white/45 transition focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]";
var label$4 = "block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 mb-1.5";
function EnquiryForm({ compact = false }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [locations, setLocations] = (0, import_react.useState)([]);
	const [selectedState, setSelectedState] = (0, import_react.useState)("");
	const [selectedDistrict, setSelectedDistrict] = (0, import_react.useState)("");
	const [districtError, setDistrictError] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const controller = new AbortController();
		fetch(districtsUrl, { signal: controller.signal }).then((response) => {
			if (!response.ok) throw new Error("District list unavailable");
			return response.json();
		}).then((data) => setLocations(data.states)).catch(() => {
			if (!controller.signal.aborted) setDistrictError(true);
		});
		return () => controller.abort();
	}, []);
	async function submitEnquiry(event) {
		event.preventDefault();
		setSubmitting(true);
		const form = new FormData(event.currentTarget);
		const { error } = await supabase.from("enquiries").insert({
			full_name: String(form.get("full_name")),
			phone: String(form.get("phone")),
			city: String(form.get("city")),
			state: districtError ? null : String(form.get("state")),
			course: String(form.get("course")),
			source: "website"
		});
		setSubmitting(false);
		if (error) {
			toast.error("Could not submit your enquiry. Please try again.");
			return;
		}
		setSent(true);
	}
	const availableDistricts = locations.find(({ state }) => state === selectedState)?.districts ?? [];
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-[#0E0E0E] p-8 text-center border border-white/10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-14 w-14 rounded-full bg-[var(--gold)]/20 grid place-items-center mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl text-[var(--gold)]",
					children: "✓"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl mt-4 text-white",
				children: "Thank you!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm font-light text-white/70",
				children: "Our counsellor will reach out within one working day."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submitEnquiry,
		className: "rounded-2xl bg-[#0E0E0E] p-6 md:p-8 border border-white/10 grid gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl md:text-[1.75rem] leading-tight text-white",
				children: "Book Free Career Counselling"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: compact ? "grid gap-5" : "grid gap-5 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label$4,
					htmlFor: "eq-name",
					children: "Full Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "eq-name",
					name: "full_name",
					required: true,
					placeholder: "Your full name",
					className: field$4
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label$4,
					htmlFor: "eq-phone",
					children: "Phone"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "eq-phone",
					name: "phone",
					required: true,
					type: "tel",
					placeholder: "10-digit mobile number",
					className: field$4
				})] })]
			}),
			districtError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label$4,
				htmlFor: "eq-city",
				children: "City / District"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "eq-city",
				name: "city",
				required: true,
				placeholder: "Your city or district",
				className: field$4
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label$4,
					htmlFor: "eq-state",
					children: "State / UT"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "eq-state",
					name: "state",
					required: true,
					value: selectedState,
					onChange: (event) => {
						setSelectedState(event.target.value);
						setSelectedDistrict("");
					},
					className: field$4,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						disabled: true,
						children: locations.length ? "Select a state / UT" : "Loading states…"
					}), locations.map(({ state }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: state,
						className: "bg-[#0E0E0E]",
						children: state
					}, state))]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label$4,
					htmlFor: "eq-city",
					children: "City / District"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "eq-city",
					name: "city",
					required: true,
					disabled: !selectedState,
					value: selectedDistrict,
					onChange: (event) => setSelectedDistrict(event.target.value),
					className: field$4,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						disabled: true,
						children: selectedState ? "Select a district" : "Select state first"
					}), availableDistricts.map((district) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: district,
						className: "bg-[#0E0E0E]",
						children: district
					}, district))]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label$4,
				htmlFor: "eq-course",
				children: "Course Interested In"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				id: "eq-course",
				name: "course",
				required: true,
				defaultValue: "",
				className: field$4,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					disabled: true,
					children: "Select a course"
				}), courses$1.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					className: "bg-[#0E0E0E]",
					children: c
				}, c))]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				disabled: submitting,
				className: "rounded-lg bg-[var(--gold)] text-black px-4 py-3 text-sm font-bold uppercase tracking-wide transition hover:brightness-110 disabled:opacity-60",
				children: submitting ? "Submitting…" : "Submit Enquiry"
			})
		]
	});
}
//#endregion
//#region src/components/enquiry-modal.tsx
var EnquiryCtx = (0, import_react.createContext)(null);
function EnquiryProvider({ children }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EnquiryCtx.Provider, {
		value: {
			open: () => setIsOpen(true),
			close: () => setIsOpen(false),
			isOpen
		},
		children: [children, isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[100] flex justify-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in",
				onClick: () => setIsOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-md h-full bg-background shadow-2xl overflow-y-auto overscroll-contain animate-slide-in-right border-l-4 border-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setIsOpen(false),
					className: "absolute top-4 right-4 z-10 rounded-full bg-primary text-primary-foreground p-2 hover:scale-110 transition",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-6 pt-14 pb-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, { compact: true })
				})]
			})]
		})]
	});
}
function useEnquiry() {
	const ctx = (0, import_react.useContext)(EnquiryCtx);
	if (!ctx) throw new Error("useEnquiry must be used inside EnquiryProvider");
	return ctx;
}
//#endregion
//#region src/components/site-layout.tsx
var BRAND = "Center of Skill Learning";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/courses",
		label: "Courses"
	},
	{
		to: "/students-world",
		label: "Student Work"
	},
	{
		to: "/partner",
		label: "Placements"
	},
	{
		to: "/franchise",
		label: "Franchise"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { open: openEnquiry } = useEnquiry();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 bg-black border-b border-white/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex items-center justify-between h-16 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.webp",
						alt: "CSL",
						className: "h-10 w-10 object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-base md:text-lg font-bold tracking-wide text-white uppercase",
							children: "Centre Of"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-sm md:text-base font-bold text-[var(--gold)] uppercase -mt-1",
							children: "Skill Learning"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-6",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[var(--gold)] transition-colors",
						activeProps: { className: "text-[var(--gold)]" },
						activeOptions: { exact: n.to === "/" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: openEnquiry,
						className: "btn-primary btn-primary-hover text-xs",
						children: "Enquire Now"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "lg:hidden text-white",
					"aria-label": "Menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-white/10 bg-black animate-fade-in-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-4 flex flex-col gap-1",
				children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "py-2.5 text-white/80 border-b border-white/10 uppercase text-xs font-bold tracking-wider",
					children: n.label
				}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setOpen(false);
						openEnquiry();
					},
					className: "btn-primary btn-primary-hover mt-3 justify-center text-xs",
					children: "Enquire Now"
				})]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "gradient-dark text-white/85 mt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-16 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.webp",
							alt: "CSL",
							className: "h-10 w-10 object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold text-white leading-tight",
							children: BRAND
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-white/60 leading-relaxed",
						children: "A premium training institute preparing India's next generation of animators, VFX artists, designers and creators."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 mt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Instagram",
								className: "hover:text-[var(--gold)] transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "YouTube",
								className: "hover:text-[var(--gold)] transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Facebook",
								className: "hover:text-[var(--gold)] transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "LinkedIn",
								className: "hover:text-[var(--gold)] transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-5 w-5" })
							})
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-lg mb-4 text-white",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2.5 text-sm text-white/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-[var(--gold)]",
							children: "About Us"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/courses",
							className: "hover:text-[var(--gold)]",
							children: "Courses"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/students-world",
							className: "hover:text-[var(--gold)]",
							children: "Student Work"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/partner",
							className: "hover:text-[var(--gold)]",
							children: "Hiring Partners"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/franchise",
							className: "hover:text-[var(--gold)]",
							children: "Franchise"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "hover:text-[var(--gold)]",
							children: "Blog"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-lg mb-4 text-white",
					children: "Resources"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2.5 text-sm text-white/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/why-choose-us",
							className: "hover:text-[var(--gold)]",
							children: "Why Choose Us"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/testimonials",
							className: "hover:text-[var(--gold)]",
							children: "Testimonials"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							className: "hover:text-[var(--gold)]",
							children: "FAQs"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							className: "hover:text-[var(--gold)]",
							children: "Events & Workshops"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-[var(--gold)]",
							children: "Career Counselling"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "hover:text-[var(--gold)]",
							children: "Privacy Policy"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-lg mb-4 text-white",
					children: "Get in Touch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-white/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 text-[var(--gold)]" }), " CSL HQ, Mumbai, India"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-[var(--gold)]" }), " +91 99993 80187"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-[var(--gold)]" }), " hello@cslindia.example"]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-5 text-xs text-white/50 flex flex-wrap justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					BRAND,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Crafted with care for creative careers." })]
			})
		})]
	});
}
function PageHero({ title, kicker, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative gradient-hero border-b border-border animate-fade-in-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-20 md:py-24",
			children: [
				kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[var(--gold)] uppercase tracking-[0.3em] text-xs mb-4 font-semibold",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl md:text-5xl leading-[1.05] max-w-4xl",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted-foreground text-base leading-relaxed",
					children: subtitle
				})
			]
		})
	});
}
//#endregion
//#region src/components/floating-contacts.tsx
function FloatingContacts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-3 bottom-3 z-40 flex flex-col gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: "https://wa.me/919999380187",
			target: "_blank",
			rel: "noreferrer",
			"aria-label": "WhatsApp",
			className: "group relative h-10 w-10 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg hover:scale-110 transition",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				className: "h-5 w-5 relative",
				fill: "currentColor",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.15-3.4-8.44zM12.05 21.3h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.22-3.77.99 1.01-3.67-.24-.38a9.82 9.82 0 0 1-1.5-5.19c0-5.44 4.43-9.86 9.87-9.86 2.63 0 5.11 1.03 6.97 2.89a9.79 9.79 0 0 1 2.89 6.98c0 5.44-4.43 9.83-9.85 9.83zm5.4-7.37c-.29-.15-1.75-.87-2.02-.97-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.56-.34z" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: "tel:+919999380187",
			"aria-label": "Call",
			className: "group relative h-10 w-10 rounded-full gradient-brand text-primary-foreground grid place-items-center shadow-lg hover:scale-110 transition",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-primary animate-ping opacity-25" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 relative" })]
		})]
	});
}
//#endregion
//#region src/components/cursor-trail.tsx
/** Subtle canvas fire trail following the cursor. Desktop + fine-pointer only. */
function CursorTrail() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (!window.matchMedia("(pointer: fine)").matches) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let w = 0, h = 0;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const resize = () => {
			w = window.innerWidth;
			h = window.innerHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		resize();
		window.addEventListener("resize", resize);
		const particles = [];
		const MAX = 90;
		let mx = -100, my = -100, moved = false;
		const onMove = (e) => {
			mx = e.clientX;
			my = e.clientY;
			moved = true;
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		let raf = 0;
		const tick = () => {
			ctx.clearRect(0, 0, w, h);
			if (moved && particles.length < MAX) {
				for (let i = 0; i < 2; i++) particles.push({
					x: mx + (Math.random() - .5) * 6,
					y: my + (Math.random() - .5) * 6,
					vx: (Math.random() - .5) * .6,
					vy: -.6 - Math.random() * .9,
					life: 1,
					size: 3 + Math.random() * 5
				});
				moved = false;
			}
			ctx.globalCompositeOperation = "lighter";
			for (let i = particles.length - 1; i >= 0; i--) {
				const p = particles[i];
				p.x += p.vx;
				p.y += p.vy;
				p.vy -= .008;
				p.life -= .022;
				if (p.life <= 0) {
					particles.splice(i, 1);
					continue;
				}
				const r = p.size * p.life;
				const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
				g.addColorStop(0, `rgba(255, 235, 180, ${.55 * p.life})`);
				g.addColorStop(.4, `rgba(245, 166, 35, ${.35 * p.life})`);
				g.addColorStop(1, "rgba(245, 90, 10, 0)");
				ctx.fillStyle = g;
				ctx.beginPath();
				ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.globalCompositeOperation = "source-over";
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", onMove);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 z-[90] hidden md:block"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This page doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex rounded-md gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		console.error(error);
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-xl font-semibold",
				children: "Something went wrong"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					router.invalidate();
					reset();
				},
				className: "mt-6 rounded-md gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground",
				children: "Try again"
			})]
		})
	});
}
var Route$24 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "AnimaCraft — Creative Careers in Animation, VFX & Gaming" },
			{
				name: "description",
				content: "India's next-gen training institute for 3D Animation, VFX, Game Design, and Digital Content Creation."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$24.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingContacts, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorTrail, {})
			]
		}) })
	});
}
//#endregion
//#region src/assets/course-3d.jpg
var course_3d_default = "/assets/course-3d-C72KIGXB.jpg";
//#endregion
//#region src/components/hero-particles.tsx
/**
* Lightweight CSS-only ember/particle layer for the hero section.
* Purely decorative: pointer-events none, no JS timers.
*/
var EMBERS = Array.from({ length: 26 }, (_, i) => {
	const rnd = (n) => (i * 9301 + n * 49297) % 233280 / 233280;
	return {
		left: `${Math.round(rnd(1) * 100)}%`,
		size: 2 + Math.round(rnd(2) * 4),
		delay: `${(rnd(3) * 9).toFixed(2)}s`,
		duration: `${(7 + rnd(4) * 8).toFixed(2)}s`,
		drift: `${Math.round(rnd(5) * 80 - 40)}px`,
		opacity: .35 + rnd(6) * .5
	};
});
function HeroParticles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden z-[5]",
		children: [EMBERS.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ember",
			style: {
				left: e.left,
				width: e.size,
				height: e.size,
				animationDelay: e.delay,
				animationDuration: e.duration,
				opacity: e.opacity,
				["--drift"]: e.drift
			}
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--gold)]/12 to-transparent animate-glow-pulse" })]
	});
}
//#endregion
//#region src/components/partner-logos.tsx
var partners = [
	["Adda Education", "data:image/png;base64,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"],
	["Ambrosia Botanicals", "/assets/ambrosia_botanicals-CKZbfVQV.avif"],
	["Bedigitech", "/assets/Bedigitech-D6sAwC_Q.png"],
	["Beraw Storie Production", "data:application/octet-stream;base64,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"],
	["Bolt Audio", "/assets/bolt-audio-DA1epV5q.png"],
	["Charuvi Design", "/assets/charuvi_design-OYEUMkqq.png"],
	["Ecorp", "data:image/png;base64,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"],
	["Expand Wwide", "/assets/expand_wwide-DN5raeab.jfif"],
	["Gushsquad", "/assets/gushsquad-Cb8eu1YG.jfif"],
	["Immeverse Studio", "data:image/png;base64,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"],
	["Infyplus", "/assets/infyplus-CwUStyp1.jfif"],
	["Just Procure", "/assets/just_procure-VwXy99_F.png"],
	["Mobisoft", "/assets/mobisoft_abs-Df82MKfr.png"],
	["Myza Diamond", "/assets/myza_diamond.-CHRPV-AY.avif"],
	["Narang Properties", "/assets/narang_properties-dVKAh4tV.png"],
	["Oak Stone", "/assets/oak-stone-inc-DS4x0A83.png"],
	["Ocean Techventure", "data:image/png;base64,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"],
	["Qwerty", "data:image/png;base64,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"],
	["Renticle", "data:image/png;base64,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"],
	["Schmooze Media", "data:application/octet-stream;base64,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"],
	["Social Codify", "data:image/png;base64,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"],
	["Unstop", "data:image/png;base64,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"]
];
function PartnerLogoGrid({ variant = "dark", count = partners.length }) {
	const visiblePartners = partners.slice(0, count);
	const rows = [visiblePartners.filter((_, index) => index % 2 === 0), visiblePartners.filter((_, index) => index % 2 === 1)];
	const tile = variant === "dark" ? "border border-white/10 bg-transparent hover:border-[var(--gold)]/60" : "border border-black/15 bg-transparent hover:border-black/30";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "partner-marquee space-y-3",
		"aria-label": "Hiring partners",
		children: rows.map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `partner-marquee-track ${rowIndex % 2 ? "partner-marquee-track-reverse" : ""}`,
				children: [...row, ...row].map(([name, image], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `${tile} h-24 w-44 shrink-0 p-3 grid place-items-center transition hover:-translate-y-0.5`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image,
						alt: `${name} hiring partner logo`,
						className: "max-h-16 max-w-[90%] object-contain",
						loading: "lazy"
					})
				}, `${name}-${index}`))
			})
		}, rowIndex))
	});
}
var placementStats = [
	{
		n: "1000+",
		l: "Hiring Partners"
	},
	{
		n: "100%",
		l: "Internship Guarantee"
	},
	{
		n: "95%",
		l: "Placement Record"
	},
	{
		n: "₹12 LPA",
		l: "Highest Package"
	}
];
//#endregion
//#region src/assets/course-vfx.jpg
var course_vfx_default = "/assets/course-vfx-fyeua4NJ.jpg";
//#endregion
//#region src/assets/course-game.jpg
var course_game_default = "/assets/course-game-NEalie4Q.jpg";
//#endregion
//#region src/assets/course-content.jpg
var course_content_default = "/assets/course-content-BhmndktB.jpg";
//#endregion
//#region src/assets/course-motion.jpg
var course_motion_default = "/assets/course-motion-BKDbhe6P.jpg";
//#endregion
//#region src/assets/course-short.jpg
var course_short_default = "/assets/course-short-DN7BDVTh.jpg";
//#endregion
//#region src/assets/hero-warrior.jpg
var hero_warrior_default = "/assets/hero-warrior-DYHWrLdF.jpg";
//#endregion
//#region src/assets/hero-cyber.jpg
var hero_cyber_default = "/assets/hero-cyber-B70LsPXm.jpg";
//#endregion
//#region src/assets/hero-dragon.jpg
var hero_dragon_default = "/assets/hero-dragon-XUQnO2X_.jpg";
//#endregion
//#region src/lib/courses-data.ts
var categories = [
	"All Courses",
	"Digital Content",
	"Graphic Design",
	"Web Design & Development",
	"UI/UX Design",
	"Motion Design",
	"Animation & VFX"
];
var courses = [...[
	{
		slug: "digital-content-graphic-web-design",
		title: "Graphic Design, Web Design & Development",
		short: "Design, digital content and web development in one practical program.",
		category: "Web Design & Development",
		img: course_game_default,
		duration: "18 Months",
		tag: "Professional Program",
		price: "₹1,45,000",
		intro: "Learn design, digital content and web development while building live projects.",
		eligibility: "10+2 or equivalent",
		outcomes: [
			"Complete design + development portfolio",
			"Live, responsive websites you built end-to-end",
			"Brand identity and print-ready design work",
			"Version control and team workflow experience"
		],
		syllabus: [
			{
				title: "Term 1 · Digital Content & Design Foundations",
				items: [
					"Design principles & colour",
					"Typography & layout",
					"Digital content creation",
					"Canva & Adobe Express"
				]
			},
			{
				title: "Term 2 · Graphic Design Craft",
				items: [
					"Adobe Photoshop",
					"Adobe Illustrator",
					"Adobe InDesign",
					"Brand identity & print production"
				]
			},
			{
				title: "Term 3 · Web Design & Front-End",
				items: [
					"Figma UI design",
					"HTML5 & CSS3",
					"Bootstrap",
					"WordPress with Elementor",
					"JavaScript"
				]
			},
			{
				title: "Term 4 · Development & Deployment",
				items: [
					"Git & GitHub",
					"PHP",
					"MySQL",
					"React",
					"Capstone project & deployment"
				]
			}
		],
		tools: [
			"Adobe Photoshop",
			"Adobe Illustrator",
			"Adobe InDesign",
			"Canva",
			"Adobe Express",
			"Figma",
			"HTML5",
			"CSS3",
			"Bootstrap",
			"WordPress (Elementor)",
			"JavaScript",
			"Git & GitHub",
			"PHP",
			"MySQL",
			"React",
			"Visual Studio Code"
		],
		careers: [
			"Graphic Designer",
			"Web Designer",
			"Front-End Developer",
			"WordPress Developer",
			"Full-Stack Developer (entry)"
		],
		projects: [
			"Brand identity system",
			"Responsive marketing website",
			"WordPress business site",
			"React web application"
		]
	},
	{
		slug: "ui-ux-design",
		title: "Digital Content & UI/UX Design",
		short: "Research, wireframes and prototypes for better digital products.",
		category: "UI/UX Design",
		img: course_short_default,
		duration: "8 Months",
		tag: "Specialisation",
		price: "₹75,000",
		intro: "Build product case studies through research, wireframes, UI and usability testing.",
		eligibility: "Open to all",
		outcomes: [
			"Three end-to-end UX case studies",
			"Design system and component library",
			"Interactive, testable prototypes",
			"Portfolio published on Behance / Dribbble"
		],
		syllabus: [
			{
				title: "Module 1 · UX Research",
				items: [
					"User interviews & surveys",
					"Personas & journey maps",
					"Google Forms & Notion research ops",
					"Miro / FigJam workshops"
				]
			},
			{
				title: "Module 2 · Wireframes & IA",
				items: [
					"Information architecture",
					"Balsamiq low-fidelity wireframes",
					"User flows",
					"Content strategy"
				]
			},
			{
				title: "Module 3 · UI Design",
				items: [
					"Figma mastery",
					"Design systems & components",
					"Photoshop & Illustrator assets",
					"Accessibility"
				]
			},
			{
				title: "Module 4 · Prototype & Test",
				items: [
					"ProtoPie interactions",
					"Maze / UserTesting studies",
					"Hotjar / Microsoft Clarity insights",
					"Zeplin handoff & HTML5/CSS3 basics"
				]
			}
		],
		tools: [
			"Adobe Photoshop",
			"Adobe Illustrator",
			"Figma",
			"Balsamiq",
			"Miro / FigJam",
			"ProtoPie",
			"Maze / UserTesting",
			"Hotjar / Microsoft Clarity",
			"Uizard",
			"Adobe Firefly",
			"ChatGPT",
			"VS Code",
			"HTML5 / CSS3",
			"Google Forms",
			"Notion",
			"Zeplin",
			"Behance / Dribbble"
		],
		careers: [
			"UI Designer",
			"UX Designer",
			"Product Designer",
			"UX Researcher",
			"Design Systems Designer"
		],
		projects: [
			"Mobile app case study",
			"SaaS dashboard redesign",
			"Design system library"
		]
	},
	{
		slug: "motion-design",
		title: "Digital Content & Motion Design",
		short: "Motion graphics, editing and sound for modern content.",
		category: "Motion Design",
		img: course_motion_default,
		duration: "14 Months",
		tag: "Career Program",
		price: "₹1,10,000",
		intro: "Create motion graphics, edited videos and sound-led content for brands and social media.",
		eligibility: "10+2 or equivalent",
		outcomes: [
			"Broadcast-quality motion reel",
			"Editing, colour and sound fluency",
			"AI-assisted content workflows",
			"Freelance-ready client portfolio"
		],
		syllabus: [
			{
				title: "Term 1 · Content & Design",
				items: [
					"Storyboarding with Storyboarder",
					"Adobe Illustrator",
					"Canva / Adobe Express",
					"Script & concept"
				]
			},
			{
				title: "Term 2 · Editing & Sound",
				items: [
					"Adobe Premiere Pro",
					"DaVinci Resolve colour",
					"Adobe Audition",
					"Suno AI music beds"
				]
			},
			{
				title: "Term 3 · Motion Design",
				items: [
					"Adobe After Effects",
					"Adobe Animate",
					"Kinetic typography",
					"Broadcast packaging"
				]
			},
			{
				title: "Term 4 · AI & Portfolio",
				items: [
					"Runway ML",
					"Adobe Firefly",
					"Midjourney",
					"Behance portfolio, LinkedIn & Upwork profile"
				]
			}
		],
		tools: [
			"Adobe After Effects",
			"Adobe Premiere Pro",
			"Adobe Animate",
			"DaVinci Resolve",
			"Adobe Audition",
			"Adobe Illustrator",
			"Runway ML",
			"Suno AI",
			"Canva / Adobe Express",
			"Storyboarder",
			"Adobe Firefly",
			"Midjourney",
			"Behance",
			"LinkedIn",
			"Upwork"
		],
		careers: [
			"Motion Designer",
			"Video Editor",
			"Content Producer",
			"Broadcast Designer",
			"Freelance Creator"
		],
		projects: [
			"Brand motion package",
			"Short-form social series",
			"Explainer film"
		]
	},
	{
		slug: "graphic-design-essentials",
		title: "Digital Graphic Design Essentials",
		short: "A focused foundation in graphic design and brand craft.",
		category: "Graphic Design",
		img: course_content_default,
		duration: "6 Months",
		tag: "Specialisation",
		price: "₹45,000",
		intro: "Learn typography, layout and brand identity while building a professional portfolio.",
		eligibility: "Open to all",
		outcomes: [
			"Professional design portfolio",
			"Brand identity project",
			"Print and digital production skills",
			"Behance and LinkedIn presence"
		],
		syllabus: [
			{
				title: "Module 1 · Design Foundations",
				items: [
					"Colour theory",
					"Typography",
					"Grid & composition"
				]
			},
			{
				title: "Module 2 · Software Craft",
				items: [
					"Adobe Photoshop",
					"Adobe Illustrator",
					"Adobe InDesign"
				]
			},
			{
				title: "Module 3 · Brand & AI",
				items: [
					"Logo & identity systems",
					"Adobe Firefly",
					"Canva / Adobe Express templates"
				]
			},
			{
				title: "Module 4 · Portfolio",
				items: [
					"Print production",
					"Social campaign design",
					"Behance & LinkedIn portfolio"
				]
			}
		],
		tools: [
			"Adobe Photoshop",
			"Adobe Illustrator",
			"Adobe InDesign",
			"Adobe Firefly",
			"Canva / Adobe Express",
			"Behance",
			"LinkedIn"
		],
		careers: [
			"Graphic Designer",
			"Brand Designer",
			"Social Media Designer",
			"Print & Layout Artist"
		],
		projects: [
			"Logo & identity kit",
			"Print collateral set",
			"Social campaign"
		]
	},
	{
		slug: "animation-vfx",
		title: "Advanced Animation & Visual Effects",
		short: "3D animation, FX simulation and film-grade compositing.",
		category: "Animation & VFX",
		img: course_3d_default,
		duration: "24 Months",
		tag: "Career Diploma",
		price: "₹1,95,000",
		intro: "Master the animation and VFX pipeline from modelling and FX to final compositing.",
		eligibility: "10+2 or equivalent",
		outcomes: [
			"Studio-ready animation and VFX showreel",
			"Full pipeline fluency from asset to final comp",
			"FX simulation and compositing specialisation",
			"Mentor-reviewed portfolio and reel breakdown"
		],
		syllabus: [
			{
				title: "Term 1 · Foundations & Digital Art",
				items: [
					"Design & drawing fundamentals",
					"Adobe Photoshop",
					"Storyboarding",
					"Introduction to 3D"
				]
			},
			{
				title: "Term 2 · 3D Modelling & Animation",
				items: [
					"Autodesk Maya modelling",
					"ZBrush sculpting",
					"Rigging",
					"Character animation"
				]
			},
			{
				title: "Term 3 · FX & Simulation",
				items: [
					"Houdini fundamentals",
					"Particles, pyro & destruction",
					"Dynamics",
					"Lighting & rendering"
				]
			},
			{
				title: "Term 4 · Compositing & Post",
				items: [
					"Nuke compositing",
					"Adobe After Effects",
					"Adobe Premiere Pro",
					"Adobe Audition & final reel"
				]
			}
		],
		tools: [
			"Adobe Photoshop",
			"Autodesk Maya",
			"ZBrush",
			"Houdini",
			"Nuke",
			"Adobe Premiere Pro",
			"Adobe After Effects",
			"Adobe Audition"
		],
		careers: [
			"3D Animator",
			"FX Artist",
			"Compositor",
			"Modelling & Texturing Artist",
			"Lighting Artist"
		],
		projects: [
			"Character animation shot",
			"FX simulation sequence",
			"Final VFX breakdown reel"
		]
	},
	{
		slug: "animation-vfx-unreal-engine",
		title: "Advanced Program in Animation, VFX & Unreal Engine",
		short: "Film VFX and real-time Unreal Engine 5 production.",
		category: "Animation & VFX",
		img: course_vfx_default,
		duration: "36 Months",
		tag: "Flagship Program",
		price: "₹2,75,000",
		intro: "Build a dual showreel across film VFX and real-time Unreal Engine 5 production.",
		eligibility: "10+2 or equivalent",
		outcomes: [
			"Film + real-time dual showreel",
			"Virtual production and Unreal Engine 5 expertise",
			"Advanced FX, tracking and compositing skills",
			"Industry-standard pipeline and review discipline"
		],
		syllabus: [
			{
				title: "Year 1 · Art, Design & 3D Foundations",
				items: [
					"Adobe Photoshop & Illustrator",
					"Digital art & storyboarding",
					"Autodesk Maya",
					"ZBrush sculpting"
				]
			},
			{
				title: "Year 2 · Look-Dev, FX & Compositing",
				items: [
					"Substance 3D Painter",
					"Arnold rendering",
					"Houdini FX",
					"Nuke, Silhouette & 3DEqualizer"
				]
			},
			{
				title: "Year 3 · Real-Time & Virtual Production",
				items: [
					"Unreal Engine 5 with Lumen",
					"Niagara & Sequencer",
					"Blueprints & MetaHuman",
					"DaVinci Resolve finishing"
				]
			},
			{
				title: "Capstone · Showreel Production",
				items: [
					"Film VFX sequence",
					"Real-time cinematic",
					"Reel breakdown & industry review"
				]
			}
		],
		tools: [
			"Adobe Photoshop",
			"Adobe Illustrator",
			"Adobe Premiere Pro",
			"Adobe Audition",
			"Adobe After Effects",
			"Autodesk Maya",
			"ZBrush",
			"Substance 3D Painter",
			"Arnold",
			"Houdini",
			"Nuke",
			"Silhouette",
			"3DEqualizer",
			"Unreal Engine 5",
			"Lumen",
			"Niagara",
			"Sequencer",
			"Blueprints",
			"MetaHuman",
			"DaVinci Resolve"
		],
		careers: [
			"VFX Compositor",
			"FX/Houdini Artist",
			"Unreal Generalist",
			"Virtual Production Artist",
			"Look-Dev Artist"
		],
		projects: [
			"Film VFX shot",
			"Unreal Engine 5 cinematic",
			"MetaHuman performance piece"
		]
	}
]].sort((a, b) => a.title.localeCompare(b.title));
var courseMap = Object.fromEntries(courses.map((c) => [c.slug, c]));
//#endregion
//#region src/routes/index.tsx
var Route$23 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Center of Skill Learning — Premium Institute for Animation, VFX, Design & Tech" },
		{
			name: "description",
			content: "Center of Skill Learning (CSL) — India's premium training institute for animation, VFX, UI/UX, motion graphics, game design, web development and generative AI. Industry mentors. Placement support."
		},
		{
			name: "keywords",
			content: "animation institute, VFX training, UI UX course, game design, motion graphics, generative AI course, graphic design institute India, Center of Skill Learning"
		},
		{
			property: "og:title",
			content: "Center of Skill Learning — Premium Creative Careers Institute"
		},
		{
			property: "og:description",
			content: "Industry-led programs in animation, VFX, design, gaming, web and AI with dedicated placement support."
		}
	] }),
	component: Home
});
var studentWorks = [
	{
		title: "Neon Runner",
		author: "Aarav Mehta",
		course: "Animation",
		img: course_3d_default
	},
	{
		title: "Kaiju Skyline",
		author: "Preeti Sharma",
		course: "VFX",
		img: course_vfx_default
	},
	{
		title: "Shadow Realm",
		author: "Shivam Gupta",
		course: "Game Design",
		img: course_game_default
	},
	{
		title: "The Daily Cut",
		author: "Shilpi Roy",
		course: "Motion Graphics",
		img: course_content_default
	},
	{
		title: "Broadcast 2049",
		author: "Ritika Singh",
		course: "Motion Graphics",
		img: course_motion_default
	},
	{
		title: "Studio System",
		author: "Kamna Gupta",
		course: "UI/UX",
		img: course_short_default
	}
];
var whyChoose = [
	{
		i: Award,
		t: "Industry Expert Trainers",
		d: "Learn from professionals actively shipping work for top studios and agencies."
	},
	{
		i: Briefcase,
		t: "Portfolio Development",
		d: "Graduate with a curated portfolio built to open studio doors."
	},
	{
		i: Target,
		t: "Internship Opportunities",
		d: "Structured internships with our 1000+ partner studios and agencies."
	},
	{
		i: GraduationCap,
		t: "Placement Support",
		d: "Dedicated placement cell with 95% placement assistance."
	},
	{
		i: Users,
		t: "Small Batch Sizes",
		d: "Personalised mentorship in intimate cohorts — never lost in a crowd."
	},
	{
		i: Trophy,
		t: "Career Counselling",
		d: "One-on-one career guidance from admission through your first job."
	}
];
var testimonials$1 = [
	{
		name: "Aarav Mehta",
		role: "3D Animator at Sundeep Studios",
		quote: "The mentorship at CSL is unmatched. My mentors didn't just teach software — they taught me how to think like a studio artist."
	},
	{
		name: "Preeti Sharma",
		role: "Compositor at Light & Wonder",
		quote: "I walked in curious and walked out with a reel that got me interviews at four top studios. The placement team is exceptional."
	},
	{
		name: "Shivam Gupta",
		role: "Environment Artist at OpenCV",
		quote: "The live projects made all the difference. I was already shipping work before I graduated — that's what studios want to see."
	}
];
var blogPosts = [
	{
		slug: "career-in-3d-animation",
		title: "How to build a career in 3D animation in 2026",
		img: course_3d_default,
		date: "Jul 12, 2026",
		excerpt: "A step-by-step roadmap from foundations to your first studio job."
	},
	{
		slug: "vfx-industry-trends",
		title: "The state of VFX in India: trends & opportunities",
		img: course_vfx_default,
		date: "Jun 28, 2026",
		excerpt: "Where the industry is growing and what skills studios hire for."
	},
	{
		slug: "game-design-portfolio",
		title: "Building a game design portfolio that stands out",
		img: course_game_default,
		date: "Jun 05, 2026",
		excerpt: "What recruiters look for and how to structure your reel."
	}
];
var faqs$3 = [
	{
		q: "What is the admission process?",
		a: "Fill our enquiry form or book a free career counselling session. Our counsellors will guide you through eligibility, batch options and enrolment."
	},
	{
		q: "What are the fees and payment options?",
		a: "Fees vary by program. We offer easy EMI plans, education loans through our partner banks, and merit-based scholarships."
	},
	{
		q: "How long are the courses?",
		a: "Programs range from 4-month specialisations to 24-month career diplomas. Every course page lists exact duration and eligibility."
	},
	{
		q: "Do you offer placement assistance?",
		a: "Yes. Our placement cell offers 95% placement assistance with 1000+ hiring partners across studios, agencies and product companies."
	},
	{
		q: "Will I receive a certification?",
		a: "All graduates receive an industry-recognised CSL certification along with a portfolio review from our mentors."
	},
	{
		q: "Are internships part of the program?",
		a: "Structured internships are built into every long-format program. Short-term courses include a live-project capstone."
	}
];
function Home() {
	const { open: openEnquiry } = useEnquiry();
	const [query, setQuery] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All Courses");
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	const [slide, setSlide] = (0, import_react.useState)(0);
	const slides = [
		{
			img: hero_warrior_default,
			kicker: "Admissions Open · 2026",
			title: "Creativity",
			titleAccent: "Starts Here.",
			subtitle: "Industry-ready training in Animation, VFX, Gaming and Design."
		},
		{
			img: hero_cyber_default,
			kicker: "Career Ready · Studio Grade",
			title: "Build Worlds.",
			titleAccent: "Ship Stories.",
			subtitle: "Master studio pipelines with expert mentors."
		},
		{
			img: hero_dragon_default,
			kicker: "Live Projects · Real Studios",
			title: "Creative",
			titleAccent: "Power.",
			subtitle: "Build a portfolio with dedicated placement support."
		}
	];
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6e3);
		return () => clearInterval(t);
	}, [slides.length]);
	const filteredCourses = (0, import_react.useMemo)(() => courses.filter((c) => (cat === "All Courses" || c.category === cat) && (query.trim() === "" || c.title.toLowerCase().includes(query.toLowerCase()) || c.short.toLowerCase().includes(query.toLowerCase()))), [query, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative bg-black overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[560px] md:h-[640px]",
				children: [
					slides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0 pointer-events-none"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.img,
								alt: "",
								className: `absolute inset-0 h-full w-full object-cover ${i === slide ? "animate-ken-burns" : ""}`,
								...i === 0 ? { fetchPriority: "high" } : { loading: "lazy" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "container-x relative h-full flex items-center pb-20 md:pb-24",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-bold",
											children: s.kicker
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
											className: "font-display text-4xl md:text-6xl lg:text-7xl text-white mt-5 leading-[0.95]",
											children: [s.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[var(--gold)]",
												children: s.titleAccent
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 max-w-xl text-white/85 text-base md:text-lg leading-relaxed",
											children: s.subtitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 flex flex-wrap gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: openEnquiry,
												className: "btn-primary btn-primary-hover",
												children: ["Book Free Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "https://wa.me/919999380187?text=Hi%2C%20please%20send%20me%20the%20brochure",
												target: "_blank",
												rel: "noreferrer",
												className: "btn-accent btn-accent-hover",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download Brochure"]
											})]
										})
									]
								})
							})
						]
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroParticles, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Previous slide",
						onClick: () => setSlide((s) => (s - 1 + slides.length) % slides.length),
						className: "hidden md:grid absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center bg-black/50 hover:bg-[var(--gold)] hover:text-black text-white border border-white/20 transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Next slide",
						onClick: () => setSlide((s) => (s + 1) % slides.length),
						className: "hidden md:grid absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center bg-black/50 hover:bg-[var(--gold)] hover:text-black text-white border border-white/20 transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10",
						children: slides.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": `Slide ${i + 1}`,
							onClick: () => setSlide(i),
							className: `h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-[var(--gold)]" : "w-4 bg-white/40"}`
						}, i))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative z-10 bg-[#0A0A0A] border-y border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid grid-cols-2 md:grid-cols-4 gap-6 py-7",
				children: [
					{
						i: Users,
						t: "Industry Experts",
						d: "Learn from experienced professionals."
					},
					{
						i: Sparkles,
						t: "Advanced Training",
						d: "World-class infrastructure and tools."
					},
					{
						i: Briefcase,
						t: "Placement Support",
						d: "100% placement assistance for your career."
					},
					{
						i: Award,
						t: "Certification",
						d: "Industry-recognized certifications."
					}
				].map(({ i: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-11 w-11 shrink-0 grid place-items-center rounded-md border border-[var(--gold)]/40 text-[var(--gold)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-bold text-white uppercase tracking-wide",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-white/60 mt-0.5 leading-snug",
							children: d
						})]
					})]
				}, t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-black py-24 border-b border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-bold",
							children: "About CSL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl md:text-5xl mt-4 leading-tight text-white",
							children: ["Talent deserves ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--gold)]",
								children: "better training."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
						children: [
							{
								i: Target,
								t: "Our Mission",
								d: "Turn creative passion into a professional career, without compromise."
							},
							{
								i: Lightbulb,
								t: "Our Vision",
								d: "To be the most trusted name in creative career training across India."
							},
							{
								i: Briefcase,
								t: "Industry-Focused",
								d: "Curriculum co-designed with active studios and agencies."
							},
							{
								i: Sparkles,
								t: "Live-Project Learning",
								d: "Real client briefs and production pipelines from semester one."
							}
						].map(({ i: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 rounded-2xl bg-[#0E0E0E] border border-white/10 hover:border-[var(--gold)]/50 transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-11 w-11 rounded-xl bg-[var(--gold)]/15 grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-[var(--gold)]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg mt-4 text-[var(--gold)]",
									children: t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-white/70 leading-relaxed",
									children: d
								})
							]
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-3 sm:grid-cols-3",
						children: [
							"10 years shaping creative careers",
							"1000+ hiring partners across India",
							"5,000+ students trained & placed"
						].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 rounded-xl border border-white/10 bg-[#0E0E0E] p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-[var(--gold)] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-[var(--gold)]",
								children: k
							})]
						}, k))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "courses",
			className: "bg-muted py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold",
								children: "Programs"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl mt-4",
								children: "Industry-Ready Courses"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full md:w-80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Search courses…",
								className: "w-full rounded-full border border-input bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-2",
						children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setCat(c),
							className: `rounded-full border px-4 py-2 text-sm font-medium transition ${cat === c ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-primary"}`,
							children: c
						}, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
						children: [filteredCourses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/courses/$slug",
							params: { slug: c.slug },
							className: "group h-[600px] rounded-xl overflow-hidden bg-black border border-white/10 hover:border-[var(--gold)]/50 hover-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden",
								style: { height: "400px" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.img,
									alt: c.title,
									loading: "lazy",
									className: "h-full w-full object-contain object-center bg-[#111]"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-muted px-2.5 py-1 font-medium",
											children: c.category
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
												" ",
												c.duration
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg md:text-xl mt-3 font-semibold leading-snug",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2",
										children: c.short
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-4 inline-flex items-center gap-1.5 font-semibold text-sm text-primary group-hover:text-[var(--gold)] transition",
										children: ["Explore Course ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							})]
						}, `${c.slug}-${c.title}`)), filteredCourses.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "col-span-full text-center text-muted-foreground py-10",
							children: "No matching courses. Try a different search."
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x max-w-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold",
								children: "Student Work"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl md:text-4xl mt-3",
								children: "A portfolio gallery, built by our students."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Handpicked projects from recent cohorts."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3",
						children: studentWorks.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "group rounded-xl overflow-hidden bg-card border border-border hover-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/3] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: w.img,
									alt: `${w.title} by ${w.author}`,
									loading: "lazy",
									className: "h-full w-full object-cover group-hover:scale-105 transition duration-500"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-[var(--gold)] uppercase tracking-widest font-semibold",
										children: w.course
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm font-semibold mt-1 leading-tight",
										children: w.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: ["by ", w.author]
									})
								]
							})]
						}, w.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/students-world",
							className: "inline-flex items-center gap-1.5 font-semibold text-sm text-primary hover:text-[var(--gold)]",
							children: ["View Full Gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[#0B1B3A] text-white py-24 border-y border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-bold",
								children: "Placement & Hiring"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl mt-4 text-white",
								children: "Hired by the studios you dream of working for."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-white/75 leading-relaxed",
								children: "Every student gets a guaranteed internship, dedicated placement drives and interview preparation until they are hired."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4",
						children: placementStats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-white/15 bg-white/5 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl md:text-4xl text-[var(--gold)]",
								children: s.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-white/70 font-semibold",
								children: s.l
							})]
						}, s.l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerLogoGrid, { variant: "dark" })
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[var(--gold)] uppercase tracking-[0.12em] text-3xl md:text-4xl font-semibold",
					children: "Why Choose CSL"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: whyChoose.map(({ i: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 rounded-2xl bg-card border border-border hover-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-12 w-12 rounded-xl bg-[var(--gold)]/15 grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-[var(--gold)]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg md:text-xl mt-4 font-semibold",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: d
						})
					]
				}, t))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold",
						children: "Testimonials"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl md:text-5xl mt-4",
						children: "Success stories, in their own words."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: testimonials$1.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "rounded-2xl bg-card border border-border p-8 relative hover-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-8 w-8 text-[var(--gold)] mb-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "text-foreground/85 leading-relaxed",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-6 pt-6 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: t.role
								})]
							})
						]
					}, t.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" }, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4.9 · 800+ Google Reviews" })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold",
								children: "From the Blog"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl md:text-4xl mt-3",
								children: "Insights, guides & industry stories."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Career playbooks and industry trends from our mentors."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						className: "inline-flex items-center gap-1.5 font-semibold text-sm text-primary hover:text-[var(--gold)]",
						children: ["Read All Articles ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: blogPosts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: p.slug },
						className: "group rounded-xl overflow-hidden bg-card border border-border hover-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/10] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.title,
								loading: "lazy",
								className: "h-full w-full object-cover group-hover:scale-105 transition duration-500"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-[var(--gold)] font-semibold uppercase tracking-widest",
									children: p.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-sm font-semibold mt-1.5 leading-snug",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2",
									children: p.excerpt
								})
							]
						})]
					}, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.4fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold",
						children: "FAQs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl md:text-5xl mt-4",
						children: "Questions, answered."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Everything you need to know before you enrol — or reach out to our counsellors any time."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: openEnquiry,
						className: "mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:brightness-110 transition",
						children: "Talk to a counsellor"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: faqs$3.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card border border-border overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpenFaq(openFaq === i ? null : i),
							className: "w-full flex items-center justify-between text-left p-5 font-display text-base md:text-lg font-semibold",
							children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 transition ${openFaq === i ? "rotate-180" : ""}` })]
						}), openFaq === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed",
							children: f.a
						})]
					}, f.q))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "contact",
			className: "scroll-mt-24 bg-muted py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-12 lg:grid-cols-2 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold",
						children: "Contact / Enquiry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl md:text-5xl mt-4",
						children: "Ready to begin? Let's talk."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground leading-relaxed",
						children: "Send us an enquiry, drop by our campus, or book a free career counselling call. Our counsellors respond within one working day."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-[var(--gold)] mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: "CSL HQ"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Andheri West, Mumbai, Maharashtra 400053"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-[var(--gold)] mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: "+91 99993 80187"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Mon–Sat, 10am–7pm IST"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-[var(--gold)] mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: "hello@cslindia.example"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "We reply within one working day"
								})] })]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {})]
			})
		})
	] });
}
//#endregion
//#region src/routes/_authenticated/route.tsx
var Route$22 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
});
//#endregion
//#region src/assets/students.jpg
var students_default = "/assets/students-DrZCeQtT.jpg";
//#endregion
//#region src/routes/about.tsx
var Route$21 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About AnimaCraft — Our Story & Mission" },
		{
			name: "description",
			content: "Centre of Skill Learning has been shaping creative careers for 10 years through animation, VFX, design and technology education."
		},
		{
			property: "og:title",
			content: "About AnimaCraft"
		},
		{
			property: "og:description",
			content: "10 years shaping creative careers through industry-led education."
		}
	] }),
	component: About
});
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "About Us",
			title: "Shaping Creative Careers",
			subtitle: "For 10 years, Centre of Skill Learning has helped animators, VFX artists, designers, game creators and digital professionals build industry-ready careers."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20 grid gap-10 lg:grid-cols-2 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: students_default,
				alt: "AnimaCraft students at work",
				loading: "lazy",
				className: "rounded-2xl aspect-[4/3] object-cover w-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl",
					children: "Our Mission"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "To equip every learner with industry-aligned skills, real-world exposure, and a portfolio strong enough to open studio doors — anywhere in the world."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-3 gap-4",
					children: [
						["120+", "Centres"],
						["500K+", "Students Trained"],
						["25+", "Years of Excellence"]
					].map(([n, t]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-muted p-4 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl text-primary",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs mt-1 text-muted-foreground",
							children: t
						})]
					}, t))
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl",
					children: "What Sets Us Apart"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-3",
					children: [
						["Industry-Led Curriculum", "Programs co-created with active studios and creator collectives."],
						["Placement Ecosystem", "A national network of 1,000+ hiring partners across media & tech."],
						["Global Certification", "Government-recognised training partnered with skill councils."],
						["Career + Creator Tracks", "Study a role. Or study a business. We support both paths."],
						["Mentors, Not Just Faculty", "Learn from working professionals with active portfolios."],
						["Real Projects", "Live client briefs, festival submissions, and studio internships."]
					].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card border border-border p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: d
						})]
					}, t))
				})]
			})
		})
	] });
}
//#endregion
//#region src/routes/auth.tsx
var searchSchema = objectType({ redirect: stringType().optional() });
var Route$20 = createFileRoute("/auth")({
	validateSearch: searchSchema,
	head: () => ({ meta: [
		{ title: "Admin Sign In — Centre Of Skill Learning" },
		{
			name: "description",
			content: "Secure sign in for the Centre Of Skill Learning admin panel to manage enquiries, courses, blog posts and testimonials."
		},
		{
			property: "og:title",
			content: "Admin Sign In — Centre Of Skill Learning"
		},
		{
			property: "og:description",
			content: "Secure staff sign in for the CSL admin panel."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: AuthPage
});
var credentials = objectType({
	email: stringType().trim().email("Enter a valid email address").max(255),
	password: stringType().min(6, "Password must be at least 6 characters").max(72),
	fullName: stringType().trim().max(100).optional()
});
var field$3 = "w-full rounded-lg border border-white/20 bg-white/[0.04] px-3.5 py-2.5 text-sm font-light text-white placeholder:text-white/45 transition focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]";
var label$3 = "block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 mb-1.5";
function AuthPage() {
	const navigate = useNavigate();
	const { redirect } = useSearch({ from: "/auth" });
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [notice, setNotice] = (0, import_react.useState)(null);
	const dest = redirect && redirect.startsWith("/") && !redirect.startsWith("//") ? redirect : "/admin";
	async function onSubmit(e) {
		e.preventDefault();
		const parsed = credentials.safeParse({
			email,
			password,
			fullName
		});
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
			return;
		}
		setBusy(true);
		try {
			if (mode === "signin") {
				const { error } = await supabase.auth.signInWithPassword({
					email: parsed.data.email,
					password: parsed.data.password
				});
				if (error) throw error;
				navigate({ to: dest });
			} else {
				const { data, error } = await supabase.auth.signUp({
					email: parsed.data.email,
					password: parsed.data.password,
					options: {
						emailRedirectTo: window.location.origin + "/auth",
						data: { full_name: parsed.data.fullName ?? "" }
					}
				});
				if (error) throw error;
				if (!data.session) setNotice("Account created. Check your email and click the confirmation link to finish signing in.");
				else navigate({ to: dest });
			}
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Something went wrong");
		} finally {
			setBusy(false);
		}
	}
	async function onGoogle() {
		setBusy(true);
		try {
			const { error } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: { redirectTo: window.location.origin + dest }
			});
			if (error) throw error;
		} catch {
			toast.error("Google sign-in failed. Please try again.");
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-md rounded-2xl bg-[#0E0E0E] border border-white/10 p-7 md:p-9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl md:text-3xl text-white",
					children: mode === "signin" ? "Admin Sign In" : "Create Admin Account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm font-light text-white/60",
					children: "Manage enquiries, blog posts and testimonials for Centre Of Skill Learning."
				}),
				notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 rounded-lg border border-[var(--gold)]/40 bg-[var(--gold)]/10 p-3 text-sm text-[var(--gold)]",
					children: notice
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "mt-6 grid gap-5",
					children: [
						mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: label$3,
							htmlFor: "au-name",
							children: "Full Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "au-name",
							value: fullName,
							onChange: (e) => setFullName(e.target.value),
							placeholder: "Your name",
							className: field$3
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: label$3,
							htmlFor: "au-email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "au-email",
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "you@example.com",
							className: field$3
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: label$3,
							htmlFor: "au-pass",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "au-pass",
							type: "password",
							required: true,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							placeholder: "••••••••",
							className: field$3
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: busy,
							className: "rounded-lg bg-[var(--gold)] text-black px-4 py-3 text-sm font-bold uppercase tracking-wide transition hover:brightness-110 disabled:opacity-60",
							children: busy ? "Please wait…" : mode === "signin" ? "Sign In" : "Create Account"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-5 flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-white/10" }),
						" or ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-white/10" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onGoogle,
					disabled: busy,
					className: "w-full rounded-lg border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:opacity-60",
					children: "Continue with Google"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setMode(mode === "signin" ? "signup" : "signin");
						setNotice(null);
					},
					className: "mt-6 w-full text-center text-xs text-white/60 hover:text-[var(--gold)]",
					children: mode === "signin" ? "Need an account? Create one" : "Already have an account? Sign in"
				})
			]
		})
	});
}
//#endregion
//#region src/lib/blog-data.ts
var posts = [
	{
		slug: "what-is-avgc-career",
		title: "AVGC careers: animation, VFX, gaming and comics explained",
		category: "AVGC",
		img: course_3d_default,
		date: "Aug 18, 2026",
		excerpt: "Understand the AVGC industry and choose the creative path that fits your strengths.",
		sections: [
			{
				h: "What AVGC means",
				p: "AVGC brings together animation, visual effects, gaming and comics. These connected industries share artists, storytelling skills and production pipelines."
			},
			{
				h: "Choose your starting point",
				p: "Animation suits character and movement-focused artists, VFX fits visual problem-solvers, gaming rewards interactive thinkers, and comics build strong visual storytelling."
			},
			{
				h: "Build a practical portfolio",
				p: "Start with two or three finished projects that show your process, your role and the tools you used. A focused portfolio makes your first conversation with a studio much stronger."
			}
		]
	},
	{
		slug: "vfx-career-roadmap",
		title: "VFX career roadmap: from roto to compositing",
		category: "VFX",
		img: course_vfx_default,
		date: "Aug 10, 2026",
		excerpt: "A clear beginner roadmap for learning the VFX pipeline and preparing a studio-ready reel.",
		sections: [
			{
				h: "Learn the pipeline first",
				p: "Understand how plates move through prep, tracking, roto, paint, compositing and review before choosing a specialisation."
			},
			{
				h: "Practise with real shots",
				p: "Rebuild short shots with clean organisation, versioning and breakdowns. Recruiters value repeatable process as much as a polished final frame."
			},
			{
				h: "Keep your reel focused",
				p: "Lead with your strongest work and show only the skills you want to be hired for. Add breakdowns that make your contribution easy to verify."
			}
		]
	},
	{
		slug: "video-editing-career-guide",
		title: "Video editing in 2026: skills that get you hired",
		category: "Video Editing",
		img: course_content_default,
		date: "Aug 02, 2026",
		excerpt: "Editing rhythm, sound, colour and storytelling are the foundation of a strong video career.",
		sections: [
			{
				h: "Story comes before software",
				p: "A great edit gives every shot a reason to exist. Learn pacing, continuity and emotional structure before collecting plugins."
			},
			{
				h: "Sound changes everything",
				p: "Clean dialogue, purposeful ambience and considered music often make a bigger difference than visual effects."
			},
			{
				h: "Edit for the platform",
				p: "Practise long-form, short-form and vertical formats. Showing that you understand audience and platform constraints makes your reel more useful to clients."
			}
		]
	},
	{
		slug: "ui-ux-design-portfolio",
		title: "How to build a UI/UX portfolio without a client project",
		category: "UI/UX",
		img: course_short_default,
		date: "Jul 26, 2026",
		excerpt: "Use thoughtful case studies to show your research, decisions and design system thinking.",
		sections: [
			{
				h: "Start with a real problem",
				p: "Choose a familiar workflow with visible friction. A narrow problem gives your case study a clearer point of view."
			},
			{
				h: "Show the decisions",
				p: "Include research notes, user flows, wireframes and iterations so readers can understand how your solution developed."
			},
			{
				h: "Finish with a usable prototype",
				p: "A clickable prototype and a short usability test turn a visual concept into evidence of product thinking."
			}
		]
	},
	{
		slug: "graphic-design-foundations",
		title: "Graphic design foundations every beginner should learn",
		category: "Graphic Design",
		img: course_game_default,
		date: "Jul 18, 2026",
		excerpt: "Typography, layout, colour and consistency are the core skills behind professional design.",
		sections: [
			{
				h: "Typography creates hierarchy",
				p: "Use type size, weight and spacing to guide attention. Good typography makes information easier to understand before decoration enters the picture."
			},
			{
				h: "Build a repeatable system",
				p: "Define a small colour palette, spacing rhythm and image treatment so every piece feels like part of the same brand."
			},
			{
				h: "Practise with constraints",
				p: "Design posters, social sets and identity pieces with a clear audience and brief. Constraints make your judgement visible."
			}
		]
	},
	{
		slug: "career-in-3d-animation",
		title: "How to build a career in 3D animation in 2026",
		img: course_3d_default,
		date: "Jul 12, 2026",
		excerpt: "A step-by-step roadmap from foundations to your first studio job.",
		sections: [
			{
				h: "Start with the fundamentals",
				p: "Before touching software, learn the twelve principles of animation, basic anatomy and staging. Studios hire for craft first — software is taught in weeks, timing and weight take years."
			},
			{
				h: "Pick one pipeline and go deep",
				p: "Choose between character animation, rigging, lighting or layout. A focused reel with three strong shots beats a generalist reel with twelve average ones."
			},
			{
				h: "Build a reel studios actually watch",
				p: "Keep it under 90 seconds, lead with your strongest shot, and include a breakdown of your contribution on every clip."
			},
			{
				h: "Get inside the industry early",
				p: "Internships, festival submissions and freelance shots build the credits and references that turn an application into an interview."
			}
		]
	},
	{
		slug: "vfx-industry-trends",
		title: "The state of VFX in India: trends & opportunities",
		img: course_vfx_default,
		date: "Jun 28, 2026",
		excerpt: "Where the industry is growing and what skills studios hire for.",
		sections: [
			{
				h: "Streaming keeps driving volume",
				p: "OTT originals now account for a large share of VFX shot counts, creating steady demand for compositors, roto and paint artists across the country."
			},
			{
				h: "Real-time is no longer niche",
				p: "Virtual production and Unreal-based previs are moving from experiments to standard practice on mid-budget shows."
			},
			{
				h: "Skills studios ask for",
				p: "Nuke compositing, Houdini FX, matchmove accuracy and clean scene-management habits remain the most requested skills in hiring briefs."
			}
		]
	},
	{
		slug: "game-design-portfolio",
		title: "Building a game design portfolio that stands out",
		img: course_game_default,
		date: "Jun 05, 2026",
		excerpt: "What recruiters look for and how to structure your reel.",
		sections: [
			{
				h: "Ship something playable",
				p: "One finished small game says more than five unfinished prototypes. Recruiters want evidence you can close scope."
			},
			{
				h: "Show your thinking",
				p: "Document design decisions, iterations and playtest findings. Process pages are often read before the build itself."
			},
			{
				h: "Match the studio",
				p: "Tailor the first project in your portfolio to the genre and platform of the studio you're applying to."
			}
		]
	},
	{
		slug: "creator-economy-india",
		title: "Creator economy 101: making a living online",
		img: course_content_default,
		date: "May 20, 2026",
		excerpt: "From your first thousand followers to monetisation and brand deals.",
		sections: [
			{
				h: "Pick a format you can repeat",
				p: "Sustainable channels are built on a format, not on individual viral hits. Choose something you can produce weekly for a year."
			},
			{
				h: "Own the craft",
				p: "Editing rhythm, sound design and thumbnails carry more weight than gear. Most successful creators started on a phone."
			},
			{
				h: "Diversify income early",
				p: "Brand deals, digital products, memberships and services all outperform ad revenue for creators under 100K subscribers."
			}
		]
	}
];
//#endregion
//#region src/routes/blog.tsx
var Route$19 = createFileRoute("/blog")({
	head: () => ({ meta: [
		{ title: "Blog — Career Guides & Industry Insights | CSL" },
		{
			name: "description",
			content: "Career guides, tutorials and industry insights on animation, VFX, game design and the creator economy from Center of Skill Learning."
		},
		{
			property: "og:title",
			content: "Center of Skill Learning Blog"
		},
		{
			property: "og:description",
			content: "Career guides, tutorials and industry insights."
		}
	] }),
	component: Blog
});
function Blog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Blog",
		title: "Insights, guides & industry stories",
		subtitle: "From career playbooks to industry trend reports — updates from the CSL team and mentors."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x py-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
		children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/blog/$slug",
			params: { slug: p.slug },
			className: "group rounded-xl overflow-hidden bg-card border border-border hover-lift",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[16/10] overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.img,
					alt: p.title,
					loading: "lazy",
					className: "h-full w-full object-cover group-hover:scale-105 transition duration-500"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[10px] text-[var(--gold)] font-semibold uppercase tracking-widest",
						children: [
							p.category ?? "Industry Insights",
							" · ",
							p.date
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-base font-semibold mt-1.5 leading-snug",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2",
						children: p.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary",
						children: ["Read Article ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
					})
				]
			})]
		}, p.slug))
	})] });
}
//#endregion
//#region src/routes/centres.tsx
var Route$18 = createFileRoute("/centres")({
	head: () => ({ meta: [
		{ title: "Locate a Centre — AnimaCraft" },
		{
			name: "description",
			content: "Find an AnimaCraft centre near you across major cities in India."
		},
		{
			property: "og:title",
			content: "Find an AnimaCraft centre"
		},
		{
			property: "og:description",
			content: "120+ centres across India."
		}
	] }),
	component: Centres
});
var centres = [
	{
		city: "Mumbai",
		areas: [
			"Andheri",
			"Borivali",
			"Thane",
			"Dadar"
		],
		phone: "+91 90000 10001"
	},
	{
		city: "Delhi NCR",
		areas: [
			"Connaught Place",
			"Rohini",
			"Noida",
			"Gurgaon"
		],
		phone: "+91 90000 10002"
	},
	{
		city: "Bengaluru",
		areas: [
			"Koramangala",
			"Jayanagar",
			"Marathahalli"
		],
		phone: "+91 90000 10003"
	},
	{
		city: "Hyderabad",
		areas: ["Ameerpet", "Kukatpally"],
		phone: "+91 90000 10004"
	},
	{
		city: "Chennai",
		areas: ["T. Nagar", "Adyar"],
		phone: "+91 90000 10005"
	},
	{
		city: "Kolkata",
		areas: ["Park Street", "Salt Lake"],
		phone: "+91 90000 10006"
	},
	{
		city: "Pune",
		areas: ["FC Road", "Kothrud"],
		phone: "+91 90000 10007"
	},
	{
		city: "Ahmedabad",
		areas: ["CG Road", "Bopal"],
		phone: "+91 90000 10008"
	},
	{
		city: "Kochi",
		areas: ["MG Road"],
		phone: "+91 90000 10009"
	}
];
function Centres() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Locate a Centre",
		title: "120+ centres across India.",
		subtitle: "Find a centre near you and drop in for a campus tour."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: centres.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-card border border-border p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-display text-2xl flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-primary" }),
						" ",
						c.city
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-1 text-sm text-muted-foreground",
					children: c.areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", a] }, a))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${c.phone.replace(/\s/g, "")}`,
					className: "mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), c.phone]
				})
			]
		}, c.city))
	})] });
}
//#endregion
//#region src/routes/contact.tsx
var Route$17 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact AnimaCraft — Talk to a Counsellor" },
		{
			name: "description",
			content: "Get in touch with AnimaCraft for course details, admissions, or a campus tour."
		},
		{
			property: "og:title",
			content: "Contact AnimaCraft"
		},
		{
			property: "og:description",
			content: "Reach us for admissions, course details, or a campus tour."
		}
	] }),
	component: Contact
});
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Contact",
		title: "Talk to a Counsellor",
		subtitle: "We'll help you pick the right program and answer everything about fees, scholarships, and placements."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-16 grid gap-10 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl",
					children: "Head Office"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 text-primary" }), " AnimaCraft HQ, 4th Floor, Creative Tower, Mumbai 400001"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }), " +91 99993 80187"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }), " hello@animacraft.example"]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "Admissions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Monday–Saturday, 10:00 AM – 7:00 PM"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Prefer WhatsApp? Message us at +91 99993 80187."
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {})]
	})] });
}
//#endregion
//#region src/routes/events.tsx
var Route$16 = createFileRoute("/events")({
	head: () => ({ meta: [
		{ title: "Events — AnimaCraft" },
		{
			name: "description",
			content: "Workshops, competitions, and industry masterclasses at AnimaCraft — where students create, compete, and level up."
		},
		{
			property: "og:title",
			content: "Events — AnimaCraft"
		},
		{
			property: "og:description",
			content: "Workshops, competitions, and industry masterclasses at AnimaCraft."
		}
	] }),
	component: Events
});
var events = [
	{
		name: "Showreel Showdown",
		when: "March 2026",
		desc: "A multi-category student competition to hone presentation and portfolio skills."
	},
	{
		name: "Animation Awards",
		when: "May 2026",
		desc: "India's marquee student animation awards with expert critique."
	},
	{
		name: "Creator Camp",
		when: "June 2026",
		desc: "A 4-day immersive with workshops, seminars, and studio-style collaboration in Goa."
	},
	{
		name: "Industry Connect",
		when: "August 2026",
		desc: "Zonal events with alumni programs and industry sessions."
	},
	{
		name: "100 Hour Film",
		when: "September 2026",
		desc: "A high-pressure creative sprint to make a short film in 100 hours."
	},
	{
		name: "Lens Fest",
		when: "November 2026",
		desc: "A photography & filmmaking contest with expert feedback rounds."
	},
	{
		name: "Masterclass Live",
		when: "Monthly",
		desc: "Live webinars by industry professionals covering trends, tools, and tips."
	},
	{
		name: "Portfolio Day",
		when: "Quarterly",
		desc: "Recruiters meet graduating students for direct portfolio reviews."
	}
];
function Events() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Events",
		title: "Create. Compete. Level Up.",
		subtitle: "Every AnimaCraft event is a chance to challenge yourself and build industry-ready confidence."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x py-16 grid gap-6 md:grid-cols-2",
		children: events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-2xl bg-card border border-border p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl",
					children: e.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-primary font-semibold uppercase tracking-widest",
					children: e.when
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: e.desc
			})]
		}, e.name))
	})] });
}
//#endregion
//#region src/routes/faq.tsx
var Route$15 = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "FAQ — Admissions, Fees & Placements | Center of Skill Learning" },
		{
			name: "description",
			content: "Answers about CSL admissions, course fees and EMI options, program duration, certification, internships and placement assistance."
		},
		{
			property: "og:title",
			content: "CSL Frequently Asked Questions"
		},
		{
			property: "og:description",
			content: "Admissions, fees, duration, certification and placement questions answered."
		}
	] }),
	component: Faq
});
var faqs$2 = [
	{
		q: "What is the admission process?",
		a: "Fill our enquiry form or book a free career counselling session. Our counsellors will guide you through eligibility, batch options and enrolment."
	},
	{
		q: "What are the fees and payment options?",
		a: "Fees vary by program. We offer easy EMI plans, education loans through our partner banks, and merit-based scholarships."
	},
	{
		q: "How long are the courses?",
		a: "Programs range from 4-month specialisations to 24-month career diplomas. Every course page lists exact duration and eligibility."
	},
	{
		q: "Do you offer placement assistance?",
		a: "Yes. Our placement cell offers 95% placement assistance with 1000+ hiring partners across studios, agencies and product companies."
	},
	{
		q: "Will I receive a certification?",
		a: "All graduates receive an industry-recognised CSL certification along with a portfolio review from our mentors."
	},
	{
		q: "Are internships part of the program?",
		a: "Structured internships are built into every long-format program. Short-term courses include a live-project capstone."
	},
	{
		q: "Do I need prior experience or a drawing background?",
		a: "No. Our foundation modules start from first principles — most students join with no professional experience."
	},
	{
		q: "Are there weekend or evening batches?",
		a: "Yes. We run weekday, evening and weekend batches so working professionals and students can both attend."
	}
];
function Faq() {
	const [openIdx, setOpenIdx] = (0, import_react.useState)(0);
	const { open } = useEnquiry();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "FAQs",
		title: "Questions, answered.",
		subtitle: "Everything you need to know before you enrol — or reach out to our counsellors any time."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-20 grid gap-12 lg:grid-cols-[1fr_1.4fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Still unsure?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "Our counsellors help you pick the right program, batch and payment plan — free of cost."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: open,
				className: "btn-primary btn-primary-hover mt-6",
				children: "Talk to a counsellor"
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: faqs$2.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpenIdx(openIdx === i ? null : i),
					className: "w-full flex items-center justify-between text-left p-5 font-display text-base md:text-lg font-semibold",
					children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 transition ${openIdx === i ? "rotate-180" : ""}` })]
				}), openIdx === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed",
					children: f.a
				})]
			}, f.q))
		})]
	})] });
}
//#endregion
//#region src/routes/franchise.tsx
var Route$14 = createFileRoute("/franchise")({
	head: () => ({ meta: [
		{ title: "Franchise Opportunity — Centre of Skill Learning" },
		{
			name: "description",
			content: "Open a Centre of Skill Learning franchise. Overview, benefits, eligibility, investment, terms & policy, support and franchise enquiry form."
		},
		{
			property: "og:title",
			content: "CSL Franchise Opportunity"
		},
		{
			property: "og:description",
			content: "Partner with Centre of Skill Learning — proven curriculum, brand, marketing and academic support."
		}
	] }),
	component: FranchisePage
});
var WHATSAPP = "919999380187";
var benefits = [
	{
		i: TrendingUp,
		t: "Proven Business Model",
		d: "A training model refined across creative-career programs with strong repeat demand."
	},
	{
		i: GraduationCap,
		t: "Ready Curriculum",
		d: "Complete course library, lesson plans, assessments and certification framework."
	},
	{
		i: Megaphone,
		t: "Marketing Support",
		d: "Campaign creatives, digital lead generation, local activation kits and brand collateral."
	},
	{
		i: Users,
		t: "Faculty Training",
		d: "Trainer onboarding, teaching certification and continuous academic upgrades."
	},
	{
		i: ShieldCheck,
		t: "Territory Protection",
		d: "Exclusive operating territory so your centre grows without internal competition."
	},
	{
		i: Building2,
		t: "Setup Guidance",
		d: "Centre layout, lab specification, hardware/software list and launch playbook."
	}
];
var eligibility = [
	"Passion for education and student outcomes",
	"Minimum 1,500–2,500 sq. ft. commercial space in a prime locality",
	"Ability to invest in infrastructure, labs and working capital",
	"Local market understanding and willingness to lead operations full-time",
	"Clean business/legal record and valid registrations (GST, trade licence)",
	"Commitment to CSL academic standards and brand guidelines"
];
var support$1 = [
	"Academic delivery support and curriculum updates every semester",
	"Centralised admissions helpdesk and CRM access",
	"Placement cell access for your students",
	"Standard operating procedures, audits and quality reviews",
	"Regional manager assigned to your centre",
	"Annual franchise partner meet and refresher training"
];
var terms = [
	"The franchise agreement is territory-specific and non-transferable without written consent.",
	"Franchisee must operate strictly under CSL brand guidelines, fee structures and academic standards.",
	"All course content, trademarks and teaching material remain the intellectual property of CSL.",
	"Royalty and reporting are due on the agreed monthly cycle.",
	"Faculty must be CSL-certified before delivering any program.",
	"Either party may terminate for material breach as detailed in the signed agreement."
];
var policy = [
	"One franchise per protected territory; expansion requires a fresh agreement.",
	"Fee discounts and scholarships follow the central policy — no independent pricing.",
	"Student data is handled per our privacy policy and applicable data-protection law.",
	"Certificates are issued centrally only for students enrolled through official systems.",
	"Marketing creatives must use approved brand assets; local ads need prior approval."
];
var faqs$1 = [
	{
		q: "How long does it take to launch a centre?",
		a: "Typically 60–90 days from agreement signing — covering space finalisation, lab setup, faculty hiring and pre-launch marketing."
	},
	{
		q: "Do I need an education background?",
		a: "No. Many partners come from business backgrounds. Academic delivery is handled by CSL-certified faculty with our support."
	},
	{
		q: "What ongoing costs should I plan for?",
		a: "Rent, faculty salaries, utilities, local marketing and the agreed royalty. We share a detailed projection during discussions."
	},
	{
		q: "Is exclusivity guaranteed?",
		a: "Yes — each partner gets a protected territory defined in the agreement."
	},
	{
		q: "What is the next step?",
		a: "Submit the enquiry form below. Our franchise team will connect on WhatsApp with the detailed information kit."
	}
];
var field$2 = "w-full rounded-lg border border-white/20 bg-white/[0.04] px-3.5 py-2.5 text-sm font-light text-white placeholder:text-white/45 transition focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]";
var label$2 = "block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 mb-1.5";
function FranchiseForm() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		area: ""
	});
	const set = (k) => (e) => setForm((f) => ({
		...f,
		[k]: e.target.value
	}));
	const submit = (e) => {
		e.preventDefault();
		const msg = `Hello Centre of Skill Learning,

I am interested in your franchise.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Area: ${form.area}

Please contact me with more details.`;
		window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		id: "franchise-enquiry",
		className: "rounded-2xl bg-[#0E0E0E] border border-white/10 p-6 md:p-8 grid gap-5 scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl md:text-3xl text-white",
				children: "Franchise Enquiry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label$2,
				htmlFor: "f-name",
				children: "Full Name"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "f-name",
				required: true,
				value: form.name,
				onChange: set("name"),
				placeholder: "Your full name",
				className: field$2
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label$2,
				htmlFor: "f-email",
				children: "Email Address"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "f-email",
				required: true,
				type: "email",
				value: form.email,
				onChange: set("email"),
				placeholder: "you@example.com",
				className: field$2
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label$2,
				htmlFor: "f-phone",
				children: "Phone Number"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "f-phone",
				required: true,
				type: "tel",
				value: form.phone,
				onChange: set("phone"),
				placeholder: "10-digit mobile number",
				className: field$2
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label$2,
				htmlFor: "f-area",
				children: "Area / City Name"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "f-area",
				required: true,
				value: form.area,
				onChange: set("area"),
				placeholder: "City or preferred territory",
				className: field$2
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--gold)] text-black px-4 py-3 text-sm font-bold uppercase tracking-wide transition hover:brightness-110",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Send on WhatsApp"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-light text-white/50",
				children: "Submitting opens WhatsApp with your details pre-filled."
			})
		]
	});
}
function List({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-5 grid gap-3",
		children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-start gap-2.5 text-sm font-light text-white/80",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 mt-0.5 shrink-0 text-[var(--gold)]" }), i]
		}, i))
	});
}
function FranchisePage() {
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Franchise Opportunity",
		title: "Build a creative-careers institute in your city.",
		subtitle: "Partner with Centre of Skill Learning and launch a future-ready training centre backed by our curriculum, brand and academic systems."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-16 grid gap-14 lg:grid-cols-[1fr_400px] items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl text-white",
						children: "Franchise Overview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm md:text-base font-light leading-relaxed text-white/80 max-w-2xl",
						children: "India's creative and digital economy needs trained talent in animation, VFX, design, video and AI. As a CSL franchise partner you operate a fully supported training centre — we provide the academic engine, brand and playbook; you build the local business."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-3",
						children: [{
							n: "9+",
							l: "Career Programs"
						}, {
							n: "1000+",
							l: "Hiring Partners"
						}].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-white/10 bg-[#0E0E0E] p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl text-[var(--gold)]",
								children: s.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs uppercase tracking-wide font-semibold text-white/60",
								children: s.l
							})]
						}, s.l))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl text-white",
					children: "Benefits of Partnering With Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-5 sm:grid-cols-2",
					children: benefits.map(({ i: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/10 bg-[#0E0E0E] p-5 hover:border-[var(--gold)]/50 transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 rounded-xl bg-[var(--gold)]/15 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-[var(--gold)]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg mt-4 text-white",
								children: t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm font-light text-white/70 leading-relaxed",
								children: d
							})
						]
					}, t))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl text-white",
					children: "Eligibility Criteria"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: eligibility })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl text-white",
					children: "Support Provided"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: support$1 })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl md:text-3xl text-white",
						children: "Terms & Conditions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: terms })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl md:text-3xl text-white",
						children: "Franchise Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: policy })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl text-white",
					children: "Frequently Asked Questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-3",
					children: faqs$1.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/10 bg-[#0E0E0E] overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpenFaq(openFaq === i ? null : i),
							className: "w-full flex items-center justify-between gap-4 p-5 text-left font-display text-base md:text-lg text-white",
							children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 text-[var(--gold)] transition ${openFaq === i ? "rotate-180" : ""}` })]
						}), openFaq === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-5 pb-5 text-sm font-light text-white/75 leading-relaxed",
							children: f.a
						})]
					}, f.q))
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "lg:sticky lg:top-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FranchiseForm, {})
		})]
	})] });
}
//#endregion
//#region src/routes/guide.tsx
var Route$13 = createFileRoute("/guide")({
	head: () => ({ meta: [
		{ title: "Deployment Guide — Publish CSL Website on Hostinger" },
		{
			name: "description",
			content: "Step-by-step guide to build the Centre Of Skill Learning website and publish it live on Hostinger: build output, file upload, domain setup, SSL and updates."
		},
		{
			property: "og:title",
			content: "Hostinger Deployment Guide — Centre Of Skill Learning"
		},
		{
			property: "og:description",
			content: "Build, upload, connect your domain and enable SSL — publish the CSL website on Hostinger."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: GuidePage
});
var steps = [
	{
		i: Terminal,
		h: "1. Build the production site",
		p: "On your computer, install dependencies and create the production build. The finished, uploadable site lands in the build output folder.",
		code: "npm install\nnpm run build"
	},
	{
		i: FolderTree,
		h: "2. Locate the build output",
		p: "After the build finishes, open the generated output folder. Everything inside it (HTML, JS, CSS and images) is what goes to Hostinger — not the source folders.",
		code: "dist/\n├── index.html\n├── assets/\n└── favicon.ico"
	},
	{
		i: Upload,
		h: "3. Upload to Hostinger",
		p: "In hPanel go to Files → File Manager, open public_html and delete the default files. Upload the contents of the build output folder (not the folder itself) into public_html. You can also zip it, upload the zip and use Extract.",
		code: "public_html/  ←  contents of dist/"
	},
	{
		i: Globe,
		h: "4. Point your domain",
		p: "If the domain is registered with Hostinger it already resolves to your hosting. For an external domain, open hPanel → Domains, copy the Hostinger nameservers and paste them at your registrar. DNS changes take up to 24 hours."
	},
	{
		i: ShieldCheck,
		h: "5. Enable free SSL and force HTTPS",
		p: "In hPanel go to Security → SSL, install the free Let's Encrypt certificate for your domain, then turn on Force HTTPS so every visitor gets the secure version."
	},
	{
		i: RefreshCw,
		h: "6. Publishing updates later",
		p: "Any time content changes, run the build again and re-upload the output to public_html, replacing the old files. Clear the browser cache (Ctrl+Shift+R) to see changes immediately.",
		code: "npm run build   →   re-upload to public_html"
	}
];
function GuidePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Deployment",
		title: "Publish this website on Hostinger",
		subtitle: "A six-step checklist to take the Centre Of Skill Learning website from your machine to your live domain."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: steps.map(({ i: Icon, h, p, code }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl bg-card border border-border p-7 hover-lift",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-12 w-12 rounded-xl bg-[var(--gold)]/15 grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-[var(--gold)]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl mt-4 font-semibold",
						children: h
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground leading-relaxed",
						children: p
					}),
					code && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-4 rounded-xl border border-border bg-[#0E0E0E] p-4 text-xs text-white/80 overflow-x-auto whitespace-pre",
						children: code
					})
				]
			}, h))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 rounded-2xl border border-[var(--gold)]/40 bg-[var(--gold)]/[0.07] p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold text-[var(--gold)]",
				children: "Before you go live — quick checklist"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-2.5 sm:grid-cols-2 text-sm text-muted-foreground",
				children: [
					"Phone number and WhatsApp link are correct on every page",
					"Enquiry form submissions reach the right inbox or WhatsApp",
					"Course names, durations and syllabus are final",
					"Centre address and map details are up to date",
					"Social media links in the footer are connected",
					"Favicon and page titles show your brand name"
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[var(--gold)]",
						children: "•"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c })]
				}, c))
			})]
		})]
	})] });
}
//#endregion
//#region src/routes/partner.tsx
var Route$12 = createFileRoute("/partner")({
	head: () => ({ meta: [
		{ title: "Placements & Hiring Partners — Center of Skill Learning" },
		{
			name: "description",
			content: "100% internship guarantee, 95% placement record, ₹12 LPA highest package and 1000+ hiring partners across animation, VFX, design and tech."
		},
		{
			property: "og:title",
			content: "Placements & Hiring Partners — CSL"
		},
		{
			property: "og:description",
			content: "100% internships, 95% placement record, ₹12 LPA highest package, 1000+ hiring partners."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: Placements
});
var support = [
	{
		i: Target,
		t: "Guaranteed Internship",
		d: "Every enrolled student is placed into a live studio or agency internship."
	},
	{
		i: Briefcase,
		t: "Placement Drives",
		d: "Year-round on-campus and virtual hiring drives with recruiting companies."
	},
	{
		i: GraduationCap,
		t: "Portfolio & Interview Prep",
		d: "Showreel reviews, mock interviews and salary negotiation coaching."
	},
	{
		i: Trophy,
		t: "Lifetime Career Support",
		d: "Alumni keep access to the placement cell for future job switches."
	}
];
var process = [
	"Skill assessment and career mapping in your first month",
	"Portfolio and showreel built on live industry briefs",
	"Internship placement with a partner studio",
	"Interview training, resume and profile polishing",
	"Company interviews through our hiring network",
	"Offer support and post-joining mentorship"
];
function Placements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Placements & Hiring",
			title: "Careers built on real hiring outcomes.",
			subtitle: "Internships, placement drives and interview training until you are hired."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[#0B1B3A] text-white py-16 border-y border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid gap-4 grid-cols-2 lg:grid-cols-4",
				children: placementStats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-white/15 bg-white/5 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl md:text-4xl text-[var(--gold)]",
						children: s.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-white/70 font-semibold",
						children: s.l
					})]
				}, s.l))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-bold",
					children: "Our Hiring Network"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl md:text-5xl mt-4 text-white leading-tight",
					children: ["1000+ companies ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[var(--gold)]",
						children: "hire from us."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerLogoGrid, { variant: "dark" })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: support.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-[#0E0E0E] border border-white/10 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.i, { className: "h-7 w-7 text-[var(--gold)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl mt-4 text-white",
						children: s.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-light text-white/70 leading-relaxed",
						children: s.d
					})
				]
			}, s.t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x pb-24 grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl md:text-4xl text-white",
				children: "How our placement process works"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: process.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 shrink-0 text-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white/80 font-light",
						children: p
					})]
				}, p))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, { compact: true })]
		})
	] });
}
//#endregion
//#region src/routes/privacy.tsx
var Route$11 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy — Centre Of Skill Learning" },
		{
			name: "description",
			content: "How Centre Of Skill Learning collects, uses, stores and protects the information you share through enquiries and our website."
		},
		{
			property: "og:title",
			content: "Privacy Policy — Centre Of Skill Learning"
		},
		{
			property: "og:description",
			content: "How Centre Of Skill Learning handles and protects your information."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: Privacy
});
var sections = [
	{
		h: "Information We Collect",
		p: "We only collect what we need to respond to you and guide your admission.",
		points: [
			"Contact details you submit: name, phone number, email address, state and city",
			"Course preference and any message you share in an enquiry or counselling request",
			"Basic technical data such as browser type, device and pages visited"
		]
	},
	{
		h: "How We Use Your Information",
		p: "Your details are used for admissions guidance and service improvement only.",
		points: [
			"To respond to enquiries and schedule free career counselling",
			"To share program details, fees, batch timings and scholarship options",
			"To send admission or batch updates you have asked for",
			"To improve our website, courses and student support"
		]
	},
	{
		h: "Information Sharing",
		p: "We do not sell or rent your personal information to anyone.",
		points: [
			"Shared only with our own counselling and placement teams",
			"Shared with hiring partners only with your consent during placement",
			"Disclosed if required by law or a valid legal request"
		]
	},
	{
		h: "Data Security & Retention",
		p: "We apply reasonable technical and organisational safeguards.",
		points: [
			"Access to enquiry data is restricted to authorised staff",
			"Data is retained only as long as needed for admissions and records",
			"No method of transmission over the internet is fully secure"
		]
	},
	{
		h: "Cookies & Analytics",
		p: "Cookies help the site work and help us understand usage.",
		points: [
			"Essential cookies keep the site functional",
			"Analytics cookies measure traffic in aggregate",
			"You can disable cookies in your browser settings"
		]
	},
	{
		h: "Your Rights",
		p: "You stay in control of the information you share with us.",
		points: [
			"Request access to the information we hold about you",
			"Request correction or deletion of your details",
			"Opt out of marketing messages at any time"
		]
	}
];
function Privacy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Legal",
		title: "Privacy Policy",
		subtitle: "Last updated: August 2026"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-16 max-w-3xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground leading-relaxed",
			children: "Centre Of Skill Learning respects your privacy. This policy explains what information we collect through our website and enquiry forms, how we use it, and the choices you have."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 space-y-10",
			children: [sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl md:text-3xl",
					children: s.h
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: s.p
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: s.points.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[var(--gold)]",
							children: pt
						})]
					}, pt))
				})
			] }, s.h)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl md:text-3xl",
				children: "Contact Us"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted-foreground",
				children: [
					"For any privacy question or request, write to us or call our admissions desk at",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[var(--gold)]",
						children: " +91 99993 80187"
					}),
					"."
				]
			})] })]
		})]
	})] });
}
//#endregion
//#region src/routes/students-world.tsx
var Route$10 = createFileRoute("/students-world")({
	head: () => ({ meta: [
		{ title: "Students' World — AnimaCraft" },
		{
			name: "description",
			content: "Explore work from AnimaCraft students — animation reels, VFX shots, game builds, and content projects."
		},
		{
			property: "og:title",
			content: "Students' World — AnimaCraft"
		},
		{
			property: "og:description",
			content: "Where AnimaCraft students showcase their best work."
		}
	] }),
	component: StudentsWorld
});
var works = [
	{
		name: "Ritvik Kumar",
		title: "Character Reel",
		img: course_3d_default
	},
	{
		name: "Tanuj Dhami",
		title: "VFX Compositing",
		img: course_vfx_default
	},
	{
		name: "Mohik Dhakate",
		title: "Game Environment",
		img: course_game_default
	},
	{
		name: "Anjali Kashyap",
		title: "Vlog Series",
		img: course_content_default
	},
	{
		name: "Chhandosi Mukherjee",
		title: "Broadcast Package",
		img: course_motion_default
	},
	{
		name: "Ashad Khan",
		title: "Short Film",
		img: course_vfx_default
	},
	{
		name: "Deepak Kumar",
		title: "Level Design",
		img: course_game_default
	},
	{
		name: "Indranuj Das",
		title: "Motion Titles",
		img: course_motion_default
	},
	{
		name: "Sasmita Pani",
		title: "Character Design",
		img: course_3d_default
	}
];
function StudentsWorld() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Students' World",
		title: "Creativity speaks louder.",
		subtitle: "See how AnimaCraft students are raising the bar with projects that blend skill, vision, and real-world training."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: works.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "group rounded-2xl overflow-hidden bg-card border border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[4/3] overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: w.img,
					alt: `${w.title} by ${w.name}`,
					loading: "lazy",
					className: "h-full w-full object-cover group-hover:scale-105 transition duration-500"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-xl",
					children: w.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-muted-foreground",
					children: w.title
				})]
			})]
		}, w.name + w.title))
	})] });
}
//#endregion
//#region src/assets/testimonial-1.jpg
var testimonial_1_default = "/assets/testimonial-1-BWS7oJWp.jpg";
//#endregion
//#region src/assets/testimonial-2.jpg
var testimonial_2_default = "/assets/testimonial-2-D_Ogum3t.jpg";
//#endregion
//#region src/assets/testimonial-3.jpg
var testimonial_3_default = "/assets/testimonial-3-Dj9v2nYh.jpg";
//#endregion
//#region src/assets/testimonial-4.jpg
var testimonial_4_default = "/assets/testimonial-4-CYugiZHb.jpg";
//#endregion
//#region src/assets/testimonial-5.jpg
var testimonial_5_default = "/assets/testimonial-5-BTXzM0Fq.jpg";
//#endregion
//#region src/assets/testimonial-6.jpg
var testimonial_6_default = "/assets/testimonial-6-CO5A0cFf.jpg";
//#endregion
//#region src/routes/testimonials.tsx
var Route$9 = createFileRoute("/testimonials")({
	head: () => ({ meta: [
		{ title: "Student Testimonials — Center of Skill Learning" },
		{
			name: "description",
			content: "Read success stories from CSL graduates now working as animators, compositors, environment artists and designers across top studios."
		},
		{
			property: "og:title",
			content: "CSL Student Testimonials"
		},
		{
			property: "og:description",
			content: "Success stories from graduates working across film, gaming and design studios."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: Testimonials
});
var testimonials = [
	{
		name: "Aarav Mehta",
		role: "3D Animator at Sundeep Studios",
		img: testimonial_1_default,
		quote: "The mentorship at CSL is unmatched. My mentors didn't just teach software — they taught me how to think like a studio artist."
	},
	{
		name: "Preeti Sharma",
		role: "Compositor at Light & Wonder",
		img: testimonial_2_default,
		quote: "I walked in curious and walked out with a reel that got me interviews at four top studios. The placement team is exceptional."
	},
	{
		name: "Shivam Gupta",
		role: "Environment Artist",
		img: testimonial_3_default,
		quote: "The live projects made all the difference. I was already shipping work before I graduated — that's what studios want to see."
	},
	{
		name: "Shilpi Roy",
		role: "Motion Designer at Ogilvy",
		img: testimonial_4_default,
		quote: "The broadcast module rebuilt my craft from scratch. I now lead motion for national campaigns."
	},
	{
		name: "Ritika Singh",
		role: "Content Creator, 480K subscribers",
		img: testimonial_5_default,
		quote: "CSL taught me the business of content, not just the editing. That changed everything about how I work."
	},
	{
		name: "Kamna Gupta",
		role: "Product Designer at Zeta",
		img: testimonial_6_default,
		quote: "The design-systems training was better than anything I found online. My case studies got me shortlisted everywhere."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Testimonials",
		title: "Success stories, in their own words.",
		subtitle: "Graduates from across our programs on mentorship, portfolios and landing their first studio role."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "rounded-2xl bg-card border border-border p-8 hover-lift",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-8 w-8 text-[var(--gold)] mb-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "text-foreground/85 leading-relaxed",
						children: [
							"\"",
							t.quote,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-6 pt-6 border-t border-border flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: t.img,
							alt: `${t.name}, ${t.role}`,
							loading: "lazy",
							width: 512,
							height: 512,
							className: "h-14 w-14 rounded-full object-cover ring-2 ring-[var(--gold)]/50 shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-lg font-semibold",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted-foreground mt-0.5",
								children: t.role
							})]
						})]
					})
				]
			}, t.name))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex",
				children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" }, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4.9 · 800+ Google Reviews" })]
		})]
	})] });
}
//#endregion
//#region src/routes/why-choose-us.tsx
var Route$8 = createFileRoute("/why-choose-us")({
	head: () => ({ meta: [
		{ title: "Why Choose CSL — Mentors, Projects & Career Support" },
		{
			name: "description",
			content: "Discover why students choose Center of Skill Learning for expert mentors, live projects, portfolio development and career support."
		},
		{
			property: "og:title",
			content: "Why Choose CSL"
		},
		{
			property: "og:description",
			content: "Expert mentors, live projects, portfolio building and dedicated career support."
		}
	] }),
	component: WhyChooseUs
});
var reasons = [
	{
		i: Award,
		t: "Industry Expert Trainers",
		d: "Learn from professionals actively shipping work for leading studios and agencies."
	},
	{
		i: Briefcase,
		t: "Portfolio Development",
		d: "Graduate with a focused portfolio shaped around your target role."
	},
	{
		i: Target,
		t: "Internship Opportunities",
		d: "Build experience through structured internships with partner studios."
	},
	{
		i: GraduationCap,
		t: "Placement Support",
		d: "Get dedicated help with applications, interviews and your first role."
	},
	{
		i: Users,
		t: "Small Batch Sizes",
		d: "Get direct mentor attention in focused, collaborative cohorts."
	},
	{
		i: Trophy,
		t: "Career Counselling",
		d: "Make clearer choices with one-to-one guidance from admission onward."
	}
];
function WhyChooseUs() {
	const { open } = useEnquiry();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Why Choose CSL",
		title: "Why Choose CSL",
		subtitle: "A focused learning experience built to move your creative ambition toward a real career."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#f6f3ed] text-[#171717] py-20 border-b border-[#ded8cc]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[0.8fr_1.6fr] items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:sticky lg:top-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[#b87500] uppercase tracking-[0.3em] text-xs font-bold",
							children: "The CSL difference"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-[#171717] text-4xl md:text-5xl mt-4 leading-[0.98]",
							children: ["Learn with purpose. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#b87500]",
								children: "Create with confidence."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-[#625d55] leading-relaxed",
							children: "From your first lesson to your first interview, every part of CSL is designed around practical progress and the work you want to do."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid grid-cols-3 gap-3 max-w-md",
							children: [
								"10 years",
								"1000+ partners",
								"95% support"
							].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-l-2 border-[#d6a64e] pl-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg text-[#b87500]",
									children: stat
								})
							}, stat))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: reasons.map(({ i: Icon, t, d }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group p-6 border border-[#ded8cc] bg-white hover:border-[#d6a64e] hover:-translate-y-1 transition shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-11 w-11 grid place-items-center border border-[#d6a64e] bg-[#fff8e8]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-[#b87500]" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-3xl text-[#d8d1c5]",
									children: String(index + 1).padStart(2, "0")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-[#171717] text-xl mt-5",
								children: t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-[#625d55]",
								children: d
							})
						]
					}, t))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-[#ded8cc] pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-[#b87500] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold text-[#b87500]",
						children: "10 years shaping creative careers"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: open,
					className: "btn-primary btn-primary-hover",
					children: ["Book Free Career Counselling ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})]
		})
	})] });
}
//#endregion
//#region src/routes/_authenticated/admin.tsx
var Route$7 = createFileRoute("/_authenticated/admin")({ component: AdminLayout });
var tabs = [
	{
		to: "/admin",
		label: "Dashboard",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/admin/enquiries",
		label: "Enquiries",
		icon: Inbox,
		exact: false
	},
	{
		to: "/admin/blog",
		label: "Blog Posts",
		icon: FileText,
		exact: false
	},
	{
		to: "/admin/testimonials",
		label: "Testimonials",
		icon: Quote,
		exact: false
	}
];
function AdminLayout() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { data: session } = useQuery({
		queryKey: ["admin-session"],
		queryFn: async () => {
			const { data } = await supabase.auth.getUser();
			if (!data.user) return null;
			const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", data.user.id);
			return {
				email: data.user.email ?? "",
				isAdmin: (roles ?? []).some((r) => r.role === "admin")
			};
		}
	});
	async function signOut() {
		await queryClient.cancelQueries();
		queryClient.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/auth",
			replace: true
		});
	}
	if (session && !session.isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg rounded-2xl border border-border bg-card p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mx-auto h-10 w-10 text-[var(--gold)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl mt-4",
					children: "Admin access required"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: [
						"You are signed in as ",
						session.email,
						", but this account does not have admin rights yet. Ask an existing admin to grant your account the admin role."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: signOut,
					className: "btn-primary btn-primary-hover mt-6",
					children: "Sign out"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[var(--gold)] uppercase tracking-[0.3em] text-[11px] font-semibold",
					children: "Admin Panel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl md:text-4xl mt-2",
					children: "Centre Of Skill Learning"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-sm text-muted-foreground",
					children: [session?.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: session.email
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: signOut,
						className: "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-semibold hover:border-[var(--gold)] hover:text-[var(--gold)] transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Sign out"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mt-8 flex flex-wrap gap-2",
				children: tabs.map(({ to, label, icon: Icon, exact }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to,
					activeOptions: { exact },
					activeProps: { className: "bg-[var(--gold)] text-black border-[var(--gold)]" },
					className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:border-[var(--gold)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }),
						" ",
						label
					]
				}, to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})
		]
	});
}
//#endregion
//#region src/routes/blog.$slug.tsx
var Route$6 = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = posts.find((p) => p.slug === params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Article not found — CSL Blog" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { post } = loaderData;
		return { meta: [
			{ title: `${post.title} — CSL Blog` },
			{
				name: "description",
				content: post.excerpt
			},
			{
				property: "og:title",
				content: post.title
			},
			{
				property: "og:description",
				content: post.excerpt
			},
			{
				property: "og:type",
				content: "article"
			}
		] };
	},
	component: BlogPost
});
function BlogPost() {
	const { post } = Route$6.useLoaderData();
	const { open } = useEnquiry();
	const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x max-w-3xl py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[var(--gold)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to Blog"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5" }),
						" ",
						post.date
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl md:text-5xl mt-3 leading-tight",
					children: post.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground text-lg leading-relaxed",
					children: post.excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: post.img,
					alt: post.title,
					className: "mt-8 rounded-2xl w-full aspect-[16/9] object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-8",
					children: post.sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: s.h
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground leading-relaxed",
						children: s.p
					})] }, s.h))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 rounded-2xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Want a personalised roadmap?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Talk to a CSL counsellor about the right program for your goals."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: open,
							className: "btn-primary btn-primary-hover mt-4",
							children: "Book Free Counselling"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-muted py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Related articles"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-5 sm:grid-cols-3",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: p.slug },
						className: "group rounded-xl overflow-hidden bg-card border border-border hover-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/10] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.title,
								loading: "lazy",
								className: "h-full w-full object-cover group-hover:scale-105 transition duration-500"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-widest font-semibold text-[var(--gold)]",
									children: p.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-sm font-semibold mt-1.5 leading-snug",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary",
									children: ["Read ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})
							]
						})]
					}, p.slug))
				})]
			})
		})]
	});
}
//#endregion
//#region src/routes/courses.index.tsx
var Route$5 = createFileRoute("/courses/")({
	head: () => ({ meta: [
		{ title: "Courses — Centre Of Skill Learning" },
		{
			name: "description",
			content: "Explore professional programs in animation, VFX, Unreal Engine, graphic design, UI/UX, motion design and web development. Search and filter to find your course."
		},
		{
			property: "og:title",
			content: "Centre Of Skill Learning Courses"
		},
		{
			property: "og:description",
			content: "Programs across animation, VFX, motion design, graphic design, UI/UX and web development."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: CoursesPage
});
function CoursesPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All Courses");
	const filtered = (0, import_react.useMemo)(() => courses.filter((c) => (cat === "All Courses" || c.category === cat) && (query.trim() === "" || c.title.toLowerCase().includes(query.toLowerCase()) || c.short.toLowerCase().includes(query.toLowerCase()))), [query, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Programs",
		title: "Centre Of Skill Learning Courses",
		subtitle: "Industry-aligned programs across animation, VFX, design, gaming and AI. Search and filter to find yours."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-4 items-center justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full md:w-96",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search courses…",
						className: "w-full rounded-full border border-input bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					className: `rounded-full border px-4 py-2 text-sm font-medium transition ${cat === c ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"}`,
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: [filtered.map((c, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/courses/$slug",
					params: { slug: c.slug },
					className: "group rounded-xl overflow-hidden bg-black border border-white/10 hover:border-[var(--gold)]/50 hover-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-36 md:h-40 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.img,
							alt: c.title,
							loading: "lazy",
							className: "h-full w-full object-cover group-hover:scale-105 transition duration-500"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-muted px-2.5 py-1 font-medium",
									children: c.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
										" ",
										c.duration
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base mt-2 leading-snug line-clamp-2",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-1",
								children: c.short
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-3 inline-flex items-center gap-1 font-semibold text-xs",
								children: ["Explore Course ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})]
				}, `${c.slug}-${idx}`)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "col-span-full text-center text-muted-foreground py-10",
					children: "No matching courses."
				})]
			})
		]
	})] });
}
//#endregion
//#region src/routes/courses.$slug.tsx
var faqs = [
	{
		q: "What is the admission process?",
		a: "Fill our enquiry form or book a free counselling session. Our team will guide you through eligibility, batch options and fees."
	},
	{
		q: "Do you offer EMI or scholarships?",
		a: "Yes — easy EMIs, education loans through our partner banks and merit-based scholarships are available."
	},
	{
		q: "Is placement assistance included?",
		a: "Every long-format program includes structured placement assistance with our 1000+ hiring partners."
	}
];
var Route$4 = createFileRoute("/courses/$slug")({
	loader: ({ params }) => {
		const course = courseMap[params.slug];
		if (!course) throw notFound();
		return {
			course,
			slug: params.slug
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Course not found — Centre Of Skill Learning" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { course } = loaderData;
		return { meta: [
			{ title: `${course.title} — Centre Of Skill Learning` },
			{
				name: "description",
				content: course.intro
			},
			{
				property: "og:title",
				content: `${course.title} — Centre Of Skill Learning`
			},
			{
				property: "og:description",
				content: course.intro
			}
		] };
	},
	component: CourseDetail,
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-5xl",
			children: "Course not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/courses",
			className: "mt-6 inline-block text-[var(--gold)] font-semibold",
			children: "Back to all courses"
		})]
	})
});
var related = courses.map((c) => ({
	slug: c.slug,
	title: c.title,
	img: c.img
}));
function CourseDetail() {
	const { course, slug } = Route$4.useLoaderData();
	const { open: openEnquiry } = useEnquiry();
	const [openFaq, setOpenFaq] = (0, import_react.useState)(null);
	const relatedFiltered = related.filter((r) => r.slug !== slug).slice(0, 3);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => openEnquiry(), 6e3);
		return () => clearTimeout(t);
	}, [slug, openEnquiry]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "gradient-hero border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-20 grid gap-12 lg:grid-cols-2 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--gold)] uppercase tracking-[0.3em] text-xs font-semibold",
						children: course.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl md:text-[2.75rem] mt-4 leading-[1.1]",
						children: course.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground text-lg leading-relaxed max-w-xl",
						children: course.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 grid gap-3 sm:grid-cols-2 max-w-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-white/10 bg-[#0E0E0E] p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.14em] font-semibold text-white/55",
								children: "Duration"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-display text-xl text-white inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-[var(--gold)]" }), course.duration]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-white/10 bg-[#0E0E0E] p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.14em] font-semibold text-white/55",
								children: "Eligibility"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm font-light text-white/80 inline-flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4 mt-0.5 text-[var(--gold)] shrink-0" }), course.eligibility]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.14em] font-semibold text-white/55",
							children: "Software Covered"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: course.tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-[var(--gold)]/35 bg-[var(--gold)]/10 px-3 py-1.5 text-xs font-medium text-[var(--gold)]",
								children: t
							}, t))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: openEnquiry,
							className: "btn-primary btn-primary-hover",
							children: ["Enquire Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: course.img,
					alt: course.title,
					className: "rounded-3xl aspect-[4/3] object-cover w-full shadow-glow"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl",
						children: "Course Highlights"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-2",
						children: course.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 rounded-2xl bg-card border border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-[var(--gold)] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: o
							})]
						}, o))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl",
						children: "Software Covered"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: course.tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium",
							children: t
						}, t))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl md:text-4xl",
							children: "What You Will Get — Job Options"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground max-w-2xl",
							children: "On completing this program you receive an industry-recognised certificate, a mentor-reviewed portfolio and placement assistance for roles such as:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: course.careers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/40 px-4 py-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-4 w-4 text-[var(--gold)]" }), c]
							}, c))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl gradient-dark text-white p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl text-white",
								children: "Placement Assistance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-white/70 max-w-2xl leading-relaxed",
								children: "Dedicated placement cell with 1000+ hiring partners, portfolio reviews, mock interviews and studio walk-ins."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-4 sm:grid-cols-3",
								children: [
									{
										n: "95%",
										l: "Placement Assistance"
									},
									{
										n: "1000+",
										l: "Hiring Partners"
									},
									{
										n: "5K+",
										l: "Alumni Network"
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-white/5 border border-white/10 p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-3xl text-[var(--gold)]",
										children: s.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-white/70",
										children: s.l
									})]
								}, s.l))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl",
						children: "Frequently Asked Questions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-3",
						children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpenFaq(openFaq === i ? null : i),
								className: "w-full flex items-center justify-between p-5 text-left font-display text-lg",
								children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 transition ${openFaq === i ? "rotate-180" : ""}` })]
							}), openFaq === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed",
								children: f.a
							})]
						}, f.q))
					})] })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl",
					children: "Related Courses"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-3",
					children: relatedFiltered.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/courses/$slug",
						params: { slug: r.slug },
						className: "group rounded-2xl overflow-hidden bg-card border border-border hover-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: r.img,
								alt: r.title,
								loading: "lazy",
								className: "h-full w-full object-cover group-hover:scale-105 transition duration-500"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: r.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
						})]
					}, r.slug))
				})]
			})
		})
	] });
}
//#endregion
//#region src/routes/_authenticated/admin.index.tsx
var Route$3 = createFileRoute("/_authenticated/admin/")({ component: AdminDashboard });
function AdminDashboard() {
	const { data, isLoading } = useQuery({
		queryKey: ["admin-stats"],
		queryFn: async () => {
			const [enquiries, newEnquiries, posts, testimonials] = await Promise.all([
				supabase.from("enquiries").select("id", {
					count: "exact",
					head: true
				}),
				supabase.from("enquiries").select("id", {
					count: "exact",
					head: true
				}).eq("status", "new"),
				supabase.from("blog_posts").select("id", {
					count: "exact",
					head: true
				}),
				supabase.from("testimonials").select("id", {
					count: "exact",
					head: true
				})
			]);
			return {
				enquiries: enquiries.count ?? 0,
				newEnquiries: newEnquiries.count ?? 0,
				posts: posts.count ?? 0,
				testimonials: testimonials.count ?? 0
			};
		}
	});
	const { data: latest } = useQuery({
		queryKey: ["admin-latest-enquiries"],
		queryFn: async () => {
			const { data } = await supabase.from("enquiries").select("id, full_name, phone, course, created_at").order("created_at", { ascending: false }).limit(5);
			return data ?? [];
		}
	});
	const cards = [
		{
			icon: Inbox,
			label: "Total Enquiries",
			value: data?.enquiries,
			to: "/admin/enquiries"
		},
		{
			icon: TrendingUp,
			label: "New / Unhandled",
			value: data?.newEnquiries,
			to: "/admin/enquiries"
		},
		{
			icon: FileText,
			label: "Blog Posts",
			value: data?.posts,
			to: "/admin/blog"
		},
		{
			icon: Quote,
			label: "Testimonials",
			value: data?.testimonials,
			to: "/admin/testimonials"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: cards.map(({ icon: Icon, label, value, to }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to,
				className: "rounded-2xl border border-border bg-card p-6 hover-lift",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-[var(--gold)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-3xl",
						children: isLoading ? "—" : value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
						children: label
					})
				]
			}, label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Latest enquiries"
				}),
				!latest?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "No enquiries yet."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-border",
					children: latest?.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap items-center justify-between gap-2 py-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: e.full_name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: e.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--gold)]",
								children: e.course ?? "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: new Date(e.created_at).toLocaleDateString()
							})
						]
					}, e.id))
				})
			]
		})]
	});
}
//#endregion
//#region src/routes/_authenticated/admin.blog.tsx
var Route$2 = createFileRoute("/_authenticated/admin/blog")({ component: AdminBlog });
var schema$1 = objectType({
	title: stringType().trim().min(3, "Title is too short").max(160),
	slug: stringType().trim().regex(/^[a-z0-9-]+$/, "Slug can use lowercase letters, numbers and dashes only").max(120),
	excerpt: stringType().trim().max(300).optional(),
	image_url: stringType().trim().url("Image URL must be a valid link").max(500).optional().or(literalType("")),
	body: stringType().trim().max(2e4).optional(),
	published: booleanType()
});
var field$1 = "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]";
var label$1 = "block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-1.5";
var empty$1 = {
	title: "",
	slug: "",
	excerpt: "",
	image_url: "",
	body: "",
	published: false
};
function AdminBlog() {
	const queryClient = useQueryClient();
	const [form, setForm] = (0, import_react.useState)(empty$1);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const { data } = useQuery({
		queryKey: ["admin-blog"],
		queryFn: async () => {
			const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	function refresh() {
		queryClient.invalidateQueries({ queryKey: ["admin-blog"] });
		queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
	}
	async function onSubmit(e) {
		e.preventDefault();
		const parsed = schema$1.safeParse(form);
		if (!parsed.success) return toast.error(parsed.error.issues[0]?.message ?? "Check the form");
		setBusy(true);
		const { error } = await supabase.from("blog_posts").insert({
			title: parsed.data.title,
			slug: parsed.data.slug,
			excerpt: parsed.data.excerpt || null,
			image_url: parsed.data.image_url || null,
			body: parsed.data.body || null,
			published: parsed.data.published
		});
		setBusy(false);
		if (error) return toast.error(error.message.includes("duplicate") ? "That slug is already used" : "Could not save post");
		toast.success("Post created");
		setForm(empty$1);
		refresh();
	}
	async function togglePublished(id, published) {
		const { error } = await supabase.from("blog_posts").update({ published: !published }).eq("id", id);
		if (error) return toast.error("Could not update post");
		refresh();
	}
	async function remove(id) {
		const { error } = await supabase.from("blog_posts").delete().eq("id", id);
		if (error) return toast.error("Could not delete post");
		toast.success("Post deleted");
		refresh();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-[1fr_1.2fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "rounded-2xl border border-border bg-card p-6 grid gap-5 h-fit",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "New blog post"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label$1,
					htmlFor: "bp-title",
					children: "Title"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "bp-title",
					className: field$1,
					value: form.title,
					onChange: (e) => setForm({
						...form,
						title: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label$1,
					htmlFor: "bp-slug",
					children: "URL Slug"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "bp-slug",
					className: field$1,
					placeholder: "career-in-3d-animation",
					value: form.slug,
					onChange: (e) => setForm({
						...form,
						slug: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label$1,
					htmlFor: "bp-excerpt",
					children: "Short Summary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "bp-excerpt",
					className: field$1,
					value: form.excerpt,
					onChange: (e) => setForm({
						...form,
						excerpt: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label$1,
					htmlFor: "bp-img",
					children: "Cover Image Link"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "bp-img",
					className: field$1,
					placeholder: "https://…",
					value: form.image_url,
					onChange: (e) => setForm({
						...form,
						image_url: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label$1,
					htmlFor: "bp-body",
					children: "Article Content"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "bp-body",
					rows: 7,
					className: field$1,
					value: form.body,
					onChange: (e) => setForm({
						...form,
						body: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: form.published,
						onChange: (e) => setForm({
							...form,
							published: e.target.checked
						})
					}), "Publish immediately"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: busy,
					className: "btn-primary btn-primary-hover justify-center disabled:opacity-60",
					children: busy ? "Saving…" : "Create Post"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "All posts"
				}),
				!data?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "No posts yet."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-border",
					children: data?.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "py-4 flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-sm",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: ["/blog/", p.slug]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => togglePublished(p.id, p.published),
								className: `rounded-full border px-3 py-1.5 text-xs font-semibold transition ${p.published ? "border-[var(--gold)] text-[var(--gold)]" : "border-border text-muted-foreground"}`,
								children: p.published ? "Published" : "Draft"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => remove(p.id),
								"aria-label": "Delete post",
								className: "text-muted-foreground hover:text-destructive transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})]
						})]
					}, p.id))
				})
			]
		})]
	});
}
//#endregion
//#region src/routes/_authenticated/admin.enquiries.tsx
var Route$1 = createFileRoute("/_authenticated/admin/enquiries")({ component: AdminEnquiries });
var statuses = [
	"new",
	"contacted",
	"enrolled",
	"closed"
];
function AdminEnquiries() {
	const queryClient = useQueryClient();
	const { data, isLoading } = useQuery({
		queryKey: ["admin-enquiries"],
		queryFn: async () => {
			const { data, error } = await supabase.from("enquiries").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	async function setStatus(id, status) {
		const { error } = await supabase.from("enquiries").update({ status }).eq("id", id);
		if (error) return toast.error("Could not update status");
		toast.success("Status updated");
		queryClient.invalidateQueries({ queryKey: ["admin-enquiries"] });
		queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
	}
	async function remove(id) {
		const { error } = await supabase.from("enquiries").delete().eq("id", id);
		if (error) return toast.error("Could not delete enquiry");
		toast.success("Enquiry deleted");
		queryClient.invalidateQueries({ queryKey: ["admin-enquiries"] });
		queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: "Enquiries"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Every enquiry submitted through the website forms."
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && !data?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted-foreground",
				children: "No enquiries yet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto",
				children: !!data?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-left text-[11px] uppercase tracking-widest text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 pr-4",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 pr-4",
								children: "Phone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 pr-4",
								children: "City / District"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 pr-4",
								children: "State / UT"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 pr-4",
								children: "Course"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 pr-4",
								children: "Source"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 pr-4",
								children: "Date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 pr-4",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "pb-3" })
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-border",
						children: data.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-4 font-semibold",
								children: e.full_name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${e.phone}`,
									className: "hover:text-[var(--gold)]",
									children: e.phone
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-4 text-muted-foreground",
								children: e.city ?? "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-4 text-muted-foreground",
								children: e.state ?? "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-4 text-[var(--gold)]",
								children: e.course ?? "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-4 text-muted-foreground",
								children: e.source ?? "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-4 text-xs text-muted-foreground",
								children: new Date(e.created_at).toLocaleString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: e.status,
									onChange: (ev) => setStatus(e.id, ev.target.value),
									className: "rounded-lg border border-border bg-background px-2 py-1.5 text-xs",
									children: statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: s,
										children: s
									}, s))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => remove(e.id),
									"aria-label": "Delete enquiry",
									className: "text-muted-foreground hover:text-destructive transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
								})
							})
						] }, e.id))
					})]
				})
			})
		]
	});
}
//#endregion
//#region src/routes/_authenticated/admin.testimonials.tsx
var Route = createFileRoute("/_authenticated/admin/testimonials")({ component: AdminTestimonials });
var schema = objectType({
	student_name: stringType().trim().min(2, "Name is too short").max(100),
	role: stringType().trim().max(140).optional(),
	quote: stringType().trim().min(10, "Quote is too short").max(600),
	image_url: stringType().trim().url("Photo URL must be a valid link").max(500).optional().or(literalType("")),
	published: booleanType()
});
var field = "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]";
var label = "block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-1.5";
var empty = {
	student_name: "",
	role: "",
	quote: "",
	image_url: "",
	published: true
};
function AdminTestimonials() {
	const queryClient = useQueryClient();
	const [form, setForm] = (0, import_react.useState)(empty);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const { data } = useQuery({
		queryKey: ["admin-testimonials"],
		queryFn: async () => {
			const { data, error } = await supabase.from("testimonials").select("*").order("sort_order", { ascending: true }).order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	function refresh() {
		queryClient.invalidateQueries({ queryKey: ["admin-testimonials"] });
		queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
	}
	async function onSubmit(e) {
		e.preventDefault();
		const parsed = schema.safeParse(form);
		if (!parsed.success) return toast.error(parsed.error.issues[0]?.message ?? "Check the form");
		setBusy(true);
		const { error } = await supabase.from("testimonials").insert({
			student_name: parsed.data.student_name,
			role: parsed.data.role || null,
			quote: parsed.data.quote,
			image_url: parsed.data.image_url || null,
			published: parsed.data.published
		});
		setBusy(false);
		if (error) return toast.error("Could not save testimonial");
		toast.success("Testimonial added");
		setForm(empty);
		refresh();
	}
	async function togglePublished(id, published) {
		const { error } = await supabase.from("testimonials").update({ published: !published }).eq("id", id);
		if (error) return toast.error("Could not update testimonial");
		refresh();
	}
	async function remove(id) {
		const { error } = await supabase.from("testimonials").delete().eq("id", id);
		if (error) return toast.error("Could not delete testimonial");
		toast.success("Testimonial deleted");
		refresh();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-[1fr_1.2fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "rounded-2xl border border-border bg-card p-6 grid gap-5 h-fit",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "New testimonial"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label,
					htmlFor: "ts-name",
					children: "Student Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "ts-name",
					className: field,
					value: form.student_name,
					onChange: (e) => setForm({
						...form,
						student_name: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label,
					htmlFor: "ts-role",
					children: "Role / Studio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "ts-role",
					className: field,
					placeholder: "3D Animator at …",
					value: form.role,
					onChange: (e) => setForm({
						...form,
						role: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label,
					htmlFor: "ts-quote",
					children: "Quote"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "ts-quote",
					rows: 5,
					className: field,
					value: form.quote,
					onChange: (e) => setForm({
						...form,
						quote: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label,
					htmlFor: "ts-img",
					children: "Photo Link"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "ts-img",
					className: field,
					placeholder: "https://…",
					value: form.image_url,
					onChange: (e) => setForm({
						...form,
						image_url: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: form.published,
						onChange: (e) => setForm({
							...form,
							published: e.target.checked
						})
					}), "Show on website"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: busy,
					className: "btn-primary btn-primary-hover justify-center disabled:opacity-60",
					children: busy ? "Saving…" : "Add Testimonial"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "All testimonials"
				}),
				!data?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "No testimonials yet."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-border",
					children: data?.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "py-4 flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-sm",
									children: t.student_name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: t.role ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1.5 text-xs text-muted-foreground line-clamp-2",
									children: [
										"\"",
										t.quote,
										"\""
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => togglePublished(t.id, t.published),
								className: `rounded-full border px-3 py-1.5 text-xs font-semibold transition ${t.published ? "border-[var(--gold)] text-[var(--gold)]" : "border-border text-muted-foreground"}`,
								children: t.published ? "Visible" : "Hidden"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => remove(t.id),
								"aria-label": "Delete testimonial",
								className: "text-muted-foreground hover:text-destructive transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})]
						})]
					}, t.id))
				})
			]
		})]
	});
}
//#endregion
//#region src/routeTree.gen.ts
var IndexRoute = Route$23.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$24
});
var AuthenticatedRouteRoute = Route$22.update({
	id: "/_authenticated",
	getParentRoute: () => Route$24
});
var AboutRoute = Route$21.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$24
});
var AuthRoute = Route$20.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$24
});
var BlogRoute = Route$19.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$24
});
var CentresRoute = Route$18.update({
	id: "/centres",
	path: "/centres",
	getParentRoute: () => Route$24
});
var ContactRoute = Route$17.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$24
});
var EventsRoute = Route$16.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$24
});
var FaqRoute = Route$15.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$24
});
var FranchiseRoute = Route$14.update({
	id: "/franchise",
	path: "/franchise",
	getParentRoute: () => Route$24
});
var GuideRoute = Route$13.update({
	id: "/guide",
	path: "/guide",
	getParentRoute: () => Route$24
});
var PartnerRoute = Route$12.update({
	id: "/partner",
	path: "/partner",
	getParentRoute: () => Route$24
});
var PrivacyRoute = Route$11.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$24
});
var StudentsWorldRoute = Route$10.update({
	id: "/students-world",
	path: "/students-world",
	getParentRoute: () => Route$24
});
var TestimonialsRoute = Route$9.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$24
});
var WhyChooseUsRoute = Route$8.update({
	id: "/why-choose-us",
	path: "/why-choose-us",
	getParentRoute: () => Route$24
});
var AuthenticatedAdminRoute = Route$7.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
});
var BlogSlugRoute = Route$6.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
});
var CoursesIndexRoute = Route$5.update({
	id: "/courses/",
	path: "/courses/",
	getParentRoute: () => Route$24
});
var CoursesSlugRoute = Route$4.update({
	id: "/courses/$slug",
	path: "/courses/$slug",
	getParentRoute: () => Route$24
});
var AuthenticatedAdminIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminRouteChildren = {
	AuthenticatedAdminBlogRoute: Route$2.update({
		id: "/blog",
		path: "/blog",
		getParentRoute: () => AuthenticatedAdminRoute
	}),
	AuthenticatedAdminEnquiriesRoute: Route$1.update({
		id: "/enquiries",
		path: "/enquiries",
		getParentRoute: () => AuthenticatedAdminRoute
	}),
	AuthenticatedAdminTestimonialsRoute: Route.update({
		id: "/testimonials",
		path: "/testimonials",
		getParentRoute: () => AuthenticatedAdminRoute
	}),
	AuthenticatedAdminIndexRoute
};
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminRoute: AuthenticatedAdminRoute._addFileChildren(AuthenticatedAdminRouteChildren) };
var AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
var BlogRouteChildren = { BlogSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
	AboutRoute,
	AuthRoute,
	BlogRoute: BlogRoute._addFileChildren(BlogRouteChildren),
	CentresRoute,
	ContactRoute,
	EventsRoute,
	FaqRoute,
	FranchiseRoute,
	GuideRoute,
	PartnerRoute,
	PrivacyRoute,
	StudentsWorldRoute,
	TestimonialsRoute,
	WhyChooseUsRoute,
	CoursesSlugRoute,
	CoursesIndexRoute
};
var routeTree = Route$24._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
