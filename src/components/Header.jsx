import { monthNames, getCurrentDate } from '../utils/calendar';

export default function Header() {
  const today = getCurrentDate();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const currentMonthName = monthNames[currentMonth];

  return (
    <div className="text-center mb-12">
      <div className="inline-block mb-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
          <span className="text-4xl sm:text-5xl animate-bounce">🎄</span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 relative text-white"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
              fontWeight: 800,
            }}
          >
            #Promo Christmas
          </h1>
          <span className="text-4xl sm:text-5xl animate-bounce delay-500">
            🎁
          </span>
        </div>
        <div className="relative">
          <div className="h-1.5 bg-gradient-to-r from-transparent via-red-400/60 to-transparent rounded-full mb-2"></div>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 flex gap-2">
            <span className="text-xs opacity-60">✨</span>
            <span className="text-xs opacity-80">❄</span>
            <span className="text-xs opacity-60">✨</span>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-sm sm:text-base animate-pulse">✨</span>
          <p
            className="text-lg sm:text-xl md:text-2xl font-bold text-white/90 uppercase tracking-widest"
            style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
          >
            Daily Casino Bonuses
          </p>
          <span className="text-sm sm:text-base animate-pulse delay-500">
            ✨
          </span>
        </div>
        <p
          id="subtitle"
          className="text-sm sm:text-base text-white/70 font-medium mb-4"
        >
          Discover exclusive casino bonuses every day in {currentMonthName}! 🎁
        </p>
      </div>
      <div
        id="dateInfo"
        className="inline-flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-2xl border-2 shadow-xl relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(235, 39, 67, 0.9) 0%, rgba(209, 30, 58, 0.9) 100%)",
          borderColor: "rgba(255, 255, 255, 0.3)",
          boxShadow:
            "0 8px 25px rgba(235, 39, 67, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
        <div className="relative flex items-center gap-2 sm:gap-3">
          <span className="text-lg sm:text-xl">🎄</span>
          <span className="text-white text-sm sm:text-base font-bold uppercase tracking-wider">
            Today:
          </span>
          <span
            id="currentDate"
            className="text-white font-black text-base sm:text-lg md:text-xl"
            style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}
          >
            {currentMonthName} {currentDay}, {currentYear}
          </span>
          <span className="text-lg sm:text-xl">🎁</span>
        </div>
      </div>
    </div>
  );
}

