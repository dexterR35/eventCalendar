export default function Steps() {
  const steps = [
    {
      number: 1,
      icon: "🎁",
      title: "Open Daily Card",
      description: "Click on today's card to reveal your exclusive bonus offer",
    },
    {
      number: 2,
      icon: "🎴",
      title: "Get Promo Code",
      description: "Receive your unique promo code for exclusive casino bonuses",
    },
    {
      number: 3,
      icon: "🎰",
      title: "Claim Bonus",
      description: 'Click "Claim Bonus" to use your code and enjoy the rewards',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-20 sm:mt-24 mb-16 sm:mb-20 px-4 sm:px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="text-3xl animate-pulse">✨</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
              fontWeight: 800,
              textShadow: "0 4px 20px rgba(235, 39, 67, 0.4)",
            }}
          >
            How It Works
          </h2>
          <span className="text-3xl animate-pulse delay-500">✨</span>
        </div>
        <div className="relative inline-block">
          <div className="h-1.5 bg-gradient-to-r from-transparent via-red-400/80 to-transparent rounded-full w-40 mx-auto mb-2"></div>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full w-32 mx-auto"></div>
        </div>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop Only) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-red-400/50 to-red-500/30 rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative z-10">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div
                className="relative bg-gradient-to-br from-gray-700/30 via-gray-600/25 to-gray-700/30 backdrop-blur-md rounded-3xl p-8 sm:p-10 border-2 border-gray-500/40 shadow-2xl hover:shadow-gray-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 card-hover-lift"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(42, 45, 58, 0.4) 0%, rgba(31, 34, 48, 0.35) 50%, rgba(37, 40, 54, 0.4) 100%)",
                  boxShadow:
                    "0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                  maxHeight: "300px",
                }}
              >
                {/* Step Number Badge */}
                <div
                  className="absolute -top-4 -left-4 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black text-white transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg, #d11e3a 0%, #eb2743 50%, #c91a35 100%)",
                    boxShadow: "0 8px 24px rgba(235, 39, 67, 0.5), 0 4px 12px rgba(235, 39, 67, 0.3)",
                  }}
                >
                  <span className="relative z-10">{step.number}</span>
                </div>

                <div className="text-center mt-6 relative z-10">
                  <div className="relative inline-block mb-6">
                    <div className="text-5xl sm:text-6xl mb-2 transform group-hover:scale-110 transition-transform duration-500">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce">
                      ✨
                    </div>
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-red-200 transition-colors duration-300"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-base sm:text-lg text-white/90 leading-relaxed font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  🎄
                </div>
                <div className="absolute top-4 right-4 text-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  ❄
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

