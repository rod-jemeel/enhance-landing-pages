'use client';

import Image from 'next/image';

export default function PricingSection() {
  return (
    <section className='bg-gradient-to-br from-[#FFFFFF] via-[#F5F0EC] to-[#EAEAEA] text-[#3D3D3D] flex items-center justify-center h-screen sticky top-0 rounded-tr-[3rem] rounded-tl-[3rem] overflow-hidden z-40 relative'>
      {/* Luxury background */}
      <div className='absolute inset-0'>
        <Image
          src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&auto=format&fit=crop'
          alt='Abstract luxury'
          fill
          className='object-cover opacity-10'
        />
      </div>
      
      {/* Floating elements */}
      <div className='absolute top-20 left-20'>
        <Image
          src='https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=800&auto=format&fit=crop'
          alt='Gold texture'
          width={300}
          height={300}
          className='opacity-20 rounded-full blur-sm'
        />
      </div>
      
      <div className='relative z-10 w-full max-w-6xl mx-auto px-8 py-6'>
        <div className='text-center space-y-4'>
          <div>
            <h2 className='text-3xl md:text-4xl font-light tracking-tight leading-[120%]'>
              Choose Your
              <br />
              <span className='font-medium bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] bg-clip-text text-transparent'>
                Transformation Plan
              </span>
            </h2>
            <p className='text-base text-[#6B6B6B] mt-2 max-w-3xl mx-auto'>
              Two powerful options, both with transparent pricing and comprehensive care.
            </p>
          </div>
          
          <div className='grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto'>
            {/* Standard Plan */}
            <div className='bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all'>
              <div className='bg-[#F5F0EC] p-5 relative overflow-hidden'>
                {/* Product Image */}
                <div className='absolute -right-8 -top-8 w-40 h-40 opacity-30'>
                  <Image
                    src='/images/bottle-2.webp'
                    alt='Standard Formula'
                    width={160}
                    height={160}
                    className='object-contain rotate-12'
                  />
                </div>
                <div className='flex items-center justify-center gap-3 mb-3'>
                  <span className='text-sm font-medium uppercase tracking-wider text-[#6B6B6B]'>Standard</span>
                </div>
                <h3 className='text-xl font-bold mb-2 text-[#3D3D3D]'>GLP-1℞</h3>
                <p className='text-[#6B6B6B] text-sm'>All doses</p>
                <div className='mt-6'>
                  <p className='text-base text-[#6B6B6B]'>starting at</p>
                  <p className='text-4xl font-bold text-[#3D3D3D]'>$212</p>
                  <p className='text-lg text-[#6B6B6B]'>/mo*</p>
                </div>
              </div>
              
              <div className='bg-white p-5'>
                <div className='space-y-3 mb-5'>
                  <h4 className='text-base font-bold text-[#3D3D3D] mb-3'>Everything Included:</h4>
                  <div className='grid gap-2'>
                    <div className='flex items-start gap-2'>
                      <div className='w-5 h-5 bg-[#3D3D3D] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5'>
                        <span className='text-white text-xs font-bold'>✓</span>
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>4 Weeks of Medication</p>
                        <p className='text-xs text-[#6B6B6B]'>GLP-1 compounded medication</p>
                      </div>
                    </div>
                    
                    <div className='flex items-start gap-2'>
                      <div className='w-5 h-5 bg-[#3D3D3D] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5'>
                        <span className='text-white text-xs font-bold'>✓</span>
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>Provider Care & Support</p>
                        <p className='text-xs text-[#6B6B6B]'>Personalized medical guidance</p>
                      </div>
                    </div>
                    
                    <div className='flex items-start gap-2'>
                      <div className='w-5 h-5 bg-[#3D3D3D] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5'>
                        <span className='text-white text-xs font-bold'>✓</span>
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>Lab Testing</p>
                        <p className='text-xs text-[#6B6B6B]'>Every 6 months</p>
                      </div>
                    </div>
                    
                    <div className='flex items-start gap-2'>
                      <div className='w-5 h-5 bg-[#3D3D3D] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5'>
                        <span className='text-white text-xs font-bold'>✓</span>
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>Supply Kit</p>
                        <p className='text-xs text-[#6B6B6B]'>Syringes & alcohol pads</p>
                      </div>
                    </div>
                    
                    <div className='flex items-start gap-2'>
                      <div className='w-5 h-5 bg-[#3D3D3D] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5'>
                        <span className='text-white text-xs font-bold'>✓</span>
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>Wellness Coaching</p>
                        <p className='text-xs text-[#6B6B6B]'>Nutrition guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className='w-full bg-[#3D3D3D] hover:bg-[#2D2D2D] text-white font-bold py-3 px-6 rounded-full text-base transition-all'>
                  Start Standard Program
                </button>
              </div>
            </div>
            
            {/* Advanced Plan */}
            <div className='bg-gradient-to-br from-[#B8860B] via-[#FFD700] to-[#DAA520] rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all'>
              <div className='bg-[#3D3D3D] p-5 text-white relative overflow-hidden'>
                {/* Product Image */}
                <div className='absolute -right-8 -top-8 w-40 h-40 opacity-30'>
                  <Image
                    src='/images/bottle-1.webp'
                    alt='Advanced Formula'
                    width={160}
                    height={160}
                    className='object-contain rotate-12'
                  />
                </div>
                <div className='flex items-center justify-center gap-3 mb-3'>
                  <span className='text-sm font-medium uppercase tracking-wider'>Advanced</span>
                  <div className='bg-white rounded-full px-3 py-1 text-xs font-bold text-[#3D3D3D]'>PREMIUM</div>
                </div>
                <h3 className='text-xl font-bold mb-2'>GLP-1 + GIP℞</h3>
                <p className='text-white text-sm'>All doses</p>
                <div className='mt-6'>
                  <p className='text-base text-white'>starting at</p>
                  <p className='text-4xl font-bold'>$323</p>
                  <p className='text-lg text-white'>/mo*</p>
                </div>
              </div>
              
              <div className='bg-white p-5'>
                <div className='space-y-3 mb-5'>
                  <h4 className='text-base font-bold text-[#3D3D3D] mb-3'>Everything Included:</h4>
                  <div className='grid gap-2'>
                    <div className='flex items-start gap-2'>
                      <div className='w-5 h-5 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5'>
                        <span className='text-white text-xs font-bold'>✓</span>
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>4 Weeks of Medication</p>
                        <p className='text-xs text-[#6B6B6B]'>GLP-1 + GIP dual-action formula</p>
                      </div>
                    </div>
                    
                    <div className='flex items-start gap-2'>
                      <div className='w-5 h-5 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5'>
                        <span className='text-white text-xs font-bold'>✓</span>
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>Premium Provider Care</p>
                        <p className='text-xs text-[#6B6B6B]'>Enhanced medical support</p>
                      </div>
                    </div>
                    
                    <div className='flex items-start gap-2'>
                      <div className='w-5 h-5 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5'>
                        <span className='text-white text-xs font-bold'>✓</span>
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>Metabolic Lab Testing</p>
                        <p className='text-xs text-[#6B6B6B]'>Comprehensive panels</p>
                      </div>
                    </div>
                    
                    <div className='flex items-start gap-2'>
                      <div className='w-5 h-5 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5'>
                        <span className='text-white text-xs font-bold'>✓</span>
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>Premium Supply Kit</p>
                        <p className='text-xs text-[#6B6B6B]'>Everything for administration</p>
                      </div>
                    </div>
                    
                    <div className='flex items-start gap-2'>
                      <div className='w-5 h-5 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5'>
                        <span className='text-white text-xs font-bold'>✓</span>
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>VIP Wellness Coaching</p>
                        <p className='text-xs text-[#6B6B6B]'>Priority support access</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className='w-full bg-[#3D3D3D] hover:bg-[#2D2D2D] text-white font-bold py-3 px-6 rounded-full text-base transition-all shadow-xl'>
                  Start Advanced Program
                </button>
              </div>
            </div>
          </div>
          
          <div className='mt-6 space-y-2 max-w-4xl mx-auto'>
            <p className='text-xs text-[#6B6B6B] text-center'>
              *Payable up front with a 12-month plan. Prescription products require an online consultation with a healthcare professional who will determine if a prescription is appropriate.
            </p>
            <p className='text-xs text-[#6B6B6B] text-center'>
              This is a compounded medication and is not FDA-approved. Its safety or effectiveness has not been verified by the FDA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}