"use client";

import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import React, { useRef, forwardRef } from "react";

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky font-semibold top-0 h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="space-y-6 px-8 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#0f172a]/80">Shwetha Ravishankar & Co.</p>
        <h1 className="2xl:text-7xl text-5xl font-semibold tracking-tight leading-[120%] text-[#0b1f32]">
          Litigation in motion<br />Strategic calm to courtroom charge
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-[#1f2937]">
          Scroll to move from our oath to listen, to the intensity of trial prep. The grid hints at the discipline
          behind every mandate.
        </p>
      </div>
    </motion.section>
  );
};

const Component = forwardRef<HTMLElement>((_props, _ref) => {
  void _props;
  void _ref;
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <main ref={container} className="relative h-[150vh] bg-[#f7f6f2]">
        <Section1 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
});

Component.displayName = "Component";

export default Component;
