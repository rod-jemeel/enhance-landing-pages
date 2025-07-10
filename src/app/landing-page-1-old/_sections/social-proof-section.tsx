"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    rating: 5,
    text: "Lost 45 lbs in 5 months. The provider support made all the difference.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Michael R.",
    location: "Denver, CO",
    rating: 5,
    text: "Finally found something that works. Down 38 lbs and feeling incredible.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Jessica L.",
    location: "Miami, FL",
    rating: 5,
    text: "The all-inclusive plan made it so easy. 52 lbs gone and still going!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "David K.",
    location: "Seattle, WA",
    rating: 5,
    text: "Professional medical care at every step. Lost 41 lbs in 4 months.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Emma T.",
    location: "Phoenix, AZ",
    rating: 5,
    text: "Life-changing results. The medication really works - 36 lbs down!",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
  },
  {
    name: "Robert J.",
    location: "Chicago, IL",
    rating: 5,
    text: "Excellent provider care and real results. Lost 44 lbs so far.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const TestimonialCard = ({ name, location, rating, text, avatar }: any) => {
  return (
    <div className="relative w-[280px] sm:w-[320px] mx-3">
      <div className="bg-[#f8f7f5] rounded-xl p-4 sm:p-5">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="text-sm font-medium text-gray-900">{name}</h4>
            <p className="text-xs text-gray-500">{location}</p>
          </div>
        </div>
        <div className="flex gap-0.5 mb-2">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default function SocialProofSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-2" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Real People, Real Results
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
            Join thousands who have transformed their lives with our physician-led program.
          </p>
        </div>
      </div>

      {/* Marquee - Ultra Thin */}
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:40s]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
          {testimonials.reverse().map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        
        {/* Fade edges - Minimal */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* Stats - Ultra Minimal */}
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-8 px-4 sm:px-6">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-light text-gray-900">15-20%</div>
          <div className="text-xs text-gray-600">Average Weight Loss</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-light text-gray-900">10,000+</div>
          <div className="text-xs text-gray-600">Success Stories</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-light text-gray-900">4.9/5</div>
          <div className="text-xs text-gray-600">Patient Rating</div>
        </div>
      </div>
    </section>
  );
}