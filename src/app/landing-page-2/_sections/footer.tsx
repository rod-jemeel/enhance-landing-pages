'use client';

export default function Footer() {
  return (
    <footer className='group bg-[#3D3D3D]'>
      <h1 className='text-[16vw] group-hover:translate-y-4 translate-y-20 leading-[100%] uppercase font-bold text-center bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] bg-clip-text text-transparent transition-all ease-linear'>
        ADVANCED
      </h1>
      <section className='bg-[#2D2D2D] h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full text-white'>
        <p className='text-center'>
          <span className='bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] bg-clip-text text-transparent font-bold'>
            Enhance.MD
          </span>
          {' '}• Advanced GLP-1 Provider Led Program
        </p>
        <p className='text-sm text-[#B39B8A] text-center mt-2'>
          © 2024 Enhance.MD. All rights reserved.
        </p>
      </section>
    </footer>
  );
}