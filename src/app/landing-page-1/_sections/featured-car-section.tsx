export default function FeaturedCarSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-500 uppercase tracking-wider">Lorem Ipsum Dolor</span>
          <h2 className="text-8xl font-bold text-gray-200 mt-4">PREMIUM</h2>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="relative rounded-xl h-64 overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop"
              alt="Premium luxury car"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">LOREM IPSUM MODEL X</h3>
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div>
                <span className="text-3xl font-bold text-yellow-500">450</span>
                <p className="text-gray-600 text-sm">Lorem Ipsum</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-yellow-500">280</span>
                <p className="text-gray-600 text-sm">Dolor Sit</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-yellow-500">2024</span>
                <p className="text-gray-600 text-sm">Consectetur</p>
              </div>
            </div>
            <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors">
              Lorem Ipsum Dolor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}