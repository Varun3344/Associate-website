import Image from "next/image";
import Link from "next/link";
import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import ScrollAdventure from "@/components/ui/animated-scroll";
import { HomePage as TeamOrbit } from "@/components/ui/scrolling-animation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Gavel,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  Users2,
} from "lucide-react";

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice Areas" },
  { href: "#team", label: "Our Team" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { label: "Years in courtrooms", value: "18+" },
  { label: "Matters resolved", value: "1,250" },
  { label: "Specialist advocates", value: "24" },
  { label: "Client satisfaction", value: "98%" },
];

type PracticeArea = { title: string; copy: string; icon: LucideIcon };

const practiceAreas: PracticeArea[] = [
  {
    title: "Civil & Commercial Litigation",
    copy: "Strategic representation across trial and appellate courts, focused on business critical disputes.",
    icon: Scale,
  },
  {
    title: "Family Law & Mediation",
    copy: "Compassionate guidance for custody, maintenance, domestic violence, and succession matters.",
    icon: Users2,
  },
  {
    title: "Property & Real Estate",
    copy: "Title verifications, land acquisition, RERA disputes, and bespoke documentation for developers.",
    icon: Building2,
  },
  {
    title: "Corporate Advisory",
    copy: "Retainer-based counsel for boards, compliance audits, and complex contract negotiations.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Criminal Defense",
    copy: "White-collar defense teams blending forensic review with decisive courtroom action.",
    icon: Gavel,
  },
  {
    title: "Arbitration & ADR",
    copy: "Institutional and ad-hoc arbitration benches backed by meticulous memorial drafting.",
    icon: BookOpenCheck,
  },
];

type ServiceItem = { title: string; detail: string; icon: LucideIcon };

const services: ServiceItem[] = [
  {
    title: "Strategic Legal Retainers",
    detail: "Dedicated pods aligned to your business unit with quarterly risk heatmaps.",
    icon: ShieldCheck,
  },
  {
    title: "Due Diligence Labs",
    detail: "Deep-dive reports blending compliance, ESG, and cross-border data privacy insights.",
    icon: BadgeCheck,
  },
  {
    title: "Contract Architecture",
    detail: "Playbooks for procurement, investment, franchise, and SaaS agreements with rapid turnaround.",
    icon: BookOpenCheck,
  },
  {
    title: "Executive Representation",
    detail: "Discreet counsel for founders and CXOs covering reputation, negotiation, and crisis cells.",
    icon: BriefcaseBusiness,
  },
];

const galleryFeature = {
  image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
  alt: "Lawyer reviewing files in a chamber",
  title: "Inside the chambers",
  copy: "Workshops, moot rehearsals, and client immersions captured inside the SR Chambers studio.",
  bullets: ["Midnight mediation pods", "Morning research stand-ups", "Weekly client immersions"],
};

const blogPosts = [
  {
    title: "High Court trends for 2025",
    excerpt: "How Karnataka High Court is reshaping interim reliefs for infrastructure concessions.",
    date: "Nov 28, 2025",
    readingTime: "6 min read",
  },
  {
    title: "Building compliant startups",
    excerpt: "A founder-friendly checklist to pre-empt data and HR litigation in the first 24 months.",
    date: "Nov 12, 2025",
    readingTime: "4 min read",
  },
  {
    title: "Women in black & white",
    excerpt: "Adv. Shwetha Ravishankar on mentoring first-generation women advocates across India.",
    date: "Oct 30, 2025",
    readingTime: "5 min read",
  },
];

