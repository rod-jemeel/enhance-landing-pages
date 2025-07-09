'use client';

import Image from 'next/image';

export default function LuxuryShowcaseSection() {
  return (
    <section className='relative min-h-screen bg-[#F5F0EC] sticky top-0 z-25 overflow-hidden'>
      {/* Medical/pharmaceutical background */}
      <div className='absolute inset-0'>
        <Image
          src='https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920&auto=format&fit=crop'
          alt='Medical background'
          fill
          className='object-cover opacity-30'
        />
      </div>
      
      {/* Content overlay */}
      <div className='relative z-10 min-h-screen flex items-center'>
        <div className='w-full'>
          <div className='max-w-7xl mx-auto px-8 py-20'>
            <div className='grid lg:grid-cols-2 gap-16 items-center'>
              <div className='space-y-8'>
                <h2 className='text-5xl lg:text-6xl font-light text-[#3D3D3D]'>
                  Premium
                  <span className='block font-medium bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] bg-clip-text text-transparent'>
                    Medical Care
                  </span>
                </h2>
                <p className='text-xl text-[#6B6B6B] leading-relaxed'>
                  Both our Standard and Advanced formulas include comprehensive 
                  provider care, lab testing, and personalized support throughout 
                  your weight loss journey.
                </p>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center'>
                      <span className='text-white font-bold text-xl'>✓</span>
                    </div>
                    <div>
                      <h3 className='font-medium text-[#3D3D3D]'>Provider-Led Care</h3>
                      <p className='text-[#6B6B6B]'>Licensed healthcare professionals guide your journey</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center'>
                      <span className='text-white font-bold text-xl'>✓</span>
                    </div>
                    <div>
                      <h3 className='font-medium text-[#3D3D3D]'>Quality Medications</h3>
                      <p className='text-[#6B6B6B]'>FDA-regulated compounded formulas</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center'>
                      <span className='text-white font-bold text-xl'>✓</span>
                    </div>
                    <div>
                      <h3 className='font-medium text-[#3D3D3D]'>Comprehensive Support</h3>
                      <p className='text-[#6B6B6B]'>Lab testing, supplies, and wellness coaching included</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='relative'>
                <div className='grid grid-cols-2 gap-6'>
                  {/* Standard Formula */}
                  <div className='relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all'>
                    <Image
                      src='/images/bottle-2.webp'
                      alt='Standard Formula'
                      width={300}
                      height={400}
                      className='w-full h-auto'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                    <div className='absolute bottom-4 left-4 right-4'>
                      <p className='text-white text-xl font-light'>Standard Formula</p>
                      <p className='text-white/80 text-sm'>GLP-1 Technology</p>
                      <p className='text-[#FFD700] font-bold mt-1'>$212/mo</p>
                    </div>
                  </div>
                  
                  {/* Advanced Formula */}
                  <div className='relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all'>
                    <Image
                      src='/images/bottle-1.webp'
                      alt='Advanced Formula'
                      width={300}
                      height={400}
                      className='w-full h-auto'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                    <div className='absolute bottom-4 left-4 right-4'>
                      <p className='text-white text-xl font-light'>Advanced Formula</p>
                      <p className='text-white/80 text-sm'>GLP-1 + GIP Technology</p>
                      <p className='text-[#FFD700] font-bold mt-1'>$323/mo</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating accent image */}
                <div className='absolute -top-10 -right-10 w-32 h-32 animate-float'>
                  <Image
                    src='https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&auto=format&fit=crop'
                    alt='Medical supplies'
                    width={128}
                    height={128}
                    className='rounded-full opacity-50'
                  />
                </div>
                
                {/* Center badge */}
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] rounded-full p-4 shadow-2xl'>
                  <span className='text-white font-bold text-lg'>✓</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom image showcase */}
          <div className='mt-20'>
            <div className='grid grid-cols-3 gap-0'>
              <div className='relative h-64'>
                <Image
                  src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop'
                  alt='Medical consultation'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-[#B8860B]/30 to-transparent'></div>
              </div>
              <div className='relative h-64'>
                <Image
                  src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop'
                  alt='Laboratory testing'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-[#FFD700]/30 to-transparent'></div>
              </div>
              <div className='relative h-64'>
                <Image
                  src='https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop'
                  alt='Pharmaceutical care'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-[#DAA520]/30 to-transparent'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}