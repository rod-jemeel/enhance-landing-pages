export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Lorem Ipsum Dolor</span>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mt-4 leading-tight">
              Lorem ipsum dolor
              <span className="block text-yellow-500">Sit amet consectetur.</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4 mt-8">
              <select className="bg-white border border-gray-300 rounded-lg px-6 py-3 text-gray-700 focus:outline-none focus:border-yellow-400">
                <option>Lorem ipsum dolor</option>
                <option>Consectetur adipiscing</option>
                <option>Sed do eiusmod</option>
              </select>
              <select className="bg-white border border-gray-300 rounded-lg px-6 py-3 text-gray-700 focus:outline-none focus:border-yellow-400">
                <option>Sit amet consectetur</option>
                <option>Tempor incididunt</option>
                <option>Labore et dolore</option>
              </select>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl h-96 overflow-hidden">
              <div className="absolute top-4 right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=2069&auto=format&fit=crop"
                alt="Luxury sports car"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}