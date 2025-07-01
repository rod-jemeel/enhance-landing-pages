export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex items-start gap-8">
          <div className="hidden lg:block">
            <span className="text-8xl font-bold text-gray-100">001</span>
          </div>
          <div className="max-w-4xl">
            <span className="text-sm text-gray-500 uppercase tracking-wider">Lorem Ipsum</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}