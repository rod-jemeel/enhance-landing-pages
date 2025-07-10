'use client';

import Image from 'next/image';

export default function ResultsSection() {
  return (
    <section className='text-[#3D3D3D] w-full bg-[#F5F0EC] min-h-screen sticky top-0 rounded-tr-[3rem] rounded-tl-[3rem] overflow-hidden z-30'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='sticky top-0 h-screen flex items-center justify-center p-8'>
          <div className='max-w-xl space-y-8'>
            <h2 className='2xl:text-6xl text-4xl font-light tracking-tight leading-[120%]'>
              Real People.
              <br />
              <span className='font-medium bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] bg-clip-text text-transparent'>
                Real Results.
              </span>
            </h2>
            <p className='text-xl text-[#6B6B6B]'>
              Our provider-led program offers personalized care with both Standard GLP-1 and Advanced GLP-1 + GIP formulas. 
              Experience consistent pricing and comprehensive support with either option.
            </p>
            <div className='bg-white border border-[#D4C8BC] rounded-2xl p-6 shadow-sm'>
              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <p className='text-3xl font-medium bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent'>Provider</p>
                  <p className='text-sm text-[#6B6B6B]'>Personalized Care</p>
                </div>
                <div>
                  <p className='text-3xl font-medium bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent'>100%</p>
                  <p className='text-sm text-[#6B6B6B]'>Money-Back Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='grid gap-8 p-8'>
          <figure className='grid place-content-center'>
            <div className='bg-gradient-to-br from-[#F5F0EC] to-white rounded-2xl p-8 border border-[#D4C8BC] transform -skew-x-6 hover:skew-x-0 transition-all duration-300 shadow-lg'>
              <div className='bg-white rounded-xl p-6'>
                <p className='text-2xl font-medium mb-2 text-[#3D3D3D]'>Sarah M. - Lost 68 lbs</p>
                <div className='flex gap-4 mb-4'>
                  <Image
                    src='https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&auto=format&fit=crop'
                    alt='Sarah'
                    width={80}
                    height={80}
                    className='rounded-full object-cover'
                  />
                  <div>
                    <p className='text-[#6B6B6B] italic'>
                      "The GLP-1 + GIP formula was perfect for my needs. The weight came off consistently 
                      and I felt supported throughout my entire journey with the provider care team."
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-2 mt-4'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className='text-[#FFD700]'>★</span>
                  ))}
                </div>
              </div>
            </div>
          </figure>
          
          <figure className='grid place-content-center'>
            <div className='bg-gradient-to-br from-white to-[#F5F0EC] rounded-2xl p-8 border border-[#D4C8BC] transform skew-x-6 hover:skew-x-0 transition-all duration-300 shadow-lg'>
              <div className='bg-white rounded-xl p-6'>
                <p className='text-2xl font-medium mb-2 text-[#3D3D3D]'>Michael T. - Lost 45 lbs</p>
                <p className='text-[#6B6B6B] italic'>
                  "I chose the Standard GLP-1 formula and couldn't be happier. The consistent pricing 
                  and provider support made my weight loss journey smooth and sustainable."
                </p>
                <div className='flex items-center gap-2 mt-4'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className='text-[#FFD700]'>★</span>
                  ))}
                </div>
              </div>
            </div>
          </figure>
          
          <figure className='grid place-content-center'>
            <div className='bg-gradient-to-br from-[#F5F0EC] to-white rounded-2xl p-8 border border-[#D4C8BC] transform -skew-x-6 hover:skew-x-0 transition-all duration-300 shadow-lg'>
              <div className='bg-white rounded-xl p-6'>
                <p className='text-2xl font-medium mb-2 text-[#3D3D3D]'>Jennifer K. - Lost 72 lbs</p>
                <p className='text-[#6B6B6B] italic'>
                  "The dual-action GLP-1 + GIP formula worked wonderfully for me. 
                  The comprehensive approach with provider care truly changed my life."
                </p>
                <div className='flex items-center gap-2 mt-4'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className='text-[#FFD700]'>★</span>
                  ))}
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}