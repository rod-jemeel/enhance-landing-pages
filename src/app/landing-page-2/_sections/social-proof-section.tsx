"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/custom-button";

const testimonials = [
  {
    name: "Sarah Mitchell",
    body: "Lost 42 pounds in 4 months. The medical supervision made all the difference. This program changed my life.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&fit=crop",
  },
  {
    name: "Dr. Michael Chen",
    body: "As a physician myself, I was impressed by the comprehensive approach. Down 38 pounds and feeling great.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&fit=crop",
  },
  {
    name: "Jennifer Rodriguez",
    body: "My A1C dropped from 8.2 to 5.6. The medication and physician guidance helped me reverse my prediabetes.",
    img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=200&h=200&fit=crop",
  },
  {
    name: "Robert Thompson",
    body: "60 pounds down and maintaining for 8 months. The direct physician access made me feel safe throughout.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop",
  },
  {
    name: "Amanda Foster",
    body: "The convenience of home delivery and telehealth fits my busy schedule. Down 35 pounds and feeling incredible.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&fit=crop",
  },
  {
    name: "Marcus Johnson",
    body: "After years of yo-yo dieting, I finally found a solution. 52 pounds gone and my energy is through the roof.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
  },
];

const secondRow = [
  {
    name: "Dr. Patricia Lee",
    body: "The lab work showed exactly what my body needed. My metabolic health has completely transformed.",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=200&h=200&fit=crop",
  },
  {
    name: "David Chen",
    body: "As a busy executive, this program fit my lifestyle perfectly. 44 pounds down and reclaimed my life.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&h=200&fit=crop",
  },
  {
    name: "Rebecca Martinez",
    body: "The science-based approach sold me. Blood pressure normalized, lost 56 pounds. Real medicine, real results.",
    img: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=200&h=200&fit=crop",
  },
  {
    name: "Lisa Chen",
    body: "I spent a decade fighting my body. After 3 months, I realized it was never a fair fight. 47 pounds gone!",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop",
  },
  {
    name: "Andrew Park",
    body: "The ongoing medical oversight sets this apart. Lost 45 pounds and my labs have never looked better.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop",
  },
  {
    name: "Marina Lopez",
    body: "Simple, effective, life-changing. The personalized dosing was perfect. 41 pounds down in 5 months!",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=200&h=200&fit=crop",
  },
];

function TestimonialCard({ img, name, body }: { img: string; name: string; body: string }) {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
      )}
      style={{ 
        backgroundColor: '#f1f0ed',
        borderColor: '#67645e20'
      }}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium" style={{ fontFamily: "Nouvelle Grotesk", color: '#67645e' }}>
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm" style={{ color: '#67645e' }}>{body}</blockquote>
    </figure>
  );
}

import { cn } from "@/lib/utils";

export default function SocialProofSection() {
  return (
    <section className="py-12 sm:py-16 px-6 sm:px-8 md:px-16 lg:px-20">
      <div className="flex flex-col sm:flex-row items-start justify-between mb-8 sm:mb-12 gap-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 md:text-4xl mb-3 sm:mb-4" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Real People. Real Science. Real Results.
          </h2>
          <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Join over 10,000 patients who've reclaimed their health through our physician-led GLP-1 program. 
            These aren't just success stories—they're proof that medical weight loss works when done right.
          </p>
        </div>
        <Button variant="default" className="w-full sm:w-auto sm:ml-8">
          Read Success Stories
        </Button>
      </div>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
      </div>
    </section>
  );
}