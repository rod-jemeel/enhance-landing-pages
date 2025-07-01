'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-5vh']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);

  return (
    <footer ref={container} className="relative bg-gray-900 text-white pt-24 pb-16 px-6 overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">LUXEDRIVE</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>123 Lorem Ipsum St, Dolor Sit</p>
              <p>Amet, Consectetur 12345</p>
              <p className="text-yellow-400">+1 234 567 8900</p>
              <p>lorem@ipsum.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Lorem Ipsum</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Dolor Sit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consectetur</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Adipiscing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Elit Sed</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Dolor Amet</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Tempor Incididunt</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Labore Dolore</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Magna Aliqua</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enim Minim</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Lorem Contact</h4>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Lorem ipsum dolor"
                className="w-full bg-gray-800 px-4 py-2 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 rounded-lg font-medium transition-colors">
                Lorem Ipsum
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Lorem Ipsum. Dolor sit amet consectetur.</p>
        </div>
      </motion.div>
    </footer>
  );
}