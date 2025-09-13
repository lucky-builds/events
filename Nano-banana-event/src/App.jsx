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
                    <p className="text-base text-gray-600">Saturday, September 14, 2025</p>
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
                    <p className="text-base text-gray-600">Virtual Workshop via www.gmeet.com/meet1234</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl mt-1">👨‍🏫</span>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">Expert Facilitator</p>
                    <p className="text-base text-gray-600">Leading Faculty Member from IIM Ahmedabad (AI Specialist)</p>
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
              
              <div className="text-center space-y-4">
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
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">Network with fellow AI enthusiasts</p>
                  <a
                    href="https://chat.whatsapp.com/GY8UrD1PyLgJspRgKdg8Zu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-base font-bold transition-all duration-300 shadow-lg w-full block text-center flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span className="flex-1 text-center">Join Chai & ChatGPT WhatsApp Community (1500+ members & growing)</span>
                  </a>
                </div>
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
                        <p className="text-gray-600">Saturday, September 14, 2025</p>
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
                        <p className="text-gray-600">Leading Faculty Member from IIM Ahmedabad (AI Specialist)</p>
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
                  
                  <div className="text-center">
                    <p className="text-base text-gray-600 mb-4">Network with fellow AI enthusiasts</p>
                    <a
                      href="https://chat.whatsapp.com/GY8UrD1PyLgJspRgKdg8Zu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-lg w-full sm:w-auto block sm:inline-flex text-center items-center justify-center space-x-2"
                    >
                      <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      <span>Join Chai & ChatGPT WhatsApp Community (1500+ members & growing)</span>
                    </a>
                  </div>
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
              <p className="text-lg md:text-lg leading-relaxed">Insights from IIM Ahmedabad faculty with cutting-edge research knowledge</p>
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

      {/* Exclusive Bonuses */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-black prose-balance">
            🎁 Exclusive Bonuses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 max-w-4xl mx-auto">
            {[
              { icon: '🔗', title: 'Community Access', desc: 'Exclusive community resources and networking' },
              { icon: '💬', title: 'Direct Access', desc: 'Direct access to facilitator for follow-up' }
            ].map((bonus, index) => (
              <div key={index} className="bg-white/95 rounded-2xl p-6 md:p-6 text-center hover:scale-105 transition-transform duration-300 backdrop-blur-sm shadow-lg">
                <div className="text-5xl md:text-4xl mb-4 md:mb-4">{bonus.icon}</div>
                <h4 className="text-lg md:text-lg font-bold text-gray-800 mb-3">{bonus.title}</h4>
                <p className="text-sm md:text-sm text-gray-600">{bonus.desc}</p>
              </div>
            ))}
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
              
              <div className="text-center">
                <p className="text-lg md:text-xl text-white/90 mb-4">Connect with fellow AI enthusiasts</p>
                <a
                  href="https://chat.whatsapp.com/GY8UrD1PyLgJspRgKdg8Zu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold transition-all duration-300 shadow-lg w-full sm:w-auto flex items-center justify-center space-x-2 sm:inline-flex"
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Join Chai & ChatGPT WhatsApp Community</span>
                </a>
              </div>
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