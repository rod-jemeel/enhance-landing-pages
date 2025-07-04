"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-10vh']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  const wordContainer = useRef(null);
  const { scrollYProgress: wordScrollProgress } = useScroll({
    target: wordContainer,
    offset: ["start 0.9", "start 0.25"],
  });

  const text =
    "Our physician-led weight loss program can be your key to a healthier future. This isn't just about the medication, it's a concierge telehealth experience tailored to your needs.";
  const words = text.split(" ");

  return (
    <section ref={container} className="relative pt-40 pb-32 bg-gray-900 overflow-hidden">
      <motion.div
        style={{ y, opacity, scale }}
        className="w-full px-6 lg:px-12"
      >
        <div className="flex">
          <div className="w-full lg:w-1/8 pr-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 text-yellow-400 h-[1.2em] lg:mt-2">
                <div className="w-20 h-[2px] bg-yellow-400"></div>
                <span className="text-sm uppercase tracking-wider font-medium whitespace-nowrap">
                  A HEALTHIER YOU
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <p ref={wordContainer} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word key={i} progress={wordScrollProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </p>

            <div className="max-w-full mt-16 flex flex-row gap-6">
              <div className="w-3/4 h-[2px] bg-gray-700"></div>

              <p className="text-gray-400 text-lg leading-relaxed w-full">
                Real progress in health and wellness comes when we treat the whole person—not just the symptoms. 
                By focusing on personalized care and addressing the root causes of your challenges, 
                I can help you achieve sustainable results that improve not just your body but your entire quality of life.
                Let's take this journey to better health together.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block mr-3 mb-3">
      <span className="absolute opacity-20 text-gray-600">{children}</span>
      <motion.span style={{ opacity }} className="relative text-white">
        {children}
      </motion.span>
    </span>
  );
};
