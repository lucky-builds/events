import './App.css'
import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'

function App() {
  const [isJoinEnabled, setIsJoinEnabled] = useState(false)
  const [timeUntilJoin, setTimeUntilJoin] = useState('')

  // Target time: 3:45 PM IST on September 14, 2025
  const targetDateTime = new Date('2025-09-14T15:45:00+05:30') // IST timezone

  useEffect(() => {
    const checkTime = () => {
      const now = new Date()
      const timeDiff = targetDateTime.getTime() - now.getTime()
      
      if (timeDiff <= 0) {
        setIsJoinEnabled(true)
        setTimeUntilJoin('')
      } else {
        setIsJoinEnabled(false)
        // Calculate time remaining
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
        
        if (days > 0) {
          setTimeUntilJoin(`${days}d ${hours}h ${minutes}m`)
        } else if (hours > 0) {
          setTimeUntilJoin(`${hours}h ${minutes}m ${seconds}s`)
        } else {
          setTimeUntilJoin(`${minutes}m ${seconds}s`)
        }
      }
    }

    // Check immediately
    checkTime()
    
    // Update every second
    const interval = setInterval(checkTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 container-safe">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="lg:hidden py-12 px-4">
            {/* Mobile Header - Relaxed and Spacious */}
            <div className="text-center mb-10">
              <div className="mb-6">
                <span className="text-8xl drop-shadow-lg">🍌</span>
              </div>
              <h1 className="text-5xl font-black mb-4 text-black drop-shadow-2xl prose-balance leading-tight">
                GEMINI IMAGINE
              </h1>
              <h2 className="text-3xl font-bold text-black mb-4 drop-shadow-lg prose-balance leading-tight">
                MASTERY WORKSHOP
              </h2>
              <p className="text-xl text-black/80 mb-6 drop-shadow-md prose-pretty break-words leading-relaxed">
                Master Google's Revolutionary Image Generation Model
              </p>
            </div>

            {/* Mobile Workshop Details */}
            <div className="bg-white/95 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">📅</span>
                <h3 className="text-2xl font-bold text-gray-800">Workshop Details</h3>
              </div>
              
              <div className="space-y-5 mb-6">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl mt-1">🗓️</span>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">Date</p>
                    <p className="text-base text-gray-600">Sunday, September 14, 2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl mt-1">⏰</span>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">Time</p>
                    <p className="text-base text-gray-600">4:00 PM - 6:00 PM (2-hour intensive session)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl mt-1">🌐</span>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">Venue</p>
                    <p className="text-base text-gray-600">Virtual Workshop</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl mt-1">👨‍🏫</span>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">Expert Facilitator</p>
                    <p className="text-base text-gray-600">Leading B-School Visiting Faculty & AI Industry Professional</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-5 text-white mb-6">
                <h4 className="text-xl font-bold mb-4">Why This Workshop Matters</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-200 text-lg">•</span>
                    <span>Ranked #1 on LMArena benchmarks for image editing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-200 text-lg">•</span>
                    <span>Going viral across social platforms with jaw-dropping results</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-200 text-lg">•</span>
                    <span>Called "the top-rated image editing model in the world"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-200 text-lg">•</span>
                    <span>Integrated seamlessly into Google's Gemini ecosystem</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                {isJoinEnabled ? (
                  <a
                    href="https://www.gmeet.com/meet1234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg w-full block text-center"
                  >
                    JOIN NOW
                  </a>
                ) : (
                  <div className="bg-gray-400 text-gray-600 px-8 py-4 rounded-full text-lg font-bold w-full block text-center cursor-not-allowed">
                    Join at 4 PM
                    {timeUntilJoin && (
                      <div className="text-sm mt-1">
                        Opens in: {timeUntilJoin}
                      </div>
                    )}
                  </div>
                )}
                
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block min-h-screen flex items-center py-20">
            <div className="grid lg:grid-cols-[30%_70%] gap-12 items-center w-full">
              {/* Left Side - Header */}
              <div className="text-center lg:text-left">
                <div className="mb-8">
                  <span className="text-8xl drop-shadow-lg">🍌</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 text-black drop-shadow-2xl prose-balance">
                  GEMINI IMAGINE
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 drop-shadow-lg prose-balance">
                  MASTERY WORKSHOP
                </h2>
                <p className="text-xl md:text-2xl text-black/80 mb-8 drop-shadow-md">
                  Master Google's Revolutionary Image Generation Model
                </p>
              </div>

              {/* Right Side - Workshop Details */}
              <div className="bg-white/90 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center mb-8">
                  <span className="text-3xl mr-4">📅</span>
                  <h3 className="text-3xl font-bold text-gray-800">Workshop Details</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">🗓️</span>
                      <div>
                        <p className="text-lg font-semibold text-gray-800">Date</p>
                        <p className="text-gray-600">Sunday, September 14, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">⏰</span>
                      <div>
                        <p className="text-lg font-semibold text-gray-800">Time</p>
                        <p className="text-gray-600">4:00 PM - 6:00 PM (2-hour intensive session)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">🌐</span>
                      <div>
                        <p className="text-lg font-semibold text-gray-800">Venue</p>
                        <p className="text-gray-600 break-words">Virtual Workshop </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">👨‍🏫</span>
                      <div>
                        <p className="text-lg font-semibold text-gray-800">Expert Facilitator</p>
                        <p className="text-gray-600">Leading B-School Visiting Faculty & AI Industry Professional</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white">
                    <h4 className="text-2xl font-bold mb-4">Why This Workshop Matters</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <span className="text-yellow-200">•</span>
                        <span>Ranked #1 on LMArena benchmarks for image editing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-yellow-200">•</span>
                        <span>Going viral across social platforms with jaw-dropping results</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-yellow-200">•</span>
                        <span>Called "the top-rated image editing model in the world"</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-yellow-200">•</span>
                        <span>Integrated seamlessly into Google's Gemini ecosystem</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center space-y-6">
                  {isJoinEnabled ? (
                    <a
                      href="https://www.gmeet.com/meet1234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full text-xl font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg w-full sm:w-auto block sm:inline-block text-center"
                    >
                      JOIN NOW
                    </a>
                  ) : (
                    <div className="bg-gray-400 text-gray-600 px-8 py-4 rounded-full text-xl font-bold w-full sm:w-auto block sm:inline-block text-center cursor-not-allowed">
                      Join at 4 PM
                      {timeUntilJoin && (
                        <div className="text-base mt-1">
                          Opens in: {timeUntilJoin}
                        </div>
                      )}
                    </div>
                  )}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Master */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-black prose-balance">
            🎯 What You'll Master
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white/95 rounded-3xl p-6 md:p-6 text-center backdrop-blur-sm shadow-lg">
              <div className="text-5xl md:text-4xl mb-4 md:mb-4">🖼️</div>
              <h4 className="text-xl md:text-xl font-bold text-gray-800">Advanced Image Editing</h4>
            </div>
            <div className="bg-white/95 rounded-3xl p-6 md:p-6 text-center backdrop-blur-sm shadow-lg">
              <div className="text-5xl md:text-4xl mb-4 md:mb-4">🎨</div>
              <h4 className="text-xl md:text-xl font-bold text-gray-800">Creative Applications</h4>
            </div>
            <div className="bg-white/95 rounded-3xl p-6 md:p-6 text-center backdrop-blur-sm shadow-lg">
              <div className="text-5xl md:text-4xl mb-4 md:mb-4">⚡</div>
              <h4 className="text-xl md:text-xl font-bold text-gray-800">Workflow Optimization</h4>
            </div>
            <div className="bg-white/95 rounded-3xl p-6 md:p-6 text-center backdrop-blur-sm shadow-lg">
              <div className="text-5xl md:text-4xl mb-4 md:mb-4">🔧</div>
              <h4 className="text-xl md:text-xl font-bold text-gray-800">Hands-On Practice</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-black prose-balance">
            🏆 Perfect For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
            {[
              'Content Creators & Digital Artists',
              'Marketing Professionals',
              'E-commerce Business Owners',
              'Social Media Managers',
              'Photography Enthusiasts',
              'AI Tool Enthusiasts'
            ].map((item, index) => (
              <div key={index} className="bg-white/95 rounded-2xl p-6 md:p-6 flex items-center space-x-4 md:space-x-4 hover:scale-105 transition-transform duration-300 backdrop-blur-sm shadow-lg">
                <span className="text-2xl md:text-2xl">✅</span>
                <span className="text-base md:text-base text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Special */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-black prose-balance">
            💡 What Makes This Special
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 md:p-8 text-black backdrop-blur-sm shadow-lg">
              <h4 className="text-2xl md:text-2xl font-bold mb-6 md:mb-6">Expert Academic Perspective</h4>
              <p className="text-lg md:text-lg leading-relaxed">Insights from IIM faculty with cutting-edge research knowledge</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-3xl p-8 md:p-8 text-black backdrop-blur-sm shadow-lg">
              <h4 className="text-2xl md:text-2xl font-bold mb-6 md:mb-6">Practical Industry Applications</h4>
              <p className="text-lg md:text-lg leading-relaxed">Real-world use cases and ROI examples from industry professionals</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl p-8 md:p-8 text-black backdrop-blur-sm shadow-lg">
              <h4 className="text-2xl md:text-2xl font-bold mb-6 md:mb-6">Latest Techniques</h4>
              <p className="text-lg md:text-lg leading-relaxed">Cutting-edge methods discovered by early adopters and beta testers</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl p-8 md:p-8 text-black backdrop-blur-sm shadow-lg">
              <h4 className="text-2xl md:text-2xl font-bold mb-6 md:mb-6">Community Learning</h4>
              <p className="text-lg md:text-lg leading-relaxed">Network with 1500+ AI enthusiasts and build lasting connections</p>
            </div>
          </div>
        </div>
      </section>



      {/* Join Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 md:p-8 lg:p-12 text-center text-white shadow-2xl backdrop-blur-sm">
            <h3 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-6 prose-balance">
              Ready to Go Bananas with AI? 🍌
            </h3>
            <p className="text-xl md:text-xl mb-8 md:mb-8 leading-relaxed">
              Don't miss out on becoming an early expert in this revolutionary technology!
            </p>
            <div className="space-y-4 md:space-y-4 mb-8 md:mb-8">
              <p className="text-lg md:text-lg">📱 <strong>Limited Seats Available</strong> - First come, first served</p>
              <p className="text-lg md:text-lg">💻 <strong>Requirements:</strong> Laptop/smartphone with internet connection</p>
              <p className="text-lg md:text-lg">🆓 <strong>Event is FREE</strong> - No registration required</p>
            </div>
            <div className="space-y-6">
              {isJoinEnabled ? (
                <a
                  href="https://www.gmeet.com/meet1234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-yellow-400 px-10 md:px-12 py-4 md:py-4 rounded-full text-xl md:text-2xl font-bold hover:bg-gray-800 transition-colors duration-300 banana-glow w-full sm:w-auto block sm:inline-block text-center"
                >
                  JOIN NOW
                </a>
              ) : (
                <div className="bg-gray-600 text-gray-300 px-10 md:px-12 py-4 md:py-4 rounded-full text-xl md:text-2xl font-bold w-full sm:w-auto block sm:inline-block text-center cursor-not-allowed">
                  Join at 4 PM
                  {timeUntilJoin && (
                    <div className="text-lg md:text-xl mt-1">
                      Opens in: {timeUntilJoin}
                    </div>
                  )}
                </div>
              )}
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/30 text-center text-black">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl mb-6 leading-relaxed">
            For questions or assistance with registration, feel free to reach out to the community moderators.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-base">
            <span>#GeminiImagine</span>
            <span>#AIWorkshop</span>
            <span>#GoogleGemini</span>
            <span>#ImageAI</span>
            <span>#CreativeAI</span>
            <span>#IIM</span>
            <span>#SkillDevelopment</span>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  )
}

export default App