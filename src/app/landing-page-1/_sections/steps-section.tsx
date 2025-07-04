"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, FlaskConical, Video, Package } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from "@/components/ui/progress-carousel";

const steps = [
  {
    title: "Medical Assessment",
    description:
      "Complete health questionnaire in 5-10 minutes for personalized treatment.",
    icon: <FileText className="w-5 h-5" />,
    videoId: "KWcO3KoiPg0",
    sliderName: "assessment",
  },
  {
    title: "Lab Testing",
    description:
      "Complete blood work and health screenings at Quest Diagnostics.",
    icon: <FlaskConical className="w-5 h-5" />,
    videoId: "mG5I5uryXDk",
    sliderName: "testing",
  },
  {
    title: "Provider Consultation",
    description: "Meet with licensed providers via secure video call.",
    icon: <Video className="w-5 h-5" />,
    videoId: "-7QqY7UxlwA",
    sliderName: "consultation",
  },
  {
    title: "Doorstep Delivery",
    description: "Free home delivery with automatic refills.",
    icon: <Package className="w-5 h-5" />,
    videoId: "stRKESZuQ6g",
    sliderName: "delivery",
  },
];

export default function StepsSection() {
  const isMobile = useMediaQuery("(min-width: 640px)");

  return (
    <section className="relative py-15 bg-white border-t border-[#F0E68C]/20">
      <motion.div className="relative px-8 lg:px-16">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-4"
          >
            Your Path to Transformation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[#666666] max-w-3xl mx-auto"
          >
            Four simple steps to start your journey
          </motion.p>
        </div>

        <div className="max-w-[84rem] mx-auto">
          <ProgressSlider
            vertical={isMobile ? true : false}
            fastDuration={300}
            duration={999999}
            activeSlider="assessment"
            className="sm:flex justify-center"
          >
            <SliderBtnGroup className="sm:relative absolute bottom-0 lg:w-[24rem] sm:w-[20rem] w-full z-10 sm:flex sm:flex-col grid grid-cols-2 sm:h-[540px] h-fit sm:bg-[#F8F8F8] bg-[#F8F8F8]/95 backdrop-blur-md overflow-hidden shadow-xl rounded-l-2xl">
              {steps.map((step, index) => (
                <SliderBtn
                  key={index}
                  value={step.sliderName}
                  className="text-left sm:py-6 py-4 px-4 sm:px-6 sm:border-b border-[#E0E0E0] sm:flex-1 hover:bg-[#F5F5F5] transition-colors flex flex-col justify-center"
                  progressBarClass="left-0 sm:top-0 bottom-0 bg-[#D4AF37] sm:w-1 sm:h-full h-1 before:h-full before:w-1"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-[#D4AF37]">
                      {React.cloneElement(step.icon, { className: "w-4 h-4" })}
                    </div>
                    <h3 className="text-base font-semibold text-[#333333]">
                      Step {index + 1}: {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#666666] line-clamp-2 pl-6">
                    {step.description}
                  </p>
                </SliderBtn>
              ))}
            </SliderBtnGroup>
            <SliderContent className="w-full flex-1">
              {steps.map((step, index) => (
                <SliderWrapper
                  className="h-full"
                  key={index}
                  value={step.sliderName}
                >
                  <div className="relative w-full h-[540px] bg-gradient-to-br from-[#F8F8F8] to-[#E0E0E0] rounded-r-2xl overflow-hidden shadow-xl flex items-center">
                    <div
                      className="relative w-full"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${step.videoId}?rel=0&modestbranding=1`}
                        title={step.title}
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </SliderWrapper>
              ))}
            </SliderContent>
          </ProgressSlider>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-12 py-5 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 transition-all hover:scale-105 text-[#333333]"
            style={{
              background:
                "linear-gradient(to bottom right, #F0E68C, #D4AF37, #FFD700, #D4AF37)",
            }}
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
