'use client';

import Image from 'next/image';

export default function HowItWorksSection() {
  return (
    <section className='bg-gradient-to-br from-[#F5F0EC] via-white to-[#EAEAEA] h-screen flex items-center sticky top-0 rounded-tr-[3rem] rounded-tl-[3rem] overflow-hidden z-20 relative'>
      {/* Background medical imagery */}
      <div className='absolute inset-0 opacity-5'>
        <Image
          src='https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&auto=format&fit=crop'
          alt='Medical background'
          fill
          className='object-cover'
        />
      </div>
      
      {/* Decorative bottles */}
      <div className='absolute top-10 right-10 w-32 h-32 opacity-10'>
        <Image
          src='/images/bottle-1.webp'
          alt='Product'
          width={128}
          height={128}
        />
      </div>
      
      <div className='max-w-6xl mx-auto px-8 py-8 relative z-10'>
        <div className='text-center mb-6'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-light text-[#3D3D3D]'>
            Start Losing Weight in
            <span className='block font-medium bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] bg-clip-text text-transparent'>
              4 Simple Steps
            </span>
          </h2>
          <p className='text-lg text-[#6B6B6B] mt-3'>
            No insurance required • No hidden fees • 100% online
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
          {/* Step 1 */}
          <div className='bg-white rounded-2xl p-4 relative group hover:shadow-xl transition-all'>
            <div className='absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-lg'>
              1
            </div>
            <div className='mt-4'>
              <h3 className='font-semibold text-lg mb-2 text-[#3D3D3D]'>Quick Online Form</h3>
              <p className='text-sm text-[#6B6B6B]'>
                Complete our 5-minute medical intake form. Share your health history and goals.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className='bg-white rounded-2xl p-4 relative group hover:shadow-xl transition-all'>
            <div className='absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-lg'>
              2
            </div>
            <div className='mt-4'>
              <h3 className='font-semibold text-lg mb-2 text-[#3D3D3D]'>Provider Consultation</h3>
              <p className='text-sm text-[#6B6B6B]'>
                Meet with licensed physicians who specialize in weight loss. Get your personalized plan.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className='bg-white rounded-2xl p-4 relative group hover:shadow-xl transition-all'>
            <div className='absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-lg'>
              3
            </div>
            <div className='mt-4'>
              <h3 className='font-semibold text-lg mb-2 text-[#3D3D3D]'>Get Your Medication</h3>
              <p className='text-sm text-[#6B6B6B]'>
                Receive GLP-1 medication directly to your door. Everything you need included.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className='bg-white rounded-2xl p-4 relative group hover:shadow-xl transition-all'>
            <div className='absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-lg'>
              4
            </div>
            <div className='mt-4'>
              <h3 className='font-semibold text-lg mb-2 text-[#3D3D3D]'>Ongoing Support</h3>
              <p className='text-sm text-[#6B6B6B]'>
                Regular check-ins, dose adjustments, and 24/7 support for your success.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-3xl p-6 shadow-lg'>
          <div className='grid md:grid-cols-2 gap-6 items-center'>
            <div>
              <h3 className='text-xl font-semibold text-[#3D3D3D] mb-3'>
                Why Our Program Works
              </h3>
              <ul className='space-y-2'>
                <li className='flex items-start gap-2'>
                  <div className='w-5 h-5 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <span className='text-white text-xs'>✓</span>
                  </div>
                  <p className='text-sm text-[#6B6B6B]'>
                    <span className='font-semibold text-[#3D3D3D]'>Provider-Led:</span> Real doctors, not just an app
                  </p>
                </li>
                <li className='flex items-start gap-2'>
                  <div className='w-5 h-5 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <span className='text-white text-xs'>✓</span>
                  </div>
                  <p className='text-sm text-[#6B6B6B]'>
                    <span className='font-semibold text-[#3D3D3D]'>Lab Testing:</span> Quest Diagnostics monitoring
                  </p>
                </li>
                <li className='flex items-start gap-2'>
                  <div className='w-5 h-5 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <span className='text-white text-xs'>✓</span>
                  </div>
                  <p className='text-sm text-[#6B6B6B]'>
                    <span className='font-semibold text-[#3D3D3D]'>Personalized:</span> Doses adjusted to your progress
                  </p>
                </li>
                <li className='flex items-start gap-2'>
                  <div className='w-5 h-5 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <span className='text-white text-xs'>✓</span>
                  </div>
                  <p className='text-sm text-[#6B6B6B]'>
                    <span className='font-semibold text-[#3D3D3D]'>Complete Support:</span> Nutrition & wellness coaching
                  </p>
                </li>
              </ul>
            </div>
            <div className='bg-gradient-to-br from-[#B8860B]/10 to-[#DAA520]/10 rounded-2xl p-6 text-center relative overflow-hidden'>
              {/* Background image */}
              <div className='absolute inset-0 opacity-10'>
                <Image
                  src='https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop'
                  alt='Success background'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='relative z-10'>
                <p className='text-4xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent mb-1'>97%</p>
                <p className='text-lg font-semibold text-[#3D3D3D] mb-3'>Success Rate</p>
                <p className='text-sm text-[#6B6B6B] mb-4'>
                  Patients lose 15-20% body weight in 6 months
                </p>
                <button className='bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] hover:from-[#DAA520] hover:to-[#B8860B] text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg'>
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}