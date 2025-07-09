'use client';

import Image from 'next/image';

export default function TrustSection() {
  return (
    <section className='bg-white h-screen flex items-center sticky top-0 rounded-tr-[3rem] rounded-tl-[3rem] overflow-hidden z-40 relative'>
      {/* Decorative background */}
      <div className='absolute top-0 right-0 w-96 h-96 opacity-5'>
        <Image
          src='https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop'
          alt='Pattern'
          width={384}
          height={384}
          className='object-cover'
        />
      </div>
      <div className='absolute bottom-0 left-0 w-64 h-64 opacity-10'>
        <Image
          src='/images/bottle-1.webp'
          alt='Product'
          width={256}
          height={256}
          className='object-contain'
        />
      </div>
      
      <div className='max-w-6xl mx-auto px-8 py-10 relative z-10'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-light text-[#3D3D3D]'>
            Why Patients Trust
            <span className='block font-medium bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] bg-clip-text text-transparent'>
              Enhance.MD
            </span>
          </h2>
        </div>

        {/* Trust Indicators */}
        <div className='grid md:grid-cols-4 gap-4 mb-10'>
          <div className='text-center'>
            <div className='text-3xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent mb-1'>
              2,847+
            </div>
            <p className='text-sm text-[#6B6B6B]'>Happy Patients</p>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent mb-1'>
              4.9/5
            </div>
            <p className='text-sm text-[#6B6B6B]'>Average Rating</p>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent mb-1'>
              50+ lbs
            </div>
            <p className='text-sm text-[#6B6B6B]'>Average Weight Loss</p>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent mb-1'>
              100%
            </div>
            <p className='text-sm text-[#6B6B6B]'>Money-Back Guarantee</p>
          </div>
        </div>

        {/* Doctor Quote */}
        <div className='bg-gradient-to-br from-[#F5F0EC] to-white rounded-3xl p-6 mb-8 relative overflow-hidden'>
          {/* Background pattern */}
          <div className='absolute inset-0 opacity-5'>
            <Image
              src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop'
              alt='Medical pattern'
              fill
              className='object-cover'
            />
          </div>
          <div className='max-w-4xl mx-auto text-center relative z-10'>
            <svg className='w-10 h-10 text-[#B8860B] mx-auto mb-4' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
            </svg>
            <p className='text-lg md:text-xl text-[#6B6B6B] italic mb-4'>
              "Real progress in health and wellness comes when we treat the whole person—not just the symptoms. 
              By focusing on personalized care and addressing the root causes of your challenges, 
              I can help you achieve sustainable results."
            </p>
            <div className='flex items-center justify-center gap-3'>
              <div className='w-12 h-12 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&auto=format&fit=crop'
                  alt='Dr. Erik Stark'
                  width={48}
                  height={48}
                  className='object-cover'
                />
              </div>
              <div className='text-left'>
                <p className='font-semibold text-[#3D3D3D]'>Dr. Erik Stark</p>
                <p className='text-sm text-[#6B6B6B]'>Medical Director, Enhance.MD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials */}
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='bg-[#F5F0EC] rounded-2xl p-5'>
            <div className='flex items-center gap-1 mb-2'>
              {[...Array(5)].map((_, i) => (
                <span key={i} className='text-[#FFD700] text-sm'>★</span>
              ))}
            </div>
            <p className='text-sm text-[#6B6B6B] mb-3'>
              "I was skeptical about online weight loss programs, but Enhance.MD is different. 
              The lab work requirement made me feel safe, and the results speak for themselves. 
              Down 55 lbs and counting!"
            </p>
            <p className='font-semibold text-sm text-[#3D3D3D]'>Lisa R., 45</p>
          </div>

          <div className='bg-[#F5F0EC] rounded-2xl p-5'>
            <div className='flex items-center gap-1 mb-2'>
              {[...Array(5)].map((_, i) => (
                <span key={i} className='text-[#FFD700] text-sm'>★</span>
              ))}
            </div>
            <p className='text-sm text-[#6B6B6B] mb-3'>
              "The price transparency was huge for me. No surprises, no increases as my dose went up. 
              Just consistent support and amazing results. Best decision I've made for my health."
            </p>
            <p className='font-semibold text-sm text-[#3D3D3D]'>David T., 52</p>
          </div>
        </div>

        {/* CTA */}
        <div className='text-center mt-8'>
          <p className='text-lg text-[#6B6B6B] mb-4'>
            Join thousands who've taken control of their weight
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <button className='bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] hover:from-[#DAA520] hover:to-[#B8860B] text-white font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl'>
              Start Your Journey
            </button>
            <button className='bg-white hover:bg-gray-50 text-[#3D3D3D] font-medium py-3 px-6 rounded-full text-lg transition-all border-2 border-[#EAEAEA]'>
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}