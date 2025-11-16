import React from 'react'
import NavBar from '@/components/nav/NavBar'
import Footer from '@/components/ui/Footer'
import DoodleBg from '@/components/ui/DoodleBg'

const SponsorPage = () => {
  return (
    <main>
      <NavBar />

      <div className="min-h-screen relative">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4 bg-[#f8d8d9] grid place-items-center m-10 h-[90vh]  rounded-4xl">
          <DoodleBg />
          <div className="general-space mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-black">
              Sponsorship Opportunities
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Join DevFest Abeokuta 2025 and be part of the most exciting tech event in the region
            </p>
          </div>
        </section>

        {/* Why Sponsor Section */}
        <section className="py-16 sm:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">Why Sponsor DevFest Abeokuta?</h2>
              <p className="text-base sm:text-lg text-gray-700">Partner with us and unlock incredible opportunities</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
              <div className="bg-white rounded-xl border-2 border-black p-6 shadow-lg">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Brand Visibility</h3>
                <p className="text-gray-700">
                  Reach 500+ developers, tech leaders, and innovators. Get your brand featured across all event materials and social media channels.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-black p-6 shadow-lg">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Talent Acquisition</h3>
                <p className="text-gray-700">
                  Connect with top-tier developers actively seeking opportunities. Host recruitment sessions and build your talent pipeline.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-black p-6 shadow-lg">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Innovation Showcase</h3>
                <p className="text-gray-700">
                  Demonstrate your latest technologies, products, and solutions to an engaged audience of tech enthusiasts and decision-makers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorship Packages */}
        <section className="py-16 sm:py-20 px-4 bg-[#f8d8d9]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">Sponsorship Packages</h2>
              <p className="text-base sm:text-lg text-gray-700">Choose the package that best fits your goals</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
              {/* Bronze Package */}
              <div className="bg-white rounded-xl border-2 border-black overflow-hidden shadow-lg">
                <div className="bg-black px-6 py-4 text-center">
                  <h3 className="text-2xl font-bold text-white">Bronze</h3>
                  <p className="text-3xl font-bold text-white mt-2">₦50,000</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Logo on event website</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Social media mention</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>2 complimentary event tickets</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Digital thank you post</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Silver Package */}
              <div className="bg-white rounded-xl border-2 border-black overflow-hidden shadow-lg relative transform scale-105">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold border-2 border-black">POPULAR</span>
                </div>
                <div className="bg-black px-6 py-4 text-center">
                  <h3 className="text-2xl font-bold text-white">Silver</h3>
                  <p className="text-3xl font-bold text-white mt-2">₦150,000</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Everything in Bronze</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Exhibition booth space</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>5 complimentary event tickets</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Speaking opportunity</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Prominent logo placement</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Gold Package */}
              <div className="bg-white rounded-xl border-2 border-black overflow-hidden shadow-lg">
                <div className="bg-black px-6 py-4 text-center">
                  <h3 className="text-2xl font-bold text-white">Gold</h3>
                  <p className="text-3xl font-bold text-white mt-2">₦300,000</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Everything in Silver</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Premium booth location</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>10 complimentary event tickets</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Keynote speaking opportunity</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Branded swag inclusion</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Dedicated session sponsorship</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-black p-8 md:p-12 text-center shadow-lg">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">Ready to Become a Sponsor?</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can create a partnership that benefits both our communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:sponsors@devfestabeokuta.com?subject=Sponsorship Inquiry"
                  className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-black text-white rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <a
                  href="tel:+2341234567890"
                  className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white border-2 border-black text-black rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}

export default SponsorPage