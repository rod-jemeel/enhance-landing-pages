export default function CustomerServiceSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl h-96 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury car interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Lorem Ipsum</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Lorem Ipsum
              <span className="block">Dolor Sit Amet</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors">
              Lorem Ipsum Dolor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}