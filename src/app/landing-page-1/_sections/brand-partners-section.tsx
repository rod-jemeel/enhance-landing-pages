export default function BrandPartnersSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-500 uppercase tracking-wider">Lorem Ipsum</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-4">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-8 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="text-gray-400">
                <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors">
            Lorem Ipsum Dolor
          </button>
        </div>
      </div>
    </section>
  );
}