'use client';

import Image from 'next/image';

export default function ScienceSection() {
  return (
    <section className='text-[#3D3D3D] h-screen w-full bg-gradient-to-br from-white via-[#F5F0EC] to-[#EAEAEA] grid place-content-center sticky top-0 z-20 relative'>
      {/* Luxury background pattern */}
      <div className='absolute inset-0'>
        <Image
          src='https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&auto=format&fit=crop'
          alt='Luxury pattern'
          fill
          className='object-cover opacity-5'
        />
      </div>
      
      {/* Decorative bottles */}
      <div className='absolute top-10 right-10 w-48 h-48 opacity-30'>
        <Image
          src='/images/bottle-1.webp'
          alt='Product'
          width={192}
          height={192}
        />
      </div>
      <div className='absolute bottom-10 left-10 w-48 h-48 opacity-30'>
        <Image
          src='/images/bottle-2.webp'
          alt='Product'
          width={192}
          height={192}
        />
      </div>
      
      <div className='relative z-10 max-w-7xl mx-auto px-8'>
        <div className='text-center space-y-12'>
          <h2 className='2xl:text-6xl text-4xl font-light tracking-tight leading-[120%]'>
            The Science Behind
            <br />
            <span className='font-medium bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] bg-clip-text text-transparent'>
              Our Formulas
            </span>
          </h2>
          
          <div className='grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-8'>
            <div className='space-y-6'>
              <h3 className='text-2xl font-medium text-[#3D3D3D]'>Standard GLP-1 Formula</h3>
              <div className='bg-white border border-[#D4C8BC] rounded-2xl p-6 space-y-4'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold'>✓</span>
                  </div>
                  <div>
                    <h4 className='font-medium text-[#3D3D3D]'>GLP-1 Activation</h4>
                    <p className='text-[#6B6B6B] text-sm'>Reduces appetite and slows gastric emptying</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold'>✓</span>
                  </div>
                  <div>
                    <h4 className='font-medium text-[#3D3D3D]'>Proven Effectiveness</h4>
                    <p className='text-[#6B6B6B] text-sm'>Trusted by thousands for weight management</p>
                  </div>
                </div>
                <div className='pt-4 border-t border-[#EAEAEA]'>
                  <p className='text-2xl font-bold text-[#3D3D3D]'>$212<span className='text-base font-normal'>/mo</span></p>
                </div>
              </div>
            </div>
            
            <div className='space-y-6'>
              <h3 className='text-2xl font-medium text-[#3D3D3D]'>Advanced GLP-1 + GIP Formula</h3>
              <div className='bg-gradient-to-br from-[#B8860B]/10 to-[#DAA520]/10 border border-[#B8860B]/20 rounded-2xl p-6 space-y-4'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold'>✓</span>
                  </div>
                  <div>
                    <h4 className='font-medium text-[#3D3D3D]'>Dual-Action Technology</h4>
                    <p className='text-[#6B6B6B] text-sm'>GLP-1 + GIP for enhanced results</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold'>✓</span>
                  </div>
                  <div>
                    <h4 className='font-medium text-[#3D3D3D]'>Metabolic Enhancement</h4>
                    <p className='text-[#6B6B6B] text-sm'>Improves insulin sensitivity and fat metabolism</p>
                  </div>
                </div>
                <div className='pt-4 border-t border-[#B8860B]/20'>
                  <p className='text-2xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent'>$323<span className='text-base font-normal'>/mo</span></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='bg-white border border-[#D4C8BC] rounded-3xl p-8 max-w-4xl mx-auto shadow-sm'>
            <h3 className='text-2xl font-medium mb-6 text-[#3D3D3D]'>Both Formulas Include</h3>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='text-center'>
                <p className='text-4xl font-medium bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent'>Provider</p>
                <p className='text-sm text-[#6B6B6B] mt-2'>Led Program</p>
              </div>
              <div className='text-center'>
                <p className='text-4xl font-medium bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent'>All Doses</p>
                <p className='text-sm text-[#6B6B6B] mt-2'>Same Price</p>
              </div>
              <div className='text-center'>
                <p className='text-4xl font-medium bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent'>100%</p>
                <p className='text-sm text-[#6B6B6B] mt-2'>Money-Back Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}