"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Panel = {
  eyebrow: string;
  highlight: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const panels: Panel[] = [
  {
    eyebrow: "Excellence in",
    highlight: "Legal Practice",
    paragraphs: [
      "Shwetha Ravishankar & Associates was founded with a vision to provide exceptional legal services that combine traditional values with modern approaches.",
      "Our firm specializes in multiple practice areas, ensuring comprehensive legal solutions for individuals and businesses alike. We pride ourselves on our client-centric approach, attention to detail, and unwavering commitment to achieving the best possible outcomes.",
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Lady Justice statue close-up",
  },
  {
    eyebrow: "Our",
    highlight: "Mission & Values",
    paragraphs: [
      "We believe in building long-term relationships with clients rooted in trust, transparency, and results. Our team is dedicated to understanding every unique situation and crafting strategies that align with your goals.",
      "With years of experience and a proven track record, we continue to set the standard for excellence in legal representation throughout India.",
    ],
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Legal library with marble bust",
    reverse: true,
  },
];

export default function ScrollAdventure() {
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

  const segment = 1 / panels.length;
  const activeIndex = Math.min(Math.floor(progress / segment), panels.length - 1);

  return (
    <div ref={containerRef} className="relative min-h-[200vh]">
      <div className="sticky top-24 rounded-[40px] border border-slate-200/60 bg-white p-2 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <div className="relative h-[70vh] min-h-[620px] overflow-hidden rounded-[32px] bg-white">
          {panels.map((panel, idx) => {
            const isActive = idx === activeIndex;

            return (
              <article
                key={`${panel.eyebrow}-${panel.highlight}`}
                className={`absolute inset-0 flex flex-col gap-8 px-6 py-10 transition-all duration-500 lg:flex-row lg:items-center ${
                  panel.reverse ? "lg:flex-row-reverse" : ""
                }`}
                style={{
                  opacity: isActive ? 1 : 0,
                  pointerEvents: isActive ? "auto" : "none",
                  transform: `translateY(${isActive ? 0 : 20}px)`,
                }}
              >
                <div className="relative h-64 flex-1 overflow-hidden rounded-[28px] border border-slate-100 bg-[#fef5f3] p-[6px] shadow-inner lg:h-[420px]">
                  <Image
                    src={panel.image}
                    alt={panel.imageAlt}
                    fill
                    className="rounded-[22px] object-cover transition-transform duration-500"
                    style={{ transform: `scale(${isActive ? 1 : 0.95})` }}
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#d4a762]">{panel.eyebrow}</p>
                  <h3 className="text-3xl font-semibold leading-tight text-[#0b1f32]">
                    {panel.eyebrow.split(" ")[0]}{" "}
                    <span className="bg-gradient-to-r from-[#f39db4] to-[#fcd8c2] bg-clip-text text-transparent">
                      {panel.highlight}
                    </span>
                  </h3>
                  {panel.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
