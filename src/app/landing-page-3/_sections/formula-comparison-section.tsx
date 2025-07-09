'use client';

import Image from 'next/image';

export default function FormulaComparisonSection() {
  return (
    <section className='text-[#3D3D3D] h-screen w-full bg-gradient-to-br from-[#F5F0EC] to-white flex items-center justify-center sticky top-0 rounded-tr-[3rem] rounded-tl-[3rem] overflow-hidden z-10'>
      {/* Background image */}
      <div className='absolute inset-0 opacity-10'>
        <Image
          src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&auto=format&fit=crop'
          alt='Medical background'
          fill
          className='object-cover'
        />
      </div>
      <div className='relative z-10 max-w-7xl w-full mx-auto px-8 py-10'>
        <div className='text-center mb-8'>
          <h2 className='2xl:text-7xl text-5xl font-light tracking-tight leading-[110%]'>
            Choose Your
            <span className='block font-medium bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] bg-clip-text text-transparent'>
              Perfect Formula
            </span>
          </h2>
          <p className='text-lg text-[#6B6B6B] mt-4 max-w-3xl mx-auto'>
            Two powerful options for your weight loss journey. Both include full provider support, 
            consistent pricing at all doses, and our comprehensive care program.
          </p>
        </div>
        
        <div className='grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto'>
          {/* Standard Formula */}
          <div className='bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105'>
            <div className='text-center mb-6'>
              <h3 className='text-2xl font-medium mb-2 text-[#3D3D3D]'>Standard Formula</h3>
              <div className='inline-block bg-[#F5F0EC] rounded-full px-4 py-1 text-sm font-medium text-[#6B6B6B]'>
                GLP-1 Technology
              </div>
            </div>
            
            <div className='relative h-48 mb-4 rounded-2xl overflow-hidden'>
              <Image
                src='/images/bottle-2.webp'
                alt='Standard Formula'
                fill
                className='object-contain'
              />
            </div>
            
            <div className='space-y-3 mb-4'>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 bg-[#B8860B] rounded-full'></div>
                <span className='text-[#6B6B6B] text-sm'>Proven GLP-1 medication</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 bg-[#B8860B] rounded-full'></div>
                <span className='text-[#6B6B6B] text-sm'>Effective appetite control</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 bg-[#B8860B] rounded-full'></div>
                <span className='text-[#6B6B6B] text-sm'>Trusted by thousands</span>
              </div>
            </div>
            
            <div className='text-center'>
              <p className='text-sm text-[#6B6B6B]'>Starting at</p>
              <p className='text-3xl font-bold text-[#3D3D3D]'>$212<span className='text-lg font-normal'>/mo</span></p>
            </div>
          </div>
          
          {/* Advanced Formula */}
          <div className='bg-gradient-to-br from-[#B8860B]/10 to-[#DAA520]/10 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-[#B8860B]/20'>
            <div className='text-center mb-6'>
              <h3 className='text-2xl font-medium mb-2 text-[#3D3D3D]'>Advanced Formula</h3>
              <div className='inline-block bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full px-4 py-1 text-sm font-medium text-white'>
                GLP-1 + GIP Technology
              </div>
            </div>
            
            <div className='relative h-48 mb-4 rounded-2xl overflow-hidden'>
              <Image
                src='/images/bottle-1.webp'
                alt='Advanced Formula'
                fill
                className='object-contain'
              />
            </div>
            
            <div className='space-y-3 mb-4'>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 bg-[#B8860B] rounded-full'></div>
                <span className='text-[#6B6B6B] text-sm'>Dual-action technology</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 bg-[#B8860B] rounded-full'></div>
                <span className='text-[#6B6B6B] text-sm'>Enhanced metabolic support</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 bg-[#B8860B] rounded-full'></div>
                <span className='text-[#6B6B6B] text-sm'>Premium care experience</span>
              </div>
            </div>
            
            <div className='text-center'>
              <p className='text-sm text-[#6B6B6B]'>Starting at</p>
              <p className='text-3xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent'>$323<span className='text-lg font-normal'>/mo</span></p>
            </div>
          </div>
        </div>
        
        <div className='text-center mt-8 pb-4'>
          <p className='text-[#6B6B6B] mb-4'>Both formulas include:</p>
          <div className='flex flex-wrap justify-center gap-6'>
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5 text-[#B8860B]' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
              </svg>
              <span className='text-sm'>Provider Care</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5 text-[#B8860B]' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
              </svg>
              <span className='text-sm'>Lab Testing</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5 text-[#B8860B]' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
              </svg>
              <span className='text-sm'>Supply Kit</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5 text-[#B8860B]' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
              </svg>
              <span className='text-sm'>Wellness Coaching</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}