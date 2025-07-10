'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: "How is Enhance.MD different from other weight loss programs?",
    answer: "Unlike other programs, Enhance.MD is physician-led with real medical oversight. We require comprehensive lab work through Quest Diagnostics, provide personalized dosing, and include ongoing provider support. Our transparent pricing means no surprises as your dose increases."
  },
  {
    question: "What can I realistically expect to lose?",
    answer: "Our patients typically lose 15-20% of their body weight in the first 6 months. Most patients lose 30-70 lbs total, though results vary based on starting weight and adherence to the program."
  },
  {
    question: "Is this safe? What about side effects?",
    answer: "Safety is our top priority. That's why we require lab work and ongoing medical supervision. Common side effects like mild nausea usually resolve within weeks. Your provider will monitor you closely and adjust your treatment as needed."
  },
  {
    question: "What's included in the price?",
    answer: "Everything! Your monthly price includes: 4 weeks of medication, ongoing provider care, metabolic lab testing every 6 months, syringes and supplies, nutrition coaching, and platform access. No hidden fees."
  },
  {
    question: "Do I need insurance?",
    answer: "No insurance required! Our cash-pay model means transparent, affordable pricing for everyone. Plus, you can use HSA/FSA funds for payment."
  },
  {
    question: "How quickly will I see results?",
    answer: "Most patients start seeing weight loss within the first 2-4 weeks. The medication works by reducing appetite and cravings, so you'll likely notice feeling less hungry right away."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className='bg-gradient-to-br from-[#F5F0EC] via-white to-[#EAEAEA] h-screen flex items-center sticky top-0 rounded-tr-[3rem] rounded-tl-[3rem] overflow-hidden z-50 relative'>
      {/* Background pattern */}
      <div className='absolute inset-0 opacity-5'>
        <Image
          src='https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920&auto=format&fit=crop'
          alt='Medical background'
          fill
          className='object-cover'
        />
      </div>
      
      {/* Decorative elements */}
      <div className='absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full opacity-10 blur-3xl'></div>
      <div className='absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-full opacity-10 blur-3xl'></div>
      
      <div className='max-w-4xl mx-auto px-8 py-10 h-full overflow-y-auto relative z-10'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-light text-[#3D3D3D]'>
            Your Questions,
            <span className='block font-medium bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] bg-clip-text text-transparent'>
              Answered
            </span>
          </h2>
          <p className='text-lg text-[#6B6B6B] mt-3'>
            Everything you need to know about starting your transformation
          </p>
        </div>

        <div className='space-y-3'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all'
            >
              <button
                className='w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#F5F0EC] transition-colors'
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className='font-semibold text-base text-[#3D3D3D]'>{faq.question}</h3>
                <svg
                  className={`w-4 h-4 text-[#B8860B] transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </button>
              {openIndex === index && (
                <div className='px-5 pb-4'>
                  <p className='text-sm text-[#6B6B6B] leading-relaxed'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='bg-white rounded-3xl p-6 mt-8 text-center shadow-lg'>
          <h3 className='text-xl font-semibold text-[#3D3D3D] mb-3'>
            Still have questions?
          </h3>
          <p className='text-[#6B6B6B] mb-4'>
            Our team is here to help. Book a free consultation to discuss your specific situation.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <button className='bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] hover:from-[#DAA520] hover:to-[#B8860B] text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg'>
              Book Free Consultation
            </button>
            <button className='bg-white hover:bg-gray-50 text-[#3D3D3D] font-medium py-3 px-6 rounded-full transition-all border-2 border-[#EAEAEA]'>
              Call 1-888-299-5088
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}