export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">LUXEDRIVE</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Lorem Ipsum</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Dolor Sit</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Consectetur</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Adipiscing</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Elit Sed</a>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-medium transition-colors">
            Contact Lorem
          </button>
        </nav>
      </div>
    </header>
  );
}