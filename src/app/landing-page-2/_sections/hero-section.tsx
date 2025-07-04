'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative h-screen w-full bg-gradient-to-br from-[#F5F0EC] via-white to-[#EAEAEA] overflow-hidden'>
      {/* Background pattern */}
      <div className='absolute inset-0 opacity-5'>
        <Image
          src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&auto=format&fit=crop'
          alt='Pattern'
          fill
          className='object-cover'
        />
      </div>
      
      {/* Floating product bottles */}
      <div className='absolute top-20 right-20 w-48 h-48 animate-float opacity-20'>
        <Image
          src='/images/bottle-1.webp'
          alt='Advanced Formula'
          width={192}
          height={192}
          className='object-contain'
        />
      </div>
      <div className='absolute bottom-20 left-20 w-48 h-48 animate-float-delayed opacity-20'>
        <Image
          src='/images/bottle-2.webp'
          alt='Standard Formula'
          width={192}
          height={192}
          className='object-contain'
        />
      </div>

      {/* Content */}
      <div className='relative z-10 h-full flex items-center justify-center'>
        <div className='max-w-6xl mx-auto px-8 text-center'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white rounded-full px-6 py-2 mb-6'>
            <span className='w-2 h-2 bg-white rounded-full animate-pulse'></span>
            <span className='font-medium text-sm uppercase tracking-wider'>Provider-Led Program</span>
          </div>
          
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-light text-[#3D3D3D] mb-6 leading-tight'>
            Finally, a Weight Loss Solution
            <span className='block font-medium bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] bg-clip-text text-transparent'>
              That Actually Works
            </span>
          </h1>
          
          <p className='text-xl md:text-2xl text-[#6B6B6B] mb-8 max-w-3xl mx-auto'>
            Join thousands who've lost 30-70 lbs with our physician-led GLP-1 program. 
            No more failed diets. Just real, lasting results.
          </p>
          
          <div className='grid md:grid-cols-3 gap-4 text-[#3D3D3D] mb-8 max-w-3xl mx-auto'>
            <div className='bg-white rounded-2xl p-4 shadow-sm'>
              <p className='text-3xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent'>97%</p>
              <p className='text-sm text-[#6B6B6B]'>Success Rate</p>
            </div>
            <div className='bg-white rounded-2xl p-4 shadow-sm'>
              <p className='text-3xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent'>$212</p>
              <p className='text-sm text-[#6B6B6B]'>Starting Price</p>
            </div>
            <div className='bg-white rounded-2xl p-4 shadow-sm'>
              <p className='text-3xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent'>100%</p>
              <p className='text-sm text-[#6B6B6B]'>Money Back</p>
            </div>
          </div>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] hover:from-[#DAA520] hover:to-[#B8860B] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl'>
              Start Your Transformation
            </button>
            <button className='bg-white hover:bg-gray-50 text-[#3D3D3D] font-medium py-4 px-8 rounded-full text-lg transition-all border-2 border-[#EAEAEA]'>
              Book Free Consultation
            </button>
          </div>
          
          <p className='text-sm text-[#6B6B6B] mt-6'>
            ⚡ Limited spots available • No insurance required
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent'></div>
      
      {/* Scroll Indicator */}
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 text-center'>
        <svg className='w-6 h-6 mx-auto text-[#B8860B] animate-bounce' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </div>
    </section>
  );
}