const contactDetails: { label: string; value: string; icon: LucideIcon }[] = [
  { label: "Chambers", value: "#214, MG Road, Bengaluru 560001", icon: MapPin },
  { label: "Call", value: "+91 98450 99011", icon: Phone },
  { label: "Write", value: "counsel@ravishankarlaw.in", icon: Mail },
];

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <div className="space-y-3">
    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#d4a762]">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-semibold text-[#0b1f32] sm:text-4xl">{title}</h2>
    <p className="text-base text-slate-600">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div className="bg-white text-[#0b1f32]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className={`${container} flex items-center justify-between py-4`}>
          <div className="flex items-center gap-3">
            <Image
              src="/brand-mark.svg"
              width={44}
              height={44}
              alt="Ravishankar Legal monogram"
              className="rounded-full border border-[#d4a762]/50"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#d4a762]">
                SR Chambers
              </p>
              <p className="text-lg font-semibold">Shwetha Ravishankar & Co.</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[#0b1f32]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-[#0b1f32] px-4 py-2 text-sm font-semibold text-[#0b1f32] transition hover:bg-[#0b1f32] hover:text-white lg:inline-flex"
          >
            Schedule a call
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </header>

      <main className="space-y-24 pt-28 pb-24">
        <section id="home" className="bg-black text-white">
          <HeroScrollAnimation />
        </section>

        <section className="relative z-10 -mt-8 bg-white pb-16 pt-20 shadow-[0_-32px_80px_rgba(0,0,0,0.18)]">
          <div className={`${container} grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]`}>
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#d4a762]/40 bg-[#fdfaf5] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4a762]">
                Advocate | High Court of Karnataka
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-[#0b1f32] sm:text-5xl">
                Precision advocacy for families, founders, and institutions across India.
              </h1>
              <p className="text-lg text-slate-600">
                Adv. Shwetha Ravishankar helms a boutique litigation, advisory, and policy practice built
                on clarity, compassion, and courtroom stamina.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0b1f32] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0b1f32]/15"
                >
                  Book a consultation
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-[#0b1f32]/20 px-6 py-3 text-sm font-semibold text-[#0b1f32]"
                >
                  Meet the chambers
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-3xl font-semibold text-[#0b1f32]">{stat.value}</p>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-b from-[#fef8ec] to-transparent" aria-hidden />
              <div className="relative rounded-[32px] border border-[#f3e4cb] bg-white p-6 shadow-xl">
                <Image
                  src="/images/shwetha-ravishankar.png"
                  alt="Shwetha Ravishankar portrait"
                  width={480}
                  height={640}
                  className="w-full rounded-[28px] bg-[#f7f5f0] object-cover"
                  priority
                />
                <div className="mt-4 space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-base font-semibold text-[#0b1f32]">Shwetha Ravishankar</p>
                  <p className="text-sm text-slate-600">Founding Partner & Senior Advocate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`${container} space-y-6`}>
          <SectionHeading
            eyebrow="About the chambers"
            title="A women-led practice anchored in clarity, craft, and community."
            description="Scroll through our research pods, courtroom craft, and client rituals without leaving the experience—the story and imagery travel together."
          />
        </section>
        <div className="px-4 sm:px-6 lg:px-8">
          <ScrollAdventure />
        </div>

        <section id="practice" className={`${container} space-y-10`}>
          <SectionHeading
            eyebrow="Practice areas"
            title="Full-spectrum representation across courts and tribunals."
            description="Each vertical is led by a senior advocate with cross-functional pods for research, drafting, and hearings."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {practiceAreas.map((area) => (
              <div
                key={area.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-[#fdfaf5] p-6 shadow-sm"
              >
                <area.icon className="size-10 text-[#d4a762]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#0b1f32]">{area.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{area.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className={`${container} space-y-10`}>
          <SectionHeading
            eyebrow="Services"
            title="Beyond litigation: advisory cells that stay on-call."
            description="Modular legal services that blend process, playbooks, and people across industries."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="flex gap-4 rounded-3xl border border-slate-200 p-6">
                <service.icon className="size-12 rounded-2xl border border-[#d4a762]/30 bg-[#fef8ec] p-3 text-[#d4a762]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#0b1f32]">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{service.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="team" className={`${container} space-y-10`}>
        <SectionHeading
          eyebrow="Our team"
          title="Eight lead counsels guiding every mandate."
          description="Scroll to split the circle and meet every advocate assigned to the matter—no standalone cards, all momentum."
        />
        <div className="rounded-[32px] border border-slate-200 shadow-xl">
          <TeamOrbit />
        </div>
        </section>

        <section id="gallery" className={`${container} space-y-10`}>
          <SectionHeading
            eyebrow="Photo block"
            title="Life inside chambers"
            description="A single-lawyer spotlight that stretches across the screen—no grid, just one immersive frame."
          />
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">
            <div className="relative h-80 w-full md:h-[420px]">
              <Image src={galleryFeature.image} alt={galleryFeature.alt} fill className="object-cover" />
            </div>
            <div className="space-y-4 p-8">
              <h3 className="text-2xl font-semibold text-[#0b1f32]">{galleryFeature.title}</h3>
              <p className="text-slate-600">{galleryFeature.copy}</p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-[#0b1f32]">
                {galleryFeature.bullets.map((item) => (
                  <span key={item} className="rounded-full border border-[#d4a762]/50 px-4 py-1 text-xs uppercase tracking-wide">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className={`${container} space-y-10`}>
          <SectionHeading
            eyebrow="Blog"
            title="Field notes from our desks"
            description="Analyses, client alerts, and reflections from Shwetha and the broader team."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="flex h-full flex-col rounded-3xl border border-slate-200 p-6">
                <p className="text-sm text-slate-500">{post.date}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#0b1f32]">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm text-slate-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-sm font-semibold text-[#0b1f32]">
                  <span>{post.readingTime}</span>
                  <span className="inline-flex items-center gap-1 text-[#d4a762]">
                    Read more <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={`${container} space-y-10`}>
          <SectionHeading
            eyebrow="Contact"
            title="Let's plan your next legal move"
            description="Reach us for urgent representations, retainers, speaking engagements, or media quotes."
          />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-center gap-4">
                  <detail.icon className="size-10 text-[#d4a762]" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{detail.label}</p>
                    <p className="text-lg font-semibold text-[#0b1f32]">{detail.value}</p>
                  </div>
                </div>
              ))}
              <p className="text-sm text-slate-500">
                Office hours: Monday to Saturday - 9:00 AM - 8:00 PM | Emergency desk available 24/7.
              </p>
            </div>
            <form className="space-y-5 rounded-[32px] border border-slate-200 bg-[#fef8ec] p-8 shadow-inner">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-[#0b1f32]">
                  Full name
                  <input
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-[#d4a762]/40 bg-white px-4 py-3 text-sm text-[#0b1f32] focus:border-[#0b1f32] focus:outline-none"
                    placeholder="Client / Company"
                  />
                </label>
                <label className="text-sm font-semibold text-[#0b1f32]">
                  Email address
                  <input
                    type="email"
                    className="mt-2 w-full rounded-2xl border border-[#d4a762]/40 bg-white px-4 py-3 text-sm text-[#0b1f32] focus:border-[#0b1f32] focus:outline-none"
                    placeholder="name@company.com"
                  />
                </label>
              </div>
              <label className="text-sm font-semibold text-[#0b1f32]">
                Matter summary
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-[#d4a762]/40 bg-white px-4 py-3 text-sm text-[#0b1f32] focus:border-[#0b1f32] focus:outline-none"
                  placeholder="Share timelines, courts, or documents we should prepare"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#0b1f32] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0b1f32]/20"
              >
                Submit confidential brief
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#f5f5f0] py-10">
        <div className={`${container} flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between`}>
          <div className="flex items-center gap-3">
            <Image src="/brand-mark.svg" alt="SR Chambers" width={36} height={36} />
            <div>
              <p className="text-base font-semibold text-[#0b1f32]">Shwetha Ravishankar & Co.</p>
              <p>Dedicated to equitable justice on a white canvas of trust.</p>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} SR Chambers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
