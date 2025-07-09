'use client';

import Image from 'next/image';

export default function TransformationSection() {
  return (
    <section className='bg-white text-[#3D3D3D] h-screen flex items-center sticky top-0 rounded-tr-[3rem] rounded-tl-[3rem] overflow-hidden z-10 relative'>
      {/* Background imagery */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&auto=format&fit=crop'
            alt='Transformation background'
            fill
            className='object-cover opacity-3'
          />
        </div>
      </div>
      
      {/* Floating elements */}
      <div className='absolute top-10 left-10 w-48 h-48 opacity-10'>
        <Image
          src='/images/bottle-2.webp'
          alt='Product'
          width={192}
          height={192}
          className='object-contain animate-float'
        />
      </div>
      <div className='absolute bottom-10 right-10 w-48 h-48 opacity-10'>
        <Image
          src='/images/bottle-1.webp'
          alt='Product'
          width={192}
          height={192}
          className='object-contain animate-float-delayed'
        />
      </div>
      
      <div className='max-w-7xl mx-auto px-8 py-12 h-full overflow-y-auto relative z-10'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-light'>
            Real People.
            <span className='block font-medium bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] bg-clip-text text-transparent'>
              Real Transformations.
            </span>
          </h2>
          <p className='text-lg text-[#6B6B6B] mt-3 max-w-3xl mx-auto'>
            These aren't paid models. They're real Enhance.MD patients who transformed their lives.
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Transformation 1 */}
          <div className='bg-[#F5F0EC] rounded-3xl overflow-hidden group hover:shadow-2xl transition-all'>
            <div className='relative h-64 overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop'
                alt='Sarah transformation'
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
              <div className='absolute bottom-4 left-4 text-white'>
                <p className='text-2xl font-bold'>-68 lbs</p>
                <p className='text-sm'>in 8 months</p>
              </div>
            </div>
            <div className='p-4'>
              <p className='font-semibold text-lg mb-2'>Sarah M., 42</p>
              <p className='text-[#6B6B6B] mb-4'>
                "I tried everything - keto, intermittent fasting, you name it. Nothing worked until Enhance.MD. 
                The weight just melted off, and I finally feel like myself again."
              </p>
              <div className='flex items-center gap-1'>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className='text-[#FFD700]'>★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Transformation 2 */}
          <div className='bg-[#F5F0EC] rounded-3xl overflow-hidden group hover:shadow-2xl transition-all'>
            <div className='relative h-64 overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop'
                alt='Jennifer transformation'
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
              <div className='absolute bottom-4 left-4 text-white'>
                <p className='text-2xl font-bold'>-52 lbs</p>
                <p className='text-sm'>in 6 months</p>
              </div>
            </div>
            <div className='p-4'>
              <p className='font-semibold text-lg mb-2'>Jennifer K., 38</p>
              <p className='text-[#6B6B6B] mb-4'>
                "After my second baby, I couldn't lose the weight. My doctor recommended Enhance.MD and 
                it changed everything. I'm wearing sizes I haven't worn in 10 years!"
              </p>
              <div className='flex items-center gap-1'>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className='text-[#FFD700]'>★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Transformation 3 */}
          <div className='bg-[#F5F0EC] rounded-3xl overflow-hidden group hover:shadow-2xl transition-all'>
            <div className='relative h-64 overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&auto=format&fit=crop'
                alt='Maria transformation'
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
              <div className='absolute bottom-4 left-4 text-white'>
                <p className='text-2xl font-bold'>-45 lbs</p>
                <p className='text-sm'>in 5 months</p>
              </div>
            </div>
            <div className='p-4'>
              <p className='font-semibold text-lg mb-2'>Maria L., 35</p>
              <p className='text-[#6B6B6B] mb-4'>
                "The support from the Enhance.MD team made all the difference. This isn't just medication - 
                it's a complete program that actually addresses why I was struggling."
              </p>
              <div className='flex items-center gap-1'>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className='text-[#FFD700]'>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='text-center mt-8'>
          <p className='text-[#6B6B6B] mb-4'>Join over 2,847 patients who've transformed their lives</p>
          <button className='bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] hover:from-[#DAA520] hover:to-[#B8860B] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl'>
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
}