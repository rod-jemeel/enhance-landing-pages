"use client"

import { useState } from "react"

type LayoutVariant = "classic" | "split-vertical" | "diagonal" | "offset-grid" | "minimal-cards" | "asymmetric" | "minimal-contrast"

export default function DifferentiatorSection() {
  const [layout, setLayout] = useState<LayoutVariant>("classic")

  const renderLayout = () => {
    switch (layout) {
      case "classic":
        return (
    <section className="py-24 px-8 md:px-16 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 max-w-4xl mx-auto leading-tight" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Stop Blaming Your Willpower. Start Targeting Your Biology.
          </h2>
          <p className="mt-4 text-lg text-gray-600" style={{ fontFamily: "Nouvelle Grotesk" }}>
            The difference between failure and transformation is science.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* The Old Way */}
          <div className="rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border" style={{ backgroundColor: '#f1f0ed', borderColor: '#67645e20' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                <span className="text-2xl">❌</span>
              </div>
              <h3 className="ml-4 text-xl font-medium" style={{ fontFamily: "Nouvelle Grotesk", color: '#67645e' }}>
                The Old Way: Diet Culture
              </h3>
            </div>
            <ul className="space-y-3" style={{ color: '#67645e' }}>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Constant hunger and cravings</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Counting every calorie obsessively</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Temporary results that never last</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Fighting your body's natural signals</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>The inevitable weight regain</span>
              </li>
            </ul>
          </div>

          {/* The New Way */}
          <div className="rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border" style={{ backgroundColor: '#f1f0ed', borderColor: '#67645e20' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="ml-4 text-xl font-medium" style={{ fontFamily: "Nouvelle Grotesk", color: '#67645e' }}>
                The New Way: Medical Science
              </h3>
            </div>
            <ul className="space-y-3" style={{ color: '#67645e' }}>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Natural appetite regulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Physician-guided medication</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Sustainable metabolic change</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Working with your biology</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Long-term transformation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
        )

      case "split-vertical":
        return (
          <section className="min-h-screen flex">
            {/* Left Side - Old Way */}
            <div className="w-1/2 bg-gray-900 text-white p-12 lg:p-20 flex flex-col justify-center">
              <div className="max-w-xl ml-auto mr-12">
                <h3 className="text-sm uppercase tracking-wider mb-6 opacity-60">THE OLD WAY</h3>
                <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-tight" style={{ fontFamily: "Nouvelle Grotesk" }}>
                  Diet<br />Culture
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p className="border-l-2 border-red-500 pl-4">Constant hunger and cravings</p>
                  <p className="border-l-2 border-red-500 pl-4">Counting every calorie obsessively</p>
                  <p className="border-l-2 border-red-500 pl-4">Temporary results that never last</p>
                  <p className="border-l-2 border-red-500 pl-4">Fighting your body's natural signals</p>
                  <p className="border-l-2 border-red-500 pl-4">The inevitable weight regain</p>
                </div>
              </div>
            </div>

            {/* Right Side - New Way */}
            <div className="w-1/2 bg-white p-12 lg:p-20 flex flex-col justify-center">
              <div className="max-w-xl mr-auto ml-12">
                <h3 className="text-sm uppercase tracking-wider mb-6 text-gray-500">THE NEW WAY</h3>
                <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-tight" style={{ fontFamily: "Nouvelle Grotesk" }}>
                  Medical<br />Science
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="border-l-2 border-green-500 pl-4">Natural appetite regulation</p>
                  <p className="border-l-2 border-green-500 pl-4">Physician-guided medication</p>
                  <p className="border-l-2 border-green-500 pl-4">Sustainable metabolic change</p>
                  <p className="border-l-2 border-green-500 pl-4">Working with your biology</p>
                  <p className="border-l-2 border-green-500 pl-4">Long-term transformation</p>
                </div>
              </div>
            </div>

            {/* Center Headline */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center max-w-4xl px-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight bg-white px-8 py-4 shadow-2xl" style={{ fontFamily: "Nouvelle Grotesk" }}>
                Stop Blaming Your Willpower.<br />Start Targeting Your Biology.
              </h2>
            </div>
          </section>
        )

      case "diagonal":
        return (
          <section className="relative min-h-screen overflow-hidden bg-gray-50">
            <div className="absolute inset-0">
              <div className="absolute inset-0 transform -skew-y-6 bg-gray-900 origin-top-left" style={{ height: "60%" }}></div>
            </div>
            
            <div className="relative z-10 px-8 md:px-16 lg:px-20 py-24">
              <div className="max-w-7xl mx-auto">
                {/* Headline */}
                <div className="mb-20 max-w-3xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight" style={{ fontFamily: "Nouvelle Grotesk" }}>
                    Stop Blaming Your Willpower.
                  </h2>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mt-2 leading-tight" style={{ fontFamily: "Nouvelle Grotesk" }}>
                    Start Targeting Your Biology.
                  </h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                  {/* Old Way Card */}
                  <div className="bg-white/90 backdrop-blur-sm p-8 shadow-xl transform md:-translate-y-12">
                    <div className="text-red-600 text-6xl font-light mb-4">×</div>
                    <h3 className="text-2xl font-light mb-6" style={{ fontFamily: "Nouvelle Grotesk" }}>The Old Way</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>• Constant hunger</p>
                      <p>• Calorie obsession</p>
                      <p>• Temporary results</p>
                      <p>• Fighting biology</p>
                      <p>• Weight regain</p>
                    </div>
                  </div>

                  {/* New Way Card */}
                  <div className="bg-gray-900 text-white p-8 shadow-xl transform md:translate-y-12">
                    <div className="text-green-400 text-6xl font-light mb-4">✓</div>
                    <h3 className="text-2xl font-light mb-6" style={{ fontFamily: "Nouvelle Grotesk" }}>The New Way</h3>
                    <div className="space-y-3">
                      <p>• Natural regulation</p>
                      <p>• Medical guidance</p>
                      <p>• Sustainable change</p>
                      <p>• Working with biology</p>
                      <p>• Long-term success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      case "offset-grid":
        return (
          <section className="py-24 px-8 md:px-16 lg:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-12 gap-4">
                {/* Headline - spans multiple columns */}
                <div className="col-span-12 md:col-span-7 mb-12">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-none" style={{ fontFamily: "Nouvelle Grotesk" }}>
                    Stop Blaming<br />Your Willpower.
                  </h2>
                </div>
                
                <div className="col-span-12 md:col-span-5 md:col-start-8 mb-16">
                  <p className="text-xl text-gray-600 mt-8">Start Targeting Your Biology.</p>
                  <p className="text-lg text-gray-500 mt-4">The difference between failure and transformation is science.</p>
                </div>

                {/* Old Way - offset positioning */}
                <div className="col-span-12 md:col-span-5">
                  <div className="bg-gray-100 p-8">
                    <h3 className="text-3xl font-light mb-8" style={{ fontFamily: "Nouvelle Grotesk" }}>Diet Culture</h3>
                    <div className="space-y-2">
                      {["Hunger", "Obsession", "Temporary", "Fighting", "Regain"].map((item, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 mr-4"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for offset */}
                <div className="col-span-12 md:col-span-2"></div>

                {/* New Way - offset positioning */}
                <div className="col-span-12 md:col-span-5">
                  <div className="bg-gray-900 text-white p-8 md:-mt-20">
                    <h3 className="text-3xl font-light mb-8" style={{ fontFamily: "Nouvelle Grotesk" }}>Medical Science</h3>
                    <div className="space-y-2">
                      {["Regulation", "Guidance", "Sustainable", "Biology", "Success"].map((item, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 mr-4"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      case "minimal-cards":
        return (
          <section className="min-h-screen flex items-center py-16 px-8 md:px-16 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto w-full">
              {/* Minimal headline */}
              <div className="mb-12 md:mb-16">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight" style={{ 
                  fontFamily: "Nouvelle Grotesk",
                  letterSpacing: "-0.04em"
                }}>
                  STOP.<br />START.
                </h2>
                <p className="text-lg md:text-xl text-gray-500 mt-4 md:mt-6 max-w-md">
                  The difference between failure and transformation is science.
                </p>
              </div>

              {/* Minimal cards */}
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 max-w-5xl">
                {/* Old Way */}
                <div>
                  <div className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-200 mb-4">01</div>
                  <h3 className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-2">STOP</h3>
                  <h4 className="text-xl md:text-2xl font-light mb-4 md:mb-6">Diet Culture</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>— Constant hunger</p>
                    <p>— Calorie obsession</p>
                    <p>— Temporary results</p>
                    <p>— Fighting biology</p>
                    <p>— Weight regain</p>
                  </div>
                </div>

                {/* New Way */}
                <div>
                  <div className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-200 mb-4">02</div>
                  <h3 className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-2">START</h3>
                  <h4 className="text-xl md:text-2xl font-light mb-4 md:mb-6">Medical Science</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>— Natural regulation</p>
                    <p>— Medical guidance</p>
                    <p>— Sustainable change</p>
                    <p>— Working with biology</p>
                    <p>— Long-term success</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      case "asymmetric":
        return (
          <section className="py-24 px-8 md:px-16 lg:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-12 gap-8">
                {/* Large headline on left */}
                <div className="col-span-12 lg:col-span-4">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight sticky top-24" style={{ 
                    fontFamily: "Nouvelle Grotesk",
                    writingMode: "vertical-rl",
                    textOrientation: "mixed"
                  }}>
                    TRANSFORM
                  </h2>
                </div>

                {/* Content on right */}
                <div className="col-span-12 lg:col-span-8">
                  <div className="mb-16">
                    <h3 className="text-3xl md:text-4xl font-light mb-4">Stop Blaming Your Willpower.</h3>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-500">Start Targeting Your Biology.</h3>
                  </div>

                  <div className="space-y-16">
                    {/* Old Way */}
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-2 text-right">
                        <div className="text-4xl text-red-500">×</div>
                      </div>
                      <div className="col-span-10">
                        <h4 className="text-xl font-medium mb-4">The Old Way: Diet Culture</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <p>Constant hunger</p>
                          <p>Calorie obsession</p>
                          <p>Temporary results</p>
                          <p>Fighting biology</p>
                          <p>Weight regain</p>
                          <p>Endless cycle</p>
                        </div>
                      </div>
                    </div>

                    {/* New Way */}
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-2 text-right">
                        <div className="text-4xl text-green-500">✓</div>
                      </div>
                      <div className="col-span-10">
                        <h4 className="text-xl font-medium mb-4">The New Way: Medical Science</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <p>Natural regulation</p>
                          <p>Medical guidance</p>
                          <p>Sustainable change</p>
                          <p>Working with biology</p>
                          <p>Long-term success</p>
                          <p>Real transformation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      case "minimal-contrast":
        return (
          <section className="min-h-screen flex items-center bg-gray-50">
            <div className="w-full">
              {/* Main content grid */}
              <div className="grid md:grid-cols-2">
                {/* Left - STOP */}
                <div className="bg-white p-12 md:p-16 lg:p-20 flex flex-col justify-center min-h-[50vh] md:min-h-screen">
                  <div className="max-w-md">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8" style={{ 
                      fontFamily: "Nouvelle Grotesk",
                      letterSpacing: "-0.03em"
                    }}>
                      STOP
                    </h2>
                    <div className="space-y-3">
                      <p className="text-lg font-light text-gray-900">Diet Culture</p>
                      <div className="space-y-2 text-sm text-gray-600 pl-4 border-l-2 border-gray-200">
                        <p>Constant hunger</p>
                        <p>Calorie obsession</p>
                        <p>Temporary results</p>
                        <p>Fighting biology</p>
                        <p>Weight regain</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - START */}
                <div className="bg-gray-900 text-white p-12 md:p-16 lg:p-20 flex flex-col justify-center min-h-[50vh] md:min-h-screen">
                  <div className="max-w-md">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8" style={{ 
                      fontFamily: "Nouvelle Grotesk",
                      letterSpacing: "-0.03em"
                    }}>
                      START
                    </h2>
                    <div className="space-y-3">
                      <p className="text-lg font-light">Medical Science</p>
                      <div className="space-y-2 text-sm text-gray-400 pl-4 border-l-2 border-gray-700">
                        <p>Natural regulation</p>
                        <p>Medical guidance</p>
                        <p>Sustainable change</p>
                        <p>Working with biology</p>
                        <p>Long-term success</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating headline */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-sm px-8 py-6 shadow-2xl max-w-2xl text-center">
                  <p className="text-2xl md:text-3xl font-light leading-tight" style={{ fontFamily: "Nouvelle Grotesk" }}>
                    Stop Blaming Your Willpower.<br />
                    Start Targeting Your Biology.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )

      default:
        return null
    }
  }

  return (
    <div className="relative">
      {/* Debug Selector */}
      <div className="fixed bottom-4 right-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-2">
        <select 
          value={layout} 
          onChange={(e) => setLayout(e.target.value as LayoutVariant)}
          className="bg-transparent text-white text-sm border border-white/20 rounded px-2 py-1"
        >
          <option value="classic" className="bg-black">Classic Cards</option>
          <option value="split-vertical" className="bg-black">Split Vertical</option>
          <option value="diagonal" className="bg-black">Diagonal Split</option>
          <option value="offset-grid" className="bg-black">Offset Grid</option>
          <option value="minimal-cards" className="bg-black">Minimal Cards</option>
          <option value="asymmetric" className="bg-black">Asymmetric</option>
          <option value="minimal-contrast" className="bg-black">Minimal Contrast</option>
        </select>
      </div>
      {renderLayout()}
    </div>
  )
}