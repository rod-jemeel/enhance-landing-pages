'use client';

import Image from 'next/image';

export default function FinalCTASection() {
  return (
    <section className='bg-gradient-to-br from-[#B8860B] via-[#FFD700] to-[#DAA520] text-white h-screen flex items-center sticky top-0 rounded-tr-[3rem] rounded-tl-[3rem] overflow-hidden z-60 relative'>
      {/* Texture overlay */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-black/10'></div>
        <Image
          src='https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=1920&auto=format&fit=crop'
          alt='Gold texture'
          fill
          className='object-cover opacity-20 mix-blend-overlay'
        />
      </div>
      
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl'></div>
      </div>
      
      {/* Floating products */}
      <div className='absolute top-10 left-10 w-32 h-32 opacity-20 animate-float'>
        <Image
          src='/images/bottle-1.webp'
          alt='Product'
          width={128}
          height={128}
          className='object-contain'
        />
      </div>
      <div className='absolute bottom-10 right-10 w-32 h-32 opacity-20 animate-float-delayed'>
        <Image
          src='/images/bottle-2.webp'
          alt='Product'
          width={128}
          height={128}
          className='object-contain'
        />
      </div>
      
      <div className='relative z-10 max-w-4xl mx-auto px-8 text-center'>
        <div className='space-y-6'>
          <div className='space-y-4'>
            <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-6 py-2'>
              <span className='w-2 h-2 bg-white rounded-full animate-pulse'></span>
              <span className='font-medium uppercase tracking-wider text-sm'>Limited Time Offer</span>
            </div>
            
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight'>
              Your New Life
              <br />
              <span className='font-medium'>
                Starts Today
              </span>
            </h2>
            
            <p className='text-xl max-w-3xl mx-auto text-white/90'>
              Join 2,847+ patients who've already transformed their bodies and their lives. 
              Don't let another year pass wishing you'd started sooner.
            </p>
          </div>
          
          <div className='bg-white/10 backdrop-blur rounded-3xl p-6 max-w-2xl mx-auto border border-white/20'>
            <h3 className='text-2xl font-semibold mb-4'>Special Offer: Save $100</h3>
            
            <div className='space-y-4'>
              <div className='bg-white/10 rounded-2xl p-3'>
                <p className='text-base mb-1'>Use code <span className='font-bold text-xl'>SUMMER100</span> at checkout</p>
                <p className='text-sm text-white/80'>Valid for new patients only • Expires soon</p>
              </div>
              
              <div className='grid md:grid-cols-2 gap-3 text-left'>
                <div className='bg-white rounded-2xl p-4 text-[#3D3D3D]'>
                  <h4 className='font-semibold text-base mb-1'>Standard GLP-1</h4>
                  <p className='text-2xl font-bold mb-1'>$212/mo</p>
                  <p className='text-xs text-[#6B6B6B] line-through'>Regular $312/mo</p>
                  <ul className='mt-2 space-y-0.5 text-xs text-[#6B6B6B]'>
                    <li>• Proven GLP-1 medication</li>
                    <li>• Provider support</li>
                    <li>• Lab testing included</li>
                  </ul>
                </div>
                
                <div className='bg-gradient-to-br from-white to-[#F5F0EC] rounded-2xl p-4 text-[#3D3D3D] border-2 border-white'>
                  <div className='flex items-center gap-2 mb-1'>
                    <h4 className='font-semibold text-base'>Advanced GLP-1 + GIP</h4>
                    <span className='bg-[#FFD700] text-[#3D3D3D] text-xs font-bold px-2 py-0.5 rounded-full'>POPULAR</span>
                  </div>
                  <p className='text-2xl font-bold mb-1'>$323/mo</p>
                  <p className='text-xs text-[#6B6B6B] line-through'>Regular $423/mo</p>
                  <ul className='mt-2 space-y-0.5 text-xs text-[#6B6B6B]'>
                    <li>• Dual-action formula</li>
                    <li>• Enhanced support</li>
                    <li>• Faster results</li>
                  </ul>
                </div>
              </div>
              
              <button className='w-full bg-white text-[#3D3D3D] font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-xl'>
                Claim Your $100 Discount
              </button>
              
              <div className='flex items-center justify-center gap-4 text-xs'>
                <div className='flex items-center gap-1'>
                  <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span>No Insurance Required</span>
                </div>
                <div className='flex items-center gap-1'>
                  <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span>100% Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className='space-y-3'>
            <div className='flex items-center justify-center gap-4'>
              <div className='flex -space-x-2'>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className='relative w-9 h-9 rounded-full border-2 border-white overflow-hidden'>
                    <Image
                      src={`https://images.unsplash.com/photo-${['1580489944761-15a19d654956', '1544005313-94ddf0286df2', '1607746882042-944635dfe10e', '1594744803329-e58b31de8bf5', '1438761681033-6461ffad8d80'][i]}?w=100&auto=format&fit=crop`}
                      alt='Patient'
                      fill
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className='flex gap-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className='text-white text-base'>★</span>
                  ))}
                </div>
                <p className='text-xs text-white/90'>2,847 patients have transformed their lives</p>
              </div>
            </div>
            
            <p className='text-white/80 text-xs'>
              This offer expires in 48 hours • Only 23 spots remaining at this price
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}