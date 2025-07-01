"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const text =
    "We are pioneers in luxury automotive experiences, combining cutting-edge technology with timeless elegance. Our commitment to excellence drives every decision we make.";
  const words = text.split(" ");

  return (
    <section ref={container} className="py-32 bg-gray-900">
      <div className="w-full px-6 lg:px-12">
        <div className="flex">
          <div className="w-full lg:w-1/8 pr-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 text-yellow-400 h-[1.2em] lg:mt-2">
                <div className="w-20 h-[2px] bg-yellow-400"></div>
                <span className="text-sm uppercase tracking-wider font-medium whitespace-nowrap">
                  ABOUT
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </p>

            <div className="max-w-full mt-16 flex flex-row gap-6">
              <div className="w-3/4 h-[2px] bg-gray-700"></div>

              <p className="text-gray-400 text-lg leading-relaxed w-full">
                Founded with a vision to transform the luxury automotive
                landscape, we blend innovation with tradition. Our team of
                experts crafts experiences that go beyond transportation,
                creating moments that resonate with sophistication and purpose.
                Every detail is meticulously considered, every interaction
                carefully designed to exceed the expectations of those who
                demand excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
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
