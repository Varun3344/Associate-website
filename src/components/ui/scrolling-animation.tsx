"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Profile = {
  src: string;
  alt: string;
  angle: number;
};

const profiles: Profile[] = [
  {
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
    alt: "Adv. Kavya Iyer — Senior Counsel, Corporate",
    angle: 0,
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    alt: "Adv. Neeraj Nair — Criminal Defense",
    angle: Math.PI / 4,
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    alt: "Adv. Simran Kaur — Litigation Strategist",
    angle: Math.PI / 2,
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    alt: "Adv. Arjun Rao — Arbitration",
    angle: (3 * Math.PI) / 4,
  },
  {
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    alt: "Adv. Rehana Khan — Family Law",
    angle: Math.PI,
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    alt: "Adv. Dev Patel — Real Estate",
    angle: (5 * Math.PI) / 4,
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    alt: "Adv. Megha Reddy — Regulatory",
    angle: (3 * Math.PI) / 2,
  },
  {
    src: "https://images.unsplash.com/photo-1548946526-f69e2424cf45?auto=format&fit=crop&w=800&q=80",
    alt: "Adv. Rohan Sen — Disputes",
    angle: (7 * Math.PI) / 4,
  },
];

export function HomePage() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const node = containerRef.current;
      if (!node) return;
      const scrollTop = window.scrollY;
      const elementTop = node.getBoundingClientRect().top + scrollTop;
      const start = elementTop - window.innerHeight;
      const end = elementTop + node.offsetHeight;
      const range = end - start || 1;
      const rawProgress = (scrollTop - start) / range;
      setProgress(Math.min(Math.max(rawProgress, 0), 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const easedProgress = easeOutCubic(progress);
  const expandRadius = easedProgress * 320;
  const midRingVisible = easedProgress > 0.25;
  const outerRingVisible = easedProgress > 0.55;

  return (
    <div ref={containerRef} className="min-h-[220vh] bg-white">
      <div className="sticky top-24 flex h-[80vh] items-center justify-center px-4">
        <div className="relative">
          <div
            className={`flex h-[560px] w-[560px] items-center justify-center rounded-full transition-all duration-500 ${
              outerRingVisible ? "border-2 border-[#d7dce3]" : ""
            }`}
          >
            <div
              className={`flex h-[460px] w-[460px] items-center justify-center rounded-full transition-all duration-500 ${
                midRingVisible ? "border-2 border-[#a9c8ff]" : ""
              }`}
            >
              <div className="relative flex h-[360px] w-[360px] items-center justify-center rounded-full bg-gradient-to-r from-[#dfd6ff] via-[#f6b1d6] to-[#f0c08d] p-0.5">
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white">
                  {profiles.map((profile) => (
                    <div
                      key={profile.alt}
                      className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-4 border-white shadow-lg transition-transform duration-300 ease-out"
                      style={{
                        transform: `translate(calc(50% + ${expandRadius * Math.cos(profile.angle)}px), calc(50% + ${
                          expandRadius * Math.sin(profile.angle)
                        }px))`,
                      }}
                    >
                      <Image
                        src={profile.src}
                        alt={profile.alt}
                        width={96}
                        height={96}
                        className="h-full w-full rounded-2xl object-cover"
                      />
                    </div>
                  ))}
                  <div
                    className={`relative z-10 flex max-w-xs flex-col items-center text-center transition-opacity duration-500 ${
                      easedProgress > 0.15 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#d4a762]">Advocate pods</p>
                    <h1 className="mt-2 text-4xl font-semibold text-[#0b1f32]">SR Chambers Team</h1>
                    <p className="mt-2 text-sm text-slate-500">
                      Scroll to split the advocacy ring and reveal every specialist counsel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-b from-[#fdf3e1] via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}